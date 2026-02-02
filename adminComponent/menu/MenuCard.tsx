"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Edit2, Trash2 } from 'lucide-react';

interface MenuCardProps {
  item: any;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const MenuCard = ({ item, onToggle, onDelete }: MenuCardProps) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className="bg-white rounded-[32px] border border-slate-100 p-5 group hover:shadow-2xl transition-all duration-500"
  >
    <div className="relative aspect-video rounded-2xl overflow-hidden mb-5">
      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
      <div className="absolute top-3 left-3">
        <div className={`px-3 py-1.5 rounded-full backdrop-blur-md bg-white/90 text-[10px] font-black uppercase tracking-tighter flex items-center gap-1.5 ${item.isVeg ? 'text-emerald-600' : 'text-rose-600'}`}>
          <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'}`} />
          {item.isVeg ? 'Veg' : 'Non-Veg'}
        </div>
      </div>
    </div>

    <div className="px-1">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="text-[10px] font-bold text-rose-500 uppercase tracking-widest mb-1">{item.category}</p>
          <h3 className="font-extrabold text-slate-900 text-lg leading-tight">{item.name}</h3>
        </div>
        <p className="text-xl font-[1000] text-slate-900">₹{item.price}</p>
      </div>
      
      {/* Description Preview */}
      <p className="text-slate-500 text-xs line-clamp-2 mt-2 leading-relaxed min-h-[32px]">
        {item.description || "No description provided."}
      </p>

      <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-50">
        <div className="flex-1 flex items-center gap-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={item.isAvailable} onChange={() => onToggle(item.id)} className="sr-only peer" />
            <div className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:bg-emerald-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
          </label>
          <span className={`text-[11px] font-bold uppercase ${item.isAvailable ? 'text-emerald-600' : 'text-slate-400'}`}>
            {item.isAvailable ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
        <div className="flex gap-2">
          <button className="p-2.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all"><Edit2 size={18} /></button>
          <button 
            onClick={() => onDelete(item.id)} 
            className="p-2.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

export default React.memo(MenuCard);