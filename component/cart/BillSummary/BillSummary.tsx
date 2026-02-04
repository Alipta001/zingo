"use client";

import { useState } from "react";
import Button from "@/component/commonBtn/commonBtn";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "@/redux/slice/cartSlice";
import { placeOrder } from "@/redux/slice/orderSlice";
import OrderPlacedModal from "@/component/order/OrderPlacedModal/OrderPlacedModal";
import { toast } from "sonner";

export default function BillSummary() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newOrderId, setNewOrderId] = useState<string | undefined>(undefined);

  const total = useSelector((state: any) => state.cart.total);
  const loading = useSelector((state: any) => state.cart.loading);
  const cartData = useSelector((state: any) => state.cart.data);
  const orderLoading = useSelector((state: any) => state.order?.loading || false);

  const userId = typeof window !== "undefined" ? localStorage.getItem("userId") || localStorage.getItem("Id") : null;

  const handlePlaceOrder = async () => {
    if (!userId) {
      toast.error("Please login to place an order");
      return;
    }

    if (!cartData || cartData.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    const payload = {
      user_id: userId,
      items: cartData.map((item: any) => ({
        menu_item_id: item.menu_item_id || item.id,
        quantity: item.quantity,
      })),
      total_amount: total,
    };

    try {
      const result = await dispatch(placeOrder(payload) as any).unwrap();
      setNewOrderId(result?.id || result?.order_id);
      setIsModalOpen(true);
      // Clear cart after successful order
      dispatch(clearCart() as any);
    } catch (err: any) {
      console.error("Order placement failed:", err);
    }
  };

  const handleClearCart = () => {
    if (confirm("Are you sure you want to clear your entire cart?")) {
      dispatch(clearCart() as any);
      toast.success("Cart cleared successfully");
    }
  };

  return (
    <div className="bill-summary">
      <div className="bill-row">
        <span>Total Amount</span>
        <span>₹ {loading ? "..." : total}</span>
      </div>

      <Button 
        onClick={handlePlaceOrder}
        disabled={orderLoading || cartData.length === 0}
        className="checkout-btn"
        style={{
          backgroundColor: orderLoading ? "#ccc" : "#e23744",
          cursor: orderLoading ? "not-allowed" : "pointer",
          opacity: orderLoading ? 0.6 : 1,
        }}
      >
        {orderLoading ? "Placing Order..." : "Place Order"}
      </Button>

      <OrderPlacedModal
        open={isModalOpen}
        orderId={newOrderId}
        onClose={() => setIsModalOpen(false)}
      />

      {cartData && cartData.length > 0 && (
        <Button 
          onClick={handleClearCart}
          className="clear-cart-btn"
          style={{ 
            marginTop: "10px", 
            backgroundColor: "#dc3545",
            color: "white",
            width: "100%"
          }}
        >
          Clear Cart
        </Button>
      )}
    </div>
  );
}
