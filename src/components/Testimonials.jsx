import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <p className="text-gold-600 font-medium tracking-widest uppercase text-sm mb-3">Voices</p>
          <h2 className="font-display text-4xl lg:text-5xl text-navy-900">What Parents & Mentors Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-cream-200 shadow-sm reveal">
            <div className="flex gap-1 mb-4">
              <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
              <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
              <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
              <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
              <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
            </div>
            <p className="text-navy-700/80 leading-relaxed mb-6">
              “After interacting with the Chairman, I was motivated by his vision of holistic education and admitted both my kids. The campus and faculty have exceeded our expectations.”
            </p>
            <div>
              <p className="font-semibold text-navy-900">Dr. U. C. Sahoo</p>
              <p className="text-sm text-navy-600">IIT Bhubaneswar</p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-cream-200 shadow-sm reveal">
            <div className="flex gap-1 mb-4">
              <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
              <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
              <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
              <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
              <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
            </div>
            <p className="text-navy-700/80 leading-relaxed mb-6">
              “CIS is not simply a school; rather it’s a Learning Villa. The Collaborative, Instrumental and Self-Paced pedagogy is truly transformative for our children.”
            </p>
            <div>
              <p className="font-semibold text-navy-900">Parent of Grade VIII Student</p>
              <p className="text-sm text-navy-600">Bhubaneswar</p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-cream-200 shadow-sm reveal">
            <div className="flex gap-1 mb-4">
              <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
              <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
              <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
              <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
              <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
            </div>
            <p className="text-navy-700/80 leading-relaxed mb-6">
              “The integrated coaching for JEE without extra cost and the focus on AI & Robotics give our children a genuine competitive advantage while keeping them balanced.”
            </p>
            <div>
              <p className="font-semibold text-navy-900">Parent of Class XI Student</p>
              <p className="text-sm text-navy-600">Jatani</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
