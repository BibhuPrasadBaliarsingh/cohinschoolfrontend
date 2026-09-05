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
  MapPin,
  MessageCircle
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
              The Best CBSE School in Bhubaneswar (Affiliation No: 1530280) — Managed by <a href="https://www.subhadracharitabletrust.org/" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline">Subhadra Charitable Trust (SCT)</a>. A complete digital transformation partnered with Briskode Technology.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com/cisbbsr/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 shadow-md hover:scale-110"
                title="Facebook"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://x.com/cohenschoolbbsr"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-black hover:border-white/40 transition-all duration-300 shadow-md hover:scale-110"
                title="Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/cohen-international-school/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 shadow-md hover:scale-110"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCYBd9WCm6TDFDU-iCJk3kew"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300 shadow-md hover:scale-110"
                title="YouTube"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
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
                <Link to="/faculty" className="hover:text-gold-400 transition">Our Management</Link>
              </li>
              <li>
                <Link to="/page/11" className="hover:text-gold-400 transition">Scientific Advisory Board</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-gold-400 transition">News &amp; Events</Link>
              </li>
              <li>
                <Link to="/cohentalk" className="hover:text-gold-400 transition">Cohen Talks</Link>
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
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@coheninternationalschool.com" className="hover:text-gold-400 hover:underline transition">
                    info@coheninternationalschool.com
                  </a>
                  <a href="mailto:principal@coheninternationalschool.com" className="hover:text-gold-400 hover:underline transition">
                    principal@coheninternationalschool.com
                  </a>
                  <a href="mailto:hr@coheninternationalschool.com" className="hover:text-gold-400 hover:underline transition text-gold-300 font-medium flex items-center gap-1.5">
                    hr@coheninternationalschool.com 
                  </a>
                </div>
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
