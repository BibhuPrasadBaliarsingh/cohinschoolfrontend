import React from 'react';
import PageWrapper from '../components/PageWrapper';
import HeaderBanner from '../components/HeaderBanner';
import Facilities from '../components/Facilities';
import { Tv, FlaskConical, Trophy, BookOpen, Home, Bus, Shield, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FacilitiesPage({ openDedicatedTopic, openAdmissionModal }) {
  return (
    <PageWrapper>
      <HeaderBanner
        title="World-Class Campus Facilities & Infrastructure"
        subtitle="Spread across 10 lush green acres near IIT Bhubaneswar — designed for high academic focus, health, safety, and athletic excellence."
        breadcrumb="Facilities"
        bgImage="/images/facilities_banner.png"
      />

      <Facilities openDedicatedTopic={openDedicatedTopic} />

      {/* Facilities Highlights Section */}
      <section className="py-20 bg-cream-50 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-600 font-medium tracking-widest uppercase text-xs mb-2 block">
              Infrastructure Breakdown
            </span>
            <h2 className="font-display text-4xl text-navy-900 font-bold mb-4">
              Everything Needed for Campus Excellence
            </h2>
            <p className="text-navy-700/70 max-w-2xl mx-auto">
              Our campus combines pollution-free natural serenity with cutting-edge digital technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-cream-200 shadow-sm">
              <Tv className="w-8 h-8 text-gold-600 mb-3" />
              <h3 className="font-semibold text-navy-900 mb-1 text-lg">Smart Classrooms</h3>
              <p className="text-xs text-navy-700/70 leading-relaxed">
                75" 4K interactive touch panels, high-speed Wi-Fi, audio-visual systems & digital recording.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-cream-200 shadow-sm">
              <FlaskConical className="w-8 h-8 text-gold-600 mb-3" />
              <h3 className="font-semibold text-navy-900 mb-1 text-lg">AI & STEM Labs</h3>
              <p className="text-xs text-navy-700/70 leading-relaxed">
                Physics, Chemistry, Biology, Mathematics & AI Robotics studio with 3D printers and Python coding pods.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-cream-200 shadow-sm">
              <Trophy className="w-8 h-8 text-gold-600 mb-3" />
              <h3 className="font-semibold text-navy-900 mb-1 text-lg">over 2.5-Acres Sports Complex</h3>
              <p className="text-xs text-navy-700/70 leading-relaxed">
                Cricket turf, football ground, basketball court, lawn tennis, badminton & professional coaches.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-cream-200 shadow-sm">
              <Home className="w-8 h-8 text-gold-600 mb-3" />
              <h3 className="font-semibold text-navy-900 mb-1 text-lg">Residential AC Hostels</h3>
              <p className="text-xs text-navy-700/70 leading-relaxed">
                Separate Boys & Girls hostels, 24×7 resident wardens, study halls, mess & laundry facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-3">Want to Tour Our 10-Acres Campus?</h2>
          <p className="text-white/70 mb-6 text-sm">
            Visit us near Barunei Hills, Jatani or request a personalized counselling session.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-premium px-8 py-3.5 bg-gold-500 text-navy-900 font-semibold rounded-full hover:bg-gold-400 transition"
            >
              Book Guided Campus Tour
            </Link>
            <button
              onClick={() => openAdmissionModal('register')}
              className="px-8 py-3.5 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition"
            >
              Register Seat
            </button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
