"use client";
import "../../../styles/resturantPage/menuItemCard/menuItemCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { BaseURL } from "@/app/api/axios/axios";
import { decrement, increment } from "@/redux/slice/showSlice";
import { addToCart } from "@/redux/slice/cartSlice";

export default function MenuItemCard({ item, userId }) {
  const dispatch = useDispatch();

  const count = useSelector(
    (state) => state.showDataOnScreen.addToCart.quantities[item.id] || 1,
  );

  const handleAddCart = () => {
    const payload = {
      user_id: userId,
      menu_item_id: item.id,
      quantity: count,
    };
    dispatch(addToCart(payload));
  };

  return (
    <div className="menu-thumb">
      <div className="menu-image-container">
        <img src={`${BaseURL}${item.imageURL}`} alt={item.title} />
        <div className="price-badge">₹{item.price || '199'}</div>
      </div>
      
      <div className="menu-info">
        <h4 className="item-title">{item.title}</h4>
        <span className="item-category">{item.name}</span>
        <p className="item-desc">{item.description}</p>
      </div>

      <div className="menu-actions">
        <div className="qty-selector">
          <button
            className="qty-btn"
            onClick={() => dispatch(decrement(item.id))}
            disabled={count === 1}
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

        <button className="add-cart-btn" onClick={handleAddCart}>
          <FontAwesomeIcon icon={faCartPlus} /> 
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}