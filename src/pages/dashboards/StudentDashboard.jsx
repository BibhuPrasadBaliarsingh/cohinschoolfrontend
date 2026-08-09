import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { useAuth } from '../../context/AuthContext';
import {
  GraduationCap,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Clock,
  Trophy,
  Bot,
  Send,
  FileText
} from 'lucide-react';

export default function StudentDashboard() {
  const { user } = useAuth();
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  const handleAskAI = (e) => {
    e.preventDefault();
    if (!aiQuestion.trim()) return;
    setAiLoading(true);
    setTimeout(() => {
      setAiAnswer(
        `AI Tutor Response: Great question regarding "${aiQuestion}"! In Physics, Electrostatics Gauss's Law states that total electric flux through any closed surface equals 1/ε₀ times net enclosed charge. Check Module 4 page 42 for JEE Main numerical problems.`
      );
      setAiLoading(false);
    }, 800);
  };

  return (
    <DashboardLayout>
      {/* Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-navy-900 to-navy-950 border border-blue-500/30 backdrop-blur-xl mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3 inline-block border border-blue-500/30">
          EduLearn Hub Student Space
        </span>
        <h1 className="font-display text-3xl font-extrabold text-white mb-2">
          Student Academic Portal
        </h1>
        <p className="text-white/70 text-sm max-w-2xl">
          Welcome back, <strong className="text-blue-300">{user?.name}</strong>. Enrolled Stream: <strong className="text-gold-400">{user?.department}</strong>. Track your JEE mock test rankings, AI Tutor sessions, and daily assignments.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-400/50 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/70">Physics JEE Rank</span>
            <Trophy className="w-5 h-5 text-gold-400" />
          </div>
          <p className="font-display text-3xl font-extrabold text-gold-400">#3</p>
          <p className="text-[11px] text-emerald-400 mt-1">Top 5 percentile (Batch XI-A)</p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-400/50 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/70">Overall Attendance</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="font-display text-3xl font-extrabold text-emerald-400">98.5%</p>
          <p className="text-[11px] text-emerald-400 mt-1">Checked in 07:45 AM today</p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-400/50 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/70">AI Tutor Sessions</span>
            <Bot className="w-5 h-5 text-blue-400" />
          </div>
          <p className="font-display text-3xl font-extrabold text-blue-400">24</p>
          <p className="text-[11px] text-white/60 mt-1">24/7 Doubt clearing assistant</p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-400/50 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/70">Next Mock Test</span>
            <Clock className="w-5 h-5 text-amber-400" />
          </div>
          <p className="font-display text-3xl font-extrabold text-amber-400">Sun 10 AM</p>
          <p className="text-[11px] text-white/60 mt-1">JEE Main Full Mock #4</p>
        </div>
      </div>

      {/* AI Tutor Assistant Section */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-400/30 flex items-center justify-center text-gold-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-white">Interactive AI Science Tutor</h2>
            <p className="text-xs text-white/60">Ask any JEE/NEET physics, chemistry, or mathematics question</p>
          </div>
        </div>

        <form onSubmit={handleAskAI} className="flex gap-2 mb-4">
          <input
            type="text"
            value={aiQuestion}
            onChange={(e) => setAiQuestion(e.target.value)}
            placeholder="Type your question (e.g. State Gauss's Law in Electrostatics)..."
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-gold-400 transition"
          />
          <button
            type="submit"
            disabled={aiLoading}
            className="px-6 py-3 bg-gold-500 text-navy-950 font-bold rounded-2xl text-xs hover:bg-gold-400 transition flex items-center gap-2 shadow"
          >
            {aiLoading ? 'Thinking...' : <><Send className="w-4 h-4" /> Ask AI</>}
          </button>
        </form>

        {aiAnswer && (
          <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-xs sm:text-sm text-blue-200 leading-relaxed">
            {aiAnswer}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
