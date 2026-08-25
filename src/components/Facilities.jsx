import React from 'react';
import { Tv, FlaskConical, Trophy, ArrowRight, ShieldCheck, BookOpen, Cpu, Sparkles, Building } from 'lucide-react';
import img3604 from '../assets/DSC03604.jpg';
import img3612 from '../assets/DSC03612.jpg';
import img3620 from '../assets/DSC03620.jpg';
import img3622 from '../assets/DSC03622.jpg';
import img3625 from '../assets/DSC03625.jpg';
import img3653 from '../assets/DSC03653.jpg';
import img3671 from '../assets/DSC03671.jpg';
import img3681 from '../assets/DSC03681.jpg';
import img3684 from '../assets/DSC03684.jpg';

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
    <section id="facilities" className="py-24 bg-cream-100 relative overflow-hidden">
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

      {/* Floating 6 Graphics Layer */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden sm:block overflow-hidden">
        {/* 1. Parachute */}
        <div className="absolute top-[8%] left-[1.8%] w-12 animate-fac-para opacity-85">
          <svg viewBox="0 0 60 80" className="w-full h-auto filter drop-shadow-md">
            <defs>
              <linearGradient id="f-para-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF4D6D" />
                <stop offset="50%" stopColor="#FFB703" />
                <stop offset="100%" stopColor="#00F5D4" />
              </linearGradient>
            </defs>
            <path d="M5,35 A25,25 0 0,1 55,35 Z" fill="url(#f-para-grad)" />
            <line x1="5" y1="35" x2="27" y2="60" stroke="#718096" strokeWidth="1.2" />
            <line x1="17.5" y1="35" x2="28.5" y2="60" stroke="#718096" strokeWidth="1.2" />
            <line x1="42.5" y1="35" x2="31.5" y2="60" stroke="#718096" strokeWidth="1.2" />
            <line x1="55" y1="35" x2="33" y2="60" stroke="#718096" strokeWidth="1.2" />
            <rect x="25" y="60" width="10" height="8" rx="2" fill="#D97706" />
          </svg>
        </div>

        {/* 2. Green Leaf */}
        <div className="absolute top-[15%] right-[2.2%] w-9 animate-fac-leaf opacity-85" style={{ animationDelay: '1.5s' }}>
          <svg viewBox="0 0 40 50" className="w-full h-auto filter drop-shadow-sm">
            <defs>
              <linearGradient id="f-leaf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#52B788" />
                <stop offset="100%" stopColor="#1B4332" />
              </linearGradient>
            </defs>
            <path d="M20,2 C32,10 38,24 20,44 C2,24 8,10 20,2 Z" fill="url(#f-leaf-grad)" />
            <path d="M20,2 Q20,23 20,44" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
            <path d="M20,44 Q20,48 18,50" stroke="#1B4332" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        {/* 3. Paper Airplane */}
        <div className="absolute top-[45%] left-[1.5%] w-10 animate-fac-plane opacity-80" style={{ animationDelay: '2.5s' }}>
          <svg viewBox="0 0 50 50" className="w-full h-auto filter drop-shadow-md">
            <path d="M2,24 L46,2 L28,46 L22,30 Z" fill="#E8C547" opacity="0.9" />
            <path d="M22,30 L46,2 L28,46 Z" fill="#C9A227" opacity="0.8" />
          </svg>
        </div>

        {/* 4. Soft Cloud */}
        <div className="absolute top-[4%] left-[45%] w-20 animate-fac-cloud opacity-40">
          <svg viewBox="0 0 100 60" className="w-full h-auto fill-current text-white">
            <path d="M10,45 Q10,25 30,25 Q40,10 60,15 Q75,5 85,25 Q95,30 90,45 Z" fill="#E2E8F0" />
          </svg>
        </div>

        {/* 5. Glowing Sparkle Star */}
        <div className="absolute top-[52%] right-[2.5%] w-8 animate-fac-sparkle opacity-90" style={{ animationDelay: '3.2s' }}>
          <svg viewBox="0 0 40 40" className="w-full h-auto filter drop-shadow-sm">
            <path d="M20,0 L24,16 L40,20 L24,24 L20,40 L16,24 L0,20 L16,16 Z" fill="#F59E0B" />
          </svg>
        </div>

        {/* 6. Tropical Palm Leaf */}
        <div className="absolute top-[75%] left-[2.2%] w-10 animate-fac-palm opacity-85" style={{ animationDelay: '4.0s' }}>
          <svg viewBox="0 0 50 50" className="w-full h-auto filter drop-shadow-sm">
            <path d="M25,2 C35,15 45,30 25,48 C5,30 15,15 25,2 Z" fill="#10B981" />
            <path d="M25,2 L25,48" stroke="#047857" strokeWidth="1.5" />
          </svg>
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

