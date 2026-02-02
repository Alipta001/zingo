"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

import DashboardStats from "../dashBoard/DashboardStats";
import RestaurantList from "../restaurants/RestaurantList";
import MenuManagement from "../menu/menuManagement";
import LiveOrders from "../orders/liveOrders";


export default function AdminSectionRenderer() {
  const view = useSelector(
    (state: RootState) => state.adminView.activeView
  );

  if (view === "dashboard") return <DashboardStats />;
  if (view === "restaurants") return <RestaurantList />;
  if (view === "menu") return <MenuManagement />;
  if (view === "orders") return <LiveOrders />;

  return null;
}
