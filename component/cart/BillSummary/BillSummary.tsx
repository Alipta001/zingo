"use client";

import Button from "@/component/commonBtn/commonBtn";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "@/redux/slice/cartSlice";
import { toast } from "sonner";

export default function BillSummary() {
  // Redux state থেকে total নাও
  const dispatch = useDispatch();
  const total = useSelector((state: any) => state.cart.total);
  const loading = useSelector((state: any) => state.cart.loading);
  const cartData = useSelector((state: any) => state.cart.data);

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

      <Button className="checkout-btn">
        Proceed to Checkout
      </Button>

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
