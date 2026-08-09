import React from 'react';
import { Briefcase, MapPin, ArrowRight, Send } from 'lucide-react';

export default function Careers({ openCareerModal }) {
  return (
    <section id="careers" className="py-24 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <Briefcase className="w-4 h-4" /> Join Our Faculty & Staff
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-navy-900 mb-4">Careers at Cohen International</h2>
          <p className="text-navy-700/70 max-w-2xl mx-auto">
            Shape the leaders of tomorrow. We offer competitive remuneration, on-campus accommodation, PF, ESI, research support, and an inspiring tech-enabled workplace.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Job 1 */}
          <div className="p-7 rounded-3xl bg-white border border-cream-200 shadow-md hover:shadow-xl transition-all reveal flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3 inline-block">
                Senior Faculty
              </span>
              <h3 className="font-display text-xl text-navy-900 font-semibold mb-2">
                PGT Physics / Chemistry (IIT-JEE & NEET)
              </h3>
              <p className="text-xs text-navy-600 mb-4 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" /> Jatani Campus • Full-Time
              </p>
              <p className="text-sm text-navy-700/80 leading-relaxed mb-4">
                Minimum 5+ years experience mentoring students for JEE Advanced and NEET. M.Sc / Ph.D / B.Tech from premier institutes preferred.
              </p>
            </div>
            <button
              onClick={() => openCareerModal('PGT Physics / Chemistry - IIT JEE & NEET')}
              className="w-full py-3 bg-navy-900 text-white font-semibold text-xs rounded-xl hover:bg-gold-500 hover:text-navy-900 transition flex items-center justify-center gap-2"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Job 2 */}
          <div className="p-7 rounded-3xl bg-white border border-cream-200 shadow-md hover:shadow-xl transition-all reveal flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3 inline-block">
                Middle School
              </span>
              <h3 className="font-display text-xl text-navy-900 font-semibold mb-2">TGT Mathematics & Science</h3>
              <p className="text-xs text-navy-600 mb-4 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" /> Jatani Campus • Full-Time
              </p>
              <p className="text-sm text-navy-700/80 leading-relaxed mb-4">
                Conceptual clarity with activity-based teaching method. B.Sc/M.Sc + B.Ed required with 3+ years CBSE school experience.
              </p>
            </div>
            <button
              onClick={() => openCareerModal('TGT Mathematics & Science')}
              className="w-full py-3 bg-navy-900 text-white font-semibold text-xs rounded-xl hover:bg-gold-500 hover:text-navy-900 transition flex items-center justify-center gap-2"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Job 3 */}
          <div className="p-7 rounded-3xl bg-white border border-cream-200 shadow-md hover:shadow-xl transition-all reveal flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold mb-3 inline-block">
                Technology
              </span>
              <h3 className="font-display text-xl text-navy-900 font-semibold mb-2">AI, Coding & Robotics Trainer</h3>
              <p className="text-xs text-navy-600 mb-4 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" /> Jatani Campus • Full-Time
              </p>
              <p className="text-sm text-navy-700/80 leading-relaxed mb-4">
                Passion for teaching Python, Scratch, Arduino, 3D printing and AI concepts to students from Grade III to X. B.Tech / BCA / MCA.
              </p>
            </div>
            <button
              onClick={() => openCareerModal('AI & Robotics Trainer')}
              className="w-full py-3 bg-navy-900 text-white font-semibold text-xs rounded-xl hover:bg-gold-500 hover:text-navy-900 transition flex items-center justify-center gap-2"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Job 4 */}
          <div className="p-7 rounded-3xl bg-white border border-cream-200 shadow-md hover:shadow-xl transition-all reveal flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-3 inline-block">
                Primary & Kindergarten
              </span>
              <h3 className="font-display text-xl text-navy-900 font-semibold mb-2">Montessori & Primary Educator</h3>
              <p className="text-xs text-navy-600 mb-4 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" /> Jatani Campus • Full-Time
              </p>
              <p className="text-sm text-navy-700/80 leading-relaxed mb-4">
                Warm, energetic teachers certified in NTT/Montessori training to nurture early literacy, creative arts, and foundational skills.
              </p>
            </div>
            <button
              onClick={() => openCareerModal('Montessori & Primary Educator')}
              className="w-full py-3 bg-navy-900 text-white font-semibold text-xs rounded-xl hover:bg-gold-500 hover:text-navy-900 transition flex items-center justify-center gap-2"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Job 5 */}
          <div className="p-7 rounded-3xl bg-white border border-cream-200 shadow-md hover:shadow-xl transition-all reveal flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold mb-3 inline-block">
                Residential Administration
              </span>
              <h3 className="font-display text-xl text-navy-900 font-semibold mb-2">Hostel Warden (Boys & Girls)</h3>
              <p className="text-xs text-navy-600 mb-4 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" /> Residential Campus • Full-Time
              </p>
              <p className="text-sm text-navy-700/80 leading-relaxed mb-4">
                Responsible for boarding discipline, health monitoring, evening study supervision and student welfare. On-campus quarters provided.
              </p>
            </div>
            <button
              onClick={() => openCareerModal('Hostel Warden (Boys & Girls)')}
              className="w-full py-3 bg-navy-900 text-white font-semibold text-xs rounded-xl hover:bg-gold-500 hover:text-navy-900 transition flex items-center justify-center gap-2"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Job 6 */}
          <div className="p-7 rounded-3xl bg-white border border-cream-200 shadow-md hover:shadow-xl transition-all reveal flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold mb-3 inline-block">
                Sports & Fitness
              </span>
              <h3 className="font-display text-xl text-navy-900 font-semibold mb-2">Sports Coach & PET Instructor</h3>
              <p className="text-xs text-navy-600 mb-4 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" /> Jatani Campus • Full-Time
              </p>
              <p className="text-sm text-navy-700/80 leading-relaxed mb-4">
                B.P.Ed / M.P.Ed certified coach for Cricket, Football, Basketball, Athletics, Tennis or Martial Arts.
              </p>
            </div>
            <button
              onClick={() => openCareerModal('Sports Coach & PET Instructor')}
              className="w-full py-3 bg-navy-900 text-white font-semibold text-xs rounded-xl hover:bg-gold-500 hover:text-navy-900 transition flex items-center justify-center gap-2"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-navy-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl reveal">
          <div>
            <h3 className="font-display text-2xl mb-2">Don't see your specific role listed?</h3>
            <p className="text-white/70 text-sm">
              We are always eager to meet exceptional educators, administrators, and mentors. Send your CV to our HR portal.
            </p>
          </div>
          <button
            onClick={() => openCareerModal('General Faculty & Staff Application')}
            className="btn-premium px-7 py-3.5 bg-gold-500 text-navy-900 font-semibold rounded-full shadow-lg hover:bg-gold-400 transition flex-shrink-0 flex items-center gap-2"
          >
            <Send className="w-4 h-4" /> Submit General Resume
          </button>
        </div>
      </div>
    </section>
  );
}
