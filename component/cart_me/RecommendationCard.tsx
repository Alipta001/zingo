"use client";
import { motion } from 'framer-motion';
import { Plus, Star } from 'lucide-react';

export default function RecommendationCard({ item }: { item: any }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-[32px] p-4 border border-slate-100 group transition-all duration-500"
    >
      <div className="relative aspect-square rounded-[24px] overflow-hidden mb-4 shadow-inner">
        <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-xl flex items-center gap-1">
          <Star size={10} className="fill-amber-400 text-amber-400" />
          <span className="text-[10px] font-black italic">4.8</span>
        </div>
      </div>

      <div className="px-1">
        <h4 className="font-extrabold text-slate-900 text-sm mb-1 leading-tight">{item.name}</h4>
        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-[1000] text-slate-900">₹{item.price}</span>
          <button className="w-10 h-10 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-rose-600 transition-colors shadow-lg active:scale-90">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}