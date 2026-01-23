// import React from 'react';
// import FilterSidebar from '../filterSideBar/filterSideBar';
// import RestaurantCard from '../resturantCard/resturantCard';
// import styles from '@/styles/resturantList/resturantSection/resturantSection.module.css'

// // Mock Data based on your image
// const RESTAURANTS = [
//   { id: 1, name: "Biriyani House", cuisines: "Mughlai • North Indian", rating: 4.4, time: "30 mins", price: "₹300 for two", offer: "Flat 50% OFF", code: "DEAL50", image: "/images/biryani.jpg" },
//   { id: 2, name: "Raj Bari", cuisines: "Bengali • Mughlai", rating: 4.5, time: "25 mins", price: "₹400 for two", offer: "Flat 50% OFF", code: "SAVE50", image: "/images/bengali.jpg" },
//   { id: 3, name: "Spice Nation", cuisines: "Mughlai • North Indian", rating: 4.3, time: "35 mins", price: "₹300 for two", offer: "Flat 50% OFF", code: "SAVE50", image: "/images/spice.jpg" },
//   { id: 4, name: "Kolkata Biriyani", cuisines: "Mughlai • Chinese", rating: 4.0, time: "20 mins", price: "₹250 for two", offer: "Buy 1 Get 1 Free", code: "BOGO", image: "/images/kolkata.jpg" },
//   // ... add more to see the grid in action
// ];

// export default function RestaurantSection() {
//   return (
//     <div className={styles.container}>
//       {/* Top Header Section (Location & Mobile Filters) */}
//       <header className={styles.header}>
//         <div className={styles.locationBar}>
//           <div className={styles.locBadge}>📍 Kolkata</div>
//           <div className={styles.locBadge}>🕒 30 Mins</div>
//           <div className={`${styles.locBadge} ${styles.hideMobile}`}>🏠 Baruipur</div>
//         </div>

//         {/* This only shows on Mobile (The Top Horizontal Filter) */}
//         <div className={styles.mobileFilterBar}>
//            <button className={styles.activePill}>Filters</button>
//            <button className={styles.pill}>Rating 4.0+</button>
//            <button className={styles.pill}>Pure Veg</button>
//            <button className={styles.pill}>Cuisine</button>
//            <button className={styles.pill}>Offers</button>
//         </div>
//       </header>

//       <div className={styles.mainLayout}>
//         {/* Sidebar - Visible only on Desktop */}
//         <aside className={styles.sidebarContainer}>
//           <FilterSidebar />
//         </aside>

//         {/* The Actual Restaurant Grid */}
//         <section className={styles.gridContainer}>
//           <div className={styles.restaurantGrid}>
//             {RESTAURANTS.map((item) => (
//               <RestaurantCard key={item.id} item={item} />
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import FilterSidebar from "../filterSideBar/filterSideBar";
import RestaurantCard from "../resturantCard/resturantCard";
import styles from "@/styles/resturantList/resturantSection/resturantSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { resturantList } from "@/redux/slice/resturantSlice";
import Link from "next/link";
import { increment } from "@/redux/slice/showSlice";

export default function RestaurantSection() {
  const [activeFilter, setActiveFilter] = useState(null); // Tracks which mobile filter is open
  const dispatch = useDispatch();
  const showData = useSelector((state) => state.showDataOnScreen.list.count2);
  const {
    data: resturants,
    loading,
    error,
  } = useSelector((state) => state.resturants.list);

  useEffect(() => {
    dispatch(resturantList());
  }, []);
  console.log(resturants);

  const filterOptions = [
    "Rating",
    "Cuisine",
    "Price",
    "Delivery Time",
    "Offers",
  ];

  return (
    <main className={styles.resturantListSection}>
      <div className={styles.container}>
        {/* HEADER SECTION */}
        <header className={styles.header}>
          <div className={styles.locationBar}>
            <div className={styles.locBadge}>📍 Kolkata</div>
            <div className={styles.locBadge}>🕒 30 Mins</div>
          </div>

          {/* MOBILE PILLS - Each pill now opens the overlay */}
          <div className={styles.mobileFilterBar}>
            {filterOptions.map((option) => (
              <button
                key={option}
                className={styles.pill}
                onClick={() => setActiveFilter(option)}
              >
                {option} ▾
              </button>
            ))}
          </div>
        </header>

        {/* MOBILE BOTTOM SHEET OVERLAY */}
        {activeFilter && (
          <div className={styles.overlay} onClick={() => setActiveFilter(null)}>
            <div
              className={styles.filterBox}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.boxHeader}>
                <h3>Filter by {activeFilter}</h3>
                <button
                  className={styles.closeBtn}
                  onClick={() => setActiveFilter(null)}
                >
                  ✕
                </button>
              </div>

              <div className={styles.boxContent}>
                {/* Dynamic Content Based on Pill Selected */}
                {activeFilter === "Rating" && (
                  <div className={styles.mobileInputGroup}>
                    <p>Select Minimum Rating</p>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      step="0.5"
                      className={styles.rangeSlider}
                    />
                    <div className={styles.rangeLabels}>
                      <span>1★</span>
                      <span>5★</span>
                    </div>
                  </div>
                )}

                {activeFilter === "Cuisine" && (
                  <div className={styles.mobileCheckList}>
                    {[
                      "Indian",
                      "Chinese",
                      "Italian",
                      "Bengali",
                      "South Indian",
                    ].map((c) => (
                      <label key={c} className={styles.checkLabel}>
                        <input type="checkbox" /> {c}
                      </label>
                    ))}
                  </div>
                )}

                {activeFilter === "Price" && (
                  <div className={styles.mobileInputGroup}>
                    <p>Max Price: ₹2000</p>
                    <input
                      type="range"
                      min="100"
                      max="2000"
                      step="100"
                      className={styles.rangeSlider}
                    />
                  </div>
                )}
                {/* Add other conditions for Time/Offers as needed */}
              </div>

              <div className={styles.boxFooter}>
                <button
                  className={styles.clearBtn}
                  onClick={() => setActiveFilter(null)}
                >
                  Clear All
                </button>
                <button
                  className={styles.applyBtn}
                  onClick={() => setActiveFilter(null)}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MAIN CONTENT LAYOUT */}
        <div className={styles.mainLayout}>
          <aside className={styles.sidebarContainer}>
            <FilterSidebar />
          </aside>

          <section className={styles.gridContainer}>
            <div className={styles.restaurantGrid}>
              {resturants.slice(0, showData).map((item) => (
                <Link
                  key={item.id}
                  href={`/pages/resturantDetail/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <RestaurantCard item={item} />
                </Link>
              ))}
            </div>
            <button
          className={styles.showMoreBtn}
          onClick={() => dispatch(increment())}
        >
          Show More
        </button>
          </section>
        </div>
      </div>
    </main>
  );
}
