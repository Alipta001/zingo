// "use client";
// import Image from "next/image";
// import styles from "../../../styles/resturantPage/resDetailGallery/resDetailGallery.module.css";
// import { BaseURL } from "@/app/api/axios/axios";

// interface ResDetailGalleryProps {
//   images: { id: number; image: string }[];
// }

// export default function ResDetailGallery({ images }: ResDetailGalleryProps) {
//   if (!images || images.length === 0) return null;

//   const mainImage = `${BaseURL}${images[0].image}`;
//   const sideImages = images.slice(1); // all other images

//   return (
//     <section
//       className="grid grid-cols-1 md:grid-cols-4 gap-[15px] my-[28px] animate-fadeIn"
//       aria-label="Restaurant Gallery"
//     >
//       {/* Main Image */}
//       <div className="relative overflow-hidden rounded-[14px] col-span-1 md:col-span-2 row-span-2 aspect-square md:aspect-auto min-h-[300px]">
//         <Image
//           src={mainImage}
//           alt="Dining area at the restaurant"
//           fill
//           priority
//           sizes="(max-width: 768px) 100vw, 50vw"
//           className={`object-cover cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl ${styles.galleryImg}`}
//         />
//       </div>

//       {/* Dynamic Side Images */}
//       {sideImages.map((img, idx) => {
//         // For first 2 side images -> stack vertically in middle column
//         if (idx < 2) {
//           return (
//             <div
//               key={img.id}
//               className="relative overflow-hidden rounded-[14px] h-1/2 min-h-[150px]"
//             >
//               <Image
//                 src={`${BaseURL}${img.image}`}
//                 alt={`Restaurant image ${idx + 2}`}
//                 fill
//                 sizes="(max-width: 768px) 50vw, 25vw"
//                 className={`object-cover cursor-pointer transition-all duration-500 hover:scale-105 ${styles.galleryImg}`}
//               />
//             </div>
//           );
//         }

//         // For the 3rd side image -> right-most large image
//         if (idx === 2) {
//           return (
//             <div
//               key={img.id}
//               className="relative overflow-hidden rounded-[14px] row-span-2 hidden md:block"
//             >
//               <Image
//                 src={`${BaseURL}${img.image}`}
//                 alt={`Restaurant large side image`}
//                 fill
//                 sizes="25vw"
//                 className={`object-cover cursor-pointer transition-all duration-500 hover:scale-105 ${styles.galleryImg}`}
//               />
//             </div>
//           );
//         }

//         // For remaining images -> show below main grid in a scrollable row
//         return (
//           <div
//             key={img.id}
//             className="relative overflow-hidden rounded-[14px] w-[150px] h-[150px] mt-[15px] flex-shrink-0"
//           >
//             <Image
//               src={`${BaseURL}${img.image}`}
//               alt={`Restaurant extra image ${idx + 1}`}
//               fill
//               sizes="150px"
//               className={`object-cover cursor-pointer transition-all duration-500 hover:scale-105 ${styles.galleryImg}`}
//             />
//           </div>
//         );
//       })}

//       {/* Optional: Wrap remaining images in horizontal scroll container */}
//       {sideImages.length > 3 && (
//         <div className="flex gap-[15px] overflow-x-auto mt-[15px] col-span-4">
//           {sideImages.slice(3).map((img, idx) => (
//             <div
//               key={img.id}
//               className="relative w-[150px] h-[150px] flex-shrink-0 rounded-[14px] overflow-hidden"
//             >
//               <Image
//                 src={`${BaseURL}${img.image}`}
//                 alt={`Restaurant extra image ${idx + 4}`}
//                 fill
//                 sizes="150px"
//                 className={`object-cover cursor-pointer transition-all duration-500 hover:scale-105 ${styles.galleryImg}`}
//               />
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }

// "use client";
// import Image from "next/image";
// import styles from "../../../styles/resturantPage/resDetailGallery/resDetailGallery.module.css";
// import { BaseURL } from "@/app/api/axios/axios";

// interface ResDetailGalleryProps {
//   images: { id: number; image: string }[];
// }

// export default function ResDetailGallery({ images }: ResDetailGalleryProps) {
//   if (!images || images.length === 0) return null;

//   const mainImage = `${BaseURL}${images[0].image}`;
//   const sideImages = images.slice(1); // all other images

//   return (
//     <section
//       className="grid grid-cols-1 md:grid-cols-4 gap-[15px] my-[28px] animate-fadeIn"
//       aria-label="Restaurant Gallery"
//     >
//       {/* Main Image */}
//       <div className="relative overflow-hidden rounded-[14px] col-span-1 md:col-span-2 row-span-2 aspect-square md:aspect-auto min-h-[300px]">
//         <Image
//           src={mainImage}
//           alt="Dining area at the restaurant"
//           fill
//           priority
//           sizes="(max-width: 768px) 100vw, 50vw"
//           className={`object-cover cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl ${styles.galleryImg}`}
//         />
//       </div>

//       {/* Dynamic Side Images */}
//       {sideImages.map((img, idx) => {
//         // For first 2 side images -> stack vertically in middle column
//         if (idx < 2) {
//           return (
//             <div
//               key={img.id}
//               className="relative overflow-hidden rounded-[14px] h-1/2 min-h-[150px]"
//             >
//               <Image
//                 src={`${BaseURL}${img.image}`}
//                 alt={`Restaurant image ${idx + 2}`}
//                 fill
//                 sizes="(max-width: 768px) 50vw, 25vw"
//                 className={`object-cover cursor-pointer transition-all duration-500 hover:scale-105 ${styles.galleryImg}`}
//               />
//             </div>
//           );
//         }

//         // For the 3rd side image -> right-most large image
//         if (idx === 2) {
//           return (
//             <div
//               key={img.id}
//               className="relative overflow-hidden rounded-[14px] row-span-2 hidden md:block"
//             >
//               <Image
//                 src={`${BaseURL}${img.image}`}
//                 alt={`Restaurant large side image`}
//                 fill
//                 sizes="25vw"
//                 className={`object-cover cursor-pointer transition-all duration-500 hover:scale-105 ${styles.galleryImg}`}
//               />
//             </div>
//           );
//         }

//         // For remaining images -> show below main grid in a scrollable row
//         return (
//           <div
//             key={img.id}
//             className="relative overflow-hidden rounded-[14px] w-[150px] h-[150px] mt-[15px] flex-shrink-0"
//           >
//             <Image
//               src={`${BaseURL}${img.image}`}
//               alt={`Restaurant extra image ${idx + 1}`}
//               fill
//               sizes="150px"
//               className={`object-cover cursor-pointer transition-all duration-500 hover:scale-105 ${styles.galleryImg}`}
//             />
//           </div>
//         );
//       })}

//       {/* Optional: Wrap remaining images in horizontal scroll container */}
//       {sideImages.length > 3 && (
//         <div className="flex gap-[15px] overflow-x-auto mt-[15px] col-span-4">
//           {sideImages.slice(3).map((img, idx) => (
//             <div
//               key={img.id}
//               className="relative w-[150px] h-[150px] flex-shrink-0 rounded-[14px] overflow-hidden"
//             >
//               <Image
//                 src={`${BaseURL}${img.image}`}
//                 alt={`Restaurant extra image ${idx + 4}`}
//                 fill
//                 sizes="150px"
//                 className={`object-cover cursor-pointer transition-all duration-500 hover:scale-105 ${styles.galleryImg}`}
//               />
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }
"use client";
import Image from "next/image";
import { BaseURL } from "@/app/api/axios/axios";

interface ResDetailGalleryProps {
  images: { id: number; image: string }[];
  name: string;
}

export default function ResDetailGallery({ images, name }: ResDetailGalleryProps) {
  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 bg-gray-100 rounded-[14px] flex items-center justify-center my-6">
        <p className="text-gray-400">No images available for {name}</p>
      </div>
    );
  }

  const getFullImageUrl = (path: string) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    const cleanBase = BaseURL.endsWith("/") ? BaseURL.slice(0, -1) : BaseURL;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${cleanBase}${cleanPath}`;
  };

  const totalImages = images.length;
  const mainImage = getFullImageUrl(images[0].image);

  return (
    <section 
      className={`grid gap-[15px] my-[28px] animate-fadeIn ${
        totalImages === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-4"
      }`}
    >
      {/* MAIN IMAGE */}
      <div
        className={`relative overflow-hidden rounded-[14px] min-h-[300px] md:min-h-[450px] ${
          totalImages === 1 ? "col-span-1" : 
          totalImages === 2 ? "md:col-span-2" : "md:col-span-2 row-span-2"
        }`}
      >
        <Image
          src={mainImage}
          alt={name}
          fill
          unoptimized
          priority
          className="object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
        />
      </div>

      {/* SECOND IMAGE (And others) */}
      {totalImages > 1 && (
        <div className={`${
          totalImages === 2 ? "md:col-span-2" : "md:col-span-1"
        } flex flex-col gap-[15px]`}>
          {images.slice(1, 3).map((img, idx) => (
            <div 
              key={img.id} 
              className={`relative overflow-hidden rounded-[14px] ${
                totalImages === 2 ? "h-full min-h-[300px] md:min-h-[450px]" : "h-[217px]"
              }`}
            >
              <Image
                src={getFullImageUrl(img.image)}
                alt={`${name} gallery ${idx}`}
                fill
                unoptimized
                className="object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      )}

      {/* FOURTH SLOT (Only for 4+ images) */}
      {totalImages >= 4 && (
        <div className="relative overflow-hidden rounded-[14px] hidden md:block row-span-2">
          <Image
            src={getFullImageUrl(images[3].image)}
            alt={name}
            fill
            unoptimized
            className="object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
          />
        </div>
      )}

      {/* FALLBACK PLACEHOLDER (To keep the height if images are missing but you want the 4-column look) */}
      {totalImages === 3 && (
        <div className="relative overflow-hidden rounded-[14px] hidden md:flex bg-gray-50 items-center justify-center border border-gray-100">
          <span className="text-gray-300 italic">Zingo Foods</span>
        </div>
      )}
    </section>
  );
}