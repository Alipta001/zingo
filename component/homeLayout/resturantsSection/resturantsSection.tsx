/* import React from 'react';
import "../../styles/resturantsSection/resturantsSection.css";

const ResturantsSection = () => {
  const restaurants = [
    { id: 1, name: "domino’s pizza", items: "pizzas, fast food, desserts", rating: "4.7", time: "25-30 Mins", img: "/images/resturants/pizza.png", off: "50% OFF up to ₹100" },
    { id: 2, name: "rang de basanti dhaba", items: "north indian, kebab, birya...", rating: "4.7", time: "25-30 Mins", img: "/images/resturants/dhaba.png", off: "50% OFF up to ₹100" },
    { id: 3, name: "wow! momo", items: "momos, chinese", rating: "4.7", time: "25-30 Mins", img: "/images/resturants/momo.png", off: "50% OFF up to ₹100" },
    { id: 4, name: "roll it out", items: "rolls, fast food, indian", rating: "4.7", time: "25-30 Mins", img: "/images/resturants/roll.png", off: "50% OFF up to ₹100" },
    { id: 5, name: "natural ice cream", items: "ice cream, desserts", rating: "4.7", time: "25-30 Mins", img: "/images/resturants/icecream.png", off: "50% OFF up to ₹100" },
    { id: 6, name: "burger king", items: "Burgers", rating: "4.7", time: "25-30 Mins", img: "/images/resturants/burger.png", off: "50% OFF up to ₹100" },
  ];

  return (
    <section className="featured-restuarent-sec">
      <div className="container">
        <div className="featured-restuarent-heading">
          <h2>Featured Restaurants</h2>
          <a href="#" className="view-all-restaurants">
            <b>View All Restaurants</b>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3.33337 8H12.6667" stroke="#DC2625" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="#DC2625" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="row">
          {restaurants.map((res) => (
            <div className="col-4" key={res.id}>
              <div className="rest-card">
                <div className="card-image">
                  <img src={res.img} alt={res.name} />
                  <p className="off-badge">{res.off}</p>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="food-name">{res.name}</h3>
                    <p className="food-items">{res.items}</p>
                  </div>
                  <div className="rating-box">
                    <div className="rating">
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                        <path d="M9.99999 1.66675L12.575 6.88342L18.3333 7.72508L14.1667 11.7834L15.15 17.5167L9.99999 14.8084L4.84999 17.5167L5.83332 11.7834L1.66666 7.72508L7.42499 6.88342L9.99999 1.66675Z" fill="white" />
                      </svg>
                      {res.rating}
                    </div>
                    <div className="time">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M10 18.3334C14.6024 18.3334 18.3334 14.6025 18.3334 10.0001C18.3334 5.39771 14.6024 1.66675 10 1.66675C5.39765 1.66675 1.66669 5.39771 1.66669 10.0001C1.66669 14.6025 5.39765 18.3334 10 18.3334Z" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M10 5V10L13.3333 11.6667" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                      {res.time}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResturantsSection; */

// "use client";

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {resturantList} from "@/redux/slice/productSlice";
// /* import type { RootState, AppDispatch } from "@/redux/store"; */
// import "../../styles/resturantsSection/resturantsSection.css";

// const ResturantsSection = () => {
//   const dispatch = useDispatch();

//   /* const { data: restaurants, loading, error } = useSelector(
//     (state: RootState) => state.product
//   ); */

//   useEffect(() => {
//     dispatch(resturantList());
//   }, [dispatch]);

//   if (loading) return <p>Loading restaurants...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <section className="featured-restuarent-sec">
//       <div className="container">
//         <div className="featured-restuarent-heading">
//           <h2>Featured Restaurants</h2>
//           <a href="#" className="view-all-restaurants">
//             <b>View All Restaurants</b>
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//               <path d="M3.33337 8H12.6667" stroke="#DC2625" strokeLinecap="round" />
//               <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="#DC2625" strokeLinecap="round" />
//             </svg>
//           </a>
//         </div>

//         <div className="row">
//           {restaurants?.map((res: any) => (
//             <div className="col-4" key={res._id || res.id}>
//               <div className="rest-card">
//                 <div className="card-image">
//                   <img src={res.img} alt={res.name} />
//                   <p className="off-badge">{res.off}</p>
//                 </div>

//                 <div className="card-body">
//                   <div className="card-content">
//                     <h3 className="food-name">{res.name}</h3>
//                     <p className="food-items">{res.items}</p>
//                   </div>

//                   <div className="rating-box">
//                     <div className="rating">
//                       ⭐ {res.rating}
//                     </div>
//                     <div className="time">
//                       ⏱ {res.time}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {restaurants?.length === 0 && <p>No restaurants found</p>}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ResturantsSection;

"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { resturantList } from "@/redux/slice/resturantSlice";
import "../../../styles/homeLayoutCss/resturantsSection/resturantsSection.css";
import { BaseURL } from "@/api/axios/axios";
import { increment } from "@/redux/slice/showSlice";

const ResturantsSection = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const showData = useSelector((state)=> state.showDataOnScreen.list.count)
  /* console.log(showData) */
  const {
    data: resturants,
    loading,
    error,
  } = useSelector((state) => state.resturants.list);

  useEffect(() => {
    dispatch(resturantList());
  }, [dispatch]);

  if (loading) return <p>Loading restaurants...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="featured-restuarent-sec">
      <div className="container">
        <div className="featured-restuarent-heading">
          <h2>Featured Restaurants</h2>
          <a href="#" className="view-all-restaurants">
            <b>View All Restaurants</b>
          </a>
        </div>

        <div className="row">
          {resturants?.slice(0, showData).map((res) => (
            <div className="col-4" key={res.id || res.id} onClick={() => router.push(`/pages/resturantDetail/${res.id}`)}>
              <div className="rest-card">
                <div className="card-image">
                  <img src={`${BaseURL}${res.image}`} alt={res.name} />
                  <p className="off-badge">30% OFF</p>
                </div>

                <div className="card-body">
                  <div className="card-content">
                    <h3 className="food-name">{res.name}</h3>
                    <p className="food-items">{res.cuisine_type}</p>
                    {/* <p className="food-items">{res.address}</p> */}
                  </div>

                  <div className="rating-box">
                    <div className="rating">⭐ {res.rating}</div>
                    <div className="time">⏱ {res.time}</div>
                  </div>
                </div>
              </div>
            </div>
            
          ))}
          {resturants?.length === 0 && <p>No restaurants found</p>}
        </div>
         <button onClick={() => dispatch(increment())}>Show More</button>
      </div>
    </section>
  );
};

export default ResturantsSection;
