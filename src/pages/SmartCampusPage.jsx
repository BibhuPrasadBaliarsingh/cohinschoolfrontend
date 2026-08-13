import React from 'react';
import PageWrapper from '../components/PageWrapper';
import HeaderBanner from '../components/HeaderBanner';
import { Cpu, Smartphone, Shield, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SmartCampusPage({ openModule, openPortalFrame }) {
  return (
    <PageWrapper>
      <HeaderBanner
        title="Smart Campus ERP, CRM & AI Ecosystem"
        subtitle="100% paperless school administration, real-time GPS bus tracking, biometric sync, and native mobile apps built with Briskode Technology."
        badge="Next-Gen School Operating System"
        breadcrumb="Smart Campus"
        bgImage="/images/smart_campus_banner.png"
      />

      <DigitalEcosystem openModule={openModule} />

      {/* Deep Dive into Briskode Technology Features */}
      <section className="py-20 bg-cream-50 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-600 font-medium tracking-widest uppercase text-xs mb-2 block">
              Digital Platform Highlights
            </span>
            <h2 className="font-display text-4xl text-navy-900 font-bold mb-4">
              Key Capabilities of Our Digital Campus
            </h2>
            <p className="text-navy-700/70 max-w-2xl mx-auto">
              Connecting parents, teachers, management, and students in real time with enterprise-grade security.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-cream-200 shadow-md">
              <Zap className="w-10 h-10 text-gold-600 mb-4" />
              <h3 className="font-display text-2xl text-navy-900 font-bold mb-2">
                Automated WhatsApp API
              </h3>
              <p className="text-navy-700/80 text-sm leading-relaxed mb-4">
                Instant WhatsApp notifications for attendance alerts, fee receipts, exam timetables, homework reminders, and holiday circulars.
              </p>
              <ul className="space-y-2 text-xs text-navy-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-600" /> Real-time instant alerts</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-600" /> Automated fee receipts</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-cream-200 shadow-md">
              <Smartphone className="w-10 h-10 text-gold-600 mb-4" />
              <h3 className="font-display text-2xl text-navy-900 font-bold mb-2">
                Native Flutter Apps
              </h3>
              <p className="text-navy-700/80 text-sm leading-relaxed mb-4">
                Separate high-performance mobile apps for iOS & Android tailored for Parents, Students, Teachers, and Management.
              </p>
              <ul className="space-y-2 text-xs text-navy-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-600" /> Live bus GPS tracking</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-600" /> One-tap fee payment</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-cream-200 shadow-md">
              <Cpu className="w-10 h-10 text-gold-600 mb-4" />
              <h3 className="font-display text-2xl text-navy-900 font-bold mb-2">
                AI Predictive Analytics
              </h3>
              <p className="text-navy-700/80 text-sm leading-relaxed mb-4">
                AI algorithms analyze attendance patterns to predict potential dropouts or absentees early, allowing timely teacher intervention.
              </p>
              <ul className="space-y-2 text-xs text-navy-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-600" /> Predictive attendance alerts</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-600" /> Automated performance reports</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-3">Experience Live Portals Demo</h2>
          <p className="text-white/70 mb-6 text-sm">
            Launch our interactive in-website portal frame simulator for Parent, Student, Teacher, CRM, Hostel & Transport modules.
          </p>
          <Link
            to="/portals"
            className="btn-premium inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-900 font-bold rounded-full hover:bg-gold-400 transition"
          >
            Go to Portals Hub →
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
