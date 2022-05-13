import React from "react";
import GlobalChart from "../components/home/GlobalChart";
import HeaderInfos from "../components/home/HeaderInfos";
import Table from "../components/home/Table";
import ToTop from "../components/home/ToTop";

const App = ({ allCoins }) => {
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     const isHome = document.querySelector(".table-header");

  //     if (window.scrollY > 145) {
  //       if (isHome.length > 0)
  //         document.querySelector(".table-header").classList.add("active");
  //     } else {
  //       if (isHome.length > 0)
  //         document.querySelector(".table-header").classList.remove("active");
  //     }
  //   });
  // }, []);

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
