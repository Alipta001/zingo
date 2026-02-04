"use client";

import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "@/redux/slice/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "@/component/commonBtn/commonBtn";
import { toast } from "sonner";

interface CartItemProps {
  item: {
    id?: string | number;
    menu_item_id?: string | number;
    name?: string;
    title?: string;
    menu_item_name?: string;
    menu_item?: { name?: string; id?: string | number };
    price?: number;
    menu_item_price?: number;
    quantity: number;
    discounted_price?: number;
  };
}

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useDispatch();
  
  // Cart item id (db CartItem.id) and the menu item id (MenuItem.id)
  const cartItemId = (item.id ?? item.menu_item_id) ?? ""; // fallback to cart item id
  const menuItemId = item.menu_item?.id ?? item.menu_item_id ?? item.id ?? "";
  
  // Try multiple possible field names for item name
  const itemName = item.name || 
                   item.title || 
                   item.menu_item_name || 
                   item.menu_item?.name || 
                   "Item";
  
  // Try multiple possible field names for price
  const itemPrice = item.discounted_price || item.price || item.menu_item_price || 0;

  const handleIncrease = () => {
    // increment uses cart item id to update local UI
    dispatch(incrementQuantity(cartItemId));
    toast.success(`Qty increased`);
  };

  const handleDecrease = () => {
    if (item.quantity === 1) {
      // Remove from API expects menu_item_id
      dispatch(removeItem(menuItemId) as any);
      toast.info(`Removed from cart`);
    } else {
      dispatch(decrementQuantity(cartItemId));
      toast.success(`Qty decreased`);
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(menuItemId) as any);
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
