"use client";
import React, { useEffect } from "react";
import styles from "../../styles/orderPage/resturant.module.css";
import { useDispatch, useSelector } from "react-redux";
import { resturantList } from "@/redux/slice/resturantSlice";
import { BaseURL } from "@/api/axios/axios";
import { increment } from "@/redux/slice/showSlice";

const categories = ["All Orders", "On The Way", "Delivered", "Cancelled"];

export default function OrderHistory() {
  const dispatch = useDispatch();
  const showData = useSelector((state) => state.showDataOnScreen.list.count);
  const {
    data: resturants,
    loading,
    error,
  } = useSelector((state) => state.resturants.list);
  useEffect(() => {
    dispatch(resturantList());
  }, [dispatch]);
  return (
    <section className={styles.orderSec}>
      <div className={styles.container}>
        <h2 className={styles.title2}>My Orders</h2>

        <div className={styles.layoutWrapper}>
          {/* Sidebar / Horizontal Scroll Filter */}
          <aside className={styles.filterSection}>
            <h3 className={styles.sidebarTitle}>Filters</h3>
            <div className={styles.filterScrollContainer}>
              {categories.map((cat, i) => (
                <label key={cat} className={styles.filterPill}>
                  <input
                    type="radio"
                    name="orderFilter"
                    defaultChecked={i === 0}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </aside>

          {/* Main Order List */}
          <main className={styles.orderList}>
            {resturants.slice(0, showData).map((item) => (
              <div className={styles.orderBox} key={item.id}>
                <div className={styles.orderRow}>
                  <div className={styles.itemInfo}>
                    <img
                      src={`${BaseURL}/${item.image}`}
                      className={styles.orderImg}
                      alt={item.name}
                    />
                    <div className={styles.orderDetails}>
                      <h4 className={styles.title4}>{item.name}</h4>
                      <p className={styles.addressText}>{item.address}</p>
                      <p className={styles.timeText}>{item.time}</p>
                    </div>
                  </div>

                  <div className={styles.orderActions}>
                    <button className={styles.rateBtn}>Rate Order</button>
                    <button className={styles.reorderBtn}>Reorder</button>
                  </div>
                </div>

                <div className={styles.deliveryRow}>
                  <div className={styles.statusWrap}>
                    <span
                      className={`${styles.statusDot} ${item.type === "cancelled" ? styles.dotRed : styles.dotGreen}`}
                    ></span>
                    <p className={styles.deliveryStatus}>{item.status}</p>
                  </div>
                  <button className={styles.viewBtn}>View Details</button>
                </div>
              </div>
            ))}
            <div className={styles.loadMoreWrapper}>
              <button
                className={styles.loadMoreBtn}
                onClick={() => dispatch(increment())}
              >
                Show Previous Orders
              </button>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
