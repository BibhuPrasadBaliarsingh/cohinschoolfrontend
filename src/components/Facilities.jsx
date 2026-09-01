import React from 'react';
import { Tv, FlaskConical, Trophy, ArrowRight, ShieldCheck, BookOpen, Cpu, Sparkles, Building, Atom, GraduationCap } from 'lucide-react';
import img3604 from '../assets/DSC03604.JPG';
import img3612 from '../assets/DSC03612.JPG';
import img3620 from '../assets/DSC03620.JPG';
import img3622 from '../assets/DSC03622.JPG';
import img3625 from '../assets/DSC03625.JPG';
import img3653 from '../assets/DSC03653.JPG';
import img3671 from '../assets/DSC03671.JPG';
import img3681 from '../assets/DSC03681.JPG';
import img3684 from '../assets/DSC03684.JPG';

export default function Facilities({ openDedicatedTopic }) {
  const facilityCards = [
    {
      id: "sports-court",
      title: "Basketball & Outdoor Sports Complex",
      desc: "Synthetic basketball court, tennis courts, and multi-sport outdoor arenas.",
      tag: "2.5 Acre Sports Arena",
      img: img3620,
      icon: Trophy,
      badgeColor: "bg-amber-500/90 text-navy-950",
      topic: "facilities"
    },
    {
      id: "athletics-field",
      title: "Football & Athletic Playgrounds",
      desc: "Lush green grass football grounds, athletic track, and guided coaching.",
      tag: "Sports & Athletics",
      img: img3653,
      icon: Trophy,
      badgeColor: "bg-emerald-500/90 text-white",
      topic: "facilities"
    },
    {
      id: "science-lab",
      title: "Science & Aerospace Innovation Labs",
      desc: "Hands-on Physics, Chemistry, Biology & Rocketry science laboratories.",
      tag: "High-Tech Science Labs",
      img: img3681,
      icon: FlaskConical,
      badgeColor: "bg-blue-600/90 text-white",
      topic: "facilities"
    },
    {
      id: "stem-ai-studio",
      title: "STEM, AI & Drone Robotics Studio",
      desc: "Drone assembly, AI coding workstations, IoT kits, and robotics labs.",
      tag: "Future Tech Studio",
      img: img3684,
      icon: Cpu,
      badgeColor: "bg-purple-600/90 text-white",
      topic: "smart-rooms"
    },
    {
      id: "green-campus",
      title: "10-Acre Eco-Green Campus",
      desc: "Pollution-free, lush green environment at Barunei Hills beside IIT Bhubaneswar.",
      tag: "Green Environment",
      img: img3622,
      icon: Sparkles,
      badgeColor: "bg-emerald-600/90 text-white",
      topic: "facilities"
    },
    {
      id: "play-recreation",
      title: "Primary Play & Recreation Park",
      desc: "Dedicated child-safe playgrounds, swings, and interactive outdoor play zones.",
      tag: "Junior Recreation",
      img: img3671,
      icon: Sparkles,
      badgeColor: "bg-rose-500/90 text-white",
      topic: "facilities"
    },
    {
      id: "academic-blocks",
      title: "Modern Academic Blocks & Boarding Hostels",
      desc: "State-of-the-art academic wings, air-conditioned rooms, and 24x7 security.",
      tag: "Residential & Day Scholar",
      img: img3604,
      icon: Building,
      badgeColor: "bg-indigo-600/90 text-white",
      topic: "facilities"
    },
    {
      id: "student-community",
      title: "Student Life & Cultural Activities",
      desc: "Nurturing teamwork, leadership, house competitions, and holistic growth.",
      tag: "Co-Curricular Life",
      img: img3625,
      icon: BookOpen,
      badgeColor: "bg-gold-500/90 text-navy-950",
      topic: "facilities"
    },
    {
      id: "campus-security",
      title: "Secure Campus & Admin Plaza",
      desc: "CCTV monitored 24x7 campus, QR entry gates, and dedicated admin desk.",
      tag: "24x7 Security System",
      img: img3612,
      icon: ShieldCheck,
      badgeColor: "bg-navy-800 text-gold-400 border border-gold-500/30",
      topic: "facilities"
    }
  ];

  return (
    <section id="facilities" className="py-12 lg:py-16 bg-cream-100 relative overflow-hidden">
      {/* 6 Animated Floating Graphics (Parachute, Leaf, Paper Plane, Cloud, Sparkle, Palm Leaf) */}
      <style>{`
        @keyframes facPara {
          0% { transform: translateY(-20px) translateX(0px) rotate(-4deg); opacity: 0.3; }
          50% { transform: translateY(130px) translateX(-20px) rotate(6deg); opacity: 0.9; }
          100% { transform: translateY(260px) translateX(15px) rotate(-4deg); opacity: 0.3; }
        }
        @keyframes facLeaf {
          0% { transform: translateY(80px) translateX(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-110px) translateX(22px) rotate(90deg); opacity: 0.95; }
          100% { transform: translateY(-230px) translateX(-15px) rotate(180deg); opacity: 0.3; }
        }
        @keyframes facPlane {
          0% { transform: translateY(110px) translateX(-15px) rotate(-15deg); opacity: 0.2; }
          50% { transform: translateY(-30px) translateX(25px) rotate(10deg); opacity: 0.9; }
          100% { transform: translateY(-180px) translateX(-20px) rotate(-20deg); opacity: 0.2; }
        }
        @keyframes facCloud {
          0% { transform: translateX(-35px) translateY(0px); opacity: 0.4; }
          50% { transform: translateX(35px) translateY(-10px); opacity: 0.8; }
          100% { transform: translateX(-35px) translateY(0px); opacity: 0.4; }
        }
        @keyframes facSparkle {
          0% { transform: scale(0.8) translateY(0px); opacity: 0.3; }
          50% { transform: scale(1.15) translateY(-30px); opacity: 1; }
          100% { transform: scale(0.8) translateY(-60px); opacity: 0.3; }
        }
        @keyframes facPalm {
          0% { transform: translateY(40px) rotate(-20deg); opacity: 0.3; }
          50% { transform: translateY(-80px) rotate(25deg); opacity: 0.9; }
          100% { transform: translateY(-190px) rotate(-10deg); opacity: 0.3; }
        }

        .animate-fac-para { animation: facPara 15s ease-in-out infinite alternate; }
        .animate-fac-leaf { animation: facLeaf 13s ease-in-out infinite; }
        .animate-fac-plane { animation: facPlane 14s ease-in-out infinite; }
        .animate-fac-cloud { animation: facCloud 18s ease-in-out infinite; }
        .animate-fac-sparkle { animation: facSparkle 8s ease-in-out infinite; }
        .animate-fac-palm { animation: facPalm 16s ease-in-out infinite; }
      `}</style>

      {/* Floating Academic & Science Graphics Layer (Atoms, Graduation Caps, Math Symbols) */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden sm:block overflow-hidden">
        {/* 1. Floating Science Atom */}
        <div className="absolute top-[8%] left-[1.8%] p-3 rounded-2xl bg-white/90 shadow-lg border border-gold-400/40 text-gold-600 animate-fac-sparkle">
          <Atom className="w-7 h-7 text-gold-600" />
        </div>

        {/* 2. Floating Graduation Cap */}
        <div className="absolute top-[12%] right-[2.2%] p-3 rounded-2xl bg-navy-900 shadow-lg border border-gold-400/40 text-gold-400 animate-fac-sparkle" style={{ animationDelay: '1.5s' }}>
          <GraduationCap className="w-7 h-7 text-gold-400" />
        </div>

        {/* 3. Floating Math Formula Pill (π • β • γ | + - × ÷) */}
        <div className="absolute top-[45%] left-[1.5%] px-3 py-2 rounded-xl bg-navy-900 text-gold-400 font-serif text-xs font-bold shadow-lg border border-gold-400/40 animate-fac-cloud flex items-center gap-1.5">
          <span className="text-sm font-extrabold text-gold-300">π</span>
          <span>•</span>
          <span className="text-sm font-extrabold text-gold-400">β</span>
          <span>•</span>
          <span className="text-xs font-mono bg-white/10 px-1.5 py-0.5 rounded">+ − × ÷</span>
        </div>

        {/* 4. Floating Chemistry Flask */}
        <div className="absolute top-[50%] right-[2.5%] p-3 rounded-2xl bg-white/90 shadow-lg border border-emerald-400/40 text-emerald-600 animate-fac-sparkle" style={{ animationDelay: '3.2s' }}>
          <FlaskConical className="w-7 h-7 text-emerald-600" />
        </div>

        {/* 5. Floating Open Book */}
        <div className="absolute top-[75%] left-[2.2%] p-3 rounded-2xl bg-white/90 shadow-lg border border-indigo-400/40 text-indigo-600 animate-fac-sparkle" style={{ animationDelay: '4.0s' }}>
          <BookOpen className="w-7 h-7 text-indigo-600" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16 reveal">
          <p className="text-gold-600 font-medium tracking-widest uppercase text-sm mb-3">Infrastructure & Facilities</p>
          <h2 className="font-display text-4xl lg:text-5xl text-navy-900 mb-4">World-Class Facilities</h2>
          <p className="text-navy-700/70 max-w-2xl mx-auto">
            Explore our 10-acre smart campus equipped with sports arenas, STEM innovation labs, and modern learning infrastructure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilityCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => openDedicatedTopic?.(card.topic)}
                className="card-lift cursor-pointer group relative h-72 rounded-3xl overflow-hidden shadow-lg border border-cream-300 reveal"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent" />
                
                {/* Tag Badge */}
                <div className={`absolute top-4 right-4 ${card.badgeColor} px-3 py-1 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5`}>
                  <Icon className="w-3.5 h-3.5" />
                  <span>{card.tag}</span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl text-white font-semibold leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-white/80 text-xs mt-1 leading-relaxed">
                    {card.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-gold-400 text-xs font-medium mt-3 group-hover:underline">
                    Explore Details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

