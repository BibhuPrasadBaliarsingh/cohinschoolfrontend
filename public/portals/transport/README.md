# RouteSafe TMS — School Transport Management System

A complete, modern, interactive **School Bus Transport Management System** prototype covering all modules you specified.

## Features Implemented

### 1. Dashboard
- KPI cards: Total buses, Active routes, Students using transport, Today's attendance %, Live GPS status
- Fuel consumption summary, Maintenance alerts, Driver attendance, Pending fees
- Live bus status list + recent alerts

### 2. GPS Live Tracking
- Interactive Leaflet map centered on Cuttack, Odisha
- Real-time simulated bus markers with speed, ETA, students on board
- Route deviation alerts, Geofencing, SOS support indicators
- Click any bus card to focus on map

### 3. Student Management
- Full student list with class, roll, bus/route allocation
- Pickup & drop locations, Parent contact, RFID/QR codes
- Fee status (Paid/Pending), Search/filter

### 4. Driver Management
- Driver profiles with photo initials, phone, licence details
- Licence expiry warnings, Experience, Ratings, Duty status
- Assigned bus, Attendance

### 5. Bus Management
- Registration numbers (Odisha series), Model, Capacity
- Insurance / Fitness / Pollution certificate expiry tracking
- Odometer, Status (Running / Repair)

### 6. Route Management
- Multiple routes with stops, distance, morning/evening schedules
- AI Optimize button (demo), Student counts, Active/Inactive

### 7. Fuel Management
- Fuel entries with station, cost, odometer, calculated mileage
- Monthly consumption chart (Chart.js)
- Cost per km, Theft detection log placeholder

### 8. Maintenance Module
- Service schedule, Oil change, Tyre/Battery replacement
- Priority (High/Medium/Low), Status, Cost estimates

### 9. Attendance
- Student boarding status with RFID support
- Driver & Conductor attendance summary bars
- Face Recognition ready indicator

### 10–14. Parent App indicators, Notifications, Expenses, Reports, Admin Settings
- Full notification center (SMS / WhatsApp / Push / Email)
- Expense breakdown pie chart
- 8 report types ready to generate
- Roles & permissions, Fee config, Multi-school toggle, Backup

### 15. Advanced Features listed
- AI route optimization, Predictive maintenance, Driver behavior, CCTV, Face recognition, Offline GPS sync, etc.

## Tech Used (Frontend Prototype)
- **HTML5 + Tailwind CSS** (via CDN)
- **Vanilla JavaScript** (no build step required)
- **Lucide Icons**
- **Chart.js** for analytics
- **Leaflet + OpenStreetMap** for GPS map
- Realistic mock data for Cuttack / Odisha context

## How to Run
1. Open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari).
2. No server or installation needed — fully client-side.

## Mobile Responsive
- Works from **320px** phones up to large desktops
- Hamburger menu + slide-out sidebar on mobile & tablet
- Touch-friendly targets (44px+)
- Adaptive KPI cards, horizontally scrollable tables
- Stacked layouts on small screens
- Map height adjusts automatically
- Safe-area support for notched devices

## Technology Stack (as specified for full production)
| Layer          | Technology                          |
|----------------|-------------------------------------|
| Frontend       | React.js                            |
| Backend        | Node.js + Express                   |
| Mobile App     | React Native                        |
| Database       | MongoDB                             |
| Maps & GPS     | Google Maps API / Mapbox            |
| Notifications  | Firebase Cloud Messaging + SMS/WhatsApp APIs |
| Cloud          | AWS or Azure                        |

This prototype is a high-fidelity interactive UI that demonstrates the complete product vision.  
It can be used as the design reference / clickable mock for stakeholders and as a starting point for the full React + Node.js implementation.

---
**RouteSafe TMS** • Built for school transport safety & efficiency
