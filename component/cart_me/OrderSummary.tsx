// export default function OrderSummary() {
//   return (
//     <div className="bg-slate-900 text-white rounded-[40px] p-8 sticky top-8 shadow-2xl shadow-slate-200">
//       <h2 className="text-2xl font-[1000] tracking-tighter mb-8 italic">Your <span className="text-rose-500">Order.</span></h2>
      
//       <div className="space-y-4 mb-8">
//         {/* Simple list of names/prices as seen in your image */}
//         <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
//           <span>Subtotal</span>
//           <span className="text-white">₹234</span>

"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "@/redux/slice/orderSlice";
import OrderSuccessModal from "./OrderSuccessModal";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

// export default function OrderSummary() {
//   return (
//     <div className="bg-slate-900 text-white rounded-[40px] p-8 sticky top-8 shadow-2xl shadow-slate-200">
//       <h2 className="text-2xl font-[1000] tracking-tighter mb-8 italic">Your <span className="text-rose-500">Order.</span></h2>
      
//       <div className="space-y-4 mb-8">
//         {/* Simple list of names/prices as seen in your image */}
//         <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
//           <span>Subtotal</span>
//           <span className="text-white">₹234</span>

//         </div>
//         <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
//           <span>Delivery</span>
//           <span className="text-white">₹24</span>
//         </div>
//         <div className="h-px bg-slate-800 my-4" />
//         <div className="flex justify-between items-end">
//           <span className="text-sm font-black uppercase tracking-[0.2em]">Total</span>
//           <span className="text-3xl font-[1000] text-emerald-400">₹258</span>
//         </div>
//       </div>

//       <button className="w-full py-5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-[24px] font-[1000] text-xs uppercase tracking-[0.2em] transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-emerald-500/20">
//         Proceed to Checkout
//       </button>
      
//       <p className="text-center text-[10px] text-slate-500 mt-6 font-bold uppercase tracking-widest">
//         Secure encrypted checkout
//       </p>
//     </div>
//   );
// }

export default function OrderSummary({ total }: { total: number }) {
  const dispatch = useDispatch<any>();
  const { loading } = useSelector((state: any) => state.order);
  const [isPlacing, setIsPlacing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  const deliveryFee = total > 500 ? 0 : 40; // Example logic

  const handlePlaceOrder = async () => {
    setIsPlacing(true);
    try {
      // Get userId from localStorage
      const userId = typeof window !== "undefined" 
        ? localStorage.getItem("Id") || localStorage.getItem("userId")
        : null;

      if (!userId) {
        toast.error("User ID not found. Please log in again.");
        return;
      }

      // Prepare order payload with user_id
      const orderPayload = {
        user_id: userId,
      };

      console.log("📦 Placing order with payload:", orderPayload);
      
      const result = await dispatch(placeOrder(orderPayload) as any).unwrap();
      console.log("✅ Order placed successfully:", result);
      
      const newOrderId = result?.id || result?.order_id || result?.order?.id || "ORDER-" + Date.now();
      setOrderId(newOrderId);
      
      // Store order ID in localStorage for liveTracking page
      if (typeof window !== "undefined") {
        localStorage.setItem("currentOrderId", newOrderId);
      }
      
      setShowSuccess(true);
    } catch (error: any) {
      console.error("Order placement error:", error);
      const errorMessage = error?.response?.data?.detail || error?.message || error || "Failed to place order. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsPlacing(false);
    }
  };

  const handleCloseModal = () => {
    setShowSuccess(false);
    // Redirect to liveTracking page after successful order
    if (orderId && typeof window !== "undefined") {
      window.location.href = `/pages/liveTracking?orderId=${orderId}`;
    }
  };

  return (
    <>
      <OrderSuccessModal isOpen={showSuccess} onClose={handleCloseModal} orderId={orderId || undefined} />
      
      <div className="bg-slate-900 text-white rounded-[40px] p-8 sticky top-8 shadow-2xl shadow-slate-200">
        <h2 className="text-2xl font-[1000] tracking-tighter mb-8 italic">Your <span className="text-rose-500">Order.</span></h2>
        
        <div className="space-y-4 mb-8">
          <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span>Subtotal</span>
            <span className="text-white">₹{total}</span>
          </div>
          <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span>Delivery</span>
            <span className="text-emerald-400">{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
          </div>
          <div className="h-px bg-slate-800 my-4" />
          <div className="flex justify-between items-end">
            <span className="text-sm font-black uppercase tracking-[0.2em]">Total</span>
            <span className="text-3xl font-[1000] text-emerald-400">₹{total + deliveryFee}</span>
          </div>
        </div>

        <button 
          onClick={handlePlaceOrder}
          disabled={isPlacing || loading || total === 0}
          className="w-full py-5 bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-600 text-slate-900 rounded-[24px] font-[1000] text-xs uppercase tracking-[0.2em] transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-emerald-500/20 disabled:shadow-none disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isPlacing || loading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Placing Order...</span>
            </>
          ) : (
            "Place Order"
          )}
        </button>
      </div>
    </>
  );
}