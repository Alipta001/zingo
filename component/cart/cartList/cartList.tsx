"use client";

import CartItem from "../cartItem/cartItem";

interface CartListProps {
  items: any[];
}

export default function CartList({ items }: CartListProps) {
  if (items.length === 0) {
    return <p>No items from this restaurant</p>;
  }

  return (
    <div className="cart-list">
      {items.map((item: any) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
