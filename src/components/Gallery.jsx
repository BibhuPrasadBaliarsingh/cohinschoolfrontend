import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Gallery() {
  return (
    <section className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal">
          <div>
            <p className="text-gold-600 font-medium tracking-widest uppercase text-sm mb-3">Campus Life</p>
            <h2 className="font-display text-4xl text-navy-900">Moments That Matter</h2>
          </div>
          <Link
            to="/contact"
            className="mt-4 md:mt-0 text-gold-600 font-medium flex items-center gap-2 hover:gap-3 transition-all"
          >
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden h-80 md:h-auto reveal shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop"
              alt="Students in Classroom"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>
          <div className="rounded-3xl overflow-hidden h-44 reveal shadow-md">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop"
              alt="Smart Classroom Interactive Board"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>
          <div className="rounded-3xl overflow-hidden h-44 reveal shadow-md">
            <img
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop"
              alt="Sports Field Arena"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>
          <div className="rounded-3xl overflow-hidden h-44 reveal shadow-md">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop"
              alt="Science Research Laboratory"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>
          <div className="rounded-3xl overflow-hidden h-44 reveal shadow-md">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
              alt="Annual Seminar & Cultural Event"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
