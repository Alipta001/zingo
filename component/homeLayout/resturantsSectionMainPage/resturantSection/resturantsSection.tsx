"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { resturantList } from "@/redux/slice/resturantSlice";
import { increment } from "@/redux/slice/showSlice";
import RestaurantCard from "../resturantCard/resturantCard";
import styles from "../../../../styles/homeLayoutCss/resturantsSection/resturantsSection.module.css";

export default function ResturantsSection() {
  const dispatch = useDispatch();
  const showData = useSelector(
    (state: any) => state.showDataOnScreen.list.count,
  );
  const { data: resturants, loading } = useSelector(
    (state: any) => state.resturants.list,
  );

  useEffect(() => {
    dispatch(resturantList());
  }, [dispatch]);
console.log(resturants);
  if (loading)
    return (
      <div className="py-20 text-center font-bold text-gray-400 animate-pulse">
        Loading delicious options...
      </div>
    );

  return (
    <section
      className="relative py-24 bg-[#fff8f8] 
  bg-[radial-gradient(circle_at_0%_0%,rgba(226,38,37,0.08)_0%,transparent_40%),radial-gradient(circle_at_100%_100%,rgba(159,18,57,0.06)_0%,transparent_40%),linear-gradient(180deg,#fffcfc_0%,#fff5f5_100%)] overflow-hidden"
    >
      {/* --- SEMICIRCLE SIDE PILLARS --- */}
      <div className={`${styles.sideDesignLeft} hidden 2xl:block`} />
      <div className={`${styles.sideDesignRight} hidden 2xl:block`} />

      {/* Subtle Background Decor */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-red-100/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100/40 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1320px] mx-auto px-5 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <h4 className="text-[#e23744] font-black uppercase tracking-[0.2em] text-[18px]">
              Top Rated
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight tracking-tighter">
              Featured <span className="text-[#e23744]">Restaurants</span>
            </h2>
          </div>
          <Link
            href="/pages/resturantList"
            className="group flex items-center gap-3 font-bold text-gray-900 transition-all"
          >
            <span className="text-base uppercase tracking-widest text-gray-400 group-hover:text-[#e23744]">
              Browse All
            </span>
            <span className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-[#e23744] group-hover:text-white transition-all duration-300">
              →
            </span>
          </Link>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {resturants?.slice(0, showData).map((res: any, index: number) => (
            <div
              key={res.id}
              className={styles.animateFadeUp}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <RestaurantCard res={res} index={index} />
            </div>
          ))}
        </div>

        {/* Premium Load More Button */}
        <div className="flex justify-center mt-24">
          <button
            onClick={() => dispatch(increment())}
            className="group relative px-12 py-5 bg-[#1a1a1a] text-white font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl cursor-pointer"
          >
            <span className="relative z-10 uppercase tracking-widest text-xs">
              Load More Restaurants
            </span>
            <div className="absolute inset-0 bg-[#e23744] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
