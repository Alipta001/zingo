import styles from "../../../styles/globalLayoutCss/footer/footer.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${styles.footerMain} ${styles.animateFooterFadeUp} bg-[#0f172a] text-[#f8fafc] font-['Inter',_sans-serif] pt-[80px] pb-[40px]`}
      role="contentinfo"
    >
      <div className="max-w-[1440px] mx-auto px-[20px]">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr] gap-[60px] pb-[60px] border-b border-white/10 justify-items-center xl:justify-items-start">
          {/* BRAND */}
          <div className="flex flex-col items-center xl:items-start w-full md:col-span-2 lg:col-span-3 xl:col-span-1 text-center xl:text-left">
            <Image
              src="/images/navbar_images/navlogo.png"
              alt="Zingo – Food Delivery Service"
              width={150}
              height={50}
              priority
              className="object-contain max-w-none"
              style={{ width: "auto", height: "auto" }}
            />

            <p className="text-[17px] leading-[1.8] text-[#94a3b8] mb-[32px] max-w-[400px] xl:max-w-[360px] font-normal mx-auto xl:mx-0">
              Delivering happiness one meal at a time. Experience the best
              flavors from top-rated restaurants, delivered fresh to your
              doorstep.
            </p>

            <nav
              aria-label="Social media links"
              className="flex gap-[20px] items-center justify-center xl:justify-start"
            >
              <a
                className={`${styles.socialIconLink} text-3xl`}
                href="https://www.facebook.com/profile.php?id=61587199048909"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                className={`${styles.socialIconLink} text-3xl`}
                href="https://www.instagram.com/zingo4982/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                className={`${styles.socialIconLink} text-3xl`}
                href="#"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a
                className={`${styles.socialIconLink} text-3xl`}
                href="#"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </nav>
          </div>

          {/* COMPANY */}
          <nav
            className="flex flex-col items-center xl:items-start w-full text-center xl:text-left"
            aria-label="Company"
          >
            <h3 className="text-[19px] font-bold mb-[28px] text-white tracking-[0.05em] uppercase">
              Company
            </h3>
            <ul className="flex flex-col gap-[16px] list-none p-0 m-0">
              <li>
                <Link
                  href="/pages/aboutUs"
                  className={`${styles.footerNavLink} text-[16px]`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${styles.footerNavLink} text-[16px]`}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/blog"
                  className={`${styles.footerNavLink} text-[16px]`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${styles.footerNavLink} text-[16px]`}
                >
                  Press
                </Link>
              </li>
            </ul>
          </nav>

          {/* SUPPORT */}
          <nav
            className="flex flex-col items-center xl:items-start w-full text-center xl:text-left"
            aria-label="Support"
          >
            <h3 className="text-[19px] font-bold mb-[28px] text-white tracking-[0.05em] uppercase">
              Support
            </h3>
            <ul className="flex flex-col gap-[16px] list-none p-0 m-0">
              <li>
                <a href="#" className={`${styles.footerNavLink} text-[16px]`}>
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className={`${styles.footerNavLink} text-[16px]`}>
                  Safety
                </a>
              </li>
              <li>
                <a
                  href="/pages/termsAndConditions"
                  className={`${styles.footerNavLink} text-[16px]`}
                >
                  Terms And Conditions
                </a>
              </li>
              <li>
                <a href="#" className={`${styles.footerNavLink} text-[16px]`}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>

          {/* CONTACT */}
          <address className="flex flex-col items-center xl:items-start w-full text-center xl:text-left not-italic">
            <h3 className="text-[19px] font-bold mb-[28px] text-white tracking-[0.05em] uppercase">
              Contact
            </h3>
            <div className="flex flex-col gap-[20px]">
              <Link
                href="/pages/contactus"
                className="group flex items-center justify-center xl:justify-start gap-[12px] text-[16px] font-medium text-[#94a3b8] hover:text-white transition-all"
              >
                <span className="text-[#dc2625] text-[18px]">📞</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  Contact Us
                </span>
              </Link>

              <a
                href="tel:+919534618720"
                className="group flex items-center justify-center xl:justify-start gap-[12px] text-[16px] font-medium text-[#94a3b8] hover:text-white transition-all"
              >
                <span className="text-[#dc2625] text-[18px]">📞</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  +91 95346 18720
                </span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=zingoofficial01@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center xl:justify-start gap-[12px] text-[16px] font-medium text-[#94a3b8] hover:text-white transition-all"
              >
                <span className="text-[#dc2625] text-[20px]">✉️</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  zingoofficial01@gmail.com
                </span>
              </a>
            </div>
          </address>

          {/* APP */}
          <div className="flex flex-col items-center xl:items-start w-full text-center xl:text-left">
            <h3 className="text-[19px] font-bold mb-[28px] text-white tracking-[0.05em] uppercase">
              Get the App
            </h3>
            <div className="flex flex-col gap-[16px]">
              <a
                href="#"
                className="block transition-all hover:translate-y-[-2px]"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  width={160}
                  height={44}
                  style={{ width: "auto", height: "auto" }}
                />
              </a>
              <a
                href="#"
                className="block transition-all hover:translate-y-[-2px]"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  width={160}
                  height={44}
                  style={{ width: "auto", height: "auto" }}
                />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-[40px] text-center text-[15px] font-medium text-[#64748b] tracking-widest uppercase">
          © {currentYear} Zingo Food Delivery. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
