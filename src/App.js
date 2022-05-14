import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import InfosCoins from "./pages/InfosCoins";

const App = () => {
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y"
      )
      .then((res) => setCoinsData(res.data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home key="home" allCoins={coinsData} />}
        ></Route>

        {coinsData &&
          coinsData.map((coin, index) => (
            <Route
              path={
                "/" +
                coin.name
                  .toLowerCase()
                  .replace(" ", "-")
                  .replace(" ", "-")
                  .replace(" ", "-")
              }
              element={<InfosCoins key={coin.id} coin={coin} />}
              key={index}
            ></Route>
          ))}
        <Route
          path="*"
          element={<Home key="error" allCoins={coinsData} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
