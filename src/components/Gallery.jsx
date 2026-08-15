import React, { useState } from 'react';
import { ArrowRight, Image as ImageIcon, Video, Sparkles, X } from 'lucide-react';

import img3605 from '../assets/DSC03605.JPG';
import img3611 from '../assets/DSC03611.JPG';
import img3613 from '../assets/DSC03613.JPG';
import img3616 from '../assets/DSC03616.JPG';
import img3622 from '../assets/DSC03622.JPG';
import img3624 from '../assets/DSC03624.JPG';
import img3625 from '../assets/DSC03625.JPG';
import img3653 from '../assets/DSC03653.JPG';
import img3660 from '../assets/DSC03660.JPG';
import img3671 from '../assets/DSC03671.JPG';
import img3681 from '../assets/DSC03681.JPG';
import img3684 from '../assets/DSC03684.JPG';

const galleryItems = [
  {
    id: 1,
    title: "Main School Entrance & Green Campus",
    category: "Campus Infrastructure",
    src: img3605,
    span: "col-span-2 row-span-2 h-80 md:h-96"
  },
  {
    id: 2,
    title: "Smart Classroom Interactive Session",
    category: "Academics",
    src: img3611,
    span: "h-44 md:h-48"
  },
  {
    id: 3,
    title: "AI & Aerospace Robotics Studio",
    category: "Innovation Lab",
    src: img3613,
    span: "h-44 md:h-48"
  },
  {
    id: 4,
    title: "Science & Physics Research Lab",
    category: "Laboratories",
    src: img3616,
    span: "h-44 md:h-48"
  },
  {
    id: 5,
    title: "Annual Sports Complex & Athletics Track",
    category: "Sports Arena",
    src: img3622,
    span: "h-44 md:h-48"
  },
  {
    id: 6,
    title: "Cambridge English Language Speech Lab",
    category: "Language Lab",
    src: img3624,
    span: "h-44 md:h-48"
  },
  {
    id: 7,
    title: "Vidwan Integrated JEE & NEET Prep Centre",
    category: "Competitive Desk",
    src: img3625,
    span: "h-44 md:h-48"
  },
  {
    id: 8,
    title: "Hostel Boarding & Dining Complex",
    category: "Boarding Life",
    src: img3653,
    span: "h-44 md:h-48"
  },
  {
    id: 9,
    title: "Cohen Talks & Seminar Auditorium",
    category: "Cultural & Events",
    src: img3660,
    span: "h-44 md:h-48"
  },
  {
    id: 10,
    title: "Classroom Collaborative Project Work",
    category: "Pedagogy",
    src: img3671,
    span: "h-44 md:h-48"
  },
  {
    id: 11,
    title: "E-Library & Digital Resource Centre",
    category: "Library",
    src: img3681,
    span: "h-44 md:h-48"
  },
  {
    id: 12,
    title: "RouteSafe Fleet & Transport Station",
    category: "Transport TMS",
    src: img3684,
    span: "h-44 md:h-48"
  }
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-20 sm:py-24 bg-cream-100 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <ImageIcon className="w-3.5 h-3.5" /> Campus Gallery &amp; Press Corner
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy-900 font-bold">
              Moments That Matter at CIS
            </h2>
            <p className="text-navy-700/75 text-sm sm:text-base mt-2 max-w-xl">
              Explore real high-definition captures of our 10-acre campus, smart classrooms, labs, sports facilities, and events.
            </p>
          </div>
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImg(item)}
              className={`rounded-3xl overflow-hidden shadow-lg border border-cream-300 relative group cursor-pointer ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                width="400"
                height="300"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] uppercase font-bold text-gold-400 bg-navy-950/80 px-2.5 py-1 rounded-full w-fit mb-1 border border-gold-500/30">
                  {item.category}
                </span>
                <h4 className="font-bold text-sm sm:text-base text-white leading-tight">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Image Modal Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-navy-900 rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-navy-950/80 text-white hover:bg-gold-500 hover:text-navy-950 transition"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-h-[75vh] overflow-hidden">
              <img
                src={selectedImg.src}
                alt={selectedImg.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 bg-navy-950 text-white flex justify-between items-center">
              <div>
                <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                  {selectedImg.category}
                </span>
                <h3 className="text-xl font-bold mt-0.5">{selectedImg.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
