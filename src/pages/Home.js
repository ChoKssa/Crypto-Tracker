import React from "react";
import GlobalChart from "../components/home/GlobalChart";
import HeaderInfos from "../components/home/HeaderInfos";
import Table from "../components/home/Table";
import ToTop from "../components/home/ToTop";

const App = ({ allCoins }) => {
  return (
    <div className="app-container">
      <header>
        <HeaderInfos />
        <GlobalChart coinsData={allCoins} />
      </header>
      <Table coinsData={allCoins} />
      <ToTop />
    </div>
  );
};

export default App;
