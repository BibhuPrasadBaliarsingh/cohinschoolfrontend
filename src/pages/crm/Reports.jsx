import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BarChart3,
  TrendingUp,
  Download,
  Users,
  GraduationCap,
  Calendar,
  FileCheck,
  Filter
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import { handleExportCSV } from '../../utils/csvExport';

export default function Reports() {
  const [range, setRange] = useState('Last 30 Days');
  const [loading, setLoading] = useState(true);
  const [leadsData, setLeadsData] = useState([]);
  const [counsellorData, setCounsellorData] = useState([]);

  const reportData = [
    { date: 'Week 1', newLeads: 45, admissions: 12, walkins: 18 },
    { date: 'Week 2', newLeads: 58, admissions: 19, walkins: 24 },
    { date: 'Week 3', newLeads: 64, admissions: 22, walkins: 28 },
    { date: 'Week 4', newLeads: 72, admissions: 31, walkins: 35 }
  ];

  const counsellorPerf = [
    { name: 'Rahul Kumar', assigned: 65, converted: 24, rate: '36.9%' },
    { name: 'Priya Sharma', assigned: 52, converted: 18, rate: '34.6%' },
    { name: 'Amit Patel', assigned: 48, converted: 15, rate: '31.2%' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800 font-sans flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-brand-600" />
            Admissions Analytics & Reports
          </h2>
          <p className="text-xs text-slate-500">
            Comprehensive analytics, conversion trends, and counsellor performance metrics.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-1.5 font-medium text-slate-700"
          >
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Quarter</option>
            <option>Academic Year 2027-2028</option>
          </select>

          <button
            onClick={() => handleExportCSV(reportData, 'Admissions_Report_2026')}
            className="px-3 py-1.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-sm transition cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" /> Export Report CSV
          </button>
        </div>
      </div>

      {/* Main Trend Chart */}
      <div className="glass-card p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <h3 className="font-bold text-slate-800 text-sm">Lead Conversion & Admission Trend</h3>
          <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            ↑ +24% Overall Conversions
          </span>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={reportData}>
              <defs>
                <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorAdmissions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#64748B' }} />
              <YAxis tick={{ fontSize: 12, fill: '#64748B' }} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="newLeads" stroke="#3B82F6" fillOpacity={1} fill="url(#colorLeads)" name="New Inquiries" />
              <Area type="monotone" dataKey="admissions" stroke="#10B981" fillOpacity={1} fill="url(#colorAdmissions)" name="Confirmed Admissions" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Counsellor Performance Grid */}
      <div className="glass-card p-6 space-y-4">
        <h3 className="font-bold text-slate-800 text-sm">Counsellor Performance Benchmark</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold uppercase border-b border-gray-100">
              <tr>
                <th className="p-3">Counsellor Name</th>
                <th className="p-3">Assigned Leads</th>
                <th className="p-3">Converted Admissions</th>
                <th className="p-3">Conversion Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-medium text-slate-700">
              {counsellorPerf.map((c) => (
                <tr key={c.name} className="hover:bg-slate-50">
                  <td className="p-3 font-semibold text-slate-900">{c.name}</td>
                  <td className="p-3">{c.assigned}</td>
                  <td className="p-3 text-emerald-600 font-bold">{c.converted}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px]">
                      {c.rate}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
