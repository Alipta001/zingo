import Image from "next/image";
import styles from "../../../styles/homeLayoutCss/nearbyFoods/nearbyFoods.module.css";

export default function NearbyFoods() {
  const nearbyPlaces = [
    {
      id: 1,
      name: "Mutton Biryani",
      price: "₹199 for one",
      rating: "4.7",
      time: "25-30 Mins",
      badge: "Trending",
      image: "/images/nearbyFoods/food1.png",
    },
    {
      id: 2,
      name: "Darjelling Momo",
      price: "₹250 for two",
      rating: "4.7",
      time: "25-30 Mins",
      badge: "Free Delivery",
      image: "/images/nearbyFoods/gullymomo.png",
    },
    {
      id: 3,
      name: "Wrap King",
      price: "₹199 for one",
      rating: "4.0",
      time: "15-20 Mins",
      badge: "Must Try",
      image: "/images/nearbyFoods/wrapking.png",
    },
    {
      id: 4,
      name: "Chinese Noodles",
      price: "₹400 for two",
      rating: "3.7",
      time: "30-40 Mins",
      badge: "Top Rated",
      image: "/images/nearbyFoods/chowmein.png",
    },
  ];

  return (
    <section
      className="py-20 bg-[#fff8f8] 
  bg-[radial-gradient(circle_at_0%_0%,rgba(226,38,37,0.08)_0%,transparent_40%),radial-gradient(circle_at_100%_100%,rgba(159,18,57,0.06)_0%,transparent_40%),linear-gradient(180deg,#fffcfc_0%,#fff5f5_100%)]"
    >
      <div className="max-w-[1320px] mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[36px] font-extrabold text-[#1a1a1a] tracking-[-1.5px]">
            Best selling items
          </h2>
        </div>

        {/* Grid */}
        <div className="flex flex-wrap -mx-3">
          {nearbyPlaces.map((place, index) => (
            <div
              key={place.id}
              className={`w-1/4 px-3 mb-8 max-md:w-1/2 ${styles.fadeUp}`}
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              <div className="bg-white rounded-[24px] border border-black/5 overflow-hidden h-full relative transition-all duration-500 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-[15px] hover:scale-[1.03] hover:shadow-[0_25px_50px_-12px_rgba(220,38,37,0.15)] hover:border-[rgba(220,38,37,0.2)]">
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden">
                  <span className="absolute top-[15px] left-[15px] bg-[#DC2625] text-white px-[14px] py-[6px] rounded-full text-[11px] font-extrabold uppercase tracking-wide shadow-[0_4px_10px_rgba(220,38,37,0.4)] transition-transform duration-300 group-hover:scale-110 z-10">
                    {place.badge}
                  </span>

                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,1,0.3,1)] hover:scale-110 hover:rotate-[1deg]"
                  />
                </div>

                {/* Content */}
                <div className="px-5 pt-5 pb-3">
                  <h3 className="text-[20px] font-extrabold text-[#111827] tracking-[-0.5px] transition-colors duration-300 hover:text-[#DC2625]">
                    {place.name}
                  </h3>
                  <p className="text-[14px] text-[#6b7280] font-medium mt-1">
                    {place.price}
                  </p>
                </div>

                {/* Footer */}
                <div className="px-5 py-4 border-t border-[#f3f4f6] flex justify-between items-center">
                  <div className="flex items-center gap-1 text-white text-[13px] font-extrabold px-3 py-1 rounded-[10px] bg-gradient-to-br from-[#22c55e] to-[#16a34a] shadow-[0_4px_10px_rgba(34,197,94,0.2)]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 1L12.5 7H19L14 11L15.5 18L10 14L4.5 18L6 11L1 7H7.5L10 1Z" />
                    </svg>
                    {place.rating}
                  </div>

                  <div className="flex items-center gap-1 text-[13px] font-bold text-[#4b5563] bg-[#f9fafb] px-3 py-1 rounded-[8px]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    {place.time}
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
