import React from "react";
import Navbar from "@/component/globalLayout/navbar/navbar";
import ResDetailHeader from "@/component/resturantPage/resDetailHeader/resDetailHeader";
import ResDetailGallery from "@/component/resturantPage/resDetailGallery/resDetailGallery";
import ResDetailTabs from "@/component/resturantPage/resDetailTabs/resDetailTabs";
import ResDetailMenu from "@/component/resturantPage/resDetailMenu/resDetailMenu";
import ResDetailSideBar from "@/component/resturantPage/resDetailSideBar/resDetailsideBar";
import "../../../../styles/resturantPage/resturantDetailPage/resturantDetailPage.css";

export default function Page() {
  return (
    <>
      <Navbar></Navbar>
      <div className="res-detail-page">
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
        </div>
      </div>
    </>
  );
}
