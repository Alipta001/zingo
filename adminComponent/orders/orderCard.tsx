"use client";

export default function OrderCard() {
  return (
    <div style={{ border: "1px solid #ddd", padding: 20, marginBottom: 15 }}>
      <h3>Order #123</h3>
      <p>Status: Pending</p>

      <select>
        <option>Pending</option>
        <option>Preparing</option>
        <option>Out for Delivery</option>
        <option>Failed</option>
      </select>
    </div>
  );
}
