"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Store, 
  UtensilsCrossed, 
  ShoppingBag, 
  Settings,
  LogOut,
  ChevronRight
} from 'lucide-react';

export default function SideBar({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  const pathname = usePathname();

  const menuItems = [
    { 
      label: "Analytics", 
      path: "/adminPages/adminDashboard", 
      icon: LayoutDashboard 
    },
    { 
      label: "My Restaurant", 
      path: "/adminPages/profile", // Matches your profile page folder
      icon: Store 
    },
    { 
      label: "Menu Items", 
      path: "/adminPages/menu", 
      icon: UtensilsCrossed 
    },
    { 
      label: "Live Orders", 
      path: "/adminPages/liveOrders", 
      icon: ShoppingBag,
      badge: "3" // Optional: Show active order count
    },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* BRANDING SECTION */}
      <div className="p-8 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#e23744] rounded-xl flex items-center justify-center text-white shadow-lg shadow-rose-200 shrink-0">
            <UtensilsCrossed size={22} strokeWidth={2.5} />
          </div>
          {isSidebarOpen && (
            <span className="font-[1000] text-2xl tracking-tighter text-slate-800 italic">
              ZINGO<span className="text-[#e23744]">.</span>
            </span>
          )}
        </div>
      </div>

      {/* NAVIGATION SECTION */}
      <nav className="flex-1 px-4 space-y-1.5">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link key={item.path} href={item.path} className="block">
              <div className={`group relative flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 ${
                isActive 
                  ? 'bg-[#e23744] text-white shadow-xl shadow-rose-200' 
                  : 'text-slate-400 hover:bg-rose-50 hover:text-[#e23744]'
              }`}>
                {/* Active Indicator Line */}
                {isActive && (
                  <div className="absolute left-0 w-1 h-6 bg-white rounded-r-full" />
                )}

                <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} className="shrink-0" />
                
                {isSidebarOpen && (
                  <div className="flex items-center justify-between flex-1">
                    <span className={`text-[12px] uppercase tracking-[0.15em] ${isActive ? 'font-black' : 'font-bold'}`}>
                      {item.label}
                    </span>
                    
                    {item.badge ? (
                      <span className={`text-[10px] px-2 py-0.5 rounded-lg font-black ${
                        isActive ? 'bg-white text-[#e23744]' : 'bg-[#e23744] text-white'
                      }`}>
                        {item.badge}
                      </span>
                    ) : (
                      <ChevronRight size={14} className={`transition-all ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                    )}
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* FOOTER SECTION */}
      <div className="p-6 border-t border-slate-50">
        <button className="w-full flex items-center gap-4 px-4 py-3 text-slate-400 hover:text-red-600 font-black text-[11px] uppercase tracking-widest transition-all group">
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
          {isSidebarOpen && <span>Sign Out</span>}
        </button>
      </div>
    </div>
  );
}