// import React from 'react';
// import '../../../styles/footer/footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

// const Footer = () => {
//   return (
//     <footer className="footer-main">
//       <div className="container">
//         <div className="footer-top-grid">
//           {/* Brand Column */}
//           <div className="footer-col brand-col">
//             <div className="footer-logo">
//               <img src="/images/navbar_images/navlogo.png" alt="Zingo Logo" />
//             </div>
//             <p className="footer-desc">
//               Delivering happiness one meal at a time. Experience the best flavors from top-rated restaurants, delivered fresh to your doorstep.
//             </p>
//             <div className="social-wrapper">
//   <a href="#" className="social-icon facebook">
//     <FontAwesomeIcon icon={faFacebookF} />
//   </a>
//   <a href="#" className="social-icon instagram">
//     <FontAwesomeIcon icon={faInstagram} />
//   </a>
//   <a href="#" className="social-icon twitter">
//     <FontAwesomeIcon icon={faXTwitter} />
//   </a>
//   <a href="#" className="social-icon youtube">
//     <FontAwesomeIcon icon={faYoutube} />
//   </a>
// </div>
//           </div>

//           {/* Navigation Columns */}
//           <div className="footer-col">
//             <h4 className="footer-title">Company</h4>
//             <ul className="footer-links">
//               <li><a href="#">About Us</a></li>
//               <li><a href="#">Careers</a></li>
//               <li><a href="#">Blog</a></li>
//               <li><a href="#">Press</a></li>
//             </ul>
//           </div>

//           <div className="footer-col">
//             <h4 className="footer-title">Support</h4>
//             <ul className="footer-links">
//               <li><a href="#">Help Center</a></li>
//               <li><a href="#">Safety</a></li>
//               <li><a href="#">Terms of Service</a></li>
//               <li><a href="#">Privacy Policy</a></li>
//             </ul>
//           </div>

//           {/* Contact Column */}
//           <div className="footer-col">
//             <h4 className="footer-title">Contact</h4>
//             <div className="contact-info">
//               <a href="tel:+919534618720" className="contact-link">
//                 <span className="icon">📞</span> +91 95346 18720
//               </a>
//               <a href="mailto:hello@zingo.com" className="contact-link">
//                 <span className="icon">✉️</span> hello@zingo.com
//               </a>
//             </div>
//           </div>

//           {/* App Column */}
//           <div className="footer-col app-col">
//             <h4 className="footer-title">Get the App</h4>
//             <div className="app-download-btns">
//               <a href="#" className="store-btn">
//                 <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
//               </a>
//               <a href="#" className="store-btn">
//                 <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <p>© 2026 Zingo Food Delivery. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import React from "react";
import "../../../styles/footer/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="container">
        {/* TOP GRID */}
        <div className="footer-top-grid">

          {/* BRAND */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <img
                src="/images/navbar_images/navlogo.png"
                alt="Zingo Logo"
                className="footer-logo"
              />
              <p className="footer-desc">
                Delivering happiness one meal at a time. Experience the best
                flavors from top-rated restaurants, delivered fresh to your
                doorstep.
              </p>

              <div className="social-wrapper">
                <a className="social-icon" href="#" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a className="social-icon" href="#" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className="social-icon" href="#" aria-label="Twitter">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a className="social-icon" href="#" aria-label="YouTube">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
          </div>

          {/* COMPANY */}
          <div className="footer-col">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="footer-col">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Safety</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col">
            <h4 className="footer-title">Contact</h4>
            <div className="contact-info">
              <a href="tel:+919534618720" className="contact-link">
                📞 <span>+91 95346 18720</span>
              </a>
              <a href="mailto:hello@zingo.com" className="contact-link">
                ✉️ <span>hello@zingo.com</span>
              </a>
            </div>
          </div>

          {/* APP */}
          <div className="footer-col app-col">
            <h4 className="footer-title">Get the App</h4>
            <div className="app-download-btns">
              <a href="#" className="store-btn">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                />
              </a>
              <a href="#" className="store-btn">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          © 2026 Zingo Food Delivery. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
