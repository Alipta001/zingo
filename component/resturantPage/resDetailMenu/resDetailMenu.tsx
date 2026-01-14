/* import "../../../styles/resturantPage/resDetailMenu/resDetailMenu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const ResDetailMenu = () => (
  <div className="menu-preview-card">
    <div className="flex-header">
      <h3>Menu</h3>
      <a href="#" className="view-all">See All Menus <FontAwesomeIcon icon={faChevronRight} /></a>
    </div>
    
    <div className="menu-sub-sec">
      <h4>Cuisines</h4>
      <div className="tag-cloud">
        {['North Indian', 'Continental', 'Italian', 'Desserts', 'Chinese'].map(c => (
          <span key={c} className="tag">✦ {c} ✦</span>
        ))}
      </div>
    </div>

    <div className="menu-sub-sec">
      <h4>Top Dishes</h4>
      <div className="tag-cloud">
        {['Chocolate Pudding', 'Club Sandwich', 'Noodles', 'Momo', 'Roll'].map(d => (
          <span key={d} className="tag">✦ {d} ✦</span>
        ))}
      </div>
    </div>

    <div className="menu-cards">
      <div className="menu-thumb">
        <img src="/image/menu1.jpg" alt="Special Menu" />
        <p>Special Menu</p>
        <span>1 Page</span>
      </div>
      <div className="menu-thumb">
        <img src="/image/menu2.jpg" alt="Food Menu" />
        <p>Food Menu</p>
        <span>11 Pages</span>
      </div>
    </div>
  </div>
); */
"use client"
import "../../../styles/resturantPage/resDetailMenu/resDetailMenu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { resturantWiseItem } from "@/redux/slice/menuSlice";
import { BaseURL } from "@/api/axios/axios";

export default function ResDetailMenu(){
  const dispatch = useDispatch()
  const {id} = useParams()
  const{
    data: menu,
    loading,
    error
  } = useSelector((state)=> state.menu)
  useEffect(()=>{
    dispatch(resturantWiseItem(id))
  },[dispatch,id])
  return(
  <div className="menu-preview-card">
    <div className="flex-header">
      <h3>Menu</h3>
      <a href="#" className="view-all">See All Menus <FontAwesomeIcon icon={faChevronRight} /></a>
    </div>
    
    <div className="menu-sub-sec">
      <h4>Cuisines</h4>
      <div className="tag-cloud">
        {['North Indian', 'Continental', 'Italian', 'Desserts', 'Chinese'].map(c => (
          <span key={c} className="tag">✦ {c} ✦</span>
        ))}
      </div>
    </div>

    <div className="menu-sub-sec">
      <h4>Top Dishes</h4>
      <div className="tag-cloud">
        {['Chocolate Pudding', 'Club Sandwich', 'Noodles', 'Momo', 'Roll'].map(d => (
          <span key={d} className="tag">✦ {d} ✦</span>
        ))}
      </div>
    </div>

    <div className="menu-cards">
      {menu.map((menu, idx) => (
        <div className="menu-thumb" key={idx}>
          <img src={`${BaseURL}${menu.imageURL}`} alt={menu.title} />
          <p>{menu.title}</p>
          <span>{menu.name}</span>
          <span>{menu.description}</span>
          <div className="menu-actions">
            <button className="buy-btn">Buy ₹{menu.price}</button>
            <button className="add-cart-btn">
              <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}
