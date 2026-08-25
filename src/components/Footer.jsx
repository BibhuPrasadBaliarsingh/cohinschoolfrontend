import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
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

export default function Footer({ openLoginModal, openPortalFrame }) {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  const handlePortalClick = (roleKey) => {
    if (roleKey === 'student') {
      navigate('/student/dashboard');
      return;
    }

    if (!isAuthenticated) {
      // BEFORE LOGIN: Open login page or modal
      if (openLoginModal) {
        openLoginModal(roleKey);
      } else {
        navigate('/login', { state: { role: roleKey } });
      }
    } else {
      // AFTER LOGIN: Navigate directly to the portal dashboard
      const targetRole =
        roleKey === 'crm' || roleKey === 'hostel' || roleKey === 'transport'
          ? 'admin'
          : roleKey;

      const userRole = user?.role || targetRole;
      navigate(`/${userRole}/dashboard`);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#06121E] via-[#0B1C2C] to-[#142C42] text-white/70 py-16 border-t border-white/10 relative overflow-hidden">
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
            <h4 className="text-white font-semibold mb-4 text-base tracking-wide">Portals</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handlePortalClick("parent")}
                  className="hover:text-gold-400 transition flex items-center gap-1.5 cursor-pointer text-left text-white/70 hover:text-white"
                >
                  <Heart className="w-3.5 h-3.5 text-rose-400" /> Parent Portal
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handlePortalClick("student")}
                  className="hover:text-gold-400 transition flex items-center gap-1.5 cursor-pointer text-left text-white/70 hover:text-white"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400" /> Student Portal
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handlePortalClick("teacher")}
                  className="hover:text-gold-400 transition flex items-center gap-1.5 cursor-pointer text-left text-white/70 hover:text-white"
                >
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" /> Teacher Portal
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handlePortalClick("crm")}
                  className="hover:text-gold-400 transition flex items-center gap-1.5 cursor-pointer text-left text-white/70 hover:text-white"
                >
                  <Shield className="w-3.5 h-3.5 text-violet-400" /> Admission CRM
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handlePortalClick("hostel")}
                  className="hover:text-gold-400 transition flex items-center gap-1.5 cursor-pointer text-left text-white/70 hover:text-white"
                >
                  <Home className="w-3.5 h-3.5 text-amber-400" /> Hostel Management
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handlePortalClick("transport")}
                  className="hover:text-gold-400 transition flex items-center gap-1.5 cursor-pointer text-left text-white/70 hover:text-white"
                >
                  <Bus className="w-3.5 h-3.5 text-sky-400" /> Transport TMS
                </button>
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
