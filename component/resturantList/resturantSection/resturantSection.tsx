"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { ChevronDown, Sparkles, X, SearchX } from "lucide-react";

import FilterSection from "../filterSideBar/filterSideBar";
import RestaurantCard from "../resturantCard/resturantCard";
import { resturantList } from "@/redux/slice/resturantSlice";
import { increment } from "@/redux/slice/showSlice";
import { removeCuisine, clearAllFilters } from "@/redux/slice/filterSlice";
import styles from "@/styles/resturantList/resturantSection/resturantSection.module.css";

export default function RestaurantSection() {
  const dispatch = useDispatch();

  // --- REDUX SELECTORS ---
  const showData =
    useSelector((state: any) => state.showDataOnScreen.list.count2) || 9;
  const { data: restaurants = [] } = useSelector(
    (state: any) => state.resturants.list,
  );

  // Assuming your Redux state has both of these:
  const selectedCuisines =
    useSelector((state: any) => state.filters?.selectedCuisines) || [];
  const selectedRating =
    useSelector((state: any) => state.filters?.selectedRating) || null;

  useEffect(() => {
    dispatch(resturantList());
  }, [dispatch]);

  const filteredRestaurants = restaurants.filter((r: any) => {
    const matchesCuisine =
      selectedCuisines.length === 0 ||
      selectedCuisines.some((c: string) =>
        r.cuisine_type?.toLowerCase().includes(c.toLowerCase()),
      );

    const matchesRating =
      !selectedRating || Number(r.rating) >= Number(selectedRating);
    return matchesCuisine && matchesRating;
  });
  return (
    <section className={`${styles.editorialBg} min-h-screen`}>
      {/* Texture Overlay for Premium Feel */}
      <div className={styles.textureOverlay} />

      <header className="pt-24 pb-12 text-center max-w-4xl mx-auto px-6 relative z-10">
        <div className="inline-flex items-center gap-2 border border-rose-100 bg-rose-50/50 backdrop-blur-sm text-rose-800 px-5 py-2 rounded-full mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">
            The Elite Collection
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-[950] text-slate-900 tracking-tighter mb-6 leading-[0.85] uppercase">
          Curated{" "}
          <span className="text-rose-800 italic font-serif lowercase tracking-normal">
            Excellence
          </span>
        </h1>
        <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.5em] mt-4">
          Est. 2026 — Fine Gastronomy
        </p>
      </header>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <aside className="w-full lg:w-[300px] shrink-0">
            <FilterSection />
          </aside>

          <main className="flex-1 pb-32">
            {/* Active Filter Tags */}
            {selectedCuisines.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 mb-10 p-4 bg-white/40 backdrop-blur-md rounded-2xl border border-rose-100/50">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-2">
                  Filters Applied:
                </span>
                {selectedCuisines.map((tag: string) => (
                  <button
                    key={tag}
                    onClick={() => dispatch(removeCuisine(tag))}
                    className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-full text-[10px] font-black tracking-widest transition-all hover:bg-rose-800"
                  >
                    {tag.toUpperCase()}
                    <X className="w-3 h-3 text-rose-300" />
                  </button>
                ))}
                <button
                  onClick={() => dispatch(clearAllFilters())}
                  className="text-[10px] font-black text-rose-800 uppercase ml-2 border-b-2 border-rose-800/20 hover:border-rose-800 transition-all"
                >
                  Clear All
                </button>
              </div>
            )}

            <div className="mb-12 flex items-center justify-between border-b border-slate-200/60 pb-8">
              <h2 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.3em]">
                {filteredRestaurants.length}{" "}
                <span className="text-slate-400">Venues curated</span>
              </h2>
            </div>

            {filteredRestaurants.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-20">
                  {filteredRestaurants
                    .slice(0, showData)
                    .map((item: any, index: number) => (
                      <div
                        key={item.id}
                        className={styles.cardFadeIn}
                        style={{ animationDelay: `${index * 0.08}s` }}
                      >
                        <Link href={`/pages/resturantDetail/${item.id}`}>
                          <RestaurantCard item={item} />
                        </Link>
                      </div>
                    ))}
                </div>

                {filteredRestaurants.length > showData && (
                  <div className="mt-32 flex justify-center">
                    <button
                      onClick={() => dispatch(increment(9))}
                      className="group flex flex-col items-center gap-6"
                    >
                      <div className="w-20 h-20 rounded-full border border-rose-200 flex items-center justify-center group-hover:bg-rose-800 group-hover:border-rose-800 transition-all duration-700 shadow-xl shadow-rose-100 group-hover:shadow-rose-900/20">
                        <ChevronDown className="w-8 h-8 text-rose-800 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400 group-hover:text-rose-800 transition-colors">
                        Load Collection
                      </span>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-32 text-center bg-white/50 backdrop-blur-lg rounded-[40px] border border-white">
                <div className="bg-rose-50 p-8 rounded-full mb-8">
                  <SearchX className="w-16 h-16 text-rose-200" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
                  No venues match your taste
                </h3>
                <p className="text-slate-500 max-w-sm mb-10 font-medium">
                  Our elite collection is currently filtered. Try expanding your
                  horizons by resetting filters.
                </p>
                <button
                  onClick={() => dispatch(clearAllFilters())}
                  className="px-12 py-5 bg-rose-800 text-white text-[11px] font-black uppercase tracking-[0.3em] hover:bg-slate-900 transition-all duration-500 shadow-2xl shadow-rose-900/20"
                >
                  Reset Curation
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}
