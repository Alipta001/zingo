import React from 'react';
import "../../../styles/homeLayoutCss/preferedPicks/preferedPicks.css";

const PreferedPicks = () => {
  const picks = [
    { id: 1, title: "Best Biryani Places", count: "87+", rating: "4.2", time: "20-30 Mins", img: "/images/preferedPicks/biriyani.png" },
    { id: 2, title: "Budget Meals Under ₹200", count: "20+", rating: "3.5", time: "25-35 Mins", img: "/images/preferedPicks/burger.png" },
    { id: 3, title: "Top Veg Restaurants", count: "56+", rating: "3.9", time: "30-40 Mins", img: "/images/preferedPicks/veg.png" },
    { id: 4, title: "Most Loved Cafes", count: "24+", rating: "4.7", time: "15-20 Mins", img: "/images/preferedPicks/cafeburger.png" },
  ];

  return (
    <section className="zingo-sec">
      <div className="container">
        <div className="zingo-heading">
          <h2>Zingo Preferred Picks</h2>
          <div className="heading-underline"></div>
        </div>
        <div className="row">
          {picks.map((item) => (
            <div className="col-3" key={item.id}>
              <div className="zingo-preferred-card">
                <div className="zingo-card-image">
                  <img src={item.img} alt={item.title} />
                  <div className="card-overlay"></div>
                </div>
                <div className="zingo-card-content">
                  <h3 className="card-txt">{item.title}</h3>
                  <div className="zingo-about-box">
                    <div className="info-row">
                      <span>Restaurants:</span>
                      <strong>{item.count}</strong>
                    </div>
                    <div className="info-row">
                      <span>Avg Rating:</span>
                      <span className="rating-pill">{item.rating} ★</span>
                    </div>
                    <div className="info-row">
                      <span>Delivery Time:</span>
                      <strong>{item.time}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreferedPicks;