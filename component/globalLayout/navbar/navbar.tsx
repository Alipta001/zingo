"use client";
import { useState } from "react";
import Link from "next/link";
import "../../../styles/navbar/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="main-header">
      {/* --- TOP BAR (Red) --- */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            
            {/* Location */}
            <div className="location-wrapper">
              {/* Location Pin Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="location-text">Kolkata</span>
              <span className="arrow-down">▼</span>
            </div>

            {/* Download App Btn */}
            <div className="download-wrapper">
              <Link href="#" className="download-btn">
                Download The App
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM BAR (Pink/White) --- */}
      <div className="bottom-bar">
        <div className="container">
          <div className="bottom-bar-content">
            
            {/* Logo */}
            <Link href="/" className="brand-logo">
              {/* Ensure you have this image in public/image/ */}
              <img src="/images/navbar_images/navlogo.png" alt="Zingo" />
              {/* If image fails, text fallback: <h1 style={{color:'#e23744', fontWeight:'800'}}>Zingo</h1> */}
            </Link>

            {/* Search Bar */}
            <div className="search-wrapper">
              <div className="search-input-box">
                 {/* Search Icon SVG */}
                <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="text"
                  placeholder="Search For Restaurant, Cuisine Or A Dish"
                />
              </div>
            </div>

            {/* Mobile Hamburger */}
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
                <li><Link href="#">Order Foods</Link></li>
                <li><Link href="#">Restaurants</Link></li>
                <li><Link href="#">Offers</Link></li>
                <li><Link href="#">Collections</Link></li>
                <li><Link href="#">Explore</Link></li>
              </ul>

              {/* Right Side Actions (User + Cart) */}
              <div className="nav-actions">
                
                {/* User Profile Icon */}
                <Link href="#" className="user-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#e23744" stroke="#e23744" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </Link>

                {/* Cart Button */}
                <Link href="#" className="cart-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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