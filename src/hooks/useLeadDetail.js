import { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

export default function useLeadDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // State Variables
  const [lead, setLead] = useState(null);
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('notes'); // notes, calls, followups

  // Form States
  const [noteContent, setNoteContent] = useState('');
  const [callForm, setCallForm] = useState({ outcome: 'Connected', duration: '', summary: '' });
  const [followUpForm, setFollowUpForm] = useState({ date: '', time: '', type: 'Call', notes: '' });

  const [actionLoading, setActionLoading] = useState(false);
  const [settings, setSettings] = useState(null);

  const fetchLeadDetails = useCallback(async () => {
    if (!id) return;
    try {
      if (isMountedRef.current) setLoading(true);
      const [leadRes, settingsRes] = await Promise.all([
        axios.get(`/api/leads/${id}`),
        axios.get('/api/settings')
      ]);

      if (isMountedRef.current) {
        if (leadRes.data.success) {
          setLead(leadRes.data.data.lead);
          setTimeline(leadRes.data.data.timeline || []);
        }
        if (settingsRes.data.success) {
          setSettings(settingsRes.data.data.settings);
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [id]);

  useEffect(() => {
    fetchLeadDetails();
  }, [fetchLeadDetails]);

  // Handle lead status updates via stepper clicks or drop selection
  const handleStatusChange = useCallback(
    async (newStatus) => {
      if (!lead || newStatus === lead.status) return;

      try {
        const res = await axios.put(`/api/leads/${id}`, { status: newStatus });
        if (res.data.success && isMountedRef.current) {
          fetchLeadDetails();
        }
      } catch (e) {
        console.error('Failed to change status:', e);
      }
    },
    [id, lead, fetchLeadDetails]
  );

  // Submit Note Activity
  const handleAddNote = useCallback(
    async (e) => {
      e.preventDefault();
      if (!noteContent.trim()) return;

      try {
        if (isMountedRef.current) setActionLoading(true);
        const res = await axios.post(`/api/leads/${id}/notes`, { content: noteContent });
        if (res.data.success && isMountedRef.current) {
          setNoteContent('');
          fetchLeadDetails();
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (isMountedRef.current) setActionLoading(false);
      }
    },
    [id, noteContent, fetchLeadDetails]
  );

  // Submit Call Log Activity
  const handleLogCall = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        if (isMountedRef.current) setActionLoading(true);
        const res = await axios.post(`/api/leads/${id}/calls`, callForm);
        if (res.data.success && isMountedRef.current) {
          setCallForm({ outcome: 'Connected', duration: '', summary: '' });
          fetchLeadDetails();
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (isMountedRef.current) setActionLoading(false);
      }
    },
    [id, callForm, fetchLeadDetails]
  );

  // Submit Follow-up Scheduler Activity
  const handleScheduleFollowUp = useCallback(
    async (e) => {
      e.preventDefault();
      if (!followUpForm.date || !followUpForm.time) {
        alert('Please select date and time');
        return;
      }

      try {
        if (isMountedRef.current) setActionLoading(true);
        const res = await axios.post(`/api/leads/${id}/followups`, followUpForm);
        if (res.data.success && isMountedRef.current) {
          setFollowUpForm({ date: '', time: '', type: 'Call', notes: '' });
          fetchLeadDetails();
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (isMountedRef.current) setActionLoading(false);
      }
    },
    [id, followUpForm, fetchLeadDetails]
  );

  // Trigger admission onboarding manually
  const initiateAdmission = useCallback(async () => {
    if (!lead?._id) return;
    if (!window.confirm('Do you want to create an official Admission Application for this lead?')) return;
    try {
      if (isMountedRef.current) setActionLoading(true);
      const res = await axios.post('/api/admissions', { leadId: lead._id });
      if (res.data.success && isMountedRef.current) {
        navigate('/admissions');
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to start application');
    } finally {
      if (isMountedRef.current) setActionLoading(false);
    }
  }, [lead, navigate]);

  return {
    user,
    lead,
    timeline,
    loading,
    activeTab,
    setActiveTab,
    noteContent,
    setNoteContent,
    callForm,
    setCallForm,
    followUpForm,
    setFollowUpForm,
    actionLoading,
    settings,
    handleStatusChange,
    handleAddNote,
    handleLogCall,
    handleScheduleFollowUp,
    initiateAdmission
  };
}
