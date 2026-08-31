import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import HeaderBanner from '../components/HeaderBanner';
import { Heart, GraduationCap, BookOpen, Shield, Home, Bus, CheckCircle2, Sparkles, Lock, ArrowRight, Globe } from 'lucide-react';

const portalCards = [
  {
    id: 'student',
    title: 'EduLearn Student Hub',
    role: 'Student Portal',
    tag: 'SSO Login',
    isPublic: false,
    path: '/student/dashboard',
    icon: GraduationCap,
    color: 'blue',
    gradient: 'from-blue-600 to-indigo-600',
    borderAccent: 'border-blue-400/50 hover:border-blue-400',
    badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    desc: 'Unified student cockpit with class syllabus progress, homework submission, digital notes, attendance records, exam results, and integrated JEE/NEET mentorship material.',
    features: [
      'Homework & DPP Assignment Submissions',
      'Subject-wise Attendance & Analytics',
      'CBSE + Vidwan JEE/NEET Study Material',
      'Live Timetable & Academic Calendar',
      'Assessment Results & Term Report Cards',
      'Student Profile & Stream Manager'
    ],
    buttonText: 'Sign In to Student Portal →'
  },
  {
    id: 'teacher',
    title: 'TeachFlow Faculty Portal',
    role: 'Teacher / Faculty',
    tag: 'SSO Login',
    isPublic: false,
    path: '/teacher/dashboard',
    icon: BookOpen,
    color: 'emerald',
    gradient: 'from-emerald-600 to-teal-600',
    borderAccent: 'border-emerald-400/40 hover:border-emerald-400',
    badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    desc: 'Comprehensive digital workbench for faculty to mark student attendance, upload homework assignments, view weekly timetables, enter examination marks, and apply for leaves.',
    features: [
      'Live Student Attendance Marker (Present, Absent, Leave)',
      'Homework & Assignment Creation & Due Date Tracker',
      'Weekly Class Timetable & Schedule Viewer',
      'Student Assessment Submissions & Grading Review',
      'Teacher Leave Management & Instant Application',
      'Faculty Profile & Contact Preferences Manager'
    ],
    buttonText: 'Sign In to Teacher Portal →'
  },
  {
    id: 'parent',
    title: 'ParentConnect Guardian Portal',
    role: 'Parent Portal',
    tag: 'SSO Login',
    isPublic: false,
    path: '/parent/dashboard',
    icon: Heart,
    color: 'rose',
    gradient: 'from-rose-600 to-pink-600',
    borderAccent: 'border-rose-400/40 hover:border-rose-400',
    badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    desc: '360-degree visibility for parents: real-time attendance alerts, automated fee invoices with instant UPI receipts, live GPS bus tracking, and direct messaging with subject teachers.',
    features: [
      'Real-Time Push & WhatsApp Attendance Alerts',
      'Online Fee Payments with Zero Convenience Charge',
      'Live GPS School Bus Fleet Tracking',
      'Digital Report Cards & Term Analytics'
    ],
    buttonText: 'Sign In to Parent Portal →'
  },
  {
    id: 'crm',
    title: 'EduCRM & Governance Suite',
    role: 'Super Admin & Admissions',
    tag: 'Staff Auth',
    isPublic: false,
    path: '/admin/dashboard',
    icon: Shield,
    color: 'violet',
    gradient: 'from-purple-600 to-violet-700',
    borderAccent: 'border-violet-400/40 hover:border-violet-400',
    badgeBg: 'bg-violet-500/20 text-violet-300 border-violet-500/40',
    desc: 'Institutional administration system: multi-channel lead tracking, admission pipelines, student databases, HRMS payroll, and automated reporting.',
    features: [
      'End-to-End Admission Pipeline & Follow-Ups',
      'Lead Scoring & Multi-Channel Marketing Analytics',
      'Staff Roles & User Permissions Management',
      'Consolidated Financial & Operational Reports'
    ],
    buttonText: 'Sign In to Admin CRM →'
  },
  {
    id: 'hostel',
    title: 'HostelFlow Boarding ERP',
    role: 'Hostel & Residential',
    tag: 'Staff Auth',
    isPublic: false,
    path: '/admin/dashboard',
    icon: Home,
    color: 'amber',
    gradient: 'from-amber-500 to-orange-600',
    borderAccent: 'border-amber-400/40 hover:border-amber-400',
    badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    desc: 'Residential student oversight: biometric gate pass approval, room allocations, mess food menu planner, medical records, and parent outing authorization.',
    features: [
      'Biometric Campus In/Out Gate Pass Tracking',
      'Hostel Room Allocation & Bed Inventory',
      'Mess Nutrition Schedule & Menu Updates',
      'Warden Daily Logs & Incident Reporting'
    ],
    buttonText: 'Sign In to Hostel Portal →'
  },
  {
    id: 'transport',
    title: 'RouteSafe Fleet TMS',
    role: 'Transport Management',
    tag: 'Staff Auth',
    isPublic: false,
    path: '/admin/dashboard',
    icon: Bus,
    color: 'sky',
    gradient: 'from-sky-500 to-blue-600',
    borderAccent: 'border-sky-400/40 hover:border-sky-400',
    badgeBg: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    desc: 'Intelligent transportation monitoring: live GPS vehicle tracking, route optimization, driver verification, speed alerts, and parent arrival notifications.',
    features: [
      'Live GPS Map & Route Speed Alert Tracking',
      'Driver Records & Vehicle Compliance Checks',
      'Student Stop Allocation & Pickup Timing',
      'Automated SOS Emergency Notification System'
    ],
    buttonText: 'Sign In to Transport Portal →'
  }
];

export default function PortalsPage({ openLoginModal }) {
  return (
    <PageWrapper>
      <HeaderBanner
        title="Role-Based Digital Campus Portals"
        subtitle="Encrypted web portals designed specifically for every stakeholder in the Cohen International School ecosystem."
        badge="Single Sign-On (SSO)"
        breadcrumb="Portals Hub"
        bgImage="/images/smart_campus_banner.png"
      />

      {/* Quick Portal Switcher Bar */}
      <section className="py-8 bg-navy-900 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-gold-400 font-medium uppercase text-xs tracking-widest block">Single Sign-On &amp; Direct Access</span>
              <h3 className="font-display text-xl font-bold text-white">Quick Role Selector</h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-semibold">
              <Globe className="w-3.5 h-3.5" />
              <span>Student Portal is Publicly Accessible</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {/* 1. Parent Portal */}
            <button
              type="button"
              onClick={() => openLoginModal?.('parent')}
              className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-400/60 hover:bg-rose-500/10 transition flex flex-col items-center gap-2 group cursor-pointer text-center focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <Heart className="w-6 h-6 text-rose-400 group-hover:scale-110 transition" />
              <div>
                <span className="text-xs font-semibold text-white block">Parent Portal</span>
                <span className="text-[10px] text-white/50">Login Required</span>
              </div>
            </button>

            {/* 2. Student Portal - PUBLIC DIRECT LINK */}
            <Link
              to="/student/dashboard"
              className="p-3.5 rounded-2xl bg-blue-500/15 border border-blue-400/60 hover:border-blue-300 hover:bg-blue-500/25 transition flex flex-col items-center gap-2 group cursor-pointer relative shadow-lg shadow-blue-950/40 text-center focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <span className="absolute -top-2 right-2 px-1.5 py-0.2 bg-blue-500 text-white font-bold text-[9px] uppercase tracking-wider rounded-full shadow">
                Open Access
              </span>
              <GraduationCap className="w-6 h-6 text-blue-400 group-hover:scale-110 transition" />
              <div>
                <span className="text-xs font-bold text-white block">Student Portal</span>
                <span className="text-[10px] text-blue-300 font-semibold">Public Live</span>
              </div>
            </Link>

            {/* 3. Teacher Portal */}
            <button
              type="button"
              onClick={() => openLoginModal?.('teacher')}
              className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/60 hover:bg-emerald-500/10 transition flex flex-col items-center gap-2 group cursor-pointer text-center focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <BookOpen className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition" />
              <div>
                <span className="text-xs font-semibold text-white block">Teacher Portal</span>
                <span className="text-[10px] text-white/50">Login Required</span>
              </div>
            </button>

            {/* 4. CRM Portal */}
            <button
              type="button"
              onClick={() => openLoginModal?.('crm')}
              className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-400/60 hover:bg-violet-500/10 transition flex flex-col items-center gap-2 group cursor-pointer text-center focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <Shield className="w-6 h-6 text-violet-400 group-hover:scale-110 transition" />
              <div>
                <span className="text-xs font-semibold text-white block">Admin / CRM</span>
                <span className="text-[10px] text-white/50">Staff Login</span>
              </div>
            </button>

            {/* 5. Hostel Portal */}
            <button
              type="button"
              onClick={() => openLoginModal?.('hostel')}
              className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/60 hover:bg-amber-500/10 transition flex flex-col items-center gap-2 group cursor-pointer text-center focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <Home className="w-6 h-6 text-amber-400 group-hover:scale-110 transition" />
              <div>
                <span className="text-xs font-semibold text-white block">Hostel Portal</span>
                <span className="text-[10px] text-white/50">Warden Login</span>
              </div>
            </button>

            {/* 6. Transport Portal */}
            <button
              type="button"
              onClick={() => openLoginModal?.('transport')}
              className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/60 hover:bg-sky-500/10 transition flex flex-col items-center gap-2 group cursor-pointer text-center focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <Bus className="w-6 h-6 text-sky-400 group-hover:scale-110 transition" />
              <div>
                <span className="text-xs font-semibold text-white block">Transport TMS</span>
                <span className="text-[10px] text-white/50">Driver Login</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Student Portal Spotlight */}
      <section className="py-16 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-950/60 via-navy-900/90 to-navy-950 border border-blue-500/40 shadow-2xl backdrop-blur-xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Publicly Available Student Cockpit</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  EduLearn <br />
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300 bg-clip-text text-transparent">
                    Student Hub &amp; LMS
                  </span>
                </h2>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  Experience the unified Cohen International School Student Cockpit. Access live class attendance analytics, daily homework
                  assignments, IIT-JEE/NEET practice sheets, weekly timetables, and academic term progress.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Homework &amp; DPP submission tracker</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Subject-wise live attendance breakdown</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Weekly timetable &amp; classroom schedules</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Integrated JEE / NEET study material</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/student/dashboard"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl hover:brightness-110 active:scale-95 transition-all duration-200 shadow-xl shadow-blue-500/25 inline-flex items-center gap-2 text-sm focus-visible:ring-2 focus-visible:ring-gold-400"
                  >
                    <GraduationCap className="w-5 h-5" />
                    <span>Open Student Portal Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => openLoginModal?.('student')}
                    className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/15 transition flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-gold-400"
                  >
                    <span>SSO Sign In Mode</span>
                  </button>
                </div>
              </div>

              {/* Student Portal Visual Preview Box */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-navy-950/90 border border-blue-500/30 p-5 sm:p-6 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
                      <span className="text-xs font-bold text-white">Live Student Hub Preview</span>
                    </div>
                    <span className="text-[10px] text-blue-300 font-mono">/student/dashboard</span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                          94%
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Overall Class Attendance</p>
                          <p className="text-[10px] text-white/60">Class VIII-A • 142/151 Days Attended</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">Excellent</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs">
                          JEE
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Vidwan JEE Mock Test #4</p>
                          <p className="text-[10px] text-white/60">Score: 268/300 • Rank: 2nd in Batch</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 rounded-md bg-indigo-500/20 text-indigo-300 text-[10px] font-bold">Top 5%</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold text-xs">
                          HW
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Math DPP: Quadratic Equations</p>
                          <p className="text-[10px] text-white/60">Submitted &amp; Verified by Faculty</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 rounded-md bg-gold-500/20 text-gold-300 text-[10px] font-bold">Completed</span>
                    </div>
                  </div>

                  <Link
                    to="/student/dashboard"
                    className="block text-center py-2.5 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 text-xs font-bold transition border border-blue-500/40 focus-visible:ring-2 focus-visible:ring-gold-400"
                  >
                    Direct Access to Student Portal →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of All Portals */}
      <section className="py-20 bg-cream-50 text-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-600 font-medium tracking-widest uppercase text-xs mb-2 block">Ecosystem Overview</span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-900 font-extrabold mb-4">All Cohen Digital Campus Portals</h2>
            <p className="text-navy-700/70 max-w-2xl mx-auto text-sm sm:text-base">
              Secure, high-speed web workspaces customized for each campus role. Click to access live portals or sign in with authorized
              credentials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {portalCards.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.id}
                  className={`p-6 sm:p-8 rounded-3xl bg-white border ${
                    p.isPublic ? 'border-blue-400/80 ring-2 ring-blue-500/20' : 'border-cream-200'
                  } shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.gradient} text-white flex items-center justify-center shadow-md`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${p.badgeBg}`}>
                        {p.tag}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-navy-900 mb-1">{p.title}</h3>
                    <p className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-3">{p.role}</p>

                    <p className="text-navy-700/80 text-xs sm:text-sm leading-relaxed mb-5">{p.desc}</p>

                    <div className="space-y-2 mb-6">
                      {p.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-navy-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {p.isPublic ? (
                      <Link
                        to={p.path}
                        className={`w-full py-3.5 bg-gradient-to-r ${p.gradient} hover:brightness-110 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg transition text-xs sm:text-sm focus-visible:ring-2 focus-visible:ring-gold-400`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{p.buttonText}</span>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => openLoginModal?.(p.id)}
                        className="w-full py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-2xl flex items-center justify-center gap-2 shadow-md transition text-xs sm:text-sm cursor-pointer focus-visible:ring-2 focus-visible:ring-gold-400"
                      >
                        <Lock className="w-4 h-4 text-gold-400" />
                        <span>{p.buttonText}</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
