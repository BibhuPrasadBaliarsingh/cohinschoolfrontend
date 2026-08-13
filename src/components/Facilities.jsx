import React from 'react';
import { Tv, FlaskConical, Trophy, ArrowRight, ShieldCheck, BookOpen, Cpu, Sparkles, Building } from 'lucide-react';
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
    <section id="facilities" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

