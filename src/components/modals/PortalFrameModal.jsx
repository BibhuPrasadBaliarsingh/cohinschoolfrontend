import React from 'react';
import { Link } from 'react-router-dom';
import { X, ExternalLink } from 'lucide-react';

const portalRoutes = {
  parent: { title: 'ParentConnect Guardian Portal', path: '/parent/dashboard', role: 'parent' },
  student: { title: 'EduLearn Student Hub', path: '/student/dashboard', role: 'student' },
  teacher: { title: 'TeachFlow Faculty Portal', path: '/teacher/dashboard', role: 'teacher' },
  crm: { title: 'EduCRM Pro Admission Portal', path: '/admin/dashboard', role: 'admin' },
  hostel: { title: 'HostelFlow Management System', path: '/admin/dashboard', role: 'admin' },
  transport: { title: 'RouteSafe Transport System', path: '/admin/dashboard', role: 'admin' }
};

export default function PortalFrameModal({ closeModal, openLoginModal, openPortalFrame, portalKey = 'parent' }) {
  const key = portalKey;
  const portal = portalRoutes[key] || portalRoutes.parent;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 modal-backdrop"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="portal-frame-title"
    >
      <div
        className="bg-navy-900 rounded-3xl w-full max-w-6xl h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-gold-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-navy-950 px-4 sm:px-6 py-3 flex items-center justify-between border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <h3 id="portal-frame-title" className="font-bold text-white text-sm sm:text-base">
              {portal.title}
            </h3>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-400 text-[10px] uppercase font-bold border border-gold-500/30">
              In-Website Live Demo
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1 bg-white/10 p-1 rounded-xl">
              {['parent', 'student', 'teacher', 'crm', 'hostel', 'transport'].map((pk) => (
                <button
                  key={pk}
                  type="button"
                  onClick={() => openPortalFrame(pk)}
                  aria-label={`Switch to ${pk} portal`}
                  className={`px-2.5 py-1 text-xs text-white hover:bg-white/10 rounded-lg font-medium transition capitalize ${
                    key === pk ? 'bg-gold-500 text-navy-900 font-bold' : ''
                  }`}
                >
                  {pk}
                </button>
              ))}
            </div>

            <Link
              to={portal.path}
              onClick={closeModal}
              className="px-3 py-1.5 bg-gold-500 text-navy-900 rounded-xl text-xs font-bold hover:bg-gold-400 transition flex items-center gap-1"
            >
              Open Dashboard <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              type="button"
              onClick={closeModal}
              aria-label="Close portal frame"
              className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex-1 w-full bg-navy-950 p-6 sm:p-10 text-white overflow-y-auto flex flex-col items-center justify-center text-center">
          <div className="max-w-md mx-auto space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-3xl mx-auto shadow-xl">
              🛡
            </div>
            <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-white">{portal.title}</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              You are viewing the interactive Single Sign-On portal demo. Click below to log in or launch the full-screen role-based React
              dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                type="button"
                onClick={() => openLoginModal(key)}
                className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-sm transition shadow-lg"
              >
                Log In to {key.toUpperCase()} Desk
              </button>
              <Link
                to={portal.path}
                onClick={closeModal}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition"
              >
                Direct Dashboard View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
