import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, ArrowRight, Send, ChevronRight } from 'lucide-react';

const jobsData = [
  {
    id: 1,
    role: 'PGT Physics / Chemistry (IIT-JEE & NEET)',
    category: 'Senior Faculty',
    badgeBg: 'bg-blue-100 text-blue-800',
    location: 'Jatani Campus • Full-Time',
    desc: 'Minimum 5+ years experience mentoring JEE & NEET aspirants. M.Sc / Ph.D / B.Tech preferred.',
  },
  {
    id: 2,
    role: 'TGT Mathematics & Science',
    category: 'Middle School',
    badgeBg: 'bg-emerald-100 text-emerald-800',
    location: 'Jatani Campus • Full-Time',
    desc: 'Conceptual clarity with activity-based teaching. B.Sc/M.Sc + B.Ed required with 3+ yrs experience.',
  },
  {
    id: 3,
    role: 'AI, Coding & Robotics Trainer',
    category: 'Technology',
    badgeBg: 'bg-purple-100 text-purple-800',
    location: 'Jatani Campus • Full-Time',
    desc: 'Passion for Python, Scratch, Arduino & AI concepts for Grade III-X. B.Tech / BCA / MCA.',
  },
  {
    id: 4,
    role: 'Montessori & Primary Educator',
    category: 'Primary School',
    badgeBg: 'bg-amber-100 text-amber-800',
    location: 'Jatani Campus • Full-Time',
    desc: 'NTT/Montessori certified teachers to nurture early literacy and foundational skills.',
  },
  {
    id: 5,
    role: 'Hostel Warden (Boys & Girls)',
    category: 'Residential Admin',
    badgeBg: 'bg-rose-100 text-rose-800',
    location: 'Residential Campus • Full-Time',
    desc: 'Responsible for boarding discipline, health monitoring and evening study supervision.',
  },
  {
    id: 6,
    role: 'Sports Coach & PET Instructor',
    category: 'Sports & Fitness',
    badgeBg: 'bg-sky-100 text-sky-800',
    location: 'Jatani Campus • Full-Time',
    desc: 'B.P.Ed / M.P.Ed certified coach for Cricket, Football, Athletics or Martial Arts.',
  },
];

export default function Careers({ openCareerModal, isHomePage = false }) {
  const displayedJobs = isHomePage ? jobsData.slice(0, 3) : jobsData;

  return (
    <section id="careers" className="py-12 lg:py-16 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5" /> Join Our Faculty &amp; Staff
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy-900 mb-3 font-bold">
            Careers at Cohen International
          </h2>
          <p className="text-navy-700/70 text-sm sm:text-base max-w-2xl mx-auto">
            Shape the leaders of tomorrow. We offer competitive remuneration, PF, ESI, research support, and an inspiring tech-enabled workplace.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8">
          {displayedJobs.map((job) => (
            <div
              key={job.id}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-cream-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-gold-500/40"
            >
              <div>
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold mb-2.5 inline-block ${job.badgeBg}`}>
                  {job.category}
                </span>
                <h3 className="font-display text-base sm:text-lg text-navy-900 font-bold mb-1.5 group-hover:text-gold-600 transition-colors leading-snug">
                  {job.role}
                </h3>
                <p className="text-[11px] text-navy-600 mb-2.5 flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3 h-3 text-gold-600 flex-shrink-0" /> {job.location}
                </p>
                <p className="text-xs text-navy-700/80 leading-relaxed mb-4">
                  {job.desc}
                </p>
              </div>
              <button
                type="button"
                onClick={() => openCareerModal?.(job.role)}
                className="w-full py-2.5 px-4 bg-navy-900 text-white font-semibold text-xs rounded-xl hover:bg-gold-500 hover:text-navy-950 transition-colors duration-200 flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* VIEW MORE CAREERS BUTTON FOR HOMEPAGE */}
        {isHomePage && (
          <div className="flex justify-center mt-6 mb-10 reveal">
            <Link
              to="/careers"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-navy-950 text-gold-400 hover:bg-gold-500 hover:text-navy-950 font-bold text-xs sm:text-sm shadow-xl hover:shadow-gold-500/20 transition-all duration-300 border border-gold-500/30 group"
            >
              <span>View More Openings &amp; Full Careers Page</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {!isHomePage && (
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-navy-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl reveal border border-gold-500/30">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-1.5">Don't see your specific role listed?</h3>
              <p className="text-white/70 text-xs sm:text-sm">
                We are always eager to meet exceptional educators, administrators, and mentors. Send your CV to our HR portal.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openCareerModal?.('General Faculty & Staff Application')}
              className="btn-premium px-6 py-3 bg-gold-500 text-navy-950 font-bold text-xs sm:text-sm rounded-full shadow-lg hover:bg-gold-400 transition flex-shrink-0 flex items-center gap-2"
            >
              <Send className="w-4 h-4" /> Submit General Resume
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
