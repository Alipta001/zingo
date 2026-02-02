"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, CheckCircle2, DollarSign, AlignLeft } from 'lucide-react';

const AddItem = ({ isOpen, onClose, onAdd, categories }: any) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isVeg, setIsVeg] = useState(true);
  const [form, setForm] = useState({ name: "", price: "", category: "Main Course", description: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ ...form, isVeg, image: imagePreview || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500" });
    setForm({ name: "", price: "", category: "Main Course", description: "" });
    setImagePreview(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={onClose} 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 20 }} 
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden relative"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-[1000] text-slate-900 tracking-tighter">
                    Add New <span className="text-rose-600">Dish.</span>
                  </h2>
                  <button onClick={onClose} className="p-3 bg-slate-50 text-slate-400 hover:text-rose-600 rounded-2xl transition-all">
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Image Upload Section */}
                  <div 
                    onClick={() => fileInputRef.current?.click()} 
                    className="relative aspect-[21/9] rounded-[32px] border-2 border-dashed border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center cursor-pointer overflow-hidden group hover:border-rose-300 transition-colors"
                  >
                    {imagePreview ? (
                      <img src={imagePreview} className="w-full h-full object-cover" alt="Preview" />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-slate-400">
                        <Camera size={32} className="group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Upload Dish Image</span>
                      </div>
                    )}
                    <input type="file" hidden ref={fileInputRef} accept="image/*" onChange={(e) => e.target.files && setImagePreview(URL.createObjectURL(e.target.files[0]))} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Dish Name</label>
                      <input required placeholder="e.g. Classic Margherita" className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-rose-500 focus:bg-white rounded-2xl outline-none font-bold transition-all" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
                    </div>

                    {/* Price */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Price (₹)</label>
                      <div className="relative">
                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input required type="number" placeholder="0.00" className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-transparent focus:border-rose-500 focus:bg-white rounded-2xl outline-none font-bold transition-all" value={form.price} onChange={(e) => setForm({...form, price: e.target.value})} />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Description</label>
                    <div className="relative">
                      <AlignLeft className="absolute left-4 top-5 text-slate-400" size={18} />
                      <textarea 
                        rows={3}
                        placeholder="Describe the ingredients, taste, and prep..."
                        className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-transparent focus:border-rose-500 focus:bg-white rounded-2xl outline-none font-bold transition-all resize-none"
                        value={form.description}
                        onChange={(e) => setForm({...form, description: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Category */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Category</label>
                      <select className="w-full px-6 py-4 bg-slate-50 rounded-2xl outline-none font-bold text-slate-700 border-2 border-transparent focus:border-rose-500 transition-all cursor-pointer" value={form.category} onChange={(e) => setForm({...form, category: e.target.value})}>
                        {categories.filter((c:string) => c !== "All Items").map((c:string) => <option key={c}>{c}</option>)}
                      </select>
                    </div>

                    {/* Veg/Non-Veg Toggle */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Dietary Type</label>
                      <div className="flex gap-2 p-1.5 bg-slate-100 rounded-[20px]">
                        <button type="button" onClick={() => setIsVeg(true)} className={`flex-1 py-3 rounded-2xl font-black text-[10px] uppercase tracking-wider transition-all ${isVeg ? "bg-white text-emerald-600 shadow-sm" : "text-slate-400 hover:text-slate-600"}`}>Veg</button>
                        <button type="button" onClick={() => setIsVeg(false)} className={`flex-1 py-3 rounded-2xl font-black text-[10px] uppercase tracking-wider transition-all ${!isVeg ? "bg-white text-rose-600 shadow-sm" : "text-slate-400 hover:text-slate-600"}`}>Non-Veg</button>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 pt-4">
                    <button type="button" onClick={onClose} className="flex-1 px-8 py-5 bg-slate-100 text-slate-500 rounded-[24px] font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all">
                      Cancel
                    </button>
                    <button type="submit" className="flex-[2] px-8 py-5 bg-slate-900 text-white rounded-[24px] font-black text-xs uppercase tracking-widest shadow-xl shadow-slate-200 flex items-center justify-center gap-3 hover:bg-black transition-all">
                      <CheckCircle2 size={20} className="text-emerald-400" /> Confirm & Add Item
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AddItem;