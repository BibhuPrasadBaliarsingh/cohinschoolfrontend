import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Megaphone,
  Share2,
  BarChart2,
  CheckCircle2,
  RefreshCw,
  Copy,
  Check,
  Send,
  Zap,
  Filter,
  TrendingUp,
  Target,
  DollarSign
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell
} from 'recharts';

export default function Marketing() {
  const [activeTab, setActiveTab] = useState('meta');
  const [copied, setCopied] = useState(false);
  const [simLoading, setSimLoading] = useState(false);
  const [simStatus, setSimStatus] = useState(null);
  const [logs, setLogs] = useState([]);
  const [loadingLogs, setLoadingLogs] = useState(false);

  const [simForm, setSimForm] = useState({
    full_name: 'Ananya Sharma',
    email: 'ananya.sharma@example.com',
    phone_number: '+919876543210',
    class_interested: 'Class 9',
    campaign_name: 'Meta Spring Admissions 2026'
  });

  const webhookUrl = `${window.location.origin}/api/webhooks/meta`;

  const campaignStats = [
    { name: 'Meta Ads', leads: 145, conversion: '18.4%', cost: '₹340' },
    { name: 'Google Search', leads: 98, conversion: '22.1%', cost: '₹420' },
    { name: 'Website Organic', leads: 210, conversion: '15.2%', cost: '₹0' },
    { name: 'Campus Walk-ins', leads: 64, conversion: '45.0%', cost: '₹150' },
    { name: 'Education Fair', leads: 42, conversion: '28.5%', cost: '₹550' }
  ];

  const sourcePieData = [
    { name: 'Meta Ads', value: 35, color: '#1877F2' },
    { name: 'Website Forms', value: 40, color: '#10B981' },
    { name: 'Referrals', value: 15, color: '#F59E0B' },
    { name: 'Walk-ins', value: 10, color: '#6366F1' }
  ];

  const fetchLogs = async () => {
    try {
      setLoadingLogs(true);
      const res = await axios.get('/api/meta/webhook-logs');
      if (res.data.success) {
        setLogs(res.data.data);
      }
    } catch (e) {
      console.error('Failed to fetch webhook logs:', e);
    } finally {
      setLoadingLogs(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const copyWebhookUrl = () => {
    navigator.clipboard.writeText(webhookUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulate = async (e) => {
    e.preventDefault();
    try {
      setSimLoading(true);
      setSimStatus(null);
      const res = await axios.post('/api/meta/simulate-webhook', simForm);
      if (res.data.success) {
        setSimStatus({ success: true, message: 'Test lead injected successfully from Meta Lead Form!' });
        fetchLogs();
      } else {
        setSimStatus({ success: false, message: res.data.message || 'Simulation failed.' });
      }
    } catch (e) {
      setSimStatus({ success: false, message: e.response?.data?.message || 'Simulation failed.' });
    } finally {
      setSimLoading(false);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800 font-sans flex items-center gap-2">
            <Megaphone className="w-6 h-6 text-brand-600" />
            Marketing & Meta Lead Integration
          </h2>
          <p className="text-xs text-slate-500">
            Manage Meta Lead Ads, track traffic sources, and monitor campaign performance.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setActiveTab('meta')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${activeTab === 'meta'
                ? 'bg-white text-brand-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
              }`}
          >
            Meta Ads Integration
          </button>
          <button
            onClick={() => setActiveTab('campaigns')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${activeTab === 'campaigns'
                ? 'bg-white text-brand-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
              }`}
          >
            Campaign Performance
          </button>
          <button
            onClick={() => setActiveTab('sources')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${activeTab === 'sources'
                ? 'bg-white text-brand-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
              }`}
          >
            Lead Sources
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-4 flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 border border-blue-500/20">
            <Share2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 block">Meta Ads Leads</span>
            <span className="text-xl font-bold text-slate-800">145</span>
            <span className="text-[10px] text-emerald-600 font-semibold block">↑ +14% this month</span>
          </div>
        </div>

        <div className="glass-card p-4 flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 block">Lead Conversion Rate</span>
            <span className="text-xl font-bold text-slate-800">18.4%</span>
            <span className="text-[10px] text-emerald-600 font-semibold block">Top performing channel</span>
          </div>
        </div>

        <div className="glass-card p-4 flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600 border border-amber-500/20">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 block">Active Campaigns</span>
            <span className="text-xl font-bold text-slate-800">4 Active</span>
            <span className="text-[10px] text-slate-500 block">Facebook & Instagram</span>
          </div>
        </div>

        <div className="glass-card p-4 flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 border border-purple-500/20">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 block">Avg Cost Per Lead</span>
            <span className="text-xl font-bold text-slate-800">₹340</span>
            <span className="text-[10px] text-emerald-600 font-semibold block">↓ -8% vs last month</span>
          </div>
        </div>
      </div>

      {/* Tab 1: Meta Ads Integration */}
      {activeTab === 'meta' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Integration Status & Config */}
          <div className="glass-card p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm">
                  f
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">Meta Lead Ads Connector</h3>
                  <p className="text-xs text-slate-400">Sync Facebook & Instagram Instant Forms</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" /> Active
              </span>
            </div>

            {/* Webhook Endpoint */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">Meta Webhook Callback URL</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={webhookUrl}
                  className="flex-1 text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-600 font-mono"
                />
                <button
                  onClick={copyWebhookUrl}
                  className="px-3 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1 transition cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-[11px] text-slate-500">
                Paste this URL in Meta Business Suite → App Dashboard → Webhooks → Leadgen Endpoint.
              </p>
            </div>

            {/* Live Webhook Simulator Form */}
            <form onSubmit={handleSimulate} className="space-y-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-500" /> Test Instant Meta Lead Injection
                </h4>
                <span className="text-[10px] text-slate-400">Simulate incoming Facebook Ad submission</span>
              </div>

              {simStatus && (
                <div
                  className={`p-3 rounded-lg text-xs font-medium ${simStatus.success
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}
                >
                  {simStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">Student / Parent Name</label>
                  <input
                    type="text"
                    value={simForm.full_name}
                    onChange={(e) => setSimForm({ ...simForm, full_name: e.target.value })}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5"
                    required
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={simForm.phone_number}
                    onChange={(e) => setSimForm({ ...simForm, phone_number: e.target.value })}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5"
                    required
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">Email Address</label>
                  <input
                    type="email"
                    value={simForm.email}
                    onChange={(e) => setSimForm({ ...simForm, email: e.target.value })}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5"
                    required
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">Class Interested</label>
                  <select
                    value={simForm.class_interested}
                    onChange={(e) => setSimForm({ ...simForm, class_interested: e.target.value })}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5"
                  >
                    <option>Class 8</option>
                    <option>Class 9</option>
                    <option>Class 10</option>
                    <option>Class 11 Science</option>
                    <option>Class 12 Science</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={simLoading}
                className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition cursor-pointer disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{simLoading ? 'Injecting Lead...' : 'Send Test Meta Webhook'}</span>
              </button>
            </form>
          </div>

          {/* Webhook Activity Logs */}
          <div className="glass-card p-6 space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="font-bold text-slate-800 text-sm">Recent Webhook Logs</h3>
                <button
                  onClick={fetchLogs}
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingLogs ? 'animate-spin' : ''}`} />
                </button>
              </div>

              <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto mt-2">
                {logs.length === 0 ? (
                  <div className="text-center py-12 text-xs text-slate-400">
                    No webhook executions recorded yet. Use the test trigger on the left!
                  </div>
                ) : (
                  logs.map((log) => (
                    <div key={log._id} className="py-3 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-800">{log.source} Payload</span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${log.status === 'Success'
                              ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                              : 'bg-rose-50 text-rose-600 border border-rose-200'
                            }`}
                        >
                          {log.status}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500">{log.summary || 'Meta Instant Lead Form Received'}</p>
                      <span className="text-[10px] text-slate-400 block">
                        {new Date(log.createdAt).toLocaleString()}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-[11px] text-blue-700">
              💡 <strong>Instant Sync Active:</strong> Meta Lead Ads automatically trigger CRM lead creation and assign default counsellors within 2 seconds.
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Campaign Performance */}
      {activeTab === 'campaigns' && (
        <div className="glass-card p-6 space-y-6">
          <h3 className="font-bold text-slate-800 text-sm">Active Marketing Campaigns Performance</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={campaignStats}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#64748B' }} />
                <YAxis tick={{ fontSize: 12, fill: '#64748B' }} />
                <Tooltip />
                <Bar dataKey="leads" fill="#3B82F6" radius={[6, 6, 0, 0]} name="Leads Generated" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Tab 3: Lead Sources */}
      {activeTab === 'sources' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-card p-6 space-y-4">
            <h3 className="font-bold text-slate-800 text-sm">Lead Generation Channel Breakdown</h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sourcePieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {sourcePieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-card p-6 space-y-4">
            <h3 className="font-bold text-slate-800 text-sm">Source Conversion Summary</h3>
            <div className="space-y-3">
              {sourcePieData.map((src) => (
                <div key={src.name} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: src.color }}></span>
                    <span className="text-xs font-semibold text-slate-700">{src.name}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-800">{src.value}% Share</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
