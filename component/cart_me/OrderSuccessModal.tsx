"use client";
import React from "react";
import { Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId?: string | number;
}

export default function OrderSuccessModal({ isOpen, onClose, orderId }: OrderSuccessModalProps) {
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[48px] p-8 shadow-2xl max-w-sm w-full mx-4 z-50"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={20} className="text-slate-400" />
            </button>

            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Check size={40} className="text-emerald-600" strokeWidth={3} />
            </motion.div>

            {/* Content */}
            <div className="text-center mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter mb-2"
              >
                Order Placed!
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-slate-600 font-medium mb-4"
              >
                Your order has been successfully placed.
              </motion.p>

              {orderId && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-slate-50 rounded-2xl p-4 border border-slate-100"
                >
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Order ID</p>
                  <p className="text-lg font-black text-slate-900 break-all">{orderId}</p>
                </motion.div>
              )}
            </div>

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onClick={onClose}
              className="w-full bg-slate-900 text-white rounded-2xl py-4 font-black uppercase text-sm tracking-widest hover:bg-rose-700 transition-all active:scale-95"
            >
              Continue Shopping
            </motion.button>

            {/* Additional Info */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-6"
            >
              Track your order in the order history
            </motion.p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
