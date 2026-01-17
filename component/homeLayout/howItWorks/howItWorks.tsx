import React from 'react';
import "../../../styles/homeLayoutCss/howItWorks/howItWorks.css";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Choose Your Food",
      desc: "Browse Thousands Of Restaurants And Pick Your Favorites",
      icon: "/images/howItWorks/food.png", 
    },
    {
      id: 2,
      title: "Place Your Order",
      desc: "Complete Your Order Securely Using Payment Options",
      icon: "/images/howItWorks/order.png",
    },
    {
      id: 3,
      title: "Live Tracking",
      desc: "Track Your Order In Real-Time From Kitchen To Doorstep",
      icon: "/images/howItWorks/location.png",
    },
    {
      id: 4,
      title: "Fast Delivery",
      desc: "Enjoy Hot And Fresh Food Delivered Straight To Your Door",
      icon: "/images/howItWorks/delivery.png",
    }
  ];

  return (
    <section className="how-it-works-sec">
      <div className="container">
        <div className="works-heading">
          <h2>How It Works</h2>
        </div>

        <div className="works-row">
          {steps.map((step) => (
            <div key={step.id} className="work-card">
              <div className="icon-wrapper">
                {/* Red Numbered Badge */}
                <span className="step-badge">{step.id}</span>
                <div className="icon-box">
                  <img src={step.icon} alt={step.title} />
                </div>
              </div>
              <h3 className="food-heading">{step.title}</h3>
              <p className="food-content">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}