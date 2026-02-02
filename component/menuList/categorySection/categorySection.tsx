"use client";
import React, { useEffect, useState } from 'react';
import styles from './CategorySection.module.css';



const MODES = [
  { id: 'dining', label: 'Dining Out', img: '/image/dinning.png' },
  { id: 'delivery', label: 'Delivery', img: '/image/motorbike 1.png' },
  { id: 'nightlife', label: 'Nightlife', img: '/image/wine-bottle 1.png' },
];

export function CategorySection() {
  const [active, setActive] = useState('delivery');
  
  return (
    <section className="bg-white border-b border-rose-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex gap-12 overflow-x-auto noScrollbar justify-around">
          {MODES.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActive(mode.id)}
              className={`flex items-center gap-4 py-6 transition-all relative whitespace-nowrap group cursor-pointer`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 
                ${active === mode.id ? 'bg-rose-50 shadow-inner' : 'bg-slate-50 group-hover:bg-rose-50/50 '}`}>
                <img src={mode.img} alt={mode.label} className={`w-8 h-8 object-contain ${active !== mode.id && 'grayscale opacity-50'}`} />
              </div>
              <span className={`text-sm font-black uppercase tracking-widest transition-colors
                ${active === mode.id ? 'text-rose-800' : 'text-slate-400 group-hover:text-slate-600 '}`}>
                {mode.label}
              </span>
              {active === mode.id && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-rose-800 rounded-t-full shadow-[0_-4px_10px_rgba(159,18,57,0.3)]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}