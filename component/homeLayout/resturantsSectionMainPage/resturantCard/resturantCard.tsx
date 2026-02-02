// "use client";
// import React from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { BaseURL } from "@/app/api/axios/axios";
// import { Star, Clock, MapPin, Heart, ArrowRight } from "lucide-react";
// import styles from "../../../../styles/homeLayoutCss/resturantsSection/resturantsSection.module.css";

// export default function RestaurantCard({
//   res,
//   index,
// }: {
//   res: any;
//   index: number;
// }) {
//   const router = useRouter();
//   const time = Math.floor(Math.random() * 30) + 20;
//   return (
//     <article
//       onClick={() => router.push(`/pages/resturantDetail/${res.id}`)}
//       className={`${styles.premiumCard} group relative cursor-pointer overflow-hidden bg-white rounded-[40px] p-3 transition-all duration-500 flex flex-col h-full`}
//       style={{ animationDelay: `${index * 0.1}s` }}
//       itemScope
//       itemType="https://schema.org/Restaurant"
//     >
//       {/* 1. IMAGE SECTION */}
//       <div className="relative h-60 sm:h-72 w-full rounded-[32px] overflow-hidden flex-shrink-0 bg-slate-100">
//         <Image
//           src={`${BaseURL}${res.images[0]}`}
//           alt={res.name}
//           fill
//           unoptimized
//           className="object-cover transition-transform duration-1000 scale-105 group-hover:scale-110"
//           loading="lazy"
//         />

//         {/* Floating Premium Badges */}
//         <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
//           <div className="bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-2xl shadow-sm border border-white/20">
//             <span className="text-[#e23744] font-black text-[10px] sm:text-[11px] uppercase tracking-[0.1em]">
//               30% OFF
//             </span>
//           </div>
//         </div>

//         {/* Action Button Overlay */}
//         <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
//           <div className="bg-white text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2">
//             Order Now
//             <svg
//               width="14"
//               height="14"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="3"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <line x1="5" y1="12" x2="19" y2="12"></line>
//               <polyline points="12 5 19 12 12 19"></polyline>
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* 2. CONTENT SECTION */}
//       <div className="px-3 sm:px-5 pt-4 sm:pt-6 pb-3 sm:pb-4 flex flex-col flex-grow">
//         <div className="flex justify-between items-start gap-2 mb-3">
//           <h3
//             className="text-lg sm:text-2xl font-black text-[#1a1a1a] tracking-tight group-hover:text-[#e23744] transition-colors duration-300 line-clamp-1 flex-1"
//             itemProp="name"
//           >
//             {res.name}
//           </h3>
//           <div className="flex items-center gap-1.5 bg-[#f3fbf5] text-[#27ad5f] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-[#e8f5ed] flex-shrink-0">
//             {/* Star SVG */}
//             <svg
//               width="14"
//               height="14"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
//             </svg>
//             <span
//               className="font-bold text-xs sm:text-sm leading-none"
//               itemProp="ratingValue"
//             >
//               {res.rating}
//             </span>
//           </div>
//         </div>

//         {/* Stacked Cuisine and Address (Darker Text) */}
//         <div className="mb-6">
//           <p
//             className="text-slate-700 font-extrabold text-[11px] sm:text-xs uppercase tracking-wider mb-1"
//             itemProp="servesCuisine"
//           >
//             {res.cuisine_type}
//           </p>
//           <p
//             className="text-slate-500 font-medium text-xs sm:text-[13px] line-clamp-1"
//             itemProp="address"
//           >
//             {res.address}
//           </p>
//         </div>

//         {/* Feature Row - Pushed to Bottom */}
//         <footer className="flex items-center justify-between pt-3 sm:pt-5 border-t border-gray-100 mt-auto">
//           <div className="flex items-center gap-1.5 sm:gap-2.5">
//             <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-red-50 transition-colors flex-shrink-0">
//               {/* Clock SVG */}
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="#e23744"
//                 strokeWidth="2.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <circle cx="12" cy="12" r="10"></circle>
//                 <polyline points="12 6 12 12 16 14"></polyline>
//               </svg>
//             </div>
//             <span className="text-[#1a1a1a] font-bold text-[10px] sm:text-xs uppercase tracking-wider">
//               {time} MIN
//             </span>
//           </div>

//           <div className="flex items-center gap-1.5 sm:gap-2.5">
//             <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-red-50 transition-colors flex-shrink-0">
//               {/* MapPin SVG */}
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="#e23744"
//                 strokeWidth="2.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//                 <circle cx="12" cy="10" r="3"></circle>
//               </svg>
//             </div>
//             <span className="text-[#1a1a1a] font-bold text-[10px] sm:text-xs uppercase tracking-wider">
//               2.4 KM
//             </span>
//           </div>
//         </footer>
//       </div>
//     </article>
//   );
// }

"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BaseURL } from "@/app/api/axios/axios";
import { Clock, MapPin, Star } from "lucide-react";
import styles from "../../../../styles/homeLayoutCss/resturantsSection/resturantsSection.module.css";

export default function RestaurantCard({
  res,
  index,
}: {
  res: any;
  index: number;
}) {
  const router = useRouter();
  const time = Math.floor(Math.random() * 30) + 20;

  // ---------- Get first image ----------
  const coverImage = res.images && res.images.length > 0
    ? `${BaseURL}${res.images[0].image}`
    : "/fallback-restaurant.jpg"; // fallback if no image

  return (
    <article
      onClick={() => router.push(`/pages/resturantDetail/${res.id}`)}
      className={`${styles.premiumCard} group relative cursor-pointer overflow-hidden bg-white rounded-[40px] p-3 transition-all duration-500 flex flex-col h-full`}
      style={{ animationDelay: `${index * 0.1}s` }}
      itemScope
      itemType="https://schema.org/Restaurant"
    >
      {/* IMAGE SECTION */}
      <div className="relative h-60 sm:h-72 w-full rounded-[32px] overflow-hidden flex-shrink-0 bg-slate-100">
        <Image
          src={coverImage}
          alt={res.name}
          fill
          unoptimized
          className="object-cover transition-transform duration-1000 scale-105 group-hover:scale-110"
          loading="lazy"
        />

        {/* Discount Badge */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          <div className="bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-2xl shadow-sm border border-white/20">
            <span className="text-[#e23744] font-black text-[10px] sm:text-[11px] uppercase tracking-[0.1em]">
              30% OFF
            </span>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
          <div className="bg-white text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            Order Now →
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="px-3 sm:px-5 pt-4 sm:pt-6 pb-3 sm:pb-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-2 mb-3">
          <h3 className="text-lg sm:text-2xl font-black text-[#1a1a1a] tracking-tight group-hover:text-[#e23744] transition-colors duration-300 line-clamp-1 flex-1">
            {res.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 bg-[#f3fbf5] text-[#27ad5f] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-[#e8f5ed] flex-shrink-0">
            <Star size={14} />
            <span className="font-bold text-xs sm:text-sm leading-none">{res.rating}</span>
          </div>
        </div>

        {/* Cuisine + Address */}
        <div className="mb-6">
          <p className="text-slate-700 font-extrabold text-[11px] sm:text-xs uppercase tracking-wider mb-1">
            {res.cuisine_type}
          </p>
          <p className="text-slate-500 font-medium text-xs sm:text-[13px] line-clamp-1">
            {res.address}
          </p>
        </div>

        {/* FOOTER */}
        <footer className="flex items-center justify-between pt-3 sm:pt-5 border-t border-gray-100 mt-auto">
          {/* Time */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-red-50 transition-colors flex-shrink-0">
              <Clock size={16} color="#e23744" />
            </div>
            <span className="text-[#1a1a1a] font-bold text-[10px] sm:text-xs uppercase tracking-wider">
              {time} MIN
            </span>
          </div>

          {/* Distance */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-red-50 transition-colors flex-shrink-0">
              <MapPin size={16} color="#e23744" />
            </div>
            <span className="text-[#1a1a1a] font-bold text-[10px] sm:text-xs uppercase tracking-wider">
              2.4 KM
            </span>
          </div>
        </footer>
      </div>
    </article>
  );
}
