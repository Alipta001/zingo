import Image from "next/image";
import styles from "@/styles/resturantList/resturantCard/resturantCard.module.css";
import { BaseURL } from "@/api/axios/axios";

export default function RestaurantCard({ item }: { item: any }) {
  const altText = `Dine at ${item.name} - Specializing in ${item.cuisine_type}`;

  return (
    <article
      className={`${styles.premiumCard} group flex flex-col h-full transition-all duration-500`}
      itemScope
      itemType="https://schema.org/Restaurant"
    >
      {/* IMAGE SECTION */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={`${BaseURL}${item.image}`}
          alt={altText}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-800 ease-in-out group-hover:scale-110"
          loading="lazy"
        />

        {/* Floating Tag - Glassmorphism */}
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-white/80 backdrop-blur-md border border-white/40 px-3 py-1 rounded-lg shadow-sm">
            <span className="text-[9px] font-black text-slate-800 uppercase tracking-widest">
              Available Now
            </span>
          </div>
        </div>

        {/* Floating Rating - Inline SVG (No Imports Needed) */}
        <div className="absolute bottom-4 right-4 bg-slate-900 text-white px-2.5 py-1.5 rounded-xl flex items-center gap-1.5 shadow-xl z-10">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="#fbbf24"
            stroke="#fbbf24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span className="text-xs font-black" itemProp="ratingValue">
            {item.rating}
          </span>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Header Section */}
        <header className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className={styles.labelGold}>Signature Dining</span>
            <div className="h-[1px] w-6 bg-rose-100" aria-hidden="true"></div>
          </div>

          <h3
            className={`${styles.headingOnyx} text-2xl font-[900] tracking-tighter mb-2 leading-none`}
            itemProp="name"
          >
            {item.name}
          </h3>

          <p
            className="text-xs font-semibold text-slate-500 tracking-wide"
            itemProp="servesCuisine"
          >
            {item.cuisine_type?.split(",").slice(0, 3).join(" • ")}
          </p>
        </header>

        {/* Detail Grid */}
        <footer className="mt-auto grid grid-cols-2 gap-6 pt-5 border-t border-slate-50">
          <div className="space-y-1">
            <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              Estimation
            </span>
            <p className="text-sm font-black text-slate-800">
              ₹{item.price_for_two || 450}
              <span className="text-[10px] text-slate-400 font-medium lowercase">
                {" "}
                / 2 people
              </span>
            </p>
          </div>

          <div className="space-y-1 text-right">
            <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              Arrival
            </span>
            <div className="flex items-center justify-end gap-1.5">
              {/* Clock Inline SVG */}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#be123c"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <p className="text-sm font-black text-slate-800 tracking-tighter">
                25-35 MINS
              </p>
            </div>
          </div>
        </footer>

        {/* Subtle Interactive Footer */}
        <div className="mt-6 flex items-center justify-between group-hover:translate-x-1 transition-transform cursor-pointer">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-900/60">
            Explore Menu
          </span>
          <div
            className="h-px flex-1 mx-4 bg-rose-100/50"
            aria-hidden="true"
          ></div>
          {/* ChevronRight Inline SVG */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9f1239"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6"></path>
          </svg>
        </div>
      </div>
    </article>
  );
}
