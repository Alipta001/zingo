// "use client";
// import "../../../styles/resturantPage/resDetailHeader/resDetailHeader.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons"; // filled
// import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons"; // outline
// import {
//   faDirections,
//   faShareAlt,
//   faQuoteLeft,
// } from "@fortawesome/free-solid-svg-icons";

// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "next/navigation";
// import { useEffect } from "react";
// import { fetchResturantById } from "@/redux/slice/resturantSlice";

// export default function ResDetailHeader() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const {
//     data: restaurantDetails,
//     loading,
//     error,
//   } = useSelector((state) => state.resturants.details);

//   useEffect(() => {
//     dispatch(fetchResturantById(id));
//   }, [dispatch, id]);

//   if (loading) return <p>Loading restaurants...</p>;
//   if (error) return <p>{error}</p>;

//   // Function to render stars
//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating); // number of full stars
//     const emptyStars = 5 - fullStars;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(
//         <FontAwesomeIcon
//           key={`full-${i}`}
//           icon={solidStar}
//           className="star filled"
//         />,
//       );
//     }
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(
//         <FontAwesomeIcon
//           key={`empty-${i}`}
//           icon={regularStar}
//           className="star empty"
//         />,
//       );
//     }
//     return stars;
//   };

//   return (
//     <>
//       <section className="res-header">
//         <div className="res-title-info">
//           <h1>{restaurantDetails.name}</h1>
//           <p className="cuisines">{restaurantDetails.cuisine_type}</p>
//           <p className="address">{restaurantDetails.address}</p>

//           <div className="res-meta">
//             <span className="status">Open Now</span>
//             <span className="timing">2pm - 11:30pm (Today)</span>
//             <span className="cost">| ₹400 For Two</span>
//           </div>

//           <div className="res-actions">
//             <button
//               className="btn-action"
//               onClick={() =>
//                 window.open(
//                   `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//                     restaurantDetails.address,
//                   )}`,
//                   "_blank",
//                 )
//               }
//             >
//               <FontAwesomeIcon icon={faDirections} /> Direction
//             </button>
//             <button className="btn-action">
//               <FontAwesomeIcon icon={faShareAlt} /> Share
//             </button>
//             <button className="btn-action">
//               <FontAwesomeIcon icon={faQuoteLeft} /> Reviews
//             </button>
//           </div>
//         </div>

//         <div className="res-rating-summary">
//           <div className="rating-badge green">
//             <div className="stars">{renderStars(restaurantDetails.rating)}</div>
//             <small>{restaurantDetails.rating} Dining Ratings</small>
//           </div>
//           <div className="rating-badge yellow">
//             <div className="stars">{renderStars(restaurantDetails.rating)}</div>
//             <small>{restaurantDetails.rating} Delivery Ratings</small>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


"use client";
import "../../../styles/resturantPage/resDetailHeader/resDetailHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faDirections, faShareAlt, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { fetchResturantById } from "@/redux/slice/resturantSlice";

export default function ResDetailHeader({ initialData }: { initialData: any }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  // Use Redux data if available, otherwise fall back to Server data
  const { data: reduxData, loading } = useSelector((state: any) => state.resturants.details);
  const restaurantDetails = Object.keys(reduxData).length > 0 ? reduxData : initialData;

  useEffect(() => {
    if (id) dispatch(fetchResturantById(id));
  }, [dispatch, id]);

  const renderStars = (rating: number) => {
    const stars = [];
    const val = rating || 0;
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i <= Math.floor(val) ? solidStar : regularStar}
          className={i <= Math.floor(val) ? "star filled" : "star empty"}
        />
      );
    }
    return stars;
  };

  if (!restaurantDetails) return null;

  return (
    <section className="res-header">
      <div className="res-title-info">
        <h1>{restaurantDetails.name}</h1>
        <p className="cuisines">{restaurantDetails.cuisine_type}</p>
        <p className="address">{restaurantDetails.address}</p>

        <div className="res-meta">
          <span className="status">Open Now</span>
          <span className="timing">2:00pm - 11:30pm (Today)</span>
          <span className="cost">| ₹{restaurantDetails.cost_for_two || "400"} For Two</span>
        </div>

        <div className="res-actions">
          <button className="btn-action" onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantDetails.address)}`, "_blank")}>
            <FontAwesomeIcon icon={faDirections} /> Direction
          </button>
          <button className="btn-action"><FontAwesomeIcon icon={faShareAlt} /> Share</button>
          <button className="btn-action"><FontAwesomeIcon icon={faQuoteLeft} /> Reviews</button>
        </div>
      </div>

      <div className="res-rating-summary">
        <div className="rating-badge green">
          <div className="stars">{renderStars(restaurantDetails.rating)}</div>
          <small>{restaurantDetails.rating || "0"} Dining Ratings</small>
        </div>
        <div className="rating-badge yellow">
          <div className="stars">{renderStars(restaurantDetails.rating)}</div>
          <small>{restaurantDetails.rating || "0"} Delivery Ratings</small>
        </div>
      </div>
    </section>
  );
}