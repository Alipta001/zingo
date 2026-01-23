// import Image from "next/image";
// import Link from "next/link";
// import "../../styles/banner/banner.css";

// export default function Banner() {
//   return (
//     <section className="banner-sec">
//       {/* This creates the pink curved background seen in the image */}
//       {/* <div className="banner-bg-shape"></div> */}

//       <div className="container">
//         <div className="banner-row">
          
//           {/* LEFT CONTENT */}
//           <div className="banner-col-left">
//             <div className="banner-content">
//               <div className="banner-badge">
//                 <div className="delivery-badge">
//                   <img 
//                     src="/images/banner/fast-delivery.png" 
//                     alt="delivery" 
//                     width={20} 
//                     height={20} 
//                   />
//                   <span className="delivery-txt">Free Delivery On First Order</span>
//                 </div>
//               </div>

//               <h1 className="banner-title">
//                 <span className="text-red">Hungry?</span><br />
//                 We are on the way
//               </h1>

//               <p className="discover-txt">
//                 Discover top-rated restaurants, fast delivery, and 
//                 meals that make every craving count.
//               </p>

//               <div className="banner-btn-group">
//                 <Link className="order-btn" href="#">Order Now</Link>
//                 <Link className="explore-btn" href="#">Explore Restaurants</Link>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT IMAGE SECTION */}
//           <div className="banner-col-right">
//             <div className="banner-bg-shape"></div>
//             <div className="image-container">
//               {/* The Dotted Decorative Circle */}
              
//               {/* Main Food Image */}
//               <div className="main-food-img">
//                 <img 
//                   src="/images/banner/biriyani.png" 
//                   alt="Biryani Bowl" 
//                   width={500} 
//                   height={500}
//                 />
//               </div>
              
//               {/* You can add small floating dish icons here later to match the dots */}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import Link from 'next/link';
import "../../../styles/homeLayoutCss/banner/banner.css";
import Image from 'next/image';

export default function Banner() {
  return (
    <section className="banner-sec">
      <div className="container">
        <div className="banner-row">
          
          {/* Content Column */}
          <div className="banner-col-text">
            <div className="banner-badge">
              <div className="delivery-badge">
                <img src="/images/banner/fast-delivery.png" alt="delivery" width={20} height={20} />
                <span className="delivery-txt">free delivery on first order</span>
              </div>
            </div>
            <h1 className="banner-title">
               <span className="text-red">Hungry?</span><br />
               we are on the way
            </h1>
            <p className="discover-txt">
              Discover top-rated restaurants, fast delivery, and meals that
              make every craving count.
            </p>
            <div className="banner-btn-group">
              <Link className="order-btn" href="#">Order Now</Link>
              <Link className="explore-btn" href="#">Explore Restaurants</Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="banner-col-img">
            <div className="banner-img-relative">
              {/* Pink Circle Background */}
              <div className="banner-circle-bg"></div>
              {/* Main Food Graphic */}
              <Image src="/images/banner/banner-image.png" alt="food" width={500} height={500} className="banner-hero-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}