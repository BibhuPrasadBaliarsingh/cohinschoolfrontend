import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Shield,
  UserCheck,
  BookOpen,
  GraduationCap,
  Users,
  LogOut,
  Home,
  Bell,
  Search,
  Settings,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  LayoutDashboard,
  FileText,
  UserPlus,
  HelpCircle,
  Database
} from 'lucide-react';

const roleConfig = {
  admin: {
    title: 'Super Admin Governance',
    badge: 'System Owner',
    icon: Shield,
    color: 'from-purple-500/20 to-pink-500/10',
    accentColor: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    bgColor: 'bg-purple-500/20',
    menu: [
      { label: 'System Overview', icon: LayoutDashboard, path: '/admin/dashboard' },
      { label: 'User Role Accounts', icon: Users, path: '/admin/dashboard' },
      { label: 'Database & MongoDB', icon: Database, path: '/admin/dashboard' },
      { label: 'System Settings', icon: Settings, path: '/admin/dashboard' }
    ]
  },
  principal: {
    title: "Principal's Executive Desk",
    badge: 'Academic Head',
    icon: UserCheck,
    color: 'from-amber-500/20 to-gold-500/10',
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    bgColor: 'bg-amber-500/20',
    menu: [
      { label: 'Executive Dashboard', icon: LayoutDashboard, path: '/principal/dashboard' },
      { label: 'Faculty Evaluations', icon: Users, path: '/principal/dashboard' },
      { label: 'CBSE Compliance', icon: FileText, path: '/principal/dashboard' },
      { label: 'Institutional Notices', icon: Bell, path: '/principal/dashboard' }
    ]
  },
  teacher: {
    title: 'TeachFlow Faculty Workspace',
    badge: 'Senior Educator',
    icon: BookOpen,
    color: 'from-emerald-500/20 to-teal-500/10',
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    bgColor: 'bg-emerald-500/20',
    menu: [
      { label: 'My Classes & Marks', icon: LayoutDashboard, path: '/teacher/dashboard' },
      { label: 'Live Attendance Marker', icon: Users, path: '/teacher/dashboard' },
      { label: 'DPP & Assignments', icon: FileText, path: '/teacher/dashboard' },
      { label: 'Student Doubt Clearing', icon: HelpCircle, path: '/teacher/dashboard' }
    ]
  },
  student: {
    title: 'EduLearn Hub Student Space',
    badge: 'Class XI Science',
    icon: GraduationCap,
    color: 'from-blue-500/20 to-indigo-500/10',
    accentColor: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    bgColor: 'bg-blue-500/20',
    menu: [
      { label: 'My Learning Hub', icon: LayoutDashboard, path: '/student/dashboard' },
      { label: 'AI Study Tutor', icon: Sparkles, path: '/student/dashboard' },
      { label: 'JEE Mock Tests', icon: FileText, path: '/student/dashboard' },
      { label: 'Daily Timetable', icon: BookOpen, path: '/student/dashboard' }
    ]
  },
  parent: {
    title: 'ParentConnect Guardian Hub',
    badge: 'Guardian Desk',
    icon: Users,
    color: 'from-rose-500/20 to-gold-500/10',
    accentColor: 'text-rose-400',
    borderColor: 'border-rose-500/30',
    bgColor: 'bg-rose-500/20',
    menu: [
      { label: 'Child Progress Overview', icon: LayoutDashboard, path: '/parent/dashboard' },
      { label: 'Live GPS Bus Tracking', icon: Home, path: '/parent/dashboard' },
      { label: 'Online Fee Receipts', icon: FileText, path: '/parent/dashboard' },
      { label: 'Teacher Messaging', icon: Users, path: '/parent/dashboard' }
    ]
  }
};

export default function DashboardLayout({ children, activeTab = 'overview' }) {
  const { user, logout } = useAuth();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const role = user?.role || 'parent';
  const conf = roleConfig[role] || roleConfig.parent;
  const RoleIcon = conf.icon;

  return (
    <div className="min-h-screen bg-navy-950 text-white flex flex-col md:flex-row overflow-x-hidden">
      {/* Sidebar Navigation */}
      <aside
        className={`bg-navy-900 border-r border-gold-500/20 transition-all duration-300 flex flex-col justify-between relative z-30 ${
          sidebarCollapsed ? 'w-full md:w-20' : 'w-full md:w-64'
        }`}
      >
        <div>
          {/* Top Brand Logo */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 min-w-0">
              <div className="bg-white p-1.5 rounded-xl flex-shrink-0 shadow">
                <img src="/logo.png" alt="Cohen Logo" className="h-8 w-auto object-contain" />
              </div>
              {!sidebarCollapsed && (
                <div className="truncate">
                  <h2 className="font-display font-bold text-sm text-white truncate">Cohen International</h2>
                  <p className="text-[10px] text-gold-400 uppercase font-semibold tracking-wider">Digital Campus</p>
                </div>
              )}
            </Link>

            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="hidden md:flex p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition"
              title="Toggle Sidebar"
            >
              {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>

          {/* User Role Card */}
          <div className="p-4 border-b border-white/10">
            <div className={`p-3 rounded-2xl bg-gradient-to-br ${conf.color} border ${conf.borderColor} flex items-center gap-3`}>
              <div className={`w-9 h-9 rounded-xl ${conf.bgColor} border border-white/20 flex items-center justify-center ${conf.accentColor} flex-shrink-0 font-bold`}>
                <RoleIcon className="w-5 h-5" />
              </div>
              {!sidebarCollapsed && (
                <div className="min-w-0">
                  <p className="font-bold text-white text-xs truncate">{user?.name}</p>
                  <span className={`text-[10px] uppercase font-extrabold tracking-wider ${conf.accentColor}`}>
                    {user?.role} Portal
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Nav Menu */}
          <nav className="p-3 space-y-1.5">
            {conf.menu.map((item, idx) => {
              const ItemIcon = item.icon;
              const isActive = idx === 0;
              return (
                <button
                  key={idx}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold transition ${
                    isActive
                      ? 'bg-gold-500 text-navy-950 font-bold shadow-lg'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <ItemIcon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-navy-950' : conf.accentColor}`} />
                  {!sidebarCollapsed && <span className="truncate">{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Sidebar Action Buttons */}
        <div className="p-3 border-t border-white/10 space-y-2">
          <Link
            to="/"
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs text-white/70 hover:bg-white/10 hover:text-gold-400 transition"
          >
            <Home className="w-4 h-4 text-gold-400 flex-shrink-0" />
            {!sidebarCollapsed && <span>Return Main Website</span>}
          </Link>
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs text-rose-300 hover:bg-rose-500/20 transition font-semibold"
          >
            <LogOut className="w-4 h-4 text-rose-400 flex-shrink-0" />
            {!sidebarCollapsed && <span>Logout Account</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="bg-navy-900/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between gap-4 sticky top-0 z-20">
          <div className="flex items-center gap-4 flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dashboard modules, records, reports..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs text-white placeholder-white/40 focus:outline-none focus:border-gold-400 transition"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Live System Status Dot */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              MongoDB Cloud Live
            </div>

            {/* Notification Bell */}
            <button className="relative p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 transition">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-gold-400 rounded-full"></span>
            </button>

            {/* Profile Avatar */}
            <div className="flex items-center gap-2.5">
              <img
                src={user?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name}`}
                alt={user?.name}
                className="w-9 h-9 rounded-full bg-gold-500/20 border border-gold-400/40 object-cover"
              />
              <div className="hidden lg:block text-left">
                <p className="text-xs font-bold text-white leading-tight">{user?.name}</p>
                <p className="text-[10px] text-gold-400 uppercase font-semibold">{user?.role}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
