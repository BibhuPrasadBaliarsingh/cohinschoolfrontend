import React from 'react';
import PageWrapper from '../components/PageWrapper';
import HeaderBanner from '../components/HeaderBanner';
import { Mail } from 'lucide-react';

const administrators = [
  {
    id: 1,
    title: 'Chairman, Mr. Jyoti Ranjan Tripathy',
    subtitle: 'Mechanical Engineering at IIT - Kharagpur',
    image: '/chairman.jpg',
    bio: 'Mr. Jyoti Ranjan Tripathy, Founder & Chairman - Cohen International School. Studied Mechanical Engineering at Indian Institute of Technology (IIT) Kharagpur. After brief stint in Top MNC\'s, pursued his passion in teaching and founded Vidwan Classes- a premier IIT & Medical entrance institute of Odisha. To further strengthen grassroots education has founded Cohen International School spread over 10acres of land near to IIT Bhubaneswar.',
    email: 'chairman@coheninternationalschool.com',
  },
  {
    id: 2,
    title: 'Vice Chairman, Mr. Vikas Bahinipati',
    subtitle: 'MBA from Maastricht School of Management, The Netherlands',
    image: '/images/about_vc.jpg',
    bio: 'Mr. Vikas Bahinipati, MBA from Maastricht School of Management with over 25 years of corporate work experience in Africa, Middle East & Asia. Educationist and administrative experience spanning across various countries & cultures. Trained as an ISO 9001:2000 Internal Auditor and has completed Kaizen – Six Sigma, Green Belt course too.',
    email: 'vicechairman@coheninternationalschool.com',
  },
  {
    id: 3,
    title: 'Secretary, Mr. Janmejay Mandal',
    subtitle: 'MBA from Utkal University, Bhubaneswar',
    image: '/images/about_seceratry.jpg',
    bio: 'Mr. Janmejay Mandal, MBA from Utkal University, Bhubaneswar with over 16 years of experience in the field of Education and Student Counselling. Work experience in major cities of India with good working relationships with various academic institutions of repute in the country. Co-Convenor of "Science Movement", a science and technology program for students of Odisha.',
    email: 'secretary@coheninternationalschool.com',
  },
  {
    id: 4,
    title: 'Principal, Jagjeevan R.D. Dash',
    subtitle: 'M.Sc Botany, M.A. Sociology & Gold Medalist B.Ed (Kurukshetra University)',
    image: '/images/about_principal.jpg',
    bio: 'Jagjeevan R.D. Dash, Principal - Cohen International School. M.Sc Botany, M.A. Sociology & Gold Medalist B.Ed from Kurukshetra University. Dedicated academician committed to guiding students towards personal excellence, holistic development, and strong moral values.',
    email: 'principal@coheninternationalschool.com',
  },
];

export default function FacultyPage({ openAdmissionModal }) {
  return (
    <PageWrapper>
      {/* Header Banner */}
      <HeaderBanner
        title="Our Management"
        subtitle="Visionary Leadership & Esteemed Academic Faculty Driving Educational Excellence at Cohen International School."
        bgImage="/images/about_banner.png"
        breadcrumb="Our Management & Faculty"
      />

      {/* ── SECTION 1: ADMINISTRATORS / MANAGEMENT ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy-900 font-bold tracking-tight">
              Administrators
            </h2>
            <div className="w-20 h-1.5 bg-gold-500 mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans">
              Meet our distinguished board of management, educationists, and key administrative leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            {administrators.map((admin) => (
              <div
                key={admin.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Photo Container */}
                  <div className="h-72 sm:h-80 w-full overflow-hidden bg-slate-100 relative">
                    <img
                      src={admin.image}
                      alt={admin.title}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/images/about_banner.png";
                      }}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Header Details */}
                  <div className="p-6">
                    <h3 className="font-display text-xl sm:text-2xl text-navy-950 font-bold leading-snug">
                      {admin.title}
                    </h3>
                    <p className="text-sm font-medium italic text-slate-600 mt-1">
                      {admin.subtitle}
                    </p>

                    <p className="mt-4 text-sm text-slate-700 leading-relaxed font-sans text-justify">
                      {admin.bio}
                    </p>
                  </div>
                </div>

                {/* Email Footer */}
                {admin.email && (
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-navy-800">
                    <Mail className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <a href={`mailto:${admin.email}`} className="hover:text-gold-600 transition truncate">
                      {admin.email}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
