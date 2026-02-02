"use client";
import React, { useState, useRef } from 'react';
import { 
  Store, MapPin, Camera, Star, X, Utensils,
  Sparkles, Edit3, Lock, CheckCircle2, 
  RefreshCcw, Globe, Phone, Clock, Image as ImageIcon,
  ChevronRight, BadgeCheck, ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// IMPORT YOUR COMPONENTS
import SideBar from '../layout/Sidebar';
import Topbar from '../layout/Topbar';

export default function RestaurantProfilePage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const [formData, setFormData] = useState({
    name: "The Royal Kitchen",
    cuisine: "North Indian • Mughlai • Tandoor",
    address: "12/A Park Street, Near Victoria Memorial, Kolkata - 700016",
    phone: "+91 98765 43210",
    website: "www.royalkitchen.com",
    hours: "11:00 AM - 11:30 PM",
    rating: 4.8
  });

  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800"
  ]);

  const toggleEdit = async () => {
    if (isEditing) {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1200));
      setLoading(false);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* --- SIDEBAR --- */}
      <aside className={`${isSidebarOpen ? 'w-72' : 'w-20'} transition-all duration-300 border-r border-slate-200 bg-white sticky top-0 h-screen overflow-hidden z-20`}>
        <SideBar isSidebarOpen={isSidebarOpen} />
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        
        <main className="p-6 lg:p-10 bg-gradient-to-br from-slate-50 to-[#FFF9F9] flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto pb-20">
            
            {/* --- HEADER SECTION --- */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                <div className="flex items-center gap-2 text-rose-600 mb-3">
                  <div className="p-1.5 bg-rose-50 rounded-lg">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Merchant Settings</span>
                </div>
                <div className="flex items-center gap-4">
                  <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                    Store Profile
                  </h1>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 text-xs font-bold">
                    <BadgeCheck size={14} /> Verified
                  </div>
                </div>
              </motion.div>

              <button 
                onClick={toggleEdit}
                disabled={loading}
                className={`group flex items-center gap-3 px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  isEditing 
                  ? "bg-slate-900 text-white hover:bg-black shadow-lg shadow-slate-200" 
                  : "bg-white text-slate-900 border border-slate-200 hover:border-rose-500 hover:text-rose-600 shadow-sm"
                }`}
              >
                {loading ? (
                  <RefreshCcw className="animate-spin" size={18} />
                ) : isEditing ? (
                  <><CheckCircle2 size={18} className="text-emerald-400" /> Confirm Changes</>
                ) : (
                  <><Edit3 size={18} className="group-hover:rotate-12 transition-transform" /> Edit Storefront</>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* --- LEFT: INFORMATION BENTO --- */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* General Info Card */}
                <div className={`bg-white p-8 rounded-3xl border transition-all duration-500 ${isEditing ? "border-rose-200 shadow-xl ring-4 ring-rose-50/50" : "border-slate-100 shadow-sm"}`}>
                  <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-50">
                    <h3 className="text-sm font-bold text-slate-800 tracking-tight">Business Identity</h3>
                    {!isEditing && <Lock size={16} className="text-slate-300" />}
                  </div>

                  <div className="space-y-6">
                    {/* Input Group */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider ml-1">Legal Business Name</label>
                      <div className="relative group">
                        <Store className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isEditing ? "text-rose-500" : "text-slate-300"}`} size={20} />
                        <input 
                          disabled={!isEditing}
                          className={`w-full pl-12 pr-4 py-4 rounded-2xl text-lg font-bold outline-none transition-all ${
                            isEditing ? "bg-white border-2 border-rose-100 focus:border-rose-500 shadow-inner" : "bg-slate-50 border-2 border-transparent text-slate-700"
                          }`}
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider ml-1">Cuisines & Specialties</label>
                      <div className="relative">
                        <Utensils className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isEditing ? "text-rose-500" : "text-slate-300"}`} size={20} />
                        <input 
                          disabled={!isEditing}
                          className={`w-full pl-12 pr-4 py-4 rounded-2xl text-md font-semibold outline-none transition-all ${
                            isEditing ? "bg-white border-2 border-rose-100 focus:border-rose-500 shadow-inner" : "bg-slate-50 border-2 border-transparent text-slate-600"
                          }`}
                          value={formData.cuisine}
                          onChange={(e) => setFormData({...formData, cuisine: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-amber-50 text-amber-600 rounded-xl"><Clock size={20} /></div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Operating Hours</span>
                    </div>
                    <input disabled={!isEditing} className="w-full font-bold text-slate-800 bg-transparent outline-none disabled:opacity-70" value={formData.hours} />
                  </div>

                  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><Phone size={20} /></div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Contact Number</span>
                    </div>
                    <input disabled={!isEditing} className="w-full font-bold text-slate-800 bg-transparent outline-none disabled:opacity-70" value={formData.phone} />
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm overflow-hidden group">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 shadow-sm">
                      <MapPin size={22} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Official Address</p>
                      <textarea 
                        disabled={!isEditing} 
                        rows={2} 
                        className="w-full font-semibold text-slate-800 bg-transparent outline-none resize-none leading-relaxed disabled:opacity-70" 
                        value={formData.address} 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* --- RIGHT COLUMN --- */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* Gallery Section */}
                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <ImageIcon size={18} className="text-rose-500" />
                      <h3 className="font-bold text-sm text-slate-800">Media Gallery</h3>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-lg">
                      <Star size={14} className="text-amber-500 fill-amber-500" />
                      <span className="text-sm font-bold text-slate-700">{formData.rating}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <AnimatePresence>
                      {images.map((img, idx) => (
                        <motion.div 
                          key={img} 
                          layout 
                          initial={{ opacity: 0, scale: 0.9 }} 
                          animate={{ opacity: 1, scale: 1 }} 
                          className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100 group shadow-sm"
                        >
                          <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Restaurant" />
                          {isEditing && (
                            <button 
                              onClick={() => setImages(images.filter((_, i) => i !== idx))} 
                              className="absolute top-2 right-2 bg-white/90 backdrop-blur shadow-lg text-rose-600 p-2 rounded-lg hover:bg-rose-600 hover:text-white transition-all"
                            >
                              <X size={14} strokeWidth={3} />
                            </button>
                          )}
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    
                    {isEditing && images.length < 6 && (
                      <button 
                        onClick={() => fileInputRef.current?.click()} 
                        className="aspect-[4/3] rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center gap-2 hover:bg-rose-50 hover:border-rose-300 transition-all group"
                      >
                        <Camera size={24} className="text-slate-400 group-hover:text-rose-500" />
                        <span className="text-[10px] font-bold uppercase text-slate-400 group-hover:text-rose-600">Add Image</span>
                      </button>
                    )}
                  </div>
                  <input type="file" multiple hidden ref={fileInputRef} onChange={(e) => {
                    if(e.target.files) setImages([...images, ...Array.from(e.target.files).map(f => URL.createObjectURL(f))].slice(0,6));
                  }} />
                </div>

                {/* Live Card - Professional Dark Mode */}
                <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group shadow-xl shadow-slate-200">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center border border-white/10">
                        <Globe size={20} className="text-rose-400" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Live Status</span>
                    </div>
                    <h4 className="font-bold text-2xl mb-2 tracking-tight">Public Storefront Live</h4>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">
                      Your store is currently visible to customers in Kolkata.
                    </p>
                    <button className="w-full bg-white text-slate-900 text-xs font-bold uppercase tracking-wider py-4 rounded-xl hover:bg-rose-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                      View Live Page <ChevronRight size={16} />
                    </button>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl group-hover:bg-rose-500/20 transition-all duration-700" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}