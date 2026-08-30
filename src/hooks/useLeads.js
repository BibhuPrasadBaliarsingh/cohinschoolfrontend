import { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import useAuth from './useAuth';

export default function useLeads() {
  const { user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // State Variables
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  // Filters State
  const [search, setSearch] = useState(() => searchParams.get('search') || '');
  const [status, setStatus] = useState(() => searchParams.get('status') || '');
  const [source, setSource] = useState('');
  const [priority, setPriority] = useState('');
  const [counsellor, setCounsellor] = useState('');
  const [classInt, setClassInt] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Dropdown Options
  const [counsellors, setCounsellors] = useState([]);
  const [settings, setSettings] = useState(null);

  // Modal Controls
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
  const [targetCounsellor, setTargetCounsellor] = useState('');

  // Form State
  const [newLeadForm, setNewLeadForm] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    alternatePhone: '',
    email: '',
    classInterested: 'Class 8',
    academicYear: '2027-2028',
    leadSource: 'Manual',
    priority: 'Medium',
    address: '',
    city: '',
    state: ''
  });

  const [formError, setFormError] = useState('');
  const [formLoading, setFormLoading] = useState(false);

  // Fetch Settings (counsellors & filters list)
  const fetchFilterOptions = useCallback(async () => {
    try {
      const [usersRes, settingsRes] = await Promise.all([
        axios.get('/api/settings/users'),
        axios.get('/api/settings')
      ]);
      if (isMountedRef.current) {
        if (usersRes.data.success) {
          setCounsellors((usersRes.data.data || []).filter((u) => u.role === 'Counsellor' && u.status === 'Active'));
        }
        if (settingsRes.data.success) {
          setSettings(settingsRes.data.data.settings);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Fetch Leads List
  const fetchLeads = useCallback(async () => {
    try {
      if (isMountedRef.current) setLoading(true);

      const queryParams = new URLSearchParams();
      queryParams.set('page', page);
      queryParams.set('limit', limit);

      if (search) queryParams.set('search', search);
      if (status) queryParams.set('status', status);
      if (source) queryParams.set('leadSource', source);
      if (priority) queryParams.set('priority', priority);
      if (counsellor) queryParams.set('assignedCounsellor', counsellor);
      if (classInt) queryParams.set('classInterested', classInt);
      if (startDate) queryParams.set('startDate', startDate);
      if (endDate) queryParams.set('endDate', endDate);

      const res = await axios.get(`/api/leads?${queryParams.toString()}`);
      if (isMountedRef.current && res.data.success) {
        setLeads(res.data.data);
        setTotal(res.data.pagination.total);
        setTotalPages(res.data.pagination.totalPages);
      }
    } catch (e) {
      console.error(e);
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [page, limit, search, status, source, priority, counsellor, classInt, startDate, endDate]);

  useEffect(() => {
    fetchFilterOptions();
  }, [fetchFilterOptions]);

  useEffect(() => {
    const qSearch = searchParams.get('search') || '';
    const qStatus = searchParams.get('status') || '';
    setSearch((prev) => (prev !== qSearch ? qSearch : prev));
    setStatus((prev) => (prev !== qStatus ? qStatus : prev));
  }, [searchParams]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  // Handle manual submit trigger
  const handleSearchSubmit = useCallback((e) => {
    e.preventDefault();
    setPage(1);
  }, []);

  // Handle Add Lead Form Submission
  const handleAddLead = useCallback(
    async (e) => {
      e.preventDefault();
      setFormError('');

      if (!newLeadForm.studentName || !newLeadForm.parentName || !newLeadForm.phone) {
        setFormError('Please fill in required fields: Student Name, Parent Name, and Phone');
        return;
      }

      try {
        if (isMountedRef.current) setFormLoading(true);
        const res = await axios.post('/api/leads', newLeadForm);
        if (res.data.success && isMountedRef.current) {
          setShowAddModal(false);
          setNewLeadForm({
            studentName: '',
            parentName: '',
            phone: '',
            alternatePhone: '',
            email: '',
            classInterested: 'Class 8',
            academicYear: '2027-2028',
            leadSource: 'Manual',
            priority: 'Medium',
            address: '',
            city: '',
            state: ''
          });
          setPage(1);
          fetchLeads();
        }
      } catch (err) {
        if (isMountedRef.current) {
          setFormError(err.response?.data?.message || 'Failed to create lead');
        }
      } finally {
        if (isMountedRef.current) setFormLoading(false);
      }
    },
    [newLeadForm, fetchLeads]
  );

  // Handle Counsellor Assignment Submit
  const handleAssignSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!targetCounsellor || !selectedLead) return;

      try {
        const res = await axios.post(`/api/leads/${selectedLead._id}/assign`, {
          counsellorId: targetCounsellor
        });
        if (res.data.success && isMountedRef.current) {
          setShowAssignModal(false);
          setSelectedLead(null);
          setTargetCounsellor('');
          fetchLeads();
        }
      } catch (e) {
        console.error(e);
      }
    },
    [targetCounsellor, selectedLead, fetchLeads]
  );

  // Handle Lead Deletion
  const handleDeleteLead = useCallback(
    async (id, name) => {
      if (!window.confirm(`Are you sure you want to permanently delete lead: ${name}?`)) return;

      try {
        const res = await axios.delete(`/api/leads/${id}`);
        if (res.data.success && isMountedRef.current) {
          fetchLeads();
        }
      } catch (e) {
        console.error(e);
      }
    },
    [fetchLeads]
  );

  // Clear all filters
  const resetFilters = useCallback(() => {
    setSearch('');
    setStatus('');
    setSource('');
    setPriority('');
    setCounsellor('');
    setClassInt('');
    setStartDate('');
    setEndDate('');
    setSearchParams({});
    setPage(1);
  }, [setSearchParams]);

  return {
    user,
    leads,
    loading,
    total,
    page,
    limit,
    totalPages,
    search,
    setSearch,
    status,
    setStatus,
    source,
    setSource,
    priority,
    setPriority,
    counsellor,
    setCounsellor,
    classInt,
    setClassInt,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    counsellors,
    settings,
    showAddModal,
    setShowAddModal,
    showAssignModal,
    setShowAssignModal,
    selectedLead,
    setSelectedLead,
    targetCounsellor,
    setTargetCounsellor,
    newLeadForm,
    setNewLeadForm,
    formError,
    formLoading,
    handleSearchSubmit,
    handleAddLead,
    handleAssignSubmit,
    handleDeleteLead,
    resetFilters,
    setPage
  };
}
