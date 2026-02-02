"use client";

import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "@/redux/slice/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "@/component/commonBtn/commonBtn";

interface CartItemProps {
  item: {
    id: string;
    title: string;
    price: number;
    quantity: number;
  };
}

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(incrementQuantity(item.id));  // Slice action
  };

  const handleDecrease = () => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(decrementQuantity(item.id));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p>₹{item.price}</p>
      </div>

      <div className="cart-item-actions">
        <Button onClick={handleDecrease}>
          <FontAwesomeIcon icon={faMinus} />
        </Button>

        <span>{item.quantity}</span>

        <Button onClick={handleIncrease}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>

        <Button onClick={handleRemove}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </div>
  );
}
