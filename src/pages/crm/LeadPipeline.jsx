import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { Search, Loader2, RefreshCw } from 'lucide-react';
import { PipelineColumn } from '../../components/crm/leadpipeline/LeadPipelineComponents';

const pipelineStatuses = [
  'New',
  'Contacted',
  'Interested',
  'Follow-up',
  'Visit Scheduled',
  'Application Started',
  'Application Submitted',
  'Admission Confirmed'
];

export default function LeadPipeline() {
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [draggingId, setDraggingId] = useState(null);

  // Fetch Leads for Pipeline (non-paginated)
  const fetchPipelineLeads = useCallback(async () => {
    try {
      if (isMountedRef.current) setLoading(true);
      const res = await axios.get('/api/leads?limit=100');
      if (res.data.success && isMountedRef.current) {
        setLeads(res.data.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    fetchPipelineLeads();
  }, [fetchPipelineLeads]);

  // HTML5 Drag and Drop Handlers
  const handleDragStart = useCallback((e, id) => {
    e.dataTransfer.setData('text/plain', id);
    setDraggingId(id);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback(
    async (e, targetStatus) => {
      e.preventDefault();
      const id = e.dataTransfer.getData('text/plain') || draggingId;
      if (!id) return;

      const leadToUpdate = leads.find((l) => l._id === id);
      if (!leadToUpdate || leadToUpdate.status === targetStatus) return;

      const oldStatus = leadToUpdate.status;

      // Optimistic UI Update
      setLeads((prev) => prev.map((l) => (l._id === id ? { ...l, status: targetStatus } : l)));
      setDraggingId(null);

      try {
        const res = await axios.put(`/api/leads/${id}`, { status: targetStatus });
        if (!res.data.success && isMountedRef.current) {
          setLeads((prev) => prev.map((l) => (l._id === id ? { ...l, status: oldStatus } : l)));
        }
      } catch (err) {
        console.error('Failed to update status:', err);
        if (isMountedRef.current) {
          setLeads((prev) => prev.map((l) => (l._id === id ? { ...l, status: oldStatus } : l)));
        }
      }
    },
    [draggingId, leads]
  );

  // Filter leads based on Search input
  const filteredLeads = leads.filter((lead) => {
    const searchString = search.toLowerCase();
    return (
      lead.studentName.toLowerCase().includes(searchString) ||
      lead.leadId.toLowerCase().includes(searchString) ||
      (lead.phone && lead.phone.includes(searchString)) ||
      (lead.parentName && lead.parentName.toLowerCase().includes(searchString))
    );
  });

  const getLeadsByStatus = (status) => {
    return filteredLeads.filter((l) => l.status === status);
  };

  return (
    <div className="space-y-6 flex flex-col h-[calc(100vh-100px)] overflow-hidden animate-fade-in">
      {/* Board Header controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 flex-shrink-0">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Lead Pipeline Board</h2>
          <p className="text-xs text-slate-400">Drag and drop enquiry cards to advance lead status stages.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 pointer-events-none" />
            <input
              type="text"
              aria-label="Filter board cards"
              placeholder="Filter board cards..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 glass-input text-xs w-48 focus:w-64 transition-all duration-300 py-1.5"
            />
          </div>
          <button
            type="button"
            onClick={fetchPipelineLeads}
            aria-label="Refresh Board"
            title="Refresh Board"
            className="p-2 border border-gray-200 bg-white rounded-lg text-slate-500 hover:text-slate-800 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Kanban Scrollable Area */}
      {loading && leads.length === 0 ? (
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-brand-500" />
        </div>
      ) : (
        <div className="flex-1 overflow-x-auto pb-4 flex items-start gap-4 h-full">
          {pipelineStatuses.map((status) => (
            <PipelineColumn
              key={status}
              status={status}
              columnLeads={getLeadsByStatus(status)}
              draggingId={draggingId}
              handleDragStart={handleDragStart}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
            />
          ))}
        </div>
      )}
    </div>
  );
}
