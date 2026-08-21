import React from 'react';
import PageWrapper from '../components/PageWrapper';
import HeaderBanner from '../components/HeaderBanner';
import Careers from '../components/Careers';
import { Award, Home, BookOpen, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

export default function CareersPage({ openCareerModal }) {
  return (
    <PageWrapper>
      <HeaderBanner
        title="Careers & Faculty Recruitment at CIS"
        subtitle="We empower our educators with competitive remuneration, on-campus accommodation, continuous CPD training, and a state-of-the-art tech workspace."
        
        breadcrumb="Careers"
        bgImage="/images/academics_banner.png"
      />

      <Careers openCareerModal={openCareerModal} />

      {/* Faculty Benefits Section */}
      <section className="py-20 bg-cream-100 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-600 font-medium tracking-widest uppercase text-xs mb-2 block">
              Why Teach at CIS
            </span>
            <h2 className="font-display text-4xl text-navy-900 font-bold mb-4">
              Perks & Professional Environment
            </h2>
            <p className="text-navy-700/70 max-w-2xl mx-auto">
              We provide an ecosystem where educators thrive, innovate, and shape the future of education in Odisha.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-cream-200 shadow-md">
              <Award className="w-10 h-10 text-gold-600 mb-4" />
              <h3 className="font-display text-2xl text-navy-900 font-bold mb-2">
                Competitive Remuneration
              </h3>
              <p className="text-navy-700/80 text-sm leading-relaxed">
                7th Pay Commission aligned pay structure + performance incentives for JEE/NEET results and research contributions.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-cream-200 shadow-md">
              <Home className="w-10 h-10 text-gold-600 mb-4" />
              <h3 className="font-display text-2xl text-navy-900 font-bold mb-2">
                Free On-Campus Quarters
              </h3>
              <p className="text-navy-700/80 text-sm leading-relaxed">
                Furnished residential accommodation on our 10-acre green campus for resident wardens and outstation senior faculty.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-cream-200 shadow-md">
              <BookOpen className="w-10 h-10 text-gold-600 mb-4" />
              <h3 className="font-display text-2xl text-navy-900 font-bold mb-2">
                Continuous CPD Workshops
              </h3>
              <p className="text-navy-700/80 text-sm leading-relaxed">
                Regular training programs by CBSE master trainers, IIT professors, and AI technology pioneers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
