"use client";

import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "@/redux/slice/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "@/component/commonBtn/commonBtn";
import { toast } from "sonner";

interface CartItemProps {
  item: {
    id: string;
    name?: string;
    title?: string;
    price: number;
    quantity: number;
    discounted_price?: number;
  };
}

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useDispatch();
  
  const itemName = item.title || item.name || "Item";
  const itemPrice = item.discounted_price || item.price || 0;

  const handleIncrease = () => {
    dispatch(incrementQuantity(item.id));
    toast.success(`Qty increased`);
  };

  const handleDecrease = () => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id) as any);
      toast.info(`Removed from cart`);
    } else {
      dispatch(decrementQuantity(item.id));
      toast.success(`Qty decreased`);
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id) as any);
    toast.error(`${itemName} removed from cart`);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>{itemName}</h4>
        <p>₹{itemPrice}</p>
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
