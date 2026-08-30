import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import HeaderBanner from '../components/HeaderBanner';
import { GraduationCap, Mail, Award, BookOpen, Sparkles, UserCheck, ShieldCheck } from 'lucide-react';

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
    bio: 'Mr. Vikas Bahinipati, MBA from Maastricht School of Management with over 18 years of corporate work experience in Africa, Middle East & Asia. Educationist and administrative experience spanning across various countries & cultures. Trained as an ISO 9001:2000 Internal Auditor and has completed Kaizen – Six Sigma, Green Belt course too.',
    email: 'vicechairman@coheninternationalschool.com',
  },
  {
    id: 3,
    title: 'Secretary, Mr. Janmejay Mandal',
    subtitle: 'MBA from Utkal University, Bhubaneswar',
    image: '/images/about_banner.png',
    bio: 'Mr. Janmejay Mandal, MBA from Utkal University, Bhubaneswar with over 16 years of experience in the field of Education and Student Counselling. Work experience in major cities of India with good working relationships with various academic institutions of repute in the country. Co-Convenor of "Science Movement", a science and technology program for students of Odisha.',
    email: 'secretary@coheninternationalschool.com',
  },
];

const facultyMembers = [
  {
    name: 'Dr. Rajesh Kumar Mohanty',
    role: 'Senior Physics & IIT-JEE Faculty Lead',
    dept: 'Physics & Applied Science',
    qualification: 'Ph.D. in Applied Physics (IIT BBS)',
    experience: '14+ Years Teaching Experience',
    avatarBg: 'from-amber-500 to-orange-600',
    initials: 'RM',
  },
  {
    name: 'Dr. Ananya Pattnaik',
    role: 'Chemistry Department Head & NEET Specialist',
    dept: 'Organic & Inorganic Chemistry',
    qualification: 'Ph.D. in Chemistry (Utkal University)',
    experience: '12+ Years Teaching Experience',
    avatarBg: 'from-emerald-500 to-teal-700',
    initials: 'AP',
  },
  {
    name: 'Prof. Subhranshu Sekhar Ray',
    role: 'Senior Mathematics Faculty & Olympiad Mentor',
    dept: 'Mathematics & Computing',
    qualification: 'M.Sc. Mathematics (NISER)',
    experience: '11+ Years Teaching Experience',
    avatarBg: 'from-blue-600 to-indigo-800',
    initials: 'SR',
  },
  {
    name: 'Mrs. Sunita Samantray',
    role: 'Head of English & Humanities',
    dept: 'English Literature & Oration',
    qualification: 'M.A. English, B.Ed (Utkal)',
    experience: '15+ Years Teaching Experience',
    avatarBg: 'from-purple-600 to-pink-700',
    initials: 'SS',
  },
  {
    name: 'Dr. Soumya Ranjan Dash',
    role: 'Senior Biology & NEET Faculty',
    dept: 'Botany & Zoology',
    qualification: 'Ph.D. Life Sciences',
    experience: '10+ Years Teaching Experience',
    avatarBg: 'from-emerald-600 to-green-800',
    initials: 'SD',
  },
  {
    name: 'Er. Debasis Mishra',
    role: 'Computer Science & AI Robotics Mentor',
    dept: 'STEM & Robotics Lab',
    qualification: 'M.Tech Computer Science (VSSUT)',
    experience: '9+ Years Industry & Academic Exp.',
    avatarBg: 'from-cyan-600 to-blue-700',
    initials: 'DM',
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

      {/* ── SECTION 2: ACADEMIC FACULTY DIRECTORY ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-700 text-xs font-bold uppercase tracking-widest mb-3">
              <GraduationCap className="w-4 h-4 text-gold-600" /> Academic Excellence
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy-900 font-bold">
              Faculty &amp; Academic Mentors
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans">
              Dedicated IITians, Doctorates, and seasoned educators committed to shaping future champions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {facultyMembers.map((faculty, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${faculty.avatarBg} text-white font-bold text-lg flex items-center justify-center shadow-md flex-shrink-0`}
                    >
                      {faculty.initials}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-navy-950 text-lg leading-tight">
                        {faculty.name}
                      </h4>
                      <p className="text-xs font-semibold text-gold-600 mt-0.5">
                        {faculty.dept}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-navy-800 mb-1">
                    {faculty.role}
                  </p>
                  <p className="text-xs text-slate-600 mb-2">
                    🎓 {faculty.qualification}
                  </p>
                  <p className="text-xs text-slate-500">
                    ⭐ {faculty.experience}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-medium">
                    <UserCheck className="w-3 h-3 text-emerald-600" /> Full-Time Faculty
                  </span>
                  <button
                    onClick={() => openAdmissionModal && openAdmissionModal('apply')}
                    className="text-xs text-navy-900 font-bold hover:text-gold-600 transition"
                  >
                    Inquire Mentorship →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
