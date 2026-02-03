// "use client";
// import { useEffect, useState } from "react";
// import { Autocomplete, TextField } from "@mui/material";
// import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
// import { resturantList, searchByResturant } from "@/redux/slice/resturantSlice";
// import { searchByItem } from "@/redux/slice/menuSlice";
// import useDebounce from "@/hooks/useDebounce";
// import { useRouter } from "next/navigation";
// import Image from "next/image"; // Better for SEO/Performance

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [searchValue, setSearchvalue] = useState("");
//   const debouncedSearch = useDebounce(searchValue, 500);
//   const dispatch = useDispatch();
//   const router = useRouter();

//   // Redux Selectors
//   const { data: restaurantList } = useSelector(
//     (state) => state.resturants.list,
//   );
//   const { data: restaurantDetails, loading: detailsLoading } = useSelector(
//     (state) => state.resturants.details,
//   );
//   const { data: menu } = useSelector((state) => state.menu);

//   useEffect(() => {
//     dispatch(resturantList());
//   }, [dispatch]);

//   useEffect(() => {
//     if (debouncedSearch.trim() !== "") {
//       dispatch(searchByResturant(debouncedSearch));
//       dispatch(searchByItem(debouncedSearch));
//     }
//   }, [debouncedSearch, dispatch]);

//   const combinedOptions = [
//     ...(Array.isArray(restaurantDetails)
//       ? restaurantDetails.map((r) => ({
//           id: r.id,
//           name: r.name,
//           type: "restaurant",
//         }))
//       : []),
//     ...(Array.isArray(menu)
//       ? menu.map((m) => ({ id: m.id, name: m.name, type: "menu" }))
//       : []),
//   ];

//   const initialOptions = Array.isArray(restaurantList)
//     ? restaurantList.map((r) => ({
//         id: r.id,
//         name: r.name,
//         type: "restaurant",
//       }))
//     : [];

//   return (
//     <header className="w-full relative z-[1000] font-poppins">
//       {/* --- TOP BAR --- */}
//       <div className="hidden sm:block bg-[#e23744] py-2.5 text-white">
//         <div className="max-w-[1440px] mx-auto px-5 flex items-center justify-between">
//           <div className="flex items-center gap-2 cursor-pointer">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="18"
//               height="18"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//               <circle cx="12" cy="10" r="3"></circle>
//             </svg>
//             <span className="text-sm font-medium">Kolkata</span>
//             <span className="text-[10px]">▼</span>
//           </div>
//           <Link
//             href="#"
//             className="bg-white text-[#e23744] px-[18px] py-1.5 rounded-full text-xs font-semibold hover:bg-gray-100 transition-colors"
//           >
//             Download The App
//           </Link>
//         </div>
//       </div>

//       {/* --- BOTTOM BAR --- */}
//       <nav className="bg-white py-4 sticky top-0 left-0 right-0 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
//         <div className="max-w-[1440px] mx-auto px-5">
//           <div className="flex flex-wrap items-center justify-between gap-4">
//             {/* Logo */}
//             <Link href="/" className="order-1">
//               <Image
//                 src="/images/navbar_images/navlogo.png"
//                 alt="Zingo Logo"
//                 width={160}
//                 height={40}
//                 priority
//                 unoptimized
//                 style={{ height: "auto", width: "auto" }} // Maintains aspect ratio
//               />
//             </Link>

//             {/* Search Bar */}
//             <div className="order-last lg:order-2 flex-1 min-w-full lg:min-w-0">
//               {" "}
//               {/* lg:max-w-[500px] */}
//               <div className="flex items-center bg-white border-[4px] border-[#9a3737] rounded-full px-4 py-1 transition-all focus-within:shadow-md">
//                 <svg
//                   className="opacity-50 mr-2.5"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="18"
//                   height="18"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="#777"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <circle cx="11" cy="11" r="8"></circle>
//                   <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//                 </svg>
//                 <Autocomplete
//                   fullWidth
//                   options={debouncedSearch ? combinedOptions : initialOptions}
//                   getOptionLabel={(option) => option?.name ?? ""}
//                   onInputChange={(e, v) => setSearchvalue(v)}
//                   onChange={(e, val) => {
//                     if (val)
//                       router.push(
//                         val.type === "restaurant"
//                           ? `/pages/resturantDetail/${val.id}`
//                           : `/pages/menu/${val.id}`,
//                       );
//                   }}
//                   loading={detailsLoading}
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       placeholder="Search restaurants or dishes"
//                       variant="standard"
//                       InputProps={{
//                         ...params.InputProps,
//                         disableUnderline: true,
//                         startAdornment: detailsLoading ? (
//                           <div className="animate-pulse bg-gray-200 h-4 w-4 rounded-full mr-2" />
//                         ) : null,
//                       }}
//                     />
//                   )}
//                 />
//               </div>
//             </div>

//             {/* Hamburger for Mobile */}
//             <button
//               className="lg:hidden order-3 flex flex-col gap-1.5 p-2"
//               onClick={() => setOpen(!open)}
//               aria-label="Toggle menu"
//             >
//               <span
//                 className={`block w-6 h-0.5 bg-black transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
//               />
//               <span
//                 className={`block w-6 h-0.5 bg-black ${open ? "opacity-0" : ""}`}
//               />
//               <span
//                 className={`block w-6 h-0.5 bg-black transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
//               />
//             </button>

//             {/* Nav Links & Actions */}
//             <div
//               className={`
//               fixed lg:static top-0 transition-all duration-400 ease-in-out shadow-2xl lg:shadow-none
//               ${open ? "right-0" : "-right-full"} 
//               bg-white w-[280px] lg:w-auto h-screen lg:h-auto 
//               flex flex-col lg:flex-row items-start lg:items-center 
//               gap-8 lg:gap-[30px] p-[80px_30px] lg:p-0 z-[1001] lg:z-auto
//               order-2 lg:order-3
//             `}
//             >
//               <ul className="flex flex-col lg:flex-row gap-6 lg:gap-[30px] w-full lg:w-auto">
//                 <li key="home" className="group">
//                   <Link
//                     href={`/`}
//                     className="text-[#333] font-bold text-[16px] relative group-hover:text-[#e23744] transition-colors"
//                   >
//                     Home
//                     <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#e23744] -translate-x-1/2 transition-all group-hover:w-full" />
//                   </Link>
//                 </li>
//                 <li key="order" className="group">
//                   <Link
//                     href={`/pages/order`}
//                     className="text-[#333] font-bold text-[16px] relative group-hover:text-[#e23744] transition-colors"
//                   >
//                     Order Foods
//                     <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#e23744] -translate-x-1/2 transition-all group-hover:w-full" />
//                   </Link>
//                 </li>
//                 <li key="restaurants" className="group">
//                   <Link
//                     href={`/pages/resturantList`}
//                     className="text-[#333] font-bold text-[16px] relative group-hover:text-[#e23744] transition-colors"
//                   >
//                     Restaurants
//                     <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#e23744] -translate-x-1/2 transition-all group-hover:w-full" />
//                   </Link>
//                 </li>
//                 <li key="offers" className="group">
//                   <Link
//                     href={`/pages/contactus`}
//                     className="text-[#333] font-bold text-[16px] relative group-hover:text-[#e23744] transition-colors"
//                   >
//                     Contact Us
//                     <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#e23744] -translate-x-1/2 transition-all group-hover:w-full" />
//                   </Link>
//                 </li>
//               </ul>

//               <div className="flex items-center gap-4 mt-5 lg:mt-0 w-full lg:w-auto border-t lg:border-none pt-5 lg:pt-0">
//                 <Link href="#" aria-label="User Profile">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="#e23744"
//                     stroke="#e23744"
//                     strokeWidth="1"
//                   >
//                     <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//                     <circle cx="12" cy="7" r="4"></circle>
//                   </svg>
//                 </Link>
//                 <Link
//                   href="#"
//                   className="bg-[#e23744] text-white px-5 py-2 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-[#c12e3a] transition-all"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="18"
//                     height="18"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <circle cx="9" cy="21" r="1"></circle>
//                     <circle cx="20" cy="21" r="1"></circle>
//                     <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//                   </svg>
//                   <span>Cart</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// "use client";
// import { useEffect, useState, useRef } from "react";
// import { Autocomplete, TextField } from "@mui/material";
// import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
// import { resturantList, searchByResturant } from "@/redux/slice/resturantSlice";
// import { searchByItem } from "@/redux/slice/menuSlice";
// import useDebounce from "@/hooks/useDebounce";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [searchValue, setSearchvalue] = useState("");
//   const debouncedSearch = useDebounce(searchValue, 500);
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Redux Selectors
//   const { data: restaurantList } = useSelector((state: any) => state.resturants.list);
//   const { data: restaurantDetails, loading: detailsLoading } = useSelector((state: any) => state.resturants.details);
//   const { data: menu } = useSelector((state: any) => state.menu);

//   useEffect(() => {
//     dispatch(resturantList() as any);
//   }, [dispatch]);

//   useEffect(() => {
//     if (debouncedSearch.trim() !== "") {
//       dispatch(searchByResturant(debouncedSearch) as any);
//       dispatch(searchByItem(debouncedSearch) as any);
//     }
//   }, [debouncedSearch, dispatch]);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setProfileOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const combinedOptions = [
//     ...(Array.isArray(restaurantDetails) ? restaurantDetails.map((r) => ({ id: r.id, name: r.name, type: "restaurant" })) : []),
//     ...(Array.isArray(menu) ? menu.map((m) => ({ id: m.id, name: m.name, type: "menu" })) : []),
//   ];

//   const initialOptions = Array.isArray(restaurantList) ? restaurantList.map((r) => ({ id: r.id, name: r.name, type: "restaurant" })) : [];

//   const navItems = [
//     { label: "Home", path: "/" },
//     { label: "Order Foods", path: "/pages/order" },
//     { label: "Restaurants", path: "/pages/resturantList" },
//     { label: "Contact Us", path: "/pages/contactus" },
//   ];

//   return (
//     <header className="w-full relative z-[1000] font-poppins">
//       {/* --- TOP BAR --- */}
//       <div className="hidden sm:block bg-[#e23744] py-2.5 text-white">
//         <div className="max-w-[1440px] mx-auto px-5 flex items-center justify-between">
//           <div className="flex items-center gap-2 cursor-pointer">
//             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//               <circle cx="12" cy="10" r="3"></circle>
//             </svg>
//             <span className="text-sm font-medium">Kolkata</span>
//             <span className="text-[10px]">▼</span>
//           </div>
//           <Link href="#" className="bg-white text-[#e23744] px-[18px] py-1.5 rounded-full text-xs font-semibold hover:bg-gray-100 transition-colors">
//             Download The App
//           </Link>
//         </div>
//       </div>

//       {/* --- BOTTOM BAR --- */}
//       <nav className="bg-white py-4 sticky top-0 left-0 right-0 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
//         <div className="max-w-[1440px] mx-auto px-5">
//           <div className="flex flex-wrap items-center justify-between gap-4">
//             {/* Logo */}
//             <Link href="/" className="order-1">
//               <Image src="/images/navbar_images/navlogo.png" alt="Zingo Logo" width={160} height={40} priority unoptimized style={{ height: "auto", width: "auto" }} />
//             </Link>

//             {/* Search Bar */}
//             <div className="order-last lg:order-2 flex-1 min-w-full lg:min-w-0">
//               <div className="flex items-center bg-white border-[4px] border-[#9a3737] rounded-full px-4 py-1 transition-all focus-within:shadow-md">
//                 <svg className="opacity-50 mr-2.5" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <circle cx="11" cy="11" r="8"></circle>
//                   <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//                 </svg>
//                 <Autocomplete
//                   fullWidth
//                   options={debouncedSearch ? combinedOptions : initialOptions}
//                   getOptionLabel={(option) => option?.name ?? ""}
//                   onInputChange={(e, v) => setSearchvalue(v)}
//                   onChange={(e, val) => {
//                     if (val) router.push(val.type === "restaurant" ? `/pages/resturantDetail/${val.id}` : `/pages/menu/${val.id}`);
//                   }}
//                   loading={detailsLoading}
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       placeholder="Search restaurants or dishes"
//                       variant="standard"
//                       InputProps={{
//                         ...params.InputProps,
//                         disableUnderline: true,
//                         startAdornment: detailsLoading ? <div className="animate-pulse bg-gray-200 h-4 w-4 rounded-full mr-2" /> : null,
//                       }}
//                     />
//                   )}
//                 />
//               </div>
//             </div>

//             {/* Hamburger for Mobile */}
//             <button className="lg:hidden order-3 flex flex-col gap-1.5 p-2 z-[1002]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
//               <span className={`block w-6 h-0.5 bg-black transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
//               <span className={`block w-6 h-0.5 bg-black ${open ? "opacity-0" : ""}`} />
//               <span className={`block w-6 h-0.5 bg-black transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
//             </button>

//             {/* MOBILE OVERLAY */}
//             {open && (
//               <div 
//                 className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-[1000]" 
//                 onClick={() => setOpen(false)}
//               />
//             )}

//             {/* Nav Links & Actions */}
//             <div className={`fixed lg:static top-0 transition-all duration-400 ease-in-out shadow-2xl lg:shadow-none ${open ? "right-0" : "-right-full"} bg-white w-[280px] lg:w-auto h-screen lg:h-auto flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-[30px] p-[80px_30px] lg:p-0 z-[1001] lg:z-auto order-2 lg:order-3`}>
//               <ul className="flex flex-col lg:flex-row gap-6 lg:gap-[30px] w-full lg:w-auto">
//                 {navItems.map((item, idx) => (
//                   <li key={idx} className="group">
//                     <Link 
//                       href={item.path} 
//                       className="text-[#333] font-bold text-[16px] relative group-hover:text-[#e23744] transition-colors"
//                       onClick={() => setOpen(false)} 
//                     >
//                       {item.label}
//                       <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#e23744] -translate-x-1/2 transition-all group-hover:w-full" />
//                     </Link>
//                   </li>
//                 ))}
//               </ul>

//               <div className="flex items-center gap-4 mt-5 lg:mt-0 w-full lg:w-auto border-t lg:border-none pt-5 lg:pt-0">
//                 {/* CART BUTTON */}
//                 <Link 
//                   href="#" 
//                   className="bg-[#e23744] text-white px-5 py-2 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-[#c12e3a] transition-all"
//                   onClick={() => setOpen(false)}
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <circle cx="9" cy="21" r="1"></circle>
//                     <circle cx="20" cy="21" r="1"></circle>
//                     <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//                   </svg>
//                   <span>Cart</span>
//                 </Link>

//                 {/* PROFILE BUTTON */}
//                 <div className="relative" ref={dropdownRef}>
//                   <button 
//                     onClick={() => setProfileOpen(!profileOpen)} 
//                     className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#e23744] bg-rose-50 hover:bg-rose-100 transition-all active:scale-90 cursor-pointer" 
//                     aria-label="User Profile"
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#e23744" stroke="#e23744" strokeWidth="1">
//                       <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//                       <circle cx="12" cy="7" r="4"></circle>
//                     </svg>
//                   </button>

//                   {profileOpen && (
//                     <div className="absolute right-0 mt-4 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 z-[1100] animate-in fade-in zoom-in duration-200">
//                       <Link href="/auth/signIn" className="block px-5 py-3 text-sm font-bold text-[#333] hover:bg-rose-50 hover:text-[#e23744] transition-colors" onClick={() => {setProfileOpen(false); setOpen(false);}}>
//                         Sign In
//                       </Link>
//                       <Link href="/auth/signUp" className="block px-5 py-3 text-sm font-bold text-[#333] hover:bg-rose-50 hover:text-[#e23744] transition-colors" onClick={() => {setProfileOpen(false); setOpen(false);}}>
//                         Sign Up
//                       </Link>
//                       <hr className="my-1 border-gray-50" />
//                       <button onClick={() => {setProfileOpen(false); setOpen(false);}} className="w-full text-left block px-5 py-3 text-sm font-bold text-gray-400 hover:bg-gray-50 hover:text-black transition-colors">
//                         Logout
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }


"use client";
import { useEffect, useState, useRef } from "react";
import { Autocomplete, TextField } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { resturantList, searchByResturant } from "@/redux/slice/resturantSlice";
import { searchByItem } from "@/redux/slice/menuSlice";
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import Image from "next/image";
// 1. IMPORT SIGN-OUT FROM NEXT-AUTH
import { signOut } from "next-auth/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchValue, setSearchvalue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 500);
  const dispatch = useDispatch();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Redux Selectors
  const { data: restaurantList } = useSelector((state: any) => state.resturants.list);
  const { data: restaurantDetails, loading: detailsLoading } = useSelector((state: any) => state.resturants.details);
  const { data: menu } = useSelector((state: any) => state.menu);

  // --- LOGOUT LOGIC ---
  const handleLogout = async () => {
    // 1. Clear Local Storage & Session Storage
    localStorage.clear();
    sessionStorage.clear();

    // 2. Close UI States
    setProfileOpen(false);
    setOpen(false);

    // 3. Trigger NextAuth SignOut
    // This clears the next-auth.callback-url, csrf-token, and session cookies
    await signOut({ 
      callbackUrl: "/auth/signIn", // Redirects here after clearing cookies
      redirect: true 
    });
  };

  useEffect(() => {
    dispatch(resturantList() as any);
  }, [dispatch]);

  useEffect(() => {
    if (debouncedSearch.trim() !== "") {
      dispatch(searchByResturant(debouncedSearch) as any);
      dispatch(searchByItem(debouncedSearch) as any);
    }
  }, [debouncedSearch, dispatch]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const combinedOptions = [
    ...(Array.isArray(restaurantDetails) ? restaurantDetails.map((r) => ({ id: r.id, name: r.name, type: "restaurant" })) : []),
    ...(Array.isArray(menu) ? menu.map((m) => ({ id: m.id, name: m.name, type: "menu" })) : []),
  ];

  const initialOptions = Array.isArray(restaurantList) ? restaurantList.map((r) => ({ id: r.id, name: r.name, type: "restaurant" })) : [];

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Order Foods", path: "/pages/order" },
    { label: "Restaurants", path: "/pages/resturantList" },
    { label: "Contact Us", path: "/pages/contactus" },
  ];

  return (
    <header className="w-full relative z-[1000] font-poppins">
      {/* --- TOP BAR --- */}
      <div className="hidden sm:block bg-[#e23744] py-2.5 text-white">
        <div className="max-w-[1440px] mx-auto px-5 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="text-sm font-medium">Kolkata</span>
            <span className="text-[10px]">▼</span>
          </div>
          <Link href="#" className="bg-white text-[#e23744] px-[18px] py-1.5 rounded-full text-xs font-semibold hover:bg-gray-100 transition-colors">
            Download The App
          </Link>
        </div>
      </div>

      {/* --- BOTTOM BAR --- */}
      <nav className="bg-white py-4 sticky top-0 left-0 right-0 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <div className="max-w-[1440px] mx-auto px-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="order-1">
              <Image src="/images/navbar_images/navlogo.png" alt="Zingo Logo" width={160} height={40} priority unoptimized style={{ height: "auto", width: "auto" }} />
            </Link>

            {/* Search Bar */}
            <div className="order-last lg:order-2 flex-1 min-w-full lg:min-w-0">
              <div className="flex items-center bg-white border-[4px] border-[#9a3737] rounded-full px-4 py-1 transition-all focus-within:shadow-md">
                <svg className="opacity-50 mr-2.5" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <Autocomplete
                  fullWidth
                  options={debouncedSearch ? combinedOptions : initialOptions}
                  getOptionLabel={(option) => option?.name ?? ""}
                  onInputChange={(e, v) => setSearchvalue(v)}
                  onChange={(e, val) => {
                    if (val) router.push(val.type === "restaurant" ? `/pages/resturantDetail/${val.id}` : `/pages/menu/${val.id}`);
                  }}
                  loading={detailsLoading}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Search restaurants or dishes"
                      variant="standard"
                      InputProps={{
                        ...params.InputProps,
                        disableUnderline: true,
                        startAdornment: detailsLoading ? <div className="animate-pulse bg-gray-200 h-4 w-4 rounded-full mr-2" /> : null,
                      }}
                    />
                  )}
                />
              </div>
            </div>

            {/* Hamburger for Mobile */}
            <button className="lg:hidden order-3 flex flex-col gap-1.5 p-2 z-[1002]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <span className={`block w-6 h-0.5 bg-black transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-black ${open ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-black transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>

            {/* MOBILE OVERLAY */}
            {open && (
              <div 
                className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-[1000]" 
                onClick={() => setOpen(false)}
              />
            )}

            {/* Nav Links & Actions */}
            <div className={`fixed lg:static top-0 transition-all duration-400 ease-in-out shadow-2xl lg:shadow-none ${open ? "right-0" : "-right-full"} bg-white w-[280px] lg:w-auto h-screen lg:h-auto flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-[30px] p-[80px_30px] lg:p-0 z-[1001] lg:z-auto order-2 lg:order-3`}>
              <ul className="flex flex-col lg:flex-row gap-6 lg:gap-[30px] w-full lg:w-auto">
                {navItems.map((item, idx) => (
                  <li key={idx} className="group">
                    <Link 
                      href={item.path} 
                      className="text-[#333] font-bold text-[16px] relative group-hover:text-[#e23744] transition-colors"
                      onClick={() => setOpen(false)} 
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#e23744] -translate-x-1/2 transition-all group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 mt-5 lg:mt-0 w-full lg:w-auto border-t lg:border-none pt-5 lg:pt-0">
                {/* CART BUTTON */}
                <Link 
                  href="/pages/cart" 
                  className="bg-[#e23744] text-white px-5 py-2 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-[#c12e3a] transition-all"
                  onClick={() => setOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  <span>Cart</span>
                </Link>

                {/* PROFILE BUTTON */}
                <div className="relative" ref={dropdownRef}>
                  <button 
                    onClick={() => setProfileOpen(!profileOpen)} 
                    className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#e23744] bg-rose-50 hover:bg-rose-100 transition-all active:scale-90 cursor-pointer" 
                    aria-label="User Profile"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#e23744" stroke="#e23744" strokeWidth="1">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </button>

                  {profileOpen && (
                    <div className="absolute right-0 mt-4 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 z-[1100] animate-in fade-in zoom-in duration-200">
                      <Link href="/auth/signIn" className="block px-5 py-3 text-sm font-bold text-[#333] hover:bg-rose-50 hover:text-[#e23744] transition-colors" onClick={() => {setProfileOpen(false); setOpen(false);}}>
                        Sign In
                      </Link>
                      <Link href="/auth/signUp" className="block px-5 py-3 text-sm font-bold text-[#333] hover:bg-rose-50 hover:text-[#e23744] transition-colors" onClick={() => {setProfileOpen(false); setOpen(false);}}>
                        Sign Up
                      </Link>
                      <hr className="my-1 border-gray-50" />
                      <button onClick={handleLogout} className="w-full text-left block px-5 py-3 text-sm font-bold text-gray-400 hover:bg-gray-50 hover:text-black transition-colors">
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}