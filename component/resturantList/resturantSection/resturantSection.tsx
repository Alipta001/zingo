//

"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { Sparkles, X, SearchX } from "lucide-react";
import FilterSection from "../filterSideBar/filterSideBar";
import RestaurantCard from "../resturantCard/resturantCard";
import { resturantList } from "@/redux/slice/resturantSlice";
import { removeCuisine, clearAllFilters } from "@/redux/slice/filterSlice";
import styles from "@/styles/resturantList/resturantSection/resturantSection.module.css";

const ITEMS_PER_PAGE = 9;

export default function RestaurantSection() {
  const dispatch = useDispatch();

  // --- PAGINATION STATE ---
  const [currentPage, setCurrentPage] = useState(0);
  const [stylesLoaded, setStylesLoaded] = useState(false);

  // --- REDUX DATA ---
  const { data: restaurants = [] } = useSelector(
    (state: any) => state.resturants.list,
  );

  const selectedCuisines =
    useSelector((state: any) => state.filters?.selectedCuisines) || [];
  const selectedRating =
    useSelector((state: any) => state.filters?.selectedRating) || null;

  // --- FETCH DATA ---
  useEffect(() => {
    dispatch(resturantList());
    console.log("Current Token in Cookie:", document.cookie.split('; ').find(row => row.startsWith('token=')));
  }, [dispatch]);

  // --- ENSURE STYLES ARE LOADED ---
  useEffect(() => {
    // Force styles to load by triggering a reflow
    const ensureStyles = () => {
      // Access document properties to trigger style recalculation
      const root = document.documentElement;
      const computed = window.getComputedStyle(root);
      
      // Force layout recalculation
      void root.offsetHeight;
      
      // Set flag that styles are ready
      setStylesLoaded(true);
    };

    // Run after a brief delay to ensure DOM is ready
    const timer = setTimeout(ensureStyles, 50);
    
    return () => clearTimeout(timer);
  }, []);

  // --- FILTER LOGIC ---
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

  // --- RESET PAGE WHEN FILTERS CHANGE ---
  useEffect(() => {
    setCurrentPage(0);
  }, [selectedCuisines, selectedRating]);

  // --- PAGINATION CALCULATIONS ---
  const pageCount = Math.ceil(filteredRestaurants.length / ITEMS_PER_PAGE);
  const offset = currentPage * ITEMS_PER_PAGE;

  const currentItems = filteredRestaurants.slice(
    offset,
    offset + ITEMS_PER_PAGE,
  );

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={`${styles.editorialBg} min-h-screen`}>
      <div className={styles.textureOverlay} />

      {/* HEADER */}
      <header className="pt-24 pb-12 text-center max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 border border-rose-100 bg-rose-50/50 text-rose-800 px-5 py-2 rounded-full mb-8">
          <Sparkles className="w-4 h-4" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">
            The Elite Collection
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-slate-900 uppercase">
          Curated{" "}
          <span className="text-rose-800 italic font-serif lowercase">
            Excellence
          </span>
        </h1>
      </header>

      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <aside className="w-full lg:w-[300px]">
            <FilterSection />
          </aside>

          <main className="flex-1 pb-32">
            {/* ACTIVE FILTER TAGS */}
            {selectedCuisines.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-10 p-4 bg-white/40 rounded-2xl">
                {selectedCuisines.map((tag: string) => (
                  <button
                    key={tag}
                    onClick={() => dispatch(removeCuisine(tag))}
                    className="flex items-center gap-2 px-5 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black"
                  >
                    {tag}
                    <X className="w-3 h-3 text-rose-300" />
                  </button>
                ))}
                <button
                  onClick={() => dispatch(clearAllFilters())}
                  className="text-[10px] font-black text-rose-800"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* RESTAURANT GRID */}
            {currentItems.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-20">
                  {currentItems.map((item: any, index: number) => (
                    <div
                      key={item.id}
                      className={styles.cardFadeIn}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <Link href={`/pages/resturantDetail/${item.id}`}>
                        <RestaurantCard item={item} />
                      </Link>
                    </div>
                  ))}
                </div>

                {/* PAGINATION */}
                {pageCount > 1 && (
                  <div className="mt-24 flex justify-center cursor-pointer">
                    <ReactPaginate
                      previousLabel="←"
                      nextLabel="→"
                      breakLabel="..."
                      pageCount={pageCount}
                      onPageChange={handlePageChange}
                      containerClassName={styles.pagination}
                      pageClassName={styles.pageItem}
                      pageLinkClassName={styles.pageLink}
                      activeClassName={styles.activePage}
                      previousClassName={styles.pageItem}
                      nextClassName={styles.pageItem}
                      disabledClassName={styles.disabled}
                    />
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center py-32">
                <SearchX className="w-16 h-16 text-rose-300 mb-6" />
                <h3 className="text-3xl font-black">No restaurants found</h3>
                <button
                  onClick={() => dispatch(clearAllFilters())}
                  className="mt-8 px-10 py-4 bg-rose-800 text-white text-sm font-black"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}
