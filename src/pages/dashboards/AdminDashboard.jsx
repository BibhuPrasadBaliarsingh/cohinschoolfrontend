import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import useAuth from '../../hooks/useAuth';
import { Users, Server, Key, Activity, CheckCircle2, UserPlus, Search } from 'lucide-react';

const sampleUsers = [
  { name: 'Er. Jyoti Ranjan Tripathy', email: 'admin@cohen.edu.in', role: 'admin', dept: 'Management & Governance', status: 'Active', security: 'Level 5 (Super Admin)' },
  { name: 'Mrs. Neeta Khandelwal', email: 'principal@cohen.edu.in', role: 'principal', dept: 'Academic Leadership', status: 'Active', security: 'Level 4 (Executive)' },
  { name: 'Dr. Rajesh Kumar Mohanty', email: 'teacher@cohen.edu.in', role: 'teacher', dept: 'Physics & IIT-JEE Faculty', status: 'Active', security: 'Level 3 (Academic)' },
  { name: 'Aarav Sharma (Class XI)', email: 'student@cohen.edu.in', role: 'student', dept: 'Class XI Science', status: 'Active', security: 'Level 1 (Student)' },
  { name: 'Suresh Chandra Sharma', email: 'parent@cohen.edu.in', role: 'parent', dept: 'Parent Guardian', status: 'Active', security: 'Level 1 (Guardian)' }
];

export default function AdminDashboard() {
  const { user } = useAuth();
  const [filterRole, setFilterRole] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = sampleUsers.filter((u) => {
    const matchesRole = filterRole === 'all' || u.role === filterRole;
    const matchesSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase()) || u.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRole && matchesSearch;
  });

  return (
    <DashboardLayout>
      {/* Welcome Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-900/40 via-navy-900 to-navy-950 border border-purple-500/30 backdrop-blur-xl mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
        <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider mb-3 inline-block border border-purple-500/30">
          Super Admin Control Panel
        </span>
        <h1 className="font-display text-3xl font-extrabold text-white mb-2">System Governance &amp; Security Desk</h1>
        <p className="text-white/70 text-sm max-w-2xl">
          Logged in as <strong className="text-purple-300">{user?.name}</strong> ({user?.email}). MongoDB Cloud Database sync is active
          with encrypted JWT RBAC session tokens.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-400/50 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/70">Total System Accounts</span>
            <Users className="w-5 h-5 text-gold-400" />
          </div>
          <p className="font-display text-3xl font-extrabold text-gold-400">1,542</p>
          <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> MongoDB Synced
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-400/50 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/70">Cluster Latency</span>
            <Server className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="font-display text-3xl font-extrabold text-emerald-400">18 ms</p>
          <p className="text-[11px] text-white/60 mt-1">AWS Cluster Shard 01</p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-400/50 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/70">RBAC Token Expiry</span>
            <Key className="w-5 h-5 text-purple-400" />
          </div>
          <p className="font-display text-3xl font-extrabold text-purple-400">7 Days</p>
          <p className="text-[11px] text-white/60 mt-1">HS256 Encrypted</p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-400/50 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/70">API Health</span>
            <Activity className="w-5 h-5 text-blue-400" />
          </div>
          <p className="font-display text-3xl font-extrabold text-blue-400">100%</p>
          <p className="text-[11px] text-emerald-400 mt-1">HTTP 200 OK</p>
        </div>
      </div>

      {/* User Management Section */}
      <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="font-display text-xl font-bold text-white">Database Role Accounts</h2>
            <p className="text-xs text-white/60">Search and filter active accounts registered in MongoDB Atlas</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="admin-search-user"
                type="text"
                aria-label="Search user"
                placeholder="Search user..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-white placeholder-white/40 focus:outline-none"
              />
            </div>

            <select
              id="admin-filter-role"
              aria-label="Filter role"
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-white focus:outline-none"
            >
              <option value="all" className="bg-navy-900">
                All Roles
              </option>
              <option value="admin" className="bg-navy-900">
                Admin
              </option>
              <option value="principal" className="bg-navy-900">
                Principal
              </option>
              <option value="teacher" className="bg-navy-900">
                Teacher
              </option>
              <option value="student" className="bg-navy-900">
                Student
              </option>
              <option value="parent" className="bg-navy-900">
                Parent
              </option>
            </select>

            <button
              type="button"
              onClick={() => alert('Add User Modal: Super Admin can invite and register new role credentials.')}
              className="px-4 py-2 rounded-full bg-gold-500 text-navy-950 font-bold text-xs hover:bg-gold-400 transition flex items-center gap-1.5 shadow"
            >
              <UserPlus className="w-3.5 h-3.5" /> Add User
            </button>
          </div>
        </div>

        {/* User Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/10 text-gold-400 uppercase font-semibold text-[10px] tracking-wider">
              <tr>
                <th className="p-3.5 rounded-l-xl">User Name</th>
                <th className="p-3.5">Email Address</th>
                <th className="p-3.5">Assigned Role</th>
                <th className="p-3.5">Department</th>
                <th className="p-3.5">Security Level</th>
                <th className="p-3.5 rounded-r-xl">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filtered.map((u, i) => (
                <tr key={i} className="hover:bg-white/5 transition">
                  <td className="p-3.5 font-bold text-white flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold text-xs">
                      {u.name.charAt(0)}
                    </div>
                    {u.name}
                  </td>
                  <td className="p-3.5 text-white/70 font-mono">{u.email}</td>
                  <td className="p-3.5">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase border ${u.role === 'admin'
                          ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                          : u.role === 'principal'
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                            : u.role === 'teacher'
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                              : u.role === 'student'
                                ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                                : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                        }`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td className="p-3.5 text-white/70">{u.dept}</td>
                  <td className="p-3.5 text-gold-400 font-medium">{u.security}</td>
                  <td className="p-3.5 text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {u.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
