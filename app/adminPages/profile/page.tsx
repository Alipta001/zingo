import SideBar from "@/adminComponent/layout/Sidebar";
import RestaurantProfilePage from "@/adminComponent/profile/RestaurantProfile";
// Adjust the import path above to wherever you saved the code you just showed me

export default function Page() {
  return (
    <main className="min-h-screen bg-[#fafafa] p-4 md:p-10">
      <RestaurantProfilePage />
    </main>
  );
}