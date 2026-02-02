"use client";
import { motion } from 'framer-motion';
import { Package, Truck, ShieldCheck, Bike, Home } from 'lucide-react';

const STEPS = [
  { id: 1, label: "Picked Up", icon: Package, status: 'complete' },
  { id: 2, label: "In Transit", icon: Truck, status: 'complete' },
  { id: 3, label: "Customs", icon: ShieldCheck, status: 'complete' },
  { id: 4, label: "On the Way", icon: Bike, status: 'active' },
  { id: 5, label: "Delivered", icon: Home, status: 'pending' },
];

export default function TrackingStepper() {
  return (
    <section className="bg-white rounded-[32px] p-8 mb-8 shadow-sm border border-slate-100 overflow-x-auto no-scrollbar">
      <div className="flex justify-between items-center relative min-w-[600px]">
        <div className="absolute top-7 left-0 w-full h-1 bg-slate-100 -z-0" />
        {STEPS.map((step) => (
          <div key={step.id} className="relative z-10 flex flex-col items-center flex-1">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
              step.status !== 'pending' ? "bg-rose-50 text-rose-600 border-2 border-rose-500" : "bg-white text-slate-300 border-2 border-slate-100"
            }`}>
              <step.icon size={24} />
              {step.status === 'active' && (
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 rounded-full bg-rose-500/10" />
              )}
            </div>
            <p className={`mt-3 text-[10px] font-black uppercase tracking-widest ${step.status !== 'pending' ? "text-slate-900" : "text-slate-400"}`}>
              {step.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}