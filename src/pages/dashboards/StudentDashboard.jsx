import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { useAuth } from "../../context/AuthContext";
import {
  GraduationCap,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Clock,
  Trophy,
  Bot,
  Send,
  FileText,
  Upload,
  Pencil,
  Save,
  X,
  User,
  CheckCircle,
  Calendar,
  AlertCircle,
  BarChart2,
} from "lucide-react";

export default function StudentDashboard() {
  const { user } = useAuth();

  // Student Profile & Identity Credentials State (Public & Editable)
  const [studentInfo, setStudentInfo] = useState({
    name: user?.name || "Aarav Mohanty",
    studentId: "STU-2026-0812",
    classGroup: "Class VIII-A",
    roll: "01",
    academicSession: "2025-26",
    stream: "Science & Mathematics (JEE Prep)",
    email: user?.email || "aarav.mohanty@cohenschool.edu.in",
    phone: "+91 98123 45678",
    emergencyContact: "+91 94370 12345",
    targetExam: "JEE Main & Advanced 2028",
  });

  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState({ ...studentInfo });

  // Interactive AI Tutor State
  const [aiQuestion, setAiQuestion] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  // Student Homework Assignments State (Interactive Submission)
  const [assignments, setAssignments] = useState([
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
  ]);

  const [selectedFileForHw, setSelectedFileForHw] = useState({});

  // Ask AI Tutor Handler
  const handleAskAI = (e) => {
    e.preventDefault();
    if (!aiQuestion.trim()) return;
    setAiLoading(true);
    setTimeout(() => {
      setAiAnswer(
        `AI Tutor Response: Great question regarding "${aiQuestion}"! In Linear Equations, to solve for x, isolate the variable by inverse operations. Check Chapter 2, Page 45 for solved numerical examples.`
      );
      setAiLoading(false);
    }, 800);
  };

  // Submit Homework Handler
  const handleHomeworkSubmit = (hwId) => {
    const file = selectedFileForHw[hwId] || "assignment_submission.pdf";
    setAssignments((prev) =>
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

  // Profile Update Submission Handler
  const handleSaveProfile = (e) => {
    e.preventDefault();
    setStudentInfo({ ...editFormData });
    setShowEditModal(false);
    alert("Student Identity & Profile updated successfully!");
  };

  return (
    <DashboardLayout>
      {/* Top Banner Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-navy-900 to-navy-950 border border-blue-500/30 backdrop-blur-xl mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
                Public Student Portal
              </span>
              <span className="px-3.5 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-500/30">
                Academic Session {studentInfo.academicSession}
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
              Welcome back, <span className="text-blue-300">{studentInfo.name}</span>
            </h1>
            <p className="text-white/70 text-sm max-w-2xl">
              Student ID: <strong className="text-white">{studentInfo.studentId}</strong> • Class:{" "}
              <strong className="text-gold-400">{studentInfo.classGroup}</strong> • Roll No:{" "}
              <strong className="text-emerald-400">{studentInfo.roll}</strong>.
            </p>
          </div>

          <button
            onClick={() => {
              setEditFormData({ ...studentInfo });
              setShowEditModal(true);
            }}
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-xs transition shadow-lg flex items-center gap-2 border border-blue-400/40 cursor-pointer"
          >
            <Pencil className="w-4 h-4" />
            <span>Update Profile</span>
          </button>
        </div>
      </div>

      {/* 1. Student Identity Card (4 Key Fields Card) */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md text-slate-800 mb-8">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shadow-2xs">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Student Identity Card</h2>
              <p className="text-xs text-slate-500 font-medium">Official Enrollment Credentials</p>
            </div>
          </div>

          <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 font-semibold text-xs">
            Verified Student
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* Field 1: Student ID */}
          <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/70 text-center hover:bg-blue-50/50 transition">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Student ID
            </p>
            <p className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              {studentInfo.studentId}
            </p>
          </div>

          {/* Field 2: Student Class */}
          <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/70 text-center hover:bg-blue-50/50 transition">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Student Class
            </p>
            <p className="text-base sm:text-lg font-bold text-blue-600 tracking-tight">
              {studentInfo.classGroup}
            </p>
          </div>

          {/* Field 3: Roll Number */}
          <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/70 text-center hover:bg-blue-50/50 transition">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Roll Number
            </p>
            <p className="text-base sm:text-lg font-bold text-emerald-600 tracking-tight">
              {studentInfo.roll}
            </p>
          </div>

          {/* Field 4: Academic Session */}
          <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/70 text-center hover:bg-blue-50/50 transition">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Academic Session
            </p>
            <p className="text-base sm:text-lg font-bold text-purple-600 tracking-tight">
              {studentInfo.academicSession}
            </p>
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid: Left Content (2 cols) & Right Data Content (1 col - White) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side Main Area (2 Columns) */}
        <div className="lg:col-span-2 space-y-8">
          {/* 2. Performance & Score Chart Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md text-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-blue-600" />
                  <span>Subject Performance & Marks Chart</span>
                </h2>
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

            {/* Performance Bar Chart Graphic */}
            <div className="space-y-5">
              {[
                { subject: "Mathematics", score: 94, attendance: 98, color: "bg-blue-600" },
                { subject: "Physics", score: 88, attendance: 96, color: "bg-purple-600" },
                { subject: "Chemistry", score: 85, attendance: 95, color: "bg-amber-500" },
                { subject: "English", score: 96, attendance: 99, color: "bg-emerald-600" },
                { subject: "Computer Science", score: 98, attendance: 100, color: "bg-indigo-600" },
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span>{item.subject}</span>
                    <span className="text-slate-600">
                      Score: <strong className="text-blue-600">{item.score}%</strong> • Attendance:{" "}
                      <strong className="text-emerald-600">{item.attendance}%</strong>
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden flex p-0.5">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${item.color}`}
                      style={{ width: `${item.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Homework & Assignment Submissions Container */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md text-slate-800">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Homework & Submissions</h2>
                  <p className="text-xs text-slate-500">Track and submit your class assignments</p>
                </div>
              </div>
              <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold border border-emerald-100">
                {assignments.filter((a) => a.status === "Submitted").length}/{assignments.length} Completed
              </span>
            </div>

            <div className="space-y-4">
              {assignments.map((hw) => (
                <div
                  key={hw.id}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-slate-300 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="font-bold text-slate-900 text-sm truncate">{hw.title}</h3>
                      <span
                        className={`px-3 py-0.5 rounded-full text-xs font-semibold ${
                          hw.status === "Submitted"
                            ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                            : "bg-amber-50 text-amber-600 border border-amber-100"
                        }`}
                      >
                        {hw.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {hw.subject} • Due Date: <strong className="text-slate-800">{hw.dueDate}</strong>
                    </p>
                    {hw.submittedAt && (
                      <p className="text-[11px] text-emerald-600 font-semibold mt-1">
                        Submitted file: {hw.fileName} on {hw.submittedAt}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    {hw.status === "Submitted" ? (
                      <span className="text-xs text-emerald-600 font-bold flex items-center gap-1.5 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-100">
                        <CheckCircle className="w-4 h-4" /> Submitted
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
                          className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 w-40 font-medium"
                        />
                        <button
                          onClick={() => handleHomeworkSubmit(hw.id)}
                          className="px-4 py-2 bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition flex items-center gap-1.5 shadow-xs"
                        >
                          <Upload className="w-3.5 h-3.5" /> Submit
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Right Side Data Content Column (Pure White Data Cards) */}
        <div className="space-y-6">
          {/* Right Side Card 1: Today's Class Schedule (White Card) */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md text-slate-800">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>Today's Class Schedule</span>
              </h3>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                Mon, 17 Aug
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {[
                { time: "08:00 - 08:45 AM", class: "Mathematics", room: "Room 12", teacher: "Smt. Priya Mohanty", isCurrent: true },
                { time: "08:50 - 09:35 AM", class: "Physics", room: "Room 15", teacher: "Dr. R. K. Mishra", isCurrent: false },
                { time: "09:40 - 10:25 AM", class: "Chemistry", room: "Lab 02", teacher: "Dr. S. Das", isCurrent: false },
                { time: "10:30 - 11:15 AM", class: "Computer Science", room: "Lab 04", teacher: "Er. A. Swain", isCurrent: false },
              ].map((p, idx) => (
                <div key={idx} className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      {p.class} • <span className="text-slate-500 font-normal">{p.room}</span>
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                      {p.time} • {p.teacher}
                    </p>
                  </div>
                  {p.isCurrent ? (
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[11px] border border-emerald-100">
                      Live Now
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 font-semibold text-[11px]">
                      Upcoming
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Card 2: Upcoming Exams & Notices (White Card) */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md text-slate-800">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600" />
                <span>Upcoming Examinations</span>
              </h3>
              <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                Session {studentInfo.academicSession}
              </span>
            </div>

            <div className="space-y-3">
              {[
                { title: "Mathematics Unit Test #3", date: "22 Aug 2026", time: "10:00 AM", status: "In 5 Days" },
                { title: "Physics Lab Practical Exam", date: "25 Aug 2026", time: "09:00 AM", status: "In 8 Days" },
                { title: "JEE Main Full Length Mock #4", date: "30 Aug 2026", time: "10:00 AM", status: "In 13 Days" },
              ].map((ex, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold text-slate-900">{ex.title}</p>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">{ex.date} • {ex.time}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-white text-slate-700 border border-slate-200 text-[10px] font-bold shadow-2xs">
                    {ex.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Card 3: AI Tutor Doubt Solver (White Card) */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md text-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">AI Science Doubt Assistant</h3>
                <p className="text-xs text-slate-500">Ask any physics or mathematics question</p>
              </div>
            </div>

            <form onSubmit={handleAskAI} className="space-y-3">
              <input
                type="text"
                value={aiQuestion}
                onChange={(e) => setAiQuestion(e.target.value)}
                placeholder="Type question (e.g. State Gauss's Law)..."
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 font-medium"
              />
              <button
                type="submit"
                disabled={aiLoading}
                className="w-full py-2.5 bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs rounded-2xl transition flex items-center justify-center gap-2 shadow-xs"
              >
                {aiLoading ? "Solving..." : <><Send className="w-3.5 h-3.5" /> Get Instant Answer</>}
              </button>
            </form>

            {aiAnswer && (
              <div className="mt-4 p-4 rounded-2xl bg-blue-50 border border-blue-100 text-xs text-blue-900 leading-relaxed font-medium">
                {aiAnswer}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Edit Student Identity & Profile Modal */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 text-slate-800">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <Pencil className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Update Student Credentials</h3>
              </div>
              <button
                onClick={() => setShowEditModal(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={editFormData.name}
                    onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student ID
                  </label>
                  <input
                    type="text"
                    required
                    value={editFormData.studentId}
                    onChange={(e) => setEditFormData({ ...editFormData, studentId: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Class
                  </label>
                  <input
                    type="text"
                    required
                    value={editFormData.classGroup}
                    onChange={(e) => setEditFormData({ ...editFormData, classGroup: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Roll Number
                  </label>
                  <input
                    type="text"
                    required
                    value={editFormData.roll}
                    onChange={(e) => setEditFormData({ ...editFormData, roll: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Academic Session
                  </label>
                  <input
                    type="text"
                    required
                    value={editFormData.academicSession}
                    onChange={(e) => setEditFormData({ ...editFormData, academicSession: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Email
                  </label>
                  <input
                    type="email"
                    required
                    value={editFormData.email}
                    onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#0077C8] hover:bg-blue-700 text-white font-bold text-xs transition flex items-center gap-2 shadow-sm"
                >
                  <Save className="w-4 h-4" /> Save Credentials
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
