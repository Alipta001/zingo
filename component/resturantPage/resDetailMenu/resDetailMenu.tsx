/* import "../../../styles/resturantPage/resDetailitem/resDetailitem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const ResDetailitem = () => (
  <div className="item-preview-card">
    <div className="flex-header">
      <h3>item</h3>
      <a href="#" className="view-all">See All items <FontAwesomeIcon icon={faChevronRight} /></a>
    </div>
    
    <div className="item-sub-sec">
      <h4>Cuisines</h4>
      <div className="tag-cloud">
        {['North Indian', 'Continental', 'Italian', 'Desserts', 'Chinese'].map(c => (
          <span key={c} className="tag">✦ {c} ✦</span>
        ))}
      </div>
    </div>

    <div className="item-sub-sec">
      <h4>Top Dishes</h4>
      <div className="tag-cloud">
        {['Chocolate Pudding', 'Club Sandwich', 'Noodles', 'Momo', 'Roll'].map(d => (
          <span key={d} className="tag">✦ {d} ✦</span>
        ))}
      </div>
    </div>

    <div className="item-cards">
      <div className="item-thumb">
        <img src="/image/item1.jpg" alt="Special item" />
        <p>Special item</p>
        <span>1 Page</span>
      </div>
      <div className="item-thumb">
        <img src="/image/item2.jpg" alt="Food item" />
        <p>Food item</p>
        <span>11 Pages</span>
      </div>
    </div>
  </div>
); */

"use client";
import "../../../styles/resturantPage/resDetailMenu/resDetailMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { resturantWiseItem } from "@/redux/slice/menuSlice";
import { BaseURL } from "@/api/axios/axios";
import { decrement, increment } from "@/redux/slice/showSlice";
import { addToCart } from "@/redux/slice/cartSlice";
import MenuItemCard from "../menuItemCard/menuItemCard";

export default function ResDetailMenu() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: menu, loading, error } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(resturantWiseItem(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading restaurants...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="menu-preview-card">
      <div className="flex-header">
        <h3>item</h3>
        <a href="#" className="view-all">
          See All items <FontAwesomeIcon icon={faChevronRight} />
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
              ✦ {c} ✦
            </span>
          ))}
        </div>
      </div>
      <div className="menu-sub-sec">
        <h4>Top Dishes</h4>
        <div className="tag-cloud">
          {[
            "Chocolate Pudding",
            "Club Sandwich",
            "Noodles",
            "Momo",
            "Roll",
          ].map((d) => (
            <span key={d} className="tag">
              ✦ {d} ✦
            </span>
          ))}
        </div>
      </div>
      {/* <div className="menu-cards">
        {menu.map((item, idx) => (
          <div className="menu-thumb" key={idx}>
            <img src={`${BaseURL}${item.imageURL}`} alt={item.title} />
            <p>{item.title}</p>
            <span>{item.name}</span>
            <span>{item.description}</span>
            <div className="menu-actions">
              <div className="qty-selector">
                <button
                  className="qty-btn"
                  onClick={() => dispatch(decrement(item.id))}
                >
                  −
                </button>
                <span className="qty-value">{count}</span>
                <button
                  className="qty-btn"
                  onClick={() => dispatch(increment(item.id))}
                >
                  +
                </button>
              </div>

              <button
                className="add-cart-btn"
                onClick={() => handleAddCart(item.id)}
              >
                <FontAwesomeIcon icon={faCartPlus} /> Add
              </button>
            </div>
          </div>
        ))}
      </div> */}
      <div className="menu-cards">
        {menu.map((item) => (
          <MenuItemCard key={item.id} item={item} userId={id} />
        ))}
      </div>
    </div>
  );
}
