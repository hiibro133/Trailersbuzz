import React from "react";
import { Adsense } from "@ctrl/react-adsense";

interface AdsProps {
    client: string;
    slot: string;
    style?: React.CSSProperties; // Optional style prop
    format?: string;
  } 


  const Ads: React.FC<AdsProps> = ({ client, slot, style, format }) => {
  return (
    <div className="text-center adsbygoogle my-3">
      <Adsense
        client="ca-pub-7464883274987320"
        slot="6962736855"
        style={{ display: "block" }}
        layout="in-article"
        format="auto"
      />
    </div>
  );
}

export default Ads