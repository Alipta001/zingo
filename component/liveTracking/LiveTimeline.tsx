"use client";
import { Clock } from 'lucide-react';

export default function LiveTimeline({ events }: { events: any[] }) {
  return (
    <article className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-slate-100 h-full">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl"><Clock size={24} /></div>
        <h2 className="text-2xl font-[1000] text-slate-900 tracking-tight">Order Updates</h2>
      </div>
      <div className="relative ml-4 space-y-0">
        <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-slate-100" />
        {events.map((item) => (
          <div key={item.id} className="relative pl-10 pb-10 last:pb-0">
            <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-4 border-white z-10 ${
              item.status === 'done' ? "bg-emerald-500" : item.status === 'current' ? "bg-rose-600 animate-pulse" : "bg-slate-200"
            }`} />
            <div className="flex justify-between">
              <h3 className={`font-bold ${item.status === 'pending' ? 'text-slate-300' : 'text-slate-900'}`}>{item.label}</h3>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}