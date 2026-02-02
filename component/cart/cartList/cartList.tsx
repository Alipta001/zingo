"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../cartItem/cartItem";
import { fetchCart } from "@/redux/slice/cartSlice"; // thunk to fetch cart

export default function CartList() {
  const dispatch = useDispatch();
  const { data: cartItems, loading } = useSelector((state: any) => state.cart);

  useEffect(() => {
    dispatch(fetchCart()); // thunk will update Redux store
  }, [dispatch]);

  if (loading) return <p>Loading cart...</p>;

  if (cartItems.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div className="cart-list">
      {cartItems.map((item: any) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
