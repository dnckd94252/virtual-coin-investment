import { useState, useEffect } from "react";
import List from "../components/Coin/List";
import useInterval from "../fnc/useInterval";

const CoinList = () => {
  const cryptToken =
    "88d390a2a6ff3f88d035267fd333e503827bf3ea214a8b3c8bf3cbb9e69f0c86";
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    fetch(`https://api.bithumb.com/public/ticker/ALL`)
      .then(res => res.json())
      .then(json => {
        const allCoin = [];
        for (const [key, value] of Object.entries(json.data)) {
          if(key === 'date') continue;
          allCoin.push({name : key, ...value});
        }
        setCoin(allCoin);
      });
  }, []);

  useInterval(() => {
    fetch(`https://api.bithumb.com/public/ticker/ALL`)
      .then(res => res.json())
      .then(json => {
        const allCoin = [];
        for (const [key, value] of Object.entries(json.data)) {
          if(key === 'date') continue;
          allCoin.push({ name: key, ...value });
        }
        setCoin(allCoin);
      });
  }, 1000);
  
  const loading = (
    <div
      id="loading"
      className=" d-flex align-items-center justify-content-center"
    >
      <div className="spin"></div>
    </div>
  );

  const list = !coin
    ? null
    : coin.map((item, i) => <List item={item} key={i} />);
  

  return (
    <section id="coinlist" className="container">
      <div className="title d-flex align-items-center justify-content-between">
        <h3>Coin List</h3>
        <div className="button d-flex align-items-center">
          <button className="btn btn-dark mr-3">메시지</button>
          <button className="btn btn-info">관리자 문의</button>
        </div>
      </div>
      <div className="contents  d-flex align-items-center justify-content-center flex-column">
        {!coin ? loading : null}
        <table className="table table-hover mt-5">
          <thead>
            <tr>
              <th scope="col">이름</th>
              <th scope="col">실시간 시세</th>
              <th scope="col">변동률</th>
              <th scope="col">24시간 총 거래금액</th>
              <th scope="col">24시간 거래량</th>
            </tr>
          </thead>
          <tbody>{!coin ? null : list}</tbody>
        </table>
      </div>
    </section>
  );
};

export default CoinList;
