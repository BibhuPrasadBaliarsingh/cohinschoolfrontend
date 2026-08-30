import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
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
  Compass,
  ArrowRight
} from 'lucide-react';
import useAuth from '../hooks/useAuth';

export default function Navbar({ openLoginModal, openAdmissionModal, openChairmanModal, openPrincipalModal }) {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  // Accordion state for mobile / mega menu subcategories (All closed initially)
  const [openSubmenu, setOpenSubmenu] = useState({
    about: false,
    academics: false,
    facilities: false,
    clubs: false,
    important: false,
    gallery: false
  });

  // Single-accordion toggle: opening one closes all other subcategories
  const toggleSubmenu = (key) => {
    setOpenSubmenu((prev) => ({
      about: false,
      academics: false,
      facilities: false,
      clubs: false,
      important: false,
      gallery: false,
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

  // Prevent background body scroll when Mega Menu overlay is open
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
    `nav-link text-sm font-semibold transition-colors duration-300 ${
      scrolled
        ? isActive
          ? 'text-gold-600 font-bold active'
          : 'text-navy-950 hover:text-gold-600'
        : isActive
        ? 'text-gold-400 font-bold active'
        : 'text-white hover:text-gold-400'
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block py-2.5 px-3 rounded-xl text-base font-semibold transition-colors duration-300 ${
      scrolled
        ? isActive
          ? 'bg-gold-500/10 text-gold-600 font-bold'
          : 'text-navy-950 hover:bg-slate-100 hover:text-gold-600'
        : isActive
        ? 'bg-gold-500/20 text-gold-400 font-bold'
        : 'text-white hover:bg-white/10 hover:text-gold-400'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white border-b border-gray-200 shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Top Notification Bar */}
      <div
        className={`bg-navy-950/90 backdrop-blur-md text-white/80 border-b border-white/10 text-xs transition-all duration-300 transform origin-top overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0 -translate-y-full py-0 border-transparent pointer-events-none' : 'max-h-24 opacity-100 translate-y-0 py-1.5'
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
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center group">
              <div className="bg-white px-3 py-1.5 rounded-xl shadow border border-gray-200 group-hover:scale-105 transition-transform flex items-center h-11 sm:h-13">
                <img src="/logo.png" alt="Cohen International School Logo" className="h-8 sm:h-10 w-auto object-contain" />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-7">
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
              <NavLink to="/mission" className={navLinkClass}>
                Mission
              </NavLink>
              <NavLink to="/academics" className={navLinkClass}>
                Academics
              </NavLink>
              <NavLink to="/facilities" className={navLinkClass}>
                Facilities
              </NavLink>
              <NavLink to="/admissions" className={navLinkClass}>
                Admissions
              </NavLink>
              <NavLink to="/careers" className={navLinkClass}>
                Careers
              </NavLink>

              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>

              {isAuthenticated && user ? (
                <Link
                  to={
                    ['admin', 'principal', 'teacher', 'parent', 'student'].includes((user?.role || '').toLowerCase())
                      ? `/${(user?.role || 'student').toLowerCase()}/dashboard`
                      : '/student/dashboard'
                  }
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition flex items-center gap-1.5 shadow ${
                    scrolled
                      ? 'bg-navy-900 text-white hover:bg-gold-500 hover:text-navy-950'
                      : 'bg-gold-500/20 border border-gold-400/40 text-gold-400 hover:bg-gold-500 hover:text-navy-950'
                  }`}
                >
                  <UserCheck className="w-3.5 h-3.5 text-gold-400" />
                  <span>
                    {(user?.name ? user.name.split(' ')[0] : user?.email ? user.email.split('@')[0] : 'User')} ({user?.role || 'Portal'})
                  </span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className={`nav-link text-sm font-semibold transition-colors duration-300 inline-flex items-center gap-1.5 ${
                    scrolled ? 'text-navy-950 hover:text-gold-600' : 'text-white/90 hover:text-gold-400'
                  }`}
                >
                  <LogIn className={`w-3.5 h-3.5 ${scrolled ? 'text-gold-600' : 'text-gold-400'}`} />
                  <span>Login</span>
                </Link>
              )}
            </div>

            {/* CTA Buttons + Mobile Login + 3-Bar Hamburger Menu Button */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 font-semibold text-xs sm:text-sm rounded-full transition shadow-sm ${
                  scrolled
                    ? 'bg-navy-900 text-white hover:bg-navy-800 border border-navy-900'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/25'
                }`}
              >
                <HelpCircle className="w-4 h-4 text-gold-400" />
                Enquire Now
              </button>
              <button
                type="button"
                onClick={() => openAdmissionModal('apply')}
                className="btn-premium inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 text-navy-950 font-bold text-xs sm:text-sm rounded-full hover:bg-gold-400 transition shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                Apply Now
              </button>

              {/* 3-Bar Hamburger Button */}
              <button
                type="button"
                onClick={() => setMegaMenuOpen(true)}
                className={`p-2 rounded-xl transition border flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-gold-500 ${
                  scrolled
                    ? 'bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 border-navy-900'
                    : 'bg-white/10 text-white hover:bg-white/20 border-white/30'
                }`}
                aria-label="Open Full Navigation Menu"
                title="Full Site Navigation"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* FULL-SCREEN & MOBILE ELEGANT MEGA MENU OVERLAY (Clean Typography Design) */}
      {megaMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#040C16] text-white flex flex-col overflow-y-auto animate-fadeIn font-sans transition-all duration-300">
          {/* Top Header Bar with Close & Login Buttons */}
          <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 py-6 sm:py-8 flex items-center justify-between border-b border-white/10 sticky top-0 bg-[#040C16]/95 backdrop-blur-md z-20">
            <Link to="/" onClick={() => setMegaMenuOpen(false)} className="flex items-center gap-3">
              <div className="bg-white px-3 py-1.5 rounded-xl shadow">
                <img src="/logo.png" alt="Cohen Logo" className="h-8 sm:h-9 w-auto object-contain" />
              </div>
              
            </Link>

            <div className="flex items-center gap-3">
              {/* Login Button inside Overlay */}
              <Link
                to="/login"
                onClick={() => setMegaMenuOpen(false)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-bold text-gold-400 bg-white/10 rounded-full border border-gold-500/40 hover:bg-gold-500 hover:text-navy-950 transition-all"
              >
                <LogIn className="w-4 h-4 text-gold-400" />
                <span>Portal Login</span>
              </Link>

              {/* Close Button X */}
              <button
                type="button"
                onClick={() => setMegaMenuOpen(false)}
                className="p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-gold-500 hover:text-navy-950 text-white border border-white/20 transition-all duration-300 hover:scale-110 cursor-pointer"
                aria-label="Close Navigation Overlay"
                title="Close Navigation Overlay"
              >
                <X className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>
          </div>

          {/* Navigation Container (Clean Spacious Typography - No Cards) */}
          <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 py-10 sm:py-14 flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-8 flex items-center gap-2">
              <Compass className="w-4 h-4 text-gold-400" /> Explore Campus Navigation &amp; Desks
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-14">
              {/* SECTION 1: ABOUT */}
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => toggleSubmenu('about')}
                  className="w-full flex items-center justify-between pb-2.5 border-b border-white/20 text-left cursor-pointer group"
                >
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-gold-400 transition-colors">
                    About
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 group-hover:bg-gold-500 group-hover:text-navy-950 transition">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${openSubmenu.about ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </div>
                </button>

                {openSubmenu.about && (
                  <ul className="mt-3 space-y-3 text-base sm:text-lg text-white/80 font-sans animate-fadeIn">
                    <li>
                      <Link
                        to="/about"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>About Us &amp; Campus Overview</span>
                      </Link>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          setMegaMenuOpen(false);
                          if (openChairmanModal) openChairmanModal();
                          else navigate('/about');
                        }}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition text-left group cursor-pointer"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>Chairman's Desk Message</span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          setMegaMenuOpen(false);
                          if (openPrincipalModal) openPrincipalModal();
                          else navigate('/about');
                        }}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition text-left group cursor-pointer"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>Principal's Executive Desk</span>
                      </button>
                    </li>
                    <li>
                      <Link
                        to="/faculty"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>Faculty &amp; Leadership</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/page/11"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>Scientific Advisory Board</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/mission"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>Our Vision &amp; Core Mission</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* SECTION 2: ACADEMICS */}
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => toggleSubmenu('academics')}
                  className="w-full flex items-center justify-between pb-2.5 border-b border-white/20 text-left cursor-pointer group"
                >
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-gold-400 transition-colors">
                    Academics
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 group-hover:bg-gold-500 group-hover:text-navy-950 transition">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${openSubmenu.academics ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </div>
                </button>

                {openSubmenu.academics && (
                  <ul className="mt-3 space-y-3 text-base sm:text-lg text-white/80 font-sans animate-fadeIn">
                    <li>
                      <Link
                        to="/academics"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>CBSE Senior Secondary</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/academics"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>Vidwan IIT-JEE &amp; NEET Prep</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/academics"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>Olympiad &amp; Foundation School</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admissions"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>Admissions AY 2027-2028</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* SECTION 3: FACILITIES */}
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => toggleSubmenu('facilities')}
                  className="w-full flex items-center justify-between pb-2.5 border-b border-white/20 text-left cursor-pointer group"
                >
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-gold-400 transition-colors">
                    Facilities
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 group-hover:bg-gold-500 group-hover:text-navy-950 transition">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${openSubmenu.facilities ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </div>
                </button>

                {openSubmenu.facilities && (
                  <ul className="mt-3 space-y-3 text-base sm:text-lg text-white/80 font-sans animate-fadeIn">
                    <li>
                      <Link
                        to="/facilities"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>10-Acre Campus Overview</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/smart-campus"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>Smart Campus &amp; ERP</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/facilities"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>Robotics, Physics &amp; Chemistry Labs</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* SECTION 4: CLUBS & SPORTS */}
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => toggleSubmenu('clubs')}
                  className="w-full flex items-center justify-between pb-2.5 border-b border-white/20 text-left cursor-pointer group"
                >
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-gold-400 transition-colors">
                    Clubs &amp; Sports
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 group-hover:bg-gold-500 group-hover:text-navy-950 transition">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${openSubmenu.clubs ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </div>
                </button>

                {openSubmenu.clubs && (
                  <ul className="mt-3 space-y-3 text-base sm:text-lg text-white/80 font-sans animate-fadeIn">
                    <li>
                      <Link
                        to="/cohentalk"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-gold-300 font-semibold hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>Beyond Academics (Cohen Talks)</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/smart-campus"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>STEM &amp; Robotics Guild</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/facilities"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>Aerospace &amp; Astronomy Club</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cohentalk"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>Grandmaster Chess &amp; Athletics</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* SECTION 5: MEDIA & GALLERY */}
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => toggleSubmenu('gallery')}
                  className="w-full flex items-center justify-between pb-2.5 border-b border-white/20 text-left cursor-pointer group"
                >
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-gold-400 transition-colors">
                    Media &amp; Gallery
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 group-hover:bg-gold-500 group-hover:text-navy-950 transition">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${openSubmenu.gallery ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </div>
                </button>

                {openSubmenu.gallery && (
                  <ul className="mt-3 space-y-3 text-base sm:text-lg text-white/80 font-sans animate-fadeIn">
                    <li>
                      <Link
                        to="/news"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>Image &amp; Video Highlights</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/news"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>Press Corner &amp; Releases</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/news"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>Annual Galas &amp; Festivals</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* SECTION 6: IMPORTANT LINKS */}
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => toggleSubmenu('important')}
                  className="w-full flex items-center justify-between pb-2.5 border-b border-white/20 text-left cursor-pointer group"
                >
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-gold-400 transition-colors">
                    Important Links
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 group-hover:bg-gold-500 group-hover:text-navy-950 transition">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${openSubmenu.important ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </div>
                </button>

                {openSubmenu.important && (
                  <ul className="mt-3 space-y-3 text-base sm:text-lg text-white/80 font-sans animate-fadeIn">
                    <li>
                      <Link
                        to="/news"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>Academic Holiday List</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/careers"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>Careers at Cohen International</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>Contact Admissions Office</span>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="https://www.eduqfix.com/PayDirect/#/student/pay/9u3Ik7RvISUPS+FAt5Vw0mfbWsL0LSABcb0Dwea4EuWIcoB0DJulKNCM0J8ImcKt/4592"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-gold-400 font-semibold hover:text-gold-300 transition group"
                      >
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <span>Pay Fees Online via Eduqfix</span>
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="border-t border-white/10 py-6 px-6 sm:px-10 text-center text-xs text-white/50 font-sans">
            &copy; {new Date().getFullYear()} Cohen International School. All Rights Reserved. Barunei Hills, Adjacent to IIT Bhubaneswar,
            Odisha.
          </div>
        </div>
      )}
    </header>
  );
}
