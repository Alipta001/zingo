"use client";
import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <div className="relative w-full lg:w-96 group">
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-rose-500 transition-colors" size={20} />
    <input 
      type="text"
      placeholder="Search dishes..."
      className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-rose-50 transition-all font-medium"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default React.memo(SearchBar);