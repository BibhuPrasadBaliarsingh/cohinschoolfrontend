// HostelFlow - School Hostel Management System

let currentPage = 'dashboard';

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
  if (sb.classList.contains('open')) closeSidebar(); else openSidebar();
}

function formatINR(n) {
  return '₹' + Number(n).toLocaleString('en-IN');
}

function statusBadge(status) {
  const map = {
    'Present': 'bg-emerald-100 text-emerald-700',
    'Absent': 'bg-rose-100 text-rose-700',
    'On Leave': 'bg-amber-100 text-amber-700',
    'Paid': 'bg-emerald-100 text-emerald-700',
    'Pending': 'bg-amber-100 text-amber-700',
    'Overdue': 'bg-rose-100 text-rose-700',
    'Full': 'bg-rose-100 text-rose-700',
    'Available': 'bg-emerald-100 text-emerald-700',
    'Vacant': 'bg-slate-100 text-slate-600',
    'Approved': 'bg-emerald-100 text-emerald-700',
    'Open': 'bg-rose-100 text-rose-700',
    'In Progress': 'bg-amber-100 text-amber-700',
    'Resolved': 'bg-emerald-100 text-emerald-700',
    'High': 'bg-rose-100 text-rose-700',
    'Medium': 'bg-amber-100 text-amber-700',
    'Low': 'bg-slate-100 text-slate-600',
  };
  return `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${map[status] || 'bg-slate-100 text-slate-600'}">${status}</span>`;
}

function showToast(msg, type = 'info') {
  const c = document.getElementById('toast-container');
  const colors = { info: 'bg-fuchsia-600', success: 'bg-emerald-600', warning: 'bg-amber-500', error: 'bg-rose-600' };
  const t = document.createElement('div');
  t.className = `${colors[type]} text-white px-4 py-3 rounded-xl shadow-lg text-sm font-medium max-w-sm pointer-events-auto mx-auto sm:mx-0`;
  t.textContent = msg;
  c.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.3s'; setTimeout(() => t.remove(), 300); }, 3000);
}

function showPage(page) {
  currentPage = page;
  closeSidebar();
  document.querySelectorAll('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.page === page));

  const titles = {
    dashboard: ['Dashboard', 'Hostel overview & operations'],
    boarders: ['Boarders', 'Manage hostel students'],
    rooms: ['Rooms & Allocation', 'Room capacity and bed allocation'],
    attendance: ['Night Attendance', 'Mark & track hostel attendance'],
    mess: ['Mess Management', 'Menu, feedback & meal tracking'],
    fees: ['Hostel Fees', 'Fee collection & pending dues'],
    leave: ['Leave / Outing', 'Approve student leave requests'],
    visitors: ['Visitors Log', 'Visitor entry & exit records'],
    complaints: ['Complaints', 'Maintenance & student complaints'],
    staff: ['Staff / Wardens', 'Hostel staff directory'],
    reports: ['Reports', 'Generate hostel reports'],
  };
  document.getElementById('page-title').textContent = titles[page][0];
  document.getElementById('page-subtitle').textContent = titles[page][1];

  const content = document.getElementById('main-content');
  content.innerHTML = '';
  content.classList.add('fade-in');

  const map = {
    dashboard: renderDashboard, boarders: renderBoarders, rooms: renderRooms,
    attendance: renderAttendance, mess: renderMess, fees: renderFees,
    leave: renderLeave, visitors: renderVisitors, complaints: renderComplaints,
    staff: renderStaff, reports: renderReports
  };
  if (map[page]) map[page](content);
  lucide.createIcons();
}

// ===================== DASHBOARD =====================
function renderDashboard(c) {
  const d = HS_DATA;
  const occPct = Math.round((d.hostel.occupied / d.hostel.capacity) * 100);
  c.innerHTML = `
    <div class="bg-gradient-to-r from-fuchsia-600 to-purple-700 rounded-2xl p-5 sm:p-6 text-white mb-4 sm:mb-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p class="text-fuchsia-100 text-sm">${d.hostel.school}</p>
          <h2 class="text-xl sm:text-2xl font-bold mt-0.5">${d.hostel.name}</h2>
          <p class="text-fuchsia-100 text-sm mt-1">${d.hostel.occupied} / ${d.hostel.capacity} boarders • ${occPct}% occupied</p>
        </div>
        <div class="bg-white/15 backdrop-blur rounded-xl px-4 py-3 text-sm">
          <p class="text-fuchsia-100 text-xs mb-1">Tonight's Attendance</p>
          <p class="font-semibold text-lg">${d.kpis.tonightPresent} Present</p>
          <p class="text-fuchsia-100 text-xs">${d.kpis.totalBoarders - d.kpis.tonightPresent} Away / Leave</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
      <div class="bg-white rounded-2xl p-4 border border-slate-200 card-hover">
        <div class="w-9 h-9 rounded-xl bg-fuchsia-50 flex items-center justify-center mb-2"><i data-lucide="users" class="w-4 h-4 text-fuchsia-600"></i></div>
        <p class="text-xl font-bold text-slate-800">${d.kpis.totalBoarders}</p>
        <p class="text-xs text-slate-500">Total Boarders</p>
      </div>
      <div class="bg-white rounded-2xl p-4 border border-slate-200 card-hover">
        <div class="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center mb-2"><i data-lucide="door-open" class="w-4 h-4 text-emerald-600"></i></div>
        <p class="text-xl font-bold text-slate-800">${d.kpis.occupiedRooms}/${d.kpis.totalRooms}</p>
        <p class="text-xs text-slate-500">Rooms Occupied</p>
      </div>
      <div class="bg-white rounded-2xl p-4 border border-slate-200 card-hover">
        <div class="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center mb-2"><i data-lucide="bed" class="w-4 h-4 text-amber-600"></i></div>
        <p class="text-xl font-bold text-slate-800">${d.kpis.vacantBeds}</p>
        <p class="text-xs text-slate-500">Vacant Beds</p>
      </div>
      <div class="bg-white rounded-2xl p-4 border border-slate-200 card-hover">
        <div class="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center mb-2"><i data-lucide="indian-rupee" class="w-4 h-4 text-rose-600"></i></div>
        <p class="text-xl font-bold text-slate-800">${formatINR(d.kpis.pendingFees)}</p>
        <p class="text-xs text-slate-500">Pending Fees</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
      <div class="lg:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div class="px-4 sm:px-5 py-3 sm:py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 class="font-semibold text-slate-800 text-sm sm:text-base flex items-center gap-2"><i data-lucide="clipboard-check" class="w-4 h-4 text-fuchsia-600"></i> Tonight's Attendance Snapshot</h3>
          <button onclick="showPage('attendance')" class="text-xs sm:text-sm text-fuchsia-600 font-medium">Mark All →</button>
        </div>
        <div class="divide-y divide-slate-100 max-h-72 overflow-y-auto">
          ${d.attendanceTonight.slice(0, 6).map(a => `
            <div class="px-4 sm:px-5 py-3 flex items-center justify-between">
              <div class="min-w-0">
                <p class="text-sm font-medium text-slate-800 truncate">${a.name}</p>
                <p class="text-xs text-slate-500">${a.room}${a.time !== '—' ? ' • ' + a.time : ''}</p>
              </div>
              ${statusBadge(a.status)}
            </div>
          `).join('')}
        </div>
      </div>

      <div class="space-y-3">
        <div class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5">
          <h3 class="font-semibold text-slate-800 mb-3 text-sm">Quick Actions</h3>
          <div class="space-y-2">
            <button onclick="showPage('attendance')" class="w-full flex items-center gap-3 p-3 rounded-xl bg-fuchsia-50 hover:bg-fuchsia-100 text-fuchsia-700 font-medium text-sm transition">
              <i data-lucide="clipboard-check" class="w-4 h-4"></i> Night Attendance
            </button>
            <button onclick="showPage('leave')" class="w-full flex items-center gap-3 p-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 font-medium text-sm transition">
              <i data-lucide="log-out" class="w-4 h-4"></i> Leave Requests (${d.kpis.pendingLeaves})
            </button>
            <button onclick="showPage('complaints')" class="w-full flex items-center gap-3 p-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-medium text-sm transition">
              <i data-lucide="message-square-warning" class="w-4 h-4"></i> Complaints (${d.kpis.openComplaints})
            </button>
            <button onclick="showPage('fees')" class="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium text-sm transition">
              <i data-lucide="wallet" class="w-4 h-4"></i> Collect Fees
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  lucide.createIcons();
}

// ===================== BOARDERS =====================
function renderBoarders(c) {
  c.innerHTML = `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
      <div class="relative w-full sm:w-auto">
        <i data-lucide="search" class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
        <input type="text" id="boarder-search" placeholder="Search boarder, room, class..." class="pl-9 pr-4 py-2.5 w-full sm:w-72 text-sm bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-fuchsia-500" oninput="filterBoarders()" />
      </div>
      <button onclick="showToast('Add Boarder form opened','info')" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-sm font-medium rounded-xl transition w-full sm:w-auto">
        <i data-lucide="plus" class="w-4 h-4"></i> Add Boarder
      </button>
    </div>
    <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div class="table-wrap">
        <table class="w-full text-sm" id="boarders-table">
          <thead class="bg-slate-50 text-slate-600">
            <tr>
              <th class="text-left px-4 py-3 font-medium">Boarder</th>
              <th class="text-left px-4 py-3 font-medium">Class</th>
              <th class="text-left px-4 py-3 font-medium">Room / Bed</th>
              <th class="text-left px-4 py-3 font-medium">Parent</th>
              <th class="text-left px-4 py-3 font-medium">Fee</th>
              <th class="text-left px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            ${HS_DATA.boarders.map(b => `
              <tr class="hover:bg-slate-50 boarder-row" data-search="${(b.name + ' ' + b.class + ' ' + b.room + ' ' + b.id).toLowerCase()}">
                <td class="px-4 py-3">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">${b.name.split(' ').map(n=>n[0]).join('')}</div>
                    <div>
                      <p class="font-medium text-slate-800">${b.name}</p>
                      <p class="text-xs text-slate-500">${b.id}</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-slate-600">${b.class}</td>
                <td class="px-4 py-3 font-medium text-slate-700">${b.room} • Bed ${b.bed}</td>
                <td class="px-4 py-3">
                  <p class="text-slate-700">${b.parent}</p>
                  <p class="text-xs text-slate-500">${b.parentPhone}</p>
                </td>
                <td class="px-4 py-3">${statusBadge(b.feeStatus)}</td>
                <td class="px-4 py-3">${statusBadge(b.status)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
  lucide.createIcons();
}

function filterBoarders() {
  const q = document.getElementById('boarder-search').value.toLowerCase();
  document.querySelectorAll('.boarder-row').forEach(row => {
    row.style.display = row.dataset.search.includes(q) ? '' : 'none';
  });
}

// ===================== ROOMS =====================
function renderRooms(c) {
  c.innerHTML = `
    <div class="flex items-center justify-between mb-4 sm:mb-6">
      <p class="text-sm text-slate-500">${HS_DATA.rooms.length} rooms • ${HS_DATA.kpis.vacantBeds} vacant beds</p>
      <button onclick="showToast('Add Room form opened','info')" class="inline-flex items-center gap-2 px-4 py-2.5 bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-sm font-medium rounded-xl transition">
        <i data-lucide="plus" class="w-4 h-4"></i> Add Room
      </button>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
      ${HS_DATA.rooms.map(r => {
        const pct = Math.round((r.occupied / r.capacity) * 100);
        return `
        <div class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 card-hover">
          <div class="flex items-start justify-between mb-3">
            <div>
              <h3 class="font-bold text-lg text-slate-800">${r.id}</h3>
              <p class="text-xs text-slate-500">${r.block} • Floor ${r.floor}</p>
            </div>
            ${statusBadge(r.status)}
          </div>
          <div class="mb-3">
            <div class="flex justify-between text-xs mb-1">
              <span class="text-slate-500">${r.occupied}/${r.capacity} beds</span>
              <span class="font-medium text-slate-700">${pct}%</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-2">
              <div class="h-2 rounded-full ${pct === 100 ? 'bg-rose-500' : pct === 0 ? 'bg-slate-300' : 'bg-emerald-500'}" style="width:${pct}%"></div>
            </div>
          </div>
          <p class="text-xs text-slate-500">${r.type} Room</p>
        </div>`;
      }).join('')}
    </div>
  `;
  lucide.createIcons();
}

// ===================== ATTENDANCE =====================
function renderAttendance(c) {
  const list = HS_DATA.attendanceTonight;
  const present = list.filter(a => a.status === 'Present').length;
  c.innerHTML = `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
      <div>
        <p class="text-sm text-slate-500">Night Attendance • ${new Date().toLocaleDateString('en-IN', { weekday:'long', day:'numeric', month:'short' })}</p>
      </div>
      <button onclick="showToast('Attendance saved successfully','success')" class="px-4 py-2.5 bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-sm font-medium rounded-xl transition">
        Save Attendance
      </button>
    </div>

    <div class="grid grid-cols-3 gap-3 mb-4">
      <div class="bg-white rounded-xl border border-slate-200 p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">${present}</p>
        <p class="text-[10px] text-slate-500">Present</p>
      </div>
      <div class="bg-white rounded-xl border border-slate-200 p-3 text-center">
        <p class="text-lg font-bold text-rose-600">${list.filter(a=>a.status==='Absent').length}</p>
        <p class="text-[10px] text-slate-500">Absent</p>
      </div>
      <div class="bg-white rounded-xl border border-slate-200 p-3 text-center">
        <p class="text-lg font-bold text-amber-600">${list.filter(a=>a.status==='On Leave').length}</p>
        <p class="text-[10px] text-slate-500">On Leave</p>
      </div>
    </div>

    <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div class="divide-y divide-slate-100">
        ${list.map(a => `
          <div class="px-4 py-3 flex items-center justify-between gap-3">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">${a.name.split(' ').map(n=>n[0]).join('')}</div>
              <div class="min-w-0">
                <p class="text-sm font-medium text-slate-800 truncate">${a.name}</p>
                <p class="text-xs text-slate-500">${a.room}${a.time !== '—' ? ' • Marked ' + a.time : ''}</p>
              </div>
            </div>
            <div class="flex gap-1 flex-shrink-0">
              <button onclick="showToast('${a.name}: Present','success')" class="px-2.5 py-1 rounded-lg text-xs font-medium ${a.status==='Present' ? 'bg-emerald-100 text-emerald-700 ring-2 ring-offset-1 ring-emerald-500' : 'bg-slate-50 text-slate-500'}">P</button>
              <button onclick="showToast('${a.name}: Absent','warning')" class="px-2.5 py-1 rounded-lg text-xs font-medium ${a.status==='Absent' ? 'bg-rose-100 text-rose-700 ring-2 ring-offset-1 ring-rose-500' : 'bg-slate-50 text-slate-500'}">A</button>
              <button onclick="showToast('${a.name}: On Leave','info')" class="px-2.5 py-1 rounded-lg text-xs font-medium ${a.status==='On Leave' ? 'bg-amber-100 text-amber-700 ring-2 ring-offset-1 ring-amber-500' : 'bg-slate-50 text-slate-500'}">L</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  lucide.createIcons();
}

// ===================== MESS =====================
function renderMess(c) {
  const m = HS_DATA.messMenu;
  c.innerHTML = `
    <div class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 mb-4 sm:mb-6">
      <h3 class="font-semibold text-slate-800 mb-4 flex items-center gap-2"><i data-lucide="utensils" class="w-4 h-4 text-fuchsia-600"></i> Today's Menu • ${m.today}</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div class="bg-amber-50 rounded-xl p-4">
          <p class="text-xs font-semibold text-amber-700 mb-1">Breakfast</p>
          <p class="text-sm text-slate-700">${m.breakfast}</p>
        </div>
        <div class="bg-emerald-50 rounded-xl p-4">
          <p class="text-xs font-semibold text-emerald-700 mb-1">Lunch</p>
          <p class="text-sm text-slate-700">${m.lunch}</p>
        </div>
        <div class="bg-sky-50 rounded-xl p-4">
          <p class="text-xs font-semibold text-sky-700 mb-1">Snacks</p>
          <p class="text-sm text-slate-700">${m.snacks}</p>
        </div>
        <div class="bg-violet-50 rounded-xl p-4">
          <p class="text-xs font-semibold text-violet-700 mb-1">Dinner</p>
          <p class="text-sm text-slate-700">${m.dinner}</p>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between mb-3">
      <h3 class="font-semibold text-slate-800 text-sm sm:text-base">Recent Feedback</h3>
      <button onclick="showToast('Update menu form opened','info')" class="text-sm text-fuchsia-600 font-medium">Update Menu</button>
    </div>
    <div class="space-y-3">
      ${HS_DATA.messFeedback.map(f => `
        <div class="bg-white rounded-2xl border border-slate-200 p-4 flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-slate-800">${f.meal} • ${f.date}</p>
            <p class="text-xs text-slate-500">${f.comments} comments</p>
          </div>
          <div class="flex items-center gap-1">
            <span class="text-amber-500 font-bold">${f.rating}</span>
            <span class="text-amber-400">★</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  lucide.createIcons();
}

// ===================== FEES =====================
function renderFees(c) {
  const totalDue = HS_DATA.fees.reduce((s, f) => s + f.due, 0);
  c.innerHTML = `
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-4 sm:mb-6">
      <div class="bg-white rounded-2xl p-4 border border-slate-200">
        <p class="text-xs text-slate-500 mb-1">Total Pending</p>
        <p class="text-xl font-bold text-rose-600">${formatINR(totalDue)}</p>
      </div>
      <div class="bg-white rounded-2xl p-4 border border-slate-200">
        <p class="text-xs text-slate-500 mb-1">Paid this month</p>
        <p class="text-xl font-bold text-emerald-600">${formatINR(HS_DATA.fees.filter(f=>f.status==='Paid').reduce((s,f)=>s+f.paid,0))}</p>
      </div>
      <div class="bg-white rounded-2xl p-4 border border-slate-200 col-span-2 lg:col-span-1">
        <p class="text-xs text-slate-500 mb-1">Overdue accounts</p>
        <p class="text-xl font-bold text-slate-800">${HS_DATA.fees.filter(f=>f.status==='Overdue').length}</p>
      </div>
    </div>

    <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div class="table-wrap">
        <table class="w-full text-sm">
          <thead class="bg-slate-50 text-slate-600">
            <tr>
              <th class="text-left px-4 py-3 font-medium">Boarder</th>
              <th class="text-left px-4 py-3 font-medium">Room</th>
              <th class="text-left px-4 py-3 font-medium">Monthly</th>
              <th class="text-left px-4 py-3 font-medium">Due</th>
              <th class="text-left px-4 py-3 font-medium">Status</th>
              <th class="text-left px-4 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            ${HS_DATA.fees.map(f => `
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-3 font-medium text-slate-800">${f.name}</td>
                <td class="px-4 py-3 text-slate-600">${f.room}</td>
                <td class="px-4 py-3">${formatINR(f.monthly)}</td>
                <td class="px-4 py-3 font-medium ${f.due > 0 ? 'text-rose-600' : 'text-slate-600'}">${formatINR(f.due)}</td>
                <td class="px-4 py-3">${statusBadge(f.status)}</td>
                <td class="px-4 py-3">
                  ${f.due > 0 ? `<button onclick="showToast('Payment recorded for ${f.name}','success')" class="text-xs px-2.5 py-1 rounded-lg bg-fuchsia-50 text-fuchsia-700 font-medium hover:bg-fuchsia-100">Collect</button>` : `<span class="text-xs text-slate-400">—</span>`}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
  lucide.createIcons();
}

// ===================== LEAVE =====================
function renderLeave(c) {
  c.innerHTML = `
    <div class="flex items-center justify-between mb-4 sm:mb-6">
      <p class="text-sm text-slate-500">${HS_DATA.leaves.filter(l=>l.status==='Pending').length} pending requests</p>
    </div>
    <div class="space-y-3">
      ${HS_DATA.leaves.map(l => `
        <div class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 card-hover">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <h3 class="font-semibold text-slate-800">${l.student}</h3>
                ${statusBadge(l.status)}
              </div>
              <p class="text-xs text-slate-500">${l.room} • ${l.type}</p>
              <p class="text-sm text-slate-600 mt-1">${l.from}${l.from !== l.to ? ' → ' + l.to : ''}</p>
              <p class="text-xs text-slate-400 mt-0.5">${l.reason}</p>
            </div>
            ${l.status === 'Pending' ? `
              <div class="flex gap-2 flex-shrink-0">
                <button onclick="showToast('Leave approved for ${l.student}','success')" class="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium hover:bg-emerald-100">Approve</button>
                <button onclick="showToast('Leave rejected','warning')" class="px-3 py-1.5 rounded-lg bg-rose-50 text-rose-700 text-xs font-medium hover:bg-rose-100">Reject</button>
              </div>
            ` : `<p class="text-xs text-slate-400">By: ${l.approvedBy}</p>`}
          </div>
        </div>
      `).join('')}
    </div>
  `;
  lucide.createIcons();
}

// ===================== VISITORS =====================
function renderVisitors(c) {
  c.innerHTML = `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
      <p class="text-sm text-slate-500">Visitor entry / exit log</p>
      <button onclick="showToast('New visitor entry form opened','info')" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-sm font-medium rounded-xl transition w-full sm:w-auto">
        <i data-lucide="plus" class="w-4 h-4"></i> Log Visitor
      </button>
    </div>
    <div class="space-y-3">
      ${HS_DATA.visitors.map(v => `
        <div class="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <p class="font-medium text-slate-800">${v.visitor} <span class="text-xs text-slate-400 font-normal">(${v.relation})</span></p>
            <p class="text-xs text-slate-500">Meeting: ${v.student} • ${v.purpose}</p>
            <p class="text-xs text-slate-400 mt-0.5">${v.date} • In: ${v.inTime}${v.outTime !== '—' ? ' • Out: ' + v.outTime : ' • Still inside'}</p>
          </div>
          ${v.outTime === '—' ? `<button onclick="showToast('Visitor checked out','success')" class="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-600 text-xs font-medium hover:bg-slate-100 self-start">Check Out</button>` : ''}
        </div>
      `).join('')}
    </div>
  `;
  lucide.createIcons();
}

// ===================== COMPLAINTS =====================
function renderComplaints(c) {
  c.innerHTML = `
    <div class="flex items-center justify-between mb-4 sm:mb-6">
      <p class="text-sm text-slate-500">${HS_DATA.complaints.filter(c=>c.status!=='Resolved').length} open complaints</p>
      <button onclick="showToast('New complaint form opened','info')" class="inline-flex items-center gap-2 px-4 py-2.5 bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-sm font-medium rounded-xl transition">
        <i data-lucide="plus" class="w-4 h-4"></i> Log Complaint
      </button>
    </div>
    <div class="space-y-3">
      ${HS_DATA.complaints.map(cp => `
        <div class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 card-hover">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-xl ${cp.priority==='High' ? 'bg-rose-50' : cp.priority==='Medium' ? 'bg-amber-50' : 'bg-slate-50'} flex items-center justify-center flex-shrink-0">
                <i data-lucide="message-square-warning" class="w-5 h-5 ${cp.priority==='High' ? 'text-rose-600' : cp.priority==='Medium' ? 'text-amber-600' : 'text-slate-500'}"></i>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-0.5 flex-wrap">
                  <h3 class="font-semibold text-slate-800 text-sm">${cp.title}</h3>
                  ${statusBadge(cp.status)}
                  ${statusBadge(cp.priority)}
                </div>
                <p class="text-xs text-slate-500">${cp.student} • ${cp.room} • ${cp.type}</p>
                <p class="text-xs text-slate-400 mt-0.5">${cp.date}</p>
              </div>
            </div>
            ${cp.status !== 'Resolved' ? `<button onclick="showToast('Marked as resolved','success')" class="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium hover:bg-emerald-100 self-start">Resolve</button>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `;
  lucide.createIcons();
}

// ===================== STAFF =====================
function renderStaff(c) {
  c.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
      ${HS_DATA.staff.map(s => `
        <div class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 card-hover">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-11 h-11 rounded-full bg-gradient-to-br from-fuchsia-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">${s.name.split(' ').map(n=>n[0]).join('')}</div>
            <div>
              <p class="font-semibold text-slate-800">${s.name}</p>
              <p class="text-xs text-fuchsia-600 font-medium">${s.role}</p>
            </div>
          </div>
          <div class="space-y-1.5 text-sm">
            <div class="flex justify-between"><span class="text-slate-500">Phone</span><span class="text-slate-700">${s.phone}</span></div>
            <div class="flex justify-between"><span class="text-slate-500">Shift</span><span class="text-slate-700">${s.shift}</span></div>
            <div class="flex justify-between"><span class="text-slate-500">Block</span><span class="text-slate-700">${s.block}</span></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  lucide.createIcons();
}

// ===================== REPORTS =====================
function renderReports(c) {
  const reports = [
    { title: 'Daily Attendance Report', desc: 'Night attendance summary', icon: 'clipboard-check', color: 'fuchsia' },
    { title: 'Fee Collection Report', desc: 'Paid, pending & overdue', icon: 'wallet', color: 'emerald' },
    { title: 'Room Occupancy Report', desc: 'Beds & room utilization', icon: 'door-open', color: 'sky' },
    { title: 'Leave & Outing Report', desc: 'Student movement history', icon: 'log-out', color: 'amber' },
    { title: 'Visitor Log Report', desc: 'All visitor entries', icon: 'user-plus', color: 'violet' },
    { title: 'Complaints Report', desc: 'Open vs resolved', icon: 'message-square-warning', color: 'rose' },
    { title: 'Mess Feedback Report', desc: 'Meal ratings & trends', icon: 'utensils', color: 'orange' },
    { title: 'Boarder Directory', desc: 'Full student list export', icon: 'users', color: 'indigo' },
  ];
  c.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
      ${reports.map(r => `
        <div class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 card-hover cursor-pointer group" onclick="showToast('${r.title} generated','success')">
          <div class="w-10 h-10 rounded-xl bg-${r.color}-50 flex items-center justify-center mb-3 group-hover:scale-110 transition">
            <i data-lucide="${r.icon}" class="w-5 h-5 text-${r.color}-600"></i>
          </div>
          <h3 class="font-semibold text-slate-800 text-sm mb-1">${r.title}</h3>
          <p class="text-xs text-slate-500">${r.desc}</p>
          <p class="text-xs text-fuchsia-600 font-medium mt-2 opacity-0 group-hover:opacity-100 transition">Generate →</p>
        </div>
      `).join('')}
    </div>
  `;
  lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => {
  showPage('dashboard');
  lucide.createIcons();
});
