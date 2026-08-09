import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { useAuth } from '../../context/AuthContext';
import {
  UserCheck,
  Award,
  BookOpen,
  Users,
  Bell,
  CheckCircle2,
  FileText,
  TrendingUp,
  BarChart2,
  Calendar,
  Sparkles
} from 'lucide-react';

export default function PrincipalDashboard() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      {/* Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-900/40 via-navy-900 to-navy-950 border border-amber-500/30 backdrop-blur-xl mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 inline-block border border-amber-500/30">
          Executive Academic Control Desk
        </span>
        <h1 className="font-display text-3xl font-extrabold text-white mb-2">
          Principal's Executive Overview
        </h1>
        <p className="text-white/70 text-sm max-w-2xl">
          Welcome, <strong className="text-amber-300">{user?.name}</strong>. Monitor overall academic standards, CBSE affiliation metrics, faculty reviews, and campus operations.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-amber-400/50 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/70">Certified Faculty</span>
            <Users className="w-5 h-5 text-amber-400" />
          </div>
          <p className="font-display text-3xl font-extrabold text-amber-400">94</p>
          <p className="text-[11px] text-emerald-400 mt-1">100% CBSE & Cambridge trained</p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-amber-400/50 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/70">JEE & NEET Enrolled</span>
            <Award className="w-5 h-5 text-gold-400" />
          </div>
          <p className="font-display text-3xl font-extrabold text-gold-400">420</p>
          <p className="text-[11px] text-white/60 mt-1">Integrated Vidwan Batch</p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-amber-400/50 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/70">School Attendance Avg</span>
            <TrendingUp className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="font-display text-3xl font-extrabold text-emerald-400">96.4%</p>
          <p className="text-[11px] text-emerald-400 mt-1">Real-time Biometric GPS</p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-amber-400/50 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/70">Board Result Target</span>
            <BarChart2 className="w-5 h-5 text-blue-400" />
          </div>
          <p className="font-display text-3xl font-extrabold text-blue-400">100%</p>
          <p className="text-[11px] text-white/60 mt-1">Pass Result Standard</p>
        </div>
      </div>

      {/* Action Panels */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl lg:col-span-2">
          <h2 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" /> Departmental Academic Progress
          </h2>
          <div className="space-y-4 text-xs">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <p className="font-bold text-white text-sm">Senior Secondary Science (Physics & Chemistry)</p>
                <p className="text-white/60">Class XI & XII Integrated JEE/NEET Batch</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">94% Syllabus Done</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <p className="font-bold text-white text-sm">Mathematics & AI Robotics Lab</p>
                <p className="text-white/60">Class IX to XII Practical Modules</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">98% Syllabus Done</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <p className="font-bold text-white text-sm">Cambridge English Speech & Debate</p>
                <p className="text-white/60">Language Communication & CMUN Prep</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">100% Completed</span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <h2 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5 text-gold-400" /> Quick Circular Actions
          </h2>
          <div className="space-y-3 text-xs">
            <button
              onClick={() => alert('Broadcast Notice: Send instant notification to all parents via ParentConnect App.')}
              className="w-full p-3 rounded-2xl bg-gold-500 text-navy-950 font-bold hover:bg-gold-400 transition flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Broadcast Parent Circular
            </button>
            <button
              onClick={() => alert('Approve Faculty Leave: Review 2 pending leave applications.')}
              className="w-full p-3 rounded-2xl bg-white/10 text-white font-semibold hover:bg-white/20 transition border border-white/15 flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Approve Faculty Leaves (2)
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
