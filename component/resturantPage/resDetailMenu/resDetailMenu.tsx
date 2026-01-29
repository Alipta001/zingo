"use client";
import "../../../styles/resturantPage/resDetailMenu/resDetailMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { resturantWiseItem } from "@/redux/slice/menuSlice";
import MenuItemCard from "../menuItemCard/menuItemCard";

export default function ResDetailMenu() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: menu, loading, error } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(resturantWiseItem(id));
  }, [dispatch, id]);

  if (loading)
    return (
      <div className="menu-preview-card">
        <p style={{ textAlign: "center", padding: "50px" }}>
          Loading delicious menu...
        </p>
      </div>
    );

  if (error) return <p className="error-msg">{error}</p>;

  return (
    <div className="menu-preview-card">
      <div className="flex-header">
        <h3>Menu Items</h3>
        <a href="#" className="view-all">
          Explore Full Menu <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </div>

      <div className="menu-sub-sec">
        <h4>Cuisines</h4>
        <div className="tag-cloud">
          {[
            "North Indian",
            "Continental",
            "Italian",
            "Desserts",
            "Chinese",
          ].map((c) => (
            <span key={c} className="tag">
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="menu-sub-sec">
        <h4>Must Try Dishes</h4>
        <div className="tag-cloud">
          {[
            "Chocolate Pudding",
            "Club Sandwich",
            "Noodles",
            "Momo",
            "Roll",
          ].map((d) => (
            <span key={d} className="tag">
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* 3-COLUMN GRID START */}
      <div className="menu-cards">
        {menu && menu.length > 0 ? (
          menu.map((item) => (
            <MenuItemCard key={item.id} item={item} userId={id} />
          ))
        ) : (
          <p>No items found for this restaurant.</p>
        )}

        {/* Button sits inside the grid container but spans all columns via CSS */}
        <div className="show-all-item">
          <button>VIEW ALL {menu?.length} ITEMS</button>
        </div>
      </div>
    </div>
  );
}
