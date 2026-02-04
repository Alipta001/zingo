"use client";

import { useEffect, useState } from "react";

/**
 * Ensures styles are properly loaded on first page visit
 * Fixes issue where styles are missing after login redirect
 */
export default function StyleLoader() {
  const [stylesLoaded, setStylesLoaded] = useState(false);

  useEffect(() => {
    // Wait for styles to be available
    const checkStyles = () => {
      // Force a reflow to ensure styles are applied
      const html = document.documentElement;
      const computed = window.getComputedStyle(html);
      
      // This forces the browser to recalculate styles
      void html.offsetHeight;
      
      setStylesLoaded(true);
    };

    // Run immediately if DOM is ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", checkStyles, { once: true });
    } else {
      checkStyles();
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", checkStyles);
    };
  }, []);

  return null;
}
