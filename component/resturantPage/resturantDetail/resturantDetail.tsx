import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* import { faStar, faDirections, faShareAlt, faQuoteLeft, faChevronRight, faCopy } from '@fortawesome/free-solid-svg-icons'; */
import '../../../styles/resturantPage/resturantDetail/resturantDetail.css';

const RestaurantDetail = () => {
  return (
    <main className="res-detail-page">
      <div className="container">
        {/* Header Section */}
        <section className="res-header">
          <div className="res-title-info">
            <h1>Chill & Grill</h1>
            <p className="cuisines">North Indian, Chinese, Rolls, Biryani, Momo, Street Food</p>
            <p className="address">187, Ward 10, Benaras Road, Salkia, Howrah</p>
            <div className="res-meta">
              <span className="status">Open Now</span>
              <span className="timing">2pm - 11:30pm (Today)</span>
              <span className="cost">| ₹400 For Two</span>
            </div>
            <div className="res-actions">
              <button className="btn-action"><FontAwesomeIcon icon={faDirections} /> Direction</button>
              <button className="btn-action"><FontAwesomeIcon icon={faShareAlt} /> Share</button>
              <button className="btn-action"><FontAwesomeIcon icon={faQuoteLeft} /> Reviews</button>
            </div>
          </div>
          
          <div className="res-rating-summary">
            <div className="rating-badge green">
              <span>4.7 <FontAwesomeIcon icon={faStar} /></span>
              <small>2,431 Dining Ratings</small>
            </div>
            <div className="rating-badge yellow">
              <span>3.7 <FontAwesomeIcon icon={faStar} /></span>
              <small>3 Delivery Ratings</small>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="res-gallery">
          <div className="main-img">
            <img src="/image/res-main.jpg" alt="Dining area" />
          </div>
          <div className="side-imgs">
            <img src="/image/res-food1.jpg" alt="Burger" />
            <img src="/image/res-food2.jpg" alt="Cake" />
          </div>
          <div className="large-side-img">
            <img src="/image/res-food3.jpg" alt="Salad" />
          </div>
        </section>

        {/* Navigation Tabs */}
        <nav className="res-tabs">
          <button className="tab active">Overview</button>
          <button className="tab">Order Online</button>
          <button className="tab">Reviews</button>
          <button className="tab">Menu</button>
          <button className="tab">Book A Table</button>
        </nav>

        <div className="res-content-grid">
          {/* Left Content */}
          <div className="res-main-content">
            <div className="menu-preview-card">
              <div className="flex-header">
                <h3>Menu</h3>
                <a href="#" className="view-all">See All Menus <FontAwesomeIcon icon={faChevronRight} /></a>
              </div>
              
              <div className="menu-sub-sec">
                <h4>Cuisines</h4>
                <div className="tag-cloud">
                  {['North Indian', 'Continental', 'Italian', 'Desserts', 'Chinese'].map(c => (
                    <span key={c} className="tag">✦ {c} ✦</span>
                  ))}
                </div>
              </div>

              <div className="menu-sub-sec">
                <h4>Top Dishes</h4>
                <div className="tag-cloud">
                  {['Chocolate Pudding', 'Club Sandwich', 'Noodles', 'Momo', 'Roll'].map(d => (
                    <span key={d} className="tag">✦ {d} ✦</span>
                  ))}
                </div>
              </div>

              <div className="menu-cards">
                <div className="menu-thumb">
                  <img src="/image/menu1.jpg" alt="Special Menu" />
                  <p>Special Menu</p>
                  <span>1 Page</span>
                </div>
                <div className="menu-thumb">
                  <img src="/image/menu2.jpg" alt="Food Menu" />
                  <p>Food Menu</p>
                  <span>11 Pages</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="res-sidebar">
            <div className="reservation-card">
              <h3>Table Reservation</h3>
              <p className="offer"><span>🉐</span> Flat 30% OFF + 3 More Offers</p>
              <div className="input-row">
                <select><option>Today</option></select>
                <select><option>Guest</option></select>
              </div>
              <button className="btn-book">Book A Table</button>
            </div>

            <div className="direction-card">
              <h3>Direction</h3>
              <div className="map-placeholder">
                <img src="/image/map-static.jpg" alt="Map Location" />
              </div>
              <p>187, Ward 10, Benaras Road, Salkia, Howrah</p>
              <div className="flex-btns">
                <button><FontAwesomeIcon icon={faCopy} /> Copy</button>
                <button><FontAwesomeIcon icon={faDirections} /> Direction</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default RestaurantDetail;