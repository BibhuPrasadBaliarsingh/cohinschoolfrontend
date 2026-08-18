import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  GraduationCap,
  LayoutDashboard,
  Users,
  Calendar,
  ClipboardCheck,
  BookOpen,
  CalendarOff,
  ArrowLeft,
  ArrowRight,
  Bell,
  Upload,
  Clock,
  Menu,
  X,
  UserCheck,
  CheckCircle,
  User,
  Pencil,
  Save,
  Camera,
  Sparkles,
  Send,
  BarChart2,
  Trophy,
  FileText,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";

export default function StudentDashboard() {
  const { user } = useAuth();
  const [activeNav, setActiveNav] = useState("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTimetableDay, setSelectedTimetableDay] = useState("Mon");

  // Student Profile & Identity State
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [studentInfo, setStudentInfo] = useState({
    name: user?.name || "Aarav Mohanty",
    studentId: "STU-2026-0812",
    classGroup: "VIII-A",
    roll: "00001",
    academicSession: "2025-26",
    stream: "Science & Mathematics (JEE Prep)",
    email: user?.email || "aarav.mohanty@cohenschool.edu.in",
    phone: "+91 98123 45678",
    emergencyContact: "+91 94370 12345",
    targetExam: "JEE Main & Advanced 2028",
    joiningDate: "15 August 2026",
    address: "Plot 42, Silicon Hills, Patia, Bhubaneswar, Odisha",
  });

  // Subject-wise Attendance Dataset
  const subjectAttendanceList = [
    {
      id: 1,
      subject: "Mathematics",
      teacher: "Smt. Priya Mohanty",
      attended: 49,
      total: 50,
      rate: 98,
      status: "Excellent",
    },
    {
      id: 2,
      subject: "Physics",
      teacher: "Dr. R. K. Mishra",
      attended: 47,
      total: 50,
      rate: 94,
      status: "Good",
    },
    {
      id: 3,
      subject: "Chemistry",
      teacher: "Dr. S. Das",
      attended: 46,
      total: 50,
      rate: 92,
      status: "Good",
    },
    {
      id: 4,
      subject: "English",
      teacher: "Smt. R. Patnaik",
      attended: 49,
      total: 50,
      rate: 98,
      status: "Excellent",
    },
    {
      id: 5,
      subject: "Computer Science",
      teacher: "Er. A. Swain",
      attended: 50,
      total: 50,
      rate: 100,
      status: "Perfect",
    },
  ];

  // Daily Attendance Log Dataset
  const dailyAttendanceLog = [
    { date: "17 Aug 2026", day: "Monday", status: "Present", checkIn: "07:45 AM" },
    { date: "16 Aug 2026", day: "Sunday", status: "Holiday", checkIn: "-" },
    { date: "15 Aug 2026", day: "Saturday", status: "Present", checkIn: "07:42 AM" },
    { date: "14 Aug 2026", day: "Friday", status: "Present", checkIn: "07:48 AM" },
    { date: "13 Aug 2026", day: "Thursday", status: "Absent", checkIn: "-" },
    { date: "12 Aug 2026", day: "Wednesday", status: "Present", checkIn: "07:50 AM" },
    { date: "11 Aug 2026", day: "Tuesday", status: "Late", checkIn: "08:10 AM" },
  ];

  // Homework Assignments State
  const [homeworkList, setHomeworkList] = useState([
    {
      id: 1,
      title: "Solve Linear Equations (Ex 2.3)",
      subject: "Mathematics • Class VIII-A",
      dueDate: "2026-08-20",
      status: "Pending",
      fileName: null,
      submittedAt: null,
    },
    {
      id: 2,
      title: "Quadratic Formula & Word Problems",
      subject: "Mathematics • Class VIII-A",
      dueDate: "2026-08-18",
      status: "Submitted",
      fileName: "aarav_quadratic_ex.pdf",
      submittedAt: "16 Aug 2026, 06:30 PM",
    },
    {
      id: 3,
      title: "Electrostatics & Gauss's Law Numerical",
      subject: "Physics • JEE Prep",
      dueDate: "2026-08-22",
      status: "Pending",
      fileName: null,
      submittedAt: null,
    },
    {
      id: 4,
      title: "Fraction Word Problems",
      subject: "Mathematics • Class VIII-A",
      dueDate: "2026-07-30",
      status: "Submitted",
      fileName: "fractions_aarav.pdf",
      submittedAt: "29 Jul 2026, 05:15 PM",
    },
  ]);

  const [selectedFileForHw, setSelectedFileForHw] = useState({});

  // AI Tutor State
  const [aiQuestion, setAiQuestion] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  // Today's schedule dataset matching exact layout
  const todaySchedule = [
    {
      startTime: "08:00",
      endTime: "08:45",
      className: "VIII-A • Mathematics",
      topic: "Linear Equations • Room 12",
      status: "Next",
      isNext: true,
    },
    {
      startTime: "08:50",
      endTime: "09:35",
      className: "VIII-A • Physics",
      topic: "Motion & Laws • Room 15",
      status: "Upcoming",
      isNext: false,
    },
    {
      startTime: "09:40",
      endTime: "10:25",
      className: "VIII-A • Chemistry",
      topic: "Atomic Structure • Lab 02",
      status: "Upcoming",
      isNext: false,
    },
    {
      startTime: "11:15",
      endTime: "12:00",
      className: "VIII-A • Computer Science",
      topic: "Python Basics • Lab 04",
      status: "Upcoming",
      isNext: false,
    },
  ];

  // Weekly timetable data for Mon-Sat matching exact style
  const weeklyTimetableData = {
    Mon: {
      dayName: "Monday",
      periods: [
        { period: 1, title: "VIII-A • Mathematics", timeRoom: "08:00-08:45 • Room 12", isFree: false },
        { period: 2, title: "VIII-A • Physics", timeRoom: "08:50-09:35 • Room 15", isFree: false },
        { period: 3, title: "Library / Doubt Hour", timeRoom: "09:40-10:25", isFree: true },
        { period: 4, title: "VIII-A • Chemistry", timeRoom: "10:30-11:15 • Lab 02", isFree: false },
        { period: 5, title: "VIII-A • Computer Science", timeRoom: "11:15-12:00 • Lab 04", isFree: false },
        { period: 6, title: "VIII-A • English", timeRoom: "12:05-12:50 • Room 08", isFree: false },
      ],
    },
    Tue: {
      dayName: "Tuesday",
      periods: [
        { period: 1, title: "VIII-A • Physics", timeRoom: "08:00-08:45 • Room 15", isFree: false },
        { period: 2, title: "VIII-A • Mathematics", timeRoom: "08:50-09:35 • Room 12", isFree: false },
        { period: 3, title: "VIII-A • English", timeRoom: "09:40-10:25 • Room 08", isFree: false },
        { period: 4, title: "Sports / PE", timeRoom: "10:30-11:15", isFree: true },
        { period: 5, title: "VIII-A • Chemistry", timeRoom: "11:15-12:00 • Lab 02", isFree: false },
        { period: 6, title: "VIII-A • Social Studies", timeRoom: "12:05-12:50 • Room 10", isFree: false },
      ],
    },
    Wed: {
      dayName: "Wednesday",
      periods: [
        { period: 1, title: "VIII-A • Mathematics", timeRoom: "08:00-08:45 • Room 12", isFree: false },
        { period: 2, title: "VIII-A • Chemistry", timeRoom: "08:50-09:35 • Lab 02", isFree: false },
        { period: 3, title: "VIII-A • Computer Science", timeRoom: "09:40-10:25 • Lab 04", isFree: false },
        { period: 4, title: "VIII-A • Physics", timeRoom: "10:30-11:15 • Room 15", isFree: false },
        { period: 5, title: "Study Break", timeRoom: "11:15-12:00", isFree: true },
        { period: 6, title: "VIII-A • English", timeRoom: "12:05-12:50 • Room 08", isFree: false },
      ],
    },
    Thu: {
      dayName: "Thursday",
      periods: [
        { period: 1, title: "VIII-A • English", timeRoom: "08:00-08:45 • Room 08", isFree: false },
        { period: 2, title: "VIII-A • Physics", timeRoom: "08:50-09:35 • Room 15", isFree: false },
        { period: 3, title: "Self Study", timeRoom: "09:40-10:25", isFree: true },
        { period: 4, title: "VIII-A • Mathematics", timeRoom: "10:30-11:15 • Room 12", isFree: false },
        { period: 5, title: "VIII-A • Chemistry", timeRoom: "11:15-12:00 • Lab 02", isFree: false },
        { period: 6, title: "VIII-A • Computer Science", timeRoom: "12:05-12:50 • Lab 04", isFree: false },
      ],
    },
    Fri: {
      dayName: "Friday",
      periods: [
        { period: 1, title: "VIII-A • Mathematics", timeRoom: "08:00-08:45 • Room 12", isFree: false },
        { period: 2, title: "VIII-A • Physics Lab", timeRoom: "08:50-09:35 • Lab 01", isFree: false },
        { period: 3, title: "VIII-A • Social Studies", timeRoom: "09:40-10:25 • Room 10", isFree: false },
        { period: 4, title: "VIII-A • Computer Science", timeRoom: "10:30-11:15 • Lab 04", isFree: false },
        { period: 5, title: "VIII-A • Chemistry", timeRoom: "11:15-12:00 • Lab 02", isFree: false },
        { period: 6, title: "Free Period", timeRoom: "12:05-12:50", isFree: true },
      ],
    },
    Sat: {
      dayName: "Saturday",
      periods: [
        { period: 1, title: "VIII-A • Mathematics Mock Test", timeRoom: "08:00-08:45 • Exam Hall", isFree: false },
        { period: 2, title: "VIII-A • Physics Doubts", timeRoom: "08:50-09:35 • Room 15", isFree: false },
        { period: 3, title: "VIII-A • Chemistry Doubts", timeRoom: "09:40-10:25 • Room 12", isFree: false },
        { period: 4, title: "Co-Curricular Activities", timeRoom: "10:30-11:15", isFree: true },
        { period: 5, title: "VIII-A • Computer Lab", timeRoom: "11:15-12:00 • Lab 04", isFree: false },
        { period: 6, title: "Free Period", timeRoom: "12:05-12:50", isFree: true },
      ],
    },
  };

  // Quick actions styled exactly like reference screenshot
  const quickActions = [
    {
      id: "attendance",
      label: "View Attendance",
      icon: ClipboardCheck,
      bgColor: "bg-[#EFF6FF]", // Light Blue
      borderColor: "border-[#DBEAFE]",
      textColor: "text-[#1D4ED8]",
      iconColor: "text-[#2563EB]",
      action: () => setActiveNav("attendance"),
    },
    {
      id: "homework",
      label: "Submit Homework",
      icon: Upload,
      bgColor: "bg-[#FFFBEB]", // Light Amber
      borderColor: "border-[#FEF3C7]",
      textColor: "text-[#D97706]",
      iconColor: "text-[#F59E0B]",
      action: () => setActiveNav("homework"),
    },
    {
      id: "aitutor",
      label: "Ask AI Doubt",
      icon: Sparkles,
      bgColor: "bg-[#F3E8FF]", // Light Purple
      borderColor: "border-[#E9D5FF]",
      textColor: "text-[#7E22CE]",
      iconColor: "text-[#9333EA]",
      action: () => setActiveNav("aitutor"),
    },
    {
      id: "profile",
      label: "Edit Profile",
      icon: Pencil,
      bgColor: "bg-[#F8FAFC]", // Light Slate
      borderColor: "border-[#E2E8F0]",
      textColor: "text-[#334155]",
      iconColor: "text-[#475569]",
      action: () => setActiveNav("profile"),
    },
  ];

  // Navigation Sidebar Groups
  const navGroups = [
    {
      title: "MAIN",
      items: [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        { id: "timetable", label: "Timetable", icon: Calendar },
      ],
    },
    {
      title: "LEARNING",
      items: [
        { id: "attendance", label: "Attendance", icon: ClipboardCheck },
        { id: "homework", label: "Homework", icon: BookOpen },
        { id: "submissions", label: "Submissions", icon: CheckCircle },
        { id: "aitutor", label: "AI Science Tutor", icon: Sparkles },
      ],
    },
    {
      title: "ACCOUNT",
      items: [{ id: "profile", label: "My Profile", icon: User }],
    },
  ];

  const getHeaderInfo = () => {
    if (activeNav === "timetable") {
      return { title: "Timetable", subtitle: "Your weekly class schedule" };
    }
    if (activeNav === "attendance") {
      return { title: "Attendance", subtitle: "Subject-wise attendance breakdown & daily log" };
    }
    if (activeNav === "homework") {
      return { title: "Homework", subtitle: "Upload & track your assignment submissions" };
    }
    if (activeNav === "submissions") {
      return { title: "Submissions", subtitle: "Review your submitted homework & status" };
    }
    if (activeNav === "aitutor") {
      return { title: "AI Science Tutor", subtitle: "Instant doubt clearing & concept solver" };
    }
    if (activeNav === "profile") {
      return { title: "My Profile", subtitle: "Manage your personal details & credentials" };
    }
    return {
      title: "Dashboard",
      subtitle: `Welcome back, ${studentInfo.name.split(" ")[0]}`,
    };
  };

  const currentHeader = getHeaderInfo();

  // Homework submit handler
  const handleHomeworkSubmit = (hwId) => {
    const file = selectedFileForHw[hwId] || "assignment_submission.pdf";
    setHomeworkList((prev) =>
      prev.map((item) =>
        item.id === hwId
          ? {
              ...item,
              status: "Submitted",
              fileName: file,
              submittedAt: new Date().toLocaleString("en-IN", {
                dateStyle: "medium",
                timeStyle: "short",
              }),
            }
          : item
      )
    );
    alert("Assignment submitted successfully!");
  };

  // Ask AI Tutor Handler
  const handleAskAI = (e) => {
    e.preventDefault();
    if (!aiQuestion.trim()) return;
    setAiLoading(true);
    setTimeout(() => {
      setAiAnswer(
        `AI Tutor Explanation: Great question on "${aiQuestion}"! In Linear Equations, isolate x by balancing operations on both sides. Check Chapter 2, Page 45 for step-by-step solutions.`
      );
      setAiLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col md:flex-row font-sans">
      {/* Mobile Top Header Toggle */}
      <div className="md:hidden bg-[#0F172A] text-white p-4 flex items-center justify-between z-30">
        <div className="flex items-center gap-2.5">
          <div className="bg-[#0077C8] p-2 rounded-xl text-white">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-sm leading-tight text-white">TeachFlow</h2>
            <p className="text-[10px] text-slate-400">Student Portal</p>
          </div>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Navigation - Exact Dark Styling */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-[#0F172A] text-slate-300 flex flex-col justify-between z-40 transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-5 flex-1 overflow-y-auto custom-scrollbar">
          {/* Logo Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#0077C8] p-2.5 rounded-xl text-white flex-shrink-0 shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-bold text-base text-white tracking-tight leading-tight">
                TeachFlow
              </h2>
              <p className="text-xs text-slate-400 font-medium">Student Portal</p>
            </div>
          </div>

          {/* Navigation Menu Groups */}
          <nav className="space-y-6">
            {navGroups.map((group, gIdx) => (
              <div key={gIdx}>
                <p className="text-[11px] font-bold text-slate-500 tracking-wider uppercase mb-2 px-3">
                  {group.title}
                </p>
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeNav === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveNav(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                          isActive
                            ? "bg-[#0077C8] text-white shadow-md shadow-blue-500/20"
                            : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-800/80 space-y-4">
          <Link
            to="/"
            className="flex items-center gap-2 px-3 text-xs text-slate-400 hover:text-white transition font-medium"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400" />
            <span>Back to School Website</span>
          </Link>

          <button
            onClick={() => setActiveNav("profile")}
            className="w-full flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-800 transition text-left cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-105 transition-transform">
              {studentInfo.name.split(" ").map((n) => n[0]).join("").slice(0, 2) || "AM"}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-white text-xs truncate leading-tight">
                  {studentInfo.name}
                </p>
                <Pencil className="w-3 h-3 text-slate-400 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-[10px] text-slate-400 truncate mt-0.5">{studentInfo.classGroup}</p>
            </div>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
        {/* Top Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              {currentHeader.title}
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {currentHeader.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Academic Year 2025-26
            </div>

            <button className="relative p-2.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-sm transition">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* View 1: Main Dashboard View */}
        {activeNav === "dashboard" && (
          <div>
            {/* Hero Welcome Banner - Exact Matching Royal Blue */}
            <div className="bg-[#0066E0] rounded-2xl p-6 sm:p-7 text-white shadow-lg shadow-blue-500/10 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div>
                <p className="text-blue-100 text-xs font-medium mb-1">Good morning</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {studentInfo.name}
                </h2>
                <p className="text-blue-100 text-xs sm:text-sm font-medium mt-1">
                  {studentInfo.classGroup} • {studentInfo.stream}
                </p>
              </div>

              <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/20 min-w-[210px] w-full sm:w-auto flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-blue-100 text-[11px] font-semibold uppercase tracking-wider mb-0.5">
                    Joining Date
                  </p>
                  <p className="text-sm font-bold text-white">{studentInfo.joiningDate}</p>
                </div>
              </div>
            </div>

            {/* Metrics Grid (4 Stat Cards - Student ID, Class, Roll Number, Academic Session) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Metric 1: Student ID */}
              <button
                onClick={() => setActiveNav("profile")}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition text-left w-full cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition">
                  <User className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-slate-800 tracking-tight">
                  {studentInfo.studentId}
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1 flex items-center justify-between">
                  <span>Student ID</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </button>

              {/* Metric 2: Student Class */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-3">
                  <UserCheck className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-slate-800 tracking-tight">
                  {studentInfo.classGroup}
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1">Student Class</p>
              </div>

              {/* Metric 3: Roll Number */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-3">
                  <Trophy className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-slate-800 tracking-tight">
                  Roll {studentInfo.roll}
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1">Roll Number</p>
              </div>

              {/* Metric 4: Academic Session */}
              <button
                onClick={() => setActiveNav("homework")}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition text-left w-full cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center mb-3 group-hover:bg-purple-100 transition">
                  <BookOpen className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-slate-800 tracking-tight">
                  {studentInfo.academicSession}
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1 flex items-center justify-between">
                  <span>Academic Session</span>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </button>
            </div>

            {/* Main Column Grid: Schedule/Chart & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Today's Schedule Card */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <h3 className="text-base font-bold text-slate-800">Today's Schedule</h3>
                  </div>
                  <button
                    onClick={() => setActiveNav("timetable")}
                    className="text-blue-600 hover:text-blue-700 font-semibold text-xs flex items-center gap-1 transition"
                  >
                    <span>Full Timetable</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="divide-y divide-slate-100">
                  {todaySchedule.map((item, idx) => (
                    <div
                      key={idx}
                      className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4 hover:bg-slate-50/50 px-2 rounded-xl transition"
                    >
                      <div className="flex items-center gap-6 min-w-0">
                        <div className="text-center min-w-[50px]">
                          <p className="text-xs font-bold text-slate-800">{item.startTime}</p>
                          <p className="text-[10px] text-slate-400 font-medium">{item.endTime}</p>
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-800 truncate">
                            {item.className}
                          </p>
                          <p className="text-[11px] text-slate-500 truncate mt-0.5">
                            {item.topic}
                          </p>
                        </div>
                      </div>

                      <div>
                        {item.isNext ? (
                          <span className="px-3.5 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-bold inline-block">
                            Next
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold inline-block">
                            Upcoming
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions Card - Exact Colored Button Styling */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="text-base font-bold text-slate-800 mb-5">Quick Actions</h3>

                <div className="space-y-3">
                  {quickActions.map((action) => {
                    const Icon = action.icon;
                    return (
                      <button
                        key={action.id}
                        onClick={action.action}
                        className={`w-full flex items-center gap-3.5 p-3.5 rounded-xl border transition-all duration-200 hover:shadow-sm ${action.bgColor} ${action.borderColor}`}
                      >
                        <Icon className={`w-5 h-5 ${action.iconColor} flex-shrink-0`} />
                        <span className={`text-xs font-semibold ${action.textColor}`}>
                          {action.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Performance Analytics Chart Section */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mt-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                    <BarChart2 className="w-5 h-5 text-blue-500" />
                    <span>Subject Marks & Performance Chart</span>
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Session {studentInfo.academicSession} • Monthly Assessment Analytics
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className="flex items-center gap-1.5 text-blue-600">
                    <span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span> Score %
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-600">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span> Attendance %
                  </span>
                </div>
              </div>

              {/* Bar Chart Visualization */}
              <div className="space-y-4">
                {[
                  { subject: "Mathematics", score: 94, attendance: 98, color: "bg-blue-600" },
                  { subject: "Physics", score: 88, attendance: 96, color: "bg-purple-600" },
                  { subject: "Chemistry", score: 85, attendance: 95, color: "bg-amber-500" },
                  { subject: "English", score: 96, attendance: 99, color: "bg-emerald-600" },
                  { subject: "Computer Science", score: 98, attendance: 100, color: "bg-indigo-600" },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                      <span>{item.subject}</span>
                      <span className="text-slate-600">
                        Score: <strong className="text-blue-600">{item.score}%</strong> • Attendance:{" "}
                        <strong className="text-emerald-600">{item.attendance}%</strong>
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden flex p-0.5">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${item.color}`}
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* View 2: Timetable View */}
        {activeNav === "timetable" && (
          <div>
            {/* Day Switcher Pills */}
            <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-1">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayKey) => (
                <button
                  key={dayKey}
                  onClick={() => setSelectedTimetableDay(dayKey)}
                  className={`px-5 py-2.5 rounded-2xl text-xs font-semibold transition ${
                    selectedTimetableDay === dayKey
                      ? "bg-[#0077C8] text-white shadow-sm font-bold"
                      : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200/60"
                  }`}
                >
                  {dayKey}
                </button>
              ))}
            </div>

            {/* Timetable Main Container */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100/80 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-6">
                {weeklyTimetableData[selectedTimetableDay]?.dayName || "Monday"}
              </h3>

              <div className="divide-y divide-slate-100">
                {weeklyTimetableData[selectedTimetableDay]?.periods.map((p) => (
                  <div
                    key={p.period}
                    className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] text-[#0077C8] font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {p.period}
                      </div>

                      <div className="min-w-0">
                        <p className={`text-sm font-bold truncate ${p.isFree ? "text-slate-800" : "text-slate-900"}`}>
                          {p.title}
                        </p>
                        <p className="text-xs text-slate-400 font-medium mt-0.5">
                          {p.timeRoom}
                        </p>
                      </div>
                    </div>

                    {!p.isFree && (
                      <span className="px-3.5 py-1 rounded-md bg-[#EFF6FF] text-[#0077C8] font-semibold text-xs inline-block">
                        Attending
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* View 3: Attendance View (Subject-Wise & Daily Log) */}
        {activeNav === "attendance" && (
          <div className="space-y-6">
            {/* Top Stat Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
                <p className="text-2xl sm:text-3xl font-bold text-emerald-600 tracking-tight">96.4%</p>
                <p className="text-xs font-medium text-slate-500 mt-1">Overall Attendance</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
                <p className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">250</p>
                <p className="text-xs font-medium text-slate-500 mt-1">Total Classes Held</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
                <p className="text-2xl sm:text-3xl font-bold text-blue-600 tracking-tight">241</p>
                <p className="text-xs font-medium text-slate-500 mt-1">Classes Attended</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
                <p className="text-2xl sm:text-3xl font-bold text-rose-500 tracking-tight">9</p>
                <p className="text-xs font-medium text-slate-500 mt-1">Absences / Leaves</p>
              </div>
            </div>

            {/* Subject-Wise Attendance Breakdown */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100/80 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <ClipboardCheck className="w-5 h-5 text-blue-600" />
                    <span>Subject-wise Attendance Breakdown</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Requirement: Minimum 75% attendance per subject for exam eligibility
                  </p>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold border border-emerald-100">
                  Exam Eligible
                </span>
              </div>

              <div className="space-y-5">
                {subjectAttendanceList.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-slate-300 transition"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-3">
                          <h4 className="text-sm font-bold text-slate-900">{item.subject}</h4>
                          <span
                            className={`px-3 py-0.5 rounded-full text-xs font-semibold ${
                              item.rate >= 95
                                ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                                : "bg-blue-50 text-blue-600 border border-blue-100"
                            }`}
                          >
                            {item.status} ({item.rate}%)
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 font-medium mt-1">
                          Teacher: {item.teacher} • Classes Attended: {item.attended}/{item.total}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-lg font-bold text-slate-900">{item.rate}%</p>
                        <p className="text-[10px] text-slate-400 font-medium">Attendance Rate</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-200/80 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          item.rate >= 95 ? "bg-emerald-500" : "bg-[#0077C8]"
                        }`}
                        style={{ width: `${item.rate}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Attendance Log */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100/80 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-6">Recent Daily Attendance Log</h3>

              <div className="divide-y divide-slate-100">
                {dailyAttendanceLog.map((log, idx) => (
                  <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {log.date} • <span className="text-slate-500 font-normal">{log.day}</span>
                      </p>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">
                        {log.checkIn !== "-" ? `Biometric Check-in: ${log.checkIn}` : "No check-in recorded"}
                      </p>
                    </div>

                    <span
                      className={`px-3.5 py-1 rounded-full font-bold text-xs ${
                        log.status === "Present"
                          ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                          : log.status === "Absent"
                          ? "bg-rose-50 text-rose-600 border border-rose-100"
                          : log.status === "Late"
                          ? "bg-amber-50 text-amber-600 border border-amber-100"
                          : "bg-slate-100 text-slate-500 border border-slate-200"
                      }`}
                    >
                      {log.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* View 4: Homework View */}
        {activeNav === "homework" && (
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <p className="text-sm font-normal text-slate-500">
                {homeworkList.filter((h) => h.status === "Pending").length} pending homework assignments
              </p>
            </div>

            <div className="space-y-4">
              {homeworkList.map((hw) => (
                <div
                  key={hw.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100/80 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-slate-900">{hw.title}</h3>
                        <span
                          className={`px-3 py-0.5 rounded-full text-xs font-semibold ${
                            hw.status === "Submitted"
                              ? "bg-emerald-50 text-emerald-600 border border-emerald-100/60"
                              : "bg-amber-50 text-amber-600 border border-amber-100/60"
                          }`}
                        >
                          {hw.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-medium mt-1">
                        {hw.subject} • Due Date: {hw.dueDate}
                      </p>
                      {hw.submittedAt && (
                        <p className="text-xs text-emerald-600 font-medium mt-1">
                          Submitted file: {hw.fileName} on {hw.submittedAt}
                        </p>
                      )}
                    </div>

                    <div className="text-right">
                      {hw.status === "Submitted" ? (
                        <span className="px-4 py-2 rounded-xl bg-emerald-50 text-emerald-600 font-bold text-xs border border-emerald-100 inline-block">
                          Completed
                        </span>
                      ) : (
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            placeholder="File name (e.g. hw2.pdf)"
                            value={selectedFileForHw[hw.id] || ""}
                            onChange={(e) =>
                              setSelectedFileForHw({
                                ...selectedFileForHw,
                                [hw.id]: e.target.value,
                              })
                            }
                            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 w-40"
                          />
                          <button
                            onClick={() => handleHomeworkSubmit(hw.id)}
                            className="px-4 py-2 bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition shadow-sm"
                          >
                            Submit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View 5: Submissions View */}
        {activeNav === "submissions" && (
          <div>
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100/80 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-6">Submitted Homework History</h3>

              <div className="divide-y divide-slate-100">
                {homeworkList
                  .filter((h) => h.status === "Submitted")
                  .map((hw) => (
                    <div key={hw.id} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{hw.title}</h4>
                        <p className="text-xs text-slate-400 font-medium mt-0.5">
                          {hw.subject} • Submitted on {hw.submittedAt}
                        </p>
                      </div>
                      <span className="px-3.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-600 font-bold text-xs border border-emerald-100">
                        {hw.fileName}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* View 6: AI Science Tutor View */}
        {activeNav === "aitutor" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100/80 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Interactive AI Science & Maths Tutor</h3>
                <p className="text-xs text-slate-500">24/7 instant doubt solver & concept breakdown</p>
              </div>
            </div>

            <form onSubmit={handleAskAI} className="space-y-4">
              <textarea
                rows={3}
                value={aiQuestion}
                onChange={(e) => setAiQuestion(e.target.value)}
                placeholder="Type your question (e.g. Explain Gauss's Law in Electrostatics)..."
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                disabled={aiLoading}
                className="px-6 py-3 bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs rounded-2xl transition flex items-center gap-2 shadow-sm"
              >
                {aiLoading ? "Solving..." : <><Send className="w-4 h-4" /> Ask AI Assistant</>}
              </button>
            </form>

            {aiAnswer && (
              <div className="mt-6 p-5 rounded-2xl bg-blue-50 border border-blue-100 text-xs sm:text-sm text-blue-900 leading-relaxed font-medium">
                {aiAnswer}
              </div>
            )}
          </div>
        )}

        {/* View 7: Student Profile View */}
        {activeNav === "profile" && (
          <div className="space-y-6">
            {/* Top Profile Banner Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div
                  className="relative group cursor-pointer"
                  onClick={() => alert("Avatar photo update feature ready!")}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 text-white font-bold text-xl sm:text-2xl flex items-center justify-center flex-shrink-0 shadow-lg border-4 border-white">
                    {studentInfo.name.split(" ").map((n) => n[0]).join("").slice(0, 2) || "AM"}
                  </div>
                  <div className="absolute bottom-0 right-0 bg-[#0077C8] text-white p-1.5 rounded-full border-2 border-white shadow-sm">
                    <Camera className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {studentInfo.name}
                    </h2>
                    <span className="px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-xs font-semibold">
                      Enrolled Student
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {studentInfo.classGroup} • ID: {studentInfo.studentId} • Roll: {studentInfo.roll}
                  </p>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    Academic Session: {studentInfo.academicSession}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsEditingProfile(!isEditingProfile)}
                className={`px-4 py-2.5 rounded-2xl font-semibold text-xs transition shadow-sm flex items-center gap-2 ${
                  isEditingProfile
                    ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                    : "bg-[#EFF6FF] hover:bg-blue-100 text-[#0077C8] border border-blue-200/60"
                }`}
              >
                {isEditingProfile ? (
                  <>
                    <X className="w-4 h-4" />
                    <span>Cancel Editing</span>
                  </>
                ) : (
                  <>
                    <Pencil className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </>
                )}
              </button>
            </div>

            {/* Profile Form Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100/80 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span>Personal & Credentials Details</span>
                  <Pencil className="w-4 h-4 text-[#0077C8]" />
                </h3>
                {isEditingProfile && (
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    Editing Mode Active
                  </span>
                )}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsEditingProfile(false);
                  alert("Student profile saved successfully!");
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
                      <span>Full Name</span>
                      <Pencil className="w-3 h-3 text-slate-400" />
                    </label>
                    <input
                      type="text"
                      required
                      disabled={!isEditingProfile}
                      value={studentInfo.name}
                      onChange={(e) => setStudentInfo({ ...studentInfo, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                        isEditingProfile
                          ? "border-blue-300 bg-white focus:outline-none focus:border-blue-500 shadow-sm"
                          : "border-slate-200/70 bg-slate-50 text-slate-700"
                      }`}
                    />
                  </div>

                  {/* Student ID */}
                  <div>
                    <label className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
                      <span>Student ID</span>
                      <Pencil className="w-3 h-3 text-slate-400" />
                    </label>
                    <input
                      type="text"
                      required
                      disabled={!isEditingProfile}
                      value={studentInfo.studentId}
                      onChange={(e) => setStudentInfo({ ...studentInfo, studentId: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                        isEditingProfile
                          ? "border-blue-300 bg-white focus:outline-none focus:border-blue-500 shadow-sm"
                          : "border-slate-200/70 bg-slate-50 text-slate-700"
                      }`}
                    />
                  </div>

                  {/* Student Class */}
                  <div>
                    <label className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
                      <span>Student Class</span>
                      <Pencil className="w-3 h-3 text-slate-400" />
                    </label>
                    <input
                      type="text"
                      required
                      disabled={!isEditingProfile}
                      value={studentInfo.classGroup}
                      onChange={(e) => setStudentInfo({ ...studentInfo, classGroup: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                        isEditingProfile
                          ? "border-blue-300 bg-white focus:outline-none focus:border-blue-500 shadow-sm"
                          : "border-slate-200/70 bg-slate-50 text-slate-700"
                      }`}
                    />
                  </div>

                  {/* Roll Number */}
                  <div>
                    <label className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
                      <span>Roll Number</span>
                      <Pencil className="w-3 h-3 text-slate-400" />
                    </label>
                    <input
                      type="text"
                      required
                      disabled={!isEditingProfile}
                      value={studentInfo.roll}
                      onChange={(e) => setStudentInfo({ ...studentInfo, roll: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                        isEditingProfile
                          ? "border-blue-300 bg-white focus:outline-none focus:border-blue-500 shadow-sm"
                          : "border-slate-200/70 bg-slate-50 text-slate-700"
                      }`}
                    />
                  </div>

                  {/* Academic Session */}
                  <div>
                    <label className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
                      <span>Academic Session</span>
                      <Pencil className="w-3 h-3 text-slate-400" />
                    </label>
                    <input
                      type="text"
                      required
                      disabled={!isEditingProfile}
                      value={studentInfo.academicSession}
                      onChange={(e) => setStudentInfo({ ...studentInfo, academicSession: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                        isEditingProfile
                          ? "border-blue-300 bg-white focus:outline-none focus:border-blue-500 shadow-sm"
                          : "border-slate-200/70 bg-slate-50 text-slate-700"
                      }`}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
                      <span>Email Address</span>
                      <Pencil className="w-3 h-3 text-slate-400" />
                    </label>
                    <input
                      type="email"
                      required
                      disabled={!isEditingProfile}
                      value={studentInfo.email}
                      onChange={(e) => setStudentInfo({ ...studentInfo, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                        isEditingProfile
                          ? "border-blue-300 bg-white focus:outline-none focus:border-blue-500 shadow-sm"
                          : "border-slate-200/70 bg-slate-50 text-slate-700"
                      }`}
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
                    <span>Residential Address</span>
                    <Pencil className="w-3 h-3 text-slate-400" />
                  </label>
                  <textarea
                    rows={3}
                    required
                    disabled={!isEditingProfile}
                    value={studentInfo.address}
                    onChange={(e) => setStudentInfo({ ...studentInfo, address: e.target.value })}
                    className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                      isEditingProfile
                        ? "border-blue-300 bg-white focus:outline-none focus:border-blue-500 shadow-sm"
                        : "border-slate-200/70 bg-slate-50 text-slate-700"
                    }`}
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  {!isEditingProfile ? (
                    <button
                      type="button"
                      onClick={() => setIsEditingProfile(true)}
                      className="px-6 py-3 rounded-2xl bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs transition shadow-md flex items-center gap-2"
                    >
                      <Pencil className="w-4 h-4" />
                      <span>Edit Profile</span>
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => setIsEditingProfile(false)}
                        className="px-5 py-3 rounded-2xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-2xl bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs transition shadow-md flex items-center gap-2"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save Profile Changes</span>
                      </button>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
