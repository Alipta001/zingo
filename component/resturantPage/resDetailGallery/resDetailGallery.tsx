import Image from "next/image";
import styles from "../../../styles/resturantPage/resDetailGallery/resDetailGallery.module.css";

export default function ResDetailGallery() {
  /* const images = [
    { src: "/images/resturants/momo.png", alt: "Dining area", wrapperClass: "col-span-1 md:col-span-2 row-span-2" },
    { src: "/images/resturants/pizza.png", alt: "Salad", wrapperClass: "hidden md:col-span-1 row-span-2 md:block" },
    { src: "/images/resturants/icecream.png", alt: "Cake", wrapperClass: "hidden md:block" },
    { src: "/images/resturants/burger.png", alt: "Burger", wrapperClass: "hidden md:block" },
  ];
 */
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-4 gap-[15px] my-[28px] animate-fadeIn"
      aria-label="Restaurant Gallery"
    >
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-[14px] col-span-1 md:col-span-2 row-span-2 aspect-square md:aspect-auto min-h-[300px]">
        <Image
          src="/images/resturants/momo.png"
          alt="Dining area at the restaurant"
          fill
          priority // High priority for LCP (Largest Contentful Paint)
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl ${styles.galleryImg}`}
        />
      </div>

      {/* Middle Column (Stacked Side Images) */}
      <div className="flex flex-col gap-[15px]">
        <div className="relative overflow-hidden rounded-[14px] h-1/2 min-h-[150px]">
          <Image
            src="/images/resturants/burger.png"
            alt="Delicious beef burger"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className={`object-cover cursor-pointer transition-all duration-500 hover:scale-105 ${styles.galleryImg}`}
          />
        </div>
        <div className="relative overflow-hidden rounded-[14px] h-1/2 min-h-[150px]">
          <Image
            src="/images/resturants/icecream.png"
            alt="Dessert cake and ice cream"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className={`object-cover cursor-pointer transition-all duration-500 hover:scale-105 ${styles.galleryImg}`}
          />
        </div>
      </div>

      {/* Right-most Large Image */}
      <div className="relative overflow-hidden rounded-[14px] row-span-2 hidden md:block">
        <Image
          src="/images/resturants/pizza.png"
          alt="Fresh garden salad"
          fill
          sizes="25vw"
          className={`object-cover cursor-pointer transition-all duration-500 hover:scale-105 ${styles.galleryImg}`}
        />
      </div>
    </section>
  );
}
