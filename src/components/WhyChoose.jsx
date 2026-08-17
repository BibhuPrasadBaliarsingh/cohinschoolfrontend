import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Cpu, Lightbulb, Trees, Users, Smartphone, ArrowRight } from 'lucide-react';

export default function WhyChoose() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Unique Facilities Background Image with Soft Dark Tint */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/facilities_banner.png"
          alt="Facilities Campus Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#050D16]/75" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <p className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-3">Why Cohen</p>
          <h2 className="font-display text-4xl lg:text-5xl text-white mb-4">What Makes Us Different</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A carefully crafted ecosystem where academic rigor meets future-ready skills and character development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            onClick={() => navigate('/academics')}
            className="card-cube cursor-pointer p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 hover:border-gold-400/80 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(201,162,39,0.3)] group reveal-left"
          >
            <div className="w-14 h-14 rounded-2xl bg-gold-500/20 group-hover:bg-gold-500 group-hover:scale-110 transition-all duration-300 flex items-center justify-center mb-6">
              <Brain className="w-7 h-7 text-gold-400 group-hover:text-navy-900 transition-colors" />
            </div>
            <h3 className="font-display text-xl text-white mb-3 group-hover:text-gold-400 transition-colors">
              Integrated Coaching
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              NCERT + complete IIT-JEE &amp; NEET coaching at <strong className="text-gold-400">no extra cost</strong> through expert faculty from Vidwan Classes.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 group-hover:translate-x-1.5 transition-transform">
              <span>Explore Academics Page</span> <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => navigate('/facilities')}
            className="card-cube cursor-pointer p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 hover:border-gold-400/80 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(201,162,39,0.3)] group reveal-right"
          >
            <div className="w-14 h-14 rounded-2xl bg-gold-500/20 group-hover:bg-gold-500 group-hover:scale-110 transition-all duration-300 flex items-center justify-center mb-6">
              <Cpu className="w-7 h-7 text-gold-400 group-hover:text-navy-900 transition-colors" />
            </div>
            <h3 className="font-display text-xl text-white mb-3 group-hover:text-gold-400 transition-colors">
              AI, Coding &amp; Robotics
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Future-ready curriculum with Artificial Intelligence, Machine Learning, Python Coding and AI Robotics labs for modern learners.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 group-hover:translate-x-1.5 transition-transform">
              <span>Explore Smart Classrooms</span> <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => navigate('/academics')}
            className="card-cube cursor-pointer p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 hover:border-gold-400/80 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(201,162,39,0.3)] group reveal-left"
          >
            <div className="w-14 h-14 rounded-2xl bg-gold-500/20 group-hover:bg-gold-500 group-hover:scale-110 transition-all duration-300 flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7 text-gold-400 group-hover:text-navy-900 transition-colors" />
            </div>
            <h3 className="font-display text-xl text-white mb-3 group-hover:text-gold-400 transition-colors">
              Project-Based Learning
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Hands-on PBL, Design Thinking, Cambridge English, Model United Nations (CMUN) and Science Camps that ignite critical thinking.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 group-hover:translate-x-1.5 transition-transform">
              <span>Explore PBL Methodology</span> <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 4 */}
          <div
            onClick={() => navigate('/facilities')}
            className="card-cube cursor-pointer p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 hover:border-gold-400/80 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(201,162,39,0.3)] group reveal-right"
          >
            <div className="w-14 h-14 rounded-2xl bg-gold-500/20 group-hover:bg-gold-500 group-hover:scale-110 transition-all duration-300 flex items-center justify-center mb-6">
              <Trees className="w-7 h-7 text-gold-400 group-hover:text-navy-900 transition-colors" />
            </div>
            <h3 className="font-display text-xl text-white mb-3 group-hover:text-gold-400 transition-colors">
              10-Acre Green Campus
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Pollution-free sanctuary near Barunei Hills with 2.5-acre sports complex, separate AC hostels and eco-friendly infrastructure.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 group-hover:translate-x-1.5 transition-transform">
              <span>Explore Campus Facilities</span> <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 5 */}
          <div
            onClick={() => navigate('/about')}
            className="card-cube cursor-pointer p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 hover:border-gold-400/80 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(201,162,39,0.3)] group reveal-left"
          >
            <div className="w-14 h-14 rounded-2xl bg-gold-500/20 group-hover:bg-gold-500 group-hover:scale-110 transition-all duration-300 flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-gold-400 group-hover:text-navy-900 transition-colors" />
            </div>
            <h3 className="font-display text-xl text-white mb-3 group-hover:text-gold-400 transition-colors">
              Experienced Leadership
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Founded by IIT-Kharagpur alumnus &amp; visionary educationists with decades of experience guiding students to top IITs, AIIMS &amp; global universities.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 group-hover:translate-x-1.5 transition-transform">
              <span>Explore About Us</span> <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 6 */}
          <div
            onClick={() => navigate('/smart-campus')}
            className="card-cube cursor-pointer p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 hover:border-gold-400/80 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(201,162,39,0.3)] group reveal-right"
          >
            <div className="w-14 h-14 rounded-2xl bg-gold-500/20 group-hover:bg-gold-500 group-hover:scale-110 transition-all duration-300 flex items-center justify-center mb-6">
              <Smartphone className="w-7 h-7 text-gold-400 group-hover:text-navy-900 transition-colors" />
            </div>
            <h3 className="font-display text-xl text-white mb-3 group-hover:text-gold-400 transition-colors">
              Complete Digital Ecosystem
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Full School ERP + Admission CRM + HRMS + AI Voice & Chatbot + Parent/Student/Teacher Apps with live bus tracking.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 group-hover:translate-x-1.5 transition-transform">
              <span>Explore Smart Campus Ecosystem</span> <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
