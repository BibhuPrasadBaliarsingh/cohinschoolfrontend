import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { useAuth } from '../../context/AuthContext';
import {
  BookOpen,
  Users,
  FileCheck,
  Calendar,
  Clock,
  CheckCircle2,
  HelpCircle,
  PlusCircle,
  FileText,
  Sparkles
} from 'lucide-react';

export default function TeacherDashboard() {
  const { user } = useAuth();
  const [activeClass, setActiveClass] = useState('xi-a');

  return (
    <DashboardLayout>
      {/* Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-900/40 via-navy-900 to-navy-950 border border-emerald-500/30 backdrop-blur-xl mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 inline-block border border-emerald-500/30">
          TeachFlow Educator Desk
        </span>
        <h1 className="font-display text-3xl font-extrabold text-white mb-2">
          Faculty Class & Marks Management
        </h1>
        <p className="text-white/70 text-sm max-w-2xl">
          Welcome back, <strong className="text-emerald-300">{user?.name}</strong>. Department: <strong className="text-gold-400">{user?.department}</strong>. Manage live class logs, assignment DPPs, and student gradebooks.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-emerald-400/50 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/70">Assigned Classes</span>
            <BookOpen className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="font-display text-3xl font-extrabold text-emerald-400">4</p>
          <p className="text-[11px] text-white/60 mt-1">Class XI-A, XI-B, XII-A, XII-B</p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-emerald-400/50 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/70">Total Students</span>
            <Users className="w-5 h-5 text-gold-400" />
          </div>
          <p className="font-display text-3xl font-extrabold text-gold-400">148</p>
          <p className="text-[11px] text-emerald-400 mt-1">Active JEE Vidwan Batch</p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-emerald-400/50 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/70">Pending DPP Reviews</span>
            <FileCheck className="w-5 h-5 text-amber-400" />
          </div>
          <p className="font-display text-3xl font-extrabold text-amber-400">12</p>
          <p className="text-[11px] text-white/60 mt-1">Physics Electrostatics DPP #3</p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-emerald-400/50 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/70">Today's Schedule</span>
            <Clock className="w-5 h-5 text-blue-400" />
          </div>
          <p className="font-display text-3xl font-extrabold text-blue-400">3 Sessions</p>
          <p className="text-[11px] text-emerald-400 mt-1">Next: 11:30 AM (Class XI-A)</p>
        </div>
      </div>

      {/* Class Roster & Gradebook */}
      <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="font-display text-xl font-bold text-white">Live Class Roster & Attendance</h2>
            <p className="text-xs text-white/60">Class XI Science (Physics & JEE Advanced Coaching)</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => alert('New Assignment: Upload new Physics DPP worksheet.')}
              className="px-4 py-2 rounded-full bg-emerald-500 text-navy-950 font-bold text-xs hover:bg-emerald-400 transition flex items-center gap-1.5 shadow"
            >
              <PlusCircle className="w-3.5 h-3.5" /> Post Assignment
            </button>
          </div>
        </div>

        <div className="space-y-3 text-xs">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center">A</div>
              <div>
                <p className="font-bold text-white text-sm">Aarav Sharma</p>
                <p className="text-white/60">Roll No: 2026-XI-04 • JEE Integrated</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-emerald-400 font-semibold flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Present (07:45 AM)</span>
              <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 font-bold">Grade: 94/100</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center">R</div>
              <div>
                <p className="font-bold text-white text-sm">Rohan Pattnaik</p>
                <p className="text-white/60">Roll No: 2026-XI-09 • NEET Integrated</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-emerald-400 font-semibold flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Present (07:50 AM)</span>
              <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 font-bold">Grade: 91/100</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
