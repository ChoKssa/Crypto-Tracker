import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import colors from "../../../styles/_settings.scss";

const MktCap = ({ coinId }) => {
  const [duration, setDuration] = useState(1);
  const [coinData, setCoinData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(680);

  const chartDuration = [
    [1, "1 jour"],
    [3, "3 jours"],
    [7, "7 jours"],
    [30, "1 mois"],
    [91, "3 mois"],
    [181, "6 mois"],
    [365, "1 an"],
    [3000, "Max"],
  ];

  useEffect(() => {
    if (window.innerWidth <= 740) setWindowWidth(window.innerWidth / 1.2);

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 740) {
        setWindowWidth(680);
      } else {
        setWindowWidth(window.innerWidth / 1.2);
      }
    });
  }, []);

  useEffect(() => {
    let dataArray = [];

    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${
          duration > 32 ? "&interval=daily" : ""
        }`
      )
      .then((res) => {
        for (let i = 0; i < res.data.market_caps.length; i++) {
          let price = res.data.market_caps[i][1];

          dataArray.push({
            date: new Date(res.data.market_caps[i][0]).toLocaleDateString(),
            marketcap: price < "50" ? price : parseInt(price),
          });
        }

        setCoinData(dataArray);
      });
  }, [duration, coinId]);

  return (
    <div className="mkt-cap-graph graph">
      <h4>Capitalisation boursière</h4>
      <div className="btn-container">
        {chartDuration.map((el) => {
          return (
            <div
              key={el[0]}
              htmlFor={"btn" + el[0]}
              onClick={() => setDuration(el[0])}
              className={el[0] === duration ? "filter filter-active" : "filter"}
            >
              {el[1]}
            </div>
          );
        })}
      </div>
      <AreaChart
        width={windowWidth}
        height={250}
        data={coinData}
        margin={{ top: 20, right: 5, left: 50, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="7%" stopColor={colors.color1} stopOpacity={0.8} />
            <stop offset="93%" stopColor={colors.white1} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis domain={["auto", "auto"]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="marketcap"
          strokes={colors.color1}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
};

export default MktCap;
