import React from 'react';
import { Sparkles, Check } from 'lucide-react';

export default function Academics() {
  return (
    <section id="academics" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <p className="text-gold-600 font-medium tracking-widest uppercase text-sm mb-3">Academics</p>
          <h2 className="font-display text-4xl lg:text-5xl text-navy-900 mb-4">Curriculum Designed for Excellence</h2>
          <p className="text-navy-700/70 max-w-2xl mx-auto">
            From foundational years to competitive excellence — a seamless journey of growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="card-lift p-7 rounded-3xl bg-white border border-cream-200 shadow-sm reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center font-display font-bold">
                PP
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">Pre-Primary</h3>
                <p className="text-xs text-navy-600">Nursery – UKG</p>
              </div>
            </div>
            <p className="text-sm text-navy-700/70 leading-relaxed">
              Phonics, play-based learning, foundational literacy & numeracy, motor skills and emotional development in a joyful environment.
            </p>
          </div>

          <div className="card-lift p-7 rounded-3xl bg-white border border-cream-200 shadow-sm reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center font-display font-bold">
                P
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">Primary</h3>
                <p className="text-xs text-navy-600">Classes I – V</p>
              </div>
            </div>
            <p className="text-sm text-navy-700/70 leading-relaxed">
              Strong conceptual foundation, Project-Based Learning, Cambridge English, introduction to coding & creative arts.
            </p>
          </div>

          <div className="card-lift p-7 rounded-3xl bg-white border border-cream-200 shadow-sm reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center font-display font-bold">
                M
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">Middle School</h3>
                <p className="text-xs text-navy-600">Classes VI – VIII</p>
              </div>
            </div>
            <p className="text-sm text-navy-700/70 leading-relaxed">
              Cohen Foundation Programme begins — critical thinking, Olympiad training, STEAM, Design Thinking and early competitive exposure.
            </p>
          </div>

          <div className="card-lift p-7 rounded-3xl bg-white border border-cream-200 shadow-sm reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center font-display font-bold">
                H
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">High School</h3>
                <p className="text-xs text-navy-600">Classes IX – X</p>
              </div>
            </div>
            <p className="text-sm text-navy-700/70 leading-relaxed">
              Board preparation with depth + pre-foundation for JEE/NEET, advanced AI modules, leadership through CMUN and science camps.
            </p>
          </div>

          <div className="card-lift p-7 rounded-3xl bg-white border border-cream-200 shadow-sm reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gold-500 text-navy-900 flex items-center justify-center font-display font-bold">
                SS
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">Senior Secondary</h3>
                <p className="text-xs text-navy-600">Classes XI – XII</p>
              </div>
            </div>
            <p className="text-sm text-navy-700/70 leading-relaxed">
              Full Integrated Programme: CBSE + complete IIT-JEE / NEET coaching. Science, Commerce streams with career counselling.
            </p>
          </div>

          <div className="card-lift p-7 rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 text-white reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gold-500 text-navy-900 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Smart Classes & Labs</h3>
                <p className="text-xs text-white/60">All Levels</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Interactive smart boards, dedicated Physics, Chemistry, Biology & Math laboratories, Digital Library and Robotics lab.
            </p>
          </div>
        </div>

        {/* Special Programs */}
        <div className="grid md:grid-cols-2 gap-8 reveal">
          <div className="p-8 rounded-3xl bg-cream-100 border border-cream-200">
            <h3 className="font-display text-2xl text-navy-900 mb-4">Cohen Foundation Programme</h3>
            <p className="text-navy-700/80 mb-4">
              For Grades VI–X: A holistic journey fostering critical thinking and problem-solving with structured pre-foundation coaching for IIT-JEE, NEET & Olympiads.
            </p>
            <ul className="space-y-2 text-sm text-navy-700">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-600" /> Conceptual clarity + competitive edge
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-600" /> Weekly tests & doubt clearing
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-600" /> Olympiad & Reasoning training
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-navy-900 text-white">
            <h3 className="font-display text-2xl mb-4">Cohen Integrated Programme</h3>
            <p className="text-white/70 mb-4">
              For Classes XI & XII: Powerful integration of IIT-JEE / NEET Medical coaching with robust NCERT curriculum — at no additional fee.
            </p>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-400" /> Expert faculty from Vidwan Classes
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-400" /> Regular mock tests & performance analytics
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-400" /> Career guidance & mentorship
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
