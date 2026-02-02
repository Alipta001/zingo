"use client";

import Button from "@/component/commonBtn/commonBtn";
import { useSelector } from "react-redux";

export default function BillSummary() {
  // Redux state থেকে total নাও
  const total = useSelector((state: any) => state.cart.total);
  const loading = useSelector((state: any) => state.cart.loading);

  return (
    <div className="bill-summary">
      <div className="bill-row">
        <span>Total Amount</span>
        <span>₹ {loading ? "..." : total}</span>
      </div>

      <Button className="checkout-btn">
        Proceed to Checkout
      </Button>
    </div>
  );
}
