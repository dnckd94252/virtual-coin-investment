import {
  listLoad,
  coinSell,
  saleLoad,
  reload,
  userLoad,
} from "../../../fnc/library";
import { useState, useEffect } from "react";
import axios from "axios";

const Sell = props => {
  const [user, setUser] = props.user;
  const [list, setList] = useState();
  const [sale, setSale] = useState();

  const numChange = () => {
    const val =
      9999999999 < props.numRef.current.value
        ? 9999999999
        : props.numRef.current.value;
    props.numRef.current.value = val;
    props.setNum(val);
  };

  const sellAction = () => {
    const val = {
      cnt: props.numRef.current.value,
      user,
      name: props.pramsId,
      money: Number((props.num * props.data.prev_closing_price).toFixed(0)),
    };
    coinSell(val);
    reload(props.numRef, props.setNum);
    saleLoad(val, setSale);
    userLoad(setUser);
    listLoad(val, setList);
    alert("매도를 완료하였습니다.");
  };

  useEffect(() => {
    const val = {
      user,
      name: props.pramsId,
    };
    listLoad(val, setList);
    saleLoad(val, setSale);
  }, []);
  
  const listCnt = !list || list.length <= 0
    ? 0
    : list.map(item => item.cnt).reduce((a, b) => a + b);
  const saleCnt = !sale || sale.length <= 0
    ? 0
    : sale.map(item => item.cnt).reduce((a, b) => a + b);
  
  return (
     <div className="item">
      <div className="possible w-100 mt-2 d-flex align-items-center justify-content-between">
        <span>매도 가능</span>
        <p className="m-0">
          {!list ? 0 : Number(listCnt - saleCnt).toLocaleString()}개
        </p>
      </div>
      <div className="money w-100  d-flex mt-2 justify-content-between align-items-center">
        <span>보유 자본</span>``
        <p className="m-0">{!user ? 0 : user.money.toLocaleString()}원</p>
      </div>
      <div className="buy mt-2">
        <span>매도 수량</span>
        <div className="d-flex align-items-center">
          <input
            type="number"
            className=" form-control mr-2"
            onChange={numChange}
            ref={props.numRef}
            min={0}
          />
          개
        </div>
        <div className="d-flex align-items-center justify-content-between percent mt-2">
          <span>총 매도 가격</span>
          <h5 className=" font-weight-bold">
            {Number((props.num * props.data.prev_closing_price).toFixed(0)).toLocaleString()}
            원
          </h5>
        </div>
        <button className="btn btn-info w-100" onClick={sellAction}>
          매도 하기
        </button>
        <div className="commission mt-2 d-flex align-items-center justify-content-between">
          <span>예상 수수료</span>
          <p className="m-0">
            {Math.floor(
              ((props.num * props.data.prev_closing_price) / 100) * 0.21
            ).toLocaleString()}
            원
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sell;
