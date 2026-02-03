// import CartItem from './CartItem';
// import OrderSummary from './OrderSummary';
// import RecommendationCard from './RecommendationCard';

// export default function CartPage() {
//   return (
//     <div className="min-h-screen bg-[#FDFDFF] py-12 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <header className="mb-12">
//           <h1 className="text-4xl md:text-5xl font-[1000] text-slate-900 tracking-tight">
//             Items in my <span className="text-rose-600 underline decoration-rose-200 underline-offset-8">cart.</span>
//           </h1>
//         </header>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
//           {/* Main Cart Area */}
//           <div className="lg:col-span-8">
//             <div className="mb-8">
//               {/* Labels - Hidden on Mobile */}
//               <div className="hidden md:grid grid-cols-12 px-6 mb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
//                 <div className="col-span-6">Item</div>
//                 <div className="col-span-3 text-center">Quantity</div>
//                 <div className="col-span-2 text-right">Total</div>
//                 <div className="col-span-1"></div>
//               </div>
              
//               {/* Loop Items */}
//               <CartItem item={{ name: "Pepperoni Pizza (Large)", unitPrice: 220, quantity: 2, finalPrice: 440, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500" }} />
//               <CartItem item={{ name: "Double Burger Combo", unitPrice: 160, quantity: 3, finalPrice: 480, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500" }} />
//             </div>

//             <button className="w-full py-5 bg-white border-2 border-dashed border-slate-200 text-slate-400 rounded-[28px] font-black text-xs uppercase tracking-widest hover:border-rose-300 hover:text-rose-500 transition-all">
//               + Add more items to your meal
//             </button>
//           </div>

//           {/* Sticky Sidebar */}
//           <div className="lg:col-span-4">
//             <OrderSummary />
//           </div>
//         </div>

//         {/* Recommendations Section */}
//         <section className="mt-24">
//           <div className="flex items-center justify-between mb-10">
//             <h3 className="text-2xl font-[1000] text-slate-900 tracking-tight">You might <span className="text-rose-600 italic">also like.</span></h3>
//           </div>
          
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
//             <RecommendationCard item={{ name: "Caesar Salad", price: 120, image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500" }} />
//             <RecommendationCard item={{ name: "Beef Tacos", price: 200, image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=500" }} />
//             <RecommendationCard item={{ name: "Ramen Bowl", price: 155, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500" }} />
//             <RecommendationCard item={{ name: "Tiramisu", price: 80, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500" }} />
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// }


// "use client";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCart, clearCartApi } from "@/redux/slice/cartSlice";
// import CartItem from "./CartItem"; // Your CartItem component
// import OrderSummary from "./OrderSummary"; // Your OrderSummary component
// import { ShoppingBag, Loader2 } from "lucide-react";
// import Link from "next/link";

// export default function CartPage() {
//   const dispatch = useDispatch<any>();
//   const { data: cartItems, loading, total } = useSelector((state: any) => state.cart);

//   useEffect(() => {
//     // Force a fresh fetch when the user visits the cart page
//     dispatch(fetchCart());
//   }, [dispatch]);

//   if (loading && cartItems.length === 0) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
//         <Loader2 className="w-10 h-10 animate-spin text-rose-600 mb-4" />
//         <p className="font-black uppercase tracking-widest text-slate-400">Loading your basket...</p>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#FDFDFF] py-16 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-[1000] text-slate-900 mb-12 tracking-tighter">
//           My <span className="text-rose-600">Cart.</span>
//         </h1>

//         {cartItems.length > 0 ? (
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
//             {/* List of Items */}
//             <div className="lg:col-span-8 space-y-4">
//               {cartItems.map((item: any) => (
//                 <CartItem key={item.menu_item_id || item.id} item={item} />
//               ))}
              
//               <div className="flex justify-end pt-4">
//                 <button 
//                   onClick={() => dispatch(clearCartApi())}
//                   className="text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-rose-600 transition-colors"
//                 >
//                   Clear All Items
//                 </button>
//               </div>
//             </div>

//             {/* Sidebar Summary */}
//             <div className="lg:col-span-4 sticky top-10">
//               <OrderSummary total={total} />
//             </div>
//           </div>
//         ) : (
//           /* Empty State UI */
//           <div className="bg-white rounded-[48px] p-20 text-center border-2 border-dashed border-slate-100 shadow-sm">
//             <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
//               <ShoppingBag size={48} className="text-slate-200" />
//             </div>
//             <h2 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tighter">Your cart is empty</h2>
//             <p className="text-slate-400 font-medium mb-10 max-w-xs mx-auto">
//               Looks like you haven't added any items to your cart yet.
//             </p>
//             <Link 
//               href="/menu" 
//               className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-rose-600 transition-all shadow-xl shadow-slate-200"
//             >
//               Start Shopping
//             </Link>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, clearCartApi } from "@/redux/slice/cartSlice";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import { ShoppingBag, Loader2 } from "lucide-react";

export default function CartPage() {
  const dispatch = useDispatch<any>();
  const { data: cartItems, loading, total } = useSelector((state: any) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  // Loading state remains the same...

  return (
    <main className="min-h-screen bg-[#FDFDFF] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-[1000] text-slate-900 mb-12 tracking-tighter">
          My <span className="text-rose-600 underline decoration-rose-100 underline-offset-8">Cart.</span>
        </h1>

        {cartItems && cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-2">
              {cartItems.map((item: any) => (
                // Use item.id as the unique key from your API
                <CartItem key={item.id} item={item} />
              ))}
              
              <button 
                onClick={() => dispatch(clearCartApi())}
                className="mt-6 text-slate-400 font-bold text-xs uppercase hover:text-rose-600 transition-colors"
              >
                Clear all items
              </button>
            </div>

            <div className="lg:col-span-4">
              <OrderSummary total={total} />
            </div>
          </div>
        ) : (
          <div className="py-20 text-center bg-white rounded-[48px] border-2 border-dashed border-slate-100">
             <ShoppingBag className="mx-auto text-slate-200 mb-4" size={50} />
             <h2 className="text-xl font-black text-slate-900 uppercase">Your basket is empty</h2>
          </div>
        )}
      </div>
    </main>
  );
}