import React from 'react';
import '../../../styles/homeLayoutCss/nearbyFoods/nearbyFoods.css';

const NearbyFoods = () => {
  const nearbyPlaces = [
    {
      id: 1,
      name: "Biryani Junction",
      price: "₹199 for one",
      rating: "4.7",
      time: "25-30 Mins",
      badge: "Trending",
      image: "/images/nearbyFoods/food1.png",
    },
    {
      id: 2,
      name: "Momo Gully",
      price: "₹250 for two",
      rating: "4.7",
      time: "25-30 Mins",
      badge: "Free Delivery",
      image: "/images/nearbyFoods/gullymomo.png",
    },
    {
      id: 3,
      name: "Wrap King",
      price: "₹199 for one",
      rating: "4.0",
      time: "15-20 Mins",
      badge: "Must Try",
      image: "/images/nearbyFoods/wrapking.png",
    },
    {
      id: 4,
      name: "Chinese Darbar",
      price: "₹400 for two",
      rating: "3.7",
      time: "30-40 Mins",
      badge: "Top Rated",
      image: "/images/nearbyFoods/chowmein.png",
    },
  ];

  return (
    <section className="nearby-food-sec">
      <div className="container">
        <div className="food-heading">
          <h2>Popular Nearby Food Places</h2>
        </div>

        <div className="row">
          {nearbyPlaces.map((place) => (
            <div className="col-3" key={place.id}>
              <div className="rest-card">
                <div className="card-image">
                  {/* Floating Badge */}
                  <div className="food-badge">{place.badge}</div>
                  <img src={place.image} alt={place.name} />
                </div>
                
                <div className="card-content">
                  <h3 className="food-name">{place.name}</h3>
                  <p className="food-items">{place.price}</p>
                </div>

                <div className="rating-box">
                  <div className="rating">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 1L12.5 7H19L14 11L15.5 18L10 14L4.5 18L6 11L1 7H7.5L10 1Z" />
                    </svg>
                    {place.rating}
                  </div>

                  <div className="time">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    {place.time}
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

export default NearbyFoods;