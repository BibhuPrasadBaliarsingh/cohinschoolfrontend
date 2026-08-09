// ============================================================
// RouteSafe TMS - Application Logic (Mobile Responsive)
// ============================================================

let currentPage = 'dashboard';
let mapInstance = null;
let fuelChart = null;

// ---------- Sidebar Controls (Mobile) ----------
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('overlay').classList.add('show');
  document.body.classList.add('menu-open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
  document.body.classList.remove('menu-open');
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  if (sb.classList.contains('open')) closeSidebar();
  else openSidebar();
}

function formatINR(n) {
  return '₹' + Number(n).toLocaleString('en-IN');
}

function statusBadge(status) {
  const map = {
    'Running': 'bg-emerald-100 text-emerald-700',
    'Repair': 'bg-amber-100 text-amber-700',
    'Active': 'bg-emerald-100 text-emerald-700',
    'Inactive': 'bg-slate-100 text-slate-600',
    'On Duty': 'bg-emerald-100 text-emerald-700',
    'Off Duty': 'bg-slate-100 text-slate-600',
    'Present': 'bg-emerald-100 text-emerald-700',
    'Leave': 'bg-rose-100 text-rose-700',
    'Boarded': 'bg-emerald-100 text-emerald-700',
    'Waiting': 'bg-amber-100 text-amber-700',
    'Absent': 'bg-rose-100 text-rose-700',
    'Paid': 'bg-emerald-100 text-emerald-700',
    'Pending': 'bg-rose-100 text-rose-700',
    'In Progress': 'bg-blue-100 text-blue-700',
    'Completed': 'bg-emerald-100 text-emerald-700',
    'Due Soon': 'bg-amber-100 text-amber-700',
    'Scheduled': 'bg-indigo-100 text-indigo-700',
    'High': 'bg-rose-100 text-rose-700',
    'Medium': 'bg-amber-100 text-amber-700',
    'Low': 'bg-slate-100 text-slate-600',
    'Moving': 'bg-emerald-100 text-emerald-700',
    'Stopped': 'bg-amber-100 text-amber-700',
  };
  const cls = map[status] || 'bg-slate-100 text-slate-600';
  return `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${cls}">${status}</span>`;
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const colors = { info: 'bg-blue-600', success: 'bg-emerald-600', warning: 'bg-amber-500', error: 'bg-rose-600' };
  const toast = document.createElement('div');
  toast.className = `${colors[type]} text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 text-sm font-medium max-w-sm pointer-events-auto mx-auto sm:mx-0`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; setTimeout(() => toast.remove(), 300); }, 3200);
}

function showPage(page) {
  currentPage = page;
  // Always close mobile sidebar after navigation
  closeSidebar();

  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
  });

  const titles = {
    dashboard: ['Dashboard', 'Overview of your school transport operations'],
    gps: ['Live GPS Tracking', 'Real-time bus locations & ETA'],
    attendance: ['Attendance', 'Student, driver & conductor attendance'],
    students: ['Student Management', 'Allocate buses, routes & manage student details'],
    drivers: ['Driver Management', 'Profiles, licences, duty schedule & ratings'],
    buses: ['Bus Management', 'Fleet status, documents & capacity'],
    routes: ['Route Management', 'Optimize routes, stops & schedules'],
    fuel: ['Fuel Management', 'Entries, mileage & expense tracking'],
    maintenance: ['Maintenance Module', 'Service schedule, repairs & inventory'],
    expenses: ['Expense Management', 'Fuel, salary, toll & monthly reports'],
    reports: ['Reports & Analytics', 'Daily, monthly & performance insights'],
    notifications: ['Notifications Center', 'SMS, WhatsApp, Push & Email alerts'],
    settings: ['Admin Settings', 'Roles, fees, calendar & system config']
  };

  document.getElementById('page-title').textContent = titles[page][0];
  document.getElementById('page-subtitle').textContent = titles[page][1];

  const content = document.getElementById('main-content');
  content.innerHTML = '';
  content.classList.add('fade-in');

  const renderers = {
    dashboard: renderDashboard, gps: renderGPS, attendance: renderAttendance,
    students: renderStudents, drivers: renderDrivers, buses: renderBuses,
    routes: renderRoutes, fuel: renderFuel, maintenance: renderMaintenance,
    expenses: renderExpenses, reports: renderReports, notifications: renderNotifications,
    settings: renderSettings
  };

  if (renderers[page]) renderers[page](content);
  lucide.createIcons();
}

function renderDashboard(container) {
  const d = TMS_DATA;
  container.innerHTML = `
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
      <div class="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 card-hover">
        <div class="flex items-center justify-between mb-2 sm:mb-3">
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 flex items-center justify-center"><i data-lucide="bus" class="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"></i></div>
          <span class="text-[10px] sm:text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 sm:px-2 py-0.5 rounded-full">+2</span>
        </div>
        <p class="text-xl sm:text-2xl font-bold text-slate-800">${d.kpis.totalBuses}</p>
        <p class="text-xs sm:text-sm text-slate-500 mt-0.5">Total Buses</p>
      </div>
      <div class="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 card-hover">
        <div class="flex items-center justify-between mb-2 sm:mb-3">
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 flex items-center justify-center"><i data-lucide="route" class="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600"></i></div>
          <span class="text-[10px] sm:text-xs font-medium text-slate-500">${d.kpis.activeRoutes} active</span>
        </div>
        <p class="text-xl sm:text-2xl font-bold text-slate-800">${d.kpis.activeRoutes}</p>
        <p class="text-xs sm:text-sm text-slate-500 mt-0.5">Active Routes</p>
      </div>
      <div class="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 card-hover">
        <div class="flex items-center justify-between mb-2 sm:mb-3">
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-violet-50 flex items-center justify-center"><i data-lucide="users" class="w-4 h-4 sm:w-5 sm:h-5 text-violet-600"></i></div>
          <span class="text-[10px] sm:text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 sm:px-2 py-0.5 rounded-full">${d.kpis.todayAttendance}%</span>
        </div>
        <p class="text-xl sm:text-2xl font-bold text-slate-800">${d.kpis.studentsUsingTransport}</p>
        <p class="text-xs sm:text-sm text-slate-500 mt-0.5">Students</p>
      </div>
      <div class="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 card-hover">
        <div class="flex items-center justify-between mb-2 sm:mb-3">
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 flex items-center justify-center"><i data-lucide="radio" class="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600"></i></div>
          <span class="flex items-center gap-1 text-[10px] sm:text-xs font-medium text-emerald-600"><span class="w-1.5 h-1.5 bg-emerald-500 rounded-full badge-pulse"></span> Live</span>
        </div>
        <p class="text-xl sm:text-2xl font-bold text-slate-800">${d.kpis.liveGpsOnline}/${d.kpis.totalBuses}</p>
        <p class="text-xs sm:text-sm text-slate-500 mt-0.5">GPS Online</p>
      </div>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
      <div class="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200 flex items-center gap-3">
        <div class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0"><i data-lucide="fuel" class="w-4 h-4 sm:w-5 sm:h-5 text-amber-600"></i></div>
        <div class="min-w-0"><p class="text-base sm:text-lg font-bold text-slate-800 truncate">${d.kpis.fuelThisMonth.toLocaleString()} L</p><p class="text-[10px] sm:text-xs text-slate-500">Fuel this month</p></div>
      </div>
      <div class="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200 flex items-center gap-3">
        <div class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0"><i data-lucide="alert-triangle" class="w-4 h-4 sm:w-5 sm:h-5 text-rose-600"></i></div>
        <div class="min-w-0"><p class="text-base sm:text-lg font-bold text-slate-800">${d.kpis.maintenanceAlerts}</p><p class="text-[10px] sm:text-xs text-slate-500">Maint. Alerts</p></div>
      </div>
      <div class="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200 flex items-center gap-3">
        <div class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0"><i data-lucide="indian-rupee" class="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600"></i></div>
        <div class="min-w-0"><p class="text-base sm:text-lg font-bold text-slate-800 truncate">${formatINR(d.kpis.pendingFees)}</p><p class="text-[10px] sm:text-xs text-slate-500">Pending Fees</p></div>
      </div>
      <div class="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200 flex items-center gap-3">
        <div class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0"><i data-lucide="user-check" class="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"></i></div>
        <div class="min-w-0"><p class="text-base sm:text-lg font-bold text-slate-800">${d.attendanceToday.drivers.present}/${d.attendanceToday.drivers.total}</p><p class="text-[10px] sm:text-xs text-slate-500">Drivers Present</p></div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div class="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 class="font-semibold text-slate-800 flex items-center gap-2"><i data-lucide="map-pin" class="w-4 h-4 text-blue-600"></i> Live Bus Status</h3>
          <button onclick="showPage('gps')" class="text-sm text-blue-600 hover:text-blue-700 font-medium">View Map →</button>
        </div>
        <div class="divide-y divide-slate-100">
          ${d.liveBuses.map(b => `
            <div class="px-5 py-3.5 flex items-center justify-between hover:bg-slate-50 transition">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-lg ${b.status === 'Moving' ? 'bg-emerald-50' : 'bg-amber-50'} flex items-center justify-center">
                  <i data-lucide="bus" class="w-4 h-4 ${b.status === 'Moving' ? 'text-emerald-600' : 'text-amber-600'}"></i>
                </div>
                <div>
                  <p class="text-sm font-medium text-slate-800">${b.name}</p>
                  <p class="text-xs text-slate-500">${b.studentsOnBoard} students • ${b.speed} km/h</p>
                </div>
              </div>
              <div class="text-right">${statusBadge(b.status)}<p class="text-xs text-slate-500 mt-1">ETA ${b.eta}</p></div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div class="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 class="font-semibold text-slate-800 flex items-center gap-2"><i data-lucide="bell" class="w-4 h-4 text-amber-500"></i> Recent Alerts</h3>
          <button onclick="showPage('notifications')" class="text-sm text-blue-600 font-medium">All</button>
        </div>
        <div class="divide-y divide-slate-100 max-h-80 overflow-y-auto">
          ${d.notifications.slice(0, 5).map(n => `
            <div class="px-5 py-3 ${n.read ? '' : 'bg-blue-50/40'}">
              <div class="flex items-start gap-2">
                <div class="mt-0.5 w-2 h-2 rounded-full flex-shrink-0 ${n.type === 'alert' ? 'bg-rose-500' : n.type === 'warning' ? 'bg-amber-500' : n.type === 'success' ? 'bg-emerald-500' : 'bg-blue-500'}"></div>
                <div>
                  <p class="text-sm font-medium text-slate-800">${n.title}</p>
                  <p class="text-xs text-slate-500 mt-0.5 line-clamp-2">${n.message}</p>
                  <p class="text-[10px] text-slate-400 mt-1">${n.time}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
      <button onclick="showPage('students')" class="bg-white border border-slate-200 rounded-xl p-4 text-left hover:border-blue-300 hover:shadow-md transition card-hover">
        <i data-lucide="user-plus" class="w-5 h-5 text-blue-600 mb-2"></i><p class="text-sm font-medium text-slate-800">Add Student</p>
      </button>
      <button onclick="showPage('fuel')" class="bg-white border border-slate-200 rounded-xl p-4 text-left hover:border-blue-300 hover:shadow-md transition card-hover">
        <i data-lucide="fuel" class="w-5 h-5 text-amber-600 mb-2"></i><p class="text-sm font-medium text-slate-800">Log Fuel Entry</p>
      </button>
      <button onclick="showPage('maintenance')" class="bg-white border border-slate-200 rounded-xl p-4 text-left hover:border-blue-300 hover:shadow-md transition card-hover">
        <i data-lucide="wrench" class="w-5 h-5 text-rose-600 mb-2"></i><p class="text-sm font-medium text-slate-800">Schedule Service</p>
      </button>
      <button onclick="showPage('reports')" class="bg-white border border-slate-200 rounded-xl p-4 text-left hover:border-blue-300 hover:shadow-md transition card-hover">
        <i data-lucide="file-text" class="w-5 h-5 text-indigo-600 mb-2"></i><p class="text-sm font-medium text-slate-800">Generate Report</p>
      </button>
    </div>
  `;
  lucide.createIcons();
}

function renderGPS(container) {
  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
      <div class="lg:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden order-1">
        <div class="px-4 sm:px-5 py-3 sm:py-4 border-b border-slate-100 flex items-center justify-between gap-2">
          <h3 class="font-semibold text-slate-800 text-sm sm:text-base">Live Map • Cuttack</h3>
          <div class="flex items-center gap-2 text-[10px] sm:text-xs flex-shrink-0">
            <span class="flex items-center gap-1"><span class="w-2 h-2 bg-emerald-500 rounded-full"></span> Moving</span>
            <span class="flex items-center gap-1"><span class="w-2 h-2 bg-amber-500 rounded-full"></span> Stopped</span>
          </div>
        </div>
        <div class="p-3 sm:p-4"><div id="map"></div></div>
      </div>
      <div class="space-y-4 order-2">
        <div class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5">
          <h3 class="font-semibold text-slate-800 mb-3 sm:mb-4 text-sm sm:text-base">Active Vehicles</h3>
          <div class="space-y-3 max-h-[360px] lg:max-h-[480px] overflow-y-auto">
            ${TMS_DATA.liveBuses.map(b => `
              <div class="p-3 rounded-xl border border-slate-100 hover:border-blue-200 transition cursor-pointer" onclick="focusBus('${b.id}')">
                <div class="flex items-center justify-between mb-1">
                  <p class="text-sm font-semibold text-slate-800">${b.id}</p>
                  ${statusBadge(b.status)}
                </div>
                <p class="text-xs text-slate-500 mb-2">${b.name.split('•')[1]?.trim() || ''}</p>
                <div class="grid grid-cols-3 gap-2 text-center">
                  <div class="bg-slate-50 rounded-lg py-1.5"><p class="text-xs font-bold text-slate-700">${b.speed}</p><p class="text-[10px] text-slate-400">km/h</p></div>
                  <div class="bg-slate-50 rounded-lg py-1.5"><p class="text-xs font-bold text-slate-700">${b.eta}</p><p class="text-[10px] text-slate-400">ETA</p></div>
                  <div class="bg-slate-50 rounded-lg py-1.5"><p class="text-xs font-bold text-slate-700">${b.studentsOnBoard}</p><p class="text-[10px] text-slate-400">Students</p></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center"><i data-lucide="clock" class="w-5 h-5 text-blue-600"></i></div>
        <div><p class="text-sm font-medium">ETA Monitoring</p><p class="text-xs text-slate-500">Real-time arrival</p></div>
      </div>
      <div class="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center"><i data-lucide="alert-octagon" class="w-5 h-5 text-rose-600"></i></div>
        <div><p class="text-sm font-medium">Route Deviation</p><p class="text-xs text-slate-500">Instant alerts</p></div>
      </div>
      <div class="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center"><i data-lucide="shield" class="w-5 h-5 text-emerald-600"></i></div>
        <div><p class="text-sm font-medium">Geofencing</p><p class="text-xs text-slate-500">School/Home zones</p></div>
      </div>
      <div class="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center"><i data-lucide="siren" class="w-5 h-5 text-amber-600"></i></div>
        <div><p class="text-sm font-medium">SOS / Panic</p><p class="text-xs text-slate-500">Emergency button</p></div>
      </div>
    </div>
  `;
  lucide.createIcons();
  setTimeout(initMap, 100);
}

function initMap() {
  if (mapInstance) { mapInstance.remove(); mapInstance = null; }
  const mapEl = document.getElementById('map');
  if (!mapEl) return;
  mapInstance = L.map('map').setView([20.1580, 85.7070], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(mapInstance);
  TMS_DATA.liveBuses.forEach(b => {
    const color = b.status === 'Moving' ? '#10b981' : '#f59e0b';
    const icon = L.divIcon({
      className: '',
      html: `<div style="background:${color};width:28px;height:28px;border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
             </div>`,
      iconSize: [28, 28], iconAnchor: [14, 14]
    });
    L.marker([b.lat, b.lng], { icon }).addTo(mapInstance)
      .bindPopup(`<strong>${b.name}</strong><br>Speed: ${b.speed} km/h<br>ETA: ${b.eta}<br>Students: ${b.studentsOnBoard}`);
  });
  L.marker([20.1580, 85.7070]).addTo(mapInstance).bindPopup("<strong>Cohen International School</strong><br>Main Campus");
}

function focusBus(id) {
  const bus = TMS_DATA.liveBuses.find(b => b.id === id);
  if (bus && mapInstance) { mapInstance.setView([bus.lat, bus.lng], 15); showToast(`Focused on ${id}`, 'info'); }
}

function renderAttendance(container) {
  const a = TMS_DATA.attendanceToday;
  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div class="bg-white rounded-2xl p-5 border border-slate-200">
        <div class="flex items-center justify-between mb-4"><h3 class="font-semibold text-slate-800">Students</h3><i data-lucide="graduation-cap" class="w-5 h-5 text-violet-500"></i></div>
        <div class="flex items-end gap-2 mb-2"><span class="text-3xl font-bold text-slate-800">${a.students.present}</span><span class="text-sm text-slate-500 mb-1">/ ${a.students.total}</span></div>
        <div class="w-full bg-slate-100 rounded-full h-2 mb-2"><div class="bg-emerald-500 h-2 rounded-full" style="width:${(a.students.present/a.students.total*100).toFixed(1)}%"></div></div>
        <p class="text-xs text-slate-500">${a.students.absent} absent today</p>
      </div>
      <div class="bg-white rounded-2xl p-5 border border-slate-200">
        <div class="flex items-center justify-between mb-4"><h3 class="font-semibold text-slate-800">Drivers</h3><i data-lucide="user-round" class="w-5 h-5 text-blue-500"></i></div>
        <div class="flex items-end gap-2 mb-2"><span class="text-3xl font-bold text-slate-800">${a.drivers.present}</span><span class="text-sm text-slate-500 mb-1">/ ${a.drivers.total}</span></div>
        <div class="w-full bg-slate-100 rounded-full h-2 mb-2"><div class="bg-blue-500 h-2 rounded-full" style="width:${(a.drivers.present/a.drivers.total*100).toFixed(1)}%"></div></div>
        <p class="text-xs text-slate-500">${a.drivers.leave} on leave</p>
      </div>
      <div class="bg-white rounded-2xl p-5 border border-slate-200">
        <div class="flex items-center justify-between mb-4"><h3 class="font-semibold text-slate-800">Conductors</h3><i data-lucide="users" class="w-5 h-5 text-cyan-500"></i></div>
        <div class="flex items-end gap-2 mb-2"><span class="text-3xl font-bold text-slate-800">${a.conductors.present}</span><span class="text-sm text-slate-500 mb-1">/ ${a.conductors.total}</span></div>
        <div class="w-full bg-slate-100 rounded-full h-2 mb-2"><div class="bg-cyan-500 h-2 rounded-full" style="width:${(a.conductors.present/a.conductors.total*100).toFixed(1)}%"></div></div>
        <p class="text-xs text-slate-500">${a.conductors.leave} on leave</p>
      </div>
    </div>
    <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div class="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <h3 class="font-semibold text-slate-800">Today's Student Boarding Status</h3>
        <div class="flex gap-2">
          <span class="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium">RFID / QR Supported</span>
          <span class="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">Face Recognition Ready</span>
        </div>
      </div>
      <div class="table-wrap">
        <table class="w-full text-sm">
          <thead class="bg-slate-50 text-slate-600"><tr>
            <th class="text-left px-4 sm:px-5 py-3 font-medium">Student</th><th class="text-left px-4 sm:px-5 py-3 font-medium">Class</th>
            <th class="text-left px-4 sm:px-5 py-3 font-medium">Bus / Route</th><th class="text-left px-4 sm:px-5 py-3 font-medium">Pickup Point</th>
            <th class="text-left px-4 sm:px-5 py-3 font-medium">RFID</th><th class="text-left px-4 sm:px-5 py-3 font-medium">Status</th>
          </tr></thead>
          <tbody class="divide-y divide-slate-100">
            ${TMS_DATA.students.map(s => `
              <tr class="hover:bg-slate-50">
                <td class="px-5 py-3"><div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">${s.name.split(' ').map(n=>n[0]).join('')}</div>
                  <div><p class="font-medium text-slate-800">${s.name}</p><p class="text-xs text-slate-500">${s.id}</p></div>
                </div></td>
                <td class="px-5 py-3 text-slate-600">${s.class}</td>
                <td class="px-5 py-3 text-slate-600">${s.bus} • ${s.route}</td>
                <td class="px-5 py-3 text-slate-600">${s.pickup}</td>
                <td class="px-5 py-3 font-mono text-xs text-slate-500">${s.rfid}</td>
                <td class="px-5 py-3">${statusBadge(s.status)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
  lucide.createIcons();
}

function renderStudents(container) {
  container.innerHTML = `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
      <div class="relative w-full sm:w-auto">
        <i data-lucide="search" class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
        <input type="text" id="student-search" placeholder="Search name, class, RFID..." class="pl-9 pr-4 py-2.5 w-full sm:w-72 text-sm bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500" oninput="filterStudents()" />
      </div>
      <button onclick="showToast('Add Student form would open here','info')" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-medium rounded-xl transition shadow-sm shadow-blue-600/20 w-full sm:w-auto">
        <i data-lucide="plus" class="w-4 h-4"></i> Add Student
      </button>
    </div>
    <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div class="table-wrap">
        <table class="w-full text-sm" id="students-table">
          <thead class="bg-slate-50 text-slate-600"><tr>
            <th class="text-left px-4 sm:px-5 py-3 font-medium">Student</th><th class="text-left px-4 sm:px-5 py-3 font-medium">Class / Roll</th>
            <th class="text-left px-4 sm:px-5 py-3 font-medium">Bus Allocation</th><th class="text-left px-4 sm:px-5 py-3 font-medium">Pickup / Drop</th>
            <th class="text-left px-4 sm:px-5 py-3 font-medium">Parent Contact</th><th class="text-left px-4 sm:px-5 py-3 font-medium">Fee</th>
            <th class="text-left px-4 sm:px-5 py-3 font-medium">Actions</th>
          </tr></thead>
          <tbody class="divide-y divide-slate-100">
            ${TMS_DATA.students.map(s => `
              <tr class="hover:bg-slate-50 student-row" data-search="${(s.name + ' ' + s.class + ' ' + s.rfid + ' ' + s.bus).toLowerCase()}">
                <td class="px-5 py-3"><div class="flex items-center gap-3">
                  <div class="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">${s.name.split(' ').map(n=>n[0]).join('')}</div>
                  <div><p class="font-medium text-slate-800">${s.name}</p><p class="text-xs text-slate-500">${s.id} • ${s.rfid}</p></div>
                </div></td>
                <td class="px-5 py-3 text-slate-600">${s.class}<br><span class="text-xs text-slate-400">Roll ${s.roll}</span></td>
                <td class="px-5 py-3"><p class="font-medium text-slate-700">${s.bus}</p><p class="text-xs text-slate-500">${s.route}</p></td>
                <td class="px-5 py-3 text-slate-600 text-xs"><p>📍 ${s.pickup}</p><p class="mt-0.5">🏫 ${s.drop}</p></td>
                <td class="px-5 py-3"><p class="text-slate-700">${s.parent}</p><p class="text-xs text-slate-500">${s.parentPhone}</p></td>
                <td class="px-5 py-3">${statusBadge(s.feeStatus)}</td>
                <td class="px-5 py-3"><div class="flex gap-1">
                  <button class="p-1.5 hover:bg-slate-100 rounded-lg"><i data-lucide="pencil" class="w-4 h-4 text-slate-500"></i></button>
                  <button class="p-1.5 hover:bg-slate-100 rounded-lg"><i data-lucide="eye" class="w-4 h-4 text-slate-500"></i></button>
                </div></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
  lucide.createIcons();
}

function filterStudents() {
  const q = document.getElementById('student-search').value.toLowerCase();
  document.querySelectorAll('.student-row').forEach(row => {
    row.style.display = row.dataset.search.includes(q) ? '' : 'none';
  });
}

function renderDrivers(container) {
  container.innerHTML = `
    <div class="flex justify-between items-center mb-6">
      <p class="text-sm text-slate-500">${TMS_DATA.drivers.length} drivers registered</p>
      <button onclick="showToast('Add Driver form would open','info')" class="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition">
        <i data-lucide="plus" class="w-4 h-4"></i> Add Driver
      </button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      ${TMS_DATA.drivers.map(d => `
        <div class="bg-white rounded-2xl border border-slate-200 p-5 card-hover">
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">${d.photo}</div>
              <div><p class="font-semibold text-slate-800">${d.name}</p><p class="text-xs text-slate-500">${d.id}</p></div>
            </div>
            ${statusBadge(d.status)}
          </div>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between"><span class="text-slate-500">Phone</span><span class="text-slate-700">${d.phone}</span></div>
            <div class="flex justify-between"><span class="text-slate-500">Licence</span><span class="text-slate-700 font-mono text-xs">${d.licence.slice(-8)}</span></div>
            <div class="flex justify-between"><span class="text-slate-500">Expiry</span><span class="${new Date(d.licenceExpiry) < new Date('2026-10-01') ? 'text-amber-600 font-medium' : 'text-slate-700'}">${d.licenceExpiry}</span></div>
            <div class="flex justify-between"><span class="text-slate-500">Experience</span><span class="text-slate-700">${d.experience}</span></div>
            <div class="flex justify-between"><span class="text-slate-500">Assigned Bus</span><span class="text-slate-700 font-medium">${d.bus}</span></div>
            <div class="flex justify-between items-center"><span class="text-slate-500">Rating</span>
              <span class="flex items-center gap-1 text-amber-500 font-medium">${'★'.repeat(Math.floor(d.rating))}<span class="text-slate-600 text-xs ml-1">${d.rating}</span></span>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-100 flex gap-2">
            <button class="flex-1 text-xs py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 font-medium">View Profile</button>
            <button class="flex-1 text-xs py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium">Duty Schedule</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  lucide.createIcons();
}

function renderBuses(container) {
  container.innerHTML = `
    <div class="flex justify-between items-center mb-6">
      <p class="text-sm text-slate-500">${TMS_DATA.buses.length} buses in fleet • ${TMS_DATA.buses.filter(b=>b.status==='Running').length} running</p>
      <button onclick="showToast('Add Bus form would open','info')" class="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition">
        <i data-lucide="plus" class="w-4 h-4"></i> Add Bus
      </button>
    </div>
    <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div class="table-wrap">
        <table class="w-full text-sm">
          <thead class="bg-slate-50 text-slate-600"><tr>
            <th class="text-left px-4 sm:px-5 py-3 font-medium">Bus</th><th class="text-left px-4 sm:px-5 py-3 font-medium">Registration</th>
            <th class="text-left px-4 sm:px-5 py-3 font-medium">Model / Capacity</th><th class="text-left px-4 sm:px-5 py-3 font-medium">Driver / Route</th>
            <th class="text-left px-4 sm:px-5 py-3 font-medium">Documents</th><th class="text-left px-4 sm:px-5 py-3 font-medium">Odometer</th>
            <th class="text-left px-4 sm:px-5 py-3 font-medium">Status</th>
          </tr></thead>
          <tbody class="divide-y divide-slate-100">
            ${TMS_DATA.buses.map(b => {
              const insSoon = new Date(b.insuranceExpiry) < new Date('2026-10-01');
              const fitSoon = new Date(b.fitnessExpiry) < new Date('2026-10-01');
              const polSoon = new Date(b.pollutionExpiry) < new Date('2026-09-15');
              return `
              <tr class="hover:bg-slate-50">
                <td class="px-5 py-3 font-semibold text-slate-800">${b.id}</td>
                <td class="px-5 py-3 font-mono text-xs text-slate-600">${b.regNo}</td>
                <td class="px-5 py-3"><p class="text-slate-700">${b.model}</p><p class="text-xs text-slate-500">${b.capacity} seats</p></td>
                <td class="px-5 py-3"><p class="text-slate-700">${b.driver}</p><p class="text-xs text-slate-500">${b.route}</p></td>
                <td class="px-5 py-3"><div class="flex flex-wrap gap-1">
                  <span class="text-[10px] px-1.5 py-0.5 rounded ${insSoon ? 'bg-amber-100 text-amber-700' : 'bg-emerald-50 text-emerald-700'}">Ins ${b.insuranceExpiry.slice(5)}</span>
                  <span class="text-[10px] px-1.5 py-0.5 rounded ${fitSoon ? 'bg-amber-100 text-amber-700' : 'bg-emerald-50 text-emerald-700'}">Fit ${b.fitnessExpiry.slice(5)}</span>
                  <span class="text-[10px] px-1.5 py-0.5 rounded ${polSoon ? 'bg-rose-100 text-rose-700' : 'bg-emerald-50 text-emerald-700'}">PUC ${b.pollutionExpiry.slice(5)}</span>
                </div></td>
                <td class="px-5 py-3 text-slate-600">${b.odometer.toLocaleString()} km</td>
                <td class="px-5 py-3">${statusBadge(b.status)}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
  lucide.createIcons();
}

function renderRoutes(container) {
  container.innerHTML = `
    <div class="flex justify-between items-center mb-6">
      <p class="text-sm text-slate-500">${TMS_DATA.routes.filter(r=>r.status==='Active').length} active routes</p>
      <div class="flex gap-2">
        <button onclick="showToast('AI Route Optimization would run here','info')" class="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl transition">
          <i data-lucide="sparkles" class="w-4 h-4"></i> AI Optimize
        </button>
        <button onclick="showToast('Add Route form would open','info')" class="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition">
          <i data-lucide="plus" class="w-4 h-4"></i> Add Route
        </button>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      ${TMS_DATA.routes.map(r => `
        <div class="bg-white rounded-2xl border border-slate-200 p-5 card-hover">
          <div class="flex items-start justify-between mb-3">
            <div><h3 class="font-semibold text-slate-800">${r.name}</h3><p class="text-xs text-slate-500 mt-0.5">${r.id} • ${r.stops} stops • ${r.distance}</p></div>
            ${statusBadge(r.status)}
          </div>
          <div class="grid grid-cols-2 gap-3 text-sm mb-4">
            <div class="bg-slate-50 rounded-xl p-3"><p class="text-xs text-slate-500 mb-1">Morning</p><p class="font-medium text-slate-700">${r.morningStart} → ${r.morningArrive}</p></div>
            <div class="bg-slate-50 rounded-xl p-3"><p class="text-xs text-slate-500 mb-1">Evening</p><p class="font-medium text-slate-700">${r.eveningStart} onwards</p></div>
          </div>
          <div class="flex items-center justify-between text-sm">
            <div class="flex items-center gap-4">
              <span class="text-slate-500"><i data-lucide="bus" class="w-3.5 h-3.5 inline mr-1"></i>${r.bus}</span>
              <span class="text-slate-500"><i data-lucide="users" class="w-3.5 h-3.5 inline mr-1"></i>${r.students} students</span>
            </div>
            <button class="text-blue-600 text-xs font-medium hover:underline">View Stops</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  lucide.createIcons();
}

function renderFuel(container) {
  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div class="bg-white rounded-2xl p-4 border border-slate-200"><p class="text-xs text-slate-500 mb-1">This Month</p><p class="text-xl font-bold text-slate-800">${TMS_DATA.kpis.fuelThisMonth.toLocaleString()} L</p></div>
      <div class="bg-white rounded-2xl p-4 border border-slate-200"><p class="text-xs text-slate-500 mb-1">Fuel Cost (Jul)</p><p class="text-xl font-bold text-slate-800">${formatINR(185600)}</p></div>
      <div class="bg-white rounded-2xl p-4 border border-slate-200"><p class="text-xs text-slate-500 mb-1">Avg Mileage</p><p class="text-xl font-bold text-slate-800">6.5 km/l</p></div>
      <div class="bg-white rounded-2xl p-4 border border-slate-200"><p class="text-xs text-slate-500 mb-1">Cost / km</p><p class="text-xl font-bold text-slate-800">₹15.40</p></div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <div class="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-5">
        <h3 class="font-semibold text-slate-800 mb-4">Monthly Fuel Consumption (Litres)</h3>
        <canvas id="fuelChart" height="120"></canvas>
      </div>
      <div class="bg-white rounded-2xl border border-slate-200 p-5">
        <h3 class="font-semibold text-slate-800 mb-4">Quick Actions</h3>
        <button onclick="showToast('Fuel entry form opened','success')" class="w-full mb-3 flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium text-sm transition">
          <i data-lucide="plus-circle" class="w-5 h-5"></i> Add Fuel Entry
        </button>
        <button class="w-full mb-3 flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium text-sm transition">
          <i data-lucide="download" class="w-5 h-5"></i> Export Report
        </button>
        <button class="w-full flex items-center gap-3 p-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 font-medium text-sm transition">
          <i data-lucide="alert-triangle" class="w-5 h-5"></i> Theft Detection Log
        </button>
      </div>
    </div>
    <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div class="px-4 sm:px-5 py-4 border-b border-slate-100"><h3 class="font-semibold text-slate-800">Recent Fuel Entries</h3></div>
      <div class="table-wrap">
        <table class="w-full text-sm">
          <thead class="bg-slate-50 text-slate-600"><tr>
            <th class="text-left px-4 sm:px-5 py-3 font-medium">Date</th><th class="text-left px-4 sm:px-5 py-3 font-medium">Bus</th>
            <th class="text-left px-4 sm:px-5 py-3 font-medium">Liters</th><th class="text-left px-4 sm:px-5 py-3 font-medium">Cost</th>
            <th class="text-left px-4 sm:px-5 py-3 font-medium">Station</th><th class="text-left px-4 sm:px-5 py-3 font-medium">Odometer</th>
            <th class="text-left px-4 sm:px-5 py-3 font-medium">Mileage</th>
          </tr></thead>
          <tbody class="divide-y divide-slate-100">
            ${TMS_DATA.fuelEntries.map(f => `
              <tr class="hover:bg-slate-50">
                <td class="px-5 py-3 text-slate-600">${f.date}</td>
                <td class="px-5 py-3 font-medium text-slate-800">${f.bus}</td>
                <td class="px-5 py-3">${f.liters} L</td>
                <td class="px-5 py-3 font-medium">${formatINR(f.cost)}</td>
                <td class="px-5 py-3 text-slate-600">${f.station}</td>
                <td class="px-5 py-3 text-slate-500">${f.odometer.toLocaleString()}</td>
                <td class="px-5 py-3"><span class="font-medium text-emerald-600">${f.mileage}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
  lucide.createIcons();
  setTimeout(() => {
    const ctx = document.getElementById('fuelChart');
    if (ctx) {
      if (fuelChart) fuelChart.destroy();
      fuelChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{ label: 'Fuel (L)', data: [16200, 17100, 15800, 17900, 16800, 18450], backgroundColor: 'rgba(37, 99, 235, 0.8)', borderRadius: 8, barThickness: 32 }]
        },
        options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: '#f1f5f9' } }, x: { grid: { display: false } } } }
      });
    }
  }, 50);
}

function renderMaintenance(container) {
  container.innerHTML = `
    <div class="flex justify-between items-center mb-6">
      <div class="flex gap-3">
        <span class="text-xs px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 font-medium">${TMS_DATA.maintenance.filter(m=>m.priority==='High').length} High Priority</span>
        <span class="text-xs px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 font-medium">${TMS_DATA.maintenance.filter(m=>m.status==='Due Soon').length} Due Soon</span>
      </div>
      <button onclick="showToast('Schedule service form opened','info')" class="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition">
        <i data-lucide="plus" class="w-4 h-4"></i> Schedule Service
      </button>
    </div>
    <div class="space-y-3">
      ${TMS_DATA.maintenance.map(m => `
        <div class="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 card-hover">
          <div class="flex items-start gap-4">
            <div class="w-11 h-11 rounded-xl ${m.priority==='High' ? 'bg-rose-50' : m.priority==='Medium' ? 'bg-amber-50' : 'bg-slate-50'} flex items-center justify-center flex-shrink-0">
              <i data-lucide="wrench" class="w-5 h-5 ${m.priority==='High' ? 'text-rose-600' : m.priority==='Medium' ? 'text-amber-600' : 'text-slate-500'}"></i>
            </div>
            <div>
              <div class="flex items-center gap-2 mb-1"><h3 class="font-semibold text-slate-800">${m.type}</h3>${statusBadge(m.priority)}</div>
              <p class="text-sm text-slate-500">${m.bus} • Scheduled: ${m.scheduled}</p>
              <p class="text-xs text-slate-400 mt-1">${m.notes}</p>
            </div>
          </div>
          <div class="flex items-center gap-4 sm:text-right">
            <div><p class="text-sm font-bold text-slate-800">${formatINR(m.cost)}</p><p class="text-xs text-slate-500">Est. cost</p></div>
            ${statusBadge(m.status)}
          </div>
        </div>
      `).join('')}
    </div>
  `;
  lucide.createIcons();
}

function renderExpenses(container) {
  const total = TMS_DATA.expenses.reduce((s, e) => s + e.amount, 0);
  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <div class="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-5">
        <h3 class="font-semibold text-slate-800 mb-4">Expense Breakdown — July 2026</h3>
        <canvas id="expenseChart" height="160"></canvas>
      </div>
      <div class="bg-white rounded-2xl border border-slate-200 p-5">
        <h3 class="font-semibold text-slate-800 mb-1">Total Expenses</h3>
        <p class="text-3xl font-bold text-slate-800 mb-4">${formatINR(total)}</p>
        <div class="space-y-3">
          ${TMS_DATA.expenses.map(e => `
            <div class="flex justify-between items-center text-sm">
              <span class="text-slate-600">${e.category}</span>
              <span class="font-medium text-slate-800">${formatINR(e.amount)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      ${['Fuel expenses','Maintenance expenses','Driver salary','Toll charges','Parking charges','Insurance expenses'].map(label => `
        <div class="bg-white rounded-xl border border-slate-200 p-4 hover:border-blue-200 transition cursor-pointer">
          <p class="text-sm font-medium text-slate-700">${label}</p>
          <p class="text-xs text-slate-500 mt-1">View detailed report →</p>
        </div>
      `).join('')}
    </div>
  `;
  setTimeout(() => {
    const ctx = document.getElementById('expenseChart');
    if (ctx) {
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: TMS_DATA.expenses.map(e => e.category),
          datasets: [{ data: TMS_DATA.expenses.map(e => e.amount), backgroundColor: ['#3b82f6','#f59e0b','#10b981','#8b5cf6','#06b6d4','#64748b'], borderWidth: 0 }]
        },
        options: { responsive: true, plugins: { legend: { position: 'right' } } }
      });
    }
  }, 50);
}

function renderReports(container) {
  const reports = [
    { title: 'Daily Trip Report', desc: 'Trip summary, on-time %, student count', icon: 'calendar-days', color: 'blue' },
    { title: 'Monthly Fuel Report', desc: 'Consumption, cost, mileage trends', icon: 'fuel', color: 'amber' },
    { title: 'Bus-wise Expense Report', desc: 'Cost analysis per vehicle', icon: 'bus', color: 'indigo' },
    { title: 'Route-wise Report', desc: 'Performance by route', icon: 'route', color: 'violet' },
    { title: 'Driver Performance', desc: 'Ratings, incidents, punctuality', icon: 'user-round', color: 'cyan' },
    { title: 'Student Transport Usage', desc: 'Attendance & utilization stats', icon: 'graduation-cap', color: 'emerald' },
    { title: 'GPS Travel History', desc: 'Replay trips & stoppages', icon: 'map', color: 'rose' },
    { title: 'Profit / Loss Report', desc: 'If transport is chargeable', icon: 'trending-up', color: 'green' },
  ];
  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      ${reports.map(r => `
        <div class="bg-white rounded-2xl border border-slate-200 p-5 card-hover cursor-pointer group" onclick="showToast('${r.title} generated','success')">
          <div class="w-11 h-11 rounded-xl bg-${r.color}-50 flex items-center justify-center mb-4 group-hover:scale-110 transition">
            <i data-lucide="${r.icon}" class="w-5 h-5 text-${r.color}-600"></i>
          </div>
          <h3 class="font-semibold text-slate-800 mb-1">${r.title}</h3>
          <p class="text-xs text-slate-500">${r.desc}</p>
          <p class="text-xs text-blue-600 font-medium mt-3 opacity-0 group-hover:opacity-100 transition">Generate →</p>
        </div>
      `).join('')}
    </div>
  `;
  lucide.createIcons();
}

function renderNotifications(container) {
  container.innerHTML = `
    <div class="flex items-center justify-between mb-6">
      <div class="flex gap-2">
        <button class="px-3 py-1.5 text-sm font-medium rounded-lg bg-blue-600 text-white">All</button>
        <button class="px-3 py-1.5 text-sm font-medium rounded-lg bg-white border border-slate-200 text-slate-600">Unread</button>
        <button class="px-3 py-1.5 text-sm font-medium rounded-lg bg-white border border-slate-200 text-slate-600">Alerts</button>
      </div>
      <button class="text-sm text-blue-600 font-medium">Mark all as read</button>
    </div>
    <div class="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 overflow-hidden">
      ${TMS_DATA.notifications.map(n => `
        <div class="px-5 py-4 flex items-start gap-4 ${n.read ? '' : 'bg-blue-50/30'} hover:bg-slate-50 transition">
          <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
            n.type === 'alert' ? 'bg-rose-100' : n.type === 'warning' ? 'bg-amber-100' : n.type === 'success' ? 'bg-emerald-100' : 'bg-blue-100'
          }">
            <i data-lucide="${n.type === 'alert' ? 'alert-triangle' : n.type === 'warning' ? 'clock' : n.type === 'success' ? 'check-circle' : 'info'}" class="w-5 h-5 ${
              n.type === 'alert' ? 'text-rose-600' : n.type === 'warning' ? 'text-amber-600' : n.type === 'success' ? 'text-emerald-600' : 'text-blue-600'
            }"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between gap-2">
              <p class="font-medium text-slate-800">${n.title}</p>
              <span class="text-xs text-slate-400 whitespace-nowrap">${n.time}</span>
            </div>
            <p class="text-sm text-slate-600 mt-0.5">${n.message}</p>
          </div>
          ${!n.read ? '<span class="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></span>' : ''}
        </div>
      `).join('')}
    </div>
    <div class="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
      ${['SMS Alerts','WhatsApp','Push Notifications','Email'].map(ch => `
        <div class="bg-white border border-slate-200 rounded-xl p-4 text-center">
          <p class="text-sm font-medium text-slate-700">${ch}</p>
          <p class="text-xs text-emerald-600 mt-1">Configured</p>
        </div>
      `).join('')}
    </div>
  `;
  lucide.createIcons();
}

function renderSettings(container) {
  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white rounded-2xl border border-slate-200 p-6">
        <h3 class="font-semibold text-slate-800 mb-4 flex items-center gap-2"><i data-lucide="users" class="w-5 h-5 text-blue-600"></i> User Roles & Permissions</h3>
        <div class="space-y-3">
          ${['Super Admin','School Admin','Transport Manager','Accountant','Parent (App)','Driver (App)'].map(role => `
            <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50">
              <span class="text-sm font-medium text-slate-700">${role}</span>
              <button class="text-xs text-blue-600 font-medium">Edit Permissions</button>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="bg-white rounded-2xl border border-slate-200 p-6">
        <h3 class="font-semibold text-slate-800 mb-4 flex items-center gap-2"><i data-lucide="settings" class="w-5 h-5 text-slate-600"></i> System Configuration</h3>
        <div class="space-y-4">
          <div><label class="text-xs font-medium text-slate-500">School Name</label>
            <input type="text" value="${TMS_DATA.school.name}" class="mt-1 w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500" /></div>
          <div><label class="text-xs font-medium text-slate-500">Academic Year</label>
            <input type="text" value="${TMS_DATA.school.academicYear}" class="mt-1 w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500" /></div>
          <div><label class="text-xs font-medium text-slate-500">Transport Fee (Monthly)</label>
            <input type="text" value="₹1,800" class="mt-1 w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500" /></div>
          <div class="flex items-center justify-between pt-2"><span class="text-sm text-slate-700">Multi-school support</span>
            <div class="w-10 h-5 bg-blue-600 rounded-full relative"><div class="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div></div></div>
          <div class="flex items-center justify-between"><span class="text-sm text-slate-700">Audit logs enabled</span>
            <div class="w-10 h-5 bg-blue-600 rounded-full relative"><div class="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div></div></div>
        </div>
      </div>
      <div class="bg-white rounded-2xl border border-slate-200 p-6">
        <h3 class="font-semibold text-slate-800 mb-4">Advanced Features</h3>
        <div class="space-y-2 text-sm">
          ${['AI-based route optimization','Predictive maintenance alerts','Driver behavior monitoring','Fuel efficiency analytics','CCTV integration','Face recognition attendance','Digital document storage','Offline GPS synchronization'].map(f => `
            <div class="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50">
              <i data-lucide="check-circle" class="w-4 h-4 text-emerald-500"></i><span class="text-slate-700">${f}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="bg-white rounded-2xl border border-slate-200 p-6">
        <h3 class="font-semibold text-slate-800 mb-4">Backup & Data</h3>
        <button class="w-full mb-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-medium text-slate-700 transition">Create Backup Now</button>
        <button class="w-full mb-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-medium text-slate-700 transition">Restore from Backup</button>
        <button class="w-full py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-sm font-medium text-blue-700 transition">Download Audit Logs</button>
      </div>
    </div>
  `;
  lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => {
  showPage('dashboard');
  lucide.createIcons();
});
