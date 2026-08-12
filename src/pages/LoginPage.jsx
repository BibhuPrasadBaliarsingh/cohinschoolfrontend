import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  LogIn,
  UserCheck,
  Shield,
  GraduationCap,
  Users,
  BookOpen,
  Eye,
  EyeOff,
  Sparkles,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

const rolesConfig = [
  {
    id: "parent",
    title: "Parent Portal",
    badge: "ParentConnect",
    email: "parent@cohen.edu.in",
    password: "parent123",
    icon: Users,
    color: "from-rose-500/20 to-gold-500/10",
    description:
      "Track child performance, attendance, report cards & online fees",
  },
  {
    id: "student",
    title: "Student Portal",
    badge: "EduLearn Hub",
    email: "student@cohen.edu.in",
    password: "student123",
    icon: GraduationCap,
    color: "from-blue-500/20 to-indigo-500/10",
    description: "Access digital classes, AI study tutor, homework & timetable",
  },
  {
    id: "teacher",
    title: "Teacher Portal",
    badge: "TeachFlow",
    email: "teacher@cohen.edu.in",
    password: "teacher123",
    icon: BookOpen,
    color: "from-emerald-500/20 to-teal-500/10",
    description: "Manage gradebook, lesson plans, class logs & student queries",
  },
  {
    id: "principal",
    title: "Principal Desk",
    badge: "Executive",
    email: "principal@cohen.edu.in",
    password: "principal123",
    icon: UserCheck,
    color: "from-amber-500/20 to-gold-500/10",
    description: "Academic oversight, staff performance & institutional policy",
  },
  {
    id: "admin",
    title: "Super Admin",
    badge: "Governance",
    email: "admin@cohen.edu.in",
    password: "admin123",
    icon: Shield,
    color: "from-purple-500/20 to-pink-500/10",
    description:
      "Full ERP/CRM system administration, audit logs & user management",
  },
];

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("parent");
  const [email, setEmail] = useState("parent@cohen.edu.in");
  const [password, setPassword] = useState("parent123");
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");

  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const currentRoleObj =
    rolesConfig.find((r) => r.id === selectedRole) || rolesConfig[0];

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
    setFormError("");
    const target = rolesConfig.find((r) => r.id === roleId);
    if (target) {
      setEmail(target.email);
      setPassword(target.password);
    }
  };

  const fillDemoCredentials = (roleId) => {
    handleRoleSelect(roleId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!email || !password) {
      setFormError("Please enter both email and password");
      return;
    }

    try {
      const loggedUser = await login(email, password);

      // Navigate to intended page or role dashboard
      const from = location.state?.from?.pathname;
      if (from) {
        navigate(from, { replace: true });
      } else {
        // Navigate according to database assigned user role
        switch (loggedUser.role) {
          case "admin":
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
          default:
            navigate("/parent/dashboard", { replace: true });
            break;
        }
      }
    } catch (err) {
      setFormError(err.message || "Login failed. Please check credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden text-white">
      {/* Ambient glowing circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center relative z-10">
        <Link to="/" className="inline-block mb-4">
          <div className="bg-white/95 p-3 rounded-2xl shadow-xl border border-white/20 inline-block">
            <img
              src="/logo.png"
              alt="Cohen Logo"
              className="h-12 w-auto object-contain mx-auto"
            />
          </div>
        </Link>
        <h2 className="font-display text-3xl font-extrabold text-white">
          Digital Campus Portal
        </h2>
        <p className="mt-2 text-sm text-white/70">
          Cohen International School Single Sign-On (SSO)
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl relative z-10 px-4">
        {/* Main Card */}
        <div className="bg-gradient-to-b from-white/15 to-white/5 border border-white/20 backdrop-blur-xl py-8 px-6 sm:px-10 shadow-2xl rounded-3xl">
          {/* Active Role Header */}

          {/* Form Error Alert */}
          {formError && (
            <div className="mb-6 p-4 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-200 text-xs flex items-center gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400" />
              <span>{formError}</span>
            </div>
          )}

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                User Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter authorized email"
                className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-gold-400 transition text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                Account Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter account password"
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-gold-400 transition text-sm pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-gold-400 transition"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 text-white/70 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded border-white/20 bg-white/10 text-gold-500 focus:ring-0"
                />
                <span>Remember Session</span>
              </label>
              <a
                href="#forgot"
                onClick={(e) => {
                  e.preventDefault();
                  alert(
                    "Please contact system administrator or IT helpdesk at info@coheninternationalschool.com to reset password.",
                  );
                }}
                className="text-gold-400 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-600 text-navy-950 font-bold rounded-2xl hover:brightness-110 transition shadow-lg flex items-center justify-center gap-2 text-base disabled:opacity-50"
            >
              {loading ? (
                <span>Authenticating Credentials...</span>
              ) : (
                <>
                  <LogIn className="w-5 h-5" /> Sign In
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
