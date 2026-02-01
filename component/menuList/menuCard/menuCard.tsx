// "use client";
// import React, { useState } from "react";
// import { BaseURL } from "@/app/api/axios/axios";
// import { Plus, Minus, ShoppingBag } from "lucide-react";
// import styles from "../../../styles/menuList/menuCard/menuCard.module.css";

// export function MenuCard({ name, items, rating, time, img, price }) {
//   const [quantity, setQuantity] = useState(0);

//   const handleIncrement = () => setQuantity(prev => prev + 1);
//   const handleDecrement = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

//   return (
//     <div className={`${styles.royalCard} group bg-white rounded-[32px] p-3 border border-transparent hover:border-rose-100 hover:shadow-2xl hover:shadow-rose-100/50 flex flex-col h-full`}>
      
//       {/* IMAGE SECTION */}
//       <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden mb-4 shrink-0">
//         <img 
//           src={img?.startsWith('http') ? img : `${BaseURL}${img}`} 
//           alt={name} 
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
//         />
        
//         {/* Floating Price Tag */}
//         <div className={`${styles.pricePulse} absolute top-3 right-3 bg-slate-900 text-white px-3 py-1 rounded-full shadow-xl`}>
//            <p className="text-[11px] font-black tracking-tight">₹{price}</p>
//         </div>
//       </div>

//       {/* CONTENT SECTION */}
//       <div className="px-2 flex flex-col flex-grow">
//         <div className="flex justify-between items-start mb-1 gap-2">
//           <h3 className="text-lg font-[950] text-slate-900 leading-tight uppercase tracking-tighter truncate">
//             {name}
//           </h3>
//           <div className="bg-emerald-50 px-2 py-0.5 rounded-lg flex items-center gap-1 shrink-0">
//             <span className="text-[10px] font-black text-emerald-700">{rating}</span>
//             <span className="text-[8px] text-emerald-600">★</span>
//           </div>
//         </div>
        
//         <p className="text-xs font-medium text-slate-400 mb-4 truncate">{items}</p>
        
//         {/* ACTION SECTION */}
//         <div className="pt-4 border-t border-slate-50 mt-auto">
//           {quantity === 0 ? (
//             /* INITIAL ADD BUTTON */
//             <button 
//               onClick={handleIncrement}
//               className={`${styles.shimmerBtn} w-full bg-slate-900 hover:bg-rose-800 text-white py-4 rounded-2xl transition-all duration-300 active:scale-[0.98] shadow-lg`}
//             >
//               <div className={styles.shimmerEffect} />
//               <div className="relative z-10 flex items-center justify-center gap-2">
//                 <ShoppingBag size={14} className={styles.iconTilt} />
//                 <span className="text-[10px] font-black uppercase tracking-[0.2em]">Add to Selection</span>
//                 <Plus size={14} className="ml-1 opacity-50" />
//               </div>
//             </button>
//           ) : (
//             /* QUANTITY SELECTOR MODE */
//             <div className={styles.quantityControls}>
//               <button onClick={handleDecrement} className={styles.qtyBtn}>
//                 <Minus size={16} strokeWidth={3} />
//               </button>
              
//               <div className="flex flex-col items-center">
//                 <span className="text-[8px] font-black uppercase tracking-widest text-rose-200/50">Quantity</span>
//                 <span className={styles.qtyNumber}>{quantity}</span>
//               </div>

//               <button onClick={handleIncrement} className={styles.qtyBtn}>
//                 <Plus size={16} strokeWidth={3} />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaseURL } from "@/app/api/axios/axios";
import { Plus, Minus, ShoppingBag } from "lucide-react";
// Import your specific Redux actions
import { decrement, increment } from "@/redux/slice/showSlice";
import { addToCart } from "@/redux/slice/cartSlice";
import styles from "../../../styles/menuList/menuCard/menuCard.module.css";

export function MenuCard({ id, name, items, rating, time, img, price, userId }) {
  const dispatch = useDispatch();

  // Using the ID prop to track quantity in your Redux store
  const count = useSelector(
    (state: any) => state.showDataOnScreen.addToCart.quantities[id] || 1,
  );

  const handleAddCart = () => {
    const payload = {
      user_id: userId,
      menu_item_id: id,
      quantity: count,
    };
    dispatch(addToCart(payload) as any);
  };

  return (
    <div className={`${styles.royalCard} group bg-white rounded-[32px] p-3 border border-transparent hover:border-rose-100 hover:shadow-2xl hover:shadow-rose-100/50 transition-all duration-500 flex flex-col h-full`}>
      
      {/* IMAGE SECTION - Original Design */}
      <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden mb-4 shrink-0">
        <img 
          src={img?.startsWith('http') ? img : `${BaseURL}${img}`} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* Floating Price Tag - Original Design */}
        <div className={`${styles.pricePulse} absolute top-3 right-3 bg-[#e23744] text-white px-3 py-1 rounded-full shadow-xl z-10`}>
           <p className="text-[24px] font-black tracking-tight">₹{price}</p>
        </div>

        {/* Offer Tag - Original Design */}
        <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 shadow-lg">
          <p className="text-[10px] font-black text-rose-800 uppercase tracking-tighter">50% OFF UP TO ₹100</p>
        </div>
      </div>

      {/* CONTENT SECTION - Original Design */}
      <div className="px-2 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1 gap-2">
          <h3 className="text-lg font-[950] text-slate-900 leading-tight uppercase tracking-tighter truncate">
            {name}
          </h3>
          <div className="bg-emerald-50 px-2 py-0.5 rounded-lg flex items-center gap-1 shrink-0">
            <span className="text-[10px] font-black text-emerald-700">{rating}</span>
            <span className="text-[8px] text-emerald-600">★</span>
          </div>
        </div>
        
        <p className="text-xs font-medium text-slate-400 mb-4 truncate">{items}</p>
        
        {/* ACTION SECTION - New Side-by-Side Layout */}
        <div className="mt-auto pt-4 border-t border-slate-50">
          <div className="flex items-center gap-3">
            
            {/* QTY SELECTOR - Side Position */}
            <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200/50">
              <button
                className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-white hover:text-rose-800 transition-all disabled:opacity-20 cursor-pointer"
                onClick={() => dispatch(decrement(id))}
                disabled={count === 1}
              >
                <Minus size={12} strokeWidth={3} />
              </button>
              
              <span className="px-3 text-sm font-black text-slate-900">{count}</span>
              
              <button
                className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-white hover:text-rose-800 transition-all cursor-pointer"
                onClick={() => dispatch(increment(id))}
              >
                <Plus size={12} strokeWidth={3} />
              </button>
            </div>

            {/* ADD TO CART BUTTON - Side Position with Shimmer */}
            <button 
              onClick={handleAddCart}
              className={`${styles.shimmerBtn} flex-1 bg-slate-900 text-white h-11 rounded-2xl flex items-center justify-center gap-2 hover:bg-rose-800 transition-all duration-300 shadow-lg active:scale-95 cursor-pointer`}
            >
              <div className={styles.shimmerEffect} />
              <div className="relative z-10 flex items-center justify-center gap-2">
                <ShoppingBag size={14} className={styles.iconTilt} />
                <span className="text-[10px] font-black uppercase tracking-widest">Add</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}