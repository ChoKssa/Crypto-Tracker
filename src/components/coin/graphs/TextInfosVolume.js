import React from "react";

const TextInfosVolume = ({ coin }) => {
  return (
    <div className="text-presentation">
      <h4>Le volume total du {coin.name.toUpperCase()}</h4>
      <p>
        Le volume total correspond à la quantité de coins qui circulent sur le
        marché et qui sont négociables par le public. Le volume peut montrer la
        direction et le mouvement de la crypto-monnaie ainsi qu'une prédiction
        du prix futur et de sa demande.
      </p>
      <p>
        De ce fait, un grand volume permet d'obtenir des prix équitables pour
        les crypto-monnaies et élimine les risques de distorsion des prix.
      </p>
      <br />
      <p>
        Actuellement, le volume total du {coin.name} est de{" "}
        {coin.total_volume.toLocaleString()} {coin.symbol.toUpperCase()}.
      </p>
    </div>
  );
};

export default TextInfosVolume;
