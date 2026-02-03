"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartList from "@/component/cart/cartList/cartList";
import BillSummary from "@/component/cart/BillSummary/BillSummary";
import RestaurantHeader from "@/component/cart/RestaurantHeader/RestaurantHeader";
import { fetchCart } from "@/redux/slice/cartSlice";
import Navbar from "@/component/globalLayout/navbar/navbar";
import Footer from "@/component/globalLayout/footer/footer";
import "../../../styles/cart/cart.css";

export default function CartPage() {
  const dispatch = useDispatch();
  const { data: cartItems = [], loading, error } = useSelector((state: any) => state.cart);

  console.log("📄 CART PAGE - Data:", cartItems);
  console.log("📄 CART PAGE - Loading:", loading);
  console.log("📄 CART PAGE - Error:", error);

  useEffect(() => {
    // Fetch cart from backend on component mount
    console.log("📄 FETCHING CART...");
    dispatch(fetchCart() as any);
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="cart-page">
          <p className="cart-loading">Loading your cart...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="cart-page">
          <p className="cart-error">Error loading cart: {error}</p>
        </div>
        <Footer />
      </>
    );
  }

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <div className="cart-page">
          <p className="cart-empty">Your cart is empty</p>
          <details style={{ marginTop: "2rem", padding: "1rem", background: "#f0f0f0", borderRadius: "8px" }}>
            <summary style={{ cursor: "pointer", fontWeight: "bold" }}>Debug Info</summary>
            <pre style={{ marginTop: "1rem", fontSize: "12px", overflow: "auto" }}>
              {JSON.stringify({ cartItems, loading, error }, null, 2)}
            </pre>
          </details>
        </div>
        <Footer />
      </>
    );
  }

  // Group items by restaurant (if available)
  const groupedByRestaurant = cartItems.reduce((acc: any, item: any) => {
    const restaurantName = item.restaurant_name || item.restaurantName || "Your Restaurant";
    if (!acc[restaurantName]) acc[restaurantName] = [];
    acc[restaurantName].push(item);
    return acc;
  }, {});

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h2 className="cart-page-title">Review Your Order</h2>

        {Object.keys(groupedByRestaurant).map((restaurant) => (
          <div key={restaurant} className="restaurant-cart-section">
            <RestaurantHeader name={restaurant} />
            <CartList items={groupedByRestaurant[restaurant]} />
          </div>
        ))}

        <BillSummary />
      </div>
      <Footer />
    </>
  );
}
