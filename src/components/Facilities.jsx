import React from 'react';
import { Tv, FlaskConical, Trophy, ArrowRight } from 'lucide-react';

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
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop"
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
              src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop"
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
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop"
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
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop"
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
              src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop"
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
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
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
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop"
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
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
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
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop"
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
