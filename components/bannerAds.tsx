import React, { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: { push?: () => void }[];
  }
}

function BannerAds() {
  useEffect(() => {
    // Load Google Ads script dynamically
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7464883274987320";
    script.crossOrigin = "anonymous";
    script.async = true;
    document.head.appendChild(script);

    // Add event listener for script load completion
    script.addEventListener("load", () => {
      // Initialize ads after script is loaded
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    });

    return () => {
      // Cleanup script tag when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7464883274987320"
        data-ad-slot="6962736855"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}

export default BannerAds;


