"use client";
import React, { useState } from 'react';
import SideBar from './Sidebar'; // Ensure this path is correct
import Topbar from './Topbar';   // Ensure this path is correct

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#FDFCFB]">
      {/* SIDEBAR: Stays fixed on the left */}
      <aside className={`${isSidebarOpen ? 'w-72' : 'w-20'} transition-all duration-300 border-r bg-white h-screen sticky top-0`}>
        <SideBar isSidebarOpen={isSidebarOpen} />
      </aside>

      {/* MAIN CONTENT AREA: Topbar + Page Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="p-8 bg-[#FFF9F9] flex-1 overflow-y-auto">
          {/* This is where RestaurantProfilePage will be injected */}
          {children} 
        </main>
      </div>
    </div>
  );
}