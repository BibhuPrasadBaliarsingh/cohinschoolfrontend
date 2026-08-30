import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/crm/Sidebar';
import Topbar from '../components/crm/Topbar';

export default function CRMLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-white text-slate-800 font-sans">
      <Sidebar mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Topbar setMobileOpen={setMobileSidebarOpen} />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
