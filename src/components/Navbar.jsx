import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { LogIn, UserPlus, Sparkles, Menu, X, Phone, Mail, CreditCard, ShieldCheck, UserCheck, HelpCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ openLoginModal, openAdmissionModal }) {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `nav-link text-sm font-medium transition ${isActive ? 'text-gold-400 font-semibold active' : 'text-white/90 hover:text-gold-400'
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block py-2 text-base font-medium transition ${isActive ? 'text-gold-400 font-bold active' : 'text-white hover:text-gold-400'
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-950/95 backdrop-blur-xl border-b border-gold-500/20 shadow-2xl' : 'bg-transparent'}`}>
      {/* Top Notification Bar */}
      <div
        className={`bg-navy-950/90 backdrop-blur-md text-white/80 border-b border-white/10 text-xs transition-all duration-300 transform origin-top overflow-hidden ${scrolled ? 'max-h-0 opacity-0 -translate-y-full py-0 border-transparent pointer-events-none' : 'max-h-24 opacity-100 translate-y-0 py-1.5'
          }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gold-400 font-medium">
              <Phone className="w-3 h-3 flex-shrink-0" />
              <a href="tel:+917077775310" className="hover:underline hover:text-gold-300 transition">+91 70777 75310</a>
              <span className="text-white/40">/</span>
              <a href="tel:+917077775311" className="hover:underline hover:text-gold-300 transition">5311</a>
              <span className="text-white/40">/</span>
              <a href="tel:+917077775312" className="hover:underline hover:text-gold-300 transition">5312</a>
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
              <div className="bg-white/95 px-3 py-1.5 rounded-xl shadow-lg border border-white/20 group-hover:scale-105 transition-transform flex items-center h-11 sm:h-13">
                <img
                  src="/logo.png"
                  alt="Cohen International School Logo"
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-7">
              <NavLink to="/about" className={navLinkClass}>
                About
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
              <NavLink to="/smart-campus" className={navLinkClass}>
                Smart Campus
              </NavLink>
              <NavLink to="/careers" className={navLinkClass}>
                Careers
              </NavLink>
             
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>

              {isAuthenticated && user ? (
                <Link
                  to={`/${user.role}/dashboard`}
                  className="px-3.5 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 text-xs font-semibold hover:bg-gold-500 hover:text-navy-950 transition flex items-center gap-1.5 shadow"
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>{user.name.split(' ')[0]} ({user.role})</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="nav-link text-white/90 hover:text-gold-400 text-sm font-medium transition inline-flex items-center gap-1.5"
                >
                  <LogIn className="w-3.5 h-3.5 text-gold-400" />
                  <span>Login</span>
                </Link>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => navigate('/contact')}
                className="btn-premium hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 text-white border border-white/25 font-medium text-xs sm:text-sm rounded-full hover:bg-white/20 transition"
              >
                <HelpCircle className="w-4 h-4 text-gold-400" />
                Enquire Now
              </button>
              <button
                onClick={() => openAdmissionModal('apply')}
                className="btn-premium inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 text-navy-900 font-semibold text-xs sm:text-sm rounded-full hover:bg-gold-400 transition"
              >
                <Sparkles className="w-4 h-4" />
                Apply Now
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white p-2"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass-dark border-t border-white/10 max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="px-6 py-6 space-y-2">
              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                About
              </NavLink>
              <NavLink
                to="/academics"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                Academics
              </NavLink>
              <NavLink
                to="/facilities"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                Facilities
              </NavLink>
              <NavLink
                to="/admissions"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                Admissions
              </NavLink>
              <NavLink
                to="/smart-campus"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                Smart Campus
              </NavLink>

              <NavLink
                to="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                Careers
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                Contact
              </NavLink>

              {isAuthenticated && user ? (
                <Link
                  to={`/${user.role}/dashboard`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-gold-400 py-2 w-full text-left text-base font-bold"
                >
                  <UserCheck className="w-4 h-4 text-gold-400" /> {user.name} ({user.role})
                </Link>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-1.5 text-white hover:text-gold-400 py-2 w-full text-left text-base font-medium"
                >
                  <LogIn className="w-4 h-4 text-gold-400" /> Login
                </Link>
              )}
              <div className="flex flex-col gap-2.5 pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/contact');
                  }}
                  className="w-full btn-premium px-5 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-full flex items-center justify-center gap-2"
                >
                  <HelpCircle className="w-4 h-4 text-gold-400" /> Enquire Now
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openAdmissionModal('apply');
                  }}
                  className="w-full btn-premium px-5 py-3 bg-gold-500 text-navy-900 font-semibold rounded-full flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" /> Apply Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
