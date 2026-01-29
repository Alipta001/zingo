"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Package } from "lucide-react";
import OrderCard from "../orderCard/orderCard";
import FilterOrder from "../filterOrder/filterOrder";
import { resturantList } from "@/redux/slice/resturantSlice";
import { increment } from "@/redux/slice/showSlice";
import styles from "../../../styles/orderPage/orderSection.module.css";

const categories = ["All Orders", "On The Way", "Delivered", "Cancelled"];

export default function OrderHistory() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("All Orders");

  const showData = useSelector((state) => state.showDataOnScreen.list.count);
  const {
    data: resturants,
    loading,
    error,
  } = useSelector((state) => state.resturants.list);

  useEffect(() => {
    dispatch(resturantList());
  }, [dispatch]);

  const filteredOrders = resturants.filter((order) => {
    if (activeTab === "All Orders") return true;
    return order.status?.toLowerCase() === activeTab.toLowerCase();
  });

  return (
    <section className={styles.pageWrapper}>
      <div className={styles.patternOverlay}></div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* HEADER */}
        <header className="mb-10">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-red-600 to-red-500 p-3 rounded-xl shadow-md">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={styles.mainTitle}>Order History</h1>
              <p className="text-gray-600 font-medium">
                Track and manage your recent orders
              </p>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {[
              ["Total Orders", resturants.length, "text-gray-900"],
              [
                "Delivered",
                Math.floor(resturants.length * 0.8),
                "text-emerald-600",
              ],
              [
                "In Progress",
                Math.floor(resturants.length * 0.15),
                "text-orange-500",
              ],
              [
                "Cancelled",
                Math.floor(resturants.length * 0.05),
                "text-red-600",
              ],
            ].map(([label, value, color]) => (
              <div
                key={label}
                className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className={`text-2xl font-bold ${color}`}>{value}</div>
                <div className="text-sm text-gray-600 mt-1 font-medium">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </header>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* FILTER (Top on mobile, Sidebar on desktop) */}
          <aside className="w-full lg:w-72">
            <div className="bg-white rounded-xl border border-gray-200 p-4 lg:p-6 shadow-sm lg:sticky lg:top-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 hidden lg:block">
                Filter Orders
              </h3>

              <FilterOrder
                categories={categories}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
          </aside>

          {/* ORDER LIST */}
          <main className="flex-1 w-full">
            {loading ? (
              <div className="flex justify-center py-20">
                <div className={styles.spinner}></div>
              </div>
            ) : error ? (
              <div className="bg-white border border-red-200 rounded-xl p-8 text-center">
                <p className="text-red-600 font-semibold">
                  Failed to load orders.
                </p>
              </div>
            ) : filteredOrders.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center border border-gray-200 shadow-sm">
                <div className="text-5xl mb-4">📦</div>
                <h3 className="text-xl font-bold text-gray-900">
                  No Orders Found
                </h3>
                <p className="text-gray-600 mt-1">
                  Orders matching this filter will appear here
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-5">
                  {filteredOrders.slice(0, showData).map((order) => (
                    <OrderCard key={order.id} order={order} />
                  ))}
                </div>

                {filteredOrders.length > showData && (
                  <div className="flex justify-center mt-12">
                    <button
                      onClick={() => dispatch(increment())}
                      className="
                        px-10 py-4 rounded-xl font-semibold
                        bg-white border border-gray-200
                        hover:border-red-300 hover:text-red-600
                        hover:shadow-md transition-all
                      "
                    >
                      Load More Orders
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}
