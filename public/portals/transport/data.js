// ============================================================
// RouteSafe TMS - Mock Data (School Transport Management)
// Realistic data for Odisha / Indian school context
// ============================================================

const TMS_DATA = {
  school: {
    name: "Cohen International School",
    location: "Jatani, Odisha",
    academicYear: "2025-26"
  },

  kpis: {
    totalBuses: 18,
    activeRoutes: 12,
    studentsUsingTransport: 842,
    todayAttendance: 91.4,
    liveGpsOnline: 16,
    fuelThisMonth: 18450, // litres
    pendingFees: 124500, // INR
    maintenanceAlerts: 4
  },

  buses: [
    { id: "BUS-01", regNo: "OD-05-AB-2145", model: "Tata Starbus", capacity: 45, status: "Running", driver: "Ramesh Kumar", route: "Route A - CDA", insuranceExpiry: "2026-11-15", fitnessExpiry: "2026-09-20", pollutionExpiry: "2026-08-30", lastService: "2026-06-12", odometer: 87420 },
    { id: "BUS-02", regNo: "OD-05-CD-3389", model: "Ashok Leyland", capacity: 52, status: "Running", driver: "Suresh Patra", route: "Route B - Badambadi", insuranceExpiry: "2027-01-10", fitnessExpiry: "2026-12-05", pollutionExpiry: "2026-10-15", lastService: "2026-07-01", odometer: 65210 },
    { id: "BUS-03", regNo: "OD-05-EF-4512", model: "Force Traveller", capacity: 32, status: "Running", driver: "Bikash Nayak", route: "Route C - Link Road", insuranceExpiry: "2026-08-22", fitnessExpiry: "2026-07-30", pollutionExpiry: "2026-09-05", lastService: "2026-05-20", odometer: 42150 },
    { id: "BUS-04", regNo: "OD-05-GH-6678", model: "Tata Starbus", capacity: 45, status: "Repair", driver: "—", route: "—", insuranceExpiry: "2026-10-08", fitnessExpiry: "2026-11-12", pollutionExpiry: "2026-08-18", lastService: "2026-07-25", odometer: 98500 },
    { id: "BUS-05", regNo: "OD-05-IJ-7890", model: "Mahindra Tourister", capacity: 40, status: "Running", driver: "Prakash Das", route: "Route D - College Square", insuranceExpiry: "2027-03-01", fitnessExpiry: "2026-12-20", pollutionExpiry: "2026-11-10", lastService: "2026-06-28", odometer: 54320 },
    { id: "BUS-06", regNo: "OD-05-KL-9012", model: "Tata Winger", capacity: 26, status: "Running", driver: "Anil Mohanty", route: "Route E - Naya Bazar", insuranceExpiry: "2026-09-15", fitnessExpiry: "2026-08-25", pollutionExpiry: "2026-10-01", lastService: "2026-07-10", odometer: 31280 },
  ],

  drivers: [
    { id: "DRV-01", name: "Ramesh Kumar", phone: "+91 98765 43210", licence: "OD0520150012345", licenceExpiry: "2027-05-12", experience: "12 yrs", rating: 4.8, status: "On Duty", bus: "BUS-01", attendance: "Present", photo: "RK" },
    { id: "DRV-02", name: "Suresh Patra", phone: "+91 97654 32109", licence: "OD0520180056789", licenceExpiry: "2026-11-30", experience: "8 yrs", rating: 4.6, status: "On Duty", bus: "BUS-02", attendance: "Present", photo: "SP" },
    { id: "DRV-03", name: "Bikash Nayak", phone: "+91 96543 21098", licence: "OD0520160098765", licenceExpiry: "2027-02-18", experience: "10 yrs", rating: 4.9, status: "On Duty", bus: "BUS-03", attendance: "Present", photo: "BN" },
    { id: "DRV-04", name: "Prakash Das", phone: "+91 95432 10987", licence: "OD0520190034567", licenceExpiry: "2026-09-05", experience: "6 yrs", rating: 4.5, status: "On Duty", bus: "BUS-05", attendance: "Present", photo: "PD" },
    { id: "DRV-05", name: "Anil Mohanty", phone: "+91 94321 09876", licence: "OD0520170078901", licenceExpiry: "2027-08-22", experience: "9 yrs", rating: 4.7, status: "On Duty", bus: "BUS-06", attendance: "Present", photo: "AM" },
    { id: "DRV-06", name: "Deepak Sahoo", phone: "+91 93210 98765", licence: "OD0520200011223", licenceExpiry: "2026-12-15", experience: "5 yrs", rating: 4.4, status: "Off Duty", bus: "—", attendance: "Leave", photo: "DS" },
  ],

  students: [
    { id: "STU-1001", name: "Aarav Mohanty", class: "VIII-A", roll: "15", bus: "BUS-01", route: "Route A", pickup: "CDA Sector 6", drop: "School Gate", parent: "Sunil Mohanty", parentPhone: "+91 98765 11111", rfid: "RFID-78421", status: "Boarded", feeStatus: "Paid" },
    { id: "STU-1002", name: "Ananya Das", class: "VI-B", roll: "08", bus: "BUS-01", route: "Route A", pickup: "CDA Sector 10", drop: "School Gate", parent: "Priya Das", parentPhone: "+91 98765 22222", rfid: "RFID-78422", status: "Boarded", feeStatus: "Paid" },
    { id: "STU-1003", name: "Rohan Patra", class: "X-A", roll: "22", bus: "BUS-02", route: "Route B", pickup: "Badambadi Bus Stand", drop: "School Gate", parent: "Manoj Patra", parentPhone: "+91 98765 33333", rfid: "RFID-78423", status: "Waiting", feeStatus: "Pending" },
    { id: "STU-1004", name: "Sneha Nayak", class: "VII-C", roll: "11", bus: "BUS-02", route: "Route B", pickup: "Madhupatna", drop: "School Gate", parent: "Rina Nayak", parentPhone: "+91 98765 44444", rfid: "RFID-78424", status: "Boarded", feeStatus: "Paid" },
    { id: "STU-1005", name: "Aditya Sahoo", class: "IX-A", roll: "05", bus: "BUS-03", route: "Route C", pickup: "Link Road Crossing", drop: "School Gate", parent: "Bijay Sahoo", parentPhone: "+91 98765 55555", rfid: "RFID-78425", status: "Boarded", feeStatus: "Paid" },
    { id: "STU-1006", name: "Ishita Jena", class: "V-A", roll: "19", bus: "BUS-05", route: "Route D", pickup: "College Square", drop: "School Gate", parent: "Kumar Jena", parentPhone: "+91 98765 66666", rfid: "RFID-78426", status: "Absent", feeStatus: "Paid" },
    { id: "STU-1007", name: "Yash Raj", class: "XI-Sci", roll: "03", bus: "BUS-06", route: "Route E", pickup: "Naya Bazar", drop: "School Gate", parent: "Rajesh Raj", parentPhone: "+91 98765 77777", rfid: "RFID-78427", status: "Boarded", feeStatus: "Pending" },
    { id: "STU-1008", name: "Pooja Behera", class: "IV-B", roll: "14", bus: "BUS-01", route: "Route A", pickup: "CDA Sector 7", drop: "School Gate", parent: "Anita Behera", parentPhone: "+91 98765 88888", rfid: "RFID-78428", status: "Boarded", feeStatus: "Paid" },
  ],

  routes: [
    { id: "RT-A", name: "Route A - CDA", bus: "BUS-01", driver: "Ramesh Kumar", stops: 8, distance: "18.5 km", morningStart: "06:45", morningArrive: "07:55", eveningStart: "14:10", students: 42, status: "Active" },
    { id: "RT-B", name: "Route B - Badambadi", bus: "BUS-02", driver: "Suresh Patra", stops: 10, distance: "22.0 km", morningStart: "06:30", morningArrive: "07:50", eveningStart: "14:15", students: 48, status: "Active" },
    { id: "RT-C", name: "Route C - Link Road", bus: "BUS-03", driver: "Bikash Nayak", stops: 6, distance: "12.8 km", morningStart: "07:00", morningArrive: "07:55", eveningStart: "14:05", students: 28, status: "Active" },
    { id: "RT-D", name: "Route D - College Square", bus: "BUS-05", driver: "Prakash Das", stops: 7, distance: "15.2 km", morningStart: "06:50", morningArrive: "07:52", eveningStart: "14:12", students: 35, status: "Active" },
    { id: "RT-E", name: "Route E - Naya Bazar", bus: "BUS-06", driver: "Anil Mohanty", stops: 5, distance: "9.6 km", morningStart: "07:10", morningArrive: "07:58", eveningStart: "14:08", students: 22, status: "Active" },
    { id: "RT-F", name: "Route F - Ring Road", bus: "—", driver: "—", stops: 9, distance: "20.4 km", morningStart: "06:40", morningArrive: "07:48", eveningStart: "14:18", students: 0, status: "Inactive" },
  ],

  fuelEntries: [
    { id: "FUEL-01", bus: "BUS-01", date: "2026-07-28", liters: 48, cost: 4800, station: "IOCL CDA", odometer: 87420, mileage: "6.2 km/l" },
    { id: "FUEL-02", bus: "BUS-02", date: "2026-07-27", liters: 55, cost: 5500, station: "BPCL Badambadi", odometer: 65210, mileage: "5.8 km/l" },
    { id: "FUEL-03", bus: "BUS-03", date: "2026-07-26", liters: 32, cost: 3200, station: "HP Link Road", odometer: 42150, mileage: "7.1 km/l" },
    { id: "FUEL-04", bus: "BUS-05", date: "2026-07-25", liters: 42, cost: 4200, station: "IOCL College Sq", odometer: 54320, mileage: "6.5 km/l" },
    { id: "FUEL-05", bus: "BUS-06", date: "2026-07-24", liters: 28, cost: 2800, station: "BPCL Naya Bazar", odometer: 31280, mileage: "7.4 km/l" },
    { id: "FUEL-06", bus: "BUS-01", date: "2026-07-20", liters: 45, cost: 4500, station: "IOCL CDA", odometer: 87120, mileage: "6.0 km/l" },
  ],

  maintenance: [
    { id: "MNT-01", bus: "BUS-04", type: "Engine Overhaul", status: "In Progress", priority: "High", scheduled: "2026-07-25", cost: 45000, notes: "Major repair - engine knocking" },
    { id: "MNT-02", bus: "BUS-01", type: "Oil Change + Filter", status: "Completed", priority: "Medium", scheduled: "2026-07-15", cost: 3200, notes: "Regular service" },
    { id: "MNT-03", bus: "BUS-02", type: "Tyre Replacement (2)", status: "Due Soon", priority: "Medium", scheduled: "2026-08-05", cost: 18000, notes: "Front tyres worn" },
    { id: "MNT-04", bus: "BUS-03", type: "Battery Replacement", status: "Scheduled", priority: "Low", scheduled: "2026-08-12", cost: 8500, notes: "Battery 3 years old" },
    { id: "MNT-05", bus: "BUS-05", type: "Brake Pad Replacement", status: "Due Soon", priority: "High", scheduled: "2026-08-02", cost: 6200, notes: "Squeaking noise reported" },
  ],

  expenses: [
    { category: "Fuel", amount: 185600, month: "July 2026" },
    { category: "Maintenance", amount: 78400, month: "July 2026" },
    { category: "Driver Salary", amount: 216000, month: "July 2026" },
    { category: "Toll & Parking", amount: 12400, month: "July 2026" },
    { category: "Insurance", amount: 45000, month: "July 2026" },
    { category: "Miscellaneous", amount: 8900, month: "July 2026" },
  ],

  notifications: [
    { id: 1, type: "alert", title: "Route Deviation Detected", message: "BUS-02 (Route B) has deviated from planned route near Madhupatna.", time: "2 min ago", read: false },
    { id: 2, type: "info", title: "Student Boarded", message: "Aarav Mohanty (RFID-78421) boarded BUS-01 at CDA Sector 6.", time: "8 min ago", read: false },
    { id: 3, type: "warning", title: "Licence Expiry Reminder", message: "Driver Prakash Das licence expires on 05 Sep 2026.", time: "1 hour ago", read: true },
    { id: 4, type: "success", title: "Trip Completed", message: "BUS-03 (Route C) completed morning trip. All students dropped.", time: "2 hours ago", read: true },
    { id: 5, type: "alert", title: "Maintenance Alert", message: "BUS-04 engine repair is 70% complete. Expected ready by tomorrow.", time: "3 hours ago", read: true },
    { id: 6, type: "info", title: "Fuel Entry Added", message: "48L diesel filled for BUS-01 at IOCL CDA. Cost ₹4,800.", time: "5 hours ago", read: true },
  ],

  // Simulated live GPS positions (around Jatani / Bhubaneswar)
  liveBuses: [
    { id: "BUS-01", name: "BUS-01 • Route A", lat: 20.4625, lng: 85.8820, speed: 28, status: "Moving", eta: "12 min", studentsOnBoard: 38 },
    { id: "BUS-02", name: "BUS-02 • Route B", lat: 20.4550, lng: 85.8750, speed: 0, status: "Stopped", eta: "18 min", studentsOnBoard: 42 },
    { id: "BUS-03", name: "BUS-03 • Route C", lat: 20.4700, lng: 85.8900, speed: 35, status: "Moving", eta: "8 min", studentsOnBoard: 25 },
    { id: "BUS-05", name: "BUS-05 • Route D", lat: 20.4480, lng: 85.8680, speed: 22, status: "Moving", eta: "15 min", studentsOnBoard: 31 },
    { id: "BUS-06", name: "BUS-06 • Route E", lat: 20.4780, lng: 85.9020, speed: 18, status: "Moving", eta: "6 min", studentsOnBoard: 19 },
  ],

  attendanceToday: {
    students: { present: 768, absent: 74, total: 842 },
    drivers: { present: 15, leave: 2, total: 17 },
    conductors: { present: 12, leave: 1, total: 13 }
  }
};
