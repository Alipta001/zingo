import Image from "next/image";
import styles from "../../../styles/homeLayoutCss/preferedPicks/preferedPicks.module.css";

const PreferedPicks = () => {
  const picks = [
    {
      id: 1,
      title: "Best Biryani Places",
      count: "87+",
      rating: "4.2",
      time: "20-30 Mins",
      img: "/images/preferedPicks/biriyani.png",
    },
    {
      id: 2,
      title: "Budget Meals Under ₹200",
      count: "20+",
      rating: "3.5",
      time: "25-35 Mins",
      img: "/images/preferedPicks/burger.png",
    },
    {
      id: 3,
      title: "Top Veg Restaurants",
      count: "56+",
      rating: "3.9",
      time: "30-40 Mins",
      img: "/images/preferedPicks/veg.png",
    },
    {
      id: 4,
      title: "Most Loved Cafes",
      count: "24+",
      rating: "4.7",
      time: "15-20 Mins",
      img: "/images/preferedPicks/cafeburger.png",
    },
  ];

  return (
    <section className="py-[100px] max-sm:py-[60px]">
      <div className="max-w-[1320px] mx-auto px-5">
        {/* Heading */}
        <div className={`${styles.fadeInDown} text-center mb-[60px]`}>
          <h2 className="text-[36px] max-sm:text-[26px] font-extrabold text-[#1a1a1a] tracking-[-1px] mb-3">
            45+ Rated restaurants picked for you
          </h2>
          <div className="w-[50px] h-[4px] bg-[#DC2625] mx-auto rounded-full shadow-[0_2px_10px_rgba(220,38,37,0.3)]" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-4 max-[1100px]:grid-cols-2 max-sm:grid-cols-1 gap-[30px]">
          {picks.map((item) => (
            <article
              key={item.id}
              className={`${styles.fadeInUp} bg-white rounded-[28px] border border-black/5 overflow-hidden transition-all duration-500 hover:-translate-y-[15px] hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]`}
            >
              {/* Image */}
              <div className={`${styles.cardImage} h-[220px] max-sm:h-[180px]`}>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className={styles.cardImg}
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
                />
                <div className={styles.overlay} />
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <h3 className="text-[20px] font-bold text-[#111827] min-h-[48px] leading-[1.2] mb-5 transition-colors group-hover:text-[#DC2625]">
                  {item.title}
                </h3>

                <div className="flex flex-col gap-3 pt-4 border-t border-[#f3f4f6]">
                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#6b7280] font-medium">
                      Restaurants:
                    </span>
                    <strong className="text-[#1f2937] font-bold">
                      {item.count}
                    </strong>
                  </div>

                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#6b7280] font-medium">
                      Avg Rating:
                    </span>
                    <span className="bg-[#fffae6] text-[#b45309] px-[10px] py-[4px] rounded-[8px] font-extrabold text-[12px] border border-[#fef3c7]">
                      {item.rating} ★
                    </span>
                  </div>

                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#6b7280] font-medium">
                      Delivery Time:
                    </span>
                    <strong className="text-[#1f2937] font-bold">
                      {item.time}
                    </strong>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreferedPicks;
