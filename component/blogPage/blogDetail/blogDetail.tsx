"use client";
import React from 'react';
import { Calendar, Clock, Share2, ArrowLeft, Bookmark, Zap } from 'lucide-react';
import Image from 'next/image';
import styles from "../../../styles/blogPage/blogDetail/blogDetail.module.css";

export default function BlogDetail() {
  return (
    /* Background changed to a premium Off-White/Champagne to make the Rose colors pop */
    <div className="bg-[#FCF9F7] min-h-screen pb-20 overflow-x-hidden relative">
      
      {/* Texture Overlay for Premium Paper Feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/cubes.png')` }} />

      {/* Modern Floating Scroll Progress */}
      <div className="fixed top-8 right-8 z-[100] flex flex-col items-center gap-2">
         <div className="h-20 w-[2px] bg-rose-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-rose-800 h-1/3" />
         </div>
         <span className="text-[8px] font-black uppercase vertical-text tracking-widest text-rose-800">Scroll</span>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* --- NAVIGATION --- */}
        <nav className="pt-32 pb-8">
          <button className="group flex items-center gap-4 text-rose-800 font-black text-[10px] uppercase tracking-[0.5em] hover:text-slate-900 transition-colors">
            <div className="w-8 h-[1px] bg-rose-800 group-hover:w-12 transition-all" />
            Back to Journal
          </button>
        </nav>

        {/* --- DYNAMIC HEADER --- */}
        <header className="grid lg:grid-cols-12 gap-10 mb-24 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <Zap size={14} className="text-rose-800 fill-rose-800" />
              <span className="text-rose-800 font-black text-[12px] uppercase tracking-[0.4em]">Case Study — UX Architecture</span>
            </div>
            
            <h1 className="text-6xl md:text-[110px] font-[950] text-slate-900 leading-[0.8] uppercase tracking-tighter">
              Frictionless <br />
              <span className="text-rose-800 italic font-serif lowercase tracking-normal">Fulfilment</span>
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-6">
            <div className="flex flex-col items-start lg:items-end">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Published</p>
               <span className="text-lg font-black text-slate-900 uppercase tracking-tighter">Oct 30, 2025</span>
            </div>
            <div className="flex flex-col items-start lg:items-end">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Reading Time</p>
               <span className="text-lg font-black text-slate-900 uppercase tracking-tighter">12 Minutes</span>
            </div>
            <div className="flex gap-4 mt-4">
               <div className="p-4 bg-white rounded-full shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer border border-rose-50 text-rose-800">
                  <Share2 size={20} />
               </div>
               <div className="p-4 bg-white rounded-full shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer border border-rose-50 text-rose-800">
                  <Bookmark size={20} />
               </div>
            </div>
          </div>
        </header>

        {/* --- MAIN HERO (EXTRA WIDE) --- */}
        <div className="mb-24 relative group">
          <div className="absolute -inset-4 bg-rose-100 rounded-[60px] -rotate-1 group-hover:rotate-0 transition-transform duration-1000" />
          <div className="relative h-[400px] md:h-[700px] rounded-[50px] overflow-hidden z-10 shadow-2xl">
            <img src="/images/blogDetail/zingo-blog-7.jpeg" alt="UX Interface" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-950/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* --- CONTENT ARCHITECTURE --- */}
        <main className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
          
          {/* Side Info (Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-40 h-fit">
             <div className="border-l-2 border-rose-800 pl-6 space-y-10">
                <div>
                   <h5 className="text-[10px] font-black uppercase text-rose-800 mb-4 tracking-widest">Core Topics</h5>
                   <ul className="text-sm font-bold text-slate-500 space-y-2">
                      <li className="hover:text-rose-800 cursor-pointer">01. Cognitive Load</li>
                      <li className="hover:text-rose-800 cursor-pointer">02. Transparency</li>
                      <li className="hover:text-rose-800 cursor-pointer">03. Micro-Interactions</li>
                   </ul>
                </div>
                <div className="p-6 bg-slate-900 rounded-[30px] text-white">
                   <p className="text-xs font-bold leading-relaxed opacity-70">"The journey from craving to consumption is a battle of seconds."</p>
                </div>
             </div>
          </aside>

          {/* Editorial Column */}
          <div className="lg:col-span-9 max-w-3xl">
            <div className={styles.editorialContent}>
              <p className="text-3xl font-black text-slate-900 tracking-tight leading-snug mb-12">
                The best online food ordering experiences are <span className="text-rose-800 underline decoration-rose-200 underline-offset-8">invisible</span>. 
              </p>

              <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-900 mb-8 flex items-center gap-4">
                <span className="text-rose-800/20 text-7xl font-serif italic lowercase">01</span> The Core Flow
              </h2>
              <p>The journey begins with browsing. Leading apps deploy smart filters and predictive search. One-tap reordering eliminates decision fatigue—a feature that can boost weekly active users by 15-20%.</p>
              
              <div className="my-20 relative">
                 <img src="/images/blogDetail/zingo-blog-5.jpeg" className="rounded-[40px] w-full object-cover shadow-2xl" alt="Mobile App View" />
                 <div className="absolute -bottom-10 -right-10 w-64 bg-white p-8 rounded-[30px] shadow-2xl border border-rose-50 hidden md:block">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Editor's Note</p>
                    <p className="text-sm font-serif italic text-rose-900">"Progressive disclosure hides optional fields until needed."</p>
                 </div>
              </div>

              <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-900 mb-8 mt-32 flex items-center gap-4">
                <span className="text-rose-800/20 text-7xl font-serif italic lowercase">02</span> Transparency
              </h2>
              <p>Post-order anxiety is where many apps falter. The solution is granular status updates paired with dynamic ETAs that adjust for kitchen delays or traffic. Map-based tracking transforms waiting into engagement.</p>
              
              

              {/* Parallax Image Style */}
              <div className="my-24 h-[500px] rounded-[50px] overflow-hidden relative shadow-inner">
                 <img src="/images/blogDetail/zingo-blog-6.jpeg" alt="Logistics" className="w-full h-[120%] object-cover absolute -top-10" />
                 <div className="absolute inset-0 bg-black/20" />
              </div>

              <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-900 mb-8 mt-32">Micro-Interactions</h2>
              <p>Visual feedback mechanisms—pulsing icons during processing, animated progress bars—reassure users that the system is working. Loading states that preview content feel faster than blank spinners.</p>
            </div>
          </div>
        </main>

        {/* --- RELATED STORIES (WIDE) --- */}
        <section className="mt-40 pt-24 border-t border-rose-100">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 px-4">
              <div>
                <span className="text-rose-800 font-black text-[12px] uppercase tracking-[0.5em] mb-4 block">End of Article</span>
                <h2 className="text-6xl md:text-8xl font-[950] uppercase tracking-tighter text-slate-900 leading-none">Next <span className="text-rose-800 italic font-serif lowercase tracking-normal">Chapters</span></h2>
              </div>
              <button className="mt-8 md:mt-0 px-10 py-5 bg-slate-900 text-white rounded-full text-[11px] font-black uppercase tracking-[0.3em] hover:bg-rose-800 transition-all">Explore All Stories</button>
           </div>

           <div className="grid md:grid-cols-3 gap-12 px-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-[16/11] rounded-[45px] overflow-hidden mb-8 relative shadow-lg">
                    <img src={`/images/blog/blog${i+1}.jpg`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="/images/blog/blog6.jpeg"
  />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                     <span className="text-[10px] font-black uppercase tracking-widest text-rose-800 bg-rose-50 px-3 py-1 rounded-full">Food Trends</span>
                     <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">5 min read</span>
                  </div>
                  <h3 className="text-3xl font-[950] uppercase tracking-tighter text-slate-900 group-hover:text-rose-800 transition-colors leading-none">The Future of Sustainable Packaging</h3>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
}