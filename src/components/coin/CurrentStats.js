import React, { useEffect } from "react";
import MktCap from "./MktCap";
import PriceGraph from "./PriceGraph";
import TextInfosPrice from "./TextInfosPrice";
import TextInofsMkt from "./TextInofsMkt";
import TotalVolume from "./TotalVolume";

const CurrentStats = ({ coin }) => {
  useEffect(() => {
    const elementPrice = document.querySelector(".price-container");
    const elementMktCap = document.querySelector(".mkt-container");
    const elementVolume = document.querySelector(".volume-container");

    setTimeout(() => {
      elementPrice.style.opacity = "1";
    }, 1000);
    setTimeout(() => {
      elementMktCap.style.opacity = "1";
    }, 1500);
    setTimeout(() => {
      elementVolume.style.opacity = "1";
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Stats</h2>
      <div className="graphs">
        <div className="presentation-container price-container">
          <PriceGraph coinId={coin.id} />
          <TextInfosPrice coin={coin} />
        </div>
        <div className="presentation-container mkt-container">
          <TextInofsMkt coin={coin} />
          <MktCap coinId={coin.id} />
        </div>
        <div className="presentation-container volume-container">
          <TotalVolume coinId={coin.id} />
          <div className="text-presentation">
            <h4>Le volume total du {coin.name.toUpperCase()}</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              consequatur eveniet nemo culpa at nam accusamus consectetur esse
              eos minima neque beatae quidem doloremque id reprehenderit
              doloribus recusandae, expedita officiis? Cupiditate quidem nemo,
              molestiae sunt a repudiandae fuga tenetur eum nihil impedit at
              blanditiis, maxime corrupti nostr
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentStats;
