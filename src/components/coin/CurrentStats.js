import React, { useEffect } from "react";
import MktCap from "./graphs/MktCap";
import PriceGraph from "./graphs/PriceGraph";
import TextInfosPrice from "./graphs/TextInfosPrice";
import TextInfosVolume from "./graphs/TextInfosVolume";
import TextInofsMkt from "./graphs/TextInofsMkt";
import TotalVolume from "./graphs/TotalVolume";

const CurrentStats = ({ coin }) => {
  useEffect(() => {
    const elementPrice = document.querySelector(".price-container");
    const elementMktCap = document.querySelector(".mkt-container");
    const elementVolume = document.querySelector(".volume-container");

    setTimeout(() => {
      elementPrice.style.opacity = "1";
    }, 500);
    setTimeout(() => {
      elementMktCap.style.opacity = "1";
    }, 1000);
    setTimeout(() => {
      elementVolume.style.opacity = "1";
    }, 1500);
  }, []);

  const reverseComponents = (type, second) => {
    const priceGraph = <PriceGraph coinId={coin.id} />;
    const priceText = <TextInfosPrice coin={coin} />;
    const volumeGraph = <TotalVolume coinId={coin.id} />;
    const volumeText = <TextInfosVolume coin={coin} />;

    switch (type) {
      case "price":
        if (window.innerWidth > 1437) {
          if (second) return priceText;
          else return priceGraph;
        } else {
          if (second) return priceGraph;
          else return priceText;
        }
      case "volume":
        if (window.innerWidth > 1437) {
          if (second) return volumeText;
          else return volumeGraph;
        } else {
          if (second) return volumeGraph;
          else return volumeText;
        }
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Quelques stats</h2>
      <div className="graphs">
        <div className="presentation-container price-container">
          {reverseComponents("price", false)}
          {reverseComponents("price", true)}
        </div>
        <div className="presentation-container mkt-container">
          <TextInofsMkt coin={coin} />
          <MktCap coinId={coin.id} />
        </div>
        <div className="presentation-container volume-container">
          {reverseComponents("volume", false)}
          {reverseComponents("volume", true)}
        </div>
      </div>
    </div>
  );
};

export default CurrentStats;
