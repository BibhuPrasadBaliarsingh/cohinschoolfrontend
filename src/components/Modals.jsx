import React, { useState } from "react";
import { Link } from "react-router-dom";
import img3604 from "../assets/DSC03604.JPG";
import img3611 from "../assets/DSC03611.JPG";
import img3612 from "../assets/DSC03612.JPG";
import img3616 from "../assets/DSC03616.JPG";
import img3622 from "../assets/DSC03622.JPG";
import img3671 from "../assets/DSC03671.JPG";
import img3681 from "../assets/DSC03681.JPG";
import img3684 from "../assets/DSC03684.JPG";
import {
  X,
  LogIn,
  KeyRound,
  ShieldCheck,
  Send,
  Quote,
  Briefcase,
  CheckCircle,
  CheckCircle2,
  ExternalLink,
  Loader2,
  Info,
} from "lucide-react";

const portalTheme = {
  parent: {
    title: "Parent Portal",
    icon: "heart",
    color: "rose",
    idLabel: "Parent ID / Registered Mobile",
    demoId: "PR-2026-0143",
    demoPass: "parent@123",
  },
  student: {
    title: "Student Portal",
    icon: "graduation-cap",
    color: "blue",
    idLabel: "Student ID / Admission No.",
    demoId: "CIS-STU-2291",
    demoPass: "student@123",
  },
  teacher: {
    title: "Teacher Portal",
    icon: "book-open",
    color: "emerald",
    idLabel: "Employee ID",
    demoId: "CIS-EMP-0087",
    demoPass: "teacher@123",
  },
  crm: {
    title: "Admin / CRM",
    icon: "shield",
    color: "violet",
    idLabel: "Staff / Admin ID",
    demoId: "CIS-ADM-0012",
    demoPass: "admin@123",
  },
  hostel: {
    title: "Hostel Portal",
    icon: "home",
    color: "amber",
    idLabel: "Warden ID",
    demoId: "CIS-WRD-0005",
    demoPass: "warden@123",
  },
  transport: {
    title: "Transport Portal",
    icon: "bus",
    color: "sky",
    idLabel: "Supervisor ID",
    demoId: "CIS-TRP-0021",
    demoPass: "transport@123",
  },
};

const modulesData = {
  crm: {
    title: "Admission CRM",
    icon: "users",
    desc: "This is where schools lose many admissions. Our CRM ensures every enquiry is captured and converted.",
    features: [
      "Lead Management from Website, Google Ads, Facebook, Instagram, WhatsApp, Phone & Walk-in",
      "Automated Follow-up Reminders",
      "Call Log & WhatsApp Integration",
      "SMS & Email Campaigns",
      "Counsellor Assignment & Lead Status Tracking",
      "Admission Reports & Conversion Rate Analytics",
      "Full Pipeline: New Lead → Contacted → Counselling → Campus Visit → Demo → Application → Documents → Fee → Confirmed",
    ],
  },
  parent: {
    title: "Parent Portal",
    icon: "heart",
    desc: "Complete visibility and control for parents.",
    features: [
      "Dashboard with Attendance overview",
      "Homework & Assignments tracking",
      "Notices & Circulars",
      "Fee Details & Online Fee Payment",
      "Report Card & Progress Reports",
      "Leave Application for child",
      "Teacher Communication",
      "Live Bus Tracking",
      "Timetable & Examination schedule",
    ],
  },
  student: {
    title: "Student Portal",
    icon: "graduation-cap",
    desc: "Everything a student needs in one place.",
    features: [
      "Attendance view",
      "Assignments & Homework submission",
      "Notes & Study Material",
      "Digital Library access",
      "Online Exams & Assessments",
      "Report Cards & Certificates",
      "Timetable & Event Calendar",
      "Performance Analytics",
    ],
  },
  teacher: {
    title: "Teacher Portal",
    icon: "book-open",
    desc: "Powerful tools for educators.",
    features: [
      "Class Management",
      "Attendance marking (biometric sync ready)",
      "Homework Upload & Tracking",
      "Student Performance insights",
      "Online Marks Entry",
      "Exam Management",
      "Timetable view",
      "Leave Application",
    ],
  },
  admin: {
    title: "Admin Dashboard",
    icon: "layout-dashboard",
    desc: "Complete control centre for school management.",
    features: [
      "Student Management",
      "Employee Management",
      "Admissions overview",
      "Fees & Revenue tracking",
      "Reports & Analytics",
      "Transport Management",
      "Hostel overview",
      "Visitor Management",
    ],
  },
  hrms: {
    title: "HRMS – Human Resource Management",
    icon: "briefcase",
    desc: "End-to-end employee lifecycle management.",
    features: [
      "Employee Profile & Documents",
      "Attendance & Biometric Integration",
      "Leave Management & Approval",
      "Salary Slip & Reimbursement",
      "Payroll (PF, ESI, TDS, Bonus, Overtime)",
      "Shift Management",
      "Recruitment, Offer Letter & Joining",
      "Performance Review & Appraisal",
      "Exit Process & ID Card Generation",
      "Bank Transfer integration",
    ],
  },
  finance: {
    title: "Finance Module",
    icon: "indian-rupee",
    desc: "Transparent and automated fee management.",
    features: [
      "Tuition Fees, Hostel Fees, Transport Fees",
      "Discounts & Scholarships management",
      "Online Payment Gateway (Razorpay)",
      "Automatic Receipts generation",
      "AI Fee Reminder via WhatsApp",
      "Outstanding & Collection reports",
    ],
  },
  transport: {
    title: "Transport Management",
    icon: "bus",
    desc: "Safety and visibility for every journey.",
    features: [
      "Bus & Route Management",
      "GPS Live Tracking",
      "Driver Details & Documents",
      "Student Pickup assignment",
      "Parent Live Tracking via App",
      "Route optimization",
    ],
  },
  hostel: {
    title: "Hostel Management",
    icon: "home",
    desc: "Digital oversight of residential life.",
    features: [
      "Room Allocation",
      "Hostel Fees tracking",
      "Attendance (biometric ready)",
      "Visitor Management",
      "Complaints & Resolution",
      "Warden Dashboard",
    ],
  },
  exam: {
    title: "Examination System",
    icon: "clipboard-check",
    desc: "From assessment to analytics.",
    features: [
      "Marks Entry & Grade calculation",
      "Result publication",
      "Hall Ticket generation",
      "Promotion rules",
      "Performance Analytics & Insights",
      "AI Attendance Analytics – Predict Absentees",
    ],
  },
  ai: {
    title: "AI-Powered Features",
    icon: "bot",
    desc: "Intelligence that works for the school 24×7.",
    features: [
      "AI Chatbot – Admission Support & general queries",
      "AI Voice Assistant – Talk to the Website",
      "AI Report Generator – Instant reports",
      "AI Attendance Analytics – Predict absentees",
      "AI Fee Reminder – Automatic WhatsApp messages",
      "Smart lead scoring in CRM",
    ],
  },
  apps: {
    title: "Mobile Applications",
    icon: "smartphone",
    desc: "Native experience on every device.",
    features: [
      "Parent App – notifications, bus tracking, fee payment",
      "Student App – homework, library, exams",
      "Teacher App – attendance, marks, communication",
      "Management App – real-time KPIs & approvals",
      "Built with Flutter for iOS & Android",
    ],
  },
};

const topicData = {
  academics: {
    title: "Academic Programs & Integrated JEE/NEET",
    tag: "Curriculum & Pedagogy",
    badge: "CBSE + Vidwan Classes",
    image: img3681,
    intro:
      "At Cohen International School, academics is structured as an integrated journey from Nursery to Class XII. We combine CBSE excellence with Vidwan Classes competitive mentorship.",
    sections: [
      {
        head: "Pre-Primary (Nursery to UKG)",
        text: "Play-based experiential learning, phonics, motor skills, sensory activities, and joyful curiosity building.",
      },
      {
        head: "Primary & Middle School (Classes I to VIII)",
        text: "Project-Based Learning (PBL), Cambridge English speech training, early coding & robotics, and Olympiad Foundation.",
      },
      {
        head: "High School (Classes IX & X)",
        text: "NCERT board syllabus combined with pre-foundation coaching for JEE, NEET, NTSE & Olympiads.",
      },
      {
        head: "Senior Secondary (Classes XI & XII)",
        text: "Integrated Coaching: Full JEE (Main & Advanced) and NEET medical coaching embedded in school hours with mock test series.",
      },
    ],
  },
  "smart-rooms": {
    title: "Smart Classrooms & AI Robotics Labs",
    tag: "Digital Learning Environment",
    badge: "Interactive AI Pods",
    image: img3684,
    intro:
      "Every classroom at CIS is equipped with high-definition interactive touch panels, digital 3D models, and high-speed internet, bringing abstract concepts to vivid life.",
    sections: [
      {
        head: "Interactive Touch Display Panels",
        text: "75-inch 4K multi-touch smart boards with digital note-taking, 3D science simulations, and recorded revision lectures.",
      },
      {
        head: "AI & Machine Learning Workstations",
        text: "Dedicated computer lab with Python, Scratch coding tools, IoT sensors, and machine learning kits for hands-on programming.",
      },
      {
        head: "Robotics & STEM Innovation Studio",
        text: "Arduino, Raspberry Pi, 3D printers, and robotic kits enabling students to build functional prototypes.",
      },
      {
        head: "Digital Content Library & AR Apps",
        text: "Access to 10,000+ interactive 3D visual models for Physics, Chemistry, Biology, and Mathematics.",
      },
    ],
  },
  facilities: {
    title: "10-Acre Campus Infrastructure & Sports",
    tag: "World-Class Amenities",
    badge: "Barunei Hills Location",
    image: img3622,
    intro:
      "Spread across 10 lush green acres near IIT Bhubaneswar, CIS offers a pollution-free, tranquil environment built for mental focus, sports, and holistic development.",
    sections: [
      {
        head: "2.5-Acre Sports Complex",
        text: "Full-sized football ground, turf cricket pitches, basketball courts, lawn tennis, badminton, and athletics track.",
      },
      {
        head: "Residential AC Hostels (Boys & Girls)",
        text: "Separate secure hostels with 24×7 Wardens, nutritious dining hall, indoor games, and daily evening study hours.",
      },
      {
        head: "GPS-Tracked Transport Fleet",
        text: "Air-conditioned buses covering all major routes in Bhubaneswar, Jatani, and Khordha with live app tracking.",
      },
      {
        head: "24×7 Health Centre & Medical Care",
        text: "In-house medical care room with resident nurse and doctor-on-call facility for boarders and day scholars.",
      },
    ],
  },
  admissions: {
    title: "Admissions, Eligibility & Fee Guidance",
    tag: "Session AY 2027-2028",
    badge: "Scholarships Available",
    image: img3671,
    intro:
      "Admissions are open for Nursery to Class XI. We seek curious, motivated students eager to learn in an integrated academic ecosystem.",
    sections: [
      {
        head: "Step 1: Online Application / Enquiry",
        text: "Submit the online application or registration form on this portal.",
      },
      {
        head: "Step 2: Campus Interaction & Assessment",
        text: "Child interaction for primary classes or a basic diagnostic assessment for Classes VI to XI.",
      },
      {
        head: "Step 3: Counselling & Document Verification",
        text: "Verification of birth certificate, previous report cards, and personal interaction with academic directors.",
      },
      {
        head: "Scholarships & Merit Awards",
        text: "Merit-based fee concessions for top scorers in Class X Board exams and state-level Olympiad rankers.",
      },
    ],
  },
  "smart-campus": {
    title: "Smart Campus ERP + CRM + AI Ecosystem",
    tag: "Digital Transformation",
    badge: "Powered by Briskode",
    image: img3616,
    intro:
      "Partnered with Briskode Technology, CIS operates a 100% paperless digital administration with real-time sync across parents, teachers, and management.",
    sections: [
      {
        head: "Admission CRM",
        text: "Automated lead management, instant follow-up alerts, and WhatsApp enquiry integration.",
      },
      {
        head: "Parent & Student Native Apps",
        text: "Check attendance, view fee receipts, track school bus live, and access homework in one tap.",
      },
      {
        head: "AI Attendance & Predictive Analytics",
        text: "Biometric student/staff attendance with AI alerts for absenteeism trends.",
      },
      {
        head: "Full ERP & HRMS System",
        text: "Payroll, library management, online exam marksheets, and digital fee gateway.",
      },
    ],
  },
  careers: {
    title: "Careers & Faculty Growth at CIS",
    tag: "Join Our Team",
    badge: "Free On-Campus Housing",
    image: img3611,
    intro:
      "We attract the brightest educators, researchers, and coaches in India by offering top-tier remuneration, campus housing, research grants, and career progression.",
    sections: [
      {
        head: "Competitive Compensation & Perks",
        text: "Seventh Pay Commission aligned salaries for senior faculty + performance incentives for JEE/NEET results.",
      },
      {
        head: "Free Residential Accommodation",
        text: "Fully furnished apartments on our 10-acre campus for resident wardens and faculty members.",
      },
      {
        head: "Continuous Professional Development (CPD)",
        text: "Regular workshops by CBSE master trainers, IIT professors, and AI education experts.",
      },
      {
        head: "Inspirational Work Culture",
        text: "State-of-the-art smart classrooms, digital teaching aids, and supportive management.",
      },
    ],
  },
};

const portalRoutes = {
  parent: { title: "ParentConnect Guardian Portal", path: "/parent/dashboard", role: "parent" },
  student: {
    title: "EduLearn Student Hub",
    path: "/student/dashboard",
    role: "student"
  },
  teacher: {
    title: "TeachFlow Faculty Portal",
    path: "/teacher/dashboard",
    role: "teacher"
  },
  crm: { title: "EduCRM Pro Admission Portal", path: "/admin/dashboard", role: "admin" },
  hostel: {
    title: "HostelFlow Management System",
    path: "/admin/dashboard",
    role: "admin"
  },
  transport: {
    title: "RouteSafe Transport System",
    path: "/admin/dashboard",
    role: "admin"
  },
};

export default function Modals({
  modalState,
  closeModal,
  openLoginModal,
  openPortalFrame,
  openAdmissionModal,
}) {
  const [loginSubmitting, setLoginSubmitting] = useState(false);

  if (!modalState) return null;

  const { type, data } = modalState;

  // 1. LOGIN MODAL
  if (type === "login") {
    const activeKey = data?.activeKey || "parent";
    const p = portalTheme[activeKey];

    const handleLoginSubmit = (e) => {
      e.preventDefault();
      setLoginSubmitting(true);
      setTimeout(() => {
        setLoginSubmitting(false);
        openPortalFrame(activeKey);
      }, 700);
    };

    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 modal-backdrop"
        onClick={closeModal}
      >
        <div
          className="glass-dark rounded-3xl w-full max-w-md shadow-2xl border border-gold-500/20 overflow-hidden max-h-[92vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Exact Background Image */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
            <img src="/bg.png" alt="" className="w-full h-full object-cover object-center" />
          </div>
          <div className="px-5 sm:px-6 py-5 flex items-center justify-between border-b border-white/10 bg-navy-950/60">
            <div className="flex items-center gap-3 min-w-0">
              <div className="bg-white px-2 py-1 rounded-xl shadow flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Cohen Logo"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-base sm:text-lg text-white font-semibold truncate">
                  CIS Digital Campus Login
                </h3>
                <p className="text-[11px] text-gold-400">
                  Choose your portal &amp; sign in
                </p>
              </div>
            </div>
            <button
              onClick={closeModal}
              className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition flex-shrink-0"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="px-5 sm:px-6 pt-5 grid grid-cols-6 gap-1.5 sm:gap-2">
            {Object.keys(portalTheme).map((key) => {
              const t = portalTheme[key];
              const active = key === activeKey;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => openLoginModal(key)}
                  title={t.title}
                  className={`flex flex-col items-center gap-1.5 p-2.5 rounded-xl border transition ${
                    active
                      ? `bg-${t.color}-500/20 border-${t.color}-400/60`
                      : "bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/10"
                  }`}
                >
                  <span
                    className={`text-[10px] font-semibold ${active ? "text-gold-400 font-bold" : "text-white/70"} leading-tight text-center`}
                  >
                    {t.title.replace(" Portal", "")}
                  </span>
                </button>
              );
            })}
          </div>

          <form className="p-5 sm:p-6 space-y-4" onSubmit={handleLoginSubmit}>
            <div>
              <label className="text-xs font-semibold text-white/90 block mb-1">
                {p.idLabel} *
              </label>
              <input
                required
                type="text"
                placeholder="Enter authorized user ID / email"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/60"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-white/90 block mb-1">
                Password *
              </label>
              <input
                required
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/60"
              />
            </div>

            <div className="flex items-center justify-between text-[11px]">
              <label className="flex items-center gap-2 text-white/70">
                <input
                  type="checkbox"
                  className="rounded border-white/30 bg-white/10"
                />{" "}
                Remember me
              </label>
              <button
                type="button"
                onClick={() => {
                  alert(
                    "Password reset link would be sent to your registered email/mobile.",
                  );
                }}
                className="text-gold-400 hover:text-gold-300"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loginSubmitting}
              className="w-full py-3.5 bg-gold-500 text-navy-900 font-semibold rounded-2xl hover:bg-gold-400 transition flex items-center justify-center gap-2 shadow-lg"
            >
              {loginSubmitting ? (
                <>
                  <Loader2 className="w-4.5 h-4.5 animate-spin" />{" "}
                  Authenticating...
                </>
              ) : (
                <>
                  <LogIn className="w-4.5 h-4.5" /> Login to {p.title}
                </>
              )}
            </button>
            <p className="text-[11px] text-center text-white/50">
              Secured &amp; encrypted • CIS Digital Campus
            </p>
          </form>
        </div>
      </div>
    );
  }

  // 2. ADMISSION MODAL
  if (type === "admission") {
    const mode = data?.mode || "apply";
    const isRegister = mode === "register";
    const title = isRegister
      ? "Student Registration Form for AY 2027-2028"
      : "Online Admission Application";
    const subtitle = isRegister
      ? "Register your seat early for the upcoming AY 2027-2028 academic batch."
      : "Complete application form for nursery to Class XI admissions.";

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(
        `Thank you! Your ${
          isRegister ? "Registration" : "Application"
        } details have been captured in the Admission CRM. An admission counsellor will reach out to you within 24 hours.`,
      );
      closeModal();
    };

    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 modal-backdrop"
        onClick={closeModal}
      >
        <div
          className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl"
          style={{ border: "1.5px solid rgba(201,162,39,0.25)" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── Premium hero header with campus photo ── */}
          <div className="relative h-44 sm:h-52 rounded-t-3xl overflow-hidden">
            <img
              src={img3671}
              alt="Cohen International School Campus"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 40%" }}
            />
            {/* Dark gradient overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(7,15,26,0.95) 0%, rgba(7,15,26,0.55) 55%, rgba(7,15,26,0.25) 100%)"
            }} />
            {/* Badge at top-left */}
            <div className="absolute top-4 left-4">
              <div className="bg-white/95 backdrop-blur px-2.5 py-1.5 rounded-xl shadow-lg flex items-center gap-2">
                <img src="/logo.png" alt="Cohen Logo" className="h-7 w-auto object-contain" />
              </div>
            </div>
            {/* Close button at top-right */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur flex items-center justify-center text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
            {/* Year badge */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2">
              <span style={{
                background: "linear-gradient(135deg,#C9A227,#E8C547)",
                color: "#0B1C2C",
                padding: "4px 16px",
                borderRadius: "999px",
                fontSize: "0.68rem",
                fontWeight: 800,
                letterSpacing: "0.09em",
                textTransform: "uppercase",
              }}>
                Admissions for AY 2027-2028
              </span>
            </div>
            {/* Title text over image at bottom */}
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
              <h3 className="font-display text-xl sm:text-2xl text-white font-bold leading-tight">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1">{subtitle}</p>
            </div>
          </div>

          <form className="p-6 md:p-8 space-y-6" onSubmit={handleSubmit}>
            <div style={{
              background: "linear-gradient(135deg, rgba(201,162,39,0.08) 0%, rgba(201,162,39,0.04) 100%)",
              border: "1px solid rgba(201,162,39,0.3)",
              padding: "14px 16px", borderRadius: "16px",
              display: "flex", alignItems: "center", gap: "12px",
              fontSize: "0.75rem", color: "#0B1C2C",
            }}>
              <ShieldCheck style={{ width: 20, height: 20, color: "#C9A227", flexShrink: 0 }} />
              <span style={{ fontWeight: 500 }}>
                CBSE Senior Secondary School • Integrated IIT-JEE &amp; NEET Coaching • 10-Acre Green Campus, Bhubaneswar
              </span>
            </div>

            {/* Student Details */}
            <div>
              <h4 className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-3">
                1. Student Details
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-navy-800 block mb-1">
                    Student Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                    placeholder="e.g. Aarav Sharma"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-navy-800 block mb-1">
                    Gender *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  >
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-navy-800 block mb-1">
                    Date of Birth *
                  </label>
                  <input
                    required
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-navy-800 block mb-1">
                    Applying for Class *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  >
                    <option value="">Select Grade</option>
                    <option>Nursery</option>
                    <option>LKG</option>
                    <option>UKG</option>
                    <option>Class I</option>
                    <option>Class II</option>
                    <option>Class III</option>
                    <option>Class IV</option>
                    <option>Class V</option>
                    <option>Class VI (Foundation Prep)</option>
                    <option>Class VII (Foundation Prep)</option>
                    <option>Class VIII (Foundation Prep)</option>
                    <option>Class IX (Pre-Foundation)</option>
                    <option>Class X (Board + Pre-Foundation)</option>
                    <option>Class XI (Science - PCM + JEE)</option>
                    <option>Class XI (Science - PCB + NEET)</option>
                    <option>Class XI (Commerce Stream)</option>
                    <option>Class XI (Humanities / Arts)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Academic Career & Stream */}
            <div>
              <h4 className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-3">
                2. Academic Career & Goal
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-navy-800 block mb-1">
                    Academic Career Stream *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  >
                    <option value="">Select Stream / Focus</option>
                    <option>General Primary (Classes I-V)</option>
                    <option>Foundation Programme (Classes VI-VIII)</option>
                    <option>Pre-JEE / Pre-NEET Foundation (IX-X)</option>
                    <option>Integrated IIT-JEE Coaching (PCM)</option>
                    <option>Integrated NEET Coaching (PCB)</option>
                    <option>Commerce & Management Focus</option>
                    <option>Humanities & Arts</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-navy-800 block mb-1">
                    Career Goal / Aspiration
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50">
                    <option value="">Select Career Goal</option>
                    <option>Engineering (IIT/NIT/BITS)</option>
                    <option>Medical (AIIMS/NEET)</option>
                    <option>Civil Services / IAS</option>
                    <option>Robotics & Artificial Intelligence</option>
                    <option>Business & Entrepreneurship</option>
                    <option>Sports & Athletics</option>
                    <option>Creative Arts & Design</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-navy-800 block mb-1">
                    Current School & Board Name *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                    placeholder="e.g. DAV Public School, CBSE"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-navy-800 block mb-1">
                    Schooling Type Preference *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  >
                    <option value="">Select Option</option>
                    <option>Day Scholar (With Transport)</option>
                    <option>Day Scholar (Self Transport)</option>
                    <option>Residential AC Hostel (Full Boarding)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Parent Contact Details */}
            <div>
              <h4 className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-3">
                3. Parent / Guardian Contact
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-navy-800 block mb-1">
                    Parent / Guardian Name *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                    placeholder="Father's / Mother's name"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-navy-800 block mb-1">
                    Mobile Number (WhatsApp Enabled) *
                  </label>
                  <input
                    required
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-navy-800 block mb-1">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                    placeholder="parent@example.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-navy-800 block mb-1">
                    City & State *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                    placeholder="e.g. Bhubaneswar, Odisha"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-navy-900 text-white font-semibold rounded-2xl hover:bg-navy-800 transition flex items-center justify-center gap-2 shadow-lg"
            >
              <Send className="w-5 h-5 text-gold-400" /> Submit Form → Instant
              CRM Capture
            </button>
            <p className="text-xs text-center text-navy-500">
              Your details are transmitted securely to the Cohen Admission Desk.
              A senior counsellor will contact you shortly.
            </p>
          </form>
        </div>
      </div>
    );
  }

  // 3. MODULE MODAL
  if (type === "module") {
    const rawKey = data?.moduleKey;
    const normalizedKey =
      rawKey === "teacher-erp"
        ? "teacher"
        : rawKey === "student-portal"
        ? "student"
        : rawKey === "parent-app"
        ? "parent"
        : rawKey === "transport-tms"
        ? "transport"
        : rawKey === "fee-gateway"
        ? "finance"
        : rawKey === "hostel-management"
        ? "hostel"
        : rawKey;

    const m = modulesData[normalizedKey] || modulesData[rawKey];
    if (!m) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
        onClick={closeModal}
      >
        <div
          className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-navy-900 px-6 py-5 flex items-center justify-between rounded-t-3xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center text-navy-900 font-bold">
                ★
              </div>
              <h3 className="font-display text-xl text-white">{m.title}</h3>
            </div>
            <button
              onClick={closeModal}
              className="text-white/70 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-6">
            <p className="text-navy-700/80 mb-6">{m.desc}</p>
            <ul className="space-y-3 mb-6">
              {m.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-navy-800">{f}</span>
                </li>
              ))}
            </ul>

            {normalizedKey === "student" ? (
              <Link
                to="/student/dashboard"
                onClick={closeModal}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg transition"
              >
                <ExternalLink className="w-4 h-4" /> Launch Public Student Portal →
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => {
                  closeModal();
                  openLoginModal?.(normalizedKey);
                }}
                className="w-full py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg transition"
              >
                <LogIn className="w-4.5 h-4.5 text-gold-400" /> Open {m.title}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 4. PORTAL FRAME MODAL
  if (type === "portalFrame") {
    const key = data?.portalKey || "parent";
    const portal = portalRoutes[key] || portalRoutes.parent;

    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 modal-backdrop"
        onClick={closeModal}
      >
        <div
          className="bg-navy-900 rounded-3xl w-full max-w-6xl h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-gold-500/20"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Controls */}
          <div className="bg-navy-950 px-4 sm:px-6 py-3 flex items-center justify-between border-b border-white/10 flex-shrink-0">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <h3 className="font-bold text-white text-sm sm:text-base">
                {portal.title}
              </h3>
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-400 text-[10px] uppercase font-bold border border-gold-500/30">
                In-Website Live Demo
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-1 bg-white/10 p-1 rounded-xl">
                {[
                  "parent",
                  "student",
                  "teacher",
                  "crm",
                  "hostel",
                  "transport",
                ].map((pk) => (
                  <button
                    key={pk}
                    onClick={() => openPortalFrame(pk)}
                    className={`px-2.5 py-1 text-xs text-white hover:bg-white/10 rounded-lg font-medium transition capitalize ${
                      key === pk ? "bg-gold-500 text-navy-900 font-bold" : ""
                    }`}
                  >
                    {pk}
                  </button>
                ))}
              </div>

              <Link
                to={portal.path}
                onClick={closeModal}
                className="px-3 py-1.5 bg-gold-500 text-navy-900 rounded-xl text-xs font-bold hover:bg-gold-400 transition flex items-center gap-1"
              >
                Open Dashboard <ExternalLink className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={closeModal}
                className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Native React Portal Live View */}
          <div className="flex-1 w-full bg-navy-950 p-6 sm:p-10 text-white overflow-y-auto flex flex-col items-center justify-center text-center">
            <div className="max-w-md mx-auto space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-3xl mx-auto shadow-xl">
                🛡
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                {portal.title}
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                You are viewing the interactive Single Sign-On portal demo. Click below to log in or launch the full-screen role-based React dashboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={() => openLoginModal(key)}
                  className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-sm transition shadow-lg"
                >
                  Log In to {key.toUpperCase()} Desk
                </button>
                <Link
                  to={portal.path}
                  onClick={closeModal}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition"
                >
                  Direct Dashboard View
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 5. CHAIRMAN MODAL
  if (type === "chairman") {
    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop"
        onClick={closeModal}
      >
        <div
          className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-cream-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-navy-900 px-6 py-5 flex items-center justify-between rounded-t-3xl border-b border-white/10 z-10">
            <div className="flex items-center gap-3">
              <div className="bg-gold-500 p-2 rounded-xl text-navy-900">
                <Quote className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-xl text-white font-semibold">
                  Founder Chairman’s Desk
                </h3>
              </div>
            </div>
            <button
              onClick={closeModal}
              className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 md:p-8 space-y-6 text-navy-800">
            <div className="flex flex-col md:flex-row gap-6 items-center bg-cream-100 p-6 rounded-2xl border border-cream-200">
              <img
                src="/chairman.jpg"
                alt="Chairman Portrait"
                className="w-32 h-32 rounded-2xl object-cover shadow-lg border-2 border-gold-500 flex-shrink-0"
              />
              <div>
                <h4 className="font-display text-2xl text-navy-900 font-bold mb-1">
                  Jyoti Ranjan Tripathy
                </h4>
                <p className="text-gold-600 text-xs font-semibold uppercase tracking-wider mb-2">
                  Founder & Chairman, Cohen International School
                </p>
                <p className="text-xs text-navy-700 leading-relaxed">
                  B.Tech (Honours), IIT Kharagpur | Educationist & Visionary
                  behind integrated schooling models in Odisha.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-navy-700/90 leading-relaxed font-sans">
              <p>
                CIS is a unique school, which is a temple of learning and a
                stepping stone to every kid's dreams. Our first step paves the
                road to our destination and hence, beginnings do matter a lot.
                My humble beginning with a passion to learn, courage to face
                obstacles, 'never say never' attitude laid the foundation for my
                life's principles and my vision. As a kid, I always felt the
                need to have an educational institution that not only offers
                world-class academics, but also helps students pursue their
                dreams, whether it is in academics or art or sports or
                management. CIS is the brainchild of my vision and the
                relentless efforts of like-minded people. I urge you all to pay
                a visit to our lovely campus. Our school will leave no stone
                unturned to groom your wards and shape their future well. We
                strive to provide quality education with equal importance to
                core human values. Our aim is to see our students grow up as
                self-reliant, confident and content individuals.
              </p>
              <p>
                "The woods are lovely, dark and deep, But I have promises to
                keep, And miles to go before I sleep, And miles to go before I
                sleep." - Robert Frost
              </p>
            </div>

            <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
              <div>
                <p className="font-display text-lg text-navy-900 font-bold">
                  Er. Jyoti Ranjan Tripathy
                </p>
                <p className="text-xs text-navy-500">
                  Founder Chairman, Cohen Educational Trust
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 6. CAREER MODAL
  if (type === "career") {
    const role = data?.role || "General Faculty Application";

    const handleCareerSubmit = (e) => {
      e.preventDefault();
      alert(
        `Thank you for applying! Your application for '${role}' has been logged in our HRMS system. Our recruitment desk will review your profile and contact you.`,
      );
      closeModal();
    };

    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop"
        onClick={closeModal}
      >
        <div
          className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-cream-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-navy-900 px-6 py-5 flex items-center justify-between rounded-t-3xl border-b border-white/10 z-10">
            <div className="flex items-center gap-3">
              <div className="bg-gold-500 p-2 rounded-xl text-navy-900">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl text-white font-semibold">
                  Faculty & Staff Application
                </h3>
                <p className="text-xs text-gold-400">Position: {role}</p>
              </div>
            </div>
            <button
              onClick={closeModal}
              className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form className="p-6 md:p-8 space-y-5" onSubmit={handleCareerSubmit}>
            <div>
              <label className="text-xs font-semibold text-navy-800 block mb-1">
                Position Applied For *
              </label>
              <input
                type="text"
                readOnly
                value={role}
                className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-sm font-semibold text-navy-900 cursor-not-allowed"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-navy-800 block mb-1">
                  Applicant Full Name *
                </label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-navy-800 block mb-1">
                  Mobile Number *
                </label>
                <input
                  required
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-navy-800 block mb-1">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="name@domain.com"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-navy-800 block mb-1">
                  Highest Qualification *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                >
                  <option value="">Select Qualification</option>
                  <option>B.Tech / B.E / M.Tech</option>
                  <option>M.Sc (Physics/Chem/Math/Bio)</option>
                  <option>M.A / B.A + B.Ed</option>
                  <option>B.Ed / M.Ed</option>
                  <option>Ph.D / Doctorate</option>
                  <option>Montessori / NTT Certified</option>
                  <option>B.P.Ed / M.P.Ed (Sports)</option>
                  <option>Graduate / Postgraduate (Other)</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-navy-800 block mb-1">
                  Teaching / Work Experience (Years) *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                >
                  <option value="">Select Experience</option>
                  <option>Fresher (0 - 1 Year)</option>
                  <option>1 to 3 Years</option>
                  <option>3 to 5 Years</option>
                  <option>5 to 10 Years</option>
                  <option>10+ Years (Senior Faculty)</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-navy-800 block mb-1">
                  Current City / Location *
                </label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="e.g. Bhubaneswar, Cuttack"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-navy-800 block mb-1">
                Link to Resume / LinkedIn Profile
              </label>
              <input
                type="url"
                className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                placeholder="Google Drive URL / LinkedIn link"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-navy-800 block mb-1">
                Key Achievements / Brief Cover Note
              </label>
              <textarea
                rows="3"
                className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                placeholder="Mention JEE/NEET results produced, awards, or subject expertise..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-navy-900 text-white font-semibold rounded-2xl hover:bg-navy-800 transition flex items-center justify-center gap-2 shadow-lg"
            >
              <CheckCircle className="w-5 h-5 text-gold-400" /> Submit Job
              Application → HRMS Log
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 7. DEDICATED TOPIC MODAL
  if (type === "topic") {
    const topicKey = data?.topicKey || "academics";
    const t = topicData[topicKey] || topicData.academics;

    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop"
        onClick={closeModal}
      >
        <div
          className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-cream-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-3xl">
            <img
              src={t.image}
              alt={t.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/60 to-transparent"></div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-navy-900/80 text-white p-2 rounded-full hover:bg-navy-900 transition"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-3 py-1 rounded-full bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                {t.badge}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-white font-bold leading-tight">
                {t.title}
              </h3>
              <p className="text-white/80 text-xs mt-1">{t.tag}</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-navy-800 text-base leading-relaxed font-medium bg-cream-100 p-4 rounded-2xl border border-cream-200">
              {t.intro}
            </p>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold-600">
                Key Highlights & Modules
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {t.sections.map((s, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white border border-cream-200 shadow-sm"
                  >
                    <h5 className="font-semibold text-navy-900 text-sm mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                      {s.head}
                    </h5>
                    <p className="text-xs text-navy-700/80 leading-relaxed">
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-cream-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-navy-600">
                <Info className="w-4 h-4 text-gold-600" />
                <span>
                  Need personal guidance? Speak with our admission desk.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    closeModal();
                    openAdmissionModal("register");
                  }}
                  className="px-5 py-2.5 bg-white border border-navy-900 text-navy-900 text-xs font-semibold rounded-full hover:bg-cream-100 transition"
                >
                  Register Interest
                </button>
                <button
                  onClick={() => {
                    closeModal();
                    openAdmissionModal("apply");
                  }}
                  className="px-5 py-2.5 bg-gold-500 text-navy-900 text-xs font-bold rounded-full hover:bg-gold-400 transition shadow"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
