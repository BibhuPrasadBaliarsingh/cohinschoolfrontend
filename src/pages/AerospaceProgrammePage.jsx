import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Rocket, Sparkles, CheckCircle2, Award, Cpu, ShieldCheck } from 'lucide-react';

// Import assets from aerospace folder
import heroBg from '../assets/aerospace/image.png';
import img1 from '../assets/aerospace/image copy.png';
import img2 from '../assets/aerospace/image copy 2.png';
import img3 from '../assets/aerospace/image copy 3.png';
import img4 from '../assets/aerospace/image copy 4.png';
import img5 from '../assets/aerospace/image copy 5.png';
import img6 from '../assets/aerospace/image copy 6.png';
import img7 from '../assets/aerospace/image copy 7.png';
import img8 from '../assets/aerospace/image copy 8.png';
import img9 from '../assets/aerospace/image copy 9.png';
import img10 from '../assets/aerospace/image copy 10.png';
import img11 from '../assets/aerospace/image copy 11.png';
import img12 from '../assets/aerospace/image copy 12.png';
import img13 from '../assets/aerospace/image copy 13.png';
import img14 from '../assets/aerospace/image copy 14.png';

export default function AerospaceProgrammePage({ openAdmissionModal }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white text-navy-950 font-sans selection:bg-gold-500 selection:text-navy-950">
      
      {/* 1. HERO SECTION WITH BUILDING BACKGROUND */}
      <section className="relative h-[50vh] sm:h-[60vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Cohen Aerospace Building Campus"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark Navy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/70 to-navy-950/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 backdrop-blur-md">
            <Rocket className="w-4 h-4 text-gold-400" />
            <span>Pioneering STEM Education</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-wider leading-tight text-shadow-lg">
            COHEN AEROSPACE PROGRAMME
          </h1>
        </div>
      </section>

      {/* 2. BRIGHT BLUE HIGHLIGHT BANNER */}
      <section className="bg-[#0075FF] text-white py-5 sm:py-6 px-4 shadow-md">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display font-bold text-base sm:text-xl md:text-2xl uppercase tracking-wide leading-snug">
            COHEN INTERNATIONAL SCHOOL INTRODUCES ODISHA'S FIRST
            <br className="hidden sm:inline" />
            &nbsp;"AERO-SPACE INTEGRATED CURRICULUM" &amp; "AERO-SPACE CENTRE OF EXCELLENCE"
          </h2>
        </div>
      </section>

      {/* 3. MAIN CONTENT CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12 sm:space-y-16">
        
        {/* YOUTUBE EMBED VIDEO SECTION */}
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-navy-900 aspect-video bg-navy-950 group">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/9p6pCNRSTVI"
              title="Exploring the Aerobay Lab at Cohen International School"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-center text-xs sm:text-sm font-semibold text-navy-700 mt-3">
            🎥 Exploring the Aerobay Lab at Cohen International School
          </p>
        </div>

        {/* IMAGE GRID 1 (3 IMAGES) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition group">
            <img src={img1} alt="AeroSpace Centre Inauguration" className="w-full h-64 object-cover group-hover:scale-105 transition duration-500" />
            <div className="p-3 bg-cream-100 text-center border-t border-gray-100">
              <p className="text-xs font-bold text-navy-900">Centre of Excellence Inauguration</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition group">
            <img src={img2} alt="High Tech 3D Printer Setup" className="w-full h-64 object-cover group-hover:scale-105 transition duration-500" />
            <div className="p-3 bg-cream-100 text-center border-t border-gray-100">
              <p className="text-xs font-bold text-navy-900">3D Printing &amp; Rapid Prototyping</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition group">
            <img src={img3} alt="Campus Drone Banner Flying Event" className="w-full h-64 object-cover group-hover:scale-105 transition duration-500" />
            <div className="p-3 bg-cream-100 text-center border-t border-gray-100">
              <p className="text-xs font-bold text-navy-900">Aero Flying Demonstration on Campus</p>
            </div>
          </div>
        </div>

        {/* INFORMATIONAL TEXT BLOCK 1 */}
        <div className="bg-cream-50 p-6 sm:p-10 rounded-3xl border border-cream-200 shadow-sm space-y-6 text-navy-800 text-sm sm:text-base leading-relaxed font-sans">
          <p className="font-medium">
            CIS in association with Aviotron Aerospace has introduced Aero-Space integrated curriculum from academic session 2023-24. To further develop STEAM (Science, Technology, Engineering, Arts &amp; Maths) learning, we have developed a one of its kind – AeroSpace Integrated Curriculum from Class 1 to 11 as well as a state of the art– AeroSpace Centre of Excellence, a 1100 sqft of high-tech lab for the students.
          </p>
          <p>
            The core offering shall impart students with skills and competencies so they can build a career or entrepreneurial path in the domains of Aerospace, Space, Meteorology, E-Transportation, AI, Machine Learning, Architect, Product design and Entrepreneurship. We aim at inculcating an essential "innovation culture" in the young minds.
          </p>
          <p className="font-bold text-gold-600 border-l-4 border-gold-500 pl-4 py-1 text-base sm:text-lg">
            We are the first and the only school in Odisha to provide AeroSpace integrated curriculum as well as operate an AeroSpace Centre of Excellence.
          </p>
        </div>

        {/* IMAGE GRID 2 (6 IMAGES - 3x2 GRID) */}
        <div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-950 mb-6 text-center">
            Inside the High-Tech AeroSpace Lab
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
              <img src={img4} alt="Satellite Solar Model" className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
              <img src={img5} alt="Fixed Wing Aircraft Models" className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
              <img src={img6} alt="STEAM Lab Overview" className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
              <img src={img7} alt="Students Working on Mechanical Arm" className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
              <img src={img8} alt="Drone Assembly Kit Workbench" className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
              <img src={img9} alt="STEAM Project Collaboration" className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />
            </div>
          </div>
        </div>

        {/* IMAGE GRID 3 (3 IMAGES) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
            <img src={img10} alt="Student using 3D pen" className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
            <img src={img11} alt="RC Banner Flight Over Ground" className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
            <img src={img12} alt="High Altitude Plane View" className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />
          </div>
        </div>

        {/* ABOUT AEROBAY - K-12 EXPERIENTIAL LEARNING PROGRAM */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-md space-y-6">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-navy-950">
            About AEROBAY – K-12 Experiential learning program
          </h3>
          <p className="text-sm sm:text-base text-navy-800 leading-relaxed font-sans">
            A new-age experiential learning program that combines learning with interactive STEAM-based programs for students which shall equip them with skill such as:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              'Design Thinking',
              'Entrepreneurial Mindset',
              'Problem Solving',
              'Creativity and Innovation',
              'Social and Collaborative Attitude',
              'Critical and Analytical Thinking Ability'
            ].map((skill, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-cream-100/70 border border-cream-200 text-navy-900 text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* WHAT IS STEAM SECTION */}
        <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white p-6 sm:p-10 rounded-3xl shadow-xl space-y-6">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-gold-400">
            What is STEAM ?
          </h3>

          <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans">
            STEAM is an educational approach to learning that uses Science, Technology, Engineering, Arts and Mathematics as access points for guiding student inquiry, dialogue and critical thinking, hence complimenting their science and math understanding. These methodologies empower students to employ product based learning which will ultimately clear their basic and complex concepts from their books. Through this holistic approach students will be able to exercise both sides of their brains at once.
          </p>

          <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans">
            STEAM is a teaching philosophy that combines the idea of learning with the help of collaborative problem solving and practical applications. It encourages interdisciplinary learning that propels all-round development for students.
          </p>

          <div className="pt-4 border-t border-white/10 space-y-4">
            <h4 className="font-bold text-base sm:text-lg text-gold-400">
              STEAM stands for :
            </h4>

            <ul className="space-y-3 text-sm sm:text-base text-white/90 font-sans">
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-gold-400 flex-shrink-0">•</span>
                <span><strong className="text-gold-300">Science</strong>, which proposes the why</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-gold-400 flex-shrink-0">•</span>
                <span><strong className="text-gold-300">Technology</strong>, that explains the how</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-gold-400 flex-shrink-0">•</span>
                <span><strong className="text-gold-300">Engineering</strong>, which promotes analytical thinking</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-gold-400 flex-shrink-0">•</span>
                <span><strong className="text-gold-300">Art</strong>, that pushes creative and design thinking</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-gold-400 flex-shrink-0">•</span>
                <span><strong className="text-gold-300">Mathematics</strong>, which carves relationships between concepts</span>
              </li>
            </ul>
          </div>

          <p className="text-xs sm:text-sm text-white/80 leading-relaxed pt-2 border-t border-white/10">
            By introducing students to STEM at young age, it cultivates progress from product-based learning through collaborative learning to problem-based learning, which focuses on real world problems, and ultimately to hands on learning where students learn by doing. This also results in improving their hand eye coordination and activates both parts of their brain.
          </p>
        </div>

        {/* IMAGE GRID 4 (3 OUTDOOR FLYING DEMO IMAGES) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
            <img src={img13} alt="Campus Ground Assembly" className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
            <img src={img14} alt="Plane Flying Demo" className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
            <img src={img3} alt="Aero Banner Flying High" className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />
          </div>
        </div>

        {/* CTA BOTTOM BANNER */}
        <div className="bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 p-8 sm:p-12 rounded-3xl shadow-xl text-center text-navy-950 space-y-4">
          <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wide">
            Empower Your Child With AeroSpace &amp; STEAM Education
          </h3>
          <p className="text-sm sm:text-base font-semibold max-w-2xl mx-auto text-navy-900">
            Enrol for AY 2027-2028 admissions today and experience Odisha's first Aero-Space Centre of Excellence.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => openAdmissionModal && openAdmissionModal('apply')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-950 text-gold-400 font-bold text-sm sm:text-base rounded-full hover:bg-navy-900 shadow-xl transition"
            >
              <Sparkles className="w-5 h-5 text-gold-400" />
              <span>Apply for Admissions AY 2027-2028</span>
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
