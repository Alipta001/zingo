// "use client";

// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useRef } from "react";
// import { resturantList } from "@/redux/slice/resturantSlice";
// import { BaseURL } from "@/app/api/axios/axios";
// import Image from "next/image";
// import styles from "../../../styles/resturantPage/similarResturantCard/similarResturantCard.module.css";

// export default function SimilarResturantCard() {
//   const dispatch = useDispatch();
//   const carouselRef = useRef(null);

//   const {
//     data: resturants,
//     loading,
//     error,
//   } = useSelector((state) => state.resturants.list);

//   useEffect(() => {
//     dispatch(resturantList());
//   }, [dispatch]);

//   if (loading)
//     return (
//       <div className="mt-[70px] h-64 w-full bg-slate-100 animate-pulse rounded-2xl" />
//     );
//   if (error)
//     return <p className="mt-[70px] text-red-500 text-center">{error}</p>;

//   const scroll = (direction) => {
//     if (carouselRef.current) {
//       const scrollAmount = direction === "left" ? -340 : 340;
//       carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       className="mt-[70px] relative w-full"
//       aria-labelledby="similar-res-heading"
//     >
//       {/* HEADER SECTION */}
//       <div className="flex items-center justify-between mb-7 px-1">
//         <h2
//           id="similar-res-heading"
//           className="text-[24px] font-extrabold text-slate-900 tracking-tight"
//         >
//           Similar Restaurants
//         </h2>

//         {/* DESKTOP CONTROLS */}
//         <div className="hidden lg:flex gap-3">
//           <button
//             onClick={() => scroll("left")}
//             className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-950 to-slate-800 text-white text-2xl pb-1 shadow-lg hover:scale-110 active:scale-95 transition-transform"
//             aria-label="Scroll left"
//           >
//             ‹
//           </button>
//           <button
//             onClick={() => scroll("right")}
//             className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-950 to-slate-800 text-white text-2xl pb-1 shadow-lg hover:scale-110 active:scale-95 transition-transform"
//             aria-label="Scroll right"
//           >
//             ›
//           </button>
//         </div>
//       </div>

//       {/* CAROUSEL CONTAINER */}
//       <div
//         ref={carouselRef}
//         /* pt-5 and -mt-5 create the 'Safe Zone' so cards aren't cut off on hover */
//         className={`${styles.carouselContainer} flex gap-6 overflow-x-auto pb-10 pt-5 -mt-5 px-1 scroll-smooth`}
//       >
//         {resturants?.slice(0, 8).map((res, i) => (
//           <article
//             key={res.id || i}
//             className={`${styles.restaurantCard} group min-w-[300px] sm:min-w-[260px] bg-white rounded-[20px] overflow-hidden cursor-pointer shadow-[0_10px_28px_rgba(0,0,0,0.08)]`}
//           >
//             {/* IMAGE WRAPPER */}
//             <div className="relative overflow-hidden h-[190px] sm:h-[165px]">
//               <Image
//                 src={`${BaseURL}${res.image}`}
//                 alt={res.name}
//                 unoptimized
//                 fill
//                 sizes="(max-width: 640px) 300px, 260px"
//                 className="object-cover transition-transform duration-700 group-hover:scale-110"
//                 priority={i < 4} // Loads first 4 images faster for better LCP
//               />

//               <span className="absolute top-3 left-3 z-10 bg-gradient-to-br from-orange-500 to-pink-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md">
//                 {res.offer ? `${res.offer.discount_percent}% OFF` : "20% OFF"}
//               </span>
//             </div>

//             {/* BODY CONTENT */}
//             <div className="px-5 pt-4 pb-5">
//               <h3 className="text-[17px] font-extrabold text-slate-950 mb-1 truncate">
//                 {res.name}
//               </h3>
//               <p className="text-[13px] text-slate-500 mb-4">{res.cuisine}</p>

//               <div className="flex justify-between items-center">
//                 <span className="bg-gradient-to-br from-green-600 to-green-500 text-white px-3 py-1 text-[13px] font-bold rounded-lg shadow-sm">
//                   ★ {res.rating}
//                 </span>

//                 <span className="text-[13px] font-semibold text-slate-600">
//                   {res.time}
//                 </span>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }



"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { resturantList } from "@/redux/slice/resturantSlice";
import { BaseURL } from "@/app/api/axios/axios";
import { Star } from "lucide-react";
import styles from "../../../styles/resturantPage/similarResturantCard/similarResturantCard.module.css";

export default function SimilarResturantCard() {
  const dispatch = useDispatch();
  const carouselRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const { data: resturants, loading, error } = useSelector(
    (state: any) => state.resturants.list
  );

  useEffect(() => {
    dispatch(resturantList());
  }, [dispatch]);

  if (loading)
    return (
      <div className="mt-[70px] h-64 w-full bg-slate-100 animate-pulse rounded-2xl" />
    );
  if (error)
    return <p className="mt-[70px] text-red-500 text-center">{error}</p>;

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      className="mt-[70px] relative w-full"
      aria-labelledby="similar-res-heading"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-7 px-1">
        <h2
          id="similar-res-heading"
          className="text-[24px] font-extrabold text-slate-900 tracking-tight"
        >
          Similar Restaurants
        </h2>

        {/* DESKTOP CONTROLS */}
        <div className="hidden lg:flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-950 to-slate-800 text-white text-2xl pb-1 shadow-lg hover:scale-110 active:scale-95 transition-transform"
            aria-label="Scroll left"
          >
            ‹
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-950 to-slate-800 text-white text-2xl pb-1 shadow-lg hover:scale-110 active:scale-95 transition-transform"
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
      </div>

      {/* CAROUSEL */}
      <div
        ref={carouselRef}
        className={`flex gap-6 overflow-x-auto pb-10 pt-5 -mt-5 px-1 scroll-smooth`}
      >
        {resturants?.slice(0, 8).map((res: any, i: number) => {
          // Get first image dynamically
          const firstImage =
            res.images && res.images.length > 0
              ? `${BaseURL}${res.images[0].image}`
              : "/fallback-restaurant.jpg";

          return (
            <article
              key={res.id || i}
              className="group min-w-[300px] sm:min-w-[260px] bg-white rounded-[20px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              onClick={() => router.push(`/pages/resturantDetail/${res.id}`)}
            >
              {/* IMAGE WRAPPER */}
              <div className="relative overflow-hidden h-[190px] sm:h-[165px]">
                <img
                  src={firstImage}
                  alt={res.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading={i < 4 ? "eager" : "lazy"}
                />

                <span className="absolute top-3 left-3 z-10 bg-gradient-to-br from-orange-500 to-pink-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md">
                  {res.offer?.discount_percent
                    ? `${res.offer.discount_percent}% OFF`
                    : "20% OFF"}
                </span>
              </div>

              {/* BODY CONTENT */}
              <div className="px-5 pt-4 pb-5">
                <h3 className="text-[17px] font-extrabold text-slate-950 mb-1 truncate">
                  {res.name}
                </h3>
                <p className="text-[13px] text-slate-500 mb-4">{res.cuisine}</p>

                <div className="flex justify-between items-center">
                  <span className="bg-gradient-to-br from-green-600 to-green-500 text-white px-3 py-1 text-[13px] font-bold rounded-lg shadow-sm flex items-center gap-1">
                    <Star size={14} /> {res.rating}
                  </span>

                  <span className="text-[13px] font-semibold text-slate-600">
                    {res.time} MIN
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
