import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
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
  LogOut,
  CheckCircle2,
  Award,
  Download,
  Printer,
  TrendingUp,
  Star,
  ShieldCheck,
  FileCheck,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  Target,
  Megaphone,
  Search,
  Filter,
  AlertCircle,
  Info,
  Paperclip,
  Tag,
  Check,
  Share2,
  Bookmark,
  Eye,
  Layers,
  Phone,
  Mail,
  MapPin,
  Shield,
  Key,
  Lock,
  QrCode,
  CreditCard,
  Heart,
  Bus,
  Home,
  AlertTriangle,
  FolderCheck,
  FileCode,
  FileUp,
  CalendarCheck,
  FileSpreadsheet,
  Plus,
  XCircle,
  MessageSquare,
  Trash2,
} from "lucide-react";

export default function StudentDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTimetableDay, setSelectedTimetableDay] = useState("Mon");

  // Selected Exam for Results View
  const [selectedExamKey, setSelectedExamKey] = useState("midterm");
  const [revalSubmitted, setRevalSubmitted] = useState(false);

  // Examinations Section State
  const [examTabFilter, setExamTabFilter] = useState("All");
  const [selectedExamForSchedule, setSelectedExamForSchedule] = useState("pa2");
  const [activeAdmitCardModal, setActiveAdmitCardModal] = useState(null);
  const [activeSyllabusModal, setActiveSyllabusModal] = useState(null);

  // Notices & Circulars State
  const [selectedNoticeCategory, setSelectedNoticeCategory] = useState("All");
  const [noticeSearchQuery, setNoticeSearchQuery] = useState("");
  const [selectedPriorityFilter, setSelectedPriorityFilter] = useState("All");
  const [activeNoticeModal, setActiveNoticeModal] = useState(null);
  const [readNotices, setReadNotices] = useState([1, 2]);

  // Profile Section State & Sub-tabs
  const [activeProfileTab, setActiveProfileTab] = useState("idcard");
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordMsg, setPasswordMsg] = useState("");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  // Homework & Assignment Management State
  const [homeworkFilterStatus, setHomeworkFilterStatus] = useState("All");
  const [homeworkSubjectFilter, setHomeworkSubjectFilter] = useState("All");
  const [homeworkSearch, setHomeworkSearch] = useState("");
  const [activeSubmitModal, setActiveSubmitModal] = useState(null);
  const [activeFeedbackModal, setActiveFeedbackModal] = useState(null);
  const [selectedSubmissionFileName, setSelectedSubmissionFileName] = useState("");
  const [submissionRemarks, setSubmissionRemarks] = useState("");
  const [isSubmittingTask, setIsSubmittingTask] = useState(false);

  // Comprehensive Student Profile & Identity Dataset
  const [studentInfo, setStudentInfo] = useState({
    name: user?.name || "Aarav Mohanty",
    studentId: "STU-2026-0812",
    rfidCode: "RFID-88492-CH",
    admissionNo: "ADM-2022-4410",
    classGroup: "VIII-A",
    roll: "00001",
    academicSession: "2025-26",
    stream: "Science & Mathematics (JEE Prep)",
    targetExam: "JEE Main & Advanced 2028",
    dob: "2012-05-14",
    gender: "Male",
    bloodGroup: "O+",
    joiningDate: "15 August 2022",
    classTeacher: "Smt. Priya Mohanty",
    house: "Emerald House (Green)",
    status: "Active / Enrolled",

    // Contact & Residence
    email: user?.email || "aarav.mohanty@cohenschool.edu.in",
    phone: "+91 98123 45678",
    emergencyContact: "+91 94370 12345",
    emergencyContactPerson: "Dr. Alok Mohanty (Father)",
    address: "Plot 42, Silicon Hills, Sailashree Vihar, Patia, Bhubaneswar, Odisha - 751024",

    // Parent Details
    fatherName: "Dr. Alok Mohanty",
    fatherOccupation: "Senior Consultant (Cardiology)",
    fatherPhone: "+91 94370 12345",
    fatherEmail: "alok.mohanty@health.odisha.gov.in",
    motherName: "Smt. Sunita Mohanty",
    motherOccupation: "Associate Professor (Physics)",
    motherPhone: "+91 94370 67890",
    motherEmail: "sunita.mohanty@utkal.edu.in",

    // Campus Services & Transport
    boardingType: "Day Scholar (School Bus)",
    busRoute: "Route #4 (Patia - Sailashree Vihar - Campus)",
    busStop: "Sailashree Vihar Square (06:50 AM)",
    busDriver: "Mr. Ranjan Sahoo (+91 98765 11223)",
    lockerNo: "LK-0812 (Block B, 2nd Floor)",

    // Medical Profile
    allergies: "None reported",
    chronicCondition: "None",
    doctorConsent: "Authorized for Campus Clinic First-Aid & Emergency Care",
    height: "158 cm",
    weight: "48 kg",
  });

  // Temporary Edit Form State
  const [tempProfileData, setTempProfileData] = useState({ ...studentInfo });

  // Start Editing Profile
  const handleStartEdit = () => {
    setTempProfileData({ ...studentInfo });
    setIsEditingProfile(true);
  };

  // Cancel Editing Profile
  const handleCancelEdit = () => {
    setTempProfileData({ ...studentInfo });
    setIsEditingProfile(false);
  };

  // Save Profile Changes
  const handleSaveProfile = (e) => {
    e.preventDefault();
    setStudentInfo({ ...tempProfileData });
    setIsEditingProfile(false);
    alert("Profile details updated successfully!");
  };

  // Handle Password Update Simulation
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (!passwordForm.newPassword || passwordForm.newPassword.length < 6) {
      setPasswordMsg("New password must be at least 6 characters long.");
      return;
    }
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordMsg("New passwords do not match.");
      return;
    }
    setPasswordMsg("Password updated successfully!");
    setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    setTimeout(() => setPasswordMsg(""), 4000);
  };

  // Comprehensive Examinations & Schedules Dataset
  const examinationList = [
    {
      id: "pa2",
      title: "Periodic Assessment 2 (PA-2) & CBSE Pre-Board Phase 1",
      term: "CBSE Term 2 • 2025–26",
      shortName: "PA-2 Pre-Board",
      status: "Upcoming",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      dateRange: "15 Sep 2026 – 24 Sep 2026",
      reportingTime: "07:45 AM Sharp",
      examTiming: "08:30 AM – 11:30 AM (3 Hours)",
      center: "Cohen International School Main Campus • Examination Block A",
      centerCode: "CIS-BBSR-048",
      hallSeat: "Exam Hall 2 • Row C • Desk #18",
      admitCardAvailable: true,
      instructions:
        "Admit card and institutional ID card mandatory. 15 minutes of question paper reading time (08:15 AM to 08:30 AM). Smartwatches and digital calculators strictly prohibited.",
      dateSheetPdf: "CIS_PA2_Official_DateSheet_2026.pdf",
      dateSheetSize: "1.4 MB",
      papers: [
        {
          date: "15 Sep 2026",
          day: "Tuesday",
          code: "041",
          subject: "Mathematics",
          timing: "08:30 AM - 11:30 AM",
          room: "Hall 2 (Desk 18)",
          maxMarks: 80,
          syllabus: "Ch 1 to Ch 6: Linear Equations in Two Variables, Rational Numbers, Understanding Quadrilaterals, Data Handling, Squares & Square Roots.",
        },
        {
          date: "17 Sep 2026",
          day: "Thursday",
          code: "086",
          subject: "Science (Physics & Chemistry)",
          timing: "08:30 AM - 11:30 AM",
          room: "Hall 2 (Desk 18)",
          maxMarks: 80,
          syllabus: "Motion & Laws of Motion, Gravitation, Atoms & Molecules, Structure of the Atom, Chemical Reactions & Equations.",
        },
        {
          date: "19 Sep 2026",
          day: "Saturday",
          code: "184",
          subject: "English Language & Literature",
          timing: "08:30 AM - 11:30 AM",
          room: "Hall 2 (Desk 18)",
          maxMarks: 80,
          syllabus: "Reading Comprehension, Formal Letters, Analytical Paragraph Writing, Tenses, Modals, First Flight Chapters 1 to 5.",
        },
        {
          date: "22 Sep 2026",
          day: "Tuesday",
          code: "087",
          subject: "Social Science",
          timing: "08:30 AM - 11:30 AM",
          room: "Hall 2 (Desk 18)",
          maxMarks: 80,
          syllabus: "History (Colonialism & City), Geography (Resources & Agriculture), Civics (The Indian Constitution & Judiciary).",
        },
        {
          date: "24 Sep 2026",
          day: "Thursday",
          code: "165",
          subject: "Computer Applications & AI",
          timing: "08:30 AM - 10:30 AM",
          room: "Computer Lab 04",
          maxMarks: 50,
          syllabus: "Python Lists & Loops, String Methods, Cyber Safety, AI Ethics & Machine Learning Basics.",
        },
      ],
    },
    {
      id: "vidwan_jee5",
      title: "Vidwan IIT-JEE Integrated National Benchmark Test #5",
      term: "Vidwan National Talent Series",
      shortName: "Vidwan JEE Test #5",
      status: "Upcoming",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      dateRange: "03 Oct 2026",
      reportingTime: "08:15 AM",
      examTiming: "09:00 AM – 12:00 PM (3 Hours CBT)",
      center: "Vidwan Advanced Computer Testing Facility • Lab 02",
      centerCode: "VID-JEE-882",
      hallSeat: "CBT Terminal #44",
      admitCardAvailable: true,
      instructions:
        "Computer-based test simulation strictly on NTA JEE Main pattern (+4 / -1 marking scheme). 75 total questions across Physics, Chemistry, and Mathematics.",
      dateSheetPdf: "Vidwan_JEE_Benchmark5_Circular.pdf",
      dateSheetSize: "920 KB",
      papers: [
        {
          date: "03 Oct 2026",
          day: "Saturday",
          code: "JEE-PCM",
          subject: "Physics + Chemistry + Mathematics (Integrated)",
          timing: "09:00 AM - 12:00 PM",
          room: "CBT Terminal #44",
          maxMarks: 300,
          syllabus: "Physics: 2D Kinematics, Newton's Laws, Work-Energy. Chemistry: Thermodynamics & Gaseous State. Mathematics: Complex Numbers & Quadratic Equations.",
        },
      ],
    },
    {
      id: "midterm",
      title: "Mid-Term Examination 2026–27 (CBSE Term 1)",
      term: "CBSE Term 1 • 2025–26",
      shortName: "Mid-Term Exam",
      status: "Completed",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      dateRange: "10 Sep 2026 – 22 Sep 2026",
      reportingTime: "07:45 AM",
      examTiming: "08:30 AM – 11:30 AM",
      center: "Cohen International School Main Campus",
      centerCode: "CIS-BBSR-048",
      hallSeat: "Exam Hall 1 • Desk #12",
      admitCardAvailable: true,
      instructions: "Term 1 evaluation completed and audited by CBSE Regional Cell.",
      dateSheetPdf: "MidTerm_Official_DateSheet.pdf",
      dateSheetSize: "1.1 MB",
      resultSummary: "Score: 472/500 (94.4%) • Grade A1 • Rank #2",
      papers: [
        { date: "10 Sep 2026", day: "Monday", code: "041", subject: "Mathematics", timing: "08:30 - 11:30 AM", room: "Hall 1", maxMarks: 80, syllabus: "Full Term-1 CBSE syllabus" },
        { date: "13 Sep 2026", day: "Thursday", code: "086", subject: "Science (Physics/Chem)", timing: "08:30 - 11:30 AM", room: "Hall 1", maxMarks: 80, syllabus: "Full Term-1 CBSE syllabus" },
        { date: "16 Sep 2026", day: "Sunday", code: "184", subject: "English Core", timing: "08:30 - 11:30 AM", room: "Hall 1", maxMarks: 80, syllabus: "Full Term-1 CBSE syllabus" },
        { date: "19 Sep 2026", day: "Wednesday", code: "087", subject: "Social Science", timing: "08:30 - 11:30 AM", room: "Hall 1", maxMarks: 80, syllabus: "Full Term-1 CBSE syllabus" },
        { date: "22 Sep 2026", day: "Saturday", code: "165", subject: "Computer Science", timing: "08:30 - 10:30 AM", room: "Lab 04", maxMarks: 80, syllabus: "Python & Cyber Safety" },
      ],
    },
    {
      id: "pa1",
      title: "Periodic Assessment 1 (PA-1 / Unit Test)",
      term: "Formative Unit Evaluation",
      shortName: "PA-1 Unit Test",
      status: "Completed",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      dateRange: "15 Jul 2026 – 20 Jul 2026",
      reportingTime: "08:00 AM",
      examTiming: "08:30 AM – 10:00 AM (90 Mins)",
      center: "Classroom Block A (Section VIII-A)",
      centerCode: "CIS-BBSR-048",
      hallSeat: "Room 12 • Desk #01",
      admitCardAvailable: false,
      instructions: "Unit assessment completed.",
      dateSheetPdf: "PA1_DateSheet_July.pdf",
      dateSheetSize: "680 KB",
      resultSummary: "Score: 186/200 (93.0%) • Grade A1 • Rank #3",
      papers: [
        { date: "15 Jul 2026", day: "Wednesday", code: "041", subject: "Mathematics", timing: "08:30 - 10:00 AM", room: "Room 12", maxMarks: 40, syllabus: "Rational Numbers & Linear Equations" },
        { date: "17 Jul 2026", day: "Friday", code: "086", subject: "Physics & Chemistry", timing: "08:30 - 10:00 AM", room: "Room 12", maxMarks: 40, syllabus: "Units, Measurements & Chemical Matter" },
        { date: "20 Jul 2026", day: "Monday", code: "184", subject: "English Core", timing: "08:30 - 10:00 AM", room: "Room 12", maxMarks: 40, syllabus: "Comprehension & Grammar" },
      ],
    },
    {
      id: "annual2027",
      title: "CBSE Annual Board Final Examination 2027",
      term: "CBSE Annual Session Final 2026–27",
      shortName: "Annual CBSE Finals",
      status: "Scheduled",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
      dateRange: "15 Feb 2027 – 18 Mar 2027",
      reportingTime: "09:45 AM Sharp",
      examTiming: "10:30 AM – 01:30 PM (3 Hours)",
      center: "CBSE Designated Regional Examination Center #2104",
      centerCode: "CBSE-OD-2104",
      hallSeat: "Will be allocated with CBSE Board Admit Card in Jan 2027",
      admitCardAvailable: false,
      instructions:
        "Official CBSE Annual Class VIII Final Evaluation. Admit cards will be distributed following the completion of Pre-Board Phase 2.",
      dateSheetPdf: "CBSE_Annual_Tentative_Schedule_2027.pdf",
      dateSheetSize: "1.8 MB",
      papers: [
        { date: "15 Feb 2027", day: "Monday", code: "041", subject: "Mathematics", timing: "10:30 AM - 01:30 PM", room: "Center #2104", maxMarks: 80, syllabus: "Complete 100% CBSE Class VIII curriculum" },
        { date: "20 Feb 2027", day: "Saturday", code: "086", subject: "Science", timing: "10:30 AM - 01:30 PM", room: "Center #2104", maxMarks: 80, syllabus: "Complete 100% CBSE Class VIII curriculum" },
        { date: "25 Feb 2027", day: "Thursday", code: "184", subject: "English Language & Literature", timing: "10:30 AM - 01:30 PM", room: "Center #2104", maxMarks: 80, syllabus: "Complete 100% CBSE Class VIII curriculum" },
        { date: "02 Mar 2027", day: "Tuesday", code: "087", subject: "Social Science", timing: "10:30 AM - 01:30 PM", room: "Center #2104", maxMarks: 80, syllabus: "Complete 100% CBSE Class VIII curriculum" },
        { date: "08 Mar 2027", day: "Monday", code: "165", subject: "Computer Applications", timing: "10:30 AM - 12:30 PM", room: "Center #2104", maxMarks: 50, syllabus: "Complete 100% CBSE Class VIII curriculum" },
      ],
    },
  ];

  // Filtered Examination List
  const filteredExamList = examinationList.filter((ex) => {
    if (examTabFilter === "All") return true;
    if (examTabFilter === "Upcoming") return ex.status === "Upcoming";
    if (examTabFilter === "Completed") return ex.status === "Completed";
    if (examTabFilter === "Scheduled") return ex.status === "Scheduled";
    return true;
  });

  const currentScheduleExam = examinationList.find((e) => e.id === selectedExamForSchedule) || examinationList[0];

  // Homework Assignments Dataset
  const [homeworkList, setHomeworkList] = useState([
    {
      id: 1,
      title: "Linear Equations in Two Variables: Graphical & Algebraic Methods",
      subject: "Mathematics",
      classTag: "Class VIII-A",
      teacher: "Smt. Priya Mohanty",
      assignedDate: "21 Aug 2026",
      dueDate: "26 Aug 2026",
      status: "Pending",
      priority: "Urgent",
      maxMarks: 20,
      obtainedMarks: null,
      grade: null,
      instructions:
        "Complete Exercise 2.3 & 2.4 from NCERT Exemplar. Solve questions 1 to 18 showing all step-by-step substitution calculations and Cartesian coordinate plots. Attach clear PDF scan.",
      worksheetFile: "Maths_Linear_Equations_Ex2.3.pdf",
      worksheetSize: "1.2 MB",
      submittedFile: null,
      submittedAt: null,
      studentNotes: null,
      facultyFeedback: null,
      gradedFile: null,
    },
    {
      id: 2,
      title: "Vidwan Physics DPP #14: 2D Kinematics & Projectile Trajectory Calculations",
      subject: "Physics",
      classTag: "Vidwan JEE Prep",
      teacher: "Dr. R. K. Mishra",
      assignedDate: "22 Aug 2026",
      dueDate: "27 Aug 2026",
      status: "Pending",
      priority: "High",
      maxMarks: 30,
      obtainedMarks: null,
      grade: null,
      instructions:
        "Solve all 25 advanced multi-correct and numerical response problems from Vidwan Kinematics Module 2. Ensure clear vector decomposition for oblique launch angles.",
      worksheetFile: "Vidwan_DPP_14_Projectile_Motion.pdf",
      worksheetSize: "880 KB",
      submittedFile: null,
      submittedAt: null,
      studentNotes: null,
      facultyFeedback: null,
      gradedFile: null,
    },
    {
      id: 3,
      title: "Chemical Reactions, Balancing & Oxidation-Reduction Problem Sheet",
      subject: "Chemistry",
      classTag: "Class VIII-A",
      teacher: "Dr. S. Das",
      assignedDate: "18 Aug 2026",
      dueDate: "23 Aug 2026",
      status: "Submitted",
      priority: "Normal",
      maxMarks: 20,
      obtainedMarks: null,
      grade: null,
      instructions:
        "Balance all 20 chemical equations and identify oxidizing vs reducing agents for reactions in Chapter 3.",
      worksheetFile: "Chemistry_Reactions_Practice.pdf",
      worksheetSize: "950 KB",
      submittedFile: "aarav_chemistry_ch3_balance.pdf",
      submittedAt: "21 Aug 2026, 06:40 PM",
      studentNotes: "Completed all 20 balancing equations with detailed redox half-reaction breakdowns.",
      facultyFeedback: "Submission received. Faculty evaluation in progress.",
      gradedFile: null,
    },
    {
      id: 4,
      title: "Quadratic Formula, Discriminant Nature of Roots & Word Problems",
      subject: "Mathematics",
      classTag: "Class VIII-A",
      teacher: "Smt. Priya Mohanty",
      assignedDate: "14 Aug 2026",
      dueDate: "18 Aug 2026",
      status: "Graded",
      priority: "Normal",
      maxMarks: 20,
      obtainedMarks: 19,
      grade: "A1 (95%)",
      instructions:
        "Calculate discriminant D = b² - 4ac for quadratic equations and solve speed-distance word problems from Exercise 4.2.",
      worksheetFile: "Maths_Quadratic_Worksheet.pdf",
      worksheetSize: "1.1 MB",
      submittedFile: "aarav_quadratic_ex.pdf",
      submittedAt: "16 Aug 2026, 05:20 PM",
      studentNotes: "Included alternative factoring verification for Q10 to Q15.",
      facultyFeedback:
        "Exceptional step-by-step discriminant calculation. Very neat handwriting and correct root derivations. Minor calculation slip on Q7(b). Outstanding work!",
      gradedFile: "aarav_quadratic_graded_priya_m.pdf",
    },
    {
      id: 5,
      title: "Python List Comprehensions, Nested Loops & Algorithm Lab Practice",
      subject: "Computer Science",
      classTag: "Class VIII-A",
      teacher: "Er. A. Swain",
      assignedDate: "10 Aug 2026",
      dueDate: "15 Aug 2026",
      status: "Graded",
      priority: "Normal",
      maxMarks: 20,
      obtainedMarks: 20,
      grade: "A1 (100%)",
      instructions:
        "Write Python programs for sieve of Eratosthenes prime generation and matrix multiplication using nested list comprehensions.",
      worksheetFile: "CS_Python_Lab3_Instructions.pdf",
      worksheetSize: "740 KB",
      submittedFile: "aarav_python_lab3.py",
      submittedAt: "12 Aug 2026, 04:10 PM",
      studentNotes: "Added docstrings and unit test assertions for all 3 algorithms.",
      facultyFeedback:
        "Flawless Pythonic implementation! Follows PEP-8 conventions with zero syntax warnings. Prime generator efficiency is exemplary.",
      gradedFile: "aarav_python_lab3_evaluated.pdf",
    },
    {
      id: 6,
      title: "Formal Letter Writing to Editor & Reading Comprehension Passage",
      subject: "English",
      classTag: "Class VIII-A",
      teacher: "Smt. R. Patnaik",
      assignedDate: "05 Aug 2026",
      dueDate: "10 Aug 2026",
      status: "Graded",
      priority: "Normal",
      maxMarks: 20,
      obtainedMarks: 18,
      grade: "A1 (90%)",
      instructions:
        "Draft a formal letter to the editor regarding smart urban waste segregation and answer the 5 analytical reading comprehension questions.",
      worksheetFile: "English_Letter_Reading_Ex.pdf",
      worksheetSize: "620 KB",
      submittedFile: "fractions_aarav.pdf",
      submittedAt: "08 Aug 2026, 03:30 PM",
      studentNotes: "Drafted letter with proper subject line and concluding sign-off.",
      facultyFeedback:
        "Rich vocabulary and coherent paragraph organization. Be mindful of punctuation after the formal salutation.",
      gradedFile: "english_letter_graded.pdf",
    },
  ]);

  // Filtered Homework List
  const filteredHomeworkList = homeworkList.filter((hw) => {
    const matchesStatus =
      homeworkFilterStatus === "All" || hw.status.toLowerCase() === homeworkFilterStatus.toLowerCase();
    const matchesSubject =
      homeworkSubjectFilter === "All" || hw.subject.toLowerCase().includes(homeworkSubjectFilter.toLowerCase());
    const matchesSearch =
      homeworkSearch.trim() === "" ||
      hw.title.toLowerCase().includes(homeworkSearch.toLowerCase()) ||
      hw.teacher.toLowerCase().includes(homeworkSearch.toLowerCase()) ||
      hw.subject.toLowerCase().includes(homeworkSearch.toLowerCase());
    return matchesStatus && matchesSubject && matchesSearch;
  });

  const pendingHomeworkCount = homeworkList.filter((h) => h.status === "Pending").length;
  const completedHomeworkCount = homeworkList.filter((h) => h.status === "Submitted" || h.status === "Graded").length;

  // Open Submission Modal
  const openSubmitTaskModal = (hw) => {
    setActiveSubmitModal(hw);
    setSelectedSubmissionFileName(`aarav_${hw.subject.toLowerCase()}_task.pdf`);
    setSubmissionRemarks("");
  };

  // Process Homework Submission
  const handleTurnInAssignment = (e) => {
    e.preventDefault();
    if (!activeSubmitModal) return;
    setIsSubmittingTask(true);

    setTimeout(() => {
      const now = new Date();
      const timestamp = now.toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      setHomeworkList((prev) =>
        prev.map((item) =>
          item.id === activeSubmitModal.id
            ? {
                ...item,
                status: "Submitted",
                submittedFile: selectedSubmissionFileName || "homework_submission.pdf",
                submittedAt: timestamp,
                studentNotes: submissionRemarks || "Completed and verified.",
                facultyFeedback: "Submission received. Pending teacher evaluation.",
              }
            : item
        )
      );

      setIsSubmittingTask(false);
      setActiveSubmitModal(null);
      alert(`Assignment "${activeSubmitModal.title}" turned in successfully!`);
    }, 600);
  };

  // Campus Notices & Official Circulars Dataset
  const noticesList = [
    {
      id: 1,
      refNo: "CIS/CIR/2026/089",
      title: "Schedule for Periodic Assessment 2 (PA-2) & CBSE Pre-Board Examinations",
      category: "Academics",
      date: "22 Aug 2026",
      issuedBy: "Office of the Examination Controller",
      priority: "Urgent",
      isPinned: true,
      summary:
        "Detailed timetable, syllabus distribution, and reporting protocols for Class VIII–XII PA-2 and Pre-Board evaluations commencing from 15 September 2026.",
      content: `Dear Students and Parents,

Please be informed that the Periodic Assessment 2 (PA-2) for Classes VI to X and Pre-Board Phase-1 Examinations for Classes X & XII are scheduled to commence from 15th September 2026.

Key Instructions:
1. Reporting Time: 07:45 AM sharp in formal school uniform with ID cards.
2. Admit Cards: Will be issued by respective Class Teachers on or before 10th September 2026.
3. Reading Time: 15 minutes (08:15 AM – 08:30 AM) prior to writing.
4. Digital Gadgets: Smartwatches, mobile phones, and programmable calculators are strictly prohibited in the examination hall.
5. Preparatory Leave: Students are entitled to study leaves as per the timetable attached below.

Please download the attached official date sheet for subject-wise timings and room allocations.`,
      attachment: "PA2_PreBoard_DateSheet_2026.pdf",
      attachmentSize: "1.4 MB",
    },
    {
      id: 2,
      refNo: "CIS/CIR/2026/088",
      title: "Vidwan JEE/NEET Advanced Mentorship & Special Saturday Doubt Clarification",
      category: "Academics",
      date: "20 Aug 2026",
      issuedBy: "Vidwan Academic Council",
      priority: "High",
      isPinned: true,
      summary:
        "Special Saturday booster sessions for Physics Mechanics and Chemistry Organic Reaction Mechanisms for all enrolled JEE/NEET aspirants.",
      content: `Dear Vidwan Batch Aspirants,

As part of our intensive coaching module, special masterclasses and doubt clarification labs will be conducted this Saturday from 08:30 AM to 01:00 PM.

Schedule & Topics:
• Physics (08:30 AM - 10:30 AM): Rotational Dynamics & Center of Mass (Dr. R. K. Mishra)
• Chemistry (11:00 AM - 01:00 PM): Thermodynamics & Chemical Equilibrium (Dr. S. Das)

Attendance is mandatory for all students in Batch VIII-A and IX-A. Please bring your Vidwan DPP booklets.`,
      attachment: "Vidwan_Special_Lecture_Schedule.pdf",
      attachmentSize: "850 KB",
    },
    {
      id: 3,
      refNo: "CIS/CIR/2026/085",
      title: "5th Annual Inter-School STEM Innovation & Robotics Expo 2026",
      category: "Events",
      date: "18 Aug 2026",
      issuedBy: "Department of Science & Innovation",
      priority: "Important",
      isPinned: false,
      summary:
        "Registrations open for the State-level Robotics & AI Innovation Fair. Top 3 projects to be sponsored for National Finals in New Delhi.",
      content: `Greetings Students!

Cohen International School is proud to host the 5th Annual Inter-School STEM & Robotics Olympiad on 5th September 2026.

Tracks for Submission:
1. Autonomous Line Follower & Obstacle Avoider Bots
2. Smart Agriculture & IoT Green Campus Solutions
3. Renewable Energy & Clean Tech Working Prototypes

Eligibility: Teams of 2 to 4 students from Classes VII to XII.
Last Date for Idea Abstract Submission: 28th August 2026 with Er. A. Swain (Computer Science Lab).`,
      attachment: "STEM_Expo_Guidelines_2026.pdf",
      attachmentSize: "2.1 MB",
    },
    {
      id: 4,
      refNo: "CIS/CIR/2026/082",
      title: "Ganesh Puja & Janmashtami Campus Holiday Notification",
      category: "Administrative",
      date: "15 Aug 2026",
      issuedBy: "Administration Department",
      priority: "General",
      isPinned: false,
      summary:
        "School classes and administrative offices will remain closed on 26th August & 4th September on account of festive observances.",
      content: `Dear Students and Faculty,

This is to notify that the school will observe holidays on the following occasions:
• Monday, 26th August 2026: Janmashtami
• Wednesday, 4th September 2026: Ganesh Puja (Campus celebrations from 08:00 AM)

Hostel residential students are invited to join the traditional puja ceremony and prasad distribution in the central auditorium. Regular classes will resume the following day.`,
      attachment: "Holiday_Calendar_2026_Q3.pdf",
      attachmentSize: "620 KB",
    },
    {
      id: 5,
      refNo: "CIS/CIR/2026/079",
      title: "RouteSafe Fleet: Bus Route #4 & #7 Timing Revision due to NH Expansion",
      category: "Transport",
      date: "12 Aug 2026",
      issuedBy: "Transport & Logistics Division",
      priority: "Important",
      isPinned: false,
      summary:
        "Morning pickup timing advanced by 10 minutes for stops across Patia, Sailashree Vihar, and Chandrasekharpur.",
      content: `Dear Parents and Day-Boarder Students,

Due to ongoing road widening along the Patia–Barunei corridor, the morning pickup timings for Route #4 and Route #7 have been preponed by 10 minutes starting from Monday, 18th August 2026.

Revised Stops:
• Sailashree Vihar Square: 06:50 AM (Old: 07:00 AM)
• KIIT Square / Big Bazaar: 07:00 AM (Old: 07:10 AM)
• Infocity Junction: 07:12 AM (Old: 07:22 AM)

Students are requested to be at their designated stops 5 minutes before scheduled arrival. You can track your bus in real-time on RouteSafe Fleet TMS.`,
      attachment: "Revised_Bus_Timetable_Route4_7.pdf",
      attachmentSize: "980 KB",
    },
    {
      id: 6,
      refNo: "CIS/CIR/2026/074",
      title: "Annual Sports Meet 2026–27: Trials for Football, Badminton & Track Events",
      category: "Sports",
      date: "08 Aug 2026",
      issuedBy: "Directorate of Physical Education",
      priority: "General",
      isPinned: false,
      summary:
        "House-wise selection trials for Junior and Senior divisions will take place at the Barunei Sports Complex ground.",
      content: `Dear Students,

House selection trials for the Annual Inter-House Sports Meet 2026 will be conducted during zero periods (03:30 PM - 04:45 PM) starting next Tuesday.

Schedule:
• Tuesday: 100m, 200m Sprint & 4x100m Relay (Boys & Girls)
• Wednesday: Badminton & Table Tennis Singles/Doubles
• Thursday: Football & Basketball Preliminary Trials

Interested athletes should register with their respective House Masters (Ruby, Sapphire, Emerald, Topaz).`,
      attachment: "Sports_Trials_Registration_Form.pdf",
      attachmentSize: "1.1 MB",
    },
  ];

  // Filtered notices calculation
  const filteredNotices = noticesList.filter((n) => {
    const matchesCategory =
      selectedNoticeCategory === "All" || n.category.toLowerCase().includes(selectedNoticeCategory.toLowerCase());
    const matchesPriority =
      selectedPriorityFilter === "All" || n.priority.toLowerCase() === selectedPriorityFilter.toLowerCase();
    const matchesSearch =
      noticeSearchQuery.trim() === "" ||
      n.title.toLowerCase().includes(noticeSearchQuery.toLowerCase()) ||
      n.refNo.toLowerCase().includes(noticeSearchQuery.toLowerCase()) ||
      n.summary.toLowerCase().includes(noticeSearchQuery.toLowerCase());
    return matchesCategory && matchesPriority && matchesSearch;
  });

  const unreadCount = noticesList.filter((n) => !readNotices.includes(n.id)).length;

  const toggleReadStatus = (id) => {
    if (readNotices.includes(id)) {
      setReadNotices(readNotices.filter((nId) => nId !== id));
    } else {
      setReadNotices([...readNotices, id]);
    }
  };

  const markAllNoticesAsRead = () => {
    setReadNotices(noticesList.map((n) => n.id));
  };

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
  ];

  // Leave Applications Dataset & State
  const [leaveApplications, setLeaveApplications] = useState([
    {
      id: "LV-2026-0412",
      type: "Medical Leave",
      category: "Health & Sickness",
      startDate: "2026-08-25",
      endDate: "2026-08-27",
      totalDays: 3,
      appliedOn: "22 Aug 2026",
      status: "Pending Review",
      reason:
        "Severe viral fever with acute throat infection and body ache. Consulting physician advised 3 days complete bed rest and medication.",
      emergencyContact: "+91 94370 12345 (Dr. Alok Mohanty - Father)",
      document: "medical_prescription_aarav.pdf",
      documentSize: "1.2 MB",
      reviewedBy: "Smt. Priya Mohanty (Class Teacher)",
      reviewDate: "Under Active Review",
      reviewNotes: "Application logged and awaiting verification by Class Teacher.",
    },
    {
      id: "LV-2026-0388",
      type: "Academic / Competition",
      category: "Sports & External Olympiad",
      startDate: "2026-08-10",
      endDate: "2026-08-12",
      totalDays: 3,
      appliedOn: "05 Aug 2026",
      status: "Approved",
      reason:
        "Representing Cohen International School at the State Inter-School STEM & Robotics Championship held at KIIT University.",
      emergencyContact: "+91 94370 12345 (Father)",
      document: "robotics_selection_letter.pdf",
      documentSize: "850 KB",
      reviewedBy: "Dr. S. K. Roy (Principal) & Smt. Priya Mohanty",
      reviewDate: "07 Aug 2026",
      reviewNotes:
        "Leave sanctioned with on-duty attendance credit. Congratulations on representing the institution!",
    },
    {
      id: "LV-2026-0310",
      type: "Family & Personal",
      category: "Family Event",
      startDate: "2026-07-28",
      endDate: "2026-07-29",
      totalDays: 2,
      appliedOn: "24 Jul 2026",
      status: "Approved",
      reason: "Attended elder sister's medical convocation ceremony in Cuttack with family.",
      emergencyContact: "+91 94370 67890 (Mother)",
      document: "convocation_invitation.pdf",
      documentSize: "620 KB",
      reviewedBy: "Smt. Priya Mohanty (Class Teacher)",
      reviewDate: "25 Jul 2026",
      reviewNotes: "Approved. Please complete all pending class assignments from Mathematics Chapter 2.",
    },
    {
      id: "LV-2026-0245",
      type: "Personal Leave",
      category: "Domestic Reason",
      startDate: "2026-07-15",
      endDate: "2026-07-17",
      totalDays: 3,
      appliedOn: "12 Jul 2026",
      status: "Rejected",
      reason: "Family vacation / personal travel during regular instructional days.",
      emergencyContact: "+91 94370 12345 (Father)",
      document: null,
      documentSize: null,
      reviewedBy: "Smt. Priya Mohanty (Class Teacher)",
      reviewDate: "13 Jul 2026",
      reviewNotes:
        "Rejected: Overlaps with Periodic Assessment 1 (PA-1) Unit Test on 15th July. Examinations cannot be rescheduled for non-medical reasons.",
    },
  ]);

  // Leave Form & Filter States
  const [isApplyLeaveModalOpen, setIsApplyLeaveModalOpen] = useState(false);
  const [leaveFilterStatus, setLeaveFilterStatus] = useState("All");
  const [leaveSearchQuery, setLeaveSearchQuery] = useState("");
  const [activeLeaveDetailsModal, setActiveLeaveDetailsModal] = useState(null);

  const [newLeaveForm, setNewLeaveForm] = useState({
    type: "Medical Leave",
    startDate: "",
    endDate: "",
    reason: "",
    emergencyContact: "+91 94370 12345 (Father)",
    documentName: "",
    parentConfirmed: false,
  });

  const pendingLeavesCount = leaveApplications.filter((l) => l.status === "Pending Review").length;
  const approvedLeavesCount = leaveApplications.filter((l) => l.status === "Approved").length;
  const rejectedLeavesCount = leaveApplications.filter((l) => l.status === "Rejected").length;

  const handleApplyLeaveSubmit = (e) => {
    e.preventDefault();
    if (!newLeaveForm.startDate || !newLeaveForm.endDate || !newLeaveForm.reason.trim()) {
      alert("Please fill in all mandatory fields (Start Date, End Date, Reason).");
      return;
    }
    if (!newLeaveForm.parentConfirmed) {
      alert("Please confirm parent/guardian authorization before submitting.");
      return;
    }

    const start = new Date(newLeaveForm.startDate);
    const end = new Date(newLeaveForm.endDate);
    const diffTime = end - start;
    const diffDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1);

    const newApp = {
      id: `LV-2026-0${Math.floor(100 + Math.random() * 900)}`,
      type: newLeaveForm.type,
      category: newLeaveForm.type === "Medical Leave" ? "Health & Sickness" : "Personal / Academic",
      startDate: newLeaveForm.startDate,
      endDate: newLeaveForm.endDate,
      totalDays: diffDays,
      appliedOn: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
      status: "Pending Review",
      reason: newLeaveForm.reason,
      emergencyContact: newLeaveForm.emergencyContact || "+91 94370 12345 (Father)",
      document: newLeaveForm.documentName || (newLeaveForm.type === "Medical Leave" ? "medical_certificate_aarav.pdf" : null),
      documentSize: newLeaveForm.documentName ? "1.4 MB" : null,
      reviewedBy: "Smt. Priya Mohanty (Class Teacher)",
      reviewDate: "Under Active Review",
      reviewNotes: "Application logged and forwarded to Class Teacher desk for verification.",
    };

    setLeaveApplications([newApp, ...leaveApplications]);
    setIsApplyLeaveModalOpen(false);
    setNewLeaveForm({
      type: "Medical Leave",
      startDate: "",
      endDate: "",
      reason: "",
      emergencyContact: "+91 94370 12345 (Father)",
      documentName: "",
      parentConfirmed: false,
    });
    alert(`Leave application (${newApp.id}) submitted successfully! Your class teacher has been notified.`);
  };

  const handleCancelLeaveApplication = (id) => {
    if (window.confirm("Are you sure you want to withdraw this pending leave request?")) {
      setLeaveApplications(leaveApplications.filter((l) => l.id !== id));
    }
  };

  const filteredLeaveApplications = leaveApplications.filter((app) => {
    const matchesFilter =
      leaveFilterStatus === "All" || app.status.toLowerCase() === leaveFilterStatus.toLowerCase();
    const matchesSearch =
      leaveSearchQuery.trim() === "" ||
      app.id.toLowerCase().includes(leaveSearchQuery.toLowerCase()) ||
      app.type.toLowerCase().includes(leaveSearchQuery.toLowerCase()) ||
      app.reason.toLowerCase().includes(leaveSearchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Enrolled Subjects & Faculty Dataset
  const enrolledSubjectsList = [
    {
      id: "math",
      code: "MATH-041",
      name: "Mathematics (Standard)",
      department: "Mathematics",
      teacher: {
        name: "Smt. Priya Mohanty",
        title: "Senior PGT & Head of Mathematics",
        qualifications: "M.Sc. Mathematics, B.Ed. (Gold Medalist)",
        email: "priya.mohanty@cohenschool.edu.in",
        phone: "+91 94370 11223",
        room: "Room 12 • Faculty Block B (Cabin 204)",
        consultationHours: "03:30 PM – 04:30 PM (Mon, Wed, Fri)",
        avatarBg: "from-blue-600 to-indigo-600",
        initials: "PM",
        status: "Available on Campus",
        bio: "Specialist in Euclidean Geometry, Linear Equations, and Vedic Mathematics Speed Calculation.",
      },
      weeklyPeriods: 6,
      syllabusProgress: 76,
      currentChapter: "Chapter 4: Linear Equations in Two Variables",
      color: "blue",
      accentBg: "bg-blue-50 text-blue-700 border-blue-200",
      description: "Algebraic expressions, linear systems, coordinate geometry, and Euclidean axioms.",
      totalStudentsEnrolled: 32,
    },
    {
      id: "physics",
      code: "PHY-086",
      name: "Physics (Theory & Lab)",
      department: "Sciences",
      teacher: {
        name: "Dr. R. K. Mishra",
        title: "HOD Physics & Vidwan Advanced Mentor",
        qualifications: "Ph.D. in Physics (IIT KGP), M.Sc.",
        email: "rk.mishra@cohenschool.edu.in",
        phone: "+91 94370 22334",
        room: "Physics Lab 01 • Science Wing Block A",
        consultationHours: "04:00 PM – 05:00 PM (Tue, Thu)",
        avatarBg: "from-purple-600 to-indigo-700",
        initials: "RM",
        status: "In Lab Session",
        bio: "Over 18 years mentoring CBSE National Top Rankers and JEE Advanced Physics finalists.",
      },
      weeklyPeriods: 6,
      syllabusProgress: 82,
      currentChapter: "Chapter 3: Laws of Motion & Friction",
      color: "purple",
      accentBg: "bg-purple-50 text-purple-700 border-purple-200",
      description: "Kinematics, dynamics, gravitation, and experimental laboratory demonstrations.",
      totalStudentsEnrolled: 32,
    },
    {
      id: "chem",
      code: "CHEM-043",
      name: "Chemistry (Theory & Practical)",
      department: "Sciences",
      teacher: {
        name: "Dr. S. Das",
        title: "Senior Faculty & Chemistry Coordinator",
        qualifications: "Ph.D. Organic Chemistry, CSIR-NET",
        email: "s.das@cohenschool.edu.in",
        phone: "+91 94370 33445",
        room: "Chemistry Lab 02 • Science Wing Block A",
        consultationHours: "03:30 PM – 04:30 PM (Mon, Thu)",
        avatarBg: "from-emerald-600 to-teal-700",
        initials: "SD",
        status: "Available on Campus",
        bio: "Expert in physical chemistry kinetics, atomic orbital theory, and green lab experiments.",
      },
      weeklyPeriods: 5,
      syllabusProgress: 70,
      currentChapter: "Chapter 3: Atomic Structure & Periodic Trends",
      color: "emerald",
      accentBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      description: "Chemical bonding, states of matter, reaction stoichiometry, and wet lab titrations.",
      totalStudentsEnrolled: 32,
    },
    {
      id: "eng",
      code: "ENG-184",
      name: "English Language & Literature",
      department: "Languages",
      teacher: {
        name: "Smt. R. Patnaik",
        title: "PGT English & Debating Society Convener",
        qualifications: "M.A. English Literature, CELTA Certified",
        email: "r.patnaik@cohenschool.edu.in",
        phone: "+91 94370 44556",
        room: "Room 14 • Main Academic Block",
        consultationHours: "02:45 PM – 03:30 PM (Daily)",
        avatarBg: "from-rose-600 to-pink-600",
        initials: "RP",
        status: "Available on Campus",
        bio: "Curator of Cohen Annual Model United Nations and National Creative Writing Laureate.",
      },
      weeklyPeriods: 5,
      syllabusProgress: 88,
      currentChapter: "Prose: The Merchant of Venice (Act III)",
      color: "rose",
      accentBg: "bg-rose-50 text-rose-700 border-rose-200",
      description: "Critical analysis of poetry, drama, rhetorical writing, and grammar competencies.",
      totalStudentsEnrolled: 32,
    },
    {
      id: "cs",
      code: "CS-165",
      name: "Computer Science & Python",
      department: "Computer Science",
      teacher: {
        name: "Er. A. Swain",
        title: "Director of ICT & Robotics Lab",
        qualifications: "B.Tech (CSE), M.Tech (AI & Machine Learning)",
        email: "a.swain@cohenschool.edu.in",
        phone: "+91 94370 55667",
        room: "Computer Science Lab 02 • Cyber Wing",
        consultationHours: "03:30 PM – 05:00 PM (Daily)",
        avatarBg: "from-cyan-600 to-blue-600",
        initials: "AS",
        status: "In Robotics Lab",
        bio: "Leading Cohen's Atal Tinkering Lab, AI Olympiad training, and Python Full-Stack courses.",
      },
      weeklyPeriods: 4,
      syllabusProgress: 90,
      currentChapter: "Module 4: Python Data Structures & Algorithmic Logic",
      color: "cyan",
      accentBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
      description: "Object-oriented programming, data structures, algorithm design, and IoT interfacing.",
      totalStudentsEnrolled: 32,
    },
    {
      id: "sst",
      code: "SST-087",
      name: "Social Science (History & Civics)",
      department: "Social Sciences",
      teacher: {
        name: "Sri M. K. Samal",
        title: "Senior Faculty & Heritage Club Coordinator",
        qualifications: "M.A. History, M.Ed.",
        email: "mk.samal@cohenschool.edu.in",
        phone: "+91 94370 66778",
        room: "Room 10 • Heritage Wing Block C",
        consultationHours: "03:30 PM – 04:15 PM (Wed, Fri)",
        avatarBg: "from-amber-600 to-orange-600",
        initials: "MS",
        status: "Available on Campus",
        bio: "Specialist in ancient Indian archaeology, constitutional civics, and geospatial map studies.",
      },
      weeklyPeriods: 4,
      syllabusProgress: 75,
      currentChapter: "Chapter 2: The Indian National Movement (1885–1947)",
      color: "amber",
      accentBg: "bg-amber-50 text-amber-700 border-amber-200",
      description: "Indian modern history, democratic governance, economic development, and cartography.",
      totalStudentsEnrolled: 32,
    },
  ];

  // Class VIII-A Peer Roster (All Students in Batch)
  const classStudentsList = [
    {
      roll: "00001",
      id: "STU-2026-0812",
      name: "Aarav Mohanty",
      isSelf: true,
      house: "Sapphire",
      houseColor: "bg-blue-100 text-blue-800 border-blue-200",
      email: "aarav.m@student.cohenschool.edu.in",
      role: "Student (You)",
      bloodGroup: "B+",
      attendance: "96.4%",
      avatarBg: "from-blue-600 to-indigo-600",
    },
    {
      roll: "00002",
      id: "STU-2026-0813",
      name: "Ananya Dash",
      isSelf: false,
      house: "Ruby",
      houseColor: "bg-rose-100 text-rose-800 border-rose-200",
      email: "ananya.d@student.cohenschool.edu.in",
      role: "Class Head Prefect",
      bloodGroup: "O+",
      attendance: "98.2%",
      avatarBg: "from-rose-500 to-red-600",
    },
    {
      roll: "00003",
      id: "STU-2026-0814",
      name: "Rohan Patnaik",
      isSelf: false,
      house: "Emerald",
      houseColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      email: "rohan.p@student.cohenschool.edu.in",
      role: "Science Club Lead",
      bloodGroup: "A+",
      attendance: "94.0%",
      avatarBg: "from-emerald-500 to-teal-600",
    },
    {
      roll: "00004",
      id: "STU-2026-0815",
      name: "Sneha Mishra",
      isSelf: false,
      house: "Topaz",
      houseColor: "bg-amber-100 text-amber-800 border-amber-200",
      email: "sneha.m@student.cohenschool.edu.in",
      role: "Literary Secretary",
      bloodGroup: "AB+",
      attendance: "95.5%",
      avatarBg: "from-amber-500 to-orange-600",
    },
    {
      roll: "00005",
      id: "STU-2026-0816",
      name: "Aditya Mohapatra",
      isSelf: false,
      house: "Sapphire",
      houseColor: "bg-blue-100 text-blue-800 border-blue-200",
      email: "aditya.m@student.cohenschool.edu.in",
      role: "Sports Vice-Captain",
      bloodGroup: "O-",
      attendance: "92.8%",
      avatarBg: "from-blue-500 to-indigo-600",
    },
    {
      roll: "00006",
      id: "STU-2026-0817",
      name: "Pooja Senapati",
      isSelf: false,
      house: "Ruby",
      houseColor: "bg-rose-100 text-rose-800 border-rose-200",
      email: "pooja.s@student.cohenschool.edu.in",
      role: "Cultural Monitor",
      bloodGroup: "B+",
      attendance: "97.1%",
      avatarBg: "from-rose-500 to-pink-600",
    },
    {
      roll: "00007",
      id: "STU-2026-0818",
      name: "Ayush Pradhan",
      isSelf: false,
      house: "Emerald",
      houseColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      email: "ayush.p@student.cohenschool.edu.in",
      role: "Robotics Lead",
      bloodGroup: "A-",
      attendance: "93.4%",
      avatarBg: "from-emerald-600 to-teal-700",
    },
    {
      roll: "00008",
      id: "STU-2026-0819",
      name: "Ishita Nayak",
      isSelf: false,
      house: "Topaz",
      houseColor: "bg-amber-100 text-amber-800 border-amber-200",
      email: "ishita.n@student.cohenschool.edu.in",
      role: "Batch Representative",
      bloodGroup: "O+",
      attendance: "96.0%",
      avatarBg: "from-amber-600 to-yellow-600",
    },
    {
      roll: "00009",
      id: "STU-2026-0820",
      name: "Debashis Rout",
      isSelf: false,
      house: "Sapphire",
      houseColor: "bg-blue-100 text-blue-800 border-blue-200",
      email: "debashis.r@student.cohenschool.edu.in",
      role: "Maths Olympiad Delegate",
      bloodGroup: "B+",
      attendance: "91.8%",
      avatarBg: "from-cyan-600 to-blue-600",
    },
    {
      roll: "00010",
      id: "STU-2026-0821",
      name: "Tanmayee Sahoo",
      isSelf: false,
      house: "Ruby",
      houseColor: "bg-rose-100 text-rose-800 border-rose-200",
      email: "tanmayee.s@student.cohenschool.edu.in",
      role: "Eco-Club Ambassador",
      bloodGroup: "A+",
      attendance: "99.0%",
      avatarBg: "from-purple-500 to-rose-500",
    },
    {
      roll: "00011",
      id: "STU-2026-0822",
      name: "Subham Tripathy",
      isSelf: false,
      house: "Emerald",
      houseColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      email: "subham.t@student.cohenschool.edu.in",
      role: "Student",
      bloodGroup: "AB-",
      attendance: "94.2%",
      avatarBg: "from-emerald-500 to-green-600",
    },
    {
      roll: "00012",
      id: "STU-2026-0823",
      name: "Priyanka Panda",
      isSelf: false,
      house: "Topaz",
      houseColor: "bg-amber-100 text-amber-800 border-amber-200",
      email: "priyanka.p@student.cohenschool.edu.in",
      role: "Student",
      bloodGroup: "O+",
      attendance: "95.0%",
      avatarBg: "from-orange-500 to-amber-600",
    },
    {
      roll: "00013",
      id: "STU-2026-0824",
      name: "Siddharth Das",
      isSelf: false,
      house: "Sapphire",
      houseColor: "bg-blue-100 text-blue-800 border-blue-200",
      email: "siddharth.d@student.cohenschool.edu.in",
      role: "Student",
      bloodGroup: "B+",
      attendance: "93.8%",
      avatarBg: "from-blue-600 to-indigo-700",
    },
    {
      roll: "00014",
      id: "STU-2026-0825",
      name: "Meera Choudhury",
      isSelf: false,
      house: "Ruby",
      houseColor: "bg-rose-100 text-rose-800 border-rose-200",
      email: "meera.c@student.cohenschool.edu.in",
      role: "Student",
      bloodGroup: "O+",
      attendance: "97.5%",
      avatarBg: "from-pink-500 to-rose-600",
    },
    {
      roll: "00015",
      id: "STU-2026-0826",
      name: "Karan Behera",
      isSelf: false,
      house: "Emerald",
      houseColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      email: "karan.b@student.cohenschool.edu.in",
      role: "Student",
      bloodGroup: "A+",
      attendance: "95.2%",
      avatarBg: "from-teal-500 to-emerald-600",
    },
    {
      roll: "00016",
      id: "STU-2026-0827",
      name: "Divya Mohanty",
      isSelf: false,
      house: "Topaz",
      houseColor: "bg-amber-100 text-amber-800 border-amber-200",
      email: "divya.m@student.cohenschool.edu.in",
      role: "Student",
      bloodGroup: "AB+",
      attendance: "96.8%",
      avatarBg: "from-amber-500 to-yellow-600",
    },
  ];

  // Subject Section States & Filters
  const [subjectActiveTab, setSubjectActiveTab] = useState("subjects"); // "subjects" or "classmates"
  const [selectedSubjectDeptFilter, setSelectedSubjectDeptFilter] = useState("All");
  const [classmatesSearchQuery, setClassmatesSearchQuery] = useState("");
  const [selectedHouseFilter, setSelectedHouseFilter] = useState("All");
  const [activeFacultyModal, setActiveFacultyModal] = useState(null);
  const [facultyMessageText, setFacultyMessageText] = useState("");
  const [facultyMessageSent, setFacultyMessageSent] = useState(false);

  const filteredSubjectsList = enrolledSubjectsList.filter((s) => {
    if (selectedSubjectDeptFilter === "All") return true;
    return s.department.toLowerCase() === selectedSubjectDeptFilter.toLowerCase();
  });

  const filteredClassmatesList = classStudentsList.filter((st) => {
    const matchesHouse =
      selectedHouseFilter === "All" || st.house.toLowerCase() === selectedHouseFilter.toLowerCase();
    const matchesSearch =
      classmatesSearchQuery.trim() === "" ||
      st.name.toLowerCase().includes(classmatesSearchQuery.toLowerCase()) ||
      st.roll.includes(classmatesSearchQuery) ||
      st.id.toLowerCase().includes(classmatesSearchQuery.toLowerCase());
    return matchesHouse && matchesSearch;
  });

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

  // Comprehensive Exam Results Dataset
  const examResultsData = {
    midterm: {
      id: "midterm",
      title: "Mid-Term Examination 2026–27",
      shortName: "Mid-Term Exam",
      heldOn: "September 2026",
      type: "CBSE Term-1 Examination",
      totalMax: 500,
      totalObtained: 472,
      percentage: 94.4,
      cgpa: 9.6,
      grade: "A1",
      rank: "2nd",
      totalStudents: 42,
      percentile: "98.6th %ile",
      status: "PASSED (Distinction)",
      resultDate: "28 September 2026",
      classTeacher: "Smt. Priya Mohanty",
      principal: "Dr. S. K. Roy",
      generalRemarks:
        "Outstanding performance across all STEM disciplines. Demonstrates sharp analytical skills and consistent classroom participation.",
      subjects: [
        {
          code: "041",
          name: "Mathematics",
          theoryMax: 80,
          theoryObt: 78,
          intMax: 20,
          intObt: 20,
          totalMax: 100,
          totalObt: 98,
          grade: "A1",
          highest: 99,
          avg: 74,
          remark: "Flawless algebra & geometry proofs. Remarkable problem-solving speed.",
        },
        {
          code: "042",
          name: "Physics",
          theoryMax: 80,
          theoryObt: 74,
          intMax: 20,
          intObt: 19,
          totalMax: 100,
          totalObt: 93,
          grade: "A1",
          highest: 96,
          avg: 71,
          remark: "Very strong conceptual grasp of Kinematics and Laws of Motion.",
        },
        {
          code: "043",
          name: "Chemistry",
          theoryMax: 80,
          theoryObt: 72,
          intMax: 20,
          intObt: 18,
          totalMax: 100,
          totalObt: 90,
          grade: "A1",
          highest: 94,
          avg: 68,
          remark: "Sound understanding of atomic structure & balanced chemical equations.",
        },
        {
          code: "301",
          name: "English Core",
          theoryMax: 80,
          theoryObt: 73,
          intMax: 20,
          intObt: 19,
          totalMax: 100,
          totalObt: 92,
          grade: "A1",
          highest: 95,
          avg: 73,
          remark: "Excellent reading comprehension and structured creative writing skills.",
        },
        {
          code: "083",
          name: "Computer Science",
          theoryMax: 80,
          theoryObt: 79,
          intMax: 20,
          intObt: 20,
          totalMax: 100,
          totalObt: 99,
          grade: "A1",
          highest: 99,
          avg: 80,
          remark: "Batch highest score! Exemplary logic in Python programming.",
        },
      ],
      coScholastic: [
        { area: "Work Education / Robotics STEM", grade: "A", desc: "Built functional IoT sensor prototype in robotics studio." },
        { area: "Art & Craft Education", grade: "A", desc: "Creative 3D structure and diagrammatic skills." },
        { area: "Health & Physical Education", grade: "A", desc: "Active participation in Badminton & athletics." },
        { area: "Discipline & Moral Ethics", grade: "A", desc: "100% adherence to campus code of conduct." },
      ],
    },
    pa1: {
      id: "pa1",
      title: "Periodic Assessment 1 (PA-1 / Unit Test)",
      shortName: "PA-1 Unit Test",
      heldOn: "July 2026",
      type: "Formative Unit Evaluation",
      totalMax: 200,
      totalObtained: 186,
      percentage: 93.0,
      cgpa: 9.3,
      grade: "A1",
      rank: "3rd",
      totalStudents: 42,
      percentile: "96.4th %ile",
      status: "PASSED",
      resultDate: "25 July 2026",
      classTeacher: "Smt. Priya Mohanty",
      principal: "Dr. S. K. Roy",
      generalRemarks: "Very solid start to the academic session. Strong foundational concepts across all subjects.",
      subjects: [
        { code: "041", name: "Mathematics", theoryMax: 40, theoryObt: 39, intMax: 10, intObt: 9, totalMax: 50, totalObt: 48, grade: "A1", highest: 50, avg: 37, remark: "Near perfect execution in rational numbers." },
        { code: "042", name: "Physics", theoryMax: 40, theoryObt: 37, intMax: 10, intObt: 9, totalMax: 50, totalObt: 46, grade: "A1", highest: 48, avg: 35, remark: "Clear concepts in units & measurements." },
        { code: "043", name: "Chemistry", theoryMax: 40, theoryObt: 35, intMax: 10, intObt: 9, totalMax: 50, totalObt: 44, grade: "A2", highest: 47, avg: 33, remark: "Good grasp; practice balancing complex equations." },
        { code: "301", name: "English Core", theoryMax: 40, theoryObt: 38, intMax: 10, intObt: 10, totalMax: 50, totalObt: 48, grade: "A1", highest: 49, avg: 36, remark: "Great grammar and vocabulary usage." },
      ],
      coScholastic: [
        { area: "Work Education / Robotics STEM", grade: "A", desc: "Enthusiastic lab participant." },
        { area: "Health & Physical Education", grade: "A", desc: "Regular in sports periods." },
      ],
    },
    vidwan_jee: {
      id: "vidwan_jee",
      title: "Vidwan IIT-JEE Integrated Mock Test #4",
      shortName: "Vidwan JEE Mock #4",
      heldOn: "August 2026",
      type: "Vidwan National JEE (Main) Benchmark",
      totalMax: 300,
      totalObtained: 268,
      percentage: 89.3,
      cgpa: 9.2,
      grade: "A1 (Top 1.6%)",
      rank: "2nd / 120",
      totalStudents: 120,
      percentile: "98.4th %ile",
      status: "QUALIFIED (Advanced Cohort)",
      resultDate: "18 August 2026",
      classTeacher: "Dr. R. K. Mishra (JEE Mentor)",
      principal: "Dr. S. K. Roy",
      generalRemarks: "High potential for IIT-JEE top rank bracket. Remarkable speed and minimum negative marks.",
      subjects: [
        { code: "JEE-P", name: "Physics (Advanced)", theoryMax: 100, theoryObt: 92, intMax: 0, intObt: 0, totalMax: 100, totalObt: 92, grade: "92/100", highest: 96, avg: 58, remark: "23 correct, 1 incorrect, 1 unattempted. Accuracy 95.8%." },
        { code: "JEE-C", name: "Chemistry (Advanced)", theoryMax: 100, theoryObt: 86, intMax: 0, intObt: 0, totalMax: 100, totalObt: 86, grade: "86/100", highest: 92, avg: 54, remark: "22 correct, 2 incorrect, 1 unattempted. Accuracy 91.6%." },
        { code: "JEE-M", name: "Mathematics (Advanced)", theoryMax: 100, theoryObt: 90, intMax: 0, intObt: 0, totalMax: 100, totalObt: 90, grade: "90/100", highest: 95, avg: 56, remark: "23 correct, 2 incorrect, 0 unattempted. Accuracy 92.0%." },
      ],
      coScholastic: [
        { area: "Problem Solving Speed", grade: "A1", desc: "Averaged 1.8 mins per question (Benchmark: 2.2 mins)." },
        { area: "Negative Marking Control", grade: "A1", desc: "Only -5 marks penalized across 75 questions." },
      ],
    },
    pa2: {
      id: "pa2",
      title: "Periodic Assessment 2 (PA-2 / Pre-Board)",
      shortName: "PA-2 Pre-Board",
      heldOn: "December 2026",
      type: "Pre-Board CBSE Benchmark",
      totalMax: 200,
      totalObtained: 191,
      percentage: 95.5,
      cgpa: 9.8,
      grade: "A1 (Topper)",
      rank: "1st",
      totalStudents: 42,
      percentile: "99.8th %ile",
      status: "PASSED (Class Rank 1)",
      resultDate: "20 December 2026",
      classTeacher: "Smt. Priya Mohanty",
      principal: "Dr. S. K. Roy",
      generalRemarks: "Rank 1 in entire Class VIII cohort! Outstanding perfect score in Mathematics. Exemplary milestone.",
      subjects: [
        { code: "041", name: "Mathematics", theoryMax: 40, theoryObt: 40, intMax: 10, intObt: 10, totalMax: 50, totalObt: 50, grade: "A1", highest: 50, avg: 38, remark: "Perfect 100% score! Flawless solution method." },
        { code: "042", name: "Physics", theoryMax: 40, theoryObt: 38, intMax: 10, intObt: 9, totalMax: 50, totalObt: 47, grade: "A1", highest: 48, avg: 36, remark: "Excellent problem solving in Light & Optics." },
        { code: "043", name: "Chemistry", theoryMax: 40, theoryObt: 37, intMax: 10, intObt: 9, totalMax: 50, totalObt: 46, grade: "A1", highest: 47, avg: 34, remark: "Comprehensive chemical reaction balancing." },
        { code: "301", name: "English Core", theoryMax: 40, theoryObt: 38, intMax: 10, intObt: 10, totalMax: 50, totalObt: 48, grade: "A1", highest: 49, avg: 37, remark: "Flawless composition & literature analysis." },
      ],
      coScholastic: [
        { area: "Work Education / Robotics STEM", grade: "A", desc: "First prize in Inter-School Science Fair." },
        { area: "Health & Physical Education", grade: "A", desc: "Participated in State-level Athletics." },
      ],
    },
  };

  const currentExam = examResultsData[selectedExamKey] || examResultsData.midterm;

  // Quick actions styled with modern palette
  const quickActions = [
    {
      id: "exams",
      label: "Examination Hub",
      icon: CalendarCheck,
      bgColor: "bg-[#EFF6FF]", // Light Blue
      borderColor: "border-[#DBEAFE]",
      textColor: "text-[#1D4ED8]",
      iconColor: "text-[#2563EB]",
      action: () => setActiveNav("exams"),
    },
    {
      id: "homework",
      label: "Homework",
      icon: BookOpen,
      bgColor: "bg-[#FFFBEB]", // Light Amber
      borderColor: "border-[#FEF3C7]",
      textColor: "text-[#D97706]",
      iconColor: "text-[#F59E0B]",
      action: () => setActiveNav("homework"),
    },
    {
      id: "results",
      label: "View Exam Results",
      icon: Award,
      bgColor: "bg-[#ECFDF5]", // Light Emerald
      borderColor: "border-[#A7F3D0]",
      textColor: "text-[#065F46]",
      iconColor: "text-[#059669]",
      action: () => setActiveNav("results"),
    },
    {
      id: "notices",
      label: "Notice Board",
      icon: Megaphone,
      bgColor: "bg-[#FFF1F2]", // Light Rose
      borderColor: "border-[#FFE4E6]",
      textColor: "text-[#BE123C]",
      iconColor: "text-[#E11D48]",
      action: () => setActiveNav("notices"),
    },
    {
      id: "profile",
      label: "My Profile & ID Card",
      icon: User,
      bgColor: "bg-[#F5F3FF]", // Light Indigo
      borderColor: "border-[#EDE9FE]",
      textColor: "text-[#6D28D9]",
      iconColor: "text-[#7C3AED]",
      action: () => setActiveNav("profile"),
    },
    {
      id: "attendance",
      label: "View Attendance",
      icon: ClipboardCheck,
      bgColor: "bg-[#F8FAFC]", // Light Slate
      borderColor: "border-[#E2E8F0]",
      textColor: "text-[#334155]",
      iconColor: "text-[#475569]",
      action: () => setActiveNav("attendance"),
    },
    {
      id: "leaves",
      label: "Leave Applications",
      icon: CalendarOff,
      bgColor: "bg-[#FFF7ED]", // Light Orange
      borderColor: "border-[#FFEDD5]",
      textColor: "text-[#C2410C]",
      iconColor: "text-[#EA580C]",
      action: () => setActiveNav("leaves"),
    },
  ];

  // Navigation Sidebar Groups
  const navGroups = [
    {
      title: "MAIN",
      items: [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        { id: "exams", label: "Examinations", icon: CalendarCheck, badge: "PA-2 Next" },
        {
          id: "homework",
          label: "Homework",
          icon: BookOpen,
          badge: pendingHomeworkCount > 0 ? `${pendingHomeworkCount} Due` : null,
        },
        { id: "notices", label: "Notice Board", icon: Bell, badge: unreadCount > 0 ? `${unreadCount} New` : null },
        { id: "timetable", label: "Timetable", icon: Calendar },
      ],
    },
    {
      title: "ACADEMICS",
      items: [
        { id: "subjects", label: "My Subjects & Faculty", icon: GraduationCap },
        { id: "results", label: "Exam Results", icon: Award },
        { id: "attendance", label: "Attendance", icon: ClipboardCheck },
        {
          id: "leaves",
          label: "Leave",
          icon: CalendarOff,
          badge: pendingLeavesCount > 0 ? `${pendingLeavesCount} Pending` : null,
        },
        { id: "submissions", label: "Submission History", icon: CheckCircle },
      ],
    },
    {
      title: "ACCOUNT",
      items: [{ id: "profile", label: "My Profile & ID", icon: User }],
    },
  ];

  const getHeaderInfo = () => {
    if (activeNav === "subjects") {
      return {
        title: "My Subjects, Faculty Mentors & Classmates",
        subtitle: "Enrolled curriculum subjects, assigned teachers & Class VIII-A peer directory",
      };
    }
    if (activeNav === "exams") {
      return {
        title: "Examinations & Date Sheets",
        subtitle: "Official examination dates, hall allocations, syllabus & digital admit cards",
      };
    }
    if (activeNav === "homework") {
      return {
        title: "Homework & Daily Practice Papers (DPP)",
        subtitle: "Review teacher assignments, download problem sheets & submit your solutions",
      };
    }
    if (activeNav === "submissions") {
      return {
        title: "Submitted Tasks & Evaluation History",
        subtitle: "Review graded assignments, teacher feedback notes & marks transcripts",
      };
    }
    if (activeNav === "profile") {
      return {
        title: "My Student Profile & Smart ID",
        subtitle: "Official student credentials, academic identity, parent records & security settings",
      };
    }
    if (activeNav === "notices") {
      return {
        title: "Campus Notice Board & Circulars",
        subtitle: "Official examination notices, circulars, event bulletins & holiday schedules",
      };
    }
    if (activeNav === "results") {
      return {
        title: "Exam Results & Marksheets",
        subtitle: "Official examination scores, term report cards & performance analytics",
      };
    }
    if (activeNav === "timetable") {
      return { title: "Timetable", subtitle: "Your weekly class schedule" };
    }
    if (activeNav === "attendance") {
      return { title: "Attendance", subtitle: "Subject-wise attendance breakdown & daily log" };
    }
    if (activeNav === "leaves") {
      return {
        title: "Leave Applications & Absence Management",
        subtitle: "Submit medical or personal leave requests, upload proofs & track teacher approvals",
      };
    }
    return {
      title: "Dashboard",
      subtitle: `Welcome back, ${studentInfo.name.split(" ")[0]}`,
    };
  };

  const currentHeader = getHeaderInfo();

  // Print Marksheet Handler
  const handlePrint = () => {
    window.print();
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
            <h2 className="font-bold text-sm leading-tight text-white">EduLearn</h2>
            <p className="text-[10px] text-slate-400">Student Portal</p>
          </div>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
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
                EduLearn
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
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "bg-[#0077C8] text-white shadow-md shadow-blue-500/20"
                            : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span
                            className={`px-2 py-0.5 rounded-full text-white font-bold text-[10px] shadow ${
                              item.id === "exams"
                                ? "bg-blue-600"
                                : item.id === "homework"
                                ? "bg-amber-500"
                                : item.id === "leaves"
                                ? "bg-amber-600"
                                : "bg-rose-500"
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
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
              Academic Session 2025-26
            </div>

            <button
              onClick={() => setActiveNav("notices")}
              className="relative p-2.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-sm transition cursor-pointer"
              title="View Notices & Circulars"
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
              )}
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

        {/* ============================================================ */}
        {/* VIEW 1: MAIN DASHBOARD VIEW */}
        {/* ============================================================ */}
        {activeNav === "dashboard" && (
          <div>
            {/* Hero Welcome Banner */}
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

            {/* Metrics Grid (4 Stat Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Metric 1: Next Examination */}
              <button
                onClick={() => setActiveNav("exams")}
                className="bg-white rounded-2xl p-5 border border-blue-100/80 bg-gradient-to-br from-white to-blue-50/30 shadow-sm hover:shadow-md transition text-left w-full cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-slate-800 tracking-tight">
                  15 Sep 2026
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1 flex items-center justify-between">
                  <span>PA-2 / Pre-Board Phase 1</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </button>

              {/* Metric 2: Pending Tasks */}
              <button
                onClick={() => setActiveNav("homework")}
                className="bg-white rounded-2xl p-5 border border-amber-100/80 bg-gradient-to-br from-white to-amber-50/20 shadow-sm hover:shadow-md transition text-left w-full cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:bg-amber-100 transition">
                  <BookOpen className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-slate-800 tracking-tight">
                  {pendingHomeworkCount} Tasks Due
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1 flex items-center justify-between">
                  <span>Homework &amp; DPPs</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </button>

              {/* Metric 3: Roll Number */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center mb-3">
                  <Trophy className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-slate-800 tracking-tight">
                  Roll {studentInfo.roll}
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1">Class {studentInfo.classGroup}</p>
              </div>

              {/* Metric 4: Latest Exam Score */}
              <button
                onClick={() => setActiveNav("results")}
                className="bg-white rounded-2xl p-5 border border-emerald-100/80 bg-gradient-to-br from-white to-emerald-50/30 shadow-sm hover:shadow-md transition text-left w-full cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:bg-emerald-100 transition">
                  <Award className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-emerald-700 tracking-tight">
                  94.4% (A1)
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1 flex items-center justify-between">
                  <span>Mid-Term Result (Rank #2)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </button>
            </div>

            {/* Urgent Notice Alert Banner */}
            {noticesList.find((n) => n.isPinned) && (
              <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-rose-500/10 via-amber-500/10 to-blue-500/10 border border-rose-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-500 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-rose-600 text-white font-extrabold text-[9px] uppercase tracking-wider">
                        Urgent Circular
                      </span>
                      <span className="text-[11px] font-bold text-slate-500">
                        {noticesList[0].refNo} • {noticesList[0].date}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-900 mt-0.5">
                      {noticesList[0].title}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setActiveNav("notices");
                    setActiveNoticeModal(noticesList[0]);
                  }}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition shadow-sm flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
                >
                  <span>Read Notice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

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
                    className="text-blue-600 hover:text-blue-700 font-semibold text-xs flex items-center gap-1 transition cursor-pointer"
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
                        className={`w-full flex items-center gap-3.5 p-3.5 rounded-xl border transition-all duration-200 hover:shadow-sm ${action.bgColor} ${action.borderColor} cursor-pointer`}
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
                    <span>Subject Marks &amp; Performance Chart</span>
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
                  { subject: "Mathematics", score: 98, attendance: 98, color: "bg-blue-600" },
                  { subject: "Physics", score: 93, attendance: 94, color: "bg-purple-600" },
                  { subject: "Chemistry", score: 90, attendance: 92, color: "bg-amber-500" },
                  { subject: "English", score: 92, attendance: 98, color: "bg-emerald-600" },
                  { subject: "Computer Science", score: 99, attendance: 100, color: "bg-indigo-600" },
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

              {/* Bottom Result Callout */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <p className="text-xs text-slate-600 font-medium">
                    Mid-Term Official Report Card Published! Overall:{" "}
                    <strong className="text-slate-900">472/500 (94.4%)</strong> • Class Rank:{" "}
                    <strong className="text-blue-600">#2</strong>
                  </p>
                </div>
                <button
                  onClick={() => setActiveNav("results")}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 text-white text-xs font-bold rounded-xl transition shadow-sm flex items-center gap-1.5 cursor-pointer flex-shrink-0"
                >
                  <Award className="w-4 h-4" />
                  <span>Open Full Result Section</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* VIEW 2: EXAMINATIONS & DATE SHEETS SECTION */}
        {/* ============================================================ */}
        {activeNav === "exams" && (
          <div className="space-y-6">
            {/* Top Stat Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Total Examinations
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <CalendarCheck className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {examinationList.length} Terms
                </p>
                <p className="text-xs text-slate-500 mt-1 font-medium">Academic Session 2025–26</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm bg-gradient-to-br from-white to-amber-50/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    Next Upcoming Exam
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">
                    PA-2
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-700 tracking-tight">
                  15 Sep 2026
                </p>
                <p className="text-xs text-amber-600 font-medium mt-1">Starting in 22 Days</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Exam Center Allotted
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-base font-extrabold text-slate-900 tracking-tight truncate">
                  Cohen Main Block A
                </p>
                <p className="text-xs text-emerald-600 font-medium mt-1">Center Code: CIS-BBSR-048</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Admit Card Status
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-base font-extrabold text-purple-700 tracking-tight">
                  Issued &amp; Verified
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">Ready for Download &amp; Print</p>
              </div>
            </div>

            {/* Exam Filter Tabs */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar w-full md:w-auto">
                {[
                  { id: "All", label: "All Examinations" },
                  { id: "Upcoming", label: "Upcoming Evaluations" },
                  { id: "Completed", label: "Completed Terms" },
                  { id: "Scheduled", label: "Annual Board 2027" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setExamTabFilter(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                      examTabFilter === tab.id
                        ? "bg-[#0077C8] text-white shadow-sm font-extrabold"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                <button
                  onClick={() => setActiveAdmitCardModal(currentScheduleExam)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition flex items-center gap-1.5 shadow cursor-pointer"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Download Admit Card</span>
                </button>
              </div>
            </div>

            {/* Examinations Cards List */}
            <div className="space-y-6">
              {filteredExamList.map((exam) => {
                const isSelected = selectedExamForSchedule === exam.id;

                return (
                  <div
                    key={exam.id}
                    className={`bg-white rounded-3xl border transition-all duration-200 overflow-hidden ${
                      isSelected
                        ? "border-blue-300 ring-2 ring-blue-500/20 shadow-md"
                        : "border-slate-100 shadow-sm hover:shadow-md"
                    }`}
                  >
                    {/* Exam Card Header */}
                    <div className="p-6 sm:p-7 bg-slate-50/50 border-b border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <span
                            className={`px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${exam.badgeColor}`}
                          >
                            {exam.status}
                          </span>
                          <span className="text-xs font-bold text-slate-500">{exam.term}</span>
                          <span className="px-2 py-0.5 rounded bg-slate-100 font-mono text-[10px] text-slate-600 font-bold">
                            Center: {exam.centerCode}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 leading-snug">
                          {exam.title}
                        </h3>

                        <div className="flex items-center gap-3 text-xs text-slate-500 font-medium flex-wrap">
                          <span className="flex items-center gap-1 text-slate-800 font-bold">
                            <Calendar className="w-3.5 h-3.5 text-blue-600" />
                            {exam.dateRange}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            Timing: {exam.examTiming}
                          </span>
                          <span>•</span>
                          <span>Reporting: <strong className="text-slate-800">{exam.reportingTime}</strong></span>
                        </div>
                      </div>

                      {/* Right Header Controls */}
                      <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
                        {exam.admitCardAvailable && (
                          <button
                            onClick={() => setActiveAdmitCardModal(exam)}
                            className="px-4 py-2 rounded-xl bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                          >
                            <CreditCard className="w-3.5 h-3.5" />
                            <span>Admit Card</span>
                          </button>
                        )}

                        {exam.status === "Completed" && (
                          <button
                            onClick={() => {
                              setSelectedExamKey(exam.id === "midterm" ? "midterm" : "pa1");
                              setActiveNav("results");
                            }}
                            className="px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs border border-emerald-200 transition flex items-center gap-1.5 cursor-pointer"
                          >
                            <Award className="w-3.5 h-3.5 text-emerald-600" />
                            <span>View Marksheet</span>
                          </button>
                        )}

                        <button
                          onClick={() =>
                            alert(`Downloading official schedule PDF: ${exam.dateSheetPdf}...`)
                          }
                          className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5 text-slate-500" />
                          <span className="hidden sm:inline">Date Sheet PDF</span>
                        </button>
                      </div>
                    </div>

                    {/* Papers & Timetable Table */}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <FileSpreadsheet className="w-4 h-4 text-blue-600" />
                          <span>Subject-Wise Date Sheet &amp; Hall Allocations ({exam.papers.length} Papers)</span>
                        </h4>
                        <span className="text-xs text-slate-500 font-medium">
                          Allocated Desk: <strong className="text-slate-900">{exam.hallSeat}</strong>
                        </span>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-slate-50 border-y border-slate-200 text-slate-600 font-bold">
                              <th className="py-3 px-3">Date &amp; Day</th>
                              <th className="py-3 px-3">Sub Code</th>
                              <th className="py-3 px-3">Subject Name</th>
                              <th className="py-3 px-3 text-center">Exam Shift</th>
                              <th className="py-3 px-3 text-center">Hall / Lab</th>
                              <th className="py-3 px-3 text-center">Max Marks</th>
                              <th className="py-3 px-4 hidden lg:table-cell">Syllabus Chapters</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {exam.papers.map((paper, pIdx) => (
                              <tr key={pIdx} className="hover:bg-slate-50/70 transition">
                                <td className="py-3.5 px-3">
                                  <strong className="text-slate-900 block">{paper.date}</strong>
                                  <span className="text-slate-400 text-[10px]">{paper.day}</span>
                                </td>
                                <td className="py-3.5 px-3 font-mono font-bold text-slate-500">
                                  {paper.code}
                                </td>
                                <td className="py-3.5 px-3 font-bold text-slate-900">
                                  {paper.subject}
                                </td>
                                <td className="py-3.5 px-3 text-center font-medium text-slate-700">
                                  {paper.timing}
                                </td>
                                <td className="py-3.5 px-3 text-center">
                                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium font-mono text-[11px]">
                                    {paper.room}
                                  </span>
                                </td>
                                <td className="py-3.5 px-3 text-center font-extrabold text-blue-700">
                                  {paper.maxMarks} M
                                </td>
                                <td className="py-3.5 px-4 text-slate-600 text-[11px] hidden lg:table-cell max-w-sm leading-snug">
                                  {paper.syllabus}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Instructions & Guidelines Note */}
                      <div className="mt-5 p-4 rounded-2xl bg-blue-50/50 border border-blue-100 text-xs text-slate-700 flex items-start gap-3">
                        <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 block mb-0.5">
                            Exam Hall Guidelines &amp; General Protocols:
                          </strong>
                          <p className="leading-relaxed">{exam.instructions}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Exam Day Code of Conduct Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>CBSE Examination Hall Rules &amp; Strict Protocol Checklist</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <strong className="text-slate-900 block font-bold">1. Mandatory Documents</strong>
                  <p className="text-slate-600 leading-relaxed">
                    Carry printed <strong>Admit Card</strong> along with your <strong>Official Student ID Smart Card</strong>. Entry will not be permitted without verified credentials.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <strong className="text-slate-900 block font-bold">2. Permitted Stationery</strong>
                  <p className="text-slate-600 leading-relaxed">
                    Royal blue or black ballpoint pens, transparent pencil pouch, wooden pencils, eraser, and transparent geometry instrument box.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <strong className="text-rose-800 block font-bold">3. Strictly Prohibited Items</strong>
                  <p className="text-rose-700 leading-relaxed">
                    Smartwatches, cellular phones, bluetooth earbuds, programmable scientific calculators, textual papers, and correction fluids.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Digital Admit Card / Hall Ticket Modal */}
        {activeAdmitCardModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn"
            onClick={() => setActiveAdmitCardModal(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Actions */}
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-gold-400" />
                  <span className="font-bold text-xs uppercase tracking-wider">
                    Official CBSE Examination Hall Ticket
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    className="px-3.5 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Hall Ticket</span>
                  </button>
                  <button
                    onClick={() => setActiveAdmitCardModal(null)}
                    className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Admit Card Printable Layout */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-6 text-xs bg-slate-50/50">
                {/* Institutional Letterhead */}
                <div className="bg-white p-6 rounded-2xl border-2 border-slate-800 space-y-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row items-center justify-between border-b-2 border-slate-800 pb-4 gap-4 text-center sm:text-left">
                    <div className="flex items-center gap-3">
                      <img src="/logo.png" alt="Cohen Logo" className="h-12 w-auto object-contain" />
                      <div>
                        <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-tight">
                          Cohen International School
                        </h2>
                        <p className="text-[10px] text-slate-500 font-semibold uppercase">
                          Affiliated to CBSE, New Delhi (Affiliation No: 1530294) • Bhubaneswar
                        </p>
                      </div>
                    </div>

                    <div className="text-center sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0">
                      <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-extrabold uppercase rounded block">
                        ADMIT CARD / HALL PASS
                      </span>
                      <span className="text-[10px] font-mono text-slate-600 font-bold block mt-1">
                        Academic Session 2025–26
                      </span>
                    </div>
                  </div>

                  {/* Student Details & Photo Matrix */}
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-8 sm:col-span-9 space-y-2 text-xs">
                      <div className="grid grid-cols-2 gap-2 border-b border-slate-200 pb-2">
                        <div>
                          <span className="text-slate-400 text-[10px] uppercase font-bold block">Candidate Name</span>
                          <strong className="text-slate-900 text-sm">{studentInfo.name}</strong>
                        </div>
                        <div>
                          <span className="text-slate-400 text-[10px] uppercase font-bold block">Roll Number</span>
                          <strong className="text-blue-700 font-mono text-sm">{studentInfo.roll}</strong>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 border-b border-slate-200 pb-2">
                        <div>
                          <span className="text-slate-400 text-[9px] uppercase font-bold block">Class &amp; Sec</span>
                          <strong className="text-slate-900">{studentInfo.classGroup}</strong>
                        </div>
                        <div>
                          <span className="text-slate-400 text-[9px] uppercase font-bold block">Student ID</span>
                          <strong className="font-mono text-slate-900">{studentInfo.studentId}</strong>
                        </div>
                        <div>
                          <span className="text-slate-400 text-[9px] uppercase font-bold block">Gender / DOB</span>
                          <strong className="text-slate-900">{studentInfo.gender} • {studentInfo.dob}</strong>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 border-b border-slate-200 pb-2">
                        <div>
                          <span className="text-slate-400 text-[9px] uppercase font-bold block">Father's Name</span>
                          <strong className="text-slate-900">{studentInfo.fatherName}</strong>
                        </div>
                        <div>
                          <span className="text-slate-400 text-[9px] uppercase font-bold block">Assigned Examination Center</span>
                          <strong className="text-slate-900 text-[11px]">{activeAdmitCardModal.center}</strong>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-slate-400 text-[9px] uppercase font-bold block">Allocated Hall Seat</span>
                          <strong className="text-blue-700">{activeAdmitCardModal.hallSeat}</strong>
                        </div>
                        <div>
                          <span className="text-slate-400 text-[9px] uppercase font-bold block">Reporting Time</span>
                          <strong className="text-rose-700">{activeAdmitCardModal.reportingTime}</strong>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-4 sm:col-span-3 text-center space-y-1">
                      <div className="w-24 h-28 mx-auto rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-700 text-white font-extrabold text-2xl flex items-center justify-center border-2 border-slate-800 shadow">
                        {studentInfo.name.split(" ").map((n) => n[0]).join("").slice(0, 2) || "AM"}
                      </div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase block">Verified Photo</span>
                    </div>
                  </div>

                  {/* Scheduled Papers Table */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                      Authorized Examination Schedule:
                    </span>
                    <table className="w-full text-left text-xs border border-slate-300">
                      <thead>
                        <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-300 text-[11px]">
                          <th className="p-2">Date</th>
                          <th className="p-2">Code</th>
                          <th className="p-2">Subject Name</th>
                          <th className="p-2 text-center">Timing</th>
                          <th className="p-2 text-center">Invigilator Sign</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {activeAdmitCardModal.papers.map((p, idx) => (
                          <tr key={idx}>
                            <td className="p-2 font-bold text-slate-900">{p.date}</td>
                            <td className="p-2 font-mono text-slate-600">{p.code}</td>
                            <td className="p-2 font-semibold text-slate-800">{p.subject}</td>
                            <td className="p-2 text-center text-slate-700">{p.timing}</td>
                            <td className="p-2 text-center text-slate-300 italic font-mono text-[10px]">
                              [ Signature ]
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Seals & Signatures */}
                  <div className="border-t-2 border-slate-800 pt-4 flex items-center justify-between gap-4 text-center">
                    <div className="flex items-center gap-2">
                      <QrCode className="w-12 h-12 text-slate-900" />
                      <div className="text-left">
                        <span className="text-[8px] font-mono text-slate-500 uppercase block">Digital Security Hash</span>
                        <span className="text-[10px] font-mono font-bold text-slate-800">AUTH-{studentInfo.studentId}-OK</span>
                      </div>
                    </div>

                    <div className="text-xs">
                      <div className="h-8 flex items-end justify-center font-script text-slate-800 font-bold italic">
                        {studentInfo.name}
                      </div>
                      <div className="border-t border-slate-400 pt-1 text-[10px] font-bold text-slate-500 uppercase">
                        Candidate Signature
                      </div>
                    </div>

                    <div className="text-xs">
                      <div className="h-8 flex items-end justify-center font-script text-slate-800 font-bold italic">
                        Dr. S. K. Roy
                      </div>
                      <div className="border-t border-slate-400 pt-1 text-[10px] font-bold text-slate-500 uppercase">
                        Controller of Examinations
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Bottom Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
                <span className="text-[11px] text-slate-500 font-medium">
                  Cohen International School ERP • Official Admit Card
                </span>
                <button
                  onClick={() => setActiveAdmitCardModal(null)}
                  className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* VIEW 3: HOMEWORK & DPP TASK HUB */}
        {/* ============================================================ */}
        {activeNav === "homework" && (
          <div className="space-y-6">
            {/* Top Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Total Tasks
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <BookOpen className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {homeworkList.length}
                </p>
                <p className="text-xs text-slate-500 mt-1 font-medium">Assigned this month</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm bg-gradient-to-br from-white to-amber-50/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    Pending Submissions
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">
                    {pendingHomeworkCount}
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-700 tracking-tight">
                  {pendingHomeworkCount} Due
                </p>
                <p className="text-xs text-amber-600 font-medium mt-1">Action required by due date</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Completed &amp; Graded
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-700 tracking-tight">
                  {completedHomeworkCount}
                </p>
                <p className="text-xs text-emerald-600 font-medium mt-1">
                  Average score: <strong className="text-emerald-700">95% (A1)</strong>
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    On-Time Record
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-purple-700 tracking-tight">
                  96.8%
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">Stellar compliance rate</p>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Search input */}
                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={homeworkSearch}
                    onChange={(e) => setHomeworkSearch(e.target.value)}
                    placeholder="Search task, subject, teacher..."
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-medium focus:outline-none focus:border-blue-500"
                  />
                  {homeworkSearch && (
                    <button
                      onClick={() => setHomeworkSearch("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Subject Filter Dropdown */}
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <span className="text-xs font-bold text-slate-500 whitespace-nowrap">Subject:</span>
                  <select
                    value={homeworkSubjectFilter}
                    onChange={(e) => setHomeworkSubjectFilter(e.target.value)}
                    className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="All">All Subjects</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics (JEE)</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="English">English</option>
                  </select>
                </div>
              </div>

              {/* Status Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
                {[
                  { id: "All", label: `All Assignments (${homeworkList.length})` },
                  { id: "Pending", label: `Pending Submission (${pendingHomeworkCount})` },
                  { id: "Submitted", label: "Under Faculty Review" },
                  { id: "Graded", label: "Evaluated & Graded" },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setHomeworkFilterStatus(st.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                      homeworkFilterStatus === st.id
                        ? "bg-[#0077C8] text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Homework Assignment Cards Grid */}
            {filteredHomeworkList.length > 0 ? (
              <div className="space-y-4">
                {filteredHomeworkList.map((hw) => {
                  const isPending = hw.status === "Pending";
                  const isSubmitted = hw.status === "Submitted";
                  const isGraded = hw.status === "Graded";

                  return (
                    <div
                      key={hw.id}
                      className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-200 hover:shadow-md ${
                        isPending
                          ? "border-amber-200/80 ring-1 ring-amber-400/20"
                          : isGraded
                          ? "border-emerald-200/80"
                          : "border-slate-100"
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            {/* Subject Badge */}
                            <span className="px-3 py-0.5 rounded-full bg-blue-100 text-blue-700 font-extrabold text-[10px] uppercase tracking-wider">
                              {hw.subject}
                            </span>

                            {/* Class Badge */}
                            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold">
                              {hw.classTag}
                            </span>

                            {/* Status Badge */}
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                                isPending
                                  ? "bg-amber-100 text-amber-800 border border-amber-200"
                                  : isSubmitted
                                  ? "bg-blue-100 text-blue-700 border border-blue-200"
                                  : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                              }`}
                            >
                              {hw.status}
                            </span>

                            {/* Grade if graded */}
                            {isGraded && (
                              <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white font-extrabold text-[10px]">
                                Score: {hw.obtainedMarks}/{hw.maxMarks} ({hw.grade})
                              </span>
                            )}
                          </div>

                          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            {hw.title}
                          </h3>

                          <div className="flex items-center gap-3 text-xs text-slate-400 font-medium flex-wrap">
                            <span className="text-slate-700 font-semibold">Teacher: {hw.teacher}</span>
                            <span>•</span>
                            <span>Assigned: {hw.assignedDate}</span>
                            <span>•</span>
                            <span
                              className={`font-bold ${
                                isPending ? "text-amber-700" : "text-slate-600"
                              }`}
                            >
                              Due Date: {hw.dueDate}
                            </span>
                            <span>•</span>
                            <span>Max Marks: {hw.maxMarks}</span>
                          </div>
                        </div>

                        {/* Top Action Button */}
                        <div className="flex-shrink-0">
                          {isPending && (
                            <button
                              onClick={() => openSubmitTaskModal(hw)}
                              className="px-5 py-2.5 bg-gradient-to-r from-[#0077C8] to-blue-600 hover:brightness-110 text-white font-bold text-xs rounded-2xl transition shadow-md shadow-blue-500/20 flex items-center gap-2 cursor-pointer"
                            >
                              <FileUp className="w-4 h-4" />
                              <span>Submit Task Now</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          )}

                          {isSubmitted && (
                            <span className="px-4 py-2 rounded-xl bg-blue-50 text-blue-700 font-bold text-xs border border-blue-200 flex items-center gap-1.5">
                              <Check className="w-4 h-4 text-blue-600" />
                              <span>Turned In</span>
                            </span>
                          )}

                          {isGraded && (
                            <button
                              onClick={() => setActiveFeedbackModal(hw)}
                              className="px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs border border-emerald-200 transition flex items-center gap-1.5 cursor-pointer"
                            >
                              <Eye className="w-4 h-4 text-emerald-600" />
                              <span>View Teacher Feedback</span>
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Instructions */}
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {hw.instructions}
                      </p>

                      {/* Bottom Footer: Teacher Worksheet & Submission details */}
                      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                        {/* Downloadable Worksheet */}
                        <button
                          onClick={() =>
                            alert(`Downloading official problem worksheet: ${hw.worksheetFile}...`)
                          }
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold transition cursor-pointer"
                        >
                          <Paperclip className="w-3.5 h-3.5 text-blue-600" />
                          <span className="font-mono text-[11px]">{hw.worksheetFile}</span>
                          <span className="text-[10px] text-slate-400">({hw.worksheetSize})</span>
                          <Download className="w-3 h-3 text-slate-400 ml-1" />
                        </button>

                        {/* Submission Metadata if already submitted */}
                        {(isSubmitted || isGraded) && (
                          <div className="flex items-center gap-2 text-slate-500">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            <span>
                              Submitted: <strong>{hw.submittedFile}</strong> on {hw.submittedAt}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-slate-800">No homework found</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Try clearing your search query or adjusting your filters.
                </p>
                <button
                  onClick={() => {
                    setHomeworkFilterStatus("All");
                    setHomeworkSubjectFilter("All");
                    setHomeworkSearch("");
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* Homework Submission Modal */}
        {activeSubmitModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
            onClick={() => setActiveSubmitModal(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-start justify-between gap-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 font-extrabold text-[10px] uppercase tracking-wider">
                    {activeSubmitModal.subject} • {activeSubmitModal.classTag}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1.5 leading-snug">
                    Submit: {activeSubmitModal.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Teacher: <strong className="text-slate-800">{activeSubmitModal.teacher}</strong> • Due:{" "}
                    <strong className="text-amber-700">{activeSubmitModal.dueDate}</strong>
                  </p>
                </div>

                <button
                  onClick={() => setActiveSubmitModal(null)}
                  className="p-2 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Body */}
              <form onSubmit={handleTurnInAssignment} className="p-6 overflow-y-auto custom-scrollbar space-y-5 text-xs">
                {/* Assignment brief */}
                <div className="p-3.5 rounded-2xl bg-blue-50/50 border border-blue-100 text-slate-700 leading-relaxed">
                  <strong>Instructions:</strong> {activeSubmitModal.instructions}
                </div>

                {/* File Upload Box */}
                <div>
                  <label className="font-bold text-slate-800 block mb-1.5">
                    Upload Solution / Answer Sheet (PDF, Image, DOC, ZIP)
                  </label>
                  <div className="border-2 border-dashed border-blue-300 rounded-2xl p-6 text-center bg-blue-50/20 hover:bg-blue-50/40 transition flex flex-col items-center justify-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <FileUp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">
                        {selectedSubmissionFileName || "Choose solution file to upload"}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Supported formats: PDF, PNG, JPG, DOCX, ZIP (Max 25 MB)
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <input
                        type="text"
                        required
                        value={selectedSubmissionFileName}
                        onChange={(e) => setSelectedSubmissionFileName(e.target.value)}
                        placeholder="e.g. aarav_maths_solutions.pdf"
                        className="px-3 py-1.5 rounded-xl border border-slate-300 bg-white text-xs font-mono w-60 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Optional Remarks for Teacher */}
                <div>
                  <label className="font-bold text-slate-800 block mb-1.5">
                    Notes or Comments for Faculty (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={submissionRemarks}
                    onChange={(e) => setSubmissionRemarks(e.target.value)}
                    placeholder="e.g. Completed all 18 problems. Graph calculations plotted on page 4."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 text-xs"
                  />
                </div>

                {/* Modal Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveSubmitModal(null)}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmittingTask || !selectedSubmissionFileName.trim()}
                    className="px-6 py-2.5 bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition shadow-md shadow-blue-500/20 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmittingTask ? (
                      <span>Uploading &amp; Turning In...</span>
                    ) : (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Turn In Assignment</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Graded Assignment Feedback Modal */}
        {activeFeedbackModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
            onClick={() => setActiveFeedbackModal(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-start justify-between gap-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[10px] uppercase tracking-wider">
                    Evaluated Assignment • {activeFeedbackModal.subject}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1.5 leading-snug">
                    {activeFeedbackModal.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Evaluated by: <strong className="text-slate-800">{activeFeedbackModal.teacher}</strong>
                  </p>
                </div>

                <button
                  onClick={() => setActiveFeedbackModal(null)}
                  className="p-2 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 overflow-y-auto custom-scrollbar space-y-4 text-xs">
                {/* Score Card */}
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                      Awarded Marks
                    </span>
                    <p className="text-2xl font-extrabold text-emerald-800">
                      {activeFeedbackModal.obtainedMarks} / {activeFeedbackModal.maxMarks}
                    </p>
                    <span className="text-xs font-bold text-emerald-700">
                      Grade: {activeFeedbackModal.grade}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg">
                    <Trophy className="w-6 h-6" />
                  </div>
                </div>

                {/* Faculty Remarks */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                    Teacher's Assessment Notes:
                  </span>
                  <p className="text-slate-700 leading-relaxed italic">
                    "{activeFeedbackModal.facultyFeedback}"
                  </p>
                </div>

                {/* Submission details */}
                <div className="space-y-2 text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Submitted File:</span>
                    <strong className="text-slate-900 font-mono">{activeFeedbackModal.submittedFile}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Submission Timestamp:</span>
                    <strong className="text-slate-900">{activeFeedbackModal.submittedAt}</strong>
                  </div>
                  {activeFeedbackModal.studentNotes && (
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Your Submission Note:</span>
                      <span className="text-slate-800 italic">"{activeFeedbackModal.studentNotes}"</span>
                    </div>
                  )}
                </div>

                {/* Download Graded Script */}
                <button
                  onClick={() =>
                    alert(`Downloading annotated evaluated script: ${activeFeedbackModal.gradedFile || activeFeedbackModal.submittedFile}...`)
                  }
                  className="w-full py-3 bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 shadow cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Evaluated Script with Annotations</span>
                </button>
              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
                <button
                  onClick={() => setActiveFeedbackModal(null)}
                  className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* VIEW 4: SUBMISSION HISTORY VIEW */}
        {/* ============================================================ */}
        {activeNav === "submissions" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span>Submitted Homework &amp; DPP Archives</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Historical log of all assignment turn-ins and teacher evaluations
                  </p>
                </div>

                <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs border border-blue-200">
                  {completedHomeworkCount} Submissions Logged
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                {homeworkList
                  .filter((h) => h.status === "Submitted" || h.status === "Graded")
                  .map((hw) => (
                    <div
                      key={hw.id}
                      className="py-4 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-[10px] font-extrabold uppercase">
                            {hw.subject}
                          </span>
                          <h4 className="text-sm font-bold text-slate-900">{hw.title}</h4>
                        </div>
                        <p className="text-xs text-slate-400 font-medium">
                          Teacher: {hw.teacher} • Submitted on: <strong>{hw.submittedAt}</strong> • File:{" "}
                          <span className="font-mono text-slate-600">{hw.submittedFile}</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-3 flex-shrink-0">
                        {hw.status === "Graded" ? (
                          <button
                            onClick={() => setActiveFeedbackModal(hw)}
                            className="px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs border border-emerald-200 transition flex items-center gap-1.5 cursor-pointer"
                          >
                            <Trophy className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Score: {hw.obtainedMarks}/{hw.maxMarks}</span>
                          </button>
                        ) : (
                          <span className="px-3.5 py-1.5 rounded-xl bg-blue-50 text-blue-700 font-bold text-xs border border-blue-200">
                            Under Faculty Review
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* VIEW 5: NOTICE BOARD & CIRCULARS */}
        {/* ============================================================ */}
        {activeNav === "notices" && (
          <div className="space-y-6">
            {/* Top Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Total Circulars
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Megaphone className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {noticesList.length}
                </p>
                <p className="text-xs text-slate-500 mt-1 font-medium">Published this session</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Urgent / Priority
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                    <AlertCircle className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-rose-600 tracking-tight">
                  {noticesList.filter((n) => n.priority === "Urgent" || n.priority === "High").length}
                </p>
                <p className="text-xs text-rose-600 font-medium mt-1">Requires immediate attention</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Unread Notices
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Bell className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-600 tracking-tight">
                  {unreadCount}
                </p>
                <p className="text-xs text-amber-700 font-medium mt-1">Pending your review</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Quick Actions
                  </span>
                  <p className="text-xs text-slate-600 font-medium">Keep your notice board organized</p>
                </div>
                <button
                  onClick={markAllNoticesAsRead}
                  className="w-full mt-3 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Mark All as Read</span>
                </button>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Search Box */}
                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={noticeSearchQuery}
                    onChange={(e) => setNoticeSearchQuery(e.target.value)}
                    placeholder="Search circulars, ref numbers, keywords..."
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-medium focus:outline-none focus:border-blue-500"
                  />
                  {noticeSearchQuery && (
                    <button
                      onClick={() => setNoticeSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Priority Selector */}
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <span className="text-xs font-bold text-slate-500 whitespace-nowrap">
                    Priority:
                  </span>
                  <select
                    value={selectedPriorityFilter}
                    onChange={(e) => setSelectedPriorityFilter(e.target.value)}
                    className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="All">All Priorities</option>
                    <option value="Urgent">Urgent Only</option>
                    <option value="High">High Priority</option>
                    <option value="Important">Important</option>
                    <option value="General">General</option>
                  </select>
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
                {["All", "Academics", "Events", "Administrative", "Transport", "Sports"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedNoticeCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                      selectedNoticeCategory === cat
                        ? "bg-[#0077C8] text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {cat === "All" ? "All Categories" : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Notices List */}
            {filteredNotices.length > 0 ? (
              <div className="space-y-4">
                {filteredNotices.map((notice) => {
                  const isRead = readNotices.includes(notice.id);
                  return (
                    <div
                      key={notice.id}
                      className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-200 hover:shadow-md ${
                        notice.isPinned
                          ? "border-blue-200/90 ring-1 ring-blue-500/20"
                          : "border-slate-100/90"
                      } ${!isRead ? "bg-gradient-to-r from-blue-50/20 via-white to-white" : ""}`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            {/* Pinned Tag */}
                            {notice.isPinned && (
                              <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-white font-extrabold text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-sm">
                                ★ Pinned Announcement
                              </span>
                            )}

                            {/* Priority Badge */}
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                                notice.priority === "Urgent"
                                  ? "bg-rose-100 text-rose-700 border border-rose-200"
                                  : notice.priority === "High"
                                  ? "bg-amber-100 text-amber-800 border border-amber-200"
                                  : notice.priority === "Important"
                                  ? "bg-blue-100 text-blue-700 border border-blue-200"
                                  : "bg-slate-100 text-slate-600 border border-slate-200"
                              }`}
                            >
                              {notice.priority}
                            </span>

                            {/* Category Pill */}
                            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold">
                              {notice.category}
                            </span>

                            {/* Unread Indicator */}
                            {!isRead && (
                              <span className="px-2 py-0.5 rounded-full bg-rose-500 text-white text-[9px] font-bold animate-pulse">
                                NEW
                              </span>
                            )}
                          </div>

                          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            {notice.title}
                          </h3>

                          <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                            <span className="font-mono text-slate-600 font-bold">{notice.refNo}</span>
                            <span>•</span>
                            <span>Issued: {notice.date}</span>
                            <span>•</span>
                            <span className="text-slate-600">{notice.issuedBy}</span>
                          </div>
                        </div>

                        {/* Top Actions */}
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <button
                            onClick={() => toggleReadStatus(notice.id)}
                            className={`p-2 rounded-xl text-xs font-semibold transition cursor-pointer border ${
                              isRead
                                ? "bg-slate-50 text-slate-400 border-slate-200 hover:text-slate-700"
                                : "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100"
                            }`}
                            title={isRead ? "Mark as unread" : "Mark as read"}
                          >
                            <Check className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Notice Summary */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                        {notice.summary}
                      </p>

                      {/* Bottom Footer with Attachment & View Buttons */}
                      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        {/* Downloadable Attachment Link */}
                        <button
                          onClick={() =>
                            alert(`Downloading official circular attachment: ${notice.attachment}...`)
                          }
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 transition cursor-pointer"
                        >
                          <Paperclip className="w-3.5 h-3.5 text-blue-600" />
                          <span className="font-mono text-xs">{notice.attachment}</span>
                          <span className="text-[10px] text-slate-400">({notice.attachmentSize})</span>
                          <Download className="w-3 h-3 text-slate-400 ml-1" />
                        </button>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => {
                              if (!readNotices.includes(notice.id)) {
                                setReadNotices([...readNotices, notice.id]);
                              }
                              setActiveNoticeModal(notice);
                            }}
                            className="px-5 py-2.5 bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                          >
                            <Eye className="w-4 h-4" />
                            <span>Read Full Notice</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-slate-800">No notices match your criteria</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Try clearing your search query or selecting a different category.
                </p>
                <button
                  onClick={() => {
                    setSelectedNoticeCategory("All");
                    setSelectedPriorityFilter("All");
                    setNoticeSearchQuery("");
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* Notice Detail Modal */}
        {activeNoticeModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
            onClick={() => setActiveNoticeModal(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Institutional Header */}
              <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 font-extrabold text-[10px] uppercase tracking-wider">
                      {activeNoticeModal.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {activeNoticeModal.refNo}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {activeNoticeModal.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Issued by: <strong className="text-slate-800">{activeNoticeModal.issuedBy}</strong> • Date:{" "}
                    <strong>{activeNoticeModal.date}</strong>
                  </p>
                </div>

                <button
                  onClick={() => setActiveNoticeModal(null)}
                  className="p-2 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto custom-scrollbar space-y-4">
                <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 text-xs font-medium text-slate-700 leading-relaxed">
                  <strong>Summary:</strong> {activeNoticeModal.summary}
                </div>

                <div className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line font-normal">
                  {activeNoticeModal.content}
                </div>

                {/* Attachment Bar */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Official Attachment:
                  </span>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
                        PDF
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-900 truncate">
                          {activeNoticeModal.attachment}
                        </p>
                        <p className="text-[10px] text-slate-400">{activeNoticeModal.attachmentSize}</p>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        alert(`Downloading official attachment: ${activeNoticeModal.attachment}...`)
                      }
                      className="px-4 py-2 rounded-xl bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs transition flex items-center gap-1.5 shadow cursor-pointer flex-shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
                <span className="text-[11px] text-slate-400 font-medium">
                  Verified by Cohen ERP Administration
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition cursor-pointer"
                  >
                    Print
                  </button>
                  <button
                    onClick={() => setActiveNoticeModal(null)}
                    className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* VIEW 6: EXAM RESULTS & REPORT CARDS SECTION */}
        {/* ============================================================ */}
        {activeNav === "results" && (
          <div className="space-y-6">
            {/* Exam Selector Switcher Bar */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Examination Term Selector
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  {Object.keys(examResultsData).map((examKey) => {
                    const ex = examResultsData[examKey];
                    const isSelected = selectedExamKey === examKey;
                    return (
                      <button
                        key={examKey}
                        onClick={() => setSelectedExamKey(examKey)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? "bg-[#0077C8] text-white shadow-md shadow-blue-500/20 scale-[1.02]"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        <Award className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-slate-400"}`} />
                        <span>{ex.shortName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons: Print & Download */}
              <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-slate-600" />
                  <span>Print Marksheet</span>
                </button>
                <button
                  onClick={() => alert(`Downloading official PDF report card for ${currentExam.title}...`)}
                  className="px-4 py-2 rounded-xl bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs transition flex items-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Report Card</span>
                </button>
              </div>
            </div>

            {/* Top Stat Summary Cards for Selected Exam */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Total Marks */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Total Score
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                    %
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {currentExam.totalObtained}
                  </p>
                  <span className="text-xs font-bold text-slate-400">/ {currentExam.totalMax}</span>
                </div>
                <p className="text-xs font-bold text-blue-600 mt-1">
                  Overall: {currentExam.percentage}%
                </p>
              </div>

              {/* Grade & Evaluation */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Letter Grade
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600 tracking-tight">
                  Grade {currentExam.grade}
                </p>
                <p className="text-xs font-semibold text-emerald-700 mt-1">
                  {currentExam.status}
                </p>
              </div>

              {/* Class Rank / Standing */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Cohort Rank
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-amber-500" />
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Rank {currentExam.rank}
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1">
                  Percentile: <strong className="text-amber-600">{currentExam.percentile}</strong>
                </p>
              </div>

              {/* CGPA / GPA */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    CGPA Scale
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs">
                    GPA
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-purple-700 tracking-tight">
                  {currentExam.cgpa} <span className="text-xs font-normal text-slate-400">/ 10.0</span>
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1">
                  Declared: <strong className="text-slate-700">{currentExam.resultDate}</strong>
                </p>
              </div>
            </div>

            {/* Official Report Card Sheet Container */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md overflow-hidden">
              {/* Tabular Subject Marks Breakdown */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-blue-600" />
                    <span>Scholastic Areas (Academic Subject Marks)</span>
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    Passing Criteria: Minimum 33% per subject
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-y border-slate-200 text-slate-600 font-bold">
                        <th className="py-3 px-3">Code</th>
                        <th className="py-3 px-3">Subject Name</th>
                        <th className="py-3 px-3 text-center">Theory (Max/Obt)</th>
                        <th className="py-3 px-3 text-center">Internal / Practical</th>
                        <th className="py-3 px-3 text-center">Total Marks</th>
                        <th className="py-3 px-3 text-center">Score %</th>
                        <th className="py-3 px-3 text-center">Grade</th>
                        <th className="py-3 px-3 text-center hidden md:table-cell">Class Avg / Max</th>
                        <th className="py-3 px-4 hidden lg:table-cell">Teacher's Evaluation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {currentExam.subjects.map((sub, sIdx) => {
                        const pct = Math.round((sub.totalObt / sub.totalMax) * 100);
                        return (
                          <tr key={sIdx} className="hover:bg-slate-50/70 transition">
                            <td className="py-3.5 px-3 font-mono font-semibold text-slate-500">
                              {sub.code}
                            </td>
                            <td className="py-3.5 px-3 font-bold text-slate-900">
                              {sub.name}
                            </td>
                            <td className="py-3.5 px-3 text-center font-medium text-slate-700">
                              {sub.theoryObt} <span className="text-slate-400 text-[10px]">/{sub.theoryMax}</span>
                            </td>
                            <td className="py-3.5 px-3 text-center font-medium text-slate-700">
                              {sub.intMax > 0 ? (
                                <>
                                  {sub.intObt} <span className="text-slate-400 text-[10px]">/{sub.intMax}</span>
                                </>
                              ) : (
                                <span className="text-slate-400">-</span>
                              )}
                            </td>
                            <td className="py-3.5 px-3 text-center font-bold text-slate-900">
                              {sub.totalObt} <span className="text-slate-400 text-[10px]">/{sub.totalMax}</span>
                            </td>
                            <td className="py-3.5 px-3 text-center">
                              <div className="inline-flex items-center gap-1.5 font-bold text-blue-600">
                                <span>{pct}%</span>
                              </div>
                            </td>
                            <td className="py-3.5 px-3 text-center">
                              <span
                                className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${
                                  sub.grade.includes("A") || sub.grade.includes("9")
                                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                    : "bg-blue-50 text-blue-700 border border-blue-200"
                                }`}
                              >
                                {sub.grade}
                              </span>
                            </td>
                            <td className="py-3.5 px-3 text-center text-slate-500 font-medium hidden md:table-cell">
                              {sub.avg}% / <strong className="text-slate-800">{sub.highest}%</strong>
                            </td>
                            <td className="py-3.5 px-4 text-slate-600 text-[11px] italic hidden lg:table-cell max-w-xs">
                              "{sub.remark}"
                            </td>
                          </tr>
                        );
                      })}

                      {/* Summary Aggregate Row */}
                      <tr className="bg-slate-100/80 font-bold text-slate-900 border-t-2 border-slate-300">
                        <td colSpan={4} className="py-3.5 px-3 text-right uppercase tracking-wider text-xs">
                          Grand Total &amp; Aggregate Percentage:
                        </td>
                        <td className="py-3.5 px-3 text-center text-sm font-extrabold text-blue-700">
                          {currentExam.totalObtained} / {currentExam.totalMax}
                        </td>
                        <td className="py-3.5 px-3 text-center text-sm font-extrabold text-emerald-700">
                          {currentExam.percentage}%
                        </td>
                        <td className="py-3.5 px-3 text-center">
                          <span className="px-3 py-1 rounded-md bg-emerald-600 text-white font-extrabold text-xs">
                            {currentExam.grade}
                          </span>
                        </td>
                        <td colSpan={2} className="py-3.5 px-4 text-slate-700 text-xs hidden md:table-cell">
                          Final Result: <strong>{currentExam.status}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Co-Scholastic & Life Skills Evaluation */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span>Co-Scholastic &amp; Life Skills Assessment (Graded A to E)</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {currentExam.coScholastic.map((co, cIdx) => (
                      <div key={cIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-bold text-slate-900 truncate">
                            {co.area}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 font-extrabold text-xs">
                            {co.grade}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-snug">{co.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Remarks & Authorization Seals */}
                <div className="mt-8 pt-6 border-t border-slate-200 grid md:grid-cols-12 gap-6 items-end">
                  <div className="md:col-span-8 p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block mb-1">
                      Principal &amp; Class Teacher Remarks
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      "{currentExam.generalRemarks}"
                    </p>
                  </div>

                  <div className="md:col-span-4 flex items-center justify-between sm:justify-end gap-6 text-center text-xs">
                    <div>
                      <div className="h-8 flex items-end justify-center font-script text-slate-800 font-bold italic text-sm">
                        {currentExam.classTeacher.split(" ")[1] || "Priya M."}
                      </div>
                      <div className="border-t border-slate-400 pt-1 text-[10px] font-bold text-slate-500 uppercase">
                        Class Teacher
                      </div>
                    </div>

                    <div>
                      <div className="h-8 flex items-end justify-center font-script text-slate-800 font-bold italic text-sm">
                        {currentExam.principal.split(" ")[1] || "S. K. Roy"}
                      </div>
                      <div className="border-t border-slate-400 pt-1 text-[10px] font-bold text-slate-500 uppercase">
                        Principal Seal
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Report Card Bottom Utility Footer */}
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Digitally verified via Cohen ERP System • Barunei Hills Campus</span>
                </div>

                <div className="flex items-center gap-3">
                  {!revalSubmitted ? (
                    <button
                      onClick={() => {
                        setRevalSubmitted(true);
                        alert("Re-evaluation request registered with Exam Cell! Token: REV-2026-904");
                      }}
                      className="text-blue-600 hover:text-blue-700 font-semibold hover:underline cursor-pointer"
                    >
                      Request Re-evaluation
                    </button>
                  ) : (
                    <span className="text-emerald-600 font-bold">✓ Re-evaluation Request Logged</span>
                  )}
                  <span>•</span>
                  <button onClick={handlePrint} className="text-slate-700 hover:text-slate-900 font-semibold hover:underline cursor-pointer">
                    Print Transcript
                  </button>
                </div>
              </div>
            </div>

            {/* Performance Trajectory & Term-Wise Comparison Widget */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                    <span>Academic Trajectory &amp; Term Progress Comparison</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Continuous assessment progression across the 2025–26 academic session
                  </p>
                </div>

                <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  Upward Growth Curve (+2.5%)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.keys(examResultsData).map((k) => {
                  const item = examResultsData[k];
                  const isCurrent = selectedExamKey === k;
                  return (
                    <div
                      key={k}
                      onClick={() => setSelectedExamKey(k)}
                      className={`p-5 rounded-2xl border transition cursor-pointer flex flex-col justify-between ${
                        isCurrent
                          ? "bg-blue-50/70 border-blue-300 ring-2 ring-blue-400/20 shadow-sm"
                          : "bg-slate-50 hover:bg-slate-100 border-slate-200/70"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            {item.heldOn}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              isCurrent ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-700"
                            }`}
                          >
                            Rank {item.rank}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 leading-tight mb-3">
                          {item.shortName}
                        </h4>
                      </div>

                      <div>
                        <div className="flex items-baseline justify-between mb-1.5">
                          <span className="text-xl font-extrabold text-slate-900">{item.percentage}%</span>
                          <span className="text-xs font-bold text-blue-600">{item.grade}</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              item.percentage >= 94 ? "bg-emerald-500" : "bg-blue-600"
                            }`}
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Grading Scale Guide */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-xs">
              <span className="font-bold text-slate-800 block mb-2">
                CBSE Grading System Scale Reference:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-center text-[11px]">
                <div className="p-2 rounded-xl bg-white border border-slate-200">
                  <strong className="text-emerald-600 block">A1</strong>
                  <span className="text-slate-500">91–100%</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-slate-200">
                  <strong className="text-emerald-600 block">A2</strong>
                  <span className="text-slate-500">81–90%</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-slate-200">
                  <strong className="text-blue-600 block">B1</strong>
                  <span className="text-slate-500">71–80%</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-slate-200">
                  <strong className="text-blue-600 block">B2</strong>
                  <span className="text-slate-500">61–70%</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-slate-200">
                  <strong className="text-amber-600 block">C1</strong>
                  <span className="text-slate-500">51–60%</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-slate-200">
                  <strong className="text-amber-600 block">C2</strong>
                  <span className="text-slate-500">41–50%</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-slate-200">
                  <strong className="text-purple-600 block">D</strong>
                  <span className="text-slate-500">33–40%</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-slate-200">
                  <strong className="text-rose-600 block">E</strong>
                  <span className="text-slate-500">&lt; 33%</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* VIEW 7: TIMETABLE VIEW */}
        {/* ============================================================ */}
        {activeNav === "timetable" && (
          <div>
            {/* Day Switcher Pills */}
            <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-1">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayKey) => (
                <button
                  key={dayKey}
                  onClick={() => setSelectedTimetableDay(dayKey)}
                  className={`px-5 py-2.5 rounded-2xl text-xs font-semibold transition cursor-pointer ${
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

        {/* ============================================================ */}
        {/* VIEW 8: ATTENDANCE VIEW */}
        {/* ============================================================ */}
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

        {/* ============================================================ */}
        {/* VIEW 9: LEAVE APPLICATIONS & ABSENCE PORTAL */}
        {/* ============================================================ */}
        {activeNav === "leaves" && (
          <div className="space-y-6">
            {/* Top Stats Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Total Applications
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <CalendarOff className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {leaveApplications.length} Requests
                </p>
                <p className="text-xs text-slate-500 mt-1 font-medium">Session 2025–26</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-sm bg-gradient-to-br from-white to-emerald-50/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Sanctioned Leaves
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-700 tracking-tight">
                  {approvedLeavesCount} Approved
                </p>
                <p className="text-xs text-emerald-600 font-medium mt-1">
                  {leaveApplications
                    .filter((l) => l.status === "Approved")
                    .reduce((sum, l) => sum + l.totalDays, 0)}{" "}
                  Total Days Sanctioned
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm bg-gradient-to-br from-white to-amber-50/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    Under Active Review
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-700 tracking-tight">
                  {pendingLeavesCount} Pending
                </p>
                <p className="text-xs text-amber-600 font-medium mt-1">Teacher Desk Evaluation</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Leave Quota Balance
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                    <Calendar className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-purple-700 tracking-tight">
                  10 Days Left
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">18 Days Total Annual Quota</p>
              </div>
            </div>

            {/* Filter, Search & Apply CTA Bar */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar w-full md:w-auto">
                {[
                  { id: "All", label: `All Requests (${leaveApplications.length})` },
                  { id: "Pending Review", label: `Pending (${pendingLeavesCount})` },
                  { id: "Approved", label: `Approved (${approvedLeavesCount})` },
                  { id: "Rejected", label: `Rejected (${rejectedLeavesCount})` },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setLeaveFilterStatus(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                      leaveFilterStatus === tab.id
                        ? "bg-[#0077C8] text-white shadow-sm font-extrabold"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                {/* Search Bar */}
                <div className="relative flex-1 md:w-64">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={leaveSearchQuery}
                    onChange={(e) => setLeaveSearchQuery(e.target.value)}
                    placeholder="Search by ID or reason..."
                    className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 focus:bg-white transition"
                  />
                  {leaveSearchQuery && (
                    <button
                      onClick={() => setLeaveSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Apply Button */}
                <button
                  onClick={() => setIsApplyLeaveModalOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0077C8] to-blue-700 hover:brightness-110 text-white font-bold text-xs transition flex items-center gap-2 shadow-md shadow-blue-500/20 whitespace-nowrap cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Apply for Leave</span>
                </button>
              </div>
            </div>

            {/* Applications List */}
            {filteredLeaveApplications.length > 0 ? (
              <div className="space-y-4">
                {filteredLeaveApplications.map((app) => {
                  const isApproved = app.status === "Approved";
                  const isPending = app.status === "Pending Review";
                  const isRejected = app.status === "Rejected";

                  return (
                    <div
                      key={app.id}
                      className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-200 shadow-sm hover:shadow-md ${
                        isApproved
                          ? "border-emerald-100 hover:border-emerald-200"
                          : isPending
                          ? "border-amber-100 hover:border-amber-200"
                          : "border-rose-100 hover:border-rose-200"
                      }`}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                        <div className="flex items-start sm:items-center gap-4 flex-wrap">
                          <div
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 font-bold ${
                              isApproved
                                ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                                : isPending
                                ? "bg-amber-50 text-amber-600 border border-amber-200"
                                : "bg-rose-50 text-rose-600 border border-rose-200"
                            }`}
                          >
                            {isApproved ? (
                              <CheckCircle2 className="w-6 h-6" />
                            ) : isPending ? (
                              <Clock className="w-6 h-6" />
                            ) : (
                              <XCircle className="w-6 h-6" />
                            )}
                          </div>

                          <div>
                            <div className="flex items-center gap-2.5 flex-wrap">
                              <span className="font-mono font-bold text-xs text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                                {app.id}
                              </span>
                              <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
                                {app.type}
                              </span>
                              <span className="text-xs text-slate-400 font-medium">
                                Applied: <strong>{app.appliedOn}</strong>
                              </span>
                            </div>

                            <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                              {app.category}
                            </h3>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div className="flex items-center gap-3">
                          <span
                            className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border shadow-sm ${
                              isApproved
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                : isPending
                                ? "bg-amber-50 text-amber-800 border-amber-200 animate-pulse"
                                : "bg-rose-50 text-rose-700 border-rose-200"
                            }`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${
                                isApproved
                                  ? "bg-emerald-500"
                                  : isPending
                                  ? "bg-amber-500"
                                  : "bg-rose-500"
                              }`}
                            ></span>
                            <span>{app.status}</span>
                          </span>
                        </div>
                      </div>

                      {/* Main Details Body */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5 text-xs">
                        {/* Dates & Duration */}
                        <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 space-y-2">
                          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            Leave Duration
                          </p>
                          <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                            <Calendar className="w-4 h-4 text-blue-600" />
                            <span>
                              {app.startDate} &rarr; {app.endDate}
                            </span>
                          </div>
                          <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800 font-bold text-[11px]">
                            {app.totalDays} {app.totalDays === 1 ? "Day" : "Days"} Absence
                          </span>
                        </div>

                        {/* Stated Reason */}
                        <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 space-y-1.5 md:col-span-2">
                          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            Stated Reason
                          </p>
                          <p className="text-slate-700 font-medium leading-relaxed">{app.reason}</p>
                          <p className="text-slate-400 text-[11px] font-medium pt-1">
                            Emergency Contact: <strong className="text-slate-700">{app.emergencyContact}</strong>
                          </p>
                        </div>
                      </div>

                      {/* Review & Evaluation Note */}
                      <div
                        className={`p-4 rounded-2xl border text-xs space-y-1.5 ${
                          isApproved
                            ? "bg-emerald-50/50 border-emerald-200 text-emerald-950"
                            : isPending
                            ? "bg-amber-50/50 border-amber-200 text-amber-950"
                            : "bg-rose-50/50 border-rose-200 text-rose-950"
                        }`}
                      >
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="font-bold flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Evaluation Authority: {app.reviewedBy}</span>
                          </span>
                          <span className="text-[11px] font-semibold opacity-80">
                            Date: {app.reviewDate}
                          </span>
                        </div>
                        <p className="font-medium pl-5">{app.reviewNotes}</p>
                      </div>

                      {/* Card Footer: Attachments & Actions */}
                      <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          {app.document ? (
                            <div className="flex items-center gap-2">
                              <span className="text-slate-500 font-semibold text-xs">Attached Proof:</span>
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-blue-50 text-blue-700 font-semibold text-xs border border-blue-200 hover:bg-blue-100 transition cursor-pointer">
                                <Paperclip className="w-3.5 h-3.5" />
                                <span>{app.document}</span>
                                <span className="text-slate-400 text-[10px]">({app.documentSize})</span>
                              </span>
                            </div>
                          ) : (
                            <span className="text-slate-400 text-xs italic">
                              No external medical document attached
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                          {isPending && (
                            <button
                              onClick={() => handleCancelLeaveApplication(app.id)}
                              className="px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs transition flex items-center gap-1.5 border border-rose-200 cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Withdraw Request</span>
                            </button>
                          )}

                          <button
                            onClick={() => setActiveLeaveDetailsModal(app)}
                            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition flex items-center gap-1.5 shadow cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>View Sanction Slip</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                  <CalendarOff className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">No Leave Applications Found</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                    No absence requests match your selected filter criteria. You can submit a new leave
                    application anytime.
                  </p>
                </div>
                <button
                  onClick={() => setIsApplyLeaveModalOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs transition shadow inline-flex items-center gap-2 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Apply for Leave</span>
                </button>
              </div>
            )}

            {/* Leave Policy & Guidelines Info Card */}
            <div className="bg-blue-50/70 rounded-3xl p-6 border border-blue-100 text-xs text-blue-950 space-y-3">
              <div className="flex items-center gap-2.5">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h4 className="font-bold text-sm text-blue-900">
                  Cohen International School • Student Leave Regulations &amp; CBSE Guidelines
                </h4>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-slate-700 leading-relaxed font-medium">
                <li>
                  <strong>CBSE 75% Attendance Mandate:</strong> Minimum 75% aggregate attendance is mandatory for appearing in Annual CBSE Board and Periodic Assessment examinations.
                </li>
                <li>
                  <strong>Medical Sickness:</strong> Absences exceeding 2 consecutive days require a registered physician's medical prescription &amp; fitness certificate upon joining.
                </li>
                <li>
                  <strong>Prior Sanction:</strong> Planned family events or academic competitions must be submitted at least 48 hours in advance for Class Teacher sanction.
                </li>
                <li>
                  <strong>Examination Policy:</strong> Routine casual leave is strictly prohibited during scheduled examination periods (PA-1, PA-2, Mid-Term).
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* VIEW 10: MY SUBJECTS, FACULTY & CLASSMATES */}
        {/* ============================================================ */}
        {activeNav === "subjects" && (
          <div className="space-y-6">
            {/* Top Summary Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Enrolled Subjects
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <BookOpen className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {enrolledSubjectsList.length} Courses
                </p>
                <p className="text-xs text-slate-500 mt-1 font-medium">CBSE Standard Curriculum</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Assigned Faculty
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-purple-700 tracking-tight">
                  {enrolledSubjectsList.length} Teachers
                </p>
                <p className="text-xs text-slate-500 mt-1 font-medium">Subject Heads &amp; Mentors</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-sm bg-gradient-to-br from-white to-emerald-50/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Class &amp; Batch
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    VIII-A
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-700 tracking-tight">
                  {classStudentsList.length} Students
                </p>
                <p className="text-xs text-emerald-600 font-medium mt-1">Vidwan Science Batch</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Class Mentor
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                    <UserCheck className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight truncate">
                  Smt. Priya Mohanty
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">Head of Class VIII-A</p>
              </div>
            </div>

            {/* Sub-Tab Navigation Bar (Subjects vs Classmates) */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar w-full md:w-auto">
                <button
                  onClick={() => setSubjectActiveTab("subjects")}
                  className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                    subjectActiveTab === "subjects"
                      ? "bg-[#0077C8] text-white shadow-md shadow-blue-500/20 font-extrabold"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Enrolled Subjects &amp; Teachers ({enrolledSubjectsList.length})</span>
                </button>

                <button
                  onClick={() => setSubjectActiveTab("classmates")}
                  className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                    subjectActiveTab === "classmates"
                      ? "bg-[#0077C8] text-white shadow-md shadow-blue-500/20 font-extrabold"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <Users className="w-4 h-4" />
                  <span>Class VIII-A Students Directory ({classStudentsList.length})</span>
                </button>
              </div>

              {/* Department / House Filter Tabs */}
              {subjectActiveTab === "subjects" ? (
                <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 custom-scrollbar">
                  {["All", "Mathematics", "Sciences", "Languages", "Computer Science", "Social Sciences"].map(
                    (dept) => (
                      <button
                        key={dept}
                        onClick={() => setSelectedSubjectDeptFilter(dept)}
                        className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition whitespace-nowrap cursor-pointer ${
                          selectedSubjectDeptFilter === dept
                            ? "bg-slate-900 text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {dept}
                      </button>
                    )
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2 w-full md:w-auto">
                  {/* House Filter */}
                  <select
                    value={selectedHouseFilter}
                    onChange={(e) => setSelectedHouseFilter(e.target.value)}
                    className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="All">All Houses (Sapphire, Ruby, Emerald, Topaz)</option>
                    <option value="Sapphire">Sapphire House</option>
                    <option value="Ruby">Ruby House</option>
                    <option value="Emerald">Emerald House</option>
                    <option value="Topaz">Topaz House</option>
                  </select>

                  {/* Search Bar */}
                  <div className="relative flex-1 md:w-56">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={classmatesSearchQuery}
                      onChange={(e) => setClassmatesSearchQuery(e.target.value)}
                      placeholder="Search student or roll..."
                      className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 transition"
                    />
                    {classmatesSearchQuery && (
                      <button
                        onClick={() => setClassmatesSearchQuery("")}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* TAB 1: SUBJECTS & FACULTY DIRECTORY */}
            {subjectActiveTab === "subjects" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSubjectsList.map((subj) => (
                  <div
                    key={subj.id}
                    className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                            {subj.code}
                          </span>
                          <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
                            {subj.weeklyPeriods} Periods / Week
                          </span>
                        </div>

                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          {subj.department}
                        </span>
                      </div>

                      {/* Subject Name */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                        {subj.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                        {subj.description}
                      </p>

                      {/* Teacher Profile Card */}
                      <div className="mt-5 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3">
                        <div className="flex items-start gap-3.5">
                          <div
                            className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${subj.teacher.avatarBg} text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0 shadow-md`}
                          >
                            {subj.teacher.initials}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between flex-wrap gap-1">
                              <h4 className="font-bold text-slate-900 text-sm truncate">
                                {subj.teacher.name}
                              </h4>
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                {subj.teacher.status}
                              </span>
                            </div>

                            <p className="text-xs font-semibold text-blue-700 truncate mt-0.5">
                              {subj.teacher.title}
                            </p>
                            <p className="text-[11px] text-slate-500 font-medium truncate">
                              {subj.teacher.qualifications}
                            </p>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-200/70 space-y-1.5 text-[11px] text-slate-600">
                          <div className="flex items-center gap-2 truncate">
                            <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                            <span>Room / Cabin: <strong>{subj.teacher.room}</strong></span>
                          </div>
                          <div className="flex items-center gap-2 truncate">
                            <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                            <span>Doubt Hours: <strong>{subj.teacher.consultationHours}</strong></span>
                          </div>
                          <div className="flex items-center gap-2 truncate">
                            <Mail className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                            <span>Email: <strong className="text-blue-600">{subj.teacher.email}</strong></span>
                          </div>
                        </div>
                      </div>

                      {/* Syllabus Tracker */}
                      <div className="mt-4 p-3.5 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className="text-slate-700 flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                            <span>Current Syllabus Focus</span>
                          </span>
                          <span className="text-blue-700">{subj.syllabusProgress}% Completed</span>
                        </div>
                        <p className="text-[11px] text-slate-600 font-medium truncate">
                          {subj.currentChapter}
                        </p>
                        <div className="w-full bg-blue-100 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[#0077C8] transition-all duration-700"
                            style={{ width: `${subj.syllabusProgress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Card Actions Footer */}
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <button
                        onClick={() => {
                          setSubjectActiveTab("classmates");
                        }}
                        className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer"
                      >
                        <Users className="w-3.5 h-3.5 text-slate-500" />
                        <span>32 Classmates</span>
                      </button>

                      <button
                        onClick={() => {
                          setActiveFacultyModal(subj.teacher);
                          setFacultyMessageSent(false);
                          setFacultyMessageText("");
                        }}
                        className="px-4 py-2 rounded-xl bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Contact Teacher</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 2: CLASSMATES / ALL STUDENTS IN BATCH */}
            {subjectActiveTab === "classmates" && (
              <div className="space-y-4">
                {/* Batch Overview Banner */}
                <div className="p-5 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                      Batch Directory
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">
                      Class VIII-A • Academic Batch 2025–26
                    </h3>
                    <p className="text-xs text-blue-200 mt-0.5">
                      Class Teacher: <strong>Smt. Priya Mohanty</strong> • 32 Students Enrolled • Barunei Campus
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-xl bg-white/10 text-white text-xs font-bold border border-white/20">
                      Showing {filteredClassmatesList.length} of {classStudentsList.length} Students
                    </span>
                  </div>
                </div>

                {/* Classmates Cards Grid */}
                {filteredClassmatesList.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredClassmatesList.map((st) => (
                      <div
                        key={st.roll}
                        className={`bg-white rounded-3xl p-5 border transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between ${
                          st.isSelf
                            ? "border-blue-500 ring-2 ring-blue-500/20 bg-blue-50/20"
                            : "border-slate-100 hover:border-slate-200"
                        }`}
                      >
                        <div>
                          {/* Top Row: Roll & House */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-mono font-extrabold text-xs text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                              Roll #{st.roll}
                            </span>
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${st.houseColor}`}
                            >
                              {st.house} House
                            </span>
                          </div>

                          {/* Student Avatar & Name */}
                          <div className="flex items-center gap-3 mb-3">
                            <div
                              className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${st.avatarBg} text-white font-extrabold text-xs flex items-center justify-center flex-shrink-0 shadow-md`}
                            >
                              {st.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                                .slice(0, 2)}
                            </div>

                            <div className="min-w-0">
                              <h4 className="font-bold text-slate-900 text-sm truncate flex items-center gap-1.5">
                                <span>{st.name}</span>
                                {st.isSelf && (
                                  <span className="px-1.5 py-0.2 rounded bg-[#0077C8] text-white text-[9px] font-bold">
                                    You
                                  </span>
                                )}
                              </h4>
                              <p className="text-[11px] text-slate-400 font-mono font-medium truncate">
                                {st.id}
                              </p>
                            </div>
                          </div>

                          {/* Role / Leadership Badge */}
                          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-xs mb-3">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold text-slate-400 uppercase">Role / Club</span>
                              <strong className="text-slate-800 text-[11px] truncate">{st.role}</strong>
                            </div>
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="text-slate-400">Attendance</span>
                              <strong className="text-emerald-600">{st.attendance}</strong>
                            </div>
                          </div>
                        </div>

                        {/* Email */}
                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                          <span className="truncate">{st.email}</span>
                          <span className="font-bold font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                            {st.bloodGroup}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm space-y-3">
                    <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                      <Users className="w-7 h-7" />
                    </div>
                    <h3 className="text-base font-bold text-slate-800">No Students Found</h3>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      No classmates matched your house filter or search query. Try clearing the filter.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedHouseFilter("All");
                        setClassmatesSearchQuery("");
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs transition cursor-pointer"
                    >
                      Reset Filter
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ============================================================ */}
        {/* VIEW 11: ENHANCED MY PROFILE & DIGITAL STUDENT ID SECTION */}
        {/* ============================================================ */}
        {activeNav === "profile" && (
          <div className="space-y-6">
            {/* Top Identity Hero Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div
                  className="relative group cursor-pointer"
                  onClick={() => alert("Avatar change option: Select your preferred avatar or photo.")}
                >
                  <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-3xl bg-gradient-to-tr from-[#0066E0] via-indigo-600 to-purple-600 text-white font-extrabold text-2xl sm:text-3xl flex items-center justify-center flex-shrink-0 shadow-xl border-4 border-white shadow-blue-500/20">
                    {studentInfo.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2) || "AM"}
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-[#0077C8] text-white p-2 rounded-xl border-2 border-white shadow-md group-hover:scale-110 transition-transform">
                    <Camera className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {studentInfo.name}
                    </h2>
                    <span className="px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      {studentInfo.status}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold font-mono">
                      {studentInfo.studentId}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 font-medium mt-1">
                    Class: <strong className="text-slate-900">{studentInfo.classGroup}</strong> • Roll:{" "}
                    <strong className="text-slate-900">{studentInfo.roll}</strong> • House:{" "}
                    <strong className="text-emerald-700">{studentInfo.house}</strong>
                  </p>

                  <p className="text-xs text-slate-400 font-medium mt-0.5 flex items-center gap-2 flex-wrap">
                    <span>Mentor: {studentInfo.classTeacher}</span>
                    <span>•</span>
                    <span>Session: {studentInfo.academicSession}</span>
                  </p>
                </div>
              </div>

              {/* Action Buttons: Edit / Cancel & Print */}
              <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Printer className="w-4 h-4 text-slate-600" />
                  <span>Print ID Slip</span>
                </button>

                {!isEditingProfile ? (
                  <button
                    onClick={handleStartEdit}
                    className="px-5 py-2.5 rounded-2xl bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs transition shadow-md shadow-blue-500/20 flex items-center gap-2 cursor-pointer"
                  >
                    <Pencil className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </button>
                ) : (
                  <button
                    onClick={handleCancelEdit}
                    className="px-5 py-2.5 rounded-2xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                    <span>Cancel</span>
                  </button>
                )}
              </div>
            </div>

            {/* Profile Sub-Tab Navigation Bar */}
            <div className="bg-white rounded-2xl p-2 border border-slate-100 shadow-sm flex items-center gap-1 overflow-x-auto custom-scrollbar">
              {[
                { id: "idcard", label: "Digital Smart ID Card", icon: CreditCard },
                { id: "personal", label: "Academic & Personal Info", icon: User },
                { id: "parents", label: "Parents & Residence", icon: Users },
                { id: "services", label: "Transport & Services", icon: Bus },
                { id: "medical", label: "Health & Emergency", icon: Heart },
                { id: "security", label: "Security & Credentials", icon: Lock },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeProfileTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveProfileTab(tab.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-[#0077C8] text-white shadow-sm font-extrabold"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-400"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* ============================================================ */}
            {/* SUB-TAB 1: DIGITAL SMART CAMPUS STUDENT ID CARD */}
            {/* ============================================================ */}
            {activeProfileTab === "idcard" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Visual Smart ID Card */}
                <div className="lg:col-span-6 bg-gradient-to-br from-[#0B1E36] via-navy-900 to-[#0A2540] text-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/15 relative overflow-hidden">
                  {/* Background Watermark Pattern */}
                  <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
                    <GraduationCap className="w-64 h-64 text-white" />
                  </div>

                  {/* Top ID Card Header */}
                  <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-1.5 rounded-xl shadow">
                        <img
                          src="/logo.png"
                          alt="Cohen Logo"
                          className="h-9 w-auto object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-display text-sm font-bold text-white tracking-wide">
                          Cohen International School
                        </h3>
                        <p className="text-[9px] text-gold-300 font-semibold uppercase tracking-wider">
                          CBSE Affiliated Senior Secondary • Bhubaneswar
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="px-2 py-0.5 rounded-md bg-blue-500/30 border border-blue-400/40 text-blue-200 text-[9px] font-bold uppercase tracking-wider block">
                        Student Smart Pass
                      </span>
                      <span className="text-[10px] text-white/60 font-mono mt-0.5 block">
                        2025–26
                      </span>
                    </div>
                  </div>

                  {/* Middle Student Photo & Key Metrics */}
                  <div className="grid grid-cols-12 gap-4 items-center mb-5">
                    <div className="col-span-4 text-center">
                      <div className="w-24 h-28 sm:w-28 sm:h-32 mx-auto rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white font-extrabold text-3xl flex items-center justify-center border-2 border-white/40 shadow-xl shadow-black/40">
                        {studentInfo.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2) || "AM"}
                      </div>
                      <span className="inline-block mt-1.5 px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[9px] font-bold rounded-full">
                        ● Biometric Active
                      </span>
                    </div>

                    <div className="col-span-8 space-y-2 text-xs">
                      <div>
                        <span className="text-white/50 text-[10px] uppercase font-bold block">
                          Student Name
                        </span>
                        <p className="font-extrabold text-white text-base leading-tight">
                          {studentInfo.name}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-white/50 text-[9px] uppercase font-bold block">
                            Class &amp; Section
                          </span>
                          <p className="font-bold text-blue-200">{studentInfo.classGroup}</p>
                        </div>
                        <div>
                          <span className="text-white/50 text-[9px] uppercase font-bold block">
                            Roll Number
                          </span>
                          <p className="font-bold text-white">{studentInfo.roll}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-white/50 text-[9px] uppercase font-bold block">
                            Student ID
                          </span>
                          <p className="font-mono font-bold text-gold-400">{studentInfo.studentId}</p>
                        </div>
                        <div>
                          <span className="text-white/50 text-[9px] uppercase font-bold block">
                            Blood Group
                          </span>
                          <p className="font-bold text-rose-300">{studentInfo.bloodGroup}</p>
                        </div>
                      </div>

                      <div>
                        <span className="text-white/50 text-[9px] uppercase font-bold block">
                          Curriculum &amp; Stream
                        </span>
                        <p className="font-medium text-white/90 text-[11px] truncate">
                          {studentInfo.stream}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Barcode, QR Code & Emergency Contact */}
                  <div className="border-t border-white/15 pt-4 flex items-center justify-between gap-4 text-xs">
                    <div>
                      <span className="text-white/40 text-[9px] uppercase font-bold block">
                        Emergency SOS Contact
                      </span>
                      <p className="font-mono font-bold text-white text-xs mt-0.5">
                        {studentInfo.emergencyContact}
                      </p>
                      <span className="text-[9px] text-white/50">{studentInfo.emergencyContactPerson}</span>
                    </div>

                    <div className="text-right flex items-center gap-2">
                      <div className="bg-white p-1 rounded-lg">
                        <QrCode className="w-9 h-9 text-slate-900" />
                      </div>
                      <div className="text-left">
                        <span className="text-[8px] font-mono text-white/60 uppercase block">RFID Tag</span>
                        <span className="text-[10px] font-mono font-bold text-gold-300">{studentInfo.rfidCode}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: ID Card Details & Management */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                      <span>Smart Campus Verification Credentials</span>
                    </h3>

                    <div className="space-y-3 divide-y divide-slate-100 text-xs">
                      <div className="flex items-center justify-between py-2 first:pt-0">
                        <span className="text-slate-500 font-medium">RFID Smart Turnstile Card:</span>
                        <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg">
                          {studentInfo.rfidCode}
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-slate-500 font-medium">CBSE Permanent Enrollment No:</span>
                        <span className="font-mono font-bold text-slate-900">{studentInfo.admissionNo}</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-slate-500 font-medium">Assigned Student House:</span>
                        <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                          {studentInfo.house}
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-slate-500 font-medium">Campus Locker Allocation:</span>
                        <span className="font-bold text-slate-900">{studentInfo.lockerNo}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 last:pb-0">
                        <span className="text-slate-500 font-medium">Card Validity Period:</span>
                        <span className="font-bold text-blue-600">31 March 2027 (Auto-Renewable)</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                      <button
                        onClick={handlePrint}
                        className="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow"
                      >
                        <Printer className="w-4 h-4" />
                        <span>Print Physical ID Pass</span>
                      </button>

                      <button
                        onClick={() =>
                          alert(`Official Smart Student ID Pass for ${studentInfo.name} downloaded!`)
                        }
                        className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition flex items-center gap-2 cursor-pointer"
                      >
                        <Download className="w-4 h-4 text-slate-500" />
                        <span>Download PDF</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ============================================================ */}
            {/* SUB-TAB 2: PERSONAL & ACADEMIC INFO */}
            {/* ============================================================ */}
            {activeProfileTab === "personal" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <User className="w-5 h-5 text-blue-600" />
                      <span>Academic &amp; Student Identity Particulars</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Personal identity recorded under CBSE Affiliation Record &amp; Cohen Student Directory
                    </p>
                  </div>

                  {isEditingProfile && (
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 font-bold text-xs rounded-full border border-blue-200">
                      Editing Mode Active
                    </span>
                  )}
                </div>

                <form onSubmit={handleSaveProfile} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
                    {/* Full Name */}
                    <div>
                      <label className="font-bold text-slate-700 block mb-1.5">Full Name</label>
                      <input
                        type="text"
                        disabled={!isEditingProfile}
                        value={isEditingProfile ? tempProfileData.name : studentInfo.name}
                        onChange={(e) =>
                          setTempProfileData({ ...tempProfileData, name: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                          isEditingProfile
                            ? "bg-white border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            : "bg-slate-50 border-slate-200 text-slate-800"
                        }`}
                      />
                    </div>

                    {/* Student ID */}
                    <div>
                      <label className="font-bold text-slate-700 block mb-1.5">Student ID (ERP Code)</label>
                      <input
                        type="text"
                        disabled={!isEditingProfile}
                        value={isEditingProfile ? tempProfileData.studentId : studentInfo.studentId}
                        onChange={(e) =>
                          setTempProfileData({ ...tempProfileData, studentId: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium font-mono transition ${
                          isEditingProfile
                            ? "bg-white border-blue-400 focus:outline-none"
                            : "bg-slate-50 border-slate-200 text-slate-800"
                        }`}
                      />
                    </div>

                    {/* Class & Section */}
                    <div>
                      <label className="font-bold text-slate-700 block mb-1.5">Class &amp; Section</label>
                      <input
                        type="text"
                        disabled={!isEditingProfile}
                        value={isEditingProfile ? tempProfileData.classGroup : studentInfo.classGroup}
                        onChange={(e) =>
                          setTempProfileData({ ...tempProfileData, classGroup: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                          isEditingProfile
                            ? "bg-white border-blue-400 focus:outline-none"
                            : "bg-slate-50 border-slate-200 text-slate-800"
                        }`}
                      />
                    </div>

                    {/* Roll Number */}
                    <div>
                      <label className="font-bold text-slate-700 block mb-1.5">Class Roll Number</label>
                      <input
                        type="text"
                        disabled={!isEditingProfile}
                        value={isEditingProfile ? tempProfileData.roll : studentInfo.roll}
                        onChange={(e) =>
                          setTempProfileData({ ...tempProfileData, roll: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                          isEditingProfile
                            ? "bg-white border-blue-400 focus:outline-none"
                            : "bg-slate-50 border-slate-200 text-slate-800"
                        }`}
                      />
                    </div>

                    {/* Academic Session */}
                    <div>
                      <label className="font-bold text-slate-700 block mb-1.5">Academic Session</label>
                      <input
                        type="text"
                        disabled={!isEditingProfile}
                        value={isEditingProfile ? tempProfileData.academicSession : studentInfo.academicSession}
                        onChange={(e) =>
                          setTempProfileData({ ...tempProfileData, academicSession: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                          isEditingProfile
                            ? "bg-white border-blue-400 focus:outline-none"
                            : "bg-slate-50 border-slate-200 text-slate-800"
                        }`}
                      />
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <label className="font-bold text-slate-700 block mb-1.5">Date of Birth</label>
                      <input
                        type="date"
                        disabled={!isEditingProfile}
                        value={isEditingProfile ? tempProfileData.dob : studentInfo.dob}
                        onChange={(e) =>
                          setTempProfileData({ ...tempProfileData, dob: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                          isEditingProfile
                            ? "bg-white border-blue-400 focus:outline-none"
                            : "bg-slate-50 border-slate-200 text-slate-800"
                        }`}
                      />
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="font-bold text-slate-700 block mb-1.5">Gender</label>
                      <select
                        disabled={!isEditingProfile}
                        value={isEditingProfile ? tempProfileData.gender : studentInfo.gender}
                        onChange={(e) =>
                          setTempProfileData({ ...tempProfileData, gender: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                          isEditingProfile
                            ? "bg-white border-blue-400 focus:outline-none"
                            : "bg-slate-50 border-slate-200 text-slate-800"
                        }`}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Blood Group */}
                    <div>
                      <label className="font-bold text-slate-700 block mb-1.5">Blood Group</label>
                      <input
                        type="text"
                        disabled={!isEditingProfile}
                        value={isEditingProfile ? tempProfileData.bloodGroup : studentInfo.bloodGroup}
                        onChange={(e) =>
                          setTempProfileData({ ...tempProfileData, bloodGroup: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                          isEditingProfile
                            ? "bg-white border-blue-400 focus:outline-none"
                            : "bg-slate-50 border-slate-200 text-slate-800"
                        }`}
                      />
                    </div>

                    {/* Student Stream */}
                    <div>
                      <label className="font-bold text-slate-700 block mb-1.5">Stream &amp; Specialization</label>
                      <input
                        type="text"
                        disabled={!isEditingProfile}
                        value={isEditingProfile ? tempProfileData.stream : studentInfo.stream}
                        onChange={(e) =>
                          setTempProfileData({ ...tempProfileData, stream: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                          isEditingProfile
                            ? "bg-white border-blue-400 focus:outline-none"
                            : "bg-slate-50 border-slate-200 text-slate-800"
                        }`}
                      />
                    </div>

                    {/* Target Competitive Exam */}
                    <div>
                      <label className="font-bold text-slate-700 block mb-1.5">Target Competitive Aspiration</label>
                      <input
                        type="text"
                        disabled={!isEditingProfile}
                        value={isEditingProfile ? tempProfileData.targetExam : studentInfo.targetExam}
                        onChange={(e) =>
                          setTempProfileData({ ...tempProfileData, targetExam: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                          isEditingProfile
                            ? "bg-white border-blue-400 focus:outline-none"
                            : "bg-slate-50 border-slate-200 text-slate-800"
                        }`}
                      />
                    </div>

                    {/* Student Email */}
                    <div>
                      <label className="font-bold text-slate-700 block mb-1.5">Official Student Email</label>
                      <input
                        type="email"
                        disabled={!isEditingProfile}
                        value={isEditingProfile ? tempProfileData.email : studentInfo.email}
                        onChange={(e) =>
                          setTempProfileData({ ...tempProfileData, email: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                          isEditingProfile
                            ? "bg-white border-blue-400 focus:outline-none"
                            : "bg-slate-50 border-slate-200 text-slate-800"
                        }`}
                      />
                    </div>

                    {/* Student Mobile Phone */}
                    <div>
                      <label className="font-bold text-slate-700 block mb-1.5">Primary Student Phone</label>
                      <input
                        type="tel"
                        disabled={!isEditingProfile}
                        value={isEditingProfile ? tempProfileData.phone : studentInfo.phone}
                        onChange={(e) =>
                          setTempProfileData({ ...tempProfileData, phone: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                          isEditingProfile
                            ? "bg-white border-blue-400 focus:outline-none"
                            : "bg-slate-50 border-slate-200 text-slate-800"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Save / Cancel Controls */}
                  {isEditingProfile && (
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={handleCancelEdit}
                        className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs transition shadow-md shadow-blue-500/20 flex items-center gap-2 cursor-pointer"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save Academic Details</span>
                      </button>
                    </div>
                  )}
                </form>
              </div>
            )}

            {/* ============================================================ */}
            {/* SUB-TAB 3: PARENTS & RESIDENCE */}
            {/* ============================================================ */}
            {activeProfileTab === "parents" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span>Parents &amp; Permanent Residence Profile</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Official Guardian contacts linked to Cohen ParentConnect Portal
                  </p>
                </div>

                <form onSubmit={handleSaveProfile} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                    {/* Father's Info Box */}
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <span className="font-bold text-slate-900 text-sm">Father's Particulars</span>
                        <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full">
                          Primary Guardian
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="font-semibold text-slate-600 block mb-1">Father's Name</label>
                          <input
                            type="text"
                            disabled={!isEditingProfile}
                            value={isEditingProfile ? tempProfileData.fatherName : studentInfo.fatherName}
                            onChange={(e) =>
                              setTempProfileData({ ...tempProfileData, fatherName: e.target.value })
                            }
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium ${
                              isEditingProfile ? "bg-white border-blue-400" : "bg-slate-100/70 border-slate-200 text-slate-800"
                            }`}
                          />
                        </div>

                        <div>
                          <label className="font-semibold text-slate-600 block mb-1">Occupation / Designation</label>
                          <input
                            type="text"
                            disabled={!isEditingProfile}
                            value={isEditingProfile ? tempProfileData.fatherOccupation : studentInfo.fatherOccupation}
                            onChange={(e) =>
                              setTempProfileData({ ...tempProfileData, fatherOccupation: e.target.value })
                            }
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium ${
                              isEditingProfile ? "bg-white border-blue-400" : "bg-slate-100/70 border-slate-200 text-slate-800"
                            }`}
                          />
                        </div>

                        <div>
                          <label className="font-semibold text-slate-600 block mb-1">Father's Mobile Phone</label>
                          <input
                            type="tel"
                            disabled={!isEditingProfile}
                            value={isEditingProfile ? tempProfileData.fatherPhone : studentInfo.fatherPhone}
                            onChange={(e) =>
                              setTempProfileData({ ...tempProfileData, fatherPhone: e.target.value })
                            }
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium ${
                              isEditingProfile ? "bg-white border-blue-400" : "bg-slate-100/70 border-slate-200 text-slate-800"
                            }`}
                          />
                        </div>

                        <div>
                          <label className="font-semibold text-slate-600 block mb-1">Father's Email Address</label>
                          <input
                            type="email"
                            disabled={!isEditingProfile}
                            value={isEditingProfile ? tempProfileData.fatherEmail : studentInfo.fatherEmail}
                            onChange={(e) =>
                              setTempProfileData({ ...tempProfileData, fatherEmail: e.target.value })
                            }
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium ${
                              isEditingProfile ? "bg-white border-blue-400" : "bg-slate-100/70 border-slate-200 text-slate-800"
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Mother's Info Box */}
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <span className="font-bold text-slate-900 text-sm">Mother's Particulars</span>
                        <span className="px-2.5 py-0.5 bg-rose-100 text-rose-700 text-[10px] font-bold rounded-full">
                          Secondary Guardian
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="font-semibold text-slate-600 block mb-1">Mother's Name</label>
                          <input
                            type="text"
                            disabled={!isEditingProfile}
                            value={isEditingProfile ? tempProfileData.motherName : studentInfo.motherName}
                            onChange={(e) =>
                              setTempProfileData({ ...tempProfileData, motherName: e.target.value })
                            }
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium ${
                              isEditingProfile ? "bg-white border-blue-400" : "bg-slate-100/70 border-slate-200 text-slate-800"
                            }`}
                          />
                        </div>

                        <div>
                          <label className="font-semibold text-slate-600 block mb-1">Occupation / Designation</label>
                          <input
                            type="text"
                            disabled={!isEditingProfile}
                            value={isEditingProfile ? tempProfileData.motherOccupation : studentInfo.motherOccupation}
                            onChange={(e) =>
                              setTempProfileData({ ...tempProfileData, motherOccupation: e.target.value })
                            }
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium ${
                              isEditingProfile ? "bg-white border-blue-400" : "bg-slate-100/70 border-slate-200 text-slate-800"
                            }`}
                          />
                        </div>

                        <div>
                          <label className="font-semibold text-slate-600 block mb-1">Mother's Mobile Phone</label>
                          <input
                            type="tel"
                            disabled={!isEditingProfile}
                            value={isEditingProfile ? tempProfileData.motherPhone : studentInfo.motherPhone}
                            onChange={(e) =>
                              setTempProfileData({ ...tempProfileData, motherPhone: e.target.value })
                            }
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium ${
                              isEditingProfile ? "bg-white border-blue-400" : "bg-slate-100/70 border-slate-200 text-slate-800"
                            }`}
                          />
                        </div>

                        <div>
                          <label className="font-semibold text-slate-600 block mb-1">Mother's Email Address</label>
                          <input
                            type="email"
                            disabled={!isEditingProfile}
                            value={isEditingProfile ? tempProfileData.motherEmail : studentInfo.motherEmail}
                            onChange={(e) =>
                              setTempProfileData({ ...tempProfileData, motherEmail: e.target.value })
                            }
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium ${
                              isEditingProfile ? "bg-white border-blue-400" : "bg-slate-100/70 border-slate-200 text-slate-800"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Permanent Residential Address */}
                  <div>
                    <label className="font-bold text-slate-700 block mb-1.5">
                      Permanent Residential Address
                    </label>
                    <textarea
                      rows={3}
                      disabled={!isEditingProfile}
                      value={isEditingProfile ? tempProfileData.address : studentInfo.address}
                      onChange={(e) =>
                        setTempProfileData({ ...tempProfileData, address: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium transition ${
                        isEditingProfile
                          ? "bg-white border-blue-400 focus:outline-none"
                          : "bg-slate-50 border-slate-200 text-slate-800"
                      }`}
                    />
                  </div>

                  {/* Save / Cancel Controls */}
                  {isEditingProfile && (
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={handleCancelEdit}
                        className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs transition shadow-md shadow-blue-500/20 flex items-center gap-2 cursor-pointer"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save Parent Details</span>
                      </button>
                    </div>
                  )}
                </form>
              </div>
            )}

            {/* ============================================================ */}
            {/* SUB-TAB 4: CAMPUS SERVICES, TRANSPORT & HOSTEL */}
            {/* ============================================================ */}
            {activeProfileTab === "services" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Bus className="w-5 h-5 text-blue-600" />
                    <span>Campus Logistics, Transport &amp; Boarding Services</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    RouteSafe Fleet bus allocation and campus facility allocations
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
                  <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-2">
                    <span className="text-[10px] font-bold uppercase text-blue-700 block">Boarding Type</span>
                    <p className="font-extrabold text-slate-900 text-sm">{studentInfo.boardingType}</p>
                    <p className="text-[11px] text-slate-500">Day-Boarder with AC GPS-enabled transport</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-[10px] font-bold uppercase text-slate-500 block">Assigned Route</span>
                    <p className="font-bold text-slate-900 text-sm">{studentInfo.busRoute}</p>
                    <p className="text-[11px] text-slate-500">Stop: {studentInfo.busStop}</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-[10px] font-bold uppercase text-slate-500 block">Bus Driver &amp; SOS</span>
                    <p className="font-bold text-slate-900 text-sm">{studentInfo.busDriver}</p>
                    <p className="text-[11px] text-emerald-600 font-semibold">Speed governor &amp; GPS verified</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h4 className="font-bold text-slate-900 text-xs flex items-center gap-2">
                    <Home className="w-4 h-4 text-amber-600" />
                    <span>Residential Hostel Allocation (If Applicable)</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    Currently enrolled as a <strong>Day-Boarder</strong>. If you wish to transition to the on-campus residential boarding wing (AC twin-sharing rooms, 5-meal nutrition mess, and supervised study rooms), please submit a Boarding Transition Form via the Admin ERP desk.
                  </p>
                </div>
              </div>
            )}

            {/* ============================================================ */}
            {/* SUB-TAB 5: HEALTH & EMERGENCY PROFILE */}
            {/* ============================================================ */}
            {activeProfileTab === "medical" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose-500" />
                    <span>Medical Profile &amp; Campus Health Records</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Maintained by Cohen Infirmary &amp; Campus Medical Officer for emergency readiness
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100">
                    <span className="text-[10px] font-bold uppercase text-rose-700 block mb-1">Blood Group</span>
                    <p className="text-2xl font-extrabold text-rose-600">{studentInfo.bloodGroup}</p>
                    <p className="text-[10px] text-rose-500 mt-0.5">Rh Positive</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Height &amp; Weight</span>
                    <p className="text-xl font-bold text-slate-900">{studentInfo.height} • {studentInfo.weight}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">BMI: 19.2 (Normal)</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Known Allergies</span>
                    <p className="text-sm font-bold text-slate-800">{studentInfo.allergies}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">No food/drug reactions</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Emergency Care Consent</span>
                    <p className="text-xs font-bold text-emerald-600">✓ Authorized by Parent</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Campus 24/7 Infirmary</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 text-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-800 font-bold">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>24/7 Primary Emergency Hotline Contact</span>
                  </div>
                  <p className="text-slate-700">
                    In the event of an urgent medical situation or campus emergency, the administration will contact:
                  </p>
                  <div className="p-3 bg-white rounded-xl border border-rose-200 flex items-center justify-between">
                    <div>
                      <strong className="text-slate-900 text-sm block">{studentInfo.emergencyContactPerson}</strong>
                      <span className="text-slate-500 text-[11px]">Authorized Guardian Contact</span>
                    </div>
                    <span className="font-mono font-extrabold text-rose-600 text-sm">
                      {studentInfo.emergencyContact}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* ============================================================ */}
            {/* SUB-TAB 6: SECURITY & PORTAL CREDENTIALS */}
            {/* ============================================================ */}
            {activeProfileTab === "security" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-blue-600" />
                    <span>Account Security &amp; Portal Authentication</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Manage your password, multi-factor verification and active portal sessions
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Change Password Form */}
                  <form onSubmit={handlePasswordSubmit} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <Key className="w-4 h-4 text-blue-600" />
                      <span>Update Portal Password</span>
                    </h4>

                    {passwordMsg && (
                      <div
                        className={`p-3 rounded-xl text-xs font-semibold ${
                          passwordMsg.includes("successfully")
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-rose-50 text-rose-700 border border-rose-200"
                        }`}
                      >
                        {passwordMsg}
                      </div>
                    )}

                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="font-semibold text-slate-600 block mb-1">Current Password</label>
                        <input
                          type="password"
                          required
                          placeholder="••••••••"
                          value={passwordForm.currentPassword}
                          onChange={(e) =>
                            setPasswordForm({ ...passwordForm, currentPassword: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-xs"
                        />
                      </div>

                      <div>
                        <label className="font-semibold text-slate-600 block mb-1">New Password</label>
                        <input
                          type="password"
                          required
                          placeholder="At least 6 characters"
                          value={passwordForm.newPassword}
                          onChange={(e) =>
                            setPasswordForm({ ...passwordForm, newPassword: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-xs"
                        />
                      </div>

                      <div>
                        <label className="font-semibold text-slate-600 block mb-1">Confirm New Password</label>
                        <input
                          type="password"
                          required
                          placeholder="Re-enter new password"
                          value={passwordForm.confirmPassword}
                          onChange={(e) =>
                            setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-xs"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition shadow cursor-pointer"
                    >
                      Update Password
                    </button>
                  </form>

                  {/* Security Settings & 2FA */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-600" />
                      <span>Security &amp; Parent Sync</span>
                    </h4>

                    <div className="space-y-4 text-xs">
                      <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200">
                        <div>
                          <strong className="text-slate-900 block">WhatsApp &amp; SMS Login Alerts</strong>
                          <span className="text-slate-500 text-[11px]">Send notification on student login</span>
                        </div>
                        <input
                          type="checkbox"
                          checked={twoFactorEnabled}
                          onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                          className="w-4 h-4 text-blue-600 rounded cursor-pointer"
                        />
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                        <strong className="text-slate-900 block">ParentConnect Sync</strong>
                        <p className="text-slate-500 text-[11px]">
                          Synchronized with Guardian account: <strong>{studentInfo.fatherEmail}</strong>
                        </p>
                        <span className="inline-block text-[10px] text-emerald-600 font-bold">
                          ● Live Biometric Attendance Push Enabled
                        </span>
                      </div>

                      <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-[11px] text-blue-900">
                        For any credential reset or official identity amendment, contact the Cohen IT Administration Cell at <strong>it-helpdesk@cohenschool.edu.in</strong>.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ============================================================ */}
        {/* MODAL: FACULTY PROFILE & CONSULTATION */}
        {/* ============================================================ */}
        {activeFacultyModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn"
            onClick={() => setActiveFacultyModal(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Banner */}
              <div className="p-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${activeFacultyModal.avatarBg} text-white font-extrabold text-lg flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-white/20`}
                  >
                    {activeFacultyModal.initials}
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-400/30 inline-block mb-1">
                      ● {activeFacultyModal.status}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold leading-tight">
                      {activeFacultyModal.name}
                    </h3>
                    <p className="text-xs text-blue-200 font-medium mt-0.5">
                      {activeFacultyModal.title}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveFacultyModal(null)}
                  className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 overflow-y-auto custom-scrollbar space-y-4 text-xs">
                {/* Academic Qualifications & Bio */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Academic Background &amp; Profile
                  </p>
                  <strong className="text-slate-900 block">{activeFacultyModal.qualifications}</strong>
                  <p className="text-slate-600 leading-relaxed font-medium">{activeFacultyModal.bio}</p>
                </div>

                {/* Contact & Cabin Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-1">
                    <span className="text-[10px] font-bold text-blue-700 uppercase block">
                      Faculty Office / Room
                    </span>
                    <strong className="text-slate-900 block">{activeFacultyModal.room}</strong>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100 space-y-1">
                    <span className="text-[10px] font-bold text-purple-700 uppercase block">
                      Doubt Clearing Hours
                    </span>
                    <strong className="text-slate-900 block">{activeFacultyModal.consultationHours}</strong>
                  </div>
                </div>

                {/* Direct Message Form */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h4 className="font-bold text-slate-900 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                    <span>Send Quick Doubt or Consultation Note</span>
                  </h4>

                  {facultyMessageSent ? (
                    <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Your note has been dispatched to {activeFacultyModal.name}'s faculty portal inbox!</span>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!facultyMessageText.trim()) return;
                        setFacultyMessageSent(true);
                      }}
                      className="space-y-3"
                    >
                      <textarea
                        rows={3}
                        required
                        value={facultyMessageText}
                        onChange={(e) => setFacultyMessageText(e.target.value)}
                        placeholder={`Dear ${activeFacultyModal.name}, I would like to schedule 10 minutes to clarify doubts regarding...`}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 font-medium text-xs resize-none"
                      />
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-slate-400">
                          Direct email: <strong>{activeFacultyModal.email}</strong>
                        </span>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-[#0077C8] hover:bg-blue-700 text-white font-bold rounded-xl transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-white border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setActiveFacultyModal(null)}
                  className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
