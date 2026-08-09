import React from 'react';
import {
  LayoutGrid,
  Heart,
  GraduationCap,
  BookOpen,
  Shield,
  Home,
  Bus,
  ExternalLink,
  Eye
} from 'lucide-react';

export default function PortalsPreview({ openPortalFrame }) {
  return (
    <section id="portals" className="py-24 bg-gradient-to-b from-cream-50 via-white to-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <LayoutGrid className="w-4 h-4 text-gold-600" /> Role-Based Access Control
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-navy-900 mb-4">Login to Your Digital Campus</h2>
          <p className="text-navy-700/70 max-w-2xl mx-auto">
            Seamless, encrypted web portals tailored for Parents, Students, Faculty, Management, Hostel Warden & Fleet Transport Supervisors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. Parent Portal */}
          <div className="card-lift group p-8 rounded-3xl bg-white border border-cream-200 text-left hover:border-gold-500/50 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-[11px] font-bold">ParentConnect</span>
            </div>
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl text-navy-900 mb-2 font-bold">Parent Portal</h3>
              <p className="text-sm text-navy-700/80 leading-relaxed mb-6">
                Track live attendance, pay school fees online, view academic progress reports, track live bus GPS, and message class teachers directly.
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-cream-200">
              <a
                href="/portals/parent/index.html"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-navy-900 text-white font-semibold text-xs rounded-xl hover:bg-gold-500 hover:text-navy-900 transition flex items-center justify-center gap-2"
              >
                Launch Full Portal <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => openPortalFrame('parent')}
                className="w-full py-2.5 bg-cream-100 text-navy-800 font-semibold text-xs rounded-xl hover:bg-cream-200 transition flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4 text-gold-600" /> In-Website Frame Demo
              </button>
            </div>
          </div>

          {/* 2. Student Portal */}
          <div className="card-lift group p-8 rounded-3xl bg-white border border-cream-200 text-left hover:border-gold-500/50 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold">EduLearn Hub</span>
            </div>
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl text-navy-900 mb-2 font-bold">Student Portal</h3>
              <p className="text-sm text-navy-700/80 leading-relaxed mb-6">
                Access homework assignments, e-library notes, online exam simulators, daily timetable, e-certificates, and 24/7 AI tutor support.
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-cream-200">
              <a
                href="/portals/student/index.html"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-navy-900 text-white font-semibold text-xs rounded-xl hover:bg-gold-500 hover:text-navy-900 transition flex items-center justify-center gap-2"
              >
                Launch Full Portal <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => openPortalFrame('student')}
                className="w-full py-2.5 bg-cream-100 text-navy-800 font-semibold text-xs rounded-xl hover:bg-cream-200 transition flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4 text-gold-600" /> In-Website Frame Demo
              </button>
            </div>
          </div>

          {/* 3. Teacher Portal */}
          <div className="card-lift group p-8 rounded-3xl bg-white border border-cream-200 text-left hover:border-gold-500/50 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">TeachFlow</span>
            </div>
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl text-navy-900 mb-2 font-bold">Teacher Portal</h3>
              <p className="text-sm text-navy-700/80 leading-relaxed mb-6">
                Mark biometric-synced class attendance, assign homework, upload term marks, manage exam schedules, and submit leave requests.
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-cream-200">
              <a
                href="/portals/teacher/index.html"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-navy-900 text-white font-semibold text-xs rounded-xl hover:bg-gold-500 hover:text-navy-900 transition flex items-center justify-center gap-2"
              >
                Launch Full Portal <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => openPortalFrame('teacher')}
                className="w-full py-2.5 bg-cream-100 text-navy-800 font-semibold text-xs rounded-xl hover:bg-cream-200 transition flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4 text-gold-600" /> In-Website Frame Demo
              </button>
            </div>
          </div>

          {/* 4. Admission CRM & Admin */}
          <div className="card-lift group p-8 rounded-3xl bg-white border border-cream-200 text-left hover:border-gold-500/50 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-[11px] font-bold">EduCRM Pro</span>
            </div>
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center mb-6 group-hover:scale-110 transition shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl text-navy-900 mb-2 font-bold">Admission CRM & Admin</h3>
              <p className="text-sm text-navy-700/80 leading-relaxed mb-6">
                Real-time pipeline analytics, lead capturing from social/ads, automated WhatsApp follow-ups, fee collection analytics, and HRMS control.
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-cream-200">
              <a
                href="/portals/crm/index.html"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-navy-900 text-white font-semibold text-xs rounded-xl hover:bg-gold-500 hover:text-navy-900 transition flex items-center justify-center gap-2"
              >
                Launch Full Portal <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => openPortalFrame('crm')}
                className="w-full py-2.5 bg-cream-100 text-navy-800 font-semibold text-xs rounded-xl hover:bg-cream-200 transition flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4 text-gold-600" /> In-Website Frame Demo
              </button>
            </div>
          </div>

          {/* 5. Hostel Portal */}
          <div className="card-lift group p-8 rounded-3xl bg-white border border-cream-200 text-left hover:border-gold-500/50 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold">HostelFlow</span>
            </div>
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition shadow-lg">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl text-navy-900 mb-2 font-bold">Hostel Management</h3>
              <p className="text-sm text-navy-700/80 leading-relaxed mb-6">
                Residential room allocation, digital warden logbooks, gate pass approvals, mess menu planner, and biometric night attendance monitoring.
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-cream-200">
              <a
                href="/portals/hostel/index.html"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-navy-900 text-white font-semibold text-xs rounded-xl hover:bg-gold-500 hover:text-navy-900 transition flex items-center justify-center gap-2"
              >
                Launch Full Portal <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => openPortalFrame('hostel')}
                className="w-full py-2.5 bg-cream-100 text-navy-800 font-semibold text-xs rounded-xl hover:bg-cream-200 transition flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4 text-gold-600" /> In-Website Frame Demo
              </button>
            </div>
          </div>

          {/* 6. Transport Portal */}
          <div className="card-lift group p-8 rounded-3xl bg-white border border-cream-200 text-left hover:border-gold-500/50 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-[11px] font-bold">RouteSafe TMS</span>
            </div>
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center mb-6 group-hover:scale-110 transition shadow-lg">
                <Bus className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl text-navy-900 mb-2 font-bold">Transport System</h3>
              <p className="text-sm text-navy-700/80 leading-relaxed mb-6">
                Live GPS fleet tracking, driver document verification, automated route optimization, student boarding logs, and speed alert notifications.
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-cream-200">
              <a
                href="/portals/transport/index.html"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-navy-900 text-white font-semibold text-xs rounded-xl hover:bg-gold-500 hover:text-navy-900 transition flex items-center justify-center gap-2"
              >
                Launch Full Portal <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => openPortalFrame('transport')}
                className="w-full py-2.5 bg-cream-100 text-navy-800 font-semibold text-xs rounded-xl hover:bg-cream-200 transition flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4 text-gold-600" /> In-Website Frame Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
