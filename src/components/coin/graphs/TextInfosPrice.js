import React from "react";

const TextInfosPrice = ({ coin }) => {
  const whatVariation = (percentage) => {
    const variation = ["augmenté", "baissé"];

    if (Number(percentage) < 0) {
      return variation[1];
    } else {
      return variation[0];
    }
  };

  const createDate = (date) => {
    const newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      day: "numeric",
      month: "long",
    });
    return "le " + newDate;
  };

  return (
    <div className="text-presentation">
      <h4>Prix du {coin.name.toUpperCase()}</h4>
      <p>
        Le prix actuel du {coin.name} est de{" "}
        {coin.current_price < 1
          ? coin.current_price
          : coin.current_price.toLocaleString()}{" "}
        dollars. Sa valeur a{" "}
        {whatVariation(coin.price_change_percentage_1h_in_currency)} de{" "}
        {Math.abs(coin.price_change_percentage_1h_in_currency.toFixed(2))}%
        cette dernière heure.
      </p>
      <p>
        Il est à {Math.abs(coin.ath_change_percentage).toFixed(2)}% de son ATH
        (pic maximum atteint).
      </p>
      <p>
        Son pic est atteint {createDate(coin.ath_date)} au prix de{" "}
        {coin.ath < 1 ? coin.ath : coin.ath.toLocaleString()} dollars tandis que
        son prix le plus bas fut à hauteur de{" "}
        {coin.atl < 1 ? coin.atl : coin.atl.toLocaleString()} dollars{" "}
        {createDate(coin.atl_date)}.
      </p>
    </div>
  );
};

export default TextInfosPrice;
