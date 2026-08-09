// TeachFlow - Teacher Portal Mock Data (Odisha school context)

const TF_DATA = {
  teacher: {
    name: "Smt. Priya Mohanty",
    id: "TCH-2048",
    designation: "TGT",
    subject: "Mathematics",
    school: "Cohen International School, Jatani",
    experience: "9 years",
    phone: "+91 98765 43210",
    email: "priya.mohanty@coheninternationalschool.com"
  },

  upcomingClasses: [
    { time: "08:00 - 08:45", class: "VIII-A", subject: "Mathematics", room: "Room 12", topic: "Linear Equations", status: "Next" },
    { time: "08:50 - 09:35", class: "IX-B", subject: "Mathematics", room: "Room 15", topic: "Quadratic Equations", status: "Upcoming" },
    { time: "09:40 - 10:25", class: "VII-C", subject: "Mathematics", room: "Room 08", topic: "Fractions & Decimals", status: "Upcoming" },
    { time: "11:15 - 12:00", class: "X-A", subject: "Mathematics", room: "Room 18", topic: "Trigonometry Intro", status: "Upcoming" },
    { time: "12:05 - 12:50", class: "VIII-B", subject: "Mathematics", room: "Room 12", topic: "Algebra Basics", status: "Upcoming" },
  ],

  classes: [
    { id: "CLS-01", name: "VIII-A", students: 42, subject: "Mathematics", room: "Room 12", schedule: "Mon, Wed, Fri", avgAttendance: 94, avgScore: 78 },
    { id: "CLS-02", name: "VIII-B", students: 40, subject: "Mathematics", room: "Room 12", schedule: "Tue, Thu, Sat", avgAttendance: 91, avgScore: 74 },
    { id: "CLS-03", name: "IX-B", students: 38, subject: "Mathematics", room: "Room 15", schedule: "Mon, Wed, Fri", avgAttendance: 96, avgScore: 81 },
    { id: "CLS-04", name: "VII-C", students: 45, subject: "Mathematics", room: "Room 08", schedule: "Tue, Thu", avgAttendance: 89, avgScore: 72 },
    { id: "CLS-05", name: "X-A", students: 36, subject: "Mathematics", room: "Room 18", schedule: "Mon, Wed, Fri", avgAttendance: 97, avgScore: 85 },
  ],

  students: {
    "VIII-A": [
      { roll: 1, name: "Aarav Mohanty", attendance: 96, lastScore: 88, status: "Present" },
      { roll: 2, name: "Ananya Das", attendance: 92, lastScore: 76, status: "Present" },
      { roll: 3, name: "Rohan Patra", attendance: 88, lastScore: 65, status: "Absent" },
      { roll: 4, name: "Sneha Nayak", attendance: 98, lastScore: 92, status: "Present" },
      { roll: 5, name: "Aditya Sahoo", attendance: 90, lastScore: 71, status: "Present" },
      { roll: 6, name: "Ishita Jena", attendance: 85, lastScore: 58, status: "Present" },
      { roll: 7, name: "Yash Raj", attendance: 94, lastScore: 84, status: "Present" },
      { roll: 8, name: "Pooja Behera", attendance: 97, lastScore: 90, status: "Present" },
      { roll: 9, name: "Kabir Mishra", attendance: 82, lastScore: 62, status: "Late" },
      { roll: 10, name: "Diya Pradhan", attendance: 95, lastScore: 87, status: "Present" },
    ]
  },

  homework: [
    { id: "HW-01", class: "VIII-A", title: "Solve Linear Equations (Ex 2.3)", due: "2026-08-04", submitted: 38, total: 42, status: "Active" },
    { id: "HW-02", class: "IX-B", title: "Quadratic Formula Practice", due: "2026-08-03", submitted: 35, total: 38, status: "Active" },
    { id: "HW-03", class: "X-A", title: "Trigonometric Ratios Worksheet", due: "2026-08-05", submitted: 12, total: 36, status: "Active" },
    { id: "HW-04", class: "VII-C", title: "Fraction Word Problems", due: "2026-07-30", submitted: 42, total: 45, status: "Closed" },
    { id: "HW-05", class: "VIII-B", title: "Algebra Identity Exercises", due: "2026-07-28", submitted: 40, total: 40, status: "Closed" },
  ],

  exams: [
    { id: "EX-01", name: "Unit Test 2 - Mathematics", classes: "VIII-A, VIII-B", date: "2026-08-12", maxMarks: 40, status: "Scheduled" },
    { id: "EX-02", name: "Half Yearly Exam", classes: "All Classes", date: "2026-09-15", maxMarks: 80, status: "Scheduled" },
    { id: "EX-03", name: "Unit Test 1 - Mathematics", classes: "IX-B, X-A", date: "2026-07-20", maxMarks: 40, status: "Completed" },
    { id: "EX-04", name: "Class Test - Algebra", classes: "VIII-A", date: "2026-07-10", maxMarks: 20, status: "Completed" },
  ],

  marksEntry: [
    { exam: "Unit Test 1", class: "VIII-A", subject: "Mathematics", max: 40, entered: 42, total: 42, status: "Completed" },
    { exam: "Unit Test 1", class: "IX-B", subject: "Mathematics", max: 40, entered: 38, total: 38, status: "Completed" },
    { exam: "Class Test", class: "X-A", subject: "Mathematics", max: 20, entered: 28, total: 36, status: "In Progress" },
    { exam: "Unit Test 2", class: "VIII-A", subject: "Mathematics", max: 40, entered: 0, total: 42, status: "Pending" },
  ],

  timetable: {
    Monday: [
      { period: 1, time: "08:00-08:45", class: "VIII-A", subject: "Mathematics", room: "12" },
      { period: 2, time: "08:50-09:35", class: "IX-B", subject: "Mathematics", room: "15" },
      { period: 3, time: "09:40-10:25", class: "Free", subject: "—", room: "—" },
      { period: 4, time: "10:30-11:15", class: "VII-C", subject: "Mathematics", room: "08" },
      { period: 5, time: "11:15-12:00", class: "X-A", subject: "Mathematics", room: "18" },
      { period: 6, time: "12:05-12:50", class: "VIII-B", subject: "Mathematics", room: "12" },
    ],
    Tuesday: [
      { period: 1, time: "08:00-08:45", class: "VIII-B", subject: "Mathematics", room: "12" },
      { period: 2, time: "08:50-09:35", class: "VII-C", subject: "Mathematics", room: "08" },
      { period: 3, time: "09:40-10:25", class: "IX-B", subject: "Mathematics", room: "15" },
      { period: 4, time: "10:30-11:15", class: "Free", subject: "—", room: "—" },
      { period: 5, time: "11:15-12:00", class: "VIII-A", subject: "Mathematics", room: "12" },
      { period: 6, time: "12:05-12:50", class: "X-A", subject: "Mathematics", room: "18" },
    ],
    Wednesday: [
      { period: 1, time: "08:00-08:45", class: "VIII-A", subject: "Mathematics", room: "12" },
      { period: 2, time: "08:50-09:35", class: "IX-B", subject: "Mathematics", room: "15" },
      { period: 3, time: "09:40-10:25", class: "X-A", subject: "Mathematics", room: "18" },
      { period: 4, time: "10:30-11:15", class: "VII-C", subject: "Mathematics", room: "08" },
      { period: 5, time: "11:15-12:00", class: "Free", subject: "—", room: "—" },
      { period: 6, time: "12:05-12:50", class: "VIII-B", subject: "Mathematics", room: "12" },
    ],
    Thursday: [
      { period: 1, time: "08:00-08:45", class: "VIII-B", subject: "Mathematics", room: "12" },
      { period: 2, time: "08:50-09:35", class: "VII-C", subject: "Mathematics", room: "08" },
      { period: 3, time: "09:40-10:25", class: "Free", subject: "—", room: "—" },
      { period: 4, time: "10:30-11:15", class: "IX-B", subject: "Mathematics", room: "15" },
      { period: 5, time: "11:15-12:00", class: "VIII-A", subject: "Mathematics", room: "12" },
      { period: 6, time: "12:05-12:50", class: "X-A", subject: "Mathematics", room: "18" },
    ],
    Friday: [
      { period: 1, time: "08:00-08:45", class: "VIII-A", subject: "Mathematics", room: "12" },
      { period: 2, time: "08:50-09:35", class: "IX-B", subject: "Mathematics", room: "15" },
      { period: 3, time: "09:40-10:25", class: "VII-C", subject: "Mathematics", room: "08" },
      { period: 4, time: "10:30-11:15", class: "X-A", subject: "Mathematics", room: "18" },
      { period: 5, time: "11:15-12:00", class: "VIII-B", subject: "Mathematics", room: "12" },
      { period: 6, time: "12:05-12:50", class: "Free", subject: "—", room: "—" },
    ],
  },

  leaveHistory: [
    { id: "LV-01", type: "Casual Leave", from: "2026-07-15", to: "2026-07-15", days: 1, reason: "Personal work", status: "Approved" },
    { id: "LV-02", type: "Sick Leave", from: "2026-06-22", to: "2026-06-23", days: 2, reason: "Fever", status: "Approved" },
    { id: "LV-03", type: "Casual Leave", from: "2026-08-08", to: "2026-08-08", days: 1, reason: "Family function", status: "Pending" },
  ],

  performanceStats: {
    classAvg: [72, 75, 78, 74, 81, 79],
    months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    topPerformers: [
      { name: "Sneha Nayak", class: "VIII-A", score: 92 },
      { name: "Pooja Behera", class: "VIII-A", score: 90 },
      { name: "Aarav Mohanty", class: "VIII-A", score: 88 },
    ],
    needsAttention: [
      { name: "Ishita Jena", class: "VIII-A", score: 58, attendance: 85 },
      { name: "Kabir Mishra", class: "VIII-A", score: 62, attendance: 82 },
      { name: "Rohan Patra", class: "VIII-A", score: 65, attendance: 88 },
    ]
  }
};
