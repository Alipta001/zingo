"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "../../../styles/homeLayoutCss/searchedSection/searchedSection.module.css";

// --- COUNTUP COMPONENT ---
function CountUp({ end, duration = 2000 }: { end: string; duration?: number }) {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const [count, setCount] = useState(0);

  const endNumber = parseInt(end.replace(/[^0-9]/g, ""));
  const suffix = end.replace(/[0-9]/g, "");

  useEffect(() => {
    const target = spanRef.current;
    if (!target) return;

    let intervalId: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (intervalId) clearInterval(intervalId);

          if (entry.isIntersecting) {
            setCount(0);
            let current = 0;
            const stepTime = Math.abs(duration / endNumber);

            intervalId = setInterval(() => {
              current += 1;
              if (current >= endNumber) {
                setCount(endNumber); 
                if (intervalId) clearInterval(intervalId);
              } else {
                setCount(current);
              }
            }, stepTime);
          } else {
            setCount(0);
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(target);

    return () => {
      if (intervalId) clearInterval(intervalId);
      observer.disconnect();
    };
  }, [endNumber, duration]);

  return (
    <span ref={spanRef}>
      {count}
      {suffix}
    </span>
  );
}

// --- MAIN SECTION ---
export default function SearchedSection() {
  const cards = [
    {
      id: 1,
      number: "100+",
      text: "Restaurants delivering right now",
      img: "/images/searchedSection/delivering-food.png",
      delay: "0.1s",
      color: "from-[#dc2625] to-[#f87171]",
    },
    {
      id: 2,
      number: "50+",
      text: "Top Offers from popular food brands",
      img: "/images/searchedSection/discount.png",
      delay: "0.2s",
      color: "from-[#f59e0b] to-[#fbbf24]",
    },
    {
      id: 3,
      number: "45+",
      text: "Rated Restaurants curated for you",
      img: "/images/searchedSection/star.png",
      delay: "0.3s",
      color: "from-[#10b981] to-[#34d399]",
    },
  ];

  return (
    <section className="py-24  overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Because You Searched{" "}
            <span className="text-red-600 relative">Kolkata</span>
          </h2>
          <div className="mt-4 flex items-center gap-4">
            <span className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.3em] text-rose-900/60 leading-relaxed">
              Over{" "}
              <span className="text-rose-800 font-black border-b border-rose-200 pb-0.5">
                100+ Venues
              </span>{" "}
              Curated for Fast Food Delivery in Kolkata
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`${styles.cardWrapper} ${styles.animateFadeUp}`}
              style={{ animationDelay: card.delay }}
            >
              <div className="group relative bg-white rounded-3xl p-10 h-full border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span
                      className={`block text-6xl font-extrabold bg-gradient-to-r ${card.color} bg-clip-text text-transparent mb-4`}
                    >
                      <CountUp end={card.number} />
                    </span>
                    <p className="text-lg font-medium text-gray-700 leading-snug">
                      {card.text}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-12">
                    <button className="text-sm font-semibold uppercase tracking-widest text-gray-900 flex items-center gap-2 group-hover:text-red-600 transition-colors">
                      View All
                      <svg
                        className="w-5 h-5 transition-transform group-hover:translate-x-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>

                    <img
                      src={card.img}
                      alt="icon"
                      className="w-16 lg:w-20 h-auto transition-all duration-700 group-hover:scale-110 group-hover:-rotate-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
