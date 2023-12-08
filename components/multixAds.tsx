import React, { useEffect } from "react";

function MuiltAds() {
  useEffect(() => {
    // Load Google Ads script dynamically
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7464883274987320";
    script.crossOrigin = "anonymous";
    script.async = true;

    script.addEventListener("load", () => {
      // Initialize ads once script is loaded
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    });

    document.head.appendChild(script);

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
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-7464883274987320"
        data-ad-slot="7819726799"
      ></ins>
    </div>
  );
}

export default MuiltAds;


