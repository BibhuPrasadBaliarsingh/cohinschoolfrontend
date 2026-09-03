import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, ArrowRight, Send, ChevronRight, Eye, X, CheckCircle2, ShieldCheck, Mail, Sparkles, Building, Clock, Award } from 'lucide-react';

const jobsData = [
  {
    id: 1,
    role: 'Administration & HR Manager',
    category: 'Administration',
    badgeBg: 'bg-amber-100 text-amber-800 border border-amber-300',
    location: 'Jatani Campus • Full-Time',
    desc: 'Energetic person with full knowledge of school functioning, managing administration & HR. Min 5 yrs experience, below 45 yrs, fluent in English & Hindi.',
    fullDetails: {
      requirements: [
        'Minimum 5+ years past work experience managing school administration & HR functions in leading schools.',
        'Age criteria: Below 45 years.',
        'Fluency in English & Hindi (oral & written communication).',
        'In-depth knowledge of school functioning, CBSE administrative processes, and staff management.'
      ],
      responsibilities: [
        'Managing daily campus operations, administrative workflows, and HR functions.',
        'Leading recruitment drives, staff onboarding, performance appraisal, and regulatory compliance.',
        'Coordinating between academic coordinators, trust management, and campus support staff.'
      ],
      positionsIncluded: ['Admin & HR Manager'],
      expRequired: 'Minimum 5+ Years',
      salaryNotes: 'Commensurate with experience & merit basis as per Industry standards.'
    }
  },
  {
    id: 2,
    role: 'IIT-JEE / NEET Coaching Faculty',
    category: 'Coaching Faculty',
    badgeBg: 'bg-blue-100 text-blue-800 border border-blue-300',
    location: 'Jatani Campus • Full-Time',
    desc: 'Faculty in Physics, Chemistry, Maths & Biology for JEE (Main & Advanced) and NEET enrichment. Ex-IITian or Master\'s/PhD with min 2+ yrs exp in reputed national institutes.',
    fullDetails: {
      requirements: [
        'Ex-IITian OR Master\'s / PhD from a reputed national institution.',
        'Minimum 2+ years experience or more mentoring JEE (Main & Advanced) and NEET aspirants.',
        'Preferably worked before for reputed national entrance coaching institutes.',
        'Strong problem-solving methodology and ability to train students for top national ranks.'
      ],
      responsibilities: [
        'Imparting JEE & NEET enrichment programs for Physics, Chemistry, Maths & Biology.',
        'Designing advanced problem sheets, mock tests, and doubt resolution sessions.',
        'Mentoring senior secondary students for national competitive entrance exams.'
      ],
      positionsIncluded: ['Physics Faculty', 'Chemistry Faculty', 'Mathematics Faculty', 'Biology Faculty'],
      expRequired: 'Minimum 2+ Years',
      salaryNotes: 'Top-tier remuneration structure matching national institute standards.'
    }
  },
  {
    id: 3,
    role: 'Academic Staff (PGTs, TGTs & PRTs)',
    category: 'Teaching Faculty',
    badgeBg: 'bg-emerald-100 text-emerald-800 border border-emerald-300',
    location: 'Jatani Campus • Full-Time',
    desc: 'PGTs, TGTs & PRTs across Eng, Phy, Chem, Math, Bio, CS, PE, Yoga, IT, Languages (Hindi, Odia, Sanskrit, French, German, Spanish), Arts, Music, Dance & Special Ed. Min 3 yrs exp.',
    fullDetails: {
      requirements: [
        'Minimum 3+ years past teaching experience in a reputed English medium school.',
        'Relevant Master\'s / Bachelor\'s degree + B.Ed in respective subject domain.',
        'Fluency in English, Hindi & Odia.',
        'Competent, value-based, and passionate individual committed to student excellence.'
      ],
      responsibilities: [
        'Curriculum delivery using modern progressive teaching methodologies from Nursery to Class XII.',
        'Continuous comprehensive evaluation, lesson planning, and student progress tracking.',
        'Organizing co-curricular activities, lab practicals, and academic enrichment sessions.'
      ],
      positionsIncluded: [
        'PGTs: English, Physics, Chemistry, Maths, Biology, Computer Science, Physical Education, Yoga Instructor, IT, Counsellor',
        'TGTs: English, Maths, Science, Social Studies, Hindi, Odia, Sanskrit, Computer Science, Physical Education',
        'PRTs: English, French, German, Spanish, Maths, Science, EVS, Hindi, Odia, Art & Craft, Librarian, Music (Instrumental & Vocal), Dance (Traditional & Modern), Special Education'
      ],
      expRequired: 'Minimum 3+ Years',
      salaryNotes: 'Salary commensurate with experience & merit basis as per industry standards.'
    }
  },
  {
    id: 4,
    role: 'Academic Coordinators, Lab Assistants & Nursery Teachers',
    category: 'Academic Support',
    badgeBg: 'bg-purple-100 text-purple-800 border border-purple-300',
    location: 'Jatani Campus • Full-Time',
    desc: 'Academic Coordinators, Lab Assistants (PCB), Public Relation Officers & Nursery Teachers. Minimum 3 yrs past experience in a reputed school, fluent in Eng/Hindi/Odia.',
    fullDetails: {
      requirements: [
        'Minimum 3+ years past work experience in a reputed school.',
        'Fluency in English, Hindi & Odia.',
        'Lab Assistants: Degree/Diploma in PCB with practical laboratory maintenance knowledge.',
        'Nursery Teachers: NTT / Montessori certification with early childhood care experience.'
      ],
      responsibilities: [
        'Coordinators: Academic supervision, timetable execution, and teacher mentoring.',
        'Lab Assistants (PCB): Managing Physics, Chemistry & Biology lab equipment, safety, and practical classes.',
        'PROs: Managing public relations, parent queries, and campus communications.'
      ],
      positionsIncluded: ['Academic Coordinators', 'Lab Assistants (PCB)', 'Public Relation Officers (PRO)', 'Nursery Teachers'],
      expRequired: 'Minimum 3+ Years',
      salaryNotes: 'Commensurate with experience & merit basis.'
    }
  },
  {
    id: 5,
    role: 'Business Development Manager / Executives',
    category: 'Marketing & BD',
    badgeBg: 'bg-rose-100 text-rose-800 border border-rose-300',
    location: 'Jatani Campus • Full-Time',
    desc: 'Proactive personnel with excellent communication & interpersonal skills, willingness to travel for educational programs. Below 40 yrs with sound computer knowledge.',
    fullDetails: {
      requirements: [
        'Age limit: Below 40 years.',
        'Excellent communication and interpersonal skills.',
        'Passion for educational programs and willingness to travel.',
        'Sound computer knowledge (MS Office, web applications, presentation tools).',
        'Fluency in English, Hindi & Odia.'
      ],
      responsibilities: [
        'Driving student enrollment initiatives, educational outreach, and school partnerships.',
        'Representing the school at educational exhibitions, seminars, and counseling sessions.',
        'Coordinating admission campaigns and client relations.'
      ],
      positionsIncluded: ['Business Development Manager', 'Business Development Executives'],
      expRequired: 'Relevant BD Experience',
      salaryNotes: 'Fixed salary + attractive travel allowances & incentives.'
    }
  },
  {
    id: 6,
    role: 'Senior Accountant & Junior Accountant',
    category: 'Finance & Accounts',
    badgeBg: 'bg-sky-100 text-sky-800 border border-sky-300',
    location: 'Jatani Campus • Full-Time',
    desc: 'Post Graduate in Commerce with 6-8 years experience in Education institutes. Expertise in process implementation, Income Tax & GST compliance.',
    fullDetails: {
      requirements: [
        'Post Graduate in Commerce (M.Com / MBA Finance).',
        '6 to 8 years of post-qualification accounting experience.',
        'Proven work experience with educational institutes.',
        'Expertise in implementation of accounting process & systems, Income Tax & GST compliance.'
      ],
      responsibilities: [
        'Managing school financial accounts, fee reconciliations, and payroll processing.',
        'Filing GST, Income Tax returns, TDS compliance, and coordinating annual audits.',
        'Preparing financial reports, balance sheets, and budget forecasts.'
      ],
      positionsIncluded: ['Senior Accountant', 'Junior Accountant'],
      expRequired: '6 - 8 Years',
      salaryNotes: 'Salary commensurate with experience & merit.'
    }
  },
  {
    id: 7,
    role: 'Non-Academic Staff (Graphic Designer, Warden, Mess, Transport)',
    category: 'Operations & Staff',
    badgeBg: 'bg-indigo-100 text-indigo-800 border border-indigo-300',
    location: 'Jatani Campus • Full-Time',
    desc: 'Graphic Designer, Hostel Superintendent, Warden (M/F), Mess Manager, Administrative Coordinator & Transport Coordinator. Min 3-5 yrs exp in English medium school.',
    fullDetails: {
      requirements: [
        'Minimum 3 to 5 years experience in an English medium school.',
        'Good track record and fluency in English, Hindi & Odia.',
        'Graphic Designer: Hands-on skills in Photoshop, Illustrator, CorelDraw, and digital design.',
        'Warden & Mess Manager: Strong administrative discipline, student safety awareness, and boarding management.'
      ],
      responsibilities: [
        'Managing residential hostel discipline, student safety, mess dining, and campus transport logistics.',
        'Graphic Designer: Creating promotional posters, social media graphics, brochures, and event banners.',
        'Ensuring smooth non-academic campus operations.'
      ],
      positionsIncluded: [
        'Graphic Designer',
        'Hostel Superintendent',
        'Warden (Male & Female)',
        'Mess Manager',
        'Administrative Coordinator',
        'Transport Coordinator'
      ],
      expRequired: '3 - 5 Years',
      salaryNotes: 'Commensurate with experience & merit basis as per industry standards.'
    }
  }
];

export default function Careers({ openCareerModal, isHomePage = false }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const displayedJobs = isHomePage ? jobsData.slice(0, 3) : jobsData;

  return (
    <section id="careers" className="py-12 lg:py-16 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5" /> Join Our Faculty &amp; Staff
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy-900 mb-3 font-bold">
            Careers at Cohen International School
          </h2>
          <p className="text-navy-700/70 text-sm sm:text-base max-w-2xl mx-auto">
            Shape the leaders of tomorrow. We offer competitive remuneration, PF, ESI, research support, and an inspiring tech-enabled workplace.
          </p>
        </div>

        {/* Job Cards Grid */}
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

              {/* Action Buttons: View Details + Apply Now */}
              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-cream-200/60">
                <button
                  type="button"
                  onClick={() => setSelectedJob(job)}
                  className="flex-1 py-2.5 px-3 bg-cream-100 hover:bg-gold-500/20 text-navy-900 font-bold text-xs rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 border border-cream-300 hover:border-gold-400 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-gold-600" />
                  <span>View Details</span>
                </button>
                <button
                  type="button"
                  onClick={() => openCareerModal?.(job.role)}
                  className="flex-1 py-2.5 px-3 bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-950 font-bold text-xs rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
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
                We are always eager to meet exceptional educators, administrators, and mentors. Send your resume directly to <a href="mailto:hr@coheninternationalschool.com" className="text-gold-400 font-bold hover:underline">hr@coheninternationalschool.com</a>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="mailto:hr@coheninternationalschool.com?subject=General%20Faculty%20%26%20Staff%20Application"
                className="px-5 py-3 bg-white/10 text-gold-400 font-bold text-xs sm:text-sm rounded-full border border-gold-500/40 hover:bg-white/20 transition flex items-center justify-center gap-2"
              >
                Direct Email HR
              </a>
              <button
                type="button"
                onClick={() => openCareerModal?.('General Faculty & Staff Application')}
                className="btn-premium px-6 py-3 bg-gold-500 text-navy-950 font-bold text-xs sm:text-sm rounded-full shadow-lg hover:bg-gold-400 transition flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Submit Application Form
              </button>
            </div>
          </div>
        )}
      </div>

      {/* JOB DETAILS POPUP MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 z-[130] bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-cream-200 overflow-hidden relative max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="bg-navy-950 text-white p-6 sm:p-7 relative border-b border-gold-500/30">
              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-gold-500 hover:text-navy-950 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2.5 inline-block ${selectedJob.badgeBg}`}>
                {selectedJob.category}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white pr-8">
                {selectedJob.role}
              </h3>
              <p className="text-gold-400 text-xs sm:text-sm flex items-center gap-2 mt-2 font-medium">
                <MapPin className="w-4 h-4 text-gold-400" /> {selectedJob.location}
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-navy-900">
              {/* Quick Info Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-cream-100/70 border border-cream-200 text-xs">
                <div>
                  <span className="text-navy-600 block text-[11px] font-semibold">Experience</span>
                  <span className="font-bold text-navy-950 text-xs sm:text-sm">{selectedJob.fullDetails?.expRequired || 'Required'}</span>
                </div>
                <div>
                  <span className="text-navy-600 block text-[11px] font-semibold">Department</span>
                  <span className="font-bold text-navy-950 text-xs sm:text-sm">{selectedJob.category}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-navy-600 block text-[11px] font-semibold">Campus</span>
                  <span className="font-bold text-navy-950 text-xs sm:text-sm">Jatani, Bhubaneswar</span>
                </div>
              </div>

              {/* Positions Included (if list available) */}
              {selectedJob.fullDetails?.positionsIncluded?.length > 0 && (
                <div>
                  <h4 className="font-bold text-sm text-navy-950 mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-gold-600" /> Positions Covered
                  </h4>
                  <div className="space-y-1.5">
                    {selectedJob.fullDetails.positionsIncluded.map((pos, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-navy-800 font-medium">
                        • {pos}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Eligibility & Requirements */}
              {selectedJob.fullDetails?.requirements && (
                <div>
                  <h4 className="font-bold text-sm text-navy-950 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Key Eligibility &amp; Requirements
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-navy-700">
                    {selectedJob.fullDetails.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Primary Responsibilities */}
              {selectedJob.fullDetails?.responsibilities && (
                <div>
                  <h4 className="font-bold text-sm text-navy-950 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-600" /> Key Responsibilities
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-navy-700">
                    {selectedJob.fullDetails.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy-800 mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Remuneration & Benefits */}
              {selectedJob.fullDetails?.salaryNotes && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                  <span className="font-bold block mb-1">💰 Remuneration &amp; Perks:</span>
                  <span>{selectedJob.fullDetails.salaryNotes}</span>
                </div>
              )}

              {/* HR Contact Notice */}
              <div className="p-4 rounded-2xl bg-navy-950 text-white text-xs space-y-1.5">
                <span className="text-gold-400 font-bold uppercase tracking-wider text-[11px] block">Official HR Application Notice</span>
                <p className="text-white/80 leading-relaxed">
                  Interested candidates may send their CV directly to <a href="mailto:hr@coheninternationalschool.com" className="text-gold-400 font-bold hover:underline">hr@coheninternationalschool.com</a> or click the button below to submit the official application form.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="w-full sm:w-auto px-6 py-3 bg-gray-200 hover:bg-gray-300 text-navy-900 font-bold text-xs rounded-full transition cursor-pointer"
              >
                Close Window
              </button>
              <button
                type="button"
                onClick={() => {
                  const roleToApply = selectedJob.role;
                  setSelectedJob(null);
                  openCareerModal?.(roleToApply);
                }}
                className="w-full sm:w-auto px-8 py-3 bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-950 font-bold text-xs rounded-full shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Apply Online Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
