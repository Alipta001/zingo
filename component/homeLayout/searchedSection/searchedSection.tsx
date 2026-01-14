import React from 'react';
import "../../../styles/searchedSection/searchedSection.css";

const SearchedSection = () => {
  const cards = [
    {
      id: 1,
      number: "100+",
      text: "Restaurants delivering right now",
      img: "/images/searchedSection/delivering-food.png",
      delay: "0.1s"
    },
    {
      id: 2,
      number: "50+",
      text: "Top Offers from popular food brands",
      img: "/images/searchedSection/discount.png",
      delay: "0.2s"
    },
    {
      id: 3,
      number: "4.5+",
      text: "Rated Restaurants curated for you",
      img: "/images/searchedSection/star.png",
      delay: "0.3s"
    },
  ];

  return (
    <section className="searched-kolkata-sec">
      <div className="container">
        <div className="searched-heading">
          <h2>Because You Searched <span className="city-highlight">Kolkata</span></h2>
        </div>
        
        <div className="row">
          {cards.map((card) => (
            <div className="col-4" key={card.id}>
              <div className="searched-content-box" style={{ animationDelay: card.delay }}>
                <p className="delivering">
                  <span className="gradient-number">{card.number}</span>
                  <span className="desc-text">{card.text}</span>
                </p>

                <div className="view-link">
                  <a className="view-action" href="#">
                    View All
                    <svg className="arrow-icon" width="18" height="18" viewBox="0 0 16 16" fill="none">
                      <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <div className="card-icon-wrap">
                    <img src={card.img} alt="icon" />
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

export default SearchedSection;