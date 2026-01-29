"use client";
import React from "react";
import styles from "../../../styles/homeLayoutCss/howItWorks/howItWorks.module.css";

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Choose Food",
      desc: "Browse thousands of restaurants and pick your favorites",
      icon: "/images/howItWorks/food.png",
    },
    {
      id: "02",
      title: "Place Order",
      desc: "Complete your order securely using payment options",
      icon: "/images/howItWorks/order.png",
    },
    {
      id: "03",
      title: "Live Tracking",
      desc: "Track your order in real-time from kitchen to doorstep",
      icon: "/images/howItWorks/location.png",
    },
    {
      id: "04",
      title: "Fast Delivery",
      desc: "Enjoy hot and fresh food delivered straight to your door",
      icon: "/images/howItWorks/delivery.png",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 relative">
        <div className="text-center mb-20">
          <span className="text-[#e23744] font-extrabold uppercase tracking-[3px] text-sm mb-3 block">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight">
            How it <span className="text-[#e23744]">Works</span>
          </h2>
        </div>

        <div
          className={`relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ${styles.animateFadeUp}`}
        >
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-[22%] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[#ff1500] z-0 ${styles.animateFadeUp}" />

          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`group relative flex flex-col items-center text-center z-10`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* <div className="hidden lg:block absolute top-[22%] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[#ff1500] z-0" /> */}

              <div className="relative mb-8 flex items-center justify-center">
                {/* Step Number Badge */}
                <span className="absolute -top-1 -right-1 w-9 h-9 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center font-bold text-xs border-[3px] border-white z-20 group-hover:bg-[#e23744] transition-all duration-300">
                  {step.id}
                </span>

                {/* THE BLOB CONTAINER */}
                <div className={styles.blobShape}>
                  <img
                    src={step.icon}
                    alt={step.title}
                    /* FILTERS REMOVED: Now the original image shows properly on hover */
                    className="w-20 h-20 object-contain relative z-10 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-[#1a1a1a] mb-3 group-hover:text-[#e23744] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed max-w-[210px] font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
