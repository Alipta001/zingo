// import React from 'react'

// export default function FilterMenu() {
//   return (
//     <>
// <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-48 h-fit">
//   <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm">
//     <div className="flex items-center justify-between mb-8">
//       <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Filters</h3>
//       <button className="text-[10px] font-black text-rose-800 underline uppercase tracking-widest">Clear</button>
//     </div>

//     {/* Filter Group */}
//     {[
//       { title: "Preference", options: ["Veg Only", "Non-Veg", "Vegan"] },
//       { title: "Rating", options: ["4.5+", "4.0+", "3.5+"] },
//       { title: "Delivery Time", options: ["Under 30 mins", "Under 45 mins"] }
//     ].map((group) => (
//       <div key={group.title} className="mb-8 last:mb-0">
//         <h4 className="text-[11px] font-[950] uppercase tracking-widest text-slate-900 mb-4 flex items-center gap-2">
//           <span className="w-1 h-3 bg-rose-800 rounded-full" /> {group.title}
//         </h4>
//         <div className="space-y-3">
//           {group.options.map((opt) => (
//             <label key={opt} className="flex items-center gap-3 group cursor-pointer">
//               <input type="checkbox" className="sr-only peer" />
//               <div className="w-5 h-5 border-2 border-slate-100 rounded-lg peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-all flex items-center justify-center">
//                 <div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 peer-checked:opacity-100" />
//               </div>
//               <span className="text-xs font-bold text-slate-500 group-hover:text-slate-900 transition-colors">{opt}</span>
//             </label>
//           ))}
//         </div>
//       </div>
//     ))}
//   </div>
// </aside>
//     </>
//   )
// }

"use client";
import React, { useState } from 'react';
import { ChevronDown, X, SlidersHorizontal } from "lucide-react";

export default function FilterMenu() {
  const [activeModal, setActiveModal] = useState(null);

  const filterGroups = [
    { title: "Preference", options: ["Veg Only", "Non-Veg", "Vegan"] },
    { title: "Rating", options: ["4.5+", "4.0+", "3.5+"] },
    { title: "Delivery Time", options: ["Under 30 mins", "Under 45 mins"] }
  ];

  const closeModal = () => setActiveModal(null);

  return (
    <>
      {/* --- DESKTOP SIDEBAR (Visible on lg screens) --- */}
      <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-48 h-fit">
        <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Filters</h3>
            <button className="text-[10px] font-black text-rose-800 underline uppercase tracking-widest">Clear</button>
          </div>

          {filterGroups.map((group) => (
            <div key={group.title} className="mb-8 last:mb-0">
              <h4 className="text-[11px] font-[950] uppercase tracking-widest text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-3 bg-rose-800 rounded-full" /> {group.title}
              </h4>
              <div className="space-y-3">
                {group.options.map((opt) => (
                  <label key={opt} className="flex items-center gap-3 group cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-5 h-5 border-2 border-slate-100 rounded-lg peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-all flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 peer-checked:opacity-100" />
                    </div>
                    <span className="text-xs font-bold text-slate-500 group-hover:text-slate-900 transition-colors">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* --- MOBILE HORIZONTAL FILTER (Visible below lg) --- */}
      <div className="lg:hidden w-full mb-8">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 px-1">
          {/* Static Filter Icon */}
          <div className="flex-shrink-0 p-2.5 bg-slate-900 rounded-full text-white">
            <SlidersHorizontal size={16} />
          </div>
          
          {filterGroups.map((group) => (
            <button
              key={group.title}
              onClick={() => setActiveModal(group)}
              className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 bg-white border border-rose-100 rounded-full shadow-sm text-[10px] font-black uppercase tracking-widest text-slate-700 active:scale-95 transition-all"
            >
              {group.title}
              <ChevronDown size={12} className="text-rose-800" />
            </button>
          ))}
        </div>

        {/* MOBILE BOTTOM SHEET MODAL */}
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-900/60 backdrop-blur-sm p-4 transition-opacity">
            <div className="bg-white w-full rounded-[40px] p-8 animate-in slide-in-from-bottom duration-300 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-800 mb-1">Select Option</h3>
                  <h2 className="text-xl font-[950] uppercase tracking-tighter text-slate-900">{activeModal.title}</h2>
                </div>
                <button onClick={closeModal} className="p-3 bg-slate-50 rounded-full hover:bg-rose-50 transition-colors">
                  <X size={20} className="text-slate-900" />
                </button>
              </div>

              <div className="space-y-3 mb-8">
                {activeModal.options.map((opt) => (
                  <label key={opt} className="flex items-center justify-between p-5 bg-slate-50 rounded-[24px] cursor-pointer hover:bg-rose-50 transition-all border border-transparent hover:border-rose-100 group">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-600 group-hover:text-rose-800">{opt}</span>
                    <input type="radio" name="mobile-filter" className="w-5 h-5 accent-slate-900" />
                  </label>
                ))}
              </div>

              <button 
                onClick={closeModal}
                className="w-full bg-slate-900 text-white py-5 rounded-[24px] text-[11px] font-black uppercase tracking-[0.2em] shadow-xl active:scale-[0.98] transition-all"
              >
                Apply Selection
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
