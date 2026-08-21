import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  LogIn,
  Eye,
  EyeOff,
  Sparkles,
  AlertCircle,
  Mail,
  Lock,
  Building2,
  HelpCircle,
  Phone,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Users,
  GraduationCap,
  BookOpen,
  UserCheck,
  Shield,
  Zap,
  Award,
  Compass
} from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [detectedRole, setDetectedRole] = useState(null);

  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Smart Role Detection as User Types Email
  useEffect(() => {
    const lower = email.toLowerCase().trim();
    if (lower.includes("parent")) {
      setDetectedRole({ title: "Parent Portal", badge: "ParentConnect", icon: Users, color: "from-rose-500 to-pink-600", text: "text-rose-400" });
    } else if (lower.includes("student")) {
      setDetectedRole({ title: "Student Portal", badge: "EduLearn Hub", icon: GraduationCap, color: "from-blue-500 to-indigo-600", text: "text-blue-400" });
    } else if (lower.includes("teacher")) {
      setDetectedRole({ title: "Teacher Portal", badge: "TeachFlow Pro", icon: BookOpen, color: "from-emerald-500 to-teal-600", text: "text-emerald-400" });
    } else if (lower.includes("principal")) {
      setDetectedRole({ title: "Principal Desk", badge: "Executive Leadership", icon: UserCheck, color: "from-amber-500 to-gold-600", text: "text-amber-400" });
    } else if (lower.includes("admin")) {
      setDetectedRole({ title: "Super Admin", badge: "Governance CRM", icon: Shield, color: "from-purple-500 to-violet-600", text: "text-purple-400" });
    } else if (lower.length > 3) {
      setDetectedRole({ title: "Verified Account", badge: "Campus SSO", icon: ShieldCheck, color: "from-gold-400 to-amber-500", text: "text-gold-400" });
    } else {
      setDetectedRole(null);
    }
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!email || !password) {
      setFormError("Please enter both email address and account password.");
      return;
    }

    try {
      const loggedUser = await login(email, password);

      const from = location.state?.from?.pathname;
      if (from && from !== "/login") {
        navigate(from, { replace: true });
      } else {
        switch (loggedUser?.role) {
          case "admin":
          case "Super Admin":
          case "Admin":
          case "Counsellor":
          case "Admission Staff":
            navigate("/admin/dashboard", { replace: true });
            break;
          case "principal":
            navigate("/principal/dashboard", { replace: true });
            break;
          case "teacher":
            navigate("/teacher/dashboard", { replace: true });
            break;
          case "student":
            navigate("/student/dashboard", { replace: true });
            break;
          case "parent":
            navigate("/parent/dashboard", { replace: true });
            break;
          default:
            navigate("/admin/dashboard", { replace: true });
            break;
        }
      }
    } catch (err) {
      setFormError(err.message || "Authentication failed. Please check credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-[#050D16] flex flex-col justify-between relative overflow-hidden font-sans text-white selection:bg-gold-500 selection:text-navy-950">

      {/* Unique About Campus Background Image */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden pointer-events-none z-0">
        <img
          src="/images/about_banner.png"
          alt="Cohen International School Campus"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#050D16]/65" />
      </div>

      {/* Top Glass Navigation Header */}
      <header className="relative z-20 w-full px-4 sm:px-8 py-4 flex items-center justify-between border-b border-white/10 bg-navy-950/70 backdrop-blur-xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-gold-400 transition-colors group"
        >
          <div className="p-1.5 rounded-xl bg-white/10 group-hover:bg-gold-500/20 border border-white/15 group-hover:border-gold-400/40 transition">
            <ArrowLeft className="w-4 h-4 text-gold-400 group-hover:-translate-x-0.5 transition-transform" />
          </div>
          <span className="hidden sm:inline">Back to CIS Portal Website</span>
          <span className="sm:hidden">Website</span>
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/30 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Single Sign-On Active</span>
          </div>
          <a
            href="tel:+917077775310"
            className="hidden md:flex items-center gap-1.5 text-xs text-gold-400 font-medium hover:underline"
          >
            <Phone className="w-3.5 h-3.5" /> +91 70777 75310
          </a>
        </div>
      </header>

      {/* Main Hatke Split Layout Container */}
      <main className="flex-1 relative z-10 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-12 my-auto">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* LEFT SIDE: Brand Heritage Emblem Spotlight (Hidden on Mobile, Visible on Desktop) */}
          <div className="hidden lg:flex lg:col-span-6 flex-col items-center lg:items-start text-center lg:text-left space-y-6">

            {/* Glowing Golden Shield Crest Banner */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-gold-400 via-amber-500 to-gold-600 opacity-60 blur-lg group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-navy-950 p-4 sm:p-5 rounded-2xl border border-gold-400/40 flex items-center gap-4 shadow-2xl">
                <div className="bg-white p-2.5 rounded-xl shadow-lg flex-shrink-0">
                  <img
                    src="/logo.png"
                    alt="Cohen Logo"
                    className="h-12 sm:h-14 w-auto object-contain"
                  />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-400 block">
                    Barunei Hills • Bhubaneswar
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-tight">
                    Cohen International School
                  </h3>
                  <p className="text-[11px] text-white/60">CBSE Affiliated • Integrated IIT-JEE & NEET</p>
                </div>
              </div>
            </div>

            {/* Headline Statement */}
            <div className="space-y-2 max-w-lg">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Digital Campus <br />
                <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500 bg-clip-text text-transparent">
                  Unified Gateway
                </span>
              </h2>
              <p className="text-sm text-white/70 leading-relaxed">
                Enter your authorized credentials below. The portal intelligently detects your role and directs you to your dedicated dashboard.
              </p>
            </div>

            {/* Key Highlights Grid */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-md pt-2">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center">
                <Award className="w-5 h-5 text-gold-400 mx-auto mb-1" />
                <span className="block text-xs font-bold text-white">Top CBSE</span>
                <span className="text-[10px] text-white/50">Excellence</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center">
                <Compass className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                <span className="block text-xs font-bold text-white">Vidwan</span>
                <span className="text-[10px] text-white/50">JEE/NEET Prep</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center">
                <Zap className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                <span className="block text-xs font-bold text-white">Smart ERP</span>
                <span className="text-[10px] text-white/50">AI Powered</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Interactive Cyber-Regal Login Card */}
          <div className="lg:col-span-6 w-full max-w-md mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-b from-white/15 via-white/10 to-white/5 backdrop-blur-2xl border border-white/20 p-6 sm:p-8 shadow-2xl shadow-navy-950/90">

              {/* Glowing Top Beam */}
              <div className="absolute top-0 inset-x-10 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent rounded-full" />

              {/* Card Header & Dynamic Role Badge */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-display text-xl font-extrabold text-white">Sign In</h3>
                  <p className="text-xs text-white/60">Access your digital desk</p>
                </div>

              </div>

              {/* Error Alert */}
              {formError && (
                <div className="mb-5 p-3.5 rounded-2xl bg-rose-500/20 border border-rose-500/50 text-rose-100 text-xs flex items-center gap-2.5 animate-fadeIn">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400" />
                  <span className="leading-relaxed">{formError}</span>
                </div>
              )}

              {/* Direct Login Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                    User Email / Account ID
                  </label>
                  <div className="relative group">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-gold-400 transition">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. parent@cohen.edu.in"
                      className="w-full pl-10 pr-4 py-3 bg-navy-950/80 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/30 transition text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                    Account Password
                  </label>
                  <div className="relative group">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-gold-400 transition">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className="w-full pl-10 pr-11 py-3 bg-navy-950/80 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/30 transition text-sm font-medium"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-gold-400 transition p-1"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Options Row */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <label className="flex items-center gap-2 text-white/70 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 rounded border-white/30 bg-navy-950 text-gold-500 accent-gold-500 focus:ring-gold-400 transition"
                    />
                    <span>Remember session</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(true)}
                    className="text-gold-400 hover:text-gold-300 hover:underline font-medium transition"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-600 text-navy-950 font-bold rounded-2xl hover:brightness-110 active:scale-[0.99] transition-all duration-200 shadow-xl shadow-gold-500/20 flex items-center justify-center gap-2 text-base disabled:opacity-50 group mt-3"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-navy-950 border-t-transparent rounded-full animate-spin" />
                      Authenticating Credentials...
                    </span>
                  ) : (
                    <>
                      <LogIn className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                      <span>Sign In to Campus</span>
                      <ChevronRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Security note */}
              <div className="mt-6 pt-4 flex items-center justify-between text-[11px] text-white/50 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-gold-400" />
                  <span>Cohen Digital Campus ERP</span>
                </div>
                <span>Secured by Briskode Tech</span>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setShowForgotModal(false)}
        >
          <div
            className="bg-navy-900 border border-gold-500/30 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4 relative text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gold-500/20 text-gold-400 border border-gold-500/30">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Forgot Password?</h3>
                <p className="text-xs text-white/60">CIS Digital Campus IT Assistance</p>
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed">
              Please contact the Cohen IT Helpdesk or your designated Class Coordinator to reset your password or recover your account credentials.
            </p>

            <div className="space-y-2 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-white/60">IT Support Email:</span>
                <a href="mailto:info@coheninternationalschool.com" className="text-gold-400 font-semibold hover:underline">
                  info@coheninternationalschool.com
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">Helpdesk Hotline:</span>
                <a href="tel:+917077775310" className="text-gold-400 font-semibold hover:underline">
                  +91 70777 75310
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowForgotModal(false)}
              className="w-full py-3 bg-gold-500 text-navy-950 font-bold rounded-xl hover:bg-gold-400 transition text-xs"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-20 py-3.5 px-4 text-center text-[11px] text-white/40 border-t border-white/5">
        &copy; {new Date().getFullYear()} Cohen International School. All Rights Reserved. Barunei Hills, Near IIT Bhubaneswar, Odisha.
      </footer>
    </div>
  );
}
