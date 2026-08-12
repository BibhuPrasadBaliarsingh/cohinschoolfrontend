import React from 'react';
import {
  Zap,
  Users,
  Heart,
  GraduationCap,
  BookOpen,
  LayoutDashboard,
  Briefcase,
  IndianRupee,
  Bus,
  Home,
  ClipboardCheck,
  Bot,
  Smartphone
} from 'lucide-react';

export default function DigitalEcosystem({ openModule }) {
  return (
    <section id="digital" className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 reveal">
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-400 text-xs font-medium tracking-wider uppercase mb-6">
            <Zap className="w-3.5 h-3.5" />
            Powered by Briskode Technology
          </div> */}
          <h2 className="font-display text-4xl lg:text-5xl text-white mb-4">Complete Digital Ecosystem</h2>
          <p className="text-white/60 max-w-3xl mx-auto text-lg">
            Not just a website — an integrated School ERP + Admission CRM + HRMS + AI-powered platform that transforms every stakeholder experience.
          </p>
        </div>

        {/* Module Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
          <button
            onClick={() => openModule('crm')}
            className="card-lift text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-white/10 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Users className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="font-semibold text-white mb-1">Admission CRM</h3>
            <p className="text-white/50 text-xs">Lead to Admission pipeline with WhatsApp & follow-ups</p>
          </button>

          <button
            onClick={() => openModule('parent')}
            className="card-lift text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-white/10 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Heart className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="font-semibold text-white mb-1">Parent Portal</h3>
            <p className="text-white/50 text-xs">Attendance, fees, bus tracking, report cards & more</p>
          </button>

          <button
            onClick={() => openModule('student')}
            className="card-lift text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-white/10 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <GraduationCap className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="font-semibold text-white mb-1">Student Portal</h3>
            <p className="text-white/50 text-xs">Homework, digital library, online exams, certificates</p>
          </button>

          <button
            onClick={() => openModule('teacher')}
            className="card-lift text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-white/10 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <BookOpen className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="font-semibold text-white mb-1">Teacher Portal</h3>
            <p className="text-white/50 text-xs">Class management, marks entry, homework & leave</p>
          </button>

          <button
            onClick={() => openModule('admin')}
            className="card-lift text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-white/10 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <LayoutDashboard className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="font-semibold text-white mb-1">Admin Dashboard</h3>
            <p className="text-white/50 text-xs">Students, employees, fees, analytics & visitors</p>
          </button>

          <button
            onClick={() => openModule('hrms')}
            className="card-lift text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-white/10 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Briefcase className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="font-semibold text-white mb-1">HRMS</h3>
            <p className="text-white/50 text-xs">Payroll, biometric, recruitment, appraisal & exit</p>
          </button>

          <button
            onClick={() => openModule('finance')}
            className="card-lift text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-white/10 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <IndianRupee className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="font-semibold text-white mb-1">Finance Module</h3>
            <p className="text-white/50 text-xs">Fees, scholarships, online payment & receipts</p>
          </button>

          <button
            onClick={() => openModule('transport')}
            className="card-lift text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-white/10 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Bus className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="font-semibold text-white mb-1">Transport & GPS</h3>
            <p className="text-white/50 text-xs">Live bus tracking for parents & route management</p>
          </button>

          <button
            onClick={() => openModule('hostel')}
            className="card-lift text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-white/10 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Home className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="font-semibold text-white mb-1">Hostel Management</h3>
            <p className="text-white/50 text-xs">Room allocation, attendance, visitors & complaints</p>
          </button>

          <button
            onClick={() => openModule('exam')}
            className="card-lift text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-white/10 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <ClipboardCheck className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="font-semibold text-white mb-1">Examination</h3>
            <p className="text-white/50 text-xs">Marks, grades, hall tickets, results & analytics</p>
          </button>

          <button
            onClick={() => openModule('ai')}
            className="card-lift text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-white/10 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Bot className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="font-semibold text-white mb-1">AI Features</h3>
            <p className="text-white/50 text-xs">Chatbot, Voice Assistant, Report Generator & more</p>
          </button>

          <button
            onClick={() => openModule('apps')}
            className="card-lift text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-white/10 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Smartphone className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="font-semibold text-white mb-1">Mobile Apps</h3>
            <p className="text-white/50 text-xs">Parent, Student, Teacher & Management apps</p>
          </button>
        </div>

        {/* CRM Pipeline Visual */}
        <div className="reveal p-8 rounded-3xl bg-white/5 border border-white/10 mb-12">
          <h3 className="font-display text-2xl text-white mb-2 text-center">Admission CRM Pipeline</h3>
          <p className="text-white/50 text-center text-sm mb-8">Every enquiry becomes a tracked lead — zero leakage</p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-0">
            <div className="pipeline-step flex flex-col items-center px-3 py-2">
              <div className="w-10 h-10 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center text-xs font-bold mb-2">
                1
              </div>
              <span className="text-white text-xs text-center">New Lead</span>
            </div>
            <div className="pipeline-step flex flex-col items-center px-3 py-2">
              <div className="w-10 h-10 rounded-full bg-gold-500/80 text-navy-900 flex items-center justify-center text-xs font-bold mb-2">
                2
              </div>
              <span className="text-white text-xs text-center">Contacted</span>
            </div>
            <div className="pipeline-step flex flex-col items-center px-3 py-2">
              <div className="w-10 h-10 rounded-full bg-gold-500/70 text-navy-900 flex items-center justify-center text-xs font-bold mb-2">
                3
              </div>
              <span className="text-white text-xs text-center">Counselling</span>
            </div>
            <div className="pipeline-step flex flex-col items-center px-3 py-2">
              <div className="w-10 h-10 rounded-full bg-gold-500/60 text-navy-900 flex items-center justify-center text-xs font-bold mb-2">
                4
              </div>
              <span className="text-white text-xs text-center">Campus Visit</span>
            </div>
            <div className="pipeline-step flex flex-col items-center px-3 py-2">
              <div className="w-10 h-10 rounded-full bg-gold-500/50 text-navy-900 flex items-center justify-center text-xs font-bold mb-2">
                5
              </div>
              <span className="text-white text-xs text-center">Demo Class</span>
            </div>
            <div className="pipeline-step flex flex-col items-center px-3 py-2">
              <div className="w-10 h-10 rounded-full bg-gold-500/40 text-navy-900 flex items-center justify-center text-xs font-bold mb-2">
                6
              </div>
              <span className="text-white text-xs text-center">Application</span>
            </div>
            <div className="pipeline-step flex flex-col items-center px-3 py-2">
              <div className="w-10 h-10 rounded-full bg-gold-500/30 text-navy-900 flex items-center justify-center text-xs font-bold mb-2">
                7
              </div>
              <span className="text-white text-xs text-center">Documents</span>
            </div>
            <div className="pipeline-step flex flex-col items-center px-3 py-2">
              <div className="w-10 h-10 rounded-full bg-gold-500/20 text-navy-900 flex items-center justify-center text-xs font-bold mb-2">
                8
              </div>
              <span className="text-white text-xs text-center">Fee Paid</span>
            </div>
            <div className="flex flex-col items-center px-3 py-2">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold mb-2">
                ✓
              </div>
              <span className="text-emerald-400 text-xs text-center font-medium">Confirmed</span>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="text-center reveal">
          <p className="text-white/40 text-sm mb-4">Built with modern, scalable technology</p>
          <div className="flex flex-wrap justify-center gap-3 text-xs">
            <span className="px-3 py-1.5 rounded-full bg-white/5 text-white/70 border border-white/10">React / Next.js</span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 text-white/70 border border-white/10">Node.js / ASP.NET</span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 text-white/70 border border-white/10">PostgreSQL</span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 text-white/70 border border-white/10">Azure / AWS</span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 text-white/70 border border-white/10">Flutter Apps</span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 text-white/70 border border-white/10">Razorpay</span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 text-white/70 border border-white/10">WhatsApp API</span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 text-white/70 border border-white/10">GPS & Biometric</span>
          </div>
        </div>
      </div>
    </section>
  );
}
