// "use client";

// import React, { use, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "next/navigation";
// import { SlidersHorizontal, Loader2, UtensilsCrossed, AlertCircle } from "lucide-react";

// // Components
// import { CategorySection } from "../categorySection/categorySection";
// import FilterMenu from "../filterMenu/filterMenu";
// import { MenuCard } from "../menuCard/menuCard";

// // Redux
// import { resturantWiseItem } from "@/redux/slice/menuSlice";
// import { fetchResturantById } from "@/redux/slice/resturantSlice";

// export default function MenuList() {
//   const dispatch = useDispatch();
//   const params = useParams();
//   const id = params?.id;

//   // Added fallback empty object {} to prevent "cannot destructure" errors
//   const { 
//     data: menu = [], 
//     loading = false, 
//     error = null 
//   } = useSelector((state: any) => state.menu || {});

//   const{
//     data:resturant,
//     loading:resturantLoading,
//     error:resturantError
//   }= useSelector((state)=>state.resturants.details||{});

//   useEffect(() => {
//     if (id) {
//       dispatch(resturantWiseItem(id) as any);
//       dispatch(fetchResturantById(id) as any);
//     }
//   }, [dispatch, id]);

//   return (
//     <div className="bg-[#FCF9F7] min-h-screen pb-24 font-sans">
//       {/* Top Section */}
//       <CategorySection />

//       <div className="max-w-[1400px] mx-auto px-6 mt-12">
//         {/* Header with Royal Theme Styling */}
//         <div className="flex items-end justify-between mb-12 border-b border-rose-100 pb-8">
//           <div>
//             <div className="flex items-center gap-2 mb-2">
//               <span className="w-6 h-[1px] bg-rose-800" />
//               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-800">
//                 Premium Selection
//               </span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-[950] text-slate-900 uppercase tracking-tighter">
//               {resturant?.name || "Restaurant"} <span className="text-rose-800 italic font-serif capitalize tracking-normal px-1">Favorites Menu</span>
//             </h2>
//             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-3">
//               Curated dining from the city's finest kitchens
//             </p>
//           </div>

//           {/* Mobile Filter Trigger */}
//           <button className="lg:hidden p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all active:scale-95">
//             <SlidersHorizontal size={20} className="text-rose-800" />
//           </button>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Sidebar - Desktop Only */}
//           <div className="hidden lg:block w-72 flex-shrink-0">
//             <FilterMenu />
//           </div>

//           {/* Listing Area */}
//           <div className="flex-grow">
            
//             {/* 1. LOADING STATE - Using your Rose theme */}
//             {loading && (
//               <div className="flex flex-col items-center justify-center py-32">
//                 <div className="relative">
//                   <Loader2 className="w-12 h-12 animate-spin text-rose-800 opacity-20" />
//                   <Loader2 className="w-12 h-12 animate-spin text-rose-800 absolute top-0 left-0 [animation-delay:-0.3s]" />
//                 </div>
//                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-rose-800 mt-6 animate-pulse">
//                   Unveiling the Menu
//                 </p>
//               </div>
//             )}

//             {/* 2. ERROR STATE */}
//             {!loading && error && (
//               <div className="flex flex-col items-center justify-center py-20 bg-rose-50/50 rounded-[40px] border border-rose-100 border-dashed">
//                 <AlertCircle className="w-10 h-10 text-rose-800 mb-4 opacity-50" />
//                 <p className="text-sm font-bold text-slate-900 uppercase tracking-widest">Unable to load delicacies</p>
//                 <p className="text-xs text-slate-400 mt-2">{error}</p>
//                 <button 
//                   onClick={() => id && dispatch(resturantWiseItem(id) as any)}
//                   className="mt-6 text-[10px] font-black uppercase tracking-widest text-rose-800 underline underline-offset-4"
//                 >
//                   Try Again
//                 </button>
//               </div>
//             )}

//             {/* 3. SUCCESS GRID */}
//             {!loading && !error && (
//               <>
//                 {menu.length > 0 ? (
//                   <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
//                     {menu.map((item: any) => (
//                       <MenuCard 
//                         key={item._id || item.id} 
//                         name={item.name} 
//                         items={item.category || item.description} 
//                         rating={item.rating || "4.5"} 
//                         time={item.deliveryTime || "25-30 mins"} 
//                         img={item.imageURL || "/image/pizza.png"} 
//                         price={item.price || "500"}
//                       />
//                     ))}
//                   </div>
//                 ) : (
//                   /* EMPTY STATE */
//                   <div className="flex flex-col items-center justify-center py-32 text-center">
//                     <UtensilsCrossed size={40} className="text-slate-200 mb-4" />
//                     <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
//                       No Items found in this category
//                     </p>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// } 


"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { Loader2, UtensilsCrossed, AlertCircle } from "lucide-react";

// Components
import { CategorySection } from "../categorySection/categorySection";
import FilterMenu from "../filterMenu/filterMenu";
import { MenuCard } from "../menuCard/menuCard";

// Redux
import { resturantWiseItem } from "@/redux/slice/menuSlice";
import { fetchResturantById } from "@/redux/slice/resturantSlice";

export default function MenuList() {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params?.id;

  const { 
    data: menu = [], 
    loading = false, 
    error = null 
  } = useSelector((state: any) => state.menu || {});

  const {
    data: resturant,
  } = useSelector((state: any) => state.resturants?.details || {});

  useEffect(() => {
    if (id) {
      const restaurantId = Array.isArray(id) ? id[0] : id;
      dispatch(resturantWiseItem(restaurantId) as any);
      dispatch(fetchResturantById(restaurantId) as any);
    }
  }, [dispatch, id]);

  return (
    <div className="bg-[#FCF9F7] min-h-screen pb-24 font-sans">
      <CategorySection />

      <div className="max-w-[1400px] mx-auto px-6 mt-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-rose-100 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-rose-800" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-800">
                Premium Selection
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-[950] text-slate-900 uppercase tracking-tighter">
              {resturant?.name || "Restaurant"} 
              <span className="text-rose-800 italic font-serif capitalize tracking-normal px-2">Favorites</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <FilterMenu />

          <div className="flex-grow">
            {loading && (
              <div className="flex flex-col items-center justify-center py-32">
                <Loader2 className="w-12 h-12 animate-spin text-rose-800" />
              </div>
            )}

            {!loading && error && (
              <div className="flex flex-col items-center justify-center py-20 bg-rose-50/50 rounded-[40px] border border-rose-100 border-dashed">
                <AlertCircle className="w-10 h-10 text-rose-800 mb-4 opacity-50" />
                <p className="text-sm font-bold text-slate-900 uppercase tracking-widest">Unable to load delicacies</p>
                <button 
                  onClick={() => {
                    if (id) {
                      const restaurantId = Array.isArray(id) ? id[0] : id;
                      dispatch(resturantWiseItem(restaurantId) as any);
                    }
                  }}
                  className="mt-6 text-[10px] font-black uppercase tracking-widest text-rose-800 underline underline-offset-4"
                >
                  Try Again
                </button>
              </div>
            )}

            {!loading && !error && (
              <>
                {menu.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {menu.map((item: any) => {
                      // EXTRACTION LOGIC: 
                      // Your JSON structure has an array called 'images'. 
                      // We take the 'image' property from the first object in that array.
                      const itemImage = item.images && item.images.length > 0 
                        ? item.images[0].image 
                        : null;

                      return (
                        <MenuCard 
                          key={item.id || item._id}
                          id={item.id || item._id}
                          name={item.name} 
                          img={itemImage} 
                          price={item.price}
                          items={item.category || item.description}
                          rating={item.rating || "4.5"}
                          offer={item.offer} // Passing offer to card
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-32 text-center">
                    <UtensilsCrossed size={40} className="text-slate-200 mb-4" />
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">No Items found</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}