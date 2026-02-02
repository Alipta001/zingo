"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

const Toast = ({ message, onClose }: { message: string; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 24, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-3 px-6 py-4 bg-slate-900 text-white rounded-2xl shadow-2xl"
    >
      <div className="bg-emerald-500 p-1 rounded-full"><CheckCircle2 size={16} /></div>
      <span className="text-sm font-bold">{message}</span>
      <button onClick={onClose} className="ml-4 hover:text-rose-500"><X size={16} /></button>
    </motion.div>
  );
};

export default Toast;