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
  const deliveryFee = total > 500 ? 0 : 40; // Example logic

  return (
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

      <button className="w-full py-5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-[24px] font-[1000] text-xs uppercase tracking-[0.2em] transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-emerald-500/20">
        Proceed to Checkout
      </button>
    </div>
  );
}