import React from 'react';
import { Tv, FlaskConical, Trophy, ArrowRight } from 'lucide-react';
import img3611 from '../assets/DSC03611.JPG';
import img3613 from '../assets/DSC03613.JPG';
import img3616 from '../assets/DSC03616.JPG';
import img3620 from '../assets/DSC03620.JPG';
import img3622 from '../assets/DSC03622.JPG';
import img3625 from '../assets/DSC03625.JPG';
import img3653 from '../assets/DSC03653.JPG';
import img3660 from '../assets/DSC03660.JPG';
import img3684 from '../assets/DSC03684.JPG';

export default function Facilities({ openDedicatedTopic }) {
  return (
    <section id="facilities" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <p className="text-gold-600 font-medium tracking-widest uppercase text-sm mb-3">Infrastructure</p>
          <h2 className="font-display text-4xl lg:text-5xl text-navy-900 mb-4">World-Class Facilities</h2>
          <p className="text-navy-700/70 max-w-2xl mx-auto">
            Everything a young mind needs to explore, create and excel — in a secure, green environment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            onClick={() => openDedicatedTopic('smart-rooms')}
            className="card-lift cursor-pointer group relative h-72 rounded-3xl overflow-hidden shadow-lg border border-cream-300 reveal"
          >
            <img
              src={img3611}
              alt="Smart Digital Classroom"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent"></div>
            <div className="absolute top-4 right-4 bg-gold-500/90 text-navy-900 px-3 py-1 rounded-full text-xs font-semibold shadow-md flex items-center gap-1">
              <Tv className="w-3.5 h-3.5" /> Smart Room
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl text-white font-semibold">Smart Classrooms</h3>
              <p className="text-white/80 text-xs mt-1">Interactive Touch Displays, AI Pods & Digital 3D Models</p>
              <span className="inline-flex items-center gap-1 text-gold-400 text-xs font-medium mt-3 group-hover:underline">
                Explore Smart Room <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          <div
            onClick={() => openDedicatedTopic('facilities')}
            className="card-lift cursor-pointer group relative h-72 rounded-3xl overflow-hidden shadow-lg border border-cream-300 reveal"
          >
            <img
              src={img3613}
              alt="Science & Robotics Laboratories"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent"></div>
            <div className="absolute top-4 right-4 bg-white/90 text-navy-900 px-3 py-1 rounded-full text-xs font-semibold shadow-md flex items-center gap-1">
              <FlaskConical className="w-3.5 h-3.5" /> High-Tech Labs
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl text-white font-semibold">Science & Robotics Labs</h3>
              <p className="text-white/80 text-xs mt-1">Physics, Chemistry, Biology & AI Robotics Innovation Lab</p>
              <span className="inline-flex items-center gap-1 text-gold-400 text-xs font-medium mt-3 group-hover:underline">
                View Facilities <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          <div
            onClick={() => openDedicatedTopic('facilities')}
            className="card-lift cursor-pointer group relative h-72 rounded-3xl overflow-hidden shadow-lg border border-cream-300 reveal"
          >
            <img
              src={img3622}
              alt="Sports Complex & Playgrounds"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent"></div>
            <div className="absolute top-4 right-4 bg-emerald-500/90 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5" /> 2.5 Acre Arena
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl text-white font-semibold">Sports Complex</h3>
              <p className="text-white/80 text-xs mt-1">Cricket pitch, Football turf, Basketball, Tennis & Athletics</p>
              <span className="inline-flex items-center gap-1 text-gold-400 text-xs font-medium mt-3 group-hover:underline">
                Explore Sports <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          <div
            onClick={() => openDedicatedTopic('facilities')}
            className="card-lift cursor-pointer group relative h-72 rounded-3xl overflow-hidden shadow-lg border border-cream-300 reveal"
          >
            <img
              src={img3625}
              alt="Digital Library"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl text-white font-semibold">Digital Library & Knowledge Hub</h3>
              <p className="text-white/80 text-xs mt-1">5000+ volumes, e-journals, Olympiad & JEE reference bank</p>
              <span className="inline-flex items-center gap-1 text-gold-400 text-xs font-medium mt-3 group-hover:underline">
                Read Details <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          <div
            onClick={() => openDedicatedTopic('facilities')}
            className="card-lift cursor-pointer group relative h-72 rounded-3xl overflow-hidden shadow-lg border border-cream-300 reveal"
          >
            <img
              src={img3653}
              alt="Residential Hostels"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl text-white font-semibold">Residential Boarding Hostels</h3>
              <p className="text-white/80 text-xs mt-1">Separate AC hostels for Boys & Girls with 24×7 Wardens & Medical</p>
              <span className="inline-flex items-center gap-1 text-gold-400 text-xs font-medium mt-3 group-hover:underline">
                View Hostels <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          <div
            onClick={() => openDedicatedTopic('smart-rooms')}
            className="card-lift cursor-pointer group relative h-72 rounded-3xl overflow-hidden shadow-lg border border-cream-300 reveal"
          >
            <img
              src={img3616}
              alt="AI & Computer Coding Studio"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl text-white font-semibold">AI & Computer Coding Studio</h3>
              <p className="text-white/80 text-xs mt-1">Python, IoT, Web Design & Robotics Workstations</p>
              <span className="inline-flex items-center gap-1 text-gold-400 text-xs font-medium mt-3 group-hover:underline">
                Explore AI Studio <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          <div
            onClick={() => openDedicatedTopic('facilities')}
            className="card-lift cursor-pointer group relative h-72 rounded-3xl overflow-hidden shadow-lg border border-cream-300 reveal"
          >
            <img
              src={img3660}
              alt="AC Auditorium"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl text-white font-semibold">AC Auditorium</h3>
              <p className="text-white/80 text-xs mt-1">200 seats • World-class acoustics & audiovisuals</p>
              <span className="inline-flex items-center gap-1 text-gold-400 text-xs font-medium mt-3 group-hover:underline">
                Explore Auditorium <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          <div
            onClick={() => openDedicatedTopic('facilities')}
            className="card-lift cursor-pointer group relative h-72 rounded-3xl overflow-hidden shadow-lg border border-cream-300 reveal"
          >
            <img
              src={img3620}
              alt="Health & Wellness"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl text-white font-semibold">Health & Wellness</h3>
              <p className="text-white/80 text-xs mt-1">In-house doctor • 24×7 medical care & ambulance</p>
              <span className="inline-flex items-center gap-1 text-gold-400 text-xs font-medium mt-3 group-hover:underline">
                View Medical Care <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          <div
            onClick={() => openDedicatedTopic('facilities')}
            className="card-lift cursor-pointer group relative h-72 rounded-3xl overflow-hidden shadow-lg border border-cream-300 reveal"
          >
            <img
              src={img3684}
              alt="High Security Campus"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl text-white font-semibold">High Security Campus</h3>
              <p className="text-white/80 text-xs mt-1">CCTV • 24×7 security personnel • Smart QR visitor system</p>
              <span className="inline-flex items-center gap-1 text-gold-400 text-xs font-medium mt-3 group-hover:underline">
                Security Details <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
