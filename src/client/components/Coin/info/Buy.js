import axios from "axios";
import {userLoad , reload} from "../../../fnc/library";

const Buy = props => {
  const [user, setUser] = props.user;
  
  const numChange = () => {
    const val =
      9999999999 < props.numRef.current.value
        ? 9999999999
        : props.numRef.current.value;
    props.numRef.current.value = val;
    props.setNum(val);
  };

  const numAction = () => {
    if (props.num === 0) return;
    const input = {
      price: props.data.prev_closing_price,
      num: props.num,
      user: user,
      coin: props.pramsId,
    };

    axios.post("/coin/trade", input).then(res => {
      const msg = res.data;
      if (msg === "least") return alert("최소 금액은 1만원 이상입니다.");
      if (msg === "moneyFail")
        return alert("보유자본이 총 구매 가격보다 낮습니다.");
      alert("주문이 체결되었습니다.");
      userLoad(setUser);
      reload(props.numRef , props.setNum);
    });
  };
  
  return (
    <div className="item">
      <div className="possible w-100 mt-2 d-flex align-items-center justify-content-between">
        <span>매수 가능</span>
        <p className="m-0">
          {!user
            ? 0
            : Number(
                (user.money / props.data.prev_closing_price).toFixed(2)
              ).toLocaleString()}
          개
        </p>
      </div>
      <div className="money w-100  d-flex mt-2 justify-content-between align-items-center">
        <span>보유 자본</span>
        <p className="m-0">{!user ? 0 : user.money.toLocaleString()}원</p>
      </div>
      <div className="buy mt-2">
        <span>구매 수량</span>
        <div className="d-flex align-items-center">
          <input
            type="number"
            className=" form-control mr-2"
            onChange={numChange}
            min={0}
            ref={props.numRef}
          />
          개
        </div>
        <div className="d-flex align-items-center justify-content-between percent mt-2">
          <span>총 구매 가격</span>
          <h5 className=" font-weight-bold">
            {Number((props.num * props.data.prev_closing_price).toFixed(0)).toLocaleString()}
            원
          </h5>
        </div>
        <button className="btn btn-danger w-100" onClick={numAction}>
          매수 하기
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

export default Buy;
