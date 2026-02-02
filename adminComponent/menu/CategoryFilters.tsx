"use client";
import React from 'react';

interface CategoryProps {
  categories: string[];
  active: string;
  onSelect: (cat: string) => void;
}

const CategoryFilters = ({ categories, active, onSelect }: CategoryProps) => (
  <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar w-full">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => onSelect(cat)}
        className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all ${
          active === cat 
          ? "bg-rose-600 text-white shadow-lg shadow-rose-100" 
          : "bg-white text-slate-500 border border-slate-100 hover:border-slate-300"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
);

export default React.memo(CategoryFilters);