// src/analytics.js
export const initializeAnalytics = () => {
    const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID;
  
    if (measurementId) {
      // Dynamically load GA4 script
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);
  
      // Initialize GA4
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", measurementId);
    } else {
      console.warn("Google Analytics Measurement ID is not defined.");
    }
  };
  