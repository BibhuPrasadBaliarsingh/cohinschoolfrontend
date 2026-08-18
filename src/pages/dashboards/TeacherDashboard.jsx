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
} from "lucide-react";

export default function TeacherDashboard() {
  const { user } = useAuth();
  const [activeNav, setActiveNav] = useState("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTimetableDay, setSelectedTimetableDay] = useState("Mon");
  const [selectedAttendanceClass, setSelectedAttendanceClass] = useState("VIII-A");
  const [submissionClass, setSubmissionClass] = useState("VIII-A");
  const [selectedAssignmentTitle, setSelectedAssignmentTitle] = useState("Solve Linear Equations (Ex 2.3)");
  
  // Profile edit mode & state
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || "Smt. Priya Mohanty",
    email: user?.email || "priya.mohanty@cohenschool.edu.in",
    phone: "+91 98765 43210",
    designation: "TGT • Mathematics",
    qualification: "M.Sc. Mathematics, B.Ed.",
    empId: "EMP-2026-8092",
    joiningDate: "15 August 2026",
    emergencyContact: "+91 91234 56789",
    address: "Plot 42, Silicon Hills, Patia, Bhubaneswar, Odisha",
  });

  // Homework modal & state
  const [showHomeworkModal, setShowHomeworkModal] = useState(false);
  const [newHomeworkTitle, setNewHomeworkTitle] = useState("");
  const [newHomeworkClass, setNewHomeworkClass] = useState("VIII-A");
  const [newHomeworkDueDate, setNewHomeworkDueDate] = useState("2026-08-10");

  // Leave modal & state
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [leaveType, setLeaveType] = useState("Casual Leave (CL)");
  const [leaveStartDate, setLeaveStartDate] = useState("2026-08-24");
  const [leaveEndDate, setLeaveEndDate] = useState("2026-08-25");
  const [leaveReason, setLeaveReason] = useState("");

  const [leaveHistory, setLeaveHistory] = useState([
    {
      id: 1,
      type: "Casual Leave (CL)",
      dateRange: "24 Aug 2026 - 25 Aug 2026",
      daysCount: "2 Days",
      reason: "Family function in hometown",
      status: "Pending",
      appliedOn: "15 Aug 2026",
    },
    {
      id: 2,
      type: "Sick Leave (SL)",
      dateRange: "10 Jul 2026 - 10 Jul 2026",
      daysCount: "1 Day",
      reason: "Viral fever & doctor consultation",
      status: "Approved",
      appliedOn: "09 Jul 2026",
    },
    {
      id: 3,
      type: "Casual Leave (CL)",
      dateRange: "12 May 2026 - 13 May 2026",
      daysCount: "2 Days",
      reason: "Personal work at bank",
      status: "Approved",
      appliedOn: "10 May 2026",
    },
  ]);

  // Homework dataset matching screenshot
  const [homeworkList, setHomeworkList] = useState([
    {
      id: 1,
      title: "Solve Linear Equations (Ex 2.3)",
      classDue: "VIII-A • Due: 2026-08-04",
      status: "Active",
      submitted: "38/42",
      rate: "90%",
      percent: 90,
    },
    {
      id: 2,
      title: "Quadratic Formula Practice",
      classDue: "IX-B • Due: 2026-08-03",
      status: "Active",
      submitted: "35/38",
      rate: "92%",
      percent: 92,
    },
    {
      id: 3,
      title: "Trigonometric Ratios Worksheet",
      classDue: "X-A • Due: 2026-08-05",
      status: "Active",
      submitted: "12/36",
      rate: "33%",
      percent: 33,
    },
    {
      id: 4,
      title: "Fraction Word Problems",
      classDue: "VII-C • Due: 2026-07-30",
      status: "Closed",
      submitted: "42/45",
      rate: "93%",
      percent: 93,
    },
  ]);

  // Sample student attendance dataset matching screenshot
  const [attendanceStudents, setAttendanceStudents] = useState([
    { id: 1, roll: 1, name: "Aarav Mohanty", attRate: "96%", status: "P" },
    { id: 2, roll: 2, name: "Ananya Das", attRate: "92%", status: "P" },
    { id: 3, roll: 3, name: "Rohan Patra", attRate: "88%", status: "A" },
    { id: 4, roll: 4, name: "Sneha Nayak", attRate: "98%", status: "P" },
    { id: 5, roll: 5, name: "Aditya Sahoo", attRate: "90%", status: "P" },
    { id: 6, roll: 6, name: "Ishita Jena", attRate: "85%", status: "P" },
    { id: 7, roll: 7, name: "Yash Raj", attRate: "94%", status: "P" },
    { id: 8, roll: 8, name: "Pooja Rout", attRate: "87%", status: "L" },
    { id: 9, roll: 9, name: "Subham Swain", attRate: "91%", status: "P" },
    { id: 10, roll: 10, name: "Ritik Samal", attRate: "93%", status: "P" },
  ]);

  // Student submissions list to check assessment completion
  const [studentSubmissions, setStudentSubmissions] = useState([
    { id: 1, roll: 1, name: "Aarav Mohanty", status: "Submitted", time: "Aug 03, 04:15 PM", file: "linear_equations_aarav.pdf" },
    { id: 2, roll: 2, name: "Ananya Das", status: "Submitted", time: "Aug 03, 06:20 PM", file: "linear_eq_ananya.pdf" },
    { id: 3, roll: 3, name: "Rohan Patra", status: "Pending", time: "-", file: null },
    { id: 4, roll: 4, name: "Sneha Nayak", status: "Submitted", time: "Aug 03, 02:10 PM", file: "ex2_3_sneha.pdf" },
    { id: 5, roll: 5, name: "Aditya Sahoo", status: "Submitted", time: "Aug 03, 08:45 PM", file: "aditya_hw2_3.pdf" },
    { id: 6, roll: 6, name: "Ishita Jena", status: "Submitted", time: "Aug 04, 07:30 AM", file: "ishita_maths.pdf" },
    { id: 7, roll: 7, name: "Yash Raj", status: "Submitted", time: "Aug 03, 09:12 PM", file: "yash_assignment.pdf" },
    { id: 8, roll: 8, name: "Pooja Rout", status: "Pending", time: "-", file: null },
    { id: 9, roll: 9, name: "Subham Swain", status: "Submitted", time: "Aug 04, 08:05 AM", file: "subham_ex2_3.pdf" },
    { id: 10, roll: 10, name: "Ritik Samal", status: "Pending", time: "-", file: null },
  ]);

  // Today's schedule dataset matching screenshot
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
      className: "IX-B • Mathematics",
      topic: "Quadratic Equations • Room 15",
      status: "Upcoming",
      isNext: false,
    },
    {
      startTime: "09:40",
      endTime: "10:25",
      className: "VII-C • Mathematics",
      topic: "Fractions & Decimals • Room 08",
      status: "Upcoming",
      isNext: false,
    },
    {
      startTime: "11:15",
      endTime: "12:00",
      className: "X-A • Mathematics",
      topic: "Trigonometry Intro • Room 18",
      status: "Upcoming",
      isNext: false,
    },
  ];

  // Assigned classes dataset matching screenshot
  const assignedClasses = [
    {
      id: "viii-a",
      name: "VIII-A",
      subjectRoom: "Mathematics • Room 12",
      studentCount: "42 students",
      avgAttendance: "94%",
      avgScore: "78%",
      days: "Mon, Wed, Fri",
    },
    {
      id: "viii-b",
      name: "VIII-B",
      subjectRoom: "Mathematics • Room 12",
      studentCount: "40 students",
      avgAttendance: "91%",
      avgScore: "74%",
      days: "Tue, Thu, Sat",
    },
    {
      id: "ix-b",
      name: "IX-B",
      subjectRoom: "Mathematics • Room 15",
      studentCount: "38 students",
      avgAttendance: "96%",
      avgScore: "81%",
      days: "Mon, Wed, Fri",
    },
    {
      id: "vii-c",
      name: "VII-C",
      subjectRoom: "Mathematics • Room 08",
      studentCount: "45 students",
      avgAttendance: "89%",
      avgScore: "72%",
      days: "Tue, Thu",
    },
    {
      id: "x-a",
      name: "X-A",
      subjectRoom: "Mathematics • Room 18",
      studentCount: "36 students",
      avgAttendance: "97%",
      avgScore: "85%",
      days: "Mon, Wed, Fri",
    },
  ];

  // Weekly timetable data for Mon-Sat matching exact screenshots
  const weeklyTimetableData = {
    Mon: {
      dayName: "Monday",
      periods: [
        { period: 1, title: "VIII-A • Mathematics", timeRoom: "08:00-08:45 • Room 12", isFree: false },
        { period: 2, title: "IX-B • Mathematics", timeRoom: "08:50-09:35 • Room 15", isFree: false },
        { period: 3, title: "Free Period", timeRoom: "09:40-10:25", isFree: true },
        { period: 4, title: "VII-C • Mathematics", timeRoom: "10:30-11:15 • Room 08", isFree: false },
        { period: 5, title: "X-A • Mathematics", timeRoom: "11:15-12:00 • Room 18", isFree: false },
        { period: 6, title: "VIII-B • Mathematics", timeRoom: "12:05-12:50 • Room 12", isFree: false },
      ],
    },
    Tue: {
      dayName: "Tuesday",
      periods: [
        { period: 1, title: "VIII-B • Mathematics", timeRoom: "08:00-08:45 • Room 12", isFree: false },
        { period: 2, title: "VII-C • Mathematics", timeRoom: "08:50-09:35 • Room 08", isFree: false },
        { period: 3, title: "IX-B • Mathematics", timeRoom: "09:40-10:25 • Room 15", isFree: false },
        { period: 4, title: "Free Period", timeRoom: "10:30-11:15", isFree: true },
        { period: 5, title: "VIII-A • Mathematics", timeRoom: "11:15-12:00 • Room 12", isFree: false },
        { period: 6, title: "X-A • Mathematics", timeRoom: "12:05-12:50 • Room 18", isFree: false },
      ],
    },
    Wed: {
      dayName: "Wednesday",
      periods: [
        { period: 1, title: "VIII-A • Mathematics", timeRoom: "08:00-08:45 • Room 12", isFree: false },
        { period: 2, title: "IX-B • Mathematics", timeRoom: "08:50-09:35 • Room 15", isFree: false },
        { period: 3, title: "X-A • Mathematics", timeRoom: "09:40-10:25 • Room 18", isFree: false },
        { period: 4, title: "VII-C • Mathematics", timeRoom: "10:30-11:15 • Room 08", isFree: false },
        { period: 5, title: "Free Period", timeRoom: "11:15-12:00", isFree: true },
        { period: 6, title: "VIII-B • Mathematics", timeRoom: "12:05-12:50 • Room 12", isFree: false },
      ],
    },
    Thu: {
      dayName: "Thursday",
      periods: [
        { period: 1, title: "VIII-B • Mathematics", timeRoom: "08:00-08:45 • Room 12", isFree: false },
        { period: 2, title: "VII-C • Mathematics", timeRoom: "08:50-09:35 • Room 08", isFree: false },
        { period: 3, title: "Free Period", timeRoom: "09:40-10:25", isFree: true },
        { period: 4, title: "IX-B • Mathematics", timeRoom: "10:30-11:15 • Room 15", isFree: false },
        { period: 5, title: "VIII-A • Mathematics", timeRoom: "11:15-12:00 • Room 12", isFree: false },
        { period: 6, title: "X-A • Mathematics", timeRoom: "12:05-12:50 • Room 18", isFree: false },
      ],
    },
    Fri: {
      dayName: "Friday",
      periods: [
        { period: 1, title: "VIII-A • Mathematics", timeRoom: "08:00-08:45 • Room 12", isFree: false },
        { period: 2, title: "IX-B • Mathematics", timeRoom: "08:50-09:35 • Room 15", isFree: false },
        { period: 3, title: "VII-C • Mathematics", timeRoom: "09:40-10:25 • Room 08", isFree: false },
        { period: 4, title: "X-A • Mathematics", timeRoom: "10:30-11:15 • Room 18", isFree: false },
        { period: 5, title: "VIII-B • Mathematics", timeRoom: "11:15-12:00 • Room 12", isFree: false },
        { period: 6, title: "Free Period", timeRoom: "12:05-12:50", isFree: true },
      ],
    },
    Sat: {
      dayName: "Saturday",
      periods: [
        { period: 1, title: "VIII-B • Mathematics", timeRoom: "08:00-08:45 • Room 12", isFree: false },
        { period: 2, title: "IX-B • Mathematics", timeRoom: "08:50-09:35 • Room 15", isFree: false },
        { period: 3, title: "X-A • Mathematics", timeRoom: "09:40-10:25 • Room 18", isFree: false },
        { period: 4, title: "VII-C • Mathematics", timeRoom: "10:30-11:15 • Room 08", isFree: false },
        { period: 5, title: "VIII-A • Mathematics", timeRoom: "11:15-12:00 • Room 12", isFree: false },
        { period: 6, title: "Free Period", timeRoom: "12:05-12:50", isFree: true },
      ],
    },
  };

  // Quick actions matching updated navigation
  const quickActions = [
    {
      id: "attendance",
      label: "Mark Attendance",
      icon: ClipboardCheck,
      bgColor: "bg-[#EFF6FF]", // Light Blue
      borderColor: "border-[#DBEAFE]",
      textColor: "text-[#1D4ED8]",
      iconColor: "text-[#2563EB]",
      action: () => setActiveNav("attendance"),
    },
    {
      id: "homework",
      label: "Upload Homework",
      icon: Upload,
      bgColor: "bg-[#FFFBEB]", // Light Amber/Orange
      borderColor: "border-[#FEF3C7]",
      textColor: "text-[#D97706]",
      iconColor: "text-[#F59E0B]",
      action: () => setActiveNav("homework"),
    },
    {
      id: "submissions",
      label: "Check Submissions",
      icon: CheckCircle,
      bgColor: "bg-[#F3E8FF]", // Light Purple
      borderColor: "border-[#E9D5FF]",
      textColor: "text-[#7E22CE]",
      iconColor: "text-[#9333EA]",
      action: () => setActiveNav("submissions"),
    },
    {
      id: "leave",
      label: "Apply Leave",
      icon: CalendarOff,
      bgColor: "bg-[#F8FAFC]", // Light Slate/Grey
      borderColor: "border-[#E2E8F0]",
      textColor: "text-[#334155]",
      iconColor: "text-[#475569]",
      action: () => {
        setActiveNav("leave");
        setShowLeaveModal(true);
      },
    },
  ];

  // Navigation Menu Items with Profile & Leave Application
  const navGroups = [
    {
      title: "MAIN",
      items: [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        { id: "classes", label: "My Classes", icon: Users },
        { id: "timetable", label: "Timetable", icon: Calendar },
      ],
    },
    {
      title: "TEACHING",
      items: [
        { id: "attendance", label: "Attendance", icon: ClipboardCheck },
        { id: "homework", label: "Homework", icon: BookOpen },
        { id: "submissions", label: "Submissions", icon: CheckCircle },
      ],
    },
    {
      title: "ACCOUNT",
      items: [
        { id: "profile", label: "My Profile", icon: User },
        { id: "leave", label: "Leave Application", icon: CalendarOff },
      ],
    },
  ];

  const getHeaderInfo = () => {
    if (activeNav === "classes") {
      return { title: "My Classes", subtitle: "Class & section management" };
    }
    if (activeNav === "timetable") {
      return { title: "Timetable", subtitle: "Your weekly teaching schedule" };
    }
    if (activeNav === "attendance") {
      return { title: "Attendance", subtitle: "Mark & track student attendance" };
    }
    if (activeNav === "homework") {
      return { title: "Homework", subtitle: "Upload & track assignments" };
    }
    if (activeNav === "submissions") {
      return { title: "Submissions", subtitle: "Review & verify student assessment submissions" };
    }
    if (activeNav === "leave") {
      return { title: "Leave Application", subtitle: "Apply for leave & track approval status" };
    }
    if (activeNav === "profile") {
      return { title: "My Profile", subtitle: "Manage your personal details & contact preferences" };
    }
    return {
      title: "Dashboard",
      subtitle: `Welcome back, ${profileData.name.split(" ")[1] || "Priya"}`,
    };
  };

  const currentHeader = getHeaderInfo();

  // Toggle student attendance status (P, A, or L)
  const handleSetStatus = (studentId, status) => {
    setAttendanceStudents((prev) =>
      prev.map((s) => (s.id === studentId ? { ...s, status } : s))
    );
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
            <p className="text-[10px] text-slate-400">Teacher Portal</p>
          </div>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
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
              <p className="text-xs text-slate-400 font-medium">Teacher Portal</p>
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
              {profileData.name.split(" ").map(n => n[0]).join("").slice(0, 2) || "PM"}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-white text-xs truncate leading-tight">
                  {profileData.name}
                </p>
                <Pencil className="w-3 h-3 text-slate-400 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-[10px] text-slate-400 truncate mt-0.5">{profileData.designation}</p>
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

        {/* View 1: My Classes View */}
        {activeNav === "classes" && (
          <div>
            <p className="text-sm font-normal text-slate-500 mb-6">
              5 classes assigned to you
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {assignedClasses.map((cls) => (
                <div
                  key={cls.id}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                          {cls.name}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          {cls.subjectRoom}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold border border-blue-100/60">
                        {cls.studentCount}
                      </span>
                    </div>

                    {/* Stats box */}
                    <div className="grid grid-cols-2 gap-3 bg-[#F8FAFC] rounded-xl p-3.5 mb-4">
                      <div className="text-center border-r border-slate-200/60">
                        <p className="text-base font-bold text-slate-900">
                          {cls.avgAttendance}
                        </p>
                        <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                          Avg Attendance
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-base font-bold text-slate-900">{cls.avgScore}</p>
                        <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                          Avg Score
                        </p>
                      </div>
                    </div>

                    {/* Schedule */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{cls.days}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setSelectedAttendanceClass(cls.name);
                        setActiveNav("attendance");
                      }}
                      className="flex-1 py-2.5 rounded-xl bg-[#EFF6FF] text-[#0077C8] hover:bg-blue-100 font-semibold text-xs transition text-center"
                    >
                      Attendance
                    </button>
                    <button
                      onClick={() => alert(`Viewing insights for ${cls.name}...`)}
                      className="flex-1 py-2.5 rounded-xl bg-[#F8FAFC] text-slate-600 hover:bg-slate-100 font-semibold text-xs transition text-center border border-slate-200/50"
                    >
                      Insights
                    </button>
                  </div>
                </div>
              ))}
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
                      {/* Period Number Box */}
                      <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] text-[#0077C8] font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {p.period}
                      </div>

                      {/* Period Text Information */}
                      <div className="min-w-0">
                        <p className={`text-sm font-bold truncate ${p.isFree ? "text-slate-800" : "text-slate-900"}`}>
                          {p.title}
                        </p>
                        <p className="text-xs text-slate-400 font-medium mt-0.5">
                          {p.timeRoom}
                        </p>
                      </div>
                    </div>

                    {/* Right Teaching Badge */}
                    {!p.isFree && (
                      <span className="px-3.5 py-1 rounded-md bg-[#EFF6FF] text-[#0077C8] font-semibold text-xs inline-block">
                        Teaching
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* View 3: Attendance View */}
        {activeNav === "attendance" && (
          <div>
            {/* Top Bar: Class Switcher Pills & Right Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                {["VIII-A", "VIII-B", "IX-B", "VII-C", "X-A"].map((clsKey) => (
                  <button
                    key={clsKey}
                    onClick={() => setSelectedAttendanceClass(clsKey)}
                    className={`px-5 py-2.5 rounded-2xl text-xs font-semibold transition ${
                      selectedAttendanceClass === clsKey
                        ? "bg-[#0077C8] text-white shadow-sm font-bold"
                        : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200/60"
                    }`}
                  >
                    {clsKey}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-2xl bg-emerald-50 text-emerald-600 text-xs font-semibold border border-emerald-100/60">
                  Biometric Sync Ready
                </span>
                <button
                  onClick={() => alert(`Attendance saved successfully for ${selectedAttendanceClass}!`)}
                  className="px-6 py-2 rounded-2xl bg-[#0077C8] text-white font-bold text-xs hover:bg-blue-700 transition shadow-sm"
                >
                  Save
                </button>
              </div>
            </div>

            {/* Summary Stat Cards (3 Cards Row) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
                <p className="text-2xl sm:text-3xl font-bold text-emerald-600 tracking-tight">
                  {attendanceStudents.filter((s) => s.status === "P").length}
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1">Present</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
                <p className="text-2xl sm:text-3xl font-bold text-rose-500 tracking-tight">
                  {attendanceStudents.filter((s) => s.status === "A").length}
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1">Absent</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
                <p className="text-2xl sm:text-3xl font-bold text-amber-500 tracking-tight">
                  {attendanceStudents.filter((s) => s.status === "L").length}
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1">Late</p>
              </div>
            </div>

            {/* Attendance Roster Main Container */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100/80 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-bold text-slate-900">
                  {selectedAttendanceClass} • Today
                </h3>
                <span className="text-xs font-medium text-slate-400">
                  Mon, 17 Aug
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                {attendanceStudents.map((st) => (
                  <div
                    key={st.id}
                    className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4"
                  >
                    {/* Left Student Info */}
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-9 h-9 rounded-full bg-[#0077C8] text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm">
                        {st.roll}
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-bold text-slate-900 truncate">
                          {st.name}
                        </p>
                        <p className="text-xs text-slate-400 font-medium mt-0.5">
                          Roll {st.roll} • Att {st.attRate}
                        </p>
                      </div>
                    </div>

                    {/* Right Attendance Buttons: P, A, L */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleSetStatus(st.id, "P")}
                        className={`w-8 h-8 rounded-full font-bold text-xs flex items-center justify-center transition ${
                          st.status === "P"
                            ? "border-2 border-emerald-500 bg-emerald-50 text-emerald-600 shadow-sm"
                            : "text-slate-400 hover:text-slate-600"
                        }`}
                      >
                        P
                      </button>
                      <button
                        onClick={() => handleSetStatus(st.id, "A")}
                        className={`w-8 h-8 rounded-full font-bold text-xs flex items-center justify-center transition ${
                          st.status === "A"
                            ? "border-2 border-rose-500 bg-rose-50 text-rose-600 shadow-sm"
                            : "text-slate-400 hover:text-slate-600"
                        }`}
                      >
                        A
                      </button>
                      <button
                        onClick={() => handleSetStatus(st.id, "L")}
                        className={`w-8 h-8 rounded-full font-bold text-xs flex items-center justify-center transition ${
                          st.status === "L"
                            ? "border-2 border-amber-500 bg-amber-50 text-amber-600 shadow-sm"
                            : "text-slate-400 hover:text-slate-600"
                        }`}
                      >
                        L
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* View 4: Homework View */}
        {activeNav === "homework" && (
          <div>
            {/* Top Bar: Active assignments count & + Upload Homework button */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <p className="text-sm font-normal text-slate-500">
                {homeworkList.filter((h) => h.status === "Active").length} active assignments
              </p>

              <button
                onClick={() => setShowHomeworkModal(true)}
                className="px-5 py-2.5 rounded-2xl bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs transition shadow-sm flex items-center gap-1.5"
              >
                <span>+ Upload Homework</span>
              </button>
            </div>

            {/* List of Homework Cards */}
            <div className="space-y-4">
              {homeworkList.map((hw) => (
                <div
                  key={hw.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100/80 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-slate-900">
                          {hw.title}
                        </h3>
                        <span
                          className={`px-3 py-0.5 rounded-full text-xs font-semibold ${
                            hw.status === "Active"
                              ? "bg-blue-50 text-blue-600 border border-blue-100/60"
                              : "bg-slate-100 text-slate-500 border border-slate-200/60"
                          }`}
                        >
                          {hw.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-medium mt-1">
                        {hw.classDue}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-base font-bold text-slate-900">
                        {hw.submitted}
                      </p>
                      <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                        submitted
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden mb-2">
                    <div
                      className="bg-[#0077C8] h-full rounded-full transition-all duration-500"
                      style={{ width: `${hw.percent}%` }}
                    ></div>
                  </div>

                  {/* Submission Rate */}
                  <p className="text-xs text-slate-400 font-medium">
                    {hw.rate} submission rate
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View 5: Submissions View */}
        {activeNav === "submissions" && (
          <div>
            {/* Top Bar: Class Switcher & Assignment Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                {["VIII-A", "VIII-B", "IX-B", "VII-C", "X-A"].map((clsKey) => (
                  <button
                    key={clsKey}
                    onClick={() => setSubmissionClass(clsKey)}
                    className={`px-5 py-2.5 rounded-2xl text-xs font-semibold transition ${
                      submissionClass === clsKey
                        ? "bg-[#0077C8] text-white shadow-sm font-bold"
                        : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200/60"
                    }`}
                  >
                    {clsKey}
                  </button>
                ))}
              </div>

              <div>
                <select
                  value={selectedAssignmentTitle}
                  onChange={(e) => setSelectedAssignmentTitle(e.target.value)}
                  className="px-4 py-2.5 bg-white border border-slate-200/80 rounded-2xl text-xs font-semibold text-slate-700 shadow-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="Solve Linear Equations (Ex 2.3)">Solve Linear Equations (Ex 2.3)</option>
                  <option value="Quadratic Formula Practice">Quadratic Formula Practice</option>
                  <option value="Trigonometric Ratios Worksheet">Trigonometric Ratios Worksheet</option>
                  <option value="Fraction Word Problems">Fraction Word Problems</option>
                </select>
              </div>
            </div>

            {/* Summary Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
                <p className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
                  {studentSubmissions.length}
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1">Total Students</p>
              </div>

              <div className="bg-[#FFFFFF] rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
                <p className="text-2xl sm:text-3xl font-bold text-emerald-600 tracking-tight">
                  {studentSubmissions.filter((s) => s.status === "Submitted").length}
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1">Submitted</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
                <p className="text-2xl sm:text-3xl font-bold text-rose-500 tracking-tight">
                  {studentSubmissions.filter((s) => s.status === "Pending").length}
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1">Pending</p>
              </div>
            </div>

            {/* Student Submissions List Container */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100/80 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-bold text-slate-900">
                  {submissionClass} • {selectedAssignmentTitle}
                </h3>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
                  Assessment Verification
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                {studentSubmissions.map((sub) => (
                  <div
                    key={sub.id}
                    className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-9 h-9 rounded-full bg-[#0077C8] text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm">
                        {sub.roll}
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-bold text-slate-900 truncate">
                          {sub.name}
                        </p>
                        <p className="text-xs text-slate-400 font-medium mt-0.5">
                          Roll {sub.roll} {sub.time !== "-" ? `• Submitted: ${sub.time}` : "• Not submitted yet"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {sub.status === "Submitted" ? (
                        <>
                          <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-600 font-semibold text-xs border border-emerald-100/60 inline-block">
                            Submitted
                          </span>
                          <button
                            onClick={() => alert(`Opening submission file ${sub.file} for ${sub.name}...`)}
                            className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
                          >
                            View File
                          </button>
                        </>
                      ) : (
                        <>
                          <span className="px-3.5 py-1 rounded-full bg-rose-50 text-rose-600 font-semibold text-xs border border-rose-100/60 inline-block">
                            Pending
                          </span>
                          <button
                            onClick={() => alert(`Reminder sent to ${sub.name} for ${selectedAssignmentTitle}!`)}
                            className="px-3.5 py-1.5 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-700 text-xs font-semibold transition"
                          >
                            Send Reminder
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* View 6: Leave Application View */}
        {activeNav === "leave" && (
          <div>
            {/* Top Bar: Action Button */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <p className="text-sm font-normal text-slate-500">
                Annual Leave Balance: <span className="font-bold text-slate-900">8 Days Available</span>
              </p>

              <button
                onClick={() => setShowLeaveModal(true)}
                className="px-5 py-2.5 rounded-2xl bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs transition shadow-sm flex items-center gap-1.5"
              >
                <span>+ Apply for Leave</span>
              </button>
            </div>

            {/* Summary Stat Cards (4 Cards Row) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
                <p className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">12 Days</p>
                <p className="text-xs font-medium text-slate-500 mt-1">Total Quota</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
                <p className="text-2xl sm:text-3xl font-bold text-emerald-600 tracking-tight">
                  {leaveHistory.filter((l) => l.status === "Approved").length}
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1">Approved Leaves</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
                <p className="text-2xl sm:text-3xl font-bold text-amber-500 tracking-tight">
                  {leaveHistory.filter((l) => l.status === "Pending").length}
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1">Pending Requests</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
                <p className="text-2xl sm:text-3xl font-bold text-blue-600 tracking-tight">8 Days</p>
                <p className="text-xs font-medium text-slate-500 mt-1">Remaining Balance</p>
              </div>
            </div>

            {/* Leave History List */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100/80 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-6">Leave History & Applications</h3>

              <div className="divide-y divide-slate-100">
                {leaveHistory.map((leave) => (
                  <div
                    key={leave.id}
                    className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100/60 text-xs font-semibold">
                          {leave.type}
                        </span>
                        <span className="text-xs font-bold text-slate-800">
                          {leave.dateRange} ({leave.daysCount})
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1.5 font-normal">
                        Reason: {leave.reason}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 self-start sm:self-auto">
                      <div className="text-right">
                        <span
                          className={`px-3.5 py-1 rounded-full text-xs font-semibold inline-block ${
                            leave.status === "Approved"
                              ? "bg-emerald-50 text-emerald-600 border border-emerald-100/60"
                              : leave.status === "Pending"
                              ? "bg-amber-50 text-amber-600 border border-amber-100/60"
                              : "bg-rose-50 text-rose-600 border border-rose-100/60"
                          }`}
                        >
                          {leave.status}
                        </span>
                        <p className="text-[10px] text-slate-400 font-medium mt-1">
                          Applied: {leave.appliedOn}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* View 7: Teacher Profile View */}
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
                    {profileData.name.split(" ").map((n) => n[0]).join("").slice(0, 2) || "PM"}
                  </div>
                  <div className="absolute bottom-0 right-0 bg-[#0077C8] text-white p-1.5 rounded-full border-2 border-white shadow-sm">
                    <Camera className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {profileData.name}
                    </h2>
                    <span className="px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-xs font-semibold">
                      Active Staff
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {profileData.designation} • ID: {profileData.empId}
                  </p>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    Joined: {profileData.joiningDate}
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

            {/* Profile Edit / View Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100/80 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span>Personal & Employment Details</span>
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
                  alert("Profile changes saved successfully!");
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
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
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
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                        isEditingProfile
                          ? "border-blue-300 bg-white focus:outline-none focus:border-blue-500 shadow-sm"
                          : "border-slate-200/70 bg-slate-50 text-slate-700"
                      }`}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
                      <span>Phone Number</span>
                      <Pencil className="w-3 h-3 text-slate-400" />
                    </label>
                    <input
                      type="text"
                      required
                      disabled={!isEditingProfile}
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                        isEditingProfile
                          ? "border-blue-300 bg-white focus:outline-none focus:border-blue-500 shadow-sm"
                          : "border-slate-200/70 bg-slate-50 text-slate-700"
                      }`}
                    />
                  </div>

                  {/* Designation */}
                  <div>
                    <label className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
                      <span>Designation & Department</span>
                      <Pencil className="w-3 h-3 text-slate-400" />
                    </label>
                    <input
                      type="text"
                      required
                      disabled={!isEditingProfile}
                      value={profileData.designation}
                      onChange={(e) => setProfileData({ ...profileData, designation: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                        isEditingProfile
                          ? "border-blue-300 bg-white focus:outline-none focus:border-blue-500 shadow-sm"
                          : "border-slate-200/70 bg-slate-50 text-slate-700"
                      }`}
                    />
                  </div>

                  {/* Qualification */}
                  <div>
                    <label className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
                      <span>Academic Qualification</span>
                      <Pencil className="w-3 h-3 text-slate-400" />
                    </label>
                    <input
                      type="text"
                      required
                      disabled={!isEditingProfile}
                      value={profileData.qualification}
                      onChange={(e) => setProfileData({ ...profileData, qualification: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                        isEditingProfile
                          ? "border-blue-300 bg-white focus:outline-none focus:border-blue-500 shadow-sm"
                          : "border-slate-200/70 bg-slate-50 text-slate-700"
                      }`}
                    />
                  </div>

                  {/* Emergency Contact */}
                  <div>
                    <label className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
                      <span>Emergency Contact Number</span>
                      <Pencil className="w-3 h-3 text-slate-400" />
                    </label>
                    <input
                      type="text"
                      required
                      disabled={!isEditingProfile}
                      value={profileData.emergencyContact}
                      onChange={(e) => setProfileData({ ...profileData, emergencyContact: e.target.value })}
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
                    value={profileData.address}
                    onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
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

        {/* View 8: Main Dashboard View */}
        {activeNav === "dashboard" && (
          <div>
            {/* Hero Welcome Banner */}
            <div className="bg-[#0066E0] rounded-2xl p-6 sm:p-7 text-white shadow-lg shadow-blue-500/10 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div>
                <p className="text-blue-100 text-xs font-medium mb-1">Good morning</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {profileData.name}
                </h2>
                <p className="text-blue-100 text-xs sm:text-sm font-medium mt-1">
                  {profileData.designation}
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
                  <p className="text-sm font-bold text-white">{profileData.joiningDate}</p>
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Metric 1 */}
              <button
                onClick={() => setActiveNav("classes")}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition text-left w-full cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition">
                  <Users className="w-5 h-5" />
                </div>
                <p className="text-3xl font-bold text-slate-800 tracking-tight">5</p>
                <p className="text-xs font-medium text-slate-500 mt-1 flex items-center justify-between">
                  <span>My Classes</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </button>

              {/* Metric 2 */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-3">
                  <UserCheck className="w-5 h-5" />
                </div>
                <p className="text-3xl font-bold text-slate-800 tracking-tight">201</p>
                <p className="text-xs font-medium text-slate-500 mt-1">Total Students</p>
              </div>

              {/* Metric 3 */}
              <button
                onClick={() => setActiveNav("homework")}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition text-left w-full cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-3 group-hover:bg-amber-100 transition">
                  <BookOpen className="w-5 h-5" />
                </div>
                <p className="text-3xl font-bold text-slate-800 tracking-tight">3</p>
                <p className="text-xs font-medium text-slate-500 mt-1 flex items-center justify-between">
                  <span>Active Homework</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </button>

              {/* Metric 4 */}
              <button
                onClick={() => setActiveNav("submissions")}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition text-left w-full cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center mb-3 group-hover:bg-purple-100 transition">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <p className="text-3xl font-bold text-slate-800 tracking-tight">38/42</p>
                <p className="text-xs font-medium text-slate-500 mt-1 flex items-center justify-between">
                  <span>Check Submissions</span>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </button>
            </div>

            {/* Schedule & Quick Actions Grid */}
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

              {/* Quick Actions Card */}
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
          </div>
        )}

        {/* Upload Homework Modal */}
        {showHomeworkModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900">Upload Homework</h3>
                <button
                  onClick={() => setShowHomeworkModal(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!newHomeworkTitle.trim()) return;
                  const newId = homeworkList.length + 1;
                  setHomeworkList([
                    {
                      id: newId,
                      title: newHomeworkTitle,
                      classDue: `${newHomeworkClass} • Due: ${newHomeworkDueDate}`,
                      status: "Active",
                      submitted: `0/${newHomeworkClass === "VIII-A" ? "42" : "40"}`,
                      rate: "0%",
                      percent: 0,
                    },
                    ...homeworkList,
                  ]);
                  setNewHomeworkTitle("");
                  setShowHomeworkModal(false);
                  alert("Homework published successfully!");
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Assignment Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Polynomial Exercises (Ex 4.1)"
                    value={newHomeworkTitle}
                    onChange={(e) => setNewHomeworkTitle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Select Class
                    </label>
                    <select
                      value={newHomeworkClass}
                      onChange={(e) => setNewHomeworkClass(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
                    >
                      <option value="VIII-A">VIII-A</option>
                      <option value="VIII-B">VIII-B</option>
                      <option value="IX-B">IX-B</option>
                      <option value="VII-C">VII-C</option>
                      <option value="X-A">X-A</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Due Date
                    </label>
                    <input
                      type="date"
                      required
                      value={newHomeworkDueDate}
                      onChange={(e) => setNewHomeworkDueDate(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowHomeworkModal(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#0077C8] text-white font-bold text-xs hover:bg-blue-700 transition"
                  >
                    Publish
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Apply Leave Modal */}
        {showLeaveModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900">Apply for Leave</h3>
                <button
                  onClick={() => setShowLeaveModal(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!leaveReason.trim()) return;
                  const newId = leaveHistory.length + 1;
                  setLeaveHistory([
                    {
                      id: newId,
                      type: leaveType,
                      dateRange: `${leaveStartDate} - ${leaveEndDate}`,
                      daysCount: "1-2 Days",
                      reason: leaveReason,
                      status: "Pending",
                      appliedOn: "Today",
                    },
                    ...leaveHistory,
                  ]);
                  setLeaveReason("");
                  setShowLeaveModal(false);
                  alert("Leave application submitted successfully! Pending principal approval.");
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Leave Type
                  </label>
                  <select
                    value={leaveType}
                    onChange={(e) => setLeaveType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
                  >
                    <option value="Casual Leave (CL)">Casual Leave (CL)</option>
                    <option value="Sick Leave (SL)">Sick Leave (SL)</option>
                    <option value="Earned Leave (EL)">Earned Leave (EL)</option>
                    <option value="Duty Leave (DL)">Duty Leave (DL)</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Start Date
                    </label>
                    <input
                      type="date"
                      required
                      value={leaveStartDate}
                      onChange={(e) => setLeaveStartDate(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      End Date
                    </label>
                    <input
                      type="date"
                      required
                      value={leaveEndDate}
                      onChange={(e) => setLeaveEndDate(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Reason for Leave
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Enter reason for leave..."
                    value={leaveReason}
                    onChange={(e) => setLeaveReason(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="pt-3 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowLeaveModal(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#0077C8] text-[#FFFFFF] font-bold text-xs hover:bg-blue-700 transition"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
