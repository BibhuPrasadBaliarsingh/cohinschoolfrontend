import { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import useAuth from './useAuth';

export default function useSettings() {
  const { user } = useAuth();
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // Settings State
  const [schoolSettings, setSchoolSettings] = useState({
    schoolName: '',
    schoolPhone: '',
    schoolEmail: '',
    schoolAddress: '',
    schoolWebsite: '',
    assignmentMethod: 'Round Robin'
  });

  const [apiKey, setApiKey] = useState('');
  const [apiKeyCopied, setApiKeyCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saveLoading, setSaveLoading] = useState(false);

  // Webhook Simulator State
  const [simForm, setSimForm] = useState({
    name: 'Suresh Kumar',
    email: 'suresh@example.com',
    phone: '9876543230',
    classInterested: 'Class 8',
    campaignName: 'Secondary School Campaign',
    platform: 'facebook'
  });
  const [simResult, setSimResult] = useState(null);
  const [simLoading, setSimLoading] = useState(false);

  // Webhook Logs State
  const [webhookLogs, setWebhookLogs] = useState([]);
  const [logsLoading, setLogsLoading] = useState(false);

  const fetchWebhookLogs = useCallback(async () => {
    try {
      if (isMountedRef.current) setLogsLoading(true);
      const res = await axios.get('/api/meta/webhook-logs');
      if (res.data.success && isMountedRef.current) {
        setWebhookLogs(res.data.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      if (isMountedRef.current) setLogsLoading(false);
    }
  }, []);

  const fetchSettingsData = useCallback(async () => {
    try {
      if (isMountedRef.current) setLoading(true);

      try {
        const settingsRes = await axios.get('/api/settings');
        if (settingsRes.data.success && isMountedRef.current) {
          const { settings } = settingsRes.data.data;
          setSchoolSettings({
            schoolName: settings.schoolName || '',
            schoolPhone: settings.schoolPhone || '',
            schoolEmail: settings.schoolEmail || '',
            schoolAddress: settings.schoolAddress || '',
            schoolWebsite: settings.schoolWebsite || '',
            assignmentMethod: settings.assignmentMethod || 'Round Robin'
          });
          setApiKey(settings.websiteApiKey || '');
        }
      } catch (e) {
        console.error('Failed to fetch settings:', e);
      }

      try {
        const logsRes = await axios.get('/api/meta/webhook-logs');
        if (logsRes.data.success && isMountedRef.current) {
          setWebhookLogs(logsRes.data.data);
        }
      } catch (e) {
        console.error('Failed to fetch webhook logs:', e);
      }
    } finally {
      if (isMountedRef.current) setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSettingsData();
  }, [fetchSettingsData]);

  // Save CRM Global settings
  const handleSaveSettings = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        if (isMountedRef.current) setSaveLoading(true);
        const res = await axios.put('/api/settings', schoolSettings);
        if (res.data.success) {
          alert('Global settings saved successfully');
        }
      } catch (_err) {
        alert('Failed to save settings');
      } finally {
        if (isMountedRef.current) setSaveLoading(false);
      }
    },
    [schoolSettings]
  );

  // Regenerate public API key
  const handleRegenApiKey = useCallback(async () => {
    if (!window.confirm('Regenerating the API Key will break existing website form submissions until updated. Continue?')) return;
    try {
      const res = await axios.post('/api/settings/regenerate-api-key');
      if (res.data.success && isMountedRef.current) {
        setApiKey(res.data.apiKey);
        alert('New API Key Generated');
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Run Simulation webhook
  const handleSimulateWebhook = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        if (isMountedRef.current) {
          setSimLoading(true);
          setSimResult(null);
        }

        const payload = {
          leadId: `mock_lead_${Date.now()}`,
          formId: 'mock_form_id',
          pageId: 'mock_page_id',
          studentName: simForm.name,
          parentName: 'Simulated Parent',
          phone: simForm.phone,
          email: simForm.email,
          classInterested: simForm.classInterested,
          campaignName: simForm.campaignName,
          platform: simForm.platform
        };

        const res = await axios.post('/api/meta/simulate-webhook', payload);
        if (res.data.success && isMountedRef.current) {
          setSimResult({
            success: true,
            message: res.data.message,
            lead: res.data.lead,
            duplicate: res.data.duplicateStatus,
            assigned: res.data.assignedCounsellor
          });
          fetchWebhookLogs();
        }
      } catch (err) {
        if (isMountedRef.current) {
          setSimResult({
            success: false,
            message: err.response?.data?.message || 'Simulation ingestion failed'
          });
        }
      } finally {
        if (isMountedRef.current) setSimLoading(false);
      }
    },
    [simForm, fetchWebhookLogs]
  );

  // Retry ingestion logic
  const handleRetryLog = useCallback(
    async (id) => {
      try {
        const res = await axios.post(`/api/meta/webhook-logs/${id}/retry`);
        if (res.data.success && isMountedRef.current) {
          alert(res.data.message);
          fetchWebhookLogs();
        }
      } catch (err) {
        alert(err.response?.data?.message || 'Retry failed');
      }
    },
    [fetchWebhookLogs]
  );

  const copyToClipboard = useCallback((text) => {
    navigator.clipboard.writeText(text);
    setApiKeyCopied(true);
    const timer = setTimeout(() => {
      if (isMountedRef.current) setApiKeyCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return {
    user,
    schoolSettings,
    setSchoolSettings,
    apiKey,
    apiKeyCopied,
    loading,
    saveLoading,
    simForm,
    setSimForm,
    simResult,
    simLoading,
    webhookLogs,
    logsLoading,
    handleSaveSettings,
    handleRegenApiKey,
    handleSimulateWebhook,
    fetchWebhookLogs,
    handleRetryLog,
    copyToClipboard
  };
}
