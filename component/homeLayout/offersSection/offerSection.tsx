"use client";
import { useState, useEffect } from "react";
import styles from "../../../styles/homeLayoutCss/offerSection/offerSection.module.css";

export default function OfferSection() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    "/videos/offerSection/offer1.mp4",
    "/videos/offerSection/offer4.mp4",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 sm:py-20 lg:py-[120px] overflow-visible">
      <div className="max-w-[1320px] mx-auto px-4">
        <div
          className="relative flex items-center min-h-[400px] rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] 
                     shadow-[0_20px_40px_-10px_rgba(220,38,37,0.3)] sm:shadow-[0_40px_80px_-20px_rgba(220,38,37,0.3)]
                     bg-[linear-gradient(135deg,#FF3D3D_0%,#FFB119_100%)]
                     max-[1100px]:flex-col max-[1100px]:text-center max-[1100px]:p-6 sm:max-[1100px]:p-10"
        >
          {/* LEFT CONTENT - 40% */}
          <div className="relative z-10 px-5 sm:px-8 lg:px-10 max-[1100px]:px-0 w-full lg:w-[40%]">
            {/* Badge */}
            <div className="inline-block bg-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-5 shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
              <span className="text-[#DC2625] font-black text-[10px] sm:text-[12px] tracking-widest">
                ❄️ LIMITED OFFER
              </span>
            </div>

            {/* Title */}
            <h2 className="text-white text-[32px] sm:text-[42px] lg:text-[54px] font-black leading-none tracking-[-1px] sm:tracking-[-2px] mb-4 sm:mb-5">
              Winter <br />
              <span className="text-[#1a1a1a] opacity-90">Warmth Special</span>
            </h2>

            {/* Description */}
            <p className="text-white text-sm sm:text-base lg:text-lg opacity-90 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
              Experience the joy of steaming hot meals.{" "}
              <br className="hidden sm:block" />
              Fresh. Hot. Delivered in 20 mins.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-3 sm:gap-5 max-[1100px]:flex-col max-[1100px]:justify-center">
              {/* Promo Code */}
              <div
                className="flex flex-col px-4 sm:px-5 py-2 sm:py-2.5 rounded-[12px] sm:rounded-[15px] border-2 border-dashed border-white/50
                           backdrop-blur-md bg-[rgba(255,255,255,0.15)]
                           max-[1100px]:w-full"
              >
                <small className="text-white text-[9px] sm:text-[10px] font-bold opacity-80">
                  USE CODE
                </small>
                <span className="text-white text-lg sm:text-xl font-black">
                  WINTER25
                </span>
              </div>

              {/* Button */}
              <button
                className="flex items-center gap-2 sm:gap-3 bg-[#111827] text-white font-extrabold text-sm sm:text-base
                           px-6 sm:px-9 py-3 sm:py-[18px] rounded-[15px] sm:rounded-[18px]
                           transition-all duration-400
                           hover:scale-105 hover:translate-x-2 hover:bg-black
                           max-[1100px]:w-full justify-center hover:cursor-pointer"
              >
                Order Now
                <svg
                  width="16"
                  height="16"
                  className="sm:w-5 sm:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT VIDEO SECTION - 60% */}
          <div
            className="relative w-full lg:w-[60%] flex justify-center 
                          min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] 
                          mt-6 lg:mt-0 overflow-hidden
                          rounded-[20px] sm:rounded-[24px] lg:rounded-tr-[50px] lg:rounded-br-[50px] lg:rounded-tl-none lg:rounded-bl-none"
          >
            {videos.map((video, index) => (
              <video
                key={index}
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className={`absolute inset-0 w-full h-full object-cover 
                           transition-opacity duration-1000
                           ${currentVideo === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              />
            ))}

            {/* Video Indicators */}
            <div className="absolute bottom-3 sm:bottom-5 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideo(index)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300
                             ${
                               currentVideo === index
                                 ? "bg-white w-6 sm:w-8"
                                 : "bg-white/50 hover:bg-white/75"
                             }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
