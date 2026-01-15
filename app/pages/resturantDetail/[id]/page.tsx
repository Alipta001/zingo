import React from "react";
import Navbar from "@/component/globalLayout/navbar/navbar";
import ResDetailHeader from "@/component/resturantPage/resDetailHeader/resDetailHeader";
import ResDetailGallery from "@/component/resturantPage/resDetailGallery/resDetailGallery";
import ResDetailTabs from "@/component/resturantPage/resDetailTabs/resDetailTabs";
import ResDetailMenu from "@/component/resturantPage/resDetailMenu/resDetailMenu";
import ResDetailSideBar from "@/component/resturantPage/resDetailSideBar/resDetailsideBar";
import "../../../../styles/resturantPage/resturantDetailPage/resturantDetailPage.css";
import SimilarResturantCard from "@/component/resturantPage/similarresturantCard/similarResturantCard";
import ExploreOtherResturant from "@/component/resturantPage/exploreOtherResturant/exploreOtherResturant";
import Footer from "@/component/globalLayout/footer/footer";

export default function Page() {
  return (
    <>
      <div className="res-detail-page">
        <Navbar />
        <div className="container">
          <ResDetailHeader />
          <ResDetailGallery />
          <ResDetailTabs />

          <div className="res-content-grid">
            <div className="res-main-content">
              <ResDetailMenu />
            </div>
            <ResDetailSideBar />
          </div>
          <SimilarResturantCard />
          <ExploreOtherResturant />
        </div>
        <Footer />
      </div>
    </>
  );
}
