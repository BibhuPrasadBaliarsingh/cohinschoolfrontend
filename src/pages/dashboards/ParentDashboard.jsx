import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  Heart,
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
  CreditCard,
  Bus,
  FileText,
  Award,
  ExternalLink,
  Phone,
  Mail,
  Download,
  Printer,
  Sparkles,
  Send,
  MessageSquare,
  AlertCircle,
  Utensils,
  QrCode,
  MapPin,
  CheckCircle2,
  FileCheck,
  Building2,
  Lock,
  LogOut,
} from "lucide-react";

export default function ParentDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTimetableDay, setSelectedTimetableDay] = useState("Mon");
  const [selectedWardId, setSelectedWardId] = useState("ward-1");

  // Profile edit mode & state
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || "Dr. Alok Mohanty",
    email: user?.email || "alok.mohanty@aiims.edu",
    phone: "+91 98765 12345",
    designation: "Parent Guardian • Class XI & VIII",
    occupation: "Chief Medical Officer, AIIMS Bhubaneswar",
    spouseName: "Dr. Rashmi Mohanty (Ph.D. Biotechnology)",
    emergencyContact: "+91 91234 56789",
    address: "Plot 142, Silicon Hills, Patia, Bhubaneswar, Odisha – 751024",
  });

  // Wards Dataset
  const wards = {
    "ward-1": {
      id: "ward-1",
      name: "Aarav Sharma",
      grade: "Class XI • Science (JEE Integrated)",
      section: "Section A",
      rollNo: "07",
      studentId: "CIS-2026-XI-042",
      cbseRegNo: "1530280/2026/XI-042",
      dob: "14 May 2009",
      bloodGroup: "O+",
      house: "Falcon House (Gold)",
      stream: "PCM + Computer Science",
      enrollmentType: "Day Scholar (Bus Route #4)",
      busRoute: "Route #4 (Bhubaneswar ➔ Campus)",
      attendanceToday: "Present",
      biometricTime: "07:45 AM (Gate #2)",
      attendanceRate: "94.8%",
      daysPresent: "145/153 Days",
      academicAvg: "92.4% (A1)",
      batchRank: "#3 in Batch",
      jeeRank: "Vidwan Mock #4: 2nd (268/300)",
      feeStatus: "Cleared (₹0 Due)",
      lastReceipt: "CQ-2026-9821",
      classTeacher: "Smt. Priya Mohanty (Mathematics)",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80",
    },
    "ward-2": {
      id: "ward-2",
      name: "Ananya Sharma",
      grade: "Class VIII • CBSE Regular",
      section: "Section B",
      rollNo: "12",
      studentId: "CIS-2026-VIII-118",
      cbseRegNo: "1530280/2026/VIII-118",
      dob: "22 August 2012",
      bloodGroup: "B+",
      house: "Phoenix House (Red)",
      stream: "Middle School CBSE Foundation",
      enrollmentType: "Hostel Resident (Kaveri Bhavan)",
      busRoute: "Resident Boarder (Room 304)",
      attendanceToday: "Present",
      biometricTime: "07:30 AM (Hostel Gate #1)",
      attendanceRate: "96.5%",
      daysPresent: "148/153 Days",
      academicAvg: "94.8% (A1)",
      batchRank: "#1 in Class",
      jeeRank: "Olympiad Foundation: 1st (98%)",
      feeStatus: "Cleared (₹0 Due)",
      lastReceipt: "CQ-2026-9904",
      classTeacher: "Dr. S. K. Patnaik (Science)",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    },
  };

  const currentWard = wards[selectedWardId];

  // Modals state
  const [showReportCardModal, setShowReportCardModal] = useState(false);
  const [showFeeReceiptModal, setShowFeeReceiptModal] = useState(false);
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [showPtmModal, setShowPtmModal] = useState(false);
  const [ptmSuccess, setPtmSuccess] = useState(false);
  const [showGatePassModal, setShowGatePassModal] = useState(false);
  const [gatePassSuccess, setGatePassSuccess] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [leaveSuccess, setLeaveSuccess] = useState(false);

  // Chat message state
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "school",
      senderName: "Smt. Priya Mohanty (Class Teacher)",
      time: "Yesterday, 04:30 PM",
      text: "Namaskar Dr. Mohanty, Aarav has shown outstanding progress in the Quadratic Equations unit test. He scored 96%. Keep encouraging his daily practice.",
    },
    {
      id: 2,
      sender: "parent",
      senderName: "Dr. Alok Mohanty (Parent)",
      time: "Yesterday, 06:15 PM",
      text: "Thank you ma'am for the constant mentorship. We are reviewing his DPPs regularly.",
    },
  ]);

  // Leave Form State
  const [leaveForm, setLeaveForm] = useState({
    type: "Medical Leave",
    startDate: "2026-08-28",
    endDate: "2026-08-29",
    reason: "",
  });

  // PTM Form State
  const [ptmForm, setPtmForm] = useState({
    teacher: "Smt. Priya Mohanty (Mathematics)",
    date: "2026-08-30",
    slot: "10:30 AM - 10:50 AM",
    mode: "In-Person Campus Meeting",
    notes: "",
  });

  // Gate Pass Form State
  const [gatePassForm, setGatePassForm] = useState({
    reason: "Weekend Home Visit with Family",
    departureTime: "2026-08-29 04:00 PM",
    returnTime: "2026-08-31 06:30 PM",
    escortName: "Dr. Alok Mohanty (Father)",
    escortPhone: "+91 98765 12345",
  });

  // Handle Send Chat
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: "parent",
      senderName: "Dr. Alok Mohanty (Parent)",
      time: "Just now",
      text: chatInput.trim(),
    };

    setMessages((prev) => [...prev, newMsg]);
    setChatInput("");

    // Simulated Auto-Reply from School Desk
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "school",
          senderName: "CIS ParentConnect Helpdesk",
          time: "Just now",
          text: "Thank you for contacting Cohen International School. Your query has been logged and assigned to the faculty coordinator. Expected response within 2 working hours.",
        },
      ]);
    }, 1000);
  };

  // Handle Submit PTM
  const handlePtmSubmit = (e) => {
    e.preventDefault();
    setPtmSuccess(true);
    setTimeout(() => {
      setPtmSuccess(false);
      setShowPtmModal(false);
    }, 1800);
  };

  // Handle Submit Gate Pass
  const handleGatePassSubmit = (e) => {
    e.preventDefault();
    setGatePassSuccess(true);
    setTimeout(() => {
      setGatePassSuccess(false);
      setShowGatePassModal(false);
    }, 2000);
  };

  // Handle Submit Leave
  const handleLeaveSubmit = (e) => {
    e.preventDefault();
    setLeaveSuccess(true);
    setTimeout(() => {
      setLeaveSuccess(false);
      setShowLeaveModal(false);
    }, 1800);
  };

  // Academic Marks Dataset for Aarav
  const marksDataAarav = [
    { subject: "Physics (Theory + Practical)", internal: "29/30", theory: "65/70", total: 94, max: 100, grade: "A1", teacher: "Dr. S. K. Patnaik", status: "Excellent" },
    { subject: "Chemistry (Theory + Practical)", internal: "28/30", theory: "62/70", total: 90, max: 100, grade: "A1", teacher: "Dr. M. Das", status: "Very Good" },
    { subject: "Mathematics (CBSE + JEE)", internal: "20/20", theory: "76/80", total: 96, max: 100, grade: "A1", teacher: "Smt. Priya Mohanty", status: "Outstanding" },
    { subject: "English Core", internal: "18/20", theory: "72/80", total: 90, max: 100, grade: "A1", teacher: "Mr. A. Roy", status: "Very Good" },
    { subject: "Computer Science (Python & SQL)", internal: "30/30", theory: "64/70", total: 94, max: 100, grade: "A1", teacher: "Er. B. Mishra", status: "Outstanding" },
  ];

  // Academic Marks Dataset for Ananya
  const marksDataAnanya = [
    { subject: "Mathematics", internal: "20/20", theory: "78/80", total: 98, max: 100, grade: "A1", teacher: "Smt. S. Rout", status: "Outstanding" },
    { subject: "Science (Physics, Chem, Bio)", internal: "20/20", theory: "75/80", total: 95, max: 100, grade: "A1", teacher: "Dr. S. K. Patnaik", status: "Outstanding" },
    { subject: "Social Science", internal: "19/20", theory: "74/80", total: 93, max: 100, grade: "A1", teacher: "Mr. R. K. Nayak", status: "Very Good" },
    { subject: "English Language & Literature", internal: "19/20", theory: "76/80", total: 95, max: 100, grade: "A1", teacher: "Ms. L. Mohapatra", status: "Outstanding" },
    { subject: "Hindi / Sanskrit", internal: "18/20", theory: "75/80", total: 93, max: 100, grade: "A1", teacher: "Pt. B. K. Sharma", status: "Very Good" },
  ];

  const currentMarks = selectedWardId === "ward-1" ? marksDataAarav : marksDataAnanya;

  // Fee History Dataset
  const feeHistory = [
    {
      id: "receipt-1",
      receiptNo: "CQ-2026-9821",
      term: "Term 2 • Academic Session 2026-27",
      amount: "₹ 62,500",
      date: "05 Aug 2026",
      method: "HDFC Payment Gateway (UPI)",
      status: "Paid",
      breakdown: [
        { item: "Tuition & Smart Classroom Fee", cost: "₹ 38,000" },
        { item: "Science Lab & Vidwan JEE Modules", cost: "₹ 14,500" },
        { item: "Air-Conditioned Transport Route #4", cost: "₹ 10,000" },
      ],
    },
    {
      id: "receipt-2",
      receiptNo: "CQ-2026-4412",
      term: "Term 1 • Admission & Annual Charges",
      amount: "₹ 75,000",
      date: "12 Apr 2026",
      method: "Net Banking (SBI)",
      status: "Paid",
      breakdown: [
        { item: "Annual Registration & Academic Books", cost: "₹ 25,000" },
        { item: "Term 1 Tuition & Robotics Lab", cost: "₹ 40,000" },
        { item: "Activity & Sports Complex Access", cost: "₹ 10,000" },
      ],
    },
  ];

  // Today's schedule dataset matching child's routine
  const todaySchedule = [
    {
      startTime: "08:00",
      endTime: "08:45",
      className: "Class XI-A • Mathematics",
      topic: "Calculus & Linear Algebra • Room 12",
      status: "Next",
      isNext: true,
    },
    {
      startTime: "08:50",
      endTime: "09:35",
      className: "Class XI-A • Physics",
      topic: "Electromagnetism & Optics • Lab 03",
      status: "Upcoming",
      isNext: false,
    },
    {
      startTime: "09:40",
      endTime: "10:25",
      className: "Class XI-A • Chemistry",
      topic: "Organic Reaction Mechanisms • Room 15",
      status: "Upcoming",
      isNext: false,
    },
    {
      startTime: "11:15",
      endTime: "12:00",
      className: "Vidwan JEE Module",
      topic: "Advanced Problem Solving DPP • Amphitheatre",
      status: "Upcoming",
      isNext: false,
    },
  ];

  // Weekly timetable data for Mon-Sat matching exact style
  const weeklyTimetableData = {
    Mon: {
      dayName: "Monday",
      periods: [
        { period: 1, title: "XI-A • Mathematics", timeRoom: "08:00-08:45 • Room 12", isFree: false },
        { period: 2, title: "XI-A • Physics", timeRoom: "08:50-09:35 • Lab 03", isFree: false },
        { period: 3, title: "Library / Study Hall", timeRoom: "09:40-10:25", isFree: true },
        { period: 4, title: "XI-A • Chemistry", timeRoom: "10:30-11:15 • Room 15", isFree: false },
        { period: 5, title: "XI-A • Computer Science", timeRoom: "11:15-12:00 • Lab 01", isFree: false },
        { period: 6, title: "Vidwan JEE Practice", timeRoom: "12:05-12:50 • Room 12", isFree: false },
      ],
    },
    Tue: {
      dayName: "Tuesday",
      periods: [
        { period: 1, title: "XI-A • English Core", timeRoom: "08:00-08:45 • Room 12", isFree: false },
        { period: 2, title: "XI-A • Mathematics", timeRoom: "08:50-09:35 • Room 12", isFree: false },
        { period: 3, title: "XI-A • Physics Lab", timeRoom: "09:40-10:25 • Lab 03", isFree: false },
        { period: 4, title: "Free Period / Sports", timeRoom: "10:30-11:15", isFree: true },
        { period: 5, title: "XI-A • Chemistry", timeRoom: "11:15-12:00 • Room 15", isFree: false },
        { period: 6, title: "Vidwan JEE Practice", timeRoom: "12:05-12:50 • Room 12", isFree: false },
      ],
    },
    Wed: {
      dayName: "Wednesday",
      periods: [
        { period: 1, title: "XI-A • Mathematics", timeRoom: "08:00-08:45 • Room 12", isFree: false },
        { period: 2, title: "XI-A • Physics", timeRoom: "08:50-09:35 • Room 12", isFree: false },
        { period: 3, title: "XI-A • Chemistry Lab", timeRoom: "09:40-10:25 • Lab 02", isFree: false },
        { period: 4, title: "XI-A • English Core", timeRoom: "10:30-11:15 • Room 12", isFree: false },
        { period: 5, title: "Study Hall Prep", timeRoom: "11:15-12:00", isFree: true },
        { period: 6, title: "Vidwan Mock Review", timeRoom: "12:05-12:50 • Amphitheatre", isFree: false },
      ],
    },
    Thu: {
      dayName: "Thursday",
      periods: [
        { period: 1, title: "XI-A • Physics", timeRoom: "08:00-08:45 • Room 12", isFree: false },
        { period: 2, title: "XI-A • Mathematics", timeRoom: "08:50-09:35 • Room 12", isFree: false },
        { period: 3, title: "Activity / Club", timeRoom: "09:40-10:25", isFree: true },
        { period: 4, title: "XI-A • Computer Science", timeRoom: "10:30-11:15 • Lab 01", isFree: false },
        { period: 5, title: "XI-A • Chemistry", timeRoom: "11:15-12:00 • Room 15", isFree: false },
        { period: 6, title: "Vidwan JEE Practice", timeRoom: "12:05-12:50 • Room 12", isFree: false },
      ],
    },
    Fri: {
      dayName: "Friday",
      periods: [
        { period: 1, title: "XI-A • Mathematics", timeRoom: "08:00-08:45 • Room 12", isFree: false },
        { period: 2, title: "XI-A • Physics", timeRoom: "08:50-09:35 • Room 12", isFree: false },
        { period: 3, title: "XI-A • Chemistry", timeRoom: "09:40-10:25 • Room 15", isFree: false },
        { period: 4, title: "XI-A • English Core", timeRoom: "10:30-11:15 • Room 12", isFree: false },
        { period: 5, title: "XI-A • CS Lab", timeRoom: "11:15-12:00 • Lab 01", isFree: false },
        { period: 6, title: "Self Study", timeRoom: "12:05-12:50", isFree: true },
      ],
    },
    Sat: {
      dayName: "Saturday",
      periods: [
        { period: 1, title: "Vidwan JEE Mock Exam", timeRoom: "08:00-09:30 • CBT Hall", isFree: false },
        { period: 2, title: "Exam Doubt Clearance", timeRoom: "09:40-10:25 • Room 12", isFree: false },
        { period: 3, title: "Parent Consultation", timeRoom: "10:30-11:15 • Faculty Desk", isFree: true },
        { period: 4, title: "Co-Curricular / Sports", timeRoom: "11:15-12:00 • Sports Ground", isFree: true },
      ],
    },
  };

  // Quick actions matching the reference design colors
  const quickActions = [
    {
      id: "fees",
      label: "Pay Fees Online (Eduqfix)",
      icon: CreditCard,
      bgColor: "bg-[#EFF6FF]", // Light Blue
      borderColor: "border-[#DBEAFE]",
      textColor: "text-[#1D4ED8]",
      iconColor: "text-[#2563EB]",
      action: () => setActiveNav("fees"),
    },
    {
      id: "transport",
      label: "Live GPS Bus Tracking",
      icon: Bus,
      bgColor: "bg-[#FFFBEB]", // Light Amber
      borderColor: "border-[#FEF3C7]",
      textColor: "text-[#D97706]",
      iconColor: "text-[#F59E0B]",
      action: () => setActiveNav("transport"),
    },
    {
      id: "academics",
      label: "Download Report Card",
      icon: FileText,
      bgColor: "bg-[#F3E8FF]", // Light Purple
      borderColor: "border-[#E9D5FF]",
      textColor: "text-[#7E22CE]",
      iconColor: "text-[#9333EA]",
      action: () => {
        setActiveNav("academics");
        setShowReportCardModal(true);
      },
    },
    {
      id: "leave",
      label: "Apply Leave / Gate Pass",
      icon: CalendarOff,
      bgColor: "bg-[#F8FAFC]", // Light Slate
      borderColor: "border-[#E2E8F0]",
      textColor: "text-[#334155]",
      iconColor: "text-[#475569]",
      action: () => {
        setShowLeaveModal(true);
      },
    },
  ];

  // Navigation Menu Items grouped exactly as in the reference image
  const navGroups = [
    {
      title: "MAIN",
      items: [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        { id: "wards", label: "My Childs", icon: Users },
        { id: "timetable", label: "Timetable", icon: Calendar },
      ],
    },
    {
      title: "STUDENT OVERSIGHT",
      items: [
        { id: "attendance", label: "Attendance", icon: ClipboardCheck },
        { id: "academics", label: "Report Cards", icon: Award },
        { id: "fees", label: "Fee Gateway", icon: CreditCard },
      ],
    },
    {
      title: "CAMPUS SERVICES",
      items: [
        { id: "transport", label: "Bus Tracking", icon: Bus },
        { id: "hostel", label: "Hostel & Mess", icon: Utensils },
      ],
    },
    {
      title: "ACCOUNT & CONNECT",
      items: [
        { id: "profile", label: "My Profile", icon: User },
        { id: "communication", label: "Teacher Messages", icon: MessageSquare },
      ],
    },
  ];

  const getHeaderInfo = () => {
    if (activeNav === "wards") {
      return { title: "My Childs", subtitle: "Student records & child switcher" };
    }
    if (activeNav === "timetable") {
      return { title: "Timetable", subtitle: "Your child's weekly classroom schedule" };
    }
    if (activeNav === "attendance") {
      return { title: "Attendance", subtitle: "Biometric check-in & punch log" };
    }
    if (activeNav === "academics") {
      return { title: "Report Cards", subtitle: "Term assessments & examination scorecard" };
    }
    if (activeNav === "fees") {
      return { title: "Fee Gateway", subtitle: "Online fees & official stamped receipts" };
    }
    if (activeNav === "transport") {
      return { title: "Bus Tracking", subtitle: "Live GPS tracking for Route #4" };
    }
    if (activeNav === "hostel") {
      return { title: "Hostel & Mess", subtitle: "Residential oversight & certified nutrition menu" };
    }
    if (activeNav === "communication") {
      return { title: "Teacher Messages", subtitle: "Direct faculty communication & PTM booking" };
    }
    if (activeNav === "profile") {
      return { title: "My Profile", subtitle: "Manage your guardian details & contact preferences" };
    }
    return {
      title: "Dashboard",
      subtitle: `Welcome back, ${profileData.name.split(" ")[1] || "Alok"}`,
    };
  };

  const currentHeader = getHeaderInfo();

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col md:flex-row font-sans">
      {/* Mobile Top Header Toggle */}
      <div className="md:hidden bg-[#0F172A] text-white p-4 flex items-center justify-between z-30">
        <div className="flex items-center gap-2.5">
          <div className="bg-[#0077C8] p-2 rounded-xl text-white">
            <Heart className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-sm leading-tight text-white">ParentConnect</h2>
            <p className="text-[10px] text-slate-400">Parent Portal</p>
          </div>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Navigation - Exact Dark Navy Design */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-[#0F172A] text-slate-300 flex flex-col justify-between z-40 transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-5 flex-1 overflow-y-auto custom-scrollbar">
          {/* Logo Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#0077C8] p-2.5 rounded-xl text-white flex-shrink-0 shadow-md">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-bold text-base text-white tracking-tight leading-tight">
                ParentConnect
              </h2>
              <p className="text-xs text-slate-400 font-medium">Parent Portal</p>
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
                            ? "bg-[#0077C8] text-white shadow-md shadow-blue-500/20 font-bold"
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
        <div className="p-4 border-t border-slate-800/80 space-y-3">
          <Link
            to="/"
            className="flex items-center gap-2 px-3 text-xs text-slate-400 hover:text-white transition font-medium"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400" />
            <span>Back to School Website</span>
          </Link>

          <button
            onClick={() => {
              logout();
              navigate('/login');
            }}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition border border-rose-500/20"
          >
            <LogOut className="w-4 h-4 text-rose-400" />
            <span>Sign Out / Switch Portal</span>
          </button>

          <button
            onClick={() => setActiveNav("profile")}
            className="w-full flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-800 transition text-left cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-105 transition-transform">
              {profileData.name.split(" ").map((n) => n[0]).join("").slice(0, 2) || "AM"}
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

          <div className="flex items-center gap-3 flex-wrap">
            {/* Ward Switcher Pill */}
            <div className="inline-flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-2xl shadow-sm">
              {Object.values(wards).map((w) => {
                const isSelected = selectedWardId === w.id;
                return (
                  <button
                    key={w.id}
                    onClick={() => setSelectedWardId(w.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                      isSelected
                        ? "bg-[#0077C8] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {w.name.split(" ")[0]} ({w.grade.split("•")[0].trim()})
                  </button>
                );
              })}
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Academic Year 2026-27
            </div>

            <button className="relative p-2.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-sm transition">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <button
              onClick={() => {
                logout();
                navigate('/login');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 hover:border-rose-300 hover:bg-rose-50 text-rose-600 text-xs font-bold shadow-sm transition"
              title="Sign Out to Switch Accounts"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </header>

        {/* View 1: Main Dashboard View (Exact match to screenshot) */}
        {activeNav === "dashboard" && (
          <div>
            {/* Hero Welcome Banner - Vibrant Blue */}
            <div className="bg-[#0066E0] rounded-2xl p-6 sm:p-7 text-white shadow-lg shadow-blue-500/10 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div>
                <p className="text-blue-100 text-xs font-medium mb-1">Good morning</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {profileData.name}
                </h2>
                <p className="text-blue-100 text-xs sm:text-sm font-medium mt-1">
                  Child Name: <strong className="text-white font-bold">{currentWard.name}</strong> • {currentWard.grade}
                </p>
              </div>

              <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/20 min-w-[210px] w-full sm:w-auto flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-blue-100 text-[11px] font-semibold uppercase tracking-wider mb-0.5">
                    Today's Status
                  </p>
                  <p className="text-sm font-bold text-white">{currentWard.attendanceToday} ({currentWard.biometricTime.split("(")[0]})</p>
                </div>
              </div>
            </div>

            {/* Metrics Grid (Exact 4 Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Metric 1 */}
              <button
                onClick={() => setActiveNav("attendance")}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition text-left w-full cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition">
                  <Users className="w-5 h-5" />
                </div>
                <p className="text-3xl font-bold text-slate-800 tracking-tight">{currentWard.attendanceRate}</p>
                <p className="text-xs font-medium text-slate-500 mt-1 flex items-center justify-between">
                  <span>Attendance Rate</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </button>

              {/* Metric 2 */}
              <button
                onClick={() => setActiveNav("academics")}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition text-left w-full cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-3 group-hover:bg-emerald-100 transition">
                  <UserCheck className="w-5 h-5" />
                </div>
                <p className="text-3xl font-bold text-slate-800 tracking-tight">{currentWard.academicAvg.split(" ")[0]}</p>
                <p className="text-xs font-medium text-slate-500 mt-1 flex items-center justify-between">
                  <span>{currentWard.batchRank}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </button>

              {/* Metric 3 */}
              <button
                onClick={() => setActiveNav("fees")}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition text-left w-full cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-3 group-hover:bg-amber-100 transition">
                  <CreditCard className="w-5 h-5" />
                </div>
                <p className="text-3xl font-bold text-slate-800 tracking-tight">₹ 0.00</p>
                <p className="text-xs font-medium text-slate-500 mt-1 flex items-center justify-between">
                  <span>All Dues Cleared</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </button>

              {/* Metric 4 */}
              <button
                onClick={() => setActiveNav("transport")}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition text-left w-full cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center mb-3 group-hover:bg-purple-100 transition">
                  <Bus className="w-5 h-5" />
                </div>
                <p className="text-3xl font-bold text-slate-800 tracking-tight">{selectedWardId === "ward-1" ? "Route #4" : "Hostel"}</p>
                <p className="text-xs font-medium text-slate-500 mt-1 flex items-center justify-between">
                  <span>{selectedWardId === "ward-1" ? "GPS Active Safe" : "Kaveri Bhavan"}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </button>
            </div>

            {/* Schedule & Quick Actions Grid (Exact Screenshot Layout) */}
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
                          <span className="px-3.5 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold inline-block">
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

        {/* View 2: My Childs View */}
        {activeNav === "wards" && (
          <div>
            <p className="text-sm font-normal text-slate-500 mb-6">
              2 enrolled students linked to Dr. Alok Mohanty
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.values(wards).map((w) => {
                const isSelected = selectedWardId === w.id;
                return (
                  <div
                    key={w.id}
                    className={`bg-white rounded-2xl p-6 border transition flex flex-col justify-between ${
                      isSelected
                        ? "border-blue-300 ring-2 ring-blue-500/20 shadow-md"
                        : "border-slate-100 shadow-sm hover:shadow-md"
                    }`}
                  >
                    <div>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={w.avatar}
                            alt={w.name}
                            className="w-12 h-12 rounded-xl object-cover border border-slate-200"
                          />
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                              {w.name}
                            </h3>
                            <p className="text-xs text-slate-500 font-medium mt-0.5">
                              {w.grade}
                            </p>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold border border-blue-100/60">
                          Roll #{w.rollNo}
                        </span>
                      </div>

                      {/* Stats box */}
                      <div className="grid grid-cols-3 gap-2 bg-[#F8FAFC] rounded-xl p-3.5 mb-4 text-center">
                        <div className="border-r border-slate-200/60">
                          <p className="text-base font-bold text-slate-900">{w.attendanceRate}</p>
                          <p className="text-[10px] text-slate-400 font-medium mt-0.5">Attendance</p>
                        </div>
                        <div className="border-r border-slate-200/60">
                          <p className="text-base font-bold text-slate-900">{w.academicAvg.split(" ")[0]}</p>
                          <p className="text-[10px] text-slate-400 font-medium mt-0.5">Grade Score</p>
                        </div>
                        <div>
                          <p className="text-base font-bold text-emerald-600">Cleared</p>
                          <p className="text-[10px] text-slate-400 font-medium mt-0.5">Fee Status</p>
                        </div>
                      </div>

                      <div className="space-y-1.5 text-xs text-slate-600 mb-5">
                        <p><strong>Student ID:</strong> <span className="font-mono text-slate-800">{w.studentId}</span></p>
                        <p><strong>Enrollment:</strong> {w.enrollmentType}</p>
                        <p><strong>Class Teacher:</strong> {w.classTeacher}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          setSelectedWardId(w.id);
                          setActiveNav("dashboard");
                        }}
                        className={`flex-1 py-2.5 rounded-xl font-semibold text-xs transition text-center ${
                          isSelected
                            ? "bg-[#0077C8] text-white"
                            : "bg-[#EFF6FF] text-[#0077C8] hover:bg-blue-100"
                        }`}
                      >
                        {isSelected ? "Active Selected Ward" : "Switch to this Ward"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* View 3: Timetable View */}
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
                {weeklyTimetableData[selectedTimetableDay]?.dayName || "Monday"} — {currentWard.name} ({currentWard.grade})
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

                    {!p.isFree && (
                      <span className="px-3.5 py-1 rounded-md bg-[#EFF6FF] text-[#0077C8] font-semibold text-xs inline-block">
                        Classroom Period
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* View 4: Attendance View */}
        {activeNav === "attendance" && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-800">Ward: {currentWard.name}</span>
                <span className="text-xs text-slate-500 font-medium">({currentWard.daysPresent})</span>
              </div>

              <button
                onClick={() => setShowLeaveModal(true)}
                className="px-5 py-2.5 rounded-2xl bg-[#0077C8] text-white font-bold text-xs hover:bg-blue-700 transition shadow-sm flex items-center gap-2"
              >
                <CalendarOff className="w-4 h-4" /> Apply Leave Exemption
              </button>
            </div>

            {/* Stat Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
                <p className="text-2xl sm:text-3xl font-bold text-emerald-600 tracking-tight">
                  {currentWard.attendanceRate}
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1">Present (145 Days)</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
                <p className="text-2xl sm:text-3xl font-bold text-rose-500 tracking-tight">
                  2 Days
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1">Absent (Medical Certified)</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
                <p className="text-2xl sm:text-3xl font-bold text-amber-500 tracking-tight">
                  3 Days
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1">Approved Leaves</p>
              </div>
            </div>

            {/* Attendance Table */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-4">
                Recent 7-Day Biometric Scan Log
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px]">
                      <th className="pb-3">Date</th>
                      <th className="pb-3">Check-in Scan (Gate)</th>
                      <th className="pb-3">Exit Scan (Gate)</th>
                      <th className="pb-3">Campus Duration</th>
                      <th className="pb-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="py-3.5 font-bold text-slate-900">Today (27 Aug 2026)</td>
                      <td className="py-3.5 text-emerald-600 font-mono font-semibold">07:45 AM (Gate #2)</td>
                      <td className="py-3.5 text-slate-400 font-mono">In Classroom</td>
                      <td className="py-3.5">Active on Campus</td>
                      <td className="py-3.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                          Present
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 font-bold text-slate-900">26 Aug 2026</td>
                      <td className="py-3.5 text-emerald-600 font-mono font-semibold">07:42 AM (Gate #2)</td>
                      <td className="py-3.5 text-blue-600 font-mono font-semibold">04:10 PM (Gate #1)</td>
                      <td className="py-3.5">8 hrs 28 mins</td>
                      <td className="py-3.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                          Present
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 font-bold text-slate-900">25 Aug 2026</td>
                      <td className="py-3.5 text-emerald-600 font-mono font-semibold">07:40 AM (Gate #2)</td>
                      <td className="py-3.5 text-blue-600 font-mono font-semibold">04:05 PM (Gate #1)</td>
                      <td className="py-3.5">8 hrs 25 mins</td>
                      <td className="py-3.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                          Present
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 font-bold text-slate-900">24 Aug 2026</td>
                      <td className="py-3.5 text-emerald-600 font-mono font-semibold">07:44 AM (Gate #2)</td>
                      <td className="py-3.5 text-blue-600 font-mono font-semibold">04:15 PM (Gate #1)</td>
                      <td className="py-3.5">8 hrs 31 mins</td>
                      <td className="py-3.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                          Present
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* View 5: Report Cards View */}
        {activeNav === "academics" && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-sm font-bold text-slate-900">Term 1 Assessment Report Card</p>
                <p className="text-xs text-slate-500">CBSE Affiliation #1530280 • {currentWard.name}</p>
              </div>

              <button
                onClick={() => setShowReportCardModal(true)}
                className="px-5 py-2.5 rounded-2xl bg-[#0077C8] text-white font-bold text-xs hover:bg-blue-700 transition shadow-sm flex items-center gap-2"
              >
                <Printer className="w-4 h-4" /> Print / View PDF Report Card
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px]">
                      <th className="pb-3">Subject</th>
                      <th className="pb-3">Internal</th>
                      <th className="pb-3">Theory (Written)</th>
                      <th className="pb-3">Total Marks</th>
                      <th className="pb-3">Grade</th>
                      <th className="pb-3">Faculty Remark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {currentMarks.map((m, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition">
                        <td className="py-3.5 font-bold text-slate-900">
                          {m.subject}
                          <span className="block text-[10px] text-slate-400 font-normal">Mentor: {m.teacher}</span>
                        </td>
                        <td className="py-3.5 font-mono">{m.internal}</td>
                        <td className="py-3.5 font-mono">{m.theory}</td>
                        <td className="py-3.5 font-bold text-blue-700 font-mono text-sm">{m.total} / {m.max}</td>
                        <td className="py-3.5">
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                            {m.grade}
                          </span>
                        </td>
                        <td className="py-3.5 text-xs text-slate-600 font-medium">{m.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* View 6: Fee Payments View */}
        {activeNav === "fees" && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-sm font-bold text-slate-900">Fee Ledger &amp; Eduqfix Gateway</p>
                <p className="text-xs text-slate-500">Direct online payment with zero convenience charges</p>
              </div>

              <a
                href="https://www.eduqfix.com/PayDirect/#/student/pay/9u3Ik7RvISUPS+FAt5Vw0mfbWsL0LSABcb0Dwea4EuWIcoB0DJulKNCM0J8ImcKt/4592"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-2xl bg-[#0077C8] text-white font-bold text-xs hover:bg-blue-700 transition shadow-sm flex items-center gap-2"
              >
                <CreditCard className="w-4 h-4" /> Pay via Eduqfix Gateway <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Fee Invoices */}
            <div className="space-y-4">
              {feeHistory.map((rec) => (
                <div
                  key={rec.id}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                      <FileCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{rec.term}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Receipt: <strong className="font-mono text-slate-800">#{rec.receiptNo}</strong> • Date: {rec.date} • {rec.method}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <span className="text-lg font-bold text-emerald-600 font-mono">{rec.amount}</span>
                    <button
                      onClick={() => {
                        setSelectedReceipt(rec);
                        setShowFeeReceiptModal(true);
                      }}
                      className="px-4 py-2 rounded-xl bg-[#EFF6FF] text-[#0077C8] hover:bg-blue-100 font-semibold text-xs transition flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" /> View Receipt
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View 7: Bus Tracking View */}
        {activeNav === "transport" && (
          <div>
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Bus className="w-5 h-5 text-blue-600" />
                    <span>Live GPS Bus Tracking — Route #4</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Vehicle: OD-02-AX-8910 • Driver: Manas Kumar Sahoo (+91 97777 06447)
                  </p>
                </div>

                <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Telemetry Active
                </span>
              </div>

              {/* Waypoint list */}
              <div className="relative border-l-2 border-blue-500/30 ml-4 space-y-6 pb-2 text-xs">
                <div className="relative pl-6">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-2 border-white"></span>
                  <p className="font-bold text-slate-900">Stop 1: Master Canteen Pickup Point</p>
                  <p className="text-slate-500 text-[11px]">06:50 AM • 8 Students Boarded</p>
                </div>
                <div className="relative pl-6">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-2 border-white"></span>
                  <p className="font-bold text-slate-900">Stop 2: Khandagiri Square</p>
                  <p className="text-slate-500 text-[11px]">07:15 AM • Aarav Sharma RFID Verified</p>
                </div>
                <div className="relative pl-6">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-2 border-white"></span>
                  <p className="font-bold text-slate-900">Stop 3: Jatani Square</p>
                  <p className="text-slate-500 text-[11px]">07:32 AM • Speed Limit Compliant</p>
                </div>
                <div className="relative pl-6">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white animate-ping"></span>
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white"></span>
                  <p className="font-bold text-emerald-700">Stop 4: Cohen International School Campus Arrival</p>
                  <p className="text-emerald-600 text-[11px]">07:42 AM • Completed Safe Arrival</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View 8: Hostel & Mess View */}
        {activeNav === "hostel" && (
          <div>
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-amber-600" />
                    <span>Hostel &amp; Mess Daily Certified Schedule</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Kaveri Bhavan • Warden: Smt. Sunita Mohanty (+91 70777 75311)
                  </p>
                </div>

                <button
                  onClick={() => setShowGatePassModal(true)}
                  className="px-5 py-2.5 rounded-2xl bg-[#0077C8] text-white font-bold text-xs hover:bg-blue-700 transition shadow-sm flex items-center gap-2"
                >
                  <QrCode className="w-4 h-4" /> Request Gate Pass
                </button>
              </div>

              {/* 4 Meals Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/70">
                  <span className="text-[10px] font-bold uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                    Breakfast (07:00 – 08:00 AM)
                  </span>
                  <p className="text-xs font-bold text-slate-900 mt-2">Steamed Idli &amp; Sambar</p>
                  <p className="text-[11px] text-slate-500">Boiled Eggs / Sprouts &amp; Hot Milk</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/70">
                  <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Lunch (12:30 – 01:30 PM)
                  </span>
                  <p className="text-xs font-bold text-slate-900 mt-2">Paneer Butter Masala &amp; Rice</p>
                  <p className="text-[11px] text-slate-500">Dal Tadka, Tawa Roti, Salad &amp; Curd</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/70">
                  <span className="text-[10px] font-bold uppercase text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
                    Snacks (05:00 – 05:45 PM)
                  </span>
                  <p className="text-xs font-bold text-slate-900 mt-2">Veg Samosa / Upma</p>
                  <p className="text-[11px] text-slate-500">Bournvita / Tea &amp; Butter Biscuits</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/70">
                  <span className="text-[10px] font-bold uppercase text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                    Dinner (08:00 – 09:15 PM)
                  </span>
                  <p className="text-xs font-bold text-slate-900 mt-2">Tawa Roti &amp; Mixed Sabzi</p>
                  <p className="text-[11px] text-slate-500">Dal Fry, Gulab Jamun &amp; Warm Milk</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View 9: Teacher Messages & PTM View */}
        {activeNav === "communication" && (
          <div>
            <div className="grid lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900">Faculty Mentors</h3>
                  <button
                    onClick={() => setShowPtmModal(true)}
                    className="px-3.5 py-1.5 rounded-xl bg-[#0077C8] text-white font-bold text-xs hover:bg-blue-700 transition"
                  >
                    Book PTM
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60">
                    <strong className="text-slate-900 block">Smt. Priya Mohanty</strong>
                    <span className="text-blue-600 text-[11px]">Class Coordinator • Mathematics</span>
                    <p className="text-slate-400 text-[10px] mt-1">Available: 03:30 PM – 04:30 PM</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60">
                    <strong className="text-slate-900 block">Dr. S. K. Patnaik</strong>
                    <span className="text-blue-600 text-[11px]">Senior Faculty • Physics Wing</span>
                    <p className="text-slate-400 text-[10px] mt-1">Available: 02:30 PM – 03:30 PM</p>
                  </div>
                </div>
              </div>

              {/* Chat Container */}
              <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col h-[500px] overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                      PM
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Smt. Priya Mohanty</p>
                      <p className="text-[10px] text-emerald-600">Online • Class Teacher</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Encrypted Parent Desk</span>
                </div>

                {/* Message stream */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
                  {messages.map((m) => {
                    const isParent = m.sender === "parent";
                    return (
                      <div key={m.id} className={`flex flex-col ${isParent ? "items-end" : "items-start"}`}>
                        <span className="text-[10px] text-slate-400 mb-1 px-1">{m.senderName} • {m.time}</span>
                        <div
                          className={`p-3.5 rounded-2xl max-w-md ${
                            isParent
                              ? "bg-[#0077C8] text-white rounded-tr-none"
                              : "bg-slate-100 text-slate-800 rounded-tl-none"
                          }`}
                        >
                          <p className="leading-relaxed">{m.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Input */}
                <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-100 flex gap-2 bg-slate-50">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Type message to class coordinator..."
                    className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-[#0077C8] hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* View 10: Profile View (Exact matching design to Teacher Profile) */}
        {activeNav === "profile" && (
          <div>
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-5 pb-8 mb-8 border-b border-slate-100">
                <div className="w-20 h-20 rounded-full bg-purple-600 text-white font-bold text-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  {profileData.name.split(" ").map((n) => n[0]).join("").slice(0, 2) || "AM"}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{profileData.name}</h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{profileData.designation}</p>
                  <p className="text-[11px] text-blue-600 font-semibold mt-1">Guardian ID: #P-9021 • AIIMS Bhubaneswar</p>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsEditingProfile(false);
                  alert("Guardian profile saved successfully!");
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

                  <div>
                    <label className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
                      <span>Primary Phone</span>
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

                  <div>
                    <label className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
                      <span>Occupation &amp; Workplace</span>
                      <Pencil className="w-3 h-3 text-slate-400" />
                    </label>
                    <input
                      type="text"
                      required
                      disabled={!isEditingProfile}
                      value={profileData.occupation}
                      onChange={(e) => setProfileData({ ...profileData, occupation: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                        isEditingProfile
                          ? "border-blue-300 bg-white focus:outline-none focus:border-blue-500 shadow-sm"
                          : "border-slate-200/70 bg-slate-50 text-slate-700"
                      }`}
                    />
                  </div>
                </div>

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
      </main>

      {/* MODAL 1: REPORT CARD PREVIEW MODAL */}
      {showReportCardModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
          onClick={() => setShowReportCardModal(false)}
        >
          <div
            className="bg-white text-navy-950 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl space-y-6 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-gray-200 pb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Cohen Logo" className="h-10 w-auto object-contain" />
                <div>
                  <h3 className="font-bold text-base text-slate-900">
                    Cohen International School
                  </h3>
                  <p className="text-[11px] text-gray-500 font-semibold">
                    CBSE Affiliation No: 1530280 • Official Term 1 Grade Sheet
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowReportCardModal(false)}
                className="p-1 rounded-lg text-gray-400 hover:text-slate-900 hover:bg-gray-100 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3.5 rounded-xl border border-gray-200">
              <div><strong>Student Name:</strong> {currentWard.name}</div>
              <div><strong>Class &amp; Stream:</strong> {currentWard.grade}</div>
              <div><strong>Student ID:</strong> {currentWard.studentId}</div>
              <div><strong>Batch Rank:</strong> {currentWard.batchRank}</div>
            </div>

            {/* Marks Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-gray-300 text-gray-600 font-bold uppercase text-[10px]">
                    <th className="pb-2">Subject</th>
                    <th className="pb-2">Internal</th>
                    <th className="pb-2">Theory</th>
                    <th className="pb-2">Total</th>
                    <th className="pb-2">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-800">
                  {currentMarks.map((m, idx) => (
                    <tr key={idx}>
                      <td className="py-2 font-semibold">{m.subject}</td>
                      <td className="py-2 font-mono">{m.internal}</td>
                      <td className="py-2 font-mono">{m.theory}</td>
                      <td className="py-2 font-bold font-mono text-blue-700">{m.total} / {m.max}</td>
                      <td className="py-2 font-bold text-emerald-700">{m.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-200">
              <span className="text-xs font-bold text-gray-700">
                Overall Percentage: <span className="text-blue-700 text-sm font-extrabold">{currentWard.academicAvg}</span>
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => alert("Printing report card...")}
                  className="px-4 py-2 bg-slate-900 text-white font-bold rounded-xl text-xs hover:bg-slate-800 transition flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" /> Print
                </button>
                <button
                  onClick={() => alert("Downloading PDF...")}
                  className="px-4 py-2 bg-[#0077C8] text-white font-bold rounded-xl text-xs hover:bg-blue-700 transition flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: FEE RECEIPT PREVIEW MODAL */}
      {showFeeReceiptModal && selectedReceipt && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
          onClick={() => setShowFeeReceiptModal(false)}
        >
          <div
            className="bg-white text-navy-950 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-5 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-gray-200 pb-3 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-slate-900">
                  Fee Payment Receipt
                </h3>
                <p className="text-xs text-gray-500 font-mono">
                  Receipt #{selectedReceipt.receiptNo}
                </p>
              </div>
              <button
                onClick={() => setShowFeeReceiptModal(false)}
                className="p-1 rounded-lg text-gray-400 hover:text-slate-900 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 text-xs text-gray-700">
              <div className="flex justify-between">
                <span>Student Name:</span>
                <strong>{currentWard.name}</strong>
              </div>
              <div className="flex justify-between">
                <span>Payment Term:</span>
                <strong>{selectedReceipt.term}</strong>
              </div>
              <div className="flex justify-between">
                <span>Transaction Date:</span>
                <span>{selectedReceipt.date}</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Mode:</span>
                <span>{selectedReceipt.method}</span>
              </div>
            </div>

            {/* Breakdown */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-gray-200 space-y-1.5 text-xs">
              {selectedReceipt.breakdown.map((item, idx) => (
                <div key={idx} className="flex justify-between text-gray-700">
                  <span>{item.item}</span>
                  <span className="font-mono font-semibold">{item.cost}</span>
                </div>
              ))}
              <div className="border-t border-gray-300 pt-2 mt-2 flex justify-between font-bold text-slate-900 text-sm">
                <span>Total Amount Cleared:</span>
                <span className="text-emerald-700 font-mono">{selectedReceipt.amount}</span>
              </div>
            </div>

            <button
              onClick={() => alert("Downloading receipt copy...")}
              className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl text-xs hover:bg-slate-800 transition flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-blue-400" /> Download Official Stamped Receipt
            </button>
          </div>
        </div>
      )}

      {/* MODAL 3: PTM BOOKING MODAL */}
      {showPtmModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
          onClick={() => setShowPtmModal(false)}
        >
          <div
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4 text-slate-900 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">Book 1-on-1 PTM Discussion</h3>
                <p className="text-xs text-blue-600">Parent-Teacher Consultation Desk</p>
              </div>
              <button
                onClick={() => setShowPtmModal(false)}
                className="text-slate-400 hover:text-slate-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {ptmSuccess ? (
              <div className="p-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
                <h4 className="font-bold text-lg text-slate-900">PTM Slot Confirmed!</h4>
                <p className="text-xs text-slate-500">
                  Meeting scheduled on {ptmForm.date} at {ptmForm.slot}. An SMS confirmation has been sent to your registered mobile.
                </p>
              </div>
            ) : (
              <form onSubmit={handlePtmSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Select Mentor / Faculty:</label>
                  <select
                    value={ptmForm.teacher}
                    onChange={(e) => setPtmForm({ ...ptmForm, teacher: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:border-blue-500 bg-white"
                  >
                    <option value="Smt. Priya Mohanty (Mathematics)">Smt. Priya Mohanty (Class Teacher • Maths)</option>
                    <option value="Dr. S. K. Patnaik (Physics)">Dr. S. K. Patnaik (Physics)</option>
                    <option value="Dr. M. Das (Chemistry)">Dr. M. Das (Chemistry)</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Preferred Date:</label>
                    <input
                      type="date"
                      value={ptmForm.date}
                      onChange={(e) => setPtmForm({ ...ptmForm, date: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:border-blue-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Time Slot:</label>
                    <select
                      value={ptmForm.slot}
                      onChange={(e) => setPtmForm({ ...ptmForm, slot: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:border-blue-500 bg-white"
                    >
                      <option value="10:00 AM - 10:20 AM">10:00 AM – 10:20 AM</option>
                      <option value="10:30 AM - 10:50 AM">10:30 AM – 10:50 AM</option>
                      <option value="11:00 AM - 11:20 AM">11:00 AM – 11:20 AM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Specific Discussion Topic (Optional):</label>
                  <textarea
                    value={ptmForm.notes}
                    onChange={(e) => setPtmForm({ ...ptmForm, notes: e.target.value })}
                    rows={2}
                    placeholder="e.g. JEE mock test performance, physics numericals..."
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:border-blue-500 bg-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0077C8] hover:bg-blue-700 text-white font-bold rounded-xl transition text-xs shadow-md"
                >
                  Confirm PTM Appointment
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL 4: GATE PASS / OUTING MODAL */}
      {showGatePassModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
          onClick={() => setShowGatePassModal(false)}
        >
          <div
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4 text-slate-900 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">Hostel Gate Pass Request</h3>
                <p className="text-xs text-blue-600">Kaveri Bhavan Warden Authorization</p>
              </div>
              <button
                onClick={() => setShowGatePassModal(false)}
                className="text-slate-400 hover:text-slate-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {gatePassSuccess ? (
              <div className="p-6 text-center space-y-3">
                <QrCode className="w-16 h-16 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-lg text-slate-900">Gate Pass Authorized!</h4>
                <p className="text-xs text-slate-500">
                  Digital QR Pass generated for {currentWard.name}. Show this QR at Campus Gate #1 during pickup.
                </p>
              </div>
            ) : (
              <form onSubmit={handleGatePassSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Outing Reason:</label>
                  <input
                    type="text"
                    value={gatePassForm.reason}
                    onChange={(e) => setGatePassForm({ ...gatePassForm, reason: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Departure Time:</label>
                    <input
                      type="text"
                      value={gatePassForm.departureTime}
                      onChange={(e) => setGatePassForm({ ...gatePassForm, departureTime: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 font-mono text-[11px] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Return Time:</label>
                    <input
                      type="text"
                      value={gatePassForm.returnTime}
                      onChange={(e) => setGatePassForm({ ...gatePassForm, returnTime: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 font-mono text-[11px] bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Guardian Pickup Escort:</label>
                  <input
                    type="text"
                    value={gatePassForm.escortName}
                    onChange={(e) => setGatePassForm({ ...gatePassForm, escortName: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0077C8] hover:bg-blue-700 text-white font-bold rounded-xl transition text-xs shadow-md"
                >
                  Generate Approved Digital Gate Pass
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL 5: LEAVE APPLICATION MODAL */}
      {showLeaveModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
          onClick={() => setShowLeaveModal(false)}
        >
          <div
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4 text-slate-900 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">Apply for Student Absence / Leave</h3>
                <p className="text-xs text-blue-600">Official Parent Leave Application</p>
              </div>
              <button
                onClick={() => setShowLeaveModal(false)}
                className="text-slate-400 hover:text-slate-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {leaveSuccess ? (
              <div className="p-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="font-bold text-lg text-slate-900">Leave Application Submitted!</h4>
                <p className="text-xs text-slate-500">
                  Application logged with attendance office. Biometric exemption marked for {leaveForm.startDate} to {leaveForm.endDate}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleLeaveSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Leave Category:</label>
                  <select
                    value={leaveForm.type}
                    onChange={(e) => setLeaveForm({ ...leaveForm, type: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 bg-white"
                  >
                    <option value="Medical Leave">Medical / Health Concern</option>
                    <option value="Family Function">Family Event / Out of Town</option>
                    <option value="Emergency Leave">Personal Emergency</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">From Date:</label>
                    <input
                      type="date"
                      value={leaveForm.startDate}
                      onChange={(e) => setLeaveForm({ ...leaveForm, startDate: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">To Date:</label>
                    <input
                      type="date"
                      value={leaveForm.endDate}
                      onChange={(e) => setLeaveForm({ ...leaveForm, endDate: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Explanation / Reason:</label>
                  <textarea
                    value={leaveForm.reason}
                    onChange={(e) => setLeaveForm({ ...leaveForm, reason: e.target.value })}
                    rows={3}
                    placeholder="Please specify brief details for the class teacher..."
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 bg-white"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0077C8] hover:bg-blue-700 text-white font-bold rounded-xl transition text-xs shadow-md"
                >
                  Submit Guardian Leave Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
