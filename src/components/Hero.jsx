import React, { useEffect } from 'react';
import { Sparkles, UserPlus, PlayCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCounter from './AnimatedCounter';

export default function Hero({ openAdmissionModal, openVirtualTour }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('#hero-img', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-navy-950">
        <img
          src="/bg.png"
          alt="Cohen Campus"
          className="w-full h-full object-cover opacity-12 brightness-65 scale-105"
          id="hero-img"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/95 via-navy-950/85 to-navy-950"></div>
      </div>

      {/* Decorative ambient lighting elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-gold-400 text-xs font-medium tracking-wider uppercase mb-8 reveal">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
            Admissions Open 2026–27
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 reveal">
            Excellence<br />
            <span className="text-gold-400 italic">Through Harmony</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-xl reveal">
            Ranked #1 CBSE School in Bhubaneswar. A 10-acre green campus next to IIT Bhubaneswar — where world-class
            academics, integrated IIT-JEE & NEET coaching, AI & Robotics, and holistic growth create future leaders.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 reveal">
            <button
              onClick={() => openAdmissionModal('apply')}
              className="btn-premium inline-flex items-center gap-2 px-7 py-4 bg-gold-500 text-navy-900 font-semibold rounded-full text-base shadow-xl hover:bg-gold-400 transition"
            >
              <Sparkles className="w-5 h-5" />
              Apply Now
            </button>
            <button
              onClick={() => openAdmissionModal('register')}
              className="btn-premium inline-flex items-center gap-2 px-7 py-4 bg-white/10 text-white font-medium rounded-full border border-white/30 hover:bg-white/20 transition"
            >
              <UserPlus className="w-5 h-5 text-gold-400" />
              Register Now
            </button>
            <button
              onClick={openVirtualTour}
              className="btn-premium inline-flex items-center gap-2 px-6 py-4 text-white/90 hover:text-gold-400 font-medium transition"
            >
              <PlayCircle className="w-5 h-5" />
              Virtual Tour
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 reveal">
            <div className="text-center sm:text-left">
              <p className="font-display text-3xl sm:text-4xl text-gold-400 font-semibold">
                <AnimatedCounter end={10} suffix="+" duration={2000} />
              </p>
              <p className="text-white/60 text-sm mt-1">Acre Green Campus</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-display text-3xl sm:text-4xl text-gold-400 font-semibold">
                <AnimatedCounter end={1} prefix="#" duration={1500} />
              </p>
              <p className="text-white/60 text-sm mt-1">CBSE in Bhubaneswar</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-display text-3xl sm:text-4xl text-gold-400 font-semibold">
                <AnimatedCounter start={2000} end={2015} duration={2200} />
              </p>
              <p className="text-white/60 text-sm mt-1">Year of Foundation</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-display text-3xl sm:text-4xl text-gold-400 font-semibold">
                <AnimatedCounter end={100} suffix="%" duration={2000} />
              </p>
              <p className="text-white/60 text-sm mt-1">Smart Digital Ecosystem</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-gold-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
