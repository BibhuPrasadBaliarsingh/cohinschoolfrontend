import React from 'react';
import { Smartphone, Shield, Zap, Laptop, Bus, UserCheck, BookOpen, CreditCard, Building } from 'lucide-react';

const modules = [
  {
    id: 'student-portal',
    title: 'Student Portal & LMS',
    desc: 'Digital homework, online quizzes, e-library, report cards, and interactive syllabus tracking.',
    icon: Laptop,
    badge: 'Student Module',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'parent-app',
    title: 'Parent Native App',
    desc: 'Real-time attendance alerts, fee payments, live GPS transport tracking, and direct teacher chat.',
    icon: Smartphone,
    badge: 'Parent App',
    color: 'from-emerald-600 to-teal-600'
  },
  {
    id: 'teacher-erp',
    title: 'Teacher ERP Workbench',
    desc: 'One-click attendance, exam mark entries, digital lesson plans, and automated report card generators.',
    icon: UserCheck,
    badge: 'Faculty ERP',
    color: 'from-purple-600 to-violet-600'
  },
  {
    id: 'transport-tms',
    title: 'RouteSafe Transport TMS',
    desc: 'Live GPS vehicle tracking, geofencing speed alerts, driver safety scores, and parent pickup notifications.',
    icon: Bus,
    badge: 'Fleet TMS',
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'fee-gateway',
    title: 'Instant Online Fee Gateway',
    desc: '0% convenience fee online payments via UPI, Cards, NetBanking with automated GST tax receipts.',
    icon: CreditCard,
    badge: 'FinTech',
    color: 'from-gold-500 to-amber-600'
  },
  {
    id: 'hostel-management',
    title: 'Smart Boarding Hostel ERP',
    desc: 'Biometric gate passes, mess menu planner, room allocation, and parent outing permissions.',
    icon: Building,
    badge: 'Boarding ERP',
    color: 'from-navy-800 to-navy-950'
  }
];

export default function DigitalEcosystem({ openModule }) {
  return (
    <section className="py-20 bg-white text-navy-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-medium tracking-widest uppercase text-xs mb-2 block">
            Powered by Briskode ERP
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-navy-900 font-bold mb-4">
            Unified Digital Campus Ecosystem
          </h2>
          <p className="text-navy-700/75 max-w-2xl mx-auto text-base">
            Click on any digital module below to explore feature specifications, live demo workflows, and access controls.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                onClick={() => openModule?.(m.id)}
                className="group cursor-pointer p-8 rounded-3xl bg-cream-50 border border-cream-200 hover:border-gold-500/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gold-500/10 text-gold-700 border border-gold-500/30">
                      {m.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-navy-700/75 text-sm leading-relaxed mb-6">
                    {m.desc}
                  </p>
                </div>
                <span className="text-xs font-bold text-navy-900 group-hover:text-gold-600 transition-colors flex items-center gap-1">
                  Launch Interactive Demo →
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
