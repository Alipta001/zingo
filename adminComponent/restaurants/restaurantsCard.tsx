"use client";
import React from 'react';
import { Edit3, Trash2, Star, MapPin, ExternalLink, MoreVertical } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RestaurantCard() {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-rose-100 transition-all duration-500"
    >
      {/* IMAGE SECTION */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt="Restaurant"
        />
        {/* Status Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-800">Active Now</span>
        </div>
        
        {/* Rating Overlay */}
        <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-2xl flex items-center gap-1">
          <Star size={12} fill="#fbbf24" className="text-amber-400" />
          <span className="text-xs font-bold">4.8</span>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-[1000] text-slate-900 tracking-tight leading-tight group-hover:text-[#e23744] transition-colors">
              The Spicy Hub
            </h3>
            <div className="flex items-center gap-1 text-slate-400 mt-1">
              <MapPin size={14} />
              <p className="text-[11px] font-bold uppercase tracking-tight">Park Street, Kolkata</p>
            </div>
          </div>
          <button className="text-slate-300 hover:text-slate-600 p-1">
            <MoreVertical size={20} />
          </button>
        </div>

        <p className="text-xs font-medium text-slate-500 leading-relaxed line-clamp-2">
          Premium North Indian, Chinese Fusion • Fine Dining Experience
        </p>

        {/* STATS ROW */}
        <div className="flex gap-4 my-6 py-4 border-y border-slate-50">
           <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Orders</span>
              <span className="text-sm font-black text-slate-700">1.2k+</span>
           </div>
           <div className="w-[1px] bg-slate-100" />
           <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Revenue</span>
              <span className="text-sm font-black text-slate-700">$45.8k</span>
           </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3">
          <button className="flex-[2] bg-slate-950 text-white flex items-center justify-center gap-2 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#e23744] transition-all shadow-xl shadow-slate-200 hover:shadow-rose-200">
            <Edit3 size={16} />
            Manage Store
          </button>
          <button className="flex-1 bg-rose-50 text-[#e23744] flex items-center justify-center py-3.5 rounded-2xl hover:bg-rose-100 transition-colors">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}