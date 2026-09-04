import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import {
  LogIn,
  Sparkles,
  Menu,
  X,
  Phone,
  Mail,
  CreditCard,
  ShieldCheck,
  UserCheck,
  HelpCircle,
  ChevronDown,
  Building,
  ArrowRight,
  GraduationCap,
  Cpu,
  BookOpen,
  Rocket
} from 'lucide-react';
import useAuth from '../hooks/useAuth';

export default function Navbar({ openLoginModal, openAdmissionModal, openChairmanModal, openViceChairmanModal, openPrincipalModal, openCsatModal }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  // CSAT Registration active until November 2, 2026. After Nov 2, 2026, CSAT hides & Apply Now shows automatically.
  const isCsatActive = new Date() < new Date('2026-11-02T00:00:00');

  // Accordion state for mobile menu subcategories (About closed by default)
  const [openSubmenu, setOpenSubmenu] = useState({
    about: false,
    academics: false,
    facilities: false
  });

  // Single-accordion toggle: opening one section closes all other sections
  const toggleSubmenu = (key) => {
    setOpenSubmenu((prev) => ({
      about: false,
      academics: false,
      facilities: false,
      [key]: !prev[key]
    }));
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled((prev) => {
            const isScrolled = window.scrollY > 20;
            return prev !== isScrolled ? isScrolled : prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background body scroll when Mobile Menu overlay is open
  useEffect(() => {
    if (megaMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [megaMenuOpen]);

  const navLinkClass = ({ isActive }) =>
    `nav-link text-sm font-semibold transition-colors duration-300 ${scrolled
      ? isActive
        ? 'text-gold-600 font-bold active'
        : 'text-navy-950 hover:text-gold-600'
      : isActive
        ? 'text-gold-400 font-bold active'
        : 'text-white hover:text-gold-400'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white border-b border-gray-200 shadow-lg' : 'bg-transparent'
        }`}
    >
      {/* Top Notification Bar */}
      <div
        className={`bg-navy-950/90 backdrop-blur-md text-white/80 border-b border-white/10 text-xs transition-all duration-300 transform origin-top overflow-hidden ${scrolled ? 'max-h-0 opacity-0 -translate-y-full py-0 border-transparent pointer-events-none' : 'max-h-24 opacity-100 translate-y-0 py-1.5'
          }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-4">
             <span className="flex items-center gap-1 text-gold-400 font-medium">
              <Phone className="w-3 h-3 flex-shrink-0" />
              <a href="tel:+917077775310" className="hover:underline hover:text-gold-300 transition">
                +91 70777 75310
              </a>
              <span className="text-white/40">/</span>
              <a href="tel:+917077775311" className="hover:underline hover:text-gold-300 transition">
                11
              </a>
              <span className="text-white/40">/</span>
              <a href="tel:+917077775312" className="hover:underline hover:text-gold-300 transition">
                12
              </a>
            </span>
            <a
              href="mailto:info@coheninternationalschool.com"
              className="hidden sm:flex items-center gap-1 text-white/70 hover:text-gold-400 transition"
            >
              <Mail className="w-3 h-3 text-gold-400 flex-shrink-0" /> info@coheninternationalschool.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1gQa9u2EHouQNeoMaA7HTFnNi7pBrRwDt/view"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gold-400 transition flex items-center gap-1 text-[11px]"
            >
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> Public Disclosure
            </a>
            <span className="text-white/30">|</span>
            <a
              href="https://www.eduqfix.com/PayDirect/#/student/pay/9u3Ik7RvISUPS+FAt5Vw0mfbWsL0LSABcb0Dwea4EuWIcoB0DJulKNCM0J8ImcKt/4592"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gold-400 transition flex items-center gap-1 text-[11px] text-gold-400 font-semibold"
            >
              <CreditCard className="w-3 h-3" /> Pay Fees Online
            </a>
          </div>
        </div>
      </div>

      <nav id="navbar" className="transition-all duration-300">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16 sm:h-18' : 'h-20 sm:h-22'}`}>
            {/* Logo */}
            <Link to="/" onClick={() => setMegaMenuOpen(false)} className="flex items-center group">
              <div className="bg-white px-3 py-1.5 rounded-xl shadow border border-gray-200 group-hover:scale-105 transition-transform flex items-center h-11 sm:h-13">
                <img src="/logo.png" alt="Cohen International School Logo" className="h-8 sm:h-10 w-auto object-contain" />
              </div>
            </Link>

            {/* Desktop Navigation Links with Hover Dropdowns (Unchanged Desktop Layout) */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-7">
              {/* About Us Dropdown */}
              <div className="relative group py-2">
                <NavLink to="/about" className={navLinkClass}>
                  <span>About Us</span>
                </NavLink>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 w-60 py-2.5 px-2 bg-white text-navy-950 rounded-2xl shadow-2xl border border-gray-100 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                  <button
                    type="button"
                    onClick={() => openChairmanModal ? openChairmanModal() : navigate('/about')}
                    className="w-full text-left block px-3.5 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-500/10 hover:text-gold-600 transition-colors cursor-pointer"
                  >
                    Chairman's Desk
                  </button>
                  <button
                    type="button"
                    onClick={() => openViceChairmanModal ? openViceChairmanModal() : navigate('/about')}
                    className="w-full text-left block px-3.5 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-500/10 hover:text-gold-600 transition-colors cursor-pointer"
                  >
                    Vice Chairman's Desk
                  </button>
                  <Link
                    to="/mission"
                    className="block px-3.5 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-500/10 hover:text-gold-600 transition-colors"
                  >
                    Our Mission &amp; Vision
                  </Link>
                  <Link
                    to="/scientific-advisory-board"
                    className="block px-3.5 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-500/10 hover:text-gold-600 transition-colors"
                  >
                    Scientific Advisory Board
                  </Link>
                  <Link
                    to="/faculty"
                    className="block px-3.5 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-500/10 hover:text-gold-600 transition-colors"
                  >
                    Administrators
                  </Link>
                </div>
              </div>

              {/* Academics Dropdown */}
              <div className="relative group py-2">
                <NavLink to="/academics" className={navLinkClass}>
                  <span>Academics</span>
                </NavLink>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 w-64 py-2.5 px-2 bg-white text-navy-950 rounded-2xl shadow-2xl border border-gray-100 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                  <Link
                    to="/academics"
                    className="block px-3.5 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-500/10 hover:text-gold-600 transition-colors"
                  >
                    Academic Wings &amp; Curriculum
                  </Link>
                  <Link
                    to="/academics"
                    className="block px-3.5 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-500/10 hover:text-gold-600 transition-colors"
                  >
                    CFP Pre-Foundation (Classes 6-10)
                  </Link>
                  <Link
                    to="/academics"
                    className="block px-3.5 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-500/10 hover:text-gold-600 transition-colors"
                  >
                    CSIP Integrated Coaching (11-12)
                  </Link>
                  <Link
                    to="/olympiad-school"
                    className="block px-3.5 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-500/10 hover:text-gold-600 transition-colors"
                  >
                    Olympiad &amp; Reasoning Preparation
                  </Link>
                  <Link
                    to="/cvap"
                    className="block px-3.5 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-500/10 hover:text-gold-600 transition-colors"
                  >
                    CVAP Value Addition Programs
                  </Link>
                </div>
              </div>

              {/* Campus Life Dropdown */}
              <div className="relative group py-2">
                <NavLink to="/facilities" className={navLinkClass}>
                  <span>Campus Life</span>
                </NavLink>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 w-60 py-2.5 px-2 bg-white text-navy-950 rounded-2xl shadow-2xl border border-gray-100 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                  <Link
                    to="/facilities"
                    className="block px-3.5 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-500/10 hover:text-gold-600 transition-colors"
                  >
                    World-Class Facilities
                  </Link>
                  <Link
                    to="/smart-campus"
                    className="block px-3.5 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-500/10 hover:text-gold-600 transition-colors"
                  >
                    Smart Campus &amp; Tech Labs
                  </Link>
                  <Link
                    to="/cvap"
                    className="block px-3.5 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-500/10 hover:text-gold-600 transition-colors"
                  >
                    CVAP Value Addition Ecosystem
                  </Link>
                  <Link
                    to="/club"
                    className="block px-3.5 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-500/10 hover:text-gold-600 transition-colors"
                  >
                    Clubs &amp; Co-Curricular
                  </Link>
                  <Link
                    to="/cohen-talk"
                    className="block px-3.5 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-500/10 hover:text-gold-600 transition-colors"
                  >
                    Cohen Talks &amp; Seminars
                  </Link>
                </div>
              </div>

              {/* Highlighted Aerospace Programme Link (Blinking Animation) */}
              <NavLink
                to="/aerospace-programme"
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wide transition flex items-center gap-1.5 shadow-lg border animate-pulse ${isActive
                    ? 'bg-gold-500 text-navy-950 border-gold-400 font-black scale-105 shadow-[0_0_20px_rgba(201,162,39,0.9)]'
                    : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white border-blue-400/80 shadow-[0_0_18px_rgba(37,99,235,0.8)] hover:brightness-125'
                  }`
                }
              >
                <Rocket className="w-3.5 h-3.5 text-gold-300 animate-bounce" />
                <span className="tracking-wider">Aerospace Programme</span>
              </NavLink>

              {/* Gallery Dropdown (Replaced Admissions) */}
              <div className="relative group py-2">
                <NavLink to="/gallery" className={navLinkClass}>
                  <span>Gallery</span>
                </NavLink>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 w-60 py-2.5 px-2 bg-white text-navy-950 rounded-2xl shadow-2xl border border-gray-100 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                  <Link
                    to="/gallery"
                    className="block px-3.5 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-500/10 hover:text-gold-600 transition-colors"
                  >
                    Photo Gallery
                  </Link>
                  <Link
                    to="/press-corner"
                    className="block px-3.5 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-500/10 hover:text-gold-600 transition-colors"
                  >
                    Press Corner
                  </Link>
                </div>
              </div>

              <NavLink to="/careers" className={navLinkClass}>
                Careers
              </NavLink>

              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>

              {isAuthenticated && user && (
                <Link to={`/${(user?.role || 'student').toLowerCase()}/dashboard`} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition flex items-center gap-1.5 shadow ${scrolled ? 'bg-navy-900 text-white hover:bg-gold-500 hover:text-navy-950' : 'bg-gold-500/20 border border-gold-400/40 text-gold-400 hover:bg-gold-500 hover:text-navy-950'}`}>
                  <UserCheck className="w-3.5 h-3.5 text-gold-400" />
                  <span>{(user?.name ? user.name.split(' ')[0] : 'User')} ({user?.role || 'Portal'})</span>
                </Link>
              )}
            </div>

            {/* CTA Buttons + Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {isCsatActive && (
                <button
                  type="button"
                  onClick={() => openCsatModal?.()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-amber-400 via-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-navy-950 font-extrabold text-xs sm:text-sm rounded-full transition shadow-md hover:scale-105 cursor-pointer whitespace-nowrap animate-csat-blink"
                >
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-navy-950" />
                  <span>CSAT</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => openAdmissionModal('apply')}
                className="hidden sm:inline-flex btn-premium items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 bg-gold-500 text-navy-950 font-bold text-xs sm:text-sm rounded-full hover:bg-gold-400 transition shadow-md whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Apply Now</span>
              </button>

              <button
                type="button"
                onClick={() => navigate('/login')}
                className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 font-semibold text-xs sm:text-sm rounded-full transition shadow-sm ${scrolled ? 'bg-navy-900 text-white hover:bg-navy-800 border border-navy-900' : 'bg-white/10 text-white hover:bg-white/20 border border-white/25'}`}
              >
                <LogIn className="w-4 h-4 text-gold-400" />
                Login
              </button>

              {/* 3-Bar Hamburger Button */}
              <button
                type="button"
                onClick={() => setMegaMenuOpen((prev) => !prev)}
                className={`lg:hidden p-2.5 rounded-xl transition border flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-gold-500 ${scrolled
                  ? 'bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 border-navy-900 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20 border-white/30 backdrop-blur-md'
                  }`}
                aria-label="Toggle Navigation Menu"
                title="Toggle Navigation Menu"
              >
                {megaMenuOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ULTRA-POLISHED MODERN MOBILE NAVIGATION MENU OVERLAY */}
      {megaMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-gradient-to-b from-[#030914] via-[#091B30] to-[#030914] text-white flex flex-col overflow-y-auto animate-fadeIn font-sans transition-all duration-300 selection:bg-gold-500 selection:text-navy-950">

          <div className="w-full px-5 py-4 flex items-center justify-between border-b border-white/10 sticky top-0 bg-[#030914]/95 backdrop-blur-xl z-30 shadow-md">
            <Link to="/" onClick={() => setMegaMenuOpen(false)} className="flex items-center gap-2">
              <div className="bg-white px-3 py-1.5 rounded-xl shadow border border-white/20">
                <img src="/logo.png" alt="Cohen Logo" className="h-8 w-auto object-contain" />
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <Link
                to="/login"
                onClick={() => setMegaMenuOpen(false)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-gold-400 bg-white/10 rounded-full border border-gold-400/30 hover:bg-gold-500 hover:text-navy-950 transition-all"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Login</span>
              </Link>

              <button
                type="button"
                onClick={() => setMegaMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-gold-400 hover:text-navy-950 transition-all cursor-pointer border border-white/20"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="w-full max-w-md mx-auto px-5 py-6 flex-1 space-y-3.5">

            {/* 0. AEROSPACE PROGRAMME (HIGHLIGHTED) */}
            <Link
              to="/aerospace-programme"
              onClick={() => setMegaMenuOpen(false)}
              className={`flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-xl font-bold border border-blue-400/40 transition min-h-[52px] ${location.pathname === '/aerospace-programme' ? 'ring-2 ring-gold-400' : ''
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/20 text-gold-300 flex-shrink-0">
                  <Rocket className="w-4 h-4 animate-pulse" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-gold-300 block">Odisha's 1st Centre of Excellence</span>
                  <span className="text-sm font-black uppercase text-white">Aerospace Programme</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gold-300" />
            </Link>

            {/* 1. ABOUT US ACCORDION */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden shadow-lg transition-all">
              <button
                type="button"
                onClick={() => toggleSubmenu('about')}
                className="w-full flex items-center justify-between p-4 text-left font-bold text-base text-white hover:text-gold-400 transition cursor-pointer min-h-[52px]"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gold-500/20 text-gold-400">
                    <Building className="w-4 h-4" />
                  </div>
                  <span>About Us</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openSubmenu.about ? 'rotate-180 text-gold-400' : 'text-white/50'}`} />
              </button>

              {openSubmenu.about && (
                <div className="px-4 pb-4 pt-1 space-y-1.5 border-t border-white/10 bg-black/20">
                  <Link to="/about" onClick={() => setMegaMenuOpen(false)} className={`flex items-center gap-2.5 py-2.5 px-3 rounded-xl text-sm font-medium transition ${location.pathname === '/about' ? 'bg-gold-500/20 text-gold-400 font-bold border-l-2 border-gold-400' : 'text-white/80 hover:text-gold-400 hover:bg-white/5'}`}>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    <span className="truncate">About Cohen International School</span>
                  </Link>
                  <button type="button" onClick={() => { setMegaMenuOpen(false); openChairmanModal ? openChairmanModal() : navigate('/about'); }} className="w-full flex items-center gap-2.5 py-2.5 px-3 rounded-xl text-sm font-medium text-white/80 hover:text-gold-400 hover:bg-white/5 transition text-left cursor-pointer">
                    <ArrowRight className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    <span className="truncate">Chairman's Desk Message</span>
                  </button>
                  <button type="button" onClick={() => { setMegaMenuOpen(false); openViceChairmanModal ? openViceChairmanModal() : navigate('/about'); }} className="w-full flex items-center gap-2.5 py-2.5 px-3 rounded-xl text-sm font-medium text-white/80 hover:text-gold-400 hover:bg-white/5 transition text-left cursor-pointer">
                    <ArrowRight className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    <span className="truncate">Vice Chairman's Desk Message</span>
                  </button>
                  <Link to="/faculty" onClick={() => setMegaMenuOpen(false)} className={`flex items-center gap-2.5 py-2.5 px-3 rounded-xl text-sm font-medium transition ${location.pathname === '/faculty' ? 'bg-gold-500/20 text-gold-400 font-bold border-l-2 border-gold-400' : 'text-white/80 hover:text-gold-400 hover:bg-white/5'}`}>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    <span className="truncate">Administrators</span>
                  </Link>
                </div>
              )}
            </div>

            {/* 2. ACADEMICS ACCORDION */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden shadow-lg transition-all">
              <button
                type="button"
                onClick={() => toggleSubmenu('academics')}
                className="w-full flex items-center justify-between p-4 text-left font-bold text-base text-white hover:text-gold-400 transition cursor-pointer min-h-[52px]"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gold-500/20 text-gold-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span>Academics</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openSubmenu.academics ? 'rotate-180 text-gold-400' : 'text-white/50'}`} />
              </button>

              {openSubmenu.academics && (
                <div className="px-4 pb-4 pt-1 space-y-1.5 border-t border-white/10 bg-black/20">
                  <Link to="/academics" onClick={() => setMegaMenuOpen(false)} className={`flex items-center gap-2.5 py-2.5 px-3 rounded-xl text-sm font-medium transition ${location.pathname === '/academics' ? 'bg-gold-500/20 text-gold-400 font-bold border-l-2 border-gold-400' : 'text-white/80 hover:text-gold-400 hover:bg-white/5'}`}>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    <span className="truncate">Academic Wings &amp; Curriculum</span>
                  </Link>
                  <Link to="/olympiad-school" onClick={() => setMegaMenuOpen(false)} className={`flex items-center gap-2.5 py-2.5 px-3 rounded-xl text-sm font-medium transition ${location.pathname === '/olympiad-school' ? 'bg-gold-500/20 text-gold-400 font-bold border-l-2 border-gold-400' : 'text-white/80 hover:text-gold-400 hover:bg-white/5'}`}>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    <span className="truncate">Olympiad &amp; Reasoning Preparation</span>
                  </Link>
                </div>
              )}
            </div>

            {/* 3. FACILITIES ACCORDION */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden shadow-lg transition-all">
              <button
                type="button"
                onClick={() => toggleSubmenu('facilities')}
                className="w-full flex items-center justify-between p-4 text-left font-bold text-base text-white hover:text-gold-400 transition cursor-pointer min-h-[52px]"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gold-500/20 text-gold-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span>Campus Facilities</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openSubmenu.facilities ? 'rotate-180 text-gold-400' : 'text-white/50'}`} />
              </button>

              {openSubmenu.facilities && (
                <div className="px-4 pb-4 pt-1 space-y-1.5 border-t border-white/10 bg-black/20">
                  <Link to="/facilities" onClick={() => setMegaMenuOpen(false)} className={`flex items-center gap-2.5 py-2.5 px-3 rounded-xl text-sm font-medium transition ${location.pathname === '/facilities' ? 'bg-gold-500/20 text-gold-400 font-bold border-l-2 border-gold-400' : 'text-white/80 hover:text-gold-400 hover:bg-white/5'}`}>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    <span className="truncate">World-Class Facilities</span>
                  </Link>
                  <Link to="/club" onClick={() => setMegaMenuOpen(false)} className={`flex items-center gap-2.5 py-2.5 px-3 rounded-xl text-sm font-medium transition ${location.pathname === '/club' ? 'bg-gold-500/20 text-gold-400 font-bold border-l-2 border-gold-400' : 'text-white/80 hover:text-gold-400 hover:bg-white/5'}`}>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    <span className="truncate">Clubs &amp; Co-Curricular</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Blinking Mobile Aerospace Link */}
            <Link to="/aerospace-programme" onClick={() => setMegaMenuOpen(false)} className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white border border-blue-400/60 shadow-[0_0_20px_rgba(37,99,235,0.7)] text-base font-extrabold transition min-h-[52px] animate-pulse">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gold-400/20 text-gold-300">
                  <Rocket className="w-4 h-4 animate-bounce" />
                </div>
                <span className="uppercase tracking-wider text-sm font-black">Aerospace Programme</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gold-300" />
            </Link>

            {/* GALLERY ACCORDION */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden shadow-lg transition-all">
              <button
                type="button"
                onClick={() => toggleSubmenu('gallery')}
                className="w-full flex items-center justify-between p-4 text-left font-bold text-base text-white hover:text-gold-400 transition cursor-pointer min-h-[52px]"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gold-500/20 text-gold-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span>Gallery</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openSubmenu.gallery ? 'rotate-180 text-gold-400' : 'text-white/50'}`} />
              </button>

              {openSubmenu.gallery && (
                <div className="px-4 pb-4 pt-1 space-y-1.5 border-t border-white/10 bg-black/20">
                  <Link to="/gallery" onClick={() => setMegaMenuOpen(false)} className={`flex items-center gap-2.5 py-2.5 px-3 rounded-xl text-sm font-medium transition ${location.pathname === '/gallery' ? 'bg-gold-500/20 text-gold-400 font-bold border-l-2 border-gold-400' : 'text-white/80 hover:text-gold-400 hover:bg-white/5'}`}>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    <span className="truncate">Photo Gallery</span>
                  </Link>
                  <Link to="/press-corner" onClick={() => setMegaMenuOpen(false)} className={`flex items-center gap-2.5 py-2.5 px-3 rounded-xl text-sm font-medium transition ${location.pathname === '/press-corner' ? 'bg-gold-500/20 text-gold-400 font-bold border-l-2 border-gold-400' : 'text-white/80 hover:text-gold-400 hover:bg-white/5'}`}>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    <span className="truncate">Press Corner</span>
                  </Link>
                </div>
              )}
            </div>

            <Link to="/careers" onClick={() => setMegaMenuOpen(false)} className={`flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] border border-white/10 shadow-lg text-base font-bold transition min-h-[52px] ${location.pathname === '/careers' ? 'bg-gold-500/20 text-gold-400 border-gold-500/40' : 'text-white hover:text-gold-400 hover:bg-white/10'}`}>
              <div className="flex items-center gap-3"><div className="p-2 rounded-xl bg-gold-500/20 text-gold-400"><BookOpen className="w-4 h-4" /></div><span>Careers</span></div>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>

            <Link to="/contact" onClick={() => setMegaMenuOpen(false)} className={`flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] border border-white/10 shadow-lg text-base font-bold transition min-h-[52px] ${location.pathname === '/contact' ? 'bg-gold-500/20 text-gold-400 border-gold-500/40' : 'text-white hover:text-gold-400 hover:bg-white/10'}`}>
              <div className="flex items-center gap-3"><div className="p-2 rounded-xl bg-gold-500/20 text-gold-400"><Phone className="w-4 h-4" /></div><span>Contact Us</span></div>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>
          </div>

          <div className="w-full max-w-md mx-auto px-5 py-5 border-t border-white/10 space-y-3 bg-[#030914]/95 backdrop-blur-md sticky bottom-0 z-30">
            {isCsatActive ? (
              <button type="button" onClick={() => { setMegaMenuOpen(false); openCsatModal?.(); }} className="flex items-center justify-center gap-2 py-3.5 w-full bg-gradient-to-r from-amber-400 to-gold-500 text-navy-950 font-extrabold text-xs sm:text-sm rounded-2xl shadow-xl hover:brightness-110 transition cursor-pointer animate-csat-blink">
                <Sparkles className="w-4 h-4 text-navy-950" /><span>CSAT 2026 Registration</span>
              </button>
            ) : (
              <button type="button" onClick={() => { setMegaMenuOpen(false); openAdmissionModal('apply'); }} className="btn-premium flex items-center justify-center gap-2 py-3.5 w-full bg-gold-500 text-navy-950 font-bold text-sm rounded-2xl shadow-xl hover:bg-gold-400 transition">
                <Sparkles className="w-4 h-4" /><span>Apply for Admissions</span>
              </button>
            )}
            <button type="button" onClick={() => { setMegaMenuOpen(false); navigate('/login'); }} className="flex items-center justify-center gap-2 py-3 w-full bg-white/10 text-white font-semibold text-xs rounded-2xl border border-white/20 hover:bg-white/20 transition">
              <LogIn className="w-3.5 h-3.5 text-gold-400" /><span>Login</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
