import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { RefreshCw } from 'lucide-react';
import config from '../../config';
import { AdmissionsTable, UploadDocModal } from '../../components/crm/admissions/AdmissionsComponents';

export default function Admissions() {
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // State variables
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('');
  const [search, setSearch] = useState('');

  // Document Upload Modal state
  const [showDocModal, setShowDocModal] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);
  const [docForm, setDocForm] = useState({ name: 'Birth Certificate', fileUrl: config.mockDocUrl, fileType: 'PDF' });
  const [modalLoading, setModalLoading] = useState(false);

  const fetchAdmissions = useCallback(async () => {
    try {
      if (isMountedRef.current) setLoading(true);
      const queryParams = new URLSearchParams();
      if (statusFilter) queryParams.set('status', statusFilter);
      if (search) queryParams.set('search', search);

      const res = await axios.get(`/api/admissions?${queryParams.toString()}`);
      if (res.data.success && isMountedRef.current) {
        setAdmissions(res.data.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [statusFilter, search]);

  useEffect(() => {
    fetchAdmissions();
  }, [fetchAdmissions]);

  // Update Status Inline
  const handleUpdateStatus = useCallback(
    async (id, status) => {
      try {
        const res = await axios.put(`/api/admissions/${id}`, { status });
        if (res.data.success && isMountedRef.current) {
          fetchAdmissions();
        }
      } catch (err) {
        alert(err.response?.data?.message || 'Failed to update status');
      }
    },
    [fetchAdmissions]
  );

  // Update Payment Status Inline
  const handleUpdatePayment = useCallback(
    async (id, paymentStatus) => {
      try {
        const res = await axios.put(`/api/admissions/${id}`, { paymentStatus });
        if (res.data.success && isMountedRef.current) {
          fetchAdmissions();
        }
      } catch (e) {
        console.error(e);
      }
    },
    [fetchAdmissions]
  );

  // Handle Document Upload
  const handleUploadDoc = useCallback(
    async (e) => {
      e.preventDefault();
      if (!docForm.name || !docForm.fileUrl || !selectedApp) return;

      try {
        if (isMountedRef.current) setModalLoading(true);
        const res = await axios.put(`/api/admissions/${selectedApp._id}`, {
          document: docForm
        });
        if (res.data.success && isMountedRef.current) {
          setShowDocModal(false);
          setSelectedApp(null);
          setDocForm({ name: 'Birth Certificate', fileUrl: config.mockDocUrl, fileType: 'PDF' });
          fetchAdmissions();
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (isMountedRef.current) setModalLoading(false);
      }
    },
    [docForm, selectedApp, fetchAdmissions]
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800 font-sans">Applications &amp; Admissions</h2>
          <p className="text-xs text-slate-400">Track and manage student applications, documentation, and fee clearances.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={fetchAdmissions}
            aria-label="Refresh admissions"
            className="p-2 border border-gray-200 bg-white rounded-lg text-slate-500 hover:text-slate-800 cursor-pointer focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            <RefreshCw className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>

      {/* Filter and Search controls */}
      <div className="glass-card p-4 flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="adm-search" className="sr-only">
            Search Applications
          </label>
          <input
            id="adm-search"
            type="text"
            placeholder="Search by student name, parent name or app number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full glass-input text-xs"
          />
        </div>
        <div className="w-full md:w-64">
          <label htmlFor="adm-status-filter" className="sr-only">
            Filter by Status
          </label>
          <select
            id="adm-status-filter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full glass-input text-xs"
          >
            <option value="">All App Stages</option>
            <option>Application Started</option>
            <option>Application Submitted</option>
            <option>Documents Pending</option>
            <option>Verification</option>
            <option>Approved</option>
            <option>Admission Confirmed</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      {/* Applications Directory Table */}
      <div className="glass-card overflow-hidden">
        <AdmissionsTable
          loading={loading}
          admissions={admissions}
          handleUpdatePayment={handleUpdatePayment}
          handleUpdateStatus={handleUpdateStatus}
          setSelectedApp={setSelectedApp}
          setShowDocModal={setShowDocModal}
        />
      </div>

      {/* Document Upload Modal */}
      <UploadDocModal
        showDocModal={showDocModal}
        setShowDocModal={setShowDocModal}
        selectedApp={selectedApp}
        setSelectedApp={setSelectedApp}
        docForm={docForm}
        setDocForm={setDocForm}
        handleUploadDoc={handleUploadDoc}
        modalLoading={modalLoading}
      />
    </div>
  );
}
