import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Heart,
  GraduationCap,
  BookOpen,
  Shield,
  Home,
  Bus,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/60 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="mb-5">
              <Link
                to="/"
                className="inline-block bg-white px-3 py-2 rounded-xl shadow-md border border-white/10 hover:scale-105 transition-transform"
              >
                <img src="/logo.png" alt="Cohen International School Logo" className="h-12 w-auto object-contain" />
              </Link>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              The Best CBSE School in Bhubaneswar (Affiliation No: 1530280) — Managed by Subhadra Charitable Trust (SCT). A complete digital transformation partnered with Briskode Technology.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-base tracking-wide">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-gold-400 transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-400 transition">About Us</Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-gold-400 transition">Academics & JEE/NEET</Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-gold-400 transition">Campus Facilities</Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-gold-400 transition">Admissions & Fees</Link>
              </li>
              <li>
                <a href="https://www.eduqfix.com/PayDirect/#/student/pay/9u3Ik7RvISUPS+FAt5Vw0mfbWsL0LSABcb0Dwea4EuWIcoB0DJulKNCM0J8ImcKt/4592" target="_blank" rel="noreferrer" className="hover:text-gold-400 transition">
                  Pay Fees Online
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1gQa9u2EHouQNeoMaA7HTFnNi7pBrRwDt/view" target="_blank" rel="noreferrer" className="hover:text-gold-400 transition">
                  Public Disclosure
                </a>
              </li>
              <li>
                <Link to="/terms" className="hover:text-gold-400 transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gold-400 font-medium hover:underline transition flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" /> Careers @ CIS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-base tracking-wide">Direct Portals</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/portals/parent/index.html" target="_blank" rel="noreferrer" className="hover:text-gold-400 transition flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-400" /> Parent Portal
                </a>
              </li>
              <li>
                <a href="/portals/student/index.html" target="_blank" rel="noreferrer" className="hover:text-gold-400 transition flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400" /> Student Portal
                </a>
              </li>
              <li>
                <a href="/portals/teacher/index.html" target="_blank" rel="noreferrer" className="hover:text-gold-400 transition flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" /> Teacher Portal
                </a>
              </li>
              <li>
                <a href="/portals/crm/index.html" target="_blank" rel="noreferrer" className="hover:text-gold-400 transition flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-violet-400" /> Admission CRM
                </a>
              </li>
              <li>
                <a href="/portals/hostel/index.html" target="_blank" rel="noreferrer" className="hover:text-gold-400 transition flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-amber-400" /> Hostel Management
                </a>
              </li>
              <li>
                <a href="/portals/transport/index.html" target="_blank" rel="noreferrer" className="hover:text-gold-400 transition flex items-center gap-1.5">
                  <Bus className="w-3.5 h-3.5 text-sky-400" /> Transport TMS
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-base tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Plot No. 111(P) & 112(P), Haridamada (Adjacent to IIT-Bhubaneswar), Jatani, Khordha, Bhubaneswar, Odisha – 752050</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <div className="flex items-center gap-1 flex-wrap">
                  <a href="tel:+917077775310" className="hover:text-gold-400 hover:underline transition">7077775310</a>
                  <span>/</span>
                  <a href="tel:+917077775311" className="hover:text-gold-400 hover:underline transition">7077775311</a>
                  <span>/</span>
                  <a href="tel:+919777706447" className="hover:text-gold-400 hover:underline transition">9777706447</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href="mailto:info@coheninternationalschool.com" className="hover:text-gold-400 hover:underline transition">
                  info@coheninternationalschool.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <p>© 2026 Cohen International School. All rights reserved. CBSE Affiliation No: 1530280.</p>
            <span className="hidden md:inline text-white/20">•</span>
            <Link to="/terms" className="text-white/60 hover:text-gold-400 transition underline decoration-white/20 underline-offset-4">
              Terms & Conditions
            </Link>
          </div>
          <p className="text-white/40">
            Digital Ecosystem by <a href="https://briskodetechnology.com/" target="_blank" rel="noreferrer" className="text-gold-500 font-semibold hover:underline">Briskode Technology Pvt. Ltd.</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
