"use client";
import { useDispatch } from "react-redux";
import {  decrementQuantity, incrementQuantity } from "@/redux/slice/cartSlice";
import Button from "@/component/commonBtn/commonBtn";

export default function QuantityControl({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="qty-control">
      <Button onClick={() => dispatch(decrementQuantity(item.id))} disabled={item.quantity <= 1}>−</Button>
      <span>{item.quantity}</span>
      <Button onClick={() => dispatch(incrementQuantity(item.id))}>+</Button>
    </div>
  );
}
