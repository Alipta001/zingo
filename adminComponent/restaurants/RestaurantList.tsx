"use client";
import React from 'react';
import RestaurantCard from './restaurantsCard';
import { Plus, SlidersHorizontal, Search, Store } from 'lucide-react';

export default function RestaurantList() {
  return (
    <div className="space-y-10">
      {/* HEADER SECTION */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-[#e23744] mb-3">
            <Store size={18} strokeWidth={3} />
            <span className="text-[11px] font-black uppercase tracking-[0.3em]">Directory</span>
          </div>
          <h2 className="text-5xl font-[1000] text-slate-900 tracking-tighter">
            Your <span className="text-[#e23744]">Partner</span> Stores
          </h2>
          <p className="text-slate-500 font-medium mt-2">Managing 12 active restaurant outlets across 4 cities.</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-4 bg-white border border-slate-100 rounded-[20px] text-slate-500 hover:text-[#e23744] hover:shadow-xl hover:shadow-rose-100 transition-all">
             <SlidersHorizontal size={20} />
          </button>
          <button className="bg-[#e23744] text-white px-8 py-4 rounded-[22px] font-black text-xs uppercase tracking-widest flex items-center gap-3 shadow-2xl shadow-rose-200 hover:scale-105 active:scale-95 transition-all">
            <Plus size={20} strokeWidth={3} />
            Add New Establishment
          </button>
        </div>
      </div>

      {/* STATS OVERVIEW CARD (Optional but looks very Pro) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Active', value: '12', color: 'bg-emerald-500' },
            { label: 'Under Review', value: '03', color: 'bg-amber-500' },
            { label: 'Top Rated', value: '08', color: 'bg-indigo-500' },
            { label: 'Total Revenue', value: '$128k', color: 'bg-rose-500' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-[28px] border border-slate-100 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                  <p className="text-2xl font-[1000] text-slate-800">{stat.value}</p>
                </div>
                <div className={`w-2 h-8 rounded-full ${stat.color} opacity-20`} />
            </div>
          ))}
      </div>

      {/* GRID SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <RestaurantCard key={id} />
        ))}
      </div>
    </div>
  );
}