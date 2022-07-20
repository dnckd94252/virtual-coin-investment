import { useState , useEffect } from "react";
import System from "./info/System";
import useInterval from "../../fnc/useInterval";
import { useNavigate } from "react-router-dom";

const Info = props => {
  const [trade, setTrade] = useState("buy");
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const url = `https://api.bithumb.com/public/ticker/${props.pramsId}_KRW`;
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setInfo(json));
  }, []);

  useInterval(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setInfo(json));
  }, 3000);
  
  const data = !info ? null : info.data;

  const loading = (
    <div
      id="loading"
      className=" d-flex align-items-center justify-content-center"
    >
      <div className="spin"></div>
    </div>
  );
  
  const [num, setNum] = useState(0);
  const percent = !info ? null : Number(data.fluctate_rate_24H);

  const tradeTab = e => {
    const type = e.target.getAttribute("type");
    const allTab = document.getElementsByClassName("tabItem");
    for (let i = 0; i < allTab.length; i++) {
      const item = allTab[i];
      item.classList.remove("active");
    }
    e.target.classList.add("active");
    setNum(0);
    setTrade(type);
  };
  const price = !data ? null : Number(data.opening_price);
  
  return !data ? (
    loading
  ) : (
    <div className="info d-flex align-items-center justify-content-between">
      <div className="img col-3 d-flex flex-column justify-content-between">
        <button
          className="btn btn-dark mt-3 pt-3 pb-3"
          onClick={() => {
            navigate("/exchange");
          }}
        >
          거래소
        </button>
        <button
          className="btn btn-danger mt-3 pt-3 pb-3"
          onClick={() => {
            navigate("/mypage");
          }}
        >
          마이페이지
        </button>
        <button
          className="btn btn-info mt-3 pt-3 pb-3"
          onClick={() => {
            navigate("/");
          }}
        >
          홈
        </button>
      </div>
      <div className="text col-6 pl-5 pr-5">
        <div className="head">
          <div className="title d-flex align-items-center">
            <h3>{props.pramsId}</h3>
            <button className="btn btn-info ml-3">{percent.toFixed(1)}%</button>
          </div>
          <h5>{Number(price.toFixed(3)).toLocaleString()} 원/KRW</h5>
        </div>
        <div className=" d-flex align-items-center justify-content-between flex-wrap mt-5 items p-4 background-white">
          <div className="item d-flex align-items-center justify-content-between">
            <span>거래량(24H)</span>
            <p className="m-0">
              {Number(Number(data.units_traded).toFixed(0)).toLocaleString()}개
            </p>
          </div>
          <div className="item d-flex align-items-center justify-content-between">
            <span>고가(당일)</span>
            <p className="m-0">
              {Number(Number(data.max_price).toFixed(4)).toLocaleString()}원
            </p>
          </div>
          <div className="item d-flex align-items-center justify-content-between">
            <span>거래금액(당일)</span>
            <p className="m-0">
              {Number(Number(data.acc_trade_value).toFixed(4)).toLocaleString()}
              원
            </p>
          </div>
          <div className="item d-flex align-items-center justify-content-between">
            <span>저가(당일)</span>
            <p className="m-0">
              {Number(Number(data.min_price).toFixed(4)).toLocaleString()}원
            </p>
          </div>
          <div className="item d-flex align-items-center justify-content-between">
            <span>전일종가</span>
            <p className="m-0">
              {Number(
                Number(data.prev_closing_price).toFixed(4)
              ).toLocaleString()}
            </p>
          </div>
          <div className="item d-flex align-items-center justify-content-between">
            <span>당일시작가</span>
            <p className="m-0">
              {Number(Number(data.opening_price).toFixed(4)).toLocaleString()}원
            </p>
          </div>
        </div>
      </div>
      <div className="system col-3 d-flex align-items-center  flex-column p-0 overflow-hidden">
        <div className="tab border-bottom d-flex align-items-center justify-content-between w-100">
          <div
            className="item tabItem d-flex active  align-items-center justify-content-center w-100 pt-2 pb-2"
            onClick={tradeTab}
            type="buy"
          >
            매수
          </div>
          <div
            className="item tabItem d-flex  align-items-center justify-content-center w-100 pt-2 pb-2"
            onClick={tradeTab}
            type="sell"
          >
            매도
          </div>
        </div>
        <div className="content">
          <System
            trade={trade}
            user={props.user}
            data={data}
            state={[num, setNum]}
            pramsId={props.pramsId}
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
