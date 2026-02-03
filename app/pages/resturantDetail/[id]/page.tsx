// import React from "react";
// import Navbar from "@/component/globalLayout/navbar/navbar";
// import ResDetailHeader from "@/component/resturantPage/resDetailHeader/resDetailHeader";
// import ResDetailGallery from "@/component/resturantPage/resDetailGallery/resDetailGallery";
// import ResDetailTabs from "@/component/resturantPage/resDetailTabs/resDetailTabs";
// import ResDetailMenu from "@/component/resturantPage/resDetailMenu/resDetailMenu";
// import ResDetailSideBar from "@/component/resturantPage/resDetailSideBar/resDetailsideBar";
// import "../../../../styles/resturantPage/resturantDetailPage/resturantDetailPage.css";
// import SimilarResturantCard from "@/component/resturantPage/similarresturantCard/similarResturantCard";
// import ExploreOtherResturant from "@/component/resturantPage/exploreOtherResturant/exploreOtherResturant";
// import Footer from "@/component/globalLayout/footer/footer";

// export default function Page() {
//   return (
//     <>
//       <div className="res-detail-page">
//         <Navbar />
//         <div className="container">
//           <ResDetailHeader />
//           <ResDetailGallery />
//           <ResDetailTabs />

//           <div className="res-content-grid">
//             <div className="res-main-content">
//               <ResDetailMenu />
//             </div>
//             <ResDetailSideBar />
//           </div>
//           <SimilarResturantCard />
//           <ExploreOtherResturant />
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// }


// import React from "react";
// import { BaseURL } from "@/app/api/axios/axios";
// import endPoints from "@/app/api/endPoints/endPoints";
// import Navbar from "@/component/globalLayout/navbar/navbar";
// import ResDetailHeader from "@/component/resturantPage/resDetailHeader/resDetailHeader";
// import ResDetailGallery from "@/component/resturantPage/resDetailGallery/resDetailGallery";
// import ResDetailTabs from "@/component/resturantPage/resDetailTabs/resDetailTabs";
// import ResDetailMenu from "@/component/resturantPage/resDetailMenu/resDetailMenu";
// import ResDetailSideBar from "@/component/resturantPage/resDetailSideBar/resDetailsideBar";
// import Footer from "@/component/globalLayout/footer/footer";

// async function getRestaurantData(id: string) {
//   try {
//     // Construct the URL exactly as Django expects it
//     const url = `${BaseURL}${endPoints.resturant.resturant}/${id}/`;
//     const res = await fetch(url, { cache: 'no-store' });
//     if (!res.ok) return null;
//     return await res.json();
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return null;
//   }
// }

// export default async function Page({ params }: { params: any }) {
//   // Ensure params are available
//   const { id } = await params;
//   const restaurant = await getRestaurantData(id);

//   if (!restaurant) return <div className="p-20 text-center">Restaurant not found</div>;

//   return (
//     <div className="res-detail-page">
//       <Navbar />
//       <div className="container mx-auto px-4">
//         {/* Pass restaurant object as a prop to stop children from re-fetching */}
//         <ResDetailHeader data={restaurant} />
        
//         {/* Pass the images array directly */}
//         <ResDetailGallery images={restaurant.images} name={restaurant.name} />
        
//         <ResDetailTabs />

//         <div className="lg:flex gap-8 mt-6">
//           <div className="lg:w-2/3">
//             <ResDetailMenu restaurantId={id} />
//           </div>
//           <div className="lg:w-1/3">
//             <ResDetailSideBar data={restaurant} />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

import React from "react";
import { BaseURL } from "@/app/api/axios/axios";
import endPoints from "@/app/api/endPoints/endPoints";
import { cookies } from "next/headers"; // Critical for Auth
import Navbar from "@/component/globalLayout/navbar/navbar";
import ResDetailHeader from "@/component/resturantPage/resDetailHeader/resDetailHeader";
import ResDetailGallery from "@/component/resturantPage/resDetailGallery/resDetailGallery";
import ResDetailTabs from "@/component/resturantPage/resDetailTabs/resDetailTabs";
import ResDetailMenu from "@/component/resturantPage/resDetailMenu/resDetailMenu";
import ResDetailSideBar from "@/component/resturantPage/resDetailSideBar/resDetailsideBar";
import Footer from "@/component/globalLayout/footer/footer";

async function getRestaurantData(id: string) {
  try {
    // 1. Get the token from the server-side cookie store
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const url = `${BaseURL}${endPoints.resturant.resturant}/${id}/`;
    
    // 2. Attach the token to the fetch header
    const res = await fetch(url, { 
      cache: 'no-store',
      headers: {
        "Authorization": token ? `Bearer ${token}` : "",
        "Content-Type": "application/json",
      }
    });

    if (!res.ok) {
      console.error(`Fetch failed: ${res.status} for ID: ${id}`);
      return null;
    }
    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export default async function Page({ params }: { params: any }) {
  const { id } = await params;
  const restaurant = await getRestaurantData(id);

  if (!restaurant) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Restaurant not found</h1>
            <p className="text-gray-500">Please check your login session or the URL.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="res-detail-page">
      <Navbar />
      <div className="container mx-auto px-4">
        {/* We pass initialData to the client component to avoid a second loading state */}
        <ResDetailHeader initialData={restaurant} />
        
        <ResDetailGallery images={restaurant.images} name={restaurant.name} />
        
        <ResDetailTabs />

        <div className="lg:flex gap-8 mt-6">
          <div className="lg:w-2/3">
            <ResDetailMenu restaurantId={id} />
          </div>
          <div className="lg:w-1/3">
            <ResDetailSideBar data={restaurant} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}