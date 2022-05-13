import React, { useEffect, useState } from "react";

const StarIcon = ({ coinID }) => {
  const [like, setLike] = useState(false);

  useEffect(() => {
    if (window.localStorage.coinList) {
      let favList = window.localStorage.coinList.split(",");

      if (favList.includes(coinID)) {
        setLike(true);
      }
    }
  }, [coinID]);

  const idChecker = (id) => {
    let favList = null;

    if (window.localStorage.coinList) {
      favList = window.localStorage.coinList.split(",");
    }

    if (favList) {
      if (favList.includes(id)) {
        window.localStorage.coinList = favList.filter((coin) => coin !== id);
        setLike(false);
      } else {
        window.localStorage.coinList = [...favList, coinID];
        setLike(true);
      }
    } else {
      window.localStorage.coinList = coinID;
      setLike(true);
    }
  };

  return (
    <img
      onClick={() => idChecker(coinID)}
      src={like ? "./assets/star-full.svg" : "./assets/star-empty.svg"}
      alt={coinID}
    />
  );
};

export default StarIcon;
