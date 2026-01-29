"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/homeLayoutCss/banner/banner.module.css";

export default function Banner() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = ["/videos/banner/banner1.mp4", "/videos/banner/banner2.mp4"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroContainer}>
      {/* BACKGROUND VIDEOS */}
      {videos.map((video, index) => (
        <video
          key={index}
          autoPlay
          muted
          loop
          playsInline
          className={`${styles.bgVideo} transition-opacity duration-1000 ${
            currentVideo === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ position: "absolute" }}
        >
          <source src={video} type="video/mp4" />
        </video>
      ))}

      {/* OVERLAY FOR CONTRAST */}
      <div className={styles.overlay}></div>

      {/* CENTERED CONTENT */}
      <div className="max-w-[1320px] mx-auto px-5 w-full relative z-20">
        <div className="flex flex-col items-center text-center">
          <div className={`${styles.glassBadge} ${styles.fadeInUp}`}>
            <Image
              src="/images/banner/fast-delivery.png"
              alt="delivery"
              width={20}
              height={20}
            />
            <span className="uppercase tracking-[2px]">
              Free delivery on first order
            </span>
          </div>

          <h1 className={`${styles.heroTitle} ${styles.fadeInUp}`}>
            <span className={styles.textAccent}>Hungry?</span>
            <br />
            Order Food From Top Restaurants
          </h1>

          <p className={`${styles.heroSubText} ${styles.fadeInUp}`}>
            Savor the finest cuts and premium flavors delivered straight to your
            table. Fresh, hot, and exactly what you've been craving.
          </p>

          <div className={`flex gap-6 max-md:flex-col ${styles.fadeInUp}`}>
            <Link href="#" className={styles.btnPrimary}>
              Order Now
            </Link>

            <Link href="/pages/resturantList" className={styles.btnGlass}>
              Explore Restaurants
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
