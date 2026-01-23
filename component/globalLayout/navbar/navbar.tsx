"use client";
import { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import Link from "next/link";
import "../../../styles/globalLayoutCss/navbar/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { resturantList, searchByResturant } from "@/redux/slice/resturantSlice";
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { searchByItem } from "@/redux/slice/menuSlice";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchvalue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 500);
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    data: restaurantList,
    loading: listLoading,
    error: listError,
  } = useSelector((state) => state.resturants.list);

  const {
    data: restaurantDetails,
    loading: detailsLoading,
    error: detailsError,
  } = useSelector((state) => state.resturants.details);
  const {
    data: menu,
    loading: menuLoading,
    error: menuError,
  } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(resturantList());
  }, []);

  useEffect(() => {
    if (debouncedSearch.trim() !== "") {
      dispatch(searchByResturant(debouncedSearch));
      dispatch(searchByItem(debouncedSearch));
    }
  }, [debouncedSearch]);

  const combinedOptions = [
    ...(Array.isArray(restaurantDetails)
      ? restaurantDetails.map((r) => ({
          id: r.id,
          name: r.name,
          type: "restaurant",
        }))
      : []),

    ...(Array.isArray(menu)
      ? menu.map((m) => ({
          id: m.id,
          name: m.name,
          restaurantId: m.restaurant_id,
          type: "menu",
        }))
      : []),
  ];

  const initialRestaurantOptions = Array.isArray(restaurantList)
    ? restaurantList.map((r) => ({
        id: r.id,
        name: r.name,
        type: "restaurant",
      }))
    : [];

  return (
    <header className="main-header">
      {/* --- TOP BAR --- */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="location-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="location-text">Kolkata</span>
              <span className="arrow-down">▼</span>
            </div>

            <div className="download-wrapper">
              <Link href="#" className="download-btn">
                Download The App
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="container">
          <div className="bottom-bar-content">
            {/* Logo */}
            <Link href="/" className="brand-logo">
              <img src="/images/navbar_images/navlogo.png" alt="Zingo" />
            </Link>

            {/* Search Bar */}
            <div className="search-wrapper">
              <div className="search-input-box">
                <svg
                  className="search-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#777"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>

                <Autocomplete
                  disablePortal
                  options={debouncedSearch ? combinedOptions : initialRestaurantOptions}
                  getOptionLabel={(option) => option?.name ?? ""}
                  onInputChange={(event, value) => setSearchvalue(value)}
                  onChange={(event, selectedOption) => {
                    if (selectedOption) {
                      console.log(selectedOption.type)
                      if(selectedOption.type == "restaurant"){
                        router.push(
                        `/pages/resturantDetail/${selectedOption.id}`,
                      );
                      }else if(selectedOption.type == "menu"){
                        router.push(
                        `/pages/menu/${selectedOption.id}`,
                      );
                    }
                  }}
                }
                  loading={detailsLoading}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Search restaurants"
                      variant="standard"
                      className="input-field"
                      InputProps={{
                        ...params.InputProps,
                        disableUnderline: true,
                        startAdornment: detailsLoading ? (
                          <div className="skeleton skeleton-search" />
                        ) : null,
                      }}
                    />
                  )}
                />
              </div>
            </div>

            <button
              className={`menu-toggle ${open ? "active" : ""}`}
              onClick={() => setOpen(!open)}
            >
              <span />
            </button>

            {/* Navigation & Actions */}
            <div className={`nav-collapse ${open ? "active" : ""}`}>
              {/* Centered Links */}
              <ul className="nav-links">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/pages/order">Order Foods</Link>
                </li>
                <li>
                  <Link href="/pages/resturantList">Restaurants</Link>
                </li>
                <li>
                  <Link href="#">Offers</Link>
                </li>
              </ul>

              <div className="nav-actions">
                <Link href="#" className="user-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#e23744"
                    stroke="#e23744"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </Link>

                <Link href="#" className="cart-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  <span>Cart</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
