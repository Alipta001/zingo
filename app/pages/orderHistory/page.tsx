"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderHistory } from "@/redux/slice/orderSlice";
import Navbar from "@/component/globalLayout/navbar/navbar";
import Footer from "@/component/globalLayout/footer/footer";
import Link from "next/link";
import { Loader2, AlertCircle, ShoppingBag } from "lucide-react";
import ProtectedRoute from "@/component/auth/ProtectedRoute";

export default function OrderHistoryPage() {
  const dispatch = useDispatch();
  const { data: orders = [], loading, error } = useSelector((state: any) => state.order);
  const [isClient, setIsClient] = useState(false);

  // Get userId from localStorage (only on client side)
  useEffect(() => {
    setIsClient(true);
  }, []);

  const userId = isClient ? (localStorage.getItem("Id") || localStorage.getItem("userId")) : null;

  useEffect(() => {
    if (userId && isClient) {
      console.log("📦 Fetching orders for user:", userId);
      dispatch(fetchOrderHistory(userId) as any);
    }
  }, [userId, dispatch, isClient]);

  return (
    <ProtectedRoute>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-[1000] text-slate-900 mb-2 flex items-center gap-3">
              <ShoppingBag size={32} className="text-rose-500" />
              Your Orders
            </h1>
            <p className="text-slate-600">Track and manage all your orders</p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 size={48} className="text-rose-500 animate-spin mb-4" />
              <p className="text-slate-600 text-lg">Loading your orders...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 flex gap-4 items-start">
              <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-[700] text-red-900 mb-1">Error Loading Orders</p>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* No Orders State */}
          {!loading && !error && orders.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-200">
              <ShoppingBag size={64} className="mx-auto text-slate-300 mb-4" />
              <p className="text-xl font-[700] text-slate-900 mb-2">No orders yet</p>
              <p className="text-slate-600 mb-8">Start exploring restaurants and place your first order!</p>
              <Link href="/">
                <button className="bg-rose-500 hover:bg-rose-600 text-white font-[700] py-3 px-8 rounded-xl transition-all transform hover:scale-105 active:scale-95">
                  Browse Restaurants
                </button>
              </Link>
            </div>
          )}

          {/* Orders Grid */}
          {!loading && orders.length > 0 && (
            <div className="grid gap-6">
              {orders.map((order: any, index: number) => (
                <div
                  key={order?.id || order?.order_id || index}
                  className="bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-rose-200 transition-all overflow-hidden group"
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-5 border-b border-slate-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs font-[700] text-slate-500 uppercase tracking-widest mb-1">Order ID</p>
                        <p className="text-2xl font-[1000] text-rose-600">
                          #{order?.id || order?.order_id || index + 1}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-[700] text-slate-500 uppercase tracking-widest mb-2">Status</p>
                        <span
                          className={`inline-block px-4 py-2 rounded-full text-xs font-[700] uppercase tracking-wider ${getStatusStyles(
                            order?.status || "pending"
                          )}`}
                        >
                          {order?.status || "Pending"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="px-6 py-5">
                    {/* Order Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                      {/* Restaurant */}
                      <div className="border-l-4 border-rose-500 pl-4">
                        <p className="text-xs font-[700] text-slate-500 uppercase tracking-widest mb-2">Restaurant</p>
                        <p className="text-lg font-[700] text-slate-900">
                          {order?.restaurant_name || order?.restaurant?.name || "Unknown Restaurant"}
                        </p>
                      </div>

                      {/* Total Amount */}
                      <div className="border-l-4 border-emerald-500 pl-4">
                        <p className="text-xs font-[700] text-slate-500 uppercase tracking-widest mb-2">Total Amount</p>
                        <p className="text-lg font-[1000] text-emerald-600">
                          ₹{order?.total_amount || order?.total || 0}
                        </p>
                      </div>

                      {/* Date */}
                      <div className="border-l-4 border-blue-500 pl-4">
                        <p className="text-xs font-[700] text-slate-500 uppercase tracking-widest mb-2">Order Date</p>
                        <p className="text-lg font-[700] text-slate-900">
                          {order?.created_at
                            ? new Date(order.created_at).toLocaleDateString("en-IN", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              })
                            : "N/A"}
                        </p>
                      </div>
                    </div>

                    {/* Items Section */}
                    {order?.items && order.items.length > 0 && (
                      <div className="bg-slate-50 rounded-xl p-4 mb-6">
                        <p className="text-xs font-[700] text-slate-600 uppercase tracking-widest mb-3">Items Ordered</p>
                        <div className="space-y-2">
                          {order.items.map((item: any, i: number) => (
                            <div key={i} className="flex justify-between items-center text-sm">
                              <span className="text-slate-700 font-[600]">
                                {item?.name || item?.title || item?.menu_item_name || item?.menu_item?.name || "Item"}
                              </span>
                              <div className="flex items-center gap-3">
                                <span className="text-slate-600">x {item?.quantity || 1}</span>
                                <span className="text-rose-600 font-[700]">
                                  ₹{item?.price ? item.price * (item.quantity || 1) : "N/A"}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Delivery Address */}
                    {order?.delivery_address && (
                      <div className="bg-blue-50 rounded-xl p-4 mb-6 border-l-4 border-blue-500">
                        <p className="text-xs font-[700] text-slate-600 uppercase tracking-widest mb-2">Delivery Address</p>
                        <p className="text-sm text-slate-700">{order.delivery_address}</p>
                      </div>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-4 border-t border-slate-200">
                    <Link href={`/pages/liveTracking?orderId=${order?.id || order?.order_id}`}>
                      <button className="w-full py-3 bg-rose-500 hover:bg-rose-600 active:bg-rose-700 text-white font-[700] rounded-xl transition-all transform hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2">
                        <span>🔍 Track Order</span>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </ProtectedRoute>
  );
}

/**
 * Get Tailwind classes for order status
 */
function getStatusStyles(status: string): string {
  const statusLower = status?.toLowerCase() || "";
  
  const statusMap: { [key: string]: string } = {
    pending: "bg-yellow-100 text-yellow-700 border border-yellow-300",
    confirmed: "bg-blue-100 text-blue-700 border border-blue-300",
    preparing: "bg-purple-100 text-purple-700 border border-purple-300",
    on_the_way: "bg-indigo-100 text-indigo-700 border border-indigo-300",
    "on the way": "bg-indigo-100 text-indigo-700 border border-indigo-300",
    delivered: "bg-emerald-100 text-emerald-700 border border-emerald-300",
    cancelled: "bg-red-100 text-red-700 border border-red-300",
  };

  return statusMap[statusLower] || "bg-slate-100 text-slate-700 border border-slate-300";
}
