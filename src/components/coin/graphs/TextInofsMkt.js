import React from "react";

const TextInofsMkt = ({ coin }) => {
  const computeMktCap = (volume, price) => {
    return volume * price;
  };

  return (
    <div className="text-presentation">
      <h4>La capitalisation boursière du {coin.name.toUpperCase()}</h4>
      <p>
        La capitalisation boursière (ou plafond du marché) est la valeur totale
        de tous les coins qui ont été minés. Elle est calculée en multipliant le
        nombre de coins en circulation par le prix actuel du marché d'un seul
        coin. En sa qualité de statistique clé, elle peut indiquer le potentiel
        de croissance d'une cryptomonnaie et dans quelle mesure elle est sûre à
        l'achat, par rapport à d'autres.
      </p>
      <br />
      <p>
        Par exemple, il y a actuellement{" "}
        {coin.circulating_supply.toLocaleString()} {coin.name} en circulation à
        un prix de{" "}
        {coin.current_price < 0.5
          ? coin.current_price
          : coin.current_price.toLocaleString()}{" "}
        dollars l'unité.
      </p>
      <p>
        La capitalisation boursière du {coin.name} est donc de{" "}
        {coin.circulating_supply.toLocaleString()} x{" "}
        {coin.current_price < 0.5
          ? coin.current_price
          : coin.current_price.toLocaleString()}{" "}
        ={" "}
        {computeMktCap(
          coin.circulating_supply,
          coin.current_price
        ).toLocaleString()}{" "}
        dollars.
      </p>
    </div>
  );
};

export default TextInofsMkt;
