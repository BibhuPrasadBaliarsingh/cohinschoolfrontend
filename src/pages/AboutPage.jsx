import React from 'react';
import PageWrapper from '../components/PageWrapper';
import HeaderBanner from '../components/HeaderBanner';
import About from '../components/About';
import { Target, Compass, Award, BookOpen, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage({ openChairmanModal, openAdmissionModal }) {
  return (
    <PageWrapper>
      <HeaderBanner
        title="About Cohen International School"
        subtitle="A 10-Acre Green Campus Next to IIT Bhubaneswar — Where Academic Rigor Meets Holistic Growth & Future-Ready Skills."
        badge="Excellence Through Harmony"
        breadcrumb="About Us"
        bgImage="/images/about_banner.png"
      />

      <About openChairmanModal={openChairmanModal} />

      {/* Core Pedagogy Section */}
      <section className="py-20 bg-cream-100 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-600 font-medium tracking-widest uppercase text-xs mb-2 block">
              Our Core Pedagogy
            </span>
            <h2 className="font-display text-4xl text-navy-900 font-bold mb-4">
              The CIS Learning Framework
            </h2>
            <p className="text-navy-700/70 max-w-2xl mx-auto">
              Our unique educational methodology empowers students to become independent thinkers, innovators, and compassionate leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-cream-200 shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center font-bold text-xl mb-6">
                C
              </div>
              <h3 className="font-display text-2xl text-navy-900 font-semibold mb-3">
                Collaborative Learning
              </h3>
              <p className="text-navy-700/80 text-sm leading-relaxed">
                Classroom group projects, peer discussions, and team problem-solving foster communication, teamwork, and global perspective.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-cream-200 shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-gold-500 text-navy-900 flex items-center justify-center font-bold text-xl mb-6">
                I
              </div>
              <h3 className="font-display text-2xl text-navy-900 font-semibold mb-3">
                Instrumental Knowledge
              </h3>
              <p className="text-navy-700/80 text-sm leading-relaxed">
                Practical application through AI Robotics labs, STEM experiments, Cambridge speech labs, and competitive coaching modules.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-cream-200 shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center font-bold text-xl mb-6">
                S
              </div>
              <h3 className="font-display text-2xl text-navy-900 font-semibold mb-3">
                Self-Paced Growth
              </h3>
              <p className="text-navy-700/80 text-sm leading-relaxed">
                Customized academic mentorship, personalized doubt-clearing sessions, and digital portal access tailored to each child's learning speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-navy-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Experience the CIS Campus Difference
          </h2>
          <p className="text-white/70 text-base mb-8">
            Book a personal campus tour or speak directly with our admissions desk to learn more about the 2026–27 batch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openAdmissionModal('apply')}
              className="btn-premium px-8 py-4 bg-gold-500 text-navy-900 font-semibold rounded-full shadow-lg hover:bg-gold-400 transition"
            >
              Apply Online Now
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
