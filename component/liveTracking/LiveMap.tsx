"use client";
import { MapPin, Phone, Star } from 'lucide-react';

export default function LiveMap() {
  return (
    <div className="space-y-6">
      <div className="relative aspect-video rounded-[32px] overflow-hidden bg-slate-200 border border-slate-100 group">
        <div className="absolute inset-0 bg-black/10 z-10 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl">
            <MapPin className="text-rose-600 animate-bounce" size={16} />
            <span className="text-[10px] font-black uppercase">Live Tracking Active</span>
          </div>
        </div>
        <img src="/image/map.png" alt="Live Map" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s]" />
      </div>

      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-3xl border border-slate-100">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-rose-600 rounded-2xl flex items-center justify-center text-white font-black shadow-lg">RS</div>
          <div>
            <h5 className="font-extrabold text-slate-900 text-sm">Rajesh S. (Rider)</h5>
            <div className="flex text-amber-400 gap-0.5 mt-0.5"><Star size={10} fill="currentColor" /> 4.9 Rating</div>
          </div>
        </div>
        <a href="tel:+" className="p-3 bg-white text-rose-600 rounded-xl shadow-sm border border-rose-100"><Phone size={18} /></a>
      </div>
    </div>
  );
}