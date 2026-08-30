import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { RefreshCw } from 'lucide-react';
import { FollowUpsTable, RescheduleModal } from '../../components/crm/followups/FollowUpsComponents';

export default function FollowUps() {
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // State variables
  const [followUps, setFollowUps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('today');

  // Reschedule Modal controls
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [selectedFollowUp, setSelectedFollowUp] = useState(null);
  const [rescheduleForm, setRescheduleForm] = useState({ date: '', time: '', notes: '' });
  const [modalLoading, setModalLoading] = useState(false);

  const fetchFollowUps = useCallback(async () => {
    try {
      if (isMountedRef.current) setLoading(true);
      const res = await axios.get(`/api/followups?filter=${filter}`);
      if (res.data.success && isMountedRef.current) {
        setFollowUps(res.data.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [filter]);

  useEffect(() => {
    fetchFollowUps();
  }, [fetchFollowUps]);

  // Handle Quick Complete
  const handleQuickComplete = useCallback(
    async (id) => {
      if (!window.confirm('Mark this follow-up as Completed?')) return;
      try {
        const res = await axios.put(`/api/followups/${id}`, { status: 'Completed' });
        if (res.data.success && isMountedRef.current) {
          fetchFollowUps();
        }
      } catch (e) {
        console.error(e);
      }
    },
    [fetchFollowUps]
  );

  // Handle Reschedule submit
  const handleRescheduleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!rescheduleForm.date || !rescheduleForm.time || !selectedFollowUp) return;

      try {
        if (isMountedRef.current) setModalLoading(true);
        const res = await axios.put(`/api/followups/${selectedFollowUp._id}`, {
          status: 'Rescheduled',
          date: rescheduleForm.date,
          time: rescheduleForm.time,
          notes: rescheduleForm.notes || 'Rescheduled follow-up'
        });
        if (res.data.success && isMountedRef.current) {
          setShowRescheduleModal(false);
          setSelectedFollowUp(null);
          setRescheduleForm({ date: '', time: '', notes: '' });
          fetchFollowUps();
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (isMountedRef.current) setModalLoading(false);
      }
    },
    [rescheduleForm, selectedFollowUp, fetchFollowUps]
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800 font-sans">Scheduled Follow-ups</h2>
          <p className="text-xs text-slate-400">Track and update active callback reminders and visits.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={fetchFollowUps}
            aria-label="Refresh follow ups"
            className="p-2 border border-gray-200 bg-white rounded-lg text-slate-500 hover:text-slate-800 cursor-pointer focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            <RefreshCw className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex border-b border-gray-200 bg-gray-50 p-1 rounded-lg gap-1.5 w-full max-w-lg">
        {[
          { key: 'today', name: "Today's" },
          { key: 'overdue', name: 'Overdue' },
          { key: 'pending', name: 'All Pending' },
          { key: 'completed', name: 'Completed' }
        ].map((tab) => (
          <button
            type="button"
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
              filter === tab.key
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-600'
                : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Main List Table */}
      <div className="glass-card overflow-hidden">
        <FollowUpsTable
          loading={loading}
          followUps={followUps}
          filter={filter}
          handleQuickComplete={handleQuickComplete}
          setSelectedFollowUp={setSelectedFollowUp}
          setShowRescheduleModal={setShowRescheduleModal}
        />
      </div>

      {/* Reschedule Modal */}
      <RescheduleModal
        showRescheduleModal={showRescheduleModal}
        setShowRescheduleModal={setShowRescheduleModal}
        selectedFollowUp={selectedFollowUp}
        setSelectedFollowUp={setSelectedFollowUp}
        rescheduleForm={rescheduleForm}
        setRescheduleForm={setRescheduleForm}
        handleRescheduleSubmit={handleRescheduleSubmit}
        modalLoading={modalLoading}
      />
    </div>
  );
}
