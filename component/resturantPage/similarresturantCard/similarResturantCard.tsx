"use client";
import { useDispatch, useSelector } from "react-redux";
import "../../../styles/resturantPage/similarResturantCard/similarResturantCard.css";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { resturantList } from "@/redux/slice/resturantSlice";
import { BaseURL } from "@/app/api/axios/axios";

export default function SimilarResturantCard() {
  const dispatch = useDispatch();
  const carouselRef = useRef(null);
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

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -340,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: 340,
      behavior: "smooth",
    });
  };

  return (
    <section className="restaurant-section">
      <div className="section-header">
        <h2 className="section-title">Similar Restaurants</h2>

        <div className="carousel-controls">
          <button className="carousel-btn" onClick={scrollLeft}>
            ‹
          </button>
          <button className="carousel-btn" onClick={scrollRight}>
            ›
          </button>
        </div>
      </div>

      <div className="restaurant-carousel" ref={carouselRef}>
        {resturants.slice(0, 8).map((res, i) => (
          <div className="restaurant-card" key={i}>
            <div className="image-wrap">
              <img src={`${BaseURL}${res.image}`} alt={res.name} />
              {res.offer ? (
                <span className="offer-badge">{res.offer}</span>
              ) : (
                <span className="offer-badge">20% OFF</span>
              )}
            </div>

            <div className="card-body">
              <h4>{res.name}</h4>
              <p className="cuisine">{res.cuisine}</p>

              <div className="card-meta">
                <span className="rating">★ {res.rating}</span>
                <span className="time">{res.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
