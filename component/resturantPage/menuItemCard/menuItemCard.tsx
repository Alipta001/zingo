"use client"
import "../../../styles/resturantPage/menuItemCard/menuItemCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { BaseURL } from "@/api/axios/axios";
import { decrement, increment } from "@/redux/slice/showSlice";
import { addToCart } from "@/redux/slice/cartSlice";

// Separate card component for each menu item
export default function MenuItemCard({ item, userId }) {
  const dispatch = useDispatch();

  // Get the count for this particular item from Redux
  const count = useSelector(
    (state) => state.showDataOnScreen.addToCart.quantities[item.id] || 1
  );

  const handleAddCart = () => {
    const payload = {
      user_id: userId,
      menu_item_id: item.id,
      quantity: count
    };
    dispatch(addToCart(payload));
  };

  return (
    <div className="menu-thumb">
      <img src={`${BaseURL}${item.imageURL}`} alt={item.title} />
      <p>{item.title}</p>
      <span>{item.name}</span>
      <span>{item.description}</span>
      <div className="menu-actions">
        <div className="qty-selector">
          <button
            className="qty-btn"
            onClick={() => dispatch(decrement(item.id))}
            disabled={count === 1} // optional: prevent going below 1
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
          <FontAwesomeIcon icon={faCartPlus} /> Add
        </button>
      </div>
    </div>
    
  );
}
