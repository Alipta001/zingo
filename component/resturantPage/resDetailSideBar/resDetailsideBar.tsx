"use client";
import "../../../styles/resturantPage/resDetailSideBar/resDetailSideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faDirections } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { fetchResturantById } from "@/redux/slice/resturantSlice";

export default function ResDetailSideBar() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    data: resturants,
    loading,
    error,
  } = useSelector((state) => state.resturants.details);

  useEffect(() => {
    dispatch(fetchResturantById(id));
  }, [dispatch, id]);

  if (loading) return <div className="loading-text">Loading...</div>;
  if (error) return <p>Error loading data</p>;
  if (!resturants) return null;

  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(resturants.address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <aside className="res-sidebar">
      {/* Reservation Card */}
      <div className="sidebar-card">
        <h3>Table Reservation</h3>
        <p className="offer-tag">
          <span>🉐</span> Flat 30% OFF + 3 More Offers
        </p>
        <div className="mobile-input-grid">
          <select>
            <option>Today</option>
          </select>
          <select>
            <option>2 Guest</option>
          </select>
        </div>
        <button className="book-btn-full">Book A Table</button>
      </div>

      {/* Direction Card */}
      <div className="sidebar-card">
        <h3>Direction</h3>
        <div className="responsive-map-container">
          <iframe
            src={mapUrl}
            title="Restaurant Location"
            loading="lazy"
            allowFullScreen
          />
        </div>
        <p className="address-label">{resturants.address}</p>
        <div className="action-button-group">
          <button className="sub-btn">
            <FontAwesomeIcon icon={faCopy} /> Copy
          </button>
          <button className="sub-btn">
            <FontAwesomeIcon icon={faDirections} /> Direction
          </button>
        </div>
      </div>
    </aside>
  );
}
