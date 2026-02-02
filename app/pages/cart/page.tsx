"use client";

import { useEffect, useState } from "react";
import CartList from "@/component/cart/cartList/cartList";
import BillSummary from "@/component/cart/BillSummary/BillSummary";
import RestaurantHeader from "@/component/cart/RestaurantHeader/RestaurantHeader";
import { fetchCartApi } from "@/services/cartApi";
import "../../../styles/cart/cart.css";

interface CartItemType {
  id: string;
  title: string;
  price: number;
  quantity: number;
  restaurantName: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const res = await fetchCartApi();
        setCartItems(res.items || []);
      } catch (err) {
        console.error("Failed to load cart", err);
      } finally {
        setLoading(false);
      }
    };

    loadCart();
  }, []);

  if (loading) return <p className="cart-loading">Loading cart...</p>;
  if (cartItems.length === 0) return <p className="cart-empty">Your cart is empty</p>;

  // Group items by restaurant
  const groupedByRestaurant = cartItems.reduce((acc: any, item) => {
    if (!acc[item.restaurantName]) acc[item.restaurantName] = [];
    acc[item.restaurantName].push(item);
    return acc;
  }, {});

  return (
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
  );
}
