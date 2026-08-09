import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { useAuth } from '../../context/AuthContext';
import {
  Users,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Award,
  Calendar,
  Bus,
  FileText,
  MapPin,
  ExternalLink
} from 'lucide-react';

export default function ParentDashboard() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      {/* Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-rose-900/40 via-navy-900 to-navy-950 border border-rose-500/30 backdrop-blur-xl mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider mb-3 inline-block border border-rose-500/30">
          ParentConnect Guardian Desk
        </span>
        <h1 className="font-display text-3xl font-extrabold text-white mb-2">
          Guardian Oversight & Fee Gateway
        </h1>
        <p className="text-white/70 text-sm max-w-2xl">
          Welcome back, <strong className="text-rose-300">{user?.name}</strong>. Child Ward: <strong className="text-gold-400">Aarav Sharma (Class XI Science - JEE Integrated)</strong>. Monitor live attendance, report cards, hostel status, and direct fee payment.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-rose-400/50 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/70">Child Today's Status</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="font-display text-3xl font-extrabold text-emerald-400">Present</p>
          <p className="text-[11px] text-emerald-400 mt-1">Biometric Checked-in (07:45 AM)</p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-rose-400/50 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/70">Academic Grade Avg</span>
            <Award className="w-5 h-5 text-gold-400" />
          </div>
          <p className="font-display text-3xl font-extrabold text-gold-400">A1 (92.4%)</p>
          <p className="text-[11px] text-white/60 mt-1">Term 1 Performance Rank #3</p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-rose-400/50 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/70">Fee Payment Status</span>
            <CreditCard className="w-5 h-5 text-blue-400" />
          </div>
          <p className="font-display text-3xl font-extrabold text-blue-400">Cleared</p>
          <p className="text-[11px] text-emerald-400 mt-1">Receipt #CQ-2026-9821</p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-rose-400/50 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/70">Hostel & Transport</span>
            <Bus className="w-5 h-5 text-amber-400" />
          </div>
          <p className="font-display text-3xl font-extrabold text-amber-400">Route #4</p>
          <p className="text-[11px] text-emerald-400 mt-1">GPS & RFID Sync Active</p>
        </div>
      </div>

      {/* Online Fee Gateway & Bus Tracking Card */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-400/30 flex items-center justify-center text-gold-400">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-white">Online Fee Payment Gateway</h2>
              <p className="text-xs text-white/60">Pay term fees securely via Eduqfix direct portal</p>
            </div>
          </div>
          <p className="text-xs text-white/70 leading-relaxed mb-6">
            All fee payments are integrated with automated SMS receipts and ParentConnect portal ledger updates.
          </p>
          <a
            href="https://www.eduqfix.com/PayDirect/#/student/pay/9u3Ik7RvISUPS+FAt5Vw0mfbWsL0LSABcb0Dwea4EuWIcoB0DJulKNCM0J8ImcKt/4592"
            target="_blank"
            rel="noreferrer"
            className="w-full py-3.5 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-600 text-navy-950 font-bold rounded-2xl text-xs hover:brightness-110 transition shadow-lg flex items-center justify-center gap-2"
          >
            <CreditCard className="w-4 h-4" /> Pay Fees Online via Eduqfix Gateway <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-white">Live Transport & GPS Tracking</h2>
              <p className="text-xs text-white/60">Bus Route #4 (Bhubaneswar – Jatani Campus)</p>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-2 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-white/60">Bus Driver:</span>
              <span className="font-bold text-white">Manas Kumar Sahoo (+91 97777 06447)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/60">Current Bus Location:</span>
              <span className="font-bold text-emerald-400">Campus Arrival Completed (07:42 AM)</span>
            </div>
          </div>
          <button
            onClick={() => alert('Live GPS Map: Route #4 bus is parked safely inside the school 10-acre campus.')}
            className="w-full py-3.5 bg-white/10 text-white font-semibold rounded-2xl text-xs hover:bg-white/20 transition border border-white/15 flex items-center justify-center gap-2"
          >
            <Bus className="w-4 h-4 text-emerald-400" /> View Live Route #4 GPS Map
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
