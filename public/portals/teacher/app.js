// TeachFlow - Teacher Portal Logic (Mobile Responsive)

let currentPage = 'dashboard';
let perfChart = null;
let selectedClass = 'VIII-A';

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

function statusBadge(status) {
  const map = {
    'Next': 'bg-sky-100 text-sky-700', 'Upcoming': 'bg-slate-100 text-slate-600',
    'Present': 'bg-emerald-100 text-emerald-700', 'Absent': 'bg-rose-100 text-rose-700', 'Late': 'bg-amber-100 text-amber-700',
    'Active': 'bg-sky-100 text-sky-700', 'Closed': 'bg-slate-100 text-slate-600',
    'Scheduled': 'bg-indigo-100 text-indigo-700', 'Completed': 'bg-emerald-100 text-emerald-700',
    'In Progress': 'bg-amber-100 text-amber-700', 'Pending': 'bg-rose-100 text-rose-700',
    'Approved': 'bg-emerald-100 text-emerald-700',
  };
  return `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${map[status] || 'bg-slate-100 text-slate-600'}">${status}</span>`;
}

function showToast(msg, type = 'info') {
  const c = document.getElementById('toast-container');
  const colors = { info: 'bg-sky-600', success: 'bg-emerald-600', warning: 'bg-amber-500', error: 'bg-rose-600' };
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
    dashboard: ['Dashboard', 'Welcome back, Priya'],
    classes: ['My Classes', 'Class & section management'],
    timetable: ['Timetable', 'Your weekly teaching schedule'],
    attendance: ['Attendance', 'Mark & track student attendance'],
    homework: ['Homework', 'Upload & track assignments'],
    marks: ['Marks Entry', 'Enter & manage exam scores'],
    exams: ['Exam Management', 'Schedule & manage assessments'],
    performance: ['Performance Insights', 'Student analytics & trends'],
    leave: ['Leave Application', 'Apply & track your leaves'],
  };
  document.getElementById('page-title').textContent = titles[page][0];
  document.getElementById('page-subtitle').textContent = titles[page][1];

  const content = document.getElementById('main-content');
  content.innerHTML = '';
  content.classList.add('fade-in');

  const map = {
    dashboard: renderDashboard, classes: renderClasses, timetable: renderTimetable,
    attendance: renderAttendance, homework: renderHomework, marks: renderMarks,
    exams: renderExams, performance: renderPerformance, leave: renderLeave
  };
  if (map[page]) map[page](content);
  lucide.createIcons();
}

// ===================== DASHBOARD =====================
function renderDashboard(c) {
  const d = TF_DATA;
  c.innerHTML = `
    <!-- Teacher greeting + next class -->
    <div class="bg-gradient-to-r from-sky-600 to-blue-700 rounded-2xl p-5 sm:p-6 text-white mb-4 sm:mb-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p class="text-sky-100 text-sm">Good morning</p>
          <h2 class="text-xl sm:text-2xl font-bold mt-0.5">${d.teacher.name}</h2>
          <p class="text-sky-100 text-sm mt-1">${d.teacher.designation} • ${d.teacher.subject}</p>
        </div>
        <div class="bg-white/15 backdrop-blur rounded-xl px-4 py-3 text-sm">
          <p class="text-sky-100 text-xs mb-1">Next Class</p>
          <p class="font-semibold">${d.upcomingClasses[0].class} • ${d.upcomingClasses[0].subject}</p>
          <p class="text-sky-100 text-xs mt-0.5">${d.upcomingClasses[0].time} • ${d.upcomingClasses[0].room}</p>
        </div>
      </div>
    </div>

    <!-- Quick stats -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
      <div class="bg-white rounded-2xl p-4 border border-slate-200 card-hover">
        <div class="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center mb-2"><i data-lucide="users" class="w-4 h-4 text-sky-600"></i></div>
        <p class="text-xl font-bold text-slate-800">${d.classes.length}</p>
        <p class="text-xs text-slate-500">Classes Assigned</p>
      </div>
      <div class="bg-white rounded-2xl p-4 border border-slate-200 card-hover">
        <div class="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center mb-2"><i data-lucide="user-check" class="w-4 h-4 text-emerald-600"></i></div>
        <p class="text-xl font-bold text-slate-800">201</p>
        <p class="text-xs text-slate-500">Total Students</p>
      </div>
      <div class="bg-white rounded-2xl p-4 border border-slate-200 card-hover">
        <div class="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center mb-2"><i data-lucide="book-open" class="w-4 h-4 text-amber-600"></i></div>
        <p class="text-xl font-bold text-slate-800">${d.homework.filter(h=>h.status==='Active').length}</p>
        <p class="text-xs text-slate-500">Active Homework</p>
      </div>
      <div class="bg-white rounded-2xl p-4 border border-slate-200 card-hover">
        <div class="w-9 h-9 rounded-xl bg-violet-50 flex items-center justify-center mb-2"><i data-lucide="file-text" class="w-4 h-4 text-violet-600"></i></div>
        <p class="text-xl font-bold text-slate-800">${d.exams.filter(e=>e.status==='Scheduled').length}</p>
        <p class="text-xs text-slate-500">Upcoming Exams</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
      <!-- Today's Classes -->
      <div class="lg:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div class="px-4 sm:px-5 py-3 sm:py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 class="font-semibold text-slate-800 text-sm sm:text-base flex items-center gap-2"><i data-lucide="clock" class="w-4 h-4 text-sky-600"></i> Today's Schedule</h3>
          <button onclick="showPage('timetable')" class="text-xs sm:text-sm text-sky-600 font-medium">Full Timetable →</button>
        </div>
        <div class="divide-y divide-slate-100">
          ${d.upcomingClasses.map(u => `
            <div class="px-4 sm:px-5 py-3.5 flex items-center justify-between hover:bg-slate-50 transition">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-12 text-center flex-shrink-0">
                  <p class="text-xs font-bold text-slate-700">${u.time.split(' - ')[0]}</p>
                  <p class="text-[10px] text-slate-400">${u.time.split(' - ')[1]}</p>
                </div>
                <div class="min-w-0">
                  <p class="text-sm font-medium text-slate-800 truncate">${u.class} • ${u.subject}</p>
                  <p class="text-xs text-slate-500 truncate">${u.topic} • ${u.room}</p>
                </div>
              </div>
              ${statusBadge(u.status)}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="space-y-3">
        <div class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5">
          <h3 class="font-semibold text-slate-800 mb-3 text-sm sm:text-base">Quick Actions</h3>
          <div class="space-y-2">
            <button onclick="showPage('attendance')" class="w-full flex items-center gap-3 p-3 rounded-xl bg-sky-50 hover:bg-sky-100 active:bg-sky-200 text-sky-700 font-medium text-sm transition">
              <i data-lucide="clipboard-check" class="w-4 h-4"></i> Mark Attendance
            </button>
            <button onclick="showPage('homework')" class="w-full flex items-center gap-3 p-3 rounded-xl bg-amber-50 hover:bg-amber-100 active:bg-amber-200 text-amber-700 font-medium text-sm transition">
              <i data-lucide="upload" class="w-4 h-4"></i> Upload Homework
            </button>
            <button onclick="showPage('marks')" class="w-full flex items-center gap-3 p-3 rounded-xl bg-violet-50 hover:bg-violet-100 active:bg-violet-200 text-violet-700 font-medium text-sm transition">
              <i data-lucide="pen-line" class="w-4 h-4"></i> Enter Marks
            </button>
            <button onclick="showPage('leave')" class="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 active:bg-slate-200 text-slate-700 font-medium text-sm transition">
              <i data-lucide="calendar-off" class="w-4 h-4"></i> Apply Leave
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  lucide.createIcons();
}

// ===================== MY CLASSES =====================
function renderClasses(c) {
  c.innerHTML = `
    <div class="flex items-center justify-between mb-4 sm:mb-6">
      <p class="text-sm text-slate-500">${TF_DATA.classes.length} classes assigned to you</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
      ${TF_DATA.classes.map(cl => `
        <div class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 card-hover">
          <div class="flex items-start justify-between mb-3">
            <div>
              <h3 class="font-bold text-lg text-slate-800">${cl.name}</h3>
              <p class="text-xs text-slate-500">${cl.subject} • ${cl.room}</p>
            </div>
            <span class="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded-lg font-medium">${cl.students} students</span>
          </div>
          <div class="grid grid-cols-2 gap-2 text-sm mb-4">
            <div class="bg-slate-50 rounded-xl p-2.5 text-center">
              <p class="font-bold text-slate-800">${cl.avgAttendance}%</p>
              <p class="text-[10px] text-slate-500">Avg Attendance</p>
            </div>
            <div class="bg-slate-50 rounded-xl p-2.5 text-center">
              <p class="font-bold text-slate-800">${cl.avgScore}%</p>
              <p class="text-[10px] text-slate-500">Avg Score</p>
            </div>
          </div>
          <p class="text-xs text-slate-500 mb-3"><i data-lucide="calendar" class="w-3 h-3 inline mr-1"></i>${cl.schedule}</p>
          <div class="flex gap-2">
            <button onclick="selectedClass='${cl.name}'; showPage('attendance')" class="flex-1 text-xs py-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 font-medium transition">Attendance</button>
            <button onclick="selectedClass='${cl.name}'; showPage('performance')" class="flex-1 text-xs py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 font-medium transition">Insights</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  lucide.createIcons();
}

// ===================== TIMETABLE =====================
function renderTimetable(c) {
  const days = Object.keys(TF_DATA.timetable);
  const today = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date().getDay()];
  c.innerHTML = `
    <div class="mb-4 flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
      ${days.map(day => `
        <button onclick="renderDayTT('${day}')" id="tt-tab-${day}" class="tt-tab flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition ${day === (today === 'Sunday' ? 'Monday' : today) ? 'bg-sky-600 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}">${day.slice(0,3)}</button>
      `).join('')}
    </div>
    <div id="tt-content"></div>
  `;
  const defaultDay = today === 'Sunday' || today === 'Saturday' ? 'Monday' : today;
  renderDayTT(defaultDay);
  lucide.createIcons();
}

function renderDayTT(day) {
  document.querySelectorAll('.tt-tab').forEach(b => {
    b.className = b.id === `tt-tab-${day}`
      ? 'tt-tab flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition bg-sky-600 text-white'
      : 'tt-tab flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition bg-white border border-slate-200 text-slate-600 hover:bg-slate-50';
  });
  const periods = TF_DATA.timetable[day] || [];
  document.getElementById('tt-content').innerHTML = `
    <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div class="px-4 sm:px-5 py-3 border-b border-slate-100">
        <h3 class="font-semibold text-slate-800">${day}</h3>
      </div>
      <div class="divide-y divide-slate-100">
        ${periods.map(p => `
          <div class="px-4 sm:px-5 py-3.5 flex items-center gap-3 sm:gap-4 ${p.class === 'Free' ? 'bg-slate-50/50' : 'hover:bg-slate-50'} transition">
            <div class="w-10 h-10 rounded-xl ${p.class === 'Free' ? 'bg-slate-100' : 'bg-sky-50'} flex items-center justify-center flex-shrink-0">
              <span class="text-sm font-bold ${p.class === 'Free' ? 'text-slate-400' : 'text-sky-600'}">${p.period}</span>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-slate-800">${p.class === 'Free' ? 'Free Period' : p.class + ' • ' + p.subject}</p>
              <p class="text-xs text-slate-500">${p.time}${p.room !== '—' ? ' • Room ' + p.room : ''}</p>
            </div>
            ${p.class !== 'Free' ? '<span class="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded-lg font-medium hidden sm:inline">Teaching</span>' : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ===================== ATTENDANCE =====================
function renderAttendance(c) {
  const students = TF_DATA.students[selectedClass] || TF_DATA.students['VIII-A'];
  const present = students.filter(s => s.status === 'Present').length;
  c.innerHTML = `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
      <div class="flex items-center gap-2 overflow-x-auto pb-1">
        ${TF_DATA.classes.map(cl => `
          <button onclick="selectedClass='${cl.name}'; showPage('attendance')" class="flex-shrink-0 px-3 py-1.5 rounded-lg text-sm font-medium transition ${selectedClass === cl.name ? 'bg-sky-600 text-white' : 'bg-white border border-slate-200 text-slate-600'}">${cl.name}</button>
        `).join('')}
      </div>
      <div class="flex items-center gap-2">
        <span class="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium">Biometric Sync Ready</span>
        <button onclick="showToast('Attendance saved successfully','success')" class="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-xl transition">Save</button>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-3 mb-4">
      <div class="bg-white rounded-xl border border-slate-200 p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">${present}</p>
        <p class="text-[10px] text-slate-500">Present</p>
      </div>
      <div class="bg-white rounded-xl border border-slate-200 p-3 text-center">
        <p class="text-lg font-bold text-rose-600">${students.filter(s=>s.status==='Absent').length}</p>
        <p class="text-[10px] text-slate-500">Absent</p>
      </div>
      <div class="bg-white rounded-xl border border-slate-200 p-3 text-center">
        <p class="text-lg font-bold text-amber-600">${students.filter(s=>s.status==='Late').length}</p>
        <p class="text-[10px] text-slate-500">Late</p>
      </div>
    </div>

    <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
        <h3 class="font-semibold text-slate-800 text-sm">${selectedClass} • Today</h3>
        <p class="text-xs text-slate-500">${new Date().toLocaleDateString('en-IN', { weekday:'short', day:'numeric', month:'short' })}</p>
      </div>
      <div class="divide-y divide-slate-100">
        ${students.map(s => `
          <div class="px-4 py-3 flex items-center justify-between gap-3">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">${s.roll}</div>
              <div class="min-w-0">
                <p class="text-sm font-medium text-slate-800 truncate">${s.name}</p>
                <p class="text-xs text-slate-500">Roll ${s.roll} • Att ${s.attendance}%</p>
              </div>
            </div>
            <div class="flex gap-1 flex-shrink-0">
              <button onclick="this.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('ring-2','ring-offset-1')); this.classList.add('ring-2','ring-offset-1','ring-emerald-500'); showToast('${s.name}: Present','success')" class="px-2.5 py-1 rounded-lg text-xs font-medium ${s.status==='Present' ? 'bg-emerald-100 text-emerald-700 ring-2 ring-offset-1 ring-emerald-500' : 'bg-slate-50 text-slate-500'}">P</button>
              <button onclick="this.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('ring-2','ring-offset-1')); this.classList.add('ring-2','ring-offset-1','ring-rose-500'); showToast('${s.name}: Absent','warning')" class="px-2.5 py-1 rounded-lg text-xs font-medium ${s.status==='Absent' ? 'bg-rose-100 text-rose-700 ring-2 ring-offset-1 ring-rose-500' : 'bg-slate-50 text-slate-500'}">A</button>
              <button onclick="this.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('ring-2','ring-offset-1')); this.classList.add('ring-2','ring-offset-1','ring-amber-500'); showToast('${s.name}: Late','info')" class="px-2.5 py-1 rounded-lg text-xs font-medium ${s.status==='Late' ? 'bg-amber-100 text-amber-700 ring-2 ring-offset-1 ring-amber-500' : 'bg-slate-50 text-slate-500'}">L</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  lucide.createIcons();
}

// ===================== HOMEWORK =====================
function renderHomework(c) {
  c.innerHTML = `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
      <p class="text-sm text-slate-500">${TF_DATA.homework.filter(h=>h.status==='Active').length} active assignments</p>
      <button onclick="showToast('Homework upload form opened','info')" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-xl transition w-full sm:w-auto">
        <i data-lucide="plus" class="w-4 h-4"></i> Upload Homework
      </button>
    </div>
    <div class="space-y-3">
      ${TF_DATA.homework.map(h => {
        const pct = Math.round((h.submitted / h.total) * 100);
        return `
        <div class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 card-hover">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div class="min-w-0">
              <div class="flex items-center gap-2 mb-1">
                <h3 class="font-semibold text-slate-800 text-sm sm:text-base truncate">${h.title}</h3>
                ${statusBadge(h.status)}
              </div>
              <p class="text-xs text-slate-500">${h.class} • Due: ${h.due}</p>
            </div>
            <div class="text-right flex-shrink-0">
              <p class="text-sm font-bold text-slate-800">${h.submitted}/${h.total}</p>
              <p class="text-[10px] text-slate-500">submitted</p>
            </div>
          </div>
          <div class="mt-3">
            <div class="w-full bg-slate-100 rounded-full h-2">
              <div class="h-2 rounded-full ${pct === 100 ? 'bg-emerald-500' : 'bg-sky-500'}" style="width:${pct}%"></div>
            </div>
            <p class="text-[10px] text-slate-400 mt-1">${pct}% submission rate</p>
          </div>
        </div>`;
      }).join('')}
    </div>
  `;
  lucide.createIcons();
}

// ===================== MARKS ENTRY =====================
function renderMarks(c) {
  c.innerHTML = `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
      <p class="text-sm text-slate-500">Online marks entry for your classes</p>
      <button onclick="showToast('New marks entry started','info')" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-xl transition w-full sm:w-auto">
        <i data-lucide="plus" class="w-4 h-4"></i> New Entry
      </button>
    </div>
    <div class="space-y-3">
      ${TF_DATA.marksEntry.map(m => {
        const pct = m.total ? Math.round((m.entered / m.total) * 100) : 0;
        return `
        <div class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 card-hover">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <h3 class="font-semibold text-slate-800 text-sm sm:text-base">${m.exam}</h3>
              ${statusBadge(m.status)}
            </div>
            <p class="text-xs text-slate-500">${m.class} • ${m.subject} • Max ${m.max} marks</p>
          </div>
          <div class="flex items-center gap-4">
            <div class="text-right">
              <p class="text-sm font-bold text-slate-800">${m.entered}/${m.total}</p>
              <p class="text-[10px] text-slate-500">entered</p>
            </div>
            <button onclick="showToast('Opening marks sheet for ${m.class}','info')" class="px-3 py-2 rounded-lg ${m.status === 'Completed' ? 'bg-slate-50 text-slate-600' : 'bg-sky-50 text-sky-700'} text-xs font-medium hover:opacity-80 transition">
              ${m.status === 'Completed' ? 'View' : 'Enter Marks'}
            </button>
          </div>
        </div>`;
      }).join('')}
    </div>

    <!-- Sample marks entry UI -->
    <div class="mt-6 bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div class="px-4 sm:px-5 py-3 border-b border-slate-100">
        <h3 class="font-semibold text-slate-800 text-sm">Quick Entry • VIII-A • Class Test (20 marks)</h3>
      </div>
      <div class="table-wrap">
        <table class="w-full text-sm">
          <thead class="bg-slate-50 text-slate-600">
            <tr>
              <th class="text-left px-4 py-3 font-medium">Roll</th>
              <th class="text-left px-4 py-3 font-medium">Student</th>
              <th class="text-left px-4 py-3 font-medium">Marks</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            ${(TF_DATA.students['VIII-A'] || []).slice(0, 6).map(s => `
              <tr class="hover:bg-slate-50">
                <td class="px-4 py-2.5 text-slate-600">${s.roll}</td>
                <td class="px-4 py-2.5 font-medium text-slate-800">${s.name}</td>
                <td class="px-4 py-2.5">
                  <input type="number" min="0" max="20" value="${Math.min(20, Math.round(s.lastScore / 5))}" class="w-20 px-2 py-1.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <div class="px-4 py-3 border-t border-slate-100 flex justify-end">
        <button onclick="showToast('Marks saved successfully','success')" class="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-xl transition">Save Marks</button>
      </div>
    </div>
  `;
  lucide.createIcons();
}

// ===================== EXAMS =====================
function renderExams(c) {
  c.innerHTML = `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
      <p class="text-sm text-slate-500">${TF_DATA.exams.filter(e=>e.status==='Scheduled').length} upcoming exams</p>
      <button onclick="showToast('Create exam form opened','info')" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-xl transition w-full sm:w-auto">
        <i data-lucide="plus" class="w-4 h-4"></i> Schedule Exam
      </button>
    </div>
    <div class="space-y-3">
      ${TF_DATA.exams.map(e => `
        <div class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 card-hover">
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-xl ${e.status === 'Scheduled' ? 'bg-indigo-50' : 'bg-emerald-50'} flex items-center justify-center flex-shrink-0">
              <i data-lucide="file-text" class="w-5 h-5 ${e.status === 'Scheduled' ? 'text-indigo-600' : 'text-emerald-600'}"></i>
            </div>
            <div>
              <div class="flex items-center gap-2 mb-0.5">
                <h3 class="font-semibold text-slate-800 text-sm sm:text-base">${e.name}</h3>
                ${statusBadge(e.status)}
              </div>
              <p class="text-xs text-slate-500">${e.classes} • Max ${e.maxMarks} marks</p>
              <p class="text-xs text-slate-400 mt-0.5">Date: ${e.date}</p>
            </div>
          </div>
          <button onclick="showToast('${e.status === 'Completed' ? 'Viewing results' : 'Exam details'}','info')" class="px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-medium transition self-start sm:self-center">
            ${e.status === 'Completed' ? 'View Results' : 'Details'}
          </button>
        </div>
      `).join('')}
    </div>
  `;
  lucide.createIcons();
}

// ===================== PERFORMANCE =====================
function renderPerformance(c) {
  const p = TF_DATA.performanceStats;
  c.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
      <div class="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-4 sm:p-5">
        <h3 class="font-semibold text-slate-800 mb-4 text-sm sm:text-base">Class Average Trend (Mathematics)</h3>
        <canvas id="perfChart" height="140"></canvas>
      </div>
      <div class="space-y-3">
        <div class="bg-white rounded-2xl border border-slate-200 p-4">
          <h3 class="font-semibold text-slate-800 mb-3 text-sm">Top Performers</h3>
          ${p.topPerformers.map((t,i) => `
            <div class="flex items-center gap-3 py-2 ${i < p.topPerformers.length-1 ? 'border-b border-slate-50' : ''}">
              <div class="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-bold">${i+1}</div>
              <div class="flex-1 min-w-0"><p class="text-sm font-medium text-slate-800 truncate">${t.name}</p><p class="text-[10px] text-slate-500">${t.class}</p></div>
              <span class="text-sm font-bold text-emerald-600">${t.score}%</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5">
      <h3 class="font-semibold text-slate-800 mb-3 text-sm sm:text-base flex items-center gap-2">
        <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-500"></i> Needs Attention
      </h3>
      <div class="space-y-2">
        ${p.needsAttention.map(n => `
          <div class="flex items-center justify-between p-3 rounded-xl bg-amber-50/50 border border-amber-100">
            <div>
              <p class="text-sm font-medium text-slate-800">${n.name}</p>
              <p class="text-xs text-slate-500">${n.class} • Attendance ${n.attendance}%</p>
            </div>
            <div class="text-right">
              <p class="text-sm font-bold text-amber-700">${n.score}%</p>
              <p class="text-[10px] text-slate-500">Last score</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  lucide.createIcons();
  setTimeout(() => {
    const ctx = document.getElementById('perfChart');
    if (ctx) {
      if (perfChart) perfChart.destroy();
      perfChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: p.months,
          datasets: [{
            label: 'Class Avg %',
            data: p.classAvg,
            borderColor: '#0284c7',
            backgroundColor: 'rgba(2,132,199,0.1)',
            fill: true,
            tension: 0.3,
            pointRadius: 4,
            pointBackgroundColor: '#0284c7'
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            y: { min: 60, max: 100, grid: { color: '#f1f5f9' } },
            x: { grid: { display: false } }
          }
        }
      });
    }
  }, 50);
}

// ===================== LEAVE =====================
function renderLeave(c) {
  c.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
      <div class="lg:col-span-1 bg-white rounded-2xl border border-slate-200 p-4 sm:p-5">
        <h3 class="font-semibold text-slate-800 mb-4 text-sm sm:text-base">Apply for Leave</h3>
        <div class="space-y-3">
          <div>
            <label class="text-xs font-medium text-slate-500">Leave Type</label>
            <select class="mt-1 w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 bg-white">
              <option>Casual Leave</option>
              <option>Sick Leave</option>
              <option>Earned Leave</option>
              <option>Maternity Leave</option>
            </select>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="text-xs font-medium text-slate-500">From</label>
              <input type="date" class="mt-1 w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500" />
            </div>
            <div>
              <label class="text-xs font-medium text-slate-500">To</label>
              <input type="date" class="mt-1 w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500" />
            </div>
          </div>
          <div>
            <label class="text-xs font-medium text-slate-500">Reason</label>
            <textarea rows="3" placeholder="Brief reason for leave..." class="mt-1 w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 resize-none"></textarea>
          </div>
          <button onclick="showToast('Leave application submitted successfully','success')" class="w-full py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-xl transition">
            Submit Application
          </button>
        </div>
      </div>

      <div class="lg:col-span-2">
        <h3 class="font-semibold text-slate-800 mb-3 text-sm sm:text-base">Leave History</h3>
        <div class="space-y-3">
          ${TF_DATA.leaveHistory.map(l => `
            <div class="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <h4 class="font-medium text-slate-800 text-sm">${l.type}</h4>
                  ${statusBadge(l.status)}
                </div>
                <p class="text-xs text-slate-500">${l.from}${l.from !== l.to ? ' → ' + l.to : ''} • ${l.days} day${l.days > 1 ? 's' : ''}</p>
                <p class="text-xs text-slate-400 mt-0.5">${l.reason}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="mt-4 grid grid-cols-3 gap-3">
          <div class="bg-white rounded-xl border border-slate-200 p-3 text-center">
            <p class="text-lg font-bold text-slate-800">8</p>
            <p class="text-[10px] text-slate-500">CL Balance</p>
          </div>
          <div class="bg-white rounded-xl border border-slate-200 p-3 text-center">
            <p class="text-lg font-bold text-slate-800">5</p>
            <p class="text-[10px] text-slate-500">SL Balance</p>
          </div>
          <div class="bg-white rounded-xl border border-slate-200 p-3 text-center">
            <p class="text-lg font-bold text-slate-800">12</p>
            <p class="text-[10px] text-slate-500">EL Balance</p>
          </div>
        </div>
      </div>
    </div>
  `;
  lucide.createIcons();
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  showPage('dashboard');
  lucide.createIcons();
});
