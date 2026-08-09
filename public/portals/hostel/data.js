// HostelFlow - School Hostel Management Mock Data

const HS_DATA = {
  hostel: {
    name: "Cohen Boys Hostel A",
    school: "Cohen International School, Jatani",
    capacity: 240,
    occupied: 218,
    blocks: ["Block A", "Block B", "Block C"]
  },

  kpis: {
    totalBoarders: 218,
    totalRooms: 60,
    occupiedRooms: 55,
    vacantBeds: 22,
    pendingFees: 186400,
    tonightPresent: 211,
    pendingLeaves: 4,
    openComplaints: 3
  },

  boarders: [
    { id: "BRD-1001", name: "Aarav Mohanty", class: "X-A", room: "A-101", bed: "1", phone: "+91 98765 11111", parent: "Sunil Mohanty", parentPhone: "+91 98765 11112", feeStatus: "Paid", status: "Present", joinDate: "2024-04-12" },
    { id: "BRD-1002", name: "Rohan Patra", class: "IX-B", room: "A-101", bed: "2", phone: "+91 98765 22222", parent: "Manoj Patra", parentPhone: "+91 98765 22223", feeStatus: "Pending", status: "Present", joinDate: "2024-04-15" },
    { id: "BRD-1003", name: "Aditya Sahoo", class: "VIII-A", room: "A-102", bed: "1", phone: "+91 98765 33333", parent: "Bijay Sahoo", parentPhone: "+91 98765 33334", feeStatus: "Paid", status: "On Leave", joinDate: "2025-04-10" },
    { id: "BRD-1004", name: "Yash Raj", class: "XI-Sci", room: "A-102", bed: "2", phone: "+91 98765 44444", parent: "Rajesh Raj", parentPhone: "+91 98765 44445", feeStatus: "Paid", status: "Present", joinDate: "2023-04-08" },
    { id: "BRD-1005", name: "Kabir Mishra", class: "VII-C", room: "B-201", bed: "1", phone: "+91 98765 55555", parent: "Anil Mishra", parentPhone: "+91 98765 55556", feeStatus: "Pending", status: "Present", joinDate: "2025-06-01" },
    { id: "BRD-1006", name: "Vivaan Das", class: "X-B", room: "B-201", bed: "2", phone: "+91 98765 66666", parent: "Priya Das", parentPhone: "+91 98765 66667", feeStatus: "Paid", status: "Present", joinDate: "2024-04-20" },
    { id: "BRD-1007", name: "Arjun Nayak", class: "IX-A", room: "B-202", bed: "1", phone: "+91 98765 77777", parent: "Rina Nayak", parentPhone: "+91 98765 77778", feeStatus: "Paid", status: "Absent", joinDate: "2024-05-02" },
    { id: "BRD-1008", name: "Ishaan Jena", class: "VIII-B", room: "C-301", bed: "1", phone: "+91 98765 88888", parent: "Kumar Jena", parentPhone: "+91 98765 88889", feeStatus: "Paid", status: "Present", joinDate: "2025-04-15" },
  ],

  rooms: [
    { id: "A-101", block: "Block A", floor: 1, capacity: 4, occupied: 4, type: "Standard", status: "Full" },
    { id: "A-102", block: "Block A", floor: 1, capacity: 4, occupied: 3, type: "Standard", status: "Available" },
    { id: "A-103", block: "Block A", floor: 1, capacity: 4, occupied: 4, type: "Standard", status: "Full" },
    { id: "B-201", block: "Block B", floor: 2, capacity: 4, occupied: 4, type: "Standard", status: "Full" },
    { id: "B-202", block: "Block B", floor: 2, capacity: 4, occupied: 2, type: "Standard", status: "Available" },
    { id: "B-203", block: "Block B", floor: 2, capacity: 3, occupied: 3, type: "Premium", status: "Full" },
    { id: "C-301", block: "Block C", floor: 3, capacity: 4, occupied: 3, type: "Standard", status: "Available" },
    { id: "C-302", block: "Block C", floor: 3, capacity: 4, occupied: 0, type: "Standard", status: "Vacant" },
  ],

  attendanceTonight: [
    { id: "BRD-1001", name: "Aarav Mohanty", room: "A-101", status: "Present", time: "21:05" },
    { id: "BRD-1002", name: "Rohan Patra", room: "A-101", status: "Present", time: "21:08" },
    { id: "BRD-1003", name: "Aditya Sahoo", room: "A-102", status: "On Leave", time: "—" },
    { id: "BRD-1004", name: "Yash Raj", room: "A-102", status: "Present", time: "21:02" },
    { id: "BRD-1005", name: "Kabir Mishra", room: "B-201", status: "Present", time: "21:12" },
    { id: "BRD-1006", name: "Vivaan Das", room: "B-201", status: "Present", time: "21:04" },
    { id: "BRD-1007", name: "Arjun Nayak", room: "B-202", status: "Absent", time: "—" },
    { id: "BRD-1008", name: "Ishaan Jena", room: "C-301", status: "Present", time: "21:15" },
  ],

  messMenu: {
    today: "Sunday",
    breakfast: "Idli, Sambar, Coconut Chutney, Tea",
    lunch: "Rice, Dal Fry, Aloo Gobi, Curd, Salad",
    snacks: "Samosa, Tea",
    dinner: "Roti, Paneer Butter Masala, Rice, Dal, Sweet"
  },

  messFeedback: [
    { date: "2026-08-01", meal: "Dinner", rating: 4.2, comments: 18 },
    { date: "2026-08-01", meal: "Lunch", rating: 3.8, comments: 12 },
    { date: "2026-07-31", meal: "Dinner", rating: 4.5, comments: 22 },
  ],

  fees: [
    { id: "BRD-1001", name: "Aarav Mohanty", room: "A-101", monthly: 4500, paid: 4500, due: 0, status: "Paid", lastPaid: "2026-07-05" },
    { id: "BRD-1002", name: "Rohan Patra", room: "A-101", monthly: 4500, paid: 0, due: 4500, status: "Pending", lastPaid: "2026-06-08" },
    { id: "BRD-1003", name: "Aditya Sahoo", room: "A-102", monthly: 4500, paid: 4500, due: 0, status: "Paid", lastPaid: "2026-07-02" },
    { id: "BRD-1004", name: "Yash Raj", room: "A-102", monthly: 5000, paid: 5000, due: 0, status: "Paid", lastPaid: "2026-07-01" },
    { id: "BRD-1005", name: "Kabir Mishra", room: "B-201", monthly: 4500, paid: 0, due: 9000, status: "Overdue", lastPaid: "2026-05-10" },
    { id: "BRD-1006", name: "Vivaan Das", room: "B-201", monthly: 4500, paid: 4500, due: 0, status: "Paid", lastPaid: "2026-07-03" },
  ],

  leaves: [
    { id: "LV-01", student: "Aditya Sahoo", room: "A-102", type: "Home Visit", from: "2026-08-01", to: "2026-08-03", reason: "Family function", status: "Approved", approvedBy: "Chief Warden" },
    { id: "LV-02", student: "Rohan Patra", room: "A-101", type: "Outing", from: "2026-08-02", to: "2026-08-02", reason: "Medical checkup", status: "Pending", approvedBy: "—" },
    { id: "LV-03", student: "Kabir Mishra", room: "B-201", type: "Home Visit", from: "2026-08-05", to: "2026-08-07", reason: "Sister's wedding", status: "Pending", approvedBy: "—" },
    { id: "LV-04", student: "Arjun Nayak", room: "B-202", type: "Emergency", from: "2026-07-28", to: "2026-07-30", reason: "Grandfather ill", status: "Approved", approvedBy: "Chief Warden" },
  ],

  visitors: [
    { id: "VIS-01", visitor: "Sunil Mohanty", student: "Aarav Mohanty", relation: "Father", inTime: "10:30 AM", outTime: "11:45 AM", date: "2026-08-01", purpose: "Meeting" },
    { id: "VIS-02", visitor: "Priya Das", student: "Vivaan Das", relation: "Mother", inTime: "04:15 PM", outTime: "05:00 PM", date: "2026-08-01", purpose: "Deliver medicines" },
    { id: "VIS-03", visitor: "Manoj Patra", student: "Rohan Patra", relation: "Father", inTime: "09:00 AM", outTime: "—", date: "2026-08-02", purpose: "Fee discussion" },
  ],

  complaints: [
    { id: "CMP-01", student: "Yash Raj", room: "A-102", type: "Maintenance", title: "Water cooler not working", date: "2026-08-01", status: "Open", priority: "High" },
    { id: "CMP-02", student: "Vivaan Das", room: "B-201", type: "Cleanliness", title: "Bathroom cleaning delay", date: "2026-07-31", status: "In Progress", priority: "Medium" },
    { id: "CMP-03", student: "Ishaan Jena", room: "C-301", type: "Electrical", title: "Tube light flickering", date: "2026-07-30", status: "Open", priority: "Low" },
    { id: "CMP-04", student: "Aarav Mohanty", room: "A-101", type: "Mess", title: "Food quality feedback", date: "2026-07-28", status: "Resolved", priority: "Medium" },
  ],

  staff: [
    { id: "STF-01", name: "Ramesh Kumar", role: "Chief Warden", phone: "+91 98765 00001", shift: "Full Time", block: "All" },
    { id: "STF-02", name: "Suresh Patra", role: "Assistant Warden", phone: "+91 98765 00002", shift: "Night", block: "Block A & B" },
    { id: "STF-03", name: "Bikash Nayak", role: "Assistant Warden", phone: "+91 98765 00003", shift: "Day", block: "Block C" },
    { id: "STF-04", name: "Anita Devi", role: "Matron / Care Taker", phone: "+91 98765 00004", shift: "Day", block: "All" },
    { id: "STF-05", name: "Prakash Das", role: "Security Guard", phone: "+91 98765 00005", shift: "Night", block: "Gate" },
  ]
};
