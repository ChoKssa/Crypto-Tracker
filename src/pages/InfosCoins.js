import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import CurrentStats from "../components/coin/CurrentStats";

const InfosCoins = ({ coin }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="coin-presentation">
      <div className="logo-coin">
        <NavLink to={"/"} className="home-btn">
          <img src="./assets/logo.png" alt="logo" style={{ width: "40px" }} />
          <p>Crypto Tracker</p>
        </NavLink>
        <h1>{coin.name}</h1>
        <img
          src={coin.image}
          alt={"icon of " + coin.name}
          style={{ width: "70px" }}
        />
      </div>
      <CurrentStats coin={coin} />
    </div>
  );
};

export default InfosCoins;
