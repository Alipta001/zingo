// "use client";
// import "../../../styles/resturantPage/menuItemCard/menuItemCard.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from "react-redux";
// import { BaseURL } from "@/app/api/axios/axios";
// import { decrement, increment } from "@/redux/slice/showSlice";
// import { addToCart } from "@/redux/slice/cartSlice";

// export default function MenuItemCard({ item, userId }) {
//   const dispatch = useDispatch();

//   const count = useSelector(
//     (state) => state.showDataOnScreen.addToCart.quantities[item.id] || 1
//   );

//   const handleAddCart = () => {
//     const payload = {
//       user_id: userId,
//       menu_item_id: item.id,
//       quantity: count
//     };
//     dispatch(addToCart(payload));
//   };

//   return (
//     <div className="menu-thumb">
//       <div className="menu-image-container">
//         <img src={`${BaseURL}${item.imageURL}`} alt={item.title} />
//         <div className="price-badge">₹{item.price || '199'}</div>
//       </div>
      
//       <div className="menu-info">
//         <h4 className="item-title">{item.title}</h4>
//         <span className="item-category">{item.name}</span>
//         <p className="item-desc">{item.description}</p>
//       </div>

//       <div className="menu-actions">
//         <div className="qty-selector">
//           <button
//             className="qty-btn"
//             onClick={() => dispatch(decrement(item.id))}
//             disabled={count === 1}
//           >
//             −
//           </button>
//           <span className="qty-value">{count}</span>
//           <button
//             className="qty-btn"
//             onClick={() => dispatch(increment(item.id))}
//           >
//             +
//           </button>
//         </div>

//         <button className="add-cart-btn" onClick={handleAddCart}>
//           <FontAwesomeIcon icon={faCartPlus} /> 
//           <span>Add</span>
//         </button>
//       </div>
//     </div>
//   );
// }


// "use client";
// import React from 'react';
// import styles from "../../../styles/resturantPage/menuItemCard/menuItemCard.module.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faMinus, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from "react-redux";
// import { BaseURL } from "@/app/api/axios/axios";
// import { decrement, increment } from "@/redux/slice/showSlice";
// import { addToCart } from "@/redux/slice/cartSlice";

// export default function MenuItemCard({ item, userId }) {
//   const dispatch = useDispatch();

//   const count = useSelector(
//     (state) => state.showDataOnScreen.addToCart.quantities[item.id] || 1,
//   );

//   const handleAddCart = () => {
//     const payload = {
//       user_id: userId,
//       menu_item_id: item.id,
//       quantity: count,
//     };
//     dispatch(addToCart(payload));
//   };

//   return (
//     <div className={`${styles.royalCard} group relative bg-white p-3 rounded-[32px] w-full max-w-[280px] flex flex-col transition-all duration-500 hover:-translate-y-2`}>
      
//       {/* IMAGE CONTAINER */}
//       <div className="relative aspect-square w-full rounded-[24px] overflow-hidden mb-4">
//         <img 
//           src={`${BaseURL}${item.imageURL}`} 
//           alt={item.title} 
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//         />
        
//         {/* PRICE BADGE: Premium Glassmorphism */}
//         <div className={`${styles.glassBadge} absolute top-3 right-3 px-4 py-1.5 rounded-full text-white font-black text-sm z-10`}>
//           ₹{item.price || '199'}
//         </div>

//         {/* TOP OVERLAY ON HOVER */}
//         <div className="absolute inset-0 bg-gradient-to-t from-rose-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//       </div>

//       {/* ITEM INFO */}
//       <div className="flex-grow px-2">
//         <div className="flex items-center gap-2 mb-1">
//             <span className="text-[9px] font-black uppercase tracking-[0.2em] text-rose-800 bg-rose-50 px-2 py-0.5 rounded">
//                 {item.name || "Main Course"}
//             </span>
//         </div>
        
//         <h4 className="text-xl font-[950] uppercase tracking-tighter text-slate-900 leading-tight mb-2 truncate">
//           {item.title}
//         </h4>
        
//         <p className="text-[12px] text-slate-500 leading-relaxed font-medium line-clamp-2 mb-4">
//           {item.description}
//         </p>
//       </div>

//       {/* ACTIONS: Fixed at bottom */}
//       <div className="mt-auto pt-4 flex items-center gap-3">
        
//         {/* QTY SELECTOR */}
//         <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200/50">
//           <button
//             className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-white hover:text-rose-800 cursor-pointer transition-all disabled:opacity-20"
//             onClick={() => dispatch(decrement(item.id))}
//             disabled={count === 1}
//           >
//             <FontAwesomeIcon icon={faMinus} size="xs" />
//           </button>
          
//           <span className="px-3 text-sm font-black text-slate-900">{count}</span>
          
//           <button
//             className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-white hover:text-rose-800 cursor-pointer transition-all"
//             onClick={() => dispatch(increment(item.id))}
//           >
//             <FontAwesomeIcon icon={faPlus} size="xs" />
//           </button>
//         </div>

//         {/* ADD TO CART BUTTON */}
//         <button 
//           className="flex-1 bg-slate-900 text-white h-11 rounded-2xl flex items-center justify-center gap-2 hover:bg-rose-800 cursor-pointer transition-all duration-300 shadow-lg shadow-slate-900/10 active:scale-95" 
//           onClick={handleAddCart}
//         >
//           <FontAwesomeIcon icon={faShoppingBag} className="text-[14px]" />
//           <span className="text-[11px] font-black uppercase tracking-widest">Add</span>
//         </button>
//       </div>

//       {/* SUBTLE BORDER GLOW */}
//       <div className="absolute inset-0 border border-rose-100/50 rounded-[32px] pointer-events-none group-hover:border-rose-200 transition-colors" />
//     </div>
//   );
// }

"use client";
import React from 'react';
import styles from "../../../styles/resturantPage/menuItemCard/menuItemCard.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { BaseURL } from "@/app/api/axios/axios";
import { toast } from "sonner";
import { decrement, increment } from "@/redux/slice/showSlice";
import { addToCart } from "@/redux/slice/cartSlice";

export default function MenuItemCard({ item, userId }) {
  const dispatch = useDispatch();

  // Access quantity from Redux
  const count = useSelector(
    (state) => state.showDataOnScreen?.addToCart?.quantities[item.id] || 1,
  );

  // Logic to handle the first image from the array provided in API
  const itemImage = item.images && item.images.length > 0 
    ? `${BaseURL}${item.images[0].image}` 
    : "/fallback-image.png";

  const handleAddCart = () => {
    const payload = {
      user_id: userId,
      menu_item_id: item.id,
      quantity: count,
    };
    dispatch(addToCart(payload));
    toast.success(`Added ${item.name} (qty: ${count}) to cart!`);
  };

  return (
    <div className={`${styles.royalCard} group relative bg-white p-3 rounded-[32px] w-full max-w-[280px] flex flex-col transition-all duration-500 hover:-translate-y-2`}>
      
      {/* IMAGE CONTAINER */}
      <div className="relative aspect-square w-full rounded-[24px] overflow-hidden mb-4">
        <img 
          src={itemImage} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* PRICE BADGE */}
        <div className={`${styles.glassBadge} absolute top-3 right-3 px-4 py-1.5 rounded-full text-white font-black text-sm z-10`}>
          ₹{item.discounted_price || item.price}
        </div>

        {item.offer_text && (
            <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-md z-10">
                {item.offer_text}
            </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-rose-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* ITEM INFO */}
      <div className="flex-grow px-2">
        <div className="flex items-center gap-2 mb-1">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-rose-800 bg-rose-50 px-2 py-0.5 rounded">
                {item.available ? "Available" : "Out of Stock"}
            </span>
        </div>
        
        {/* Changed item.title to item.name */}
        <h4 className="text-xl font-[950] uppercase tracking-tighter text-slate-900 leading-tight mb-2 truncate">
          {item.name} 
        </h4>
        
        <p className="text-[12px] text-slate-500 leading-relaxed font-medium line-clamp-2 mb-4">
          {item.description}
        </p>
      </div>

      {/* ACTIONS */}
      <div className="mt-auto pt-4 flex items-center gap-3">
        <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200/50">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-white hover:text-rose-800 cursor-pointer transition-all disabled:opacity-20"
            onClick={() => dispatch(decrement(item.id))}
            disabled={count <= 1}
          >
            <FontAwesomeIcon icon={faMinus} size="xs" />
          </button>
          
          <span className="px-3 text-sm font-black text-slate-900">{count}</span>
          
          <button
            className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-white hover:text-rose-800 cursor-pointer transition-all"
            onClick={() => dispatch(increment(item.id))}
          >
            <FontAwesomeIcon icon={faPlus} size="xs" />
          </button>
        </div>

        <button 
          className="flex-1 bg-slate-900 text-white h-11 rounded-2xl flex items-center justify-center gap-2 hover:bg-rose-800 cursor-pointer transition-all duration-300 shadow-lg shadow-slate-900/10 active:scale-95" 
          onClick={handleAddCart}
        >
          <FontAwesomeIcon icon={faShoppingBag} className="text-[14px]" />
          <span className="text-[11px] font-black uppercase tracking-widest">Add</span>
        </button>
      </div>

      <div className="absolute inset-0 border border-rose-100/50 rounded-[32px] pointer-events-none group-hover:border-rose-200 transition-colors" />
    </div>
  );
}