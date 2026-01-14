import '../../../styles/offerSection/offerSection.css';

const OfferSection = () => {
  return (
    <section className="winter-special-banner-sec">
      <div className="container">
        <div className="winter-banner-wrapper">
          {/* Decorative shapes for background depth */}
          <div className="circle-blur"></div>
          
          <div className="winter-content-box">
            <div className="badge-glow">
              <span>❄️ LIMITED OFFER</span>
            </div>
            <h2 className="winter-title">
              Winter <br /> <span>Warmth Special</span>
            </h2>
            <p className="winter-desc">
              Experience the joy of steaming hot meals. <br />
              Fresh. Hot. Delivered in 20 mins.
            </p>
            
            <div className="cta-container">
              <div className="promo-code">
                <small>USE CODE</small>
                <span>WINTER25</span>
              </div>
              <button className="order-btn-premium">
                Order Now 
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="winter-image-box">
            <img src="/images/offerSection/winter-banner.png" alt="Delicious hot food" className="floating-img" />
            <div className="image-bg-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;