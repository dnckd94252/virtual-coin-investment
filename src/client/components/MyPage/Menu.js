import { useRef, useState } from "react";
import axios from "axios";

const Menu = props => {
  const [user, setUser] = props.login;
  const fillRef = useRef();
  const subtractRef = useRef();
  const [fillState, setFillState] = useState(0);
  const [subtractState, setSubtractState] = useState(0);
  const money = !user.money ? 0 : user.money;

  const fillChange = () => {
    const val =
      fillRef.current.value > 99999999999 ? 99999999999 : fillRef.current.value;
    fillRef.current.value = val;
    setFillState(val);
  };

  const subtractChange = () => {
    const val =
      subtractRef.current.value > 99999999999
        ? 99999999999
        : subtractRef.current.value;
    subtractRef.current.value = val;
    setSubtractState(val);
  };
  
  const fillAction = () => {
    const val = {
      ref: fillRef.current.value,
      user,
    };

    axios
      .post("/user/money", val)
      .then(res => {
        const check = res.data;
        if (check === "success") reloadUserData();
        fillRef.current.value = null;
      })
      .catch(err => alert("오류가 발생했습니다. 조금 뒤 다시 시도바랍니다."));
  };

  const subtractAction = () => {
    const val = {
      ref: -subtractRef.current.value,
      user,
    };

    axios
      .post("/user/money", val)
      .then(res => {
        const check = res.data;
        if (check === "success") reloadUserData();
        subtractRef.current.value = null;
      })
      .catch(err => alert("오류가 발생했습니다. 조금 뒤 다시 시도바랍니다."));
  };

  const reloadUserData = () => {
    axios.get("/user/login").then(res => {
      setUser(res.data);
      setFillState(0);
      setSubtractState(0);
    });
  };
  
  return (
    <div className="d-flex menus align-items-center justify-content-between">
      <div className="menu d-flex flex-column p-3  m-2 ">
        <div className="d-flex align-items-center justify-content-between">
          <span>보유자본</span>
          <p className="m-0">{money.toLocaleString()}원</p>
        </div>
        <span className="mt-3">
          가상자본 채우기 <b>-단위 KRW</b>
        </span>
        <div className="d-flex align-items-center justify-content-center">
          <input
            ref={fillRef}
            type="number"
            max={99999999999}
            className=" form-control mr-3"
            onChange={fillChange}
            placeholder="단위 KRW / 원"
            min={0}
          />
          <span>원</span>
        </div>
        <div className="mt-4">
          <span>금액 채우기 시 자본</span>
          <h3>{(Number(money) + Number(fillState)).toLocaleString()}원</h3>
        </div>
        <button className=" btn btn-danger fillBtn" onClick={fillAction}>
          채우기
        </button>
      </div>
      <div className="menu d-flex flex-column p-3  m-2 ">
        <div className="d-flex align-items-center justify-content-between">
          <span>보유자본</span>
          <p className="m-0">{Number(money).toLocaleString()}원</p>
        </div>
        <span className="mt-3">
          가상자본 빼기 <b>-단위 KRW</b>
        </span>
        <div className="d-flex align-items-center justify-content-center">
          <input
            ref={subtractRef}
            type="number"
            min={0}
            className=" form-control mr-3"
            placeholder="단위 KRW / 원"
            max={99999999999}
            onChange={subtractChange}
          />
          <span>원</span>
        </div>
        <div className="mt-4">
          <span>금액 빼기 시 자본</span>
          <h3>
            {(Number(money) - Number(subtractState) <= 0
              ? 0
              : Number(money) - Number(subtractState)
            ).toLocaleString()}
            원
          </h3>
        </div>
        <button className=" btn btn-info" onClick={subtractAction}>
          빼기
        </button>
      </div>
    </div>
  );
};

export default Menu;
