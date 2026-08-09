import React from 'react';
import PageWrapper from '../components/PageWrapper';
import HeaderBanner from '../components/HeaderBanner';
import PortalsPreview from '../components/PortalsPreview';
import { Heart, GraduationCap, BookOpen, Shield, Home, Bus, KeyRound, ExternalLink } from 'lucide-react';

export default function PortalsPage({ openPortalFrame, openLoginModal }) {
  return (
    <PageWrapper>
      <HeaderBanner
        title="Role-Based Digital Campus Portals"
        subtitle="Encrypted web portals designed specifically for every stakeholder in the Cohen International School ecosystem."
        badge="Single Sign-On (SSO)"
        breadcrumb="Portals Hub"
        bgImage="/images/smart_campus_banner.png"
      />

      {/* Quick Portal Switcher Banner */}
      <section className="py-12 bg-navy-900 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-gold-400 font-medium uppercase text-xs tracking-widest block mb-1">Quick Login</span>
            <h3 className="font-display text-2xl font-bold text-white">Select Your Portal Role</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <button
              onClick={() => openLoginModal('parent')}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-400/60 hover:bg-rose-500/10 transition flex flex-col items-center gap-2 group"
            >
              <Heart className="w-6 h-6 text-rose-400 group-hover:scale-110 transition" />
              <span className="text-xs font-semibold text-white">Parent Portal</span>
            </button>

            <button
              onClick={() => openLoginModal('student')}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/60 hover:bg-blue-500/10 transition flex flex-col items-center gap-2 group"
            >
              <GraduationCap className="w-6 h-6 text-blue-400 group-hover:scale-110 transition" />
              <span className="text-xs font-semibold text-white">Student Portal</span>
            </button>

            <button
              onClick={() => openLoginModal('teacher')}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/60 hover:bg-emerald-500/10 transition flex flex-col items-center gap-2 group"
            >
              <BookOpen className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition" />
              <span className="text-xs font-semibold text-white">Teacher Portal</span>
            </button>

            <button
              onClick={() => openLoginModal('crm')}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-400/60 hover:bg-violet-500/10 transition flex flex-col items-center gap-2 group"
            >
              <Shield className="w-6 h-6 text-violet-400 group-hover:scale-110 transition" />
              <span className="text-xs font-semibold text-white">Admin / CRM</span>
            </button>

            <button
              onClick={() => openLoginModal('hostel')}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/60 hover:bg-amber-500/10 transition flex flex-col items-center gap-2 group"
            >
              <Home className="w-6 h-6 text-amber-400 group-hover:scale-110 transition" />
              <span className="text-xs font-semibold text-white">Hostel Portal</span>
            </button>

            <button
              onClick={() => openLoginModal('transport')}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/60 hover:bg-sky-500/10 transition flex flex-col items-center gap-2 group"
            >
              <Bus className="w-6 h-6 text-sky-400 group-hover:scale-110 transition" />
              <span className="text-xs font-semibold text-white">Transport Portal</span>
            </button>
          </div>
        </div>
      </section>

      <PortalsPreview openPortalFrame={openPortalFrame} />
    </PageWrapper>
  );
}
