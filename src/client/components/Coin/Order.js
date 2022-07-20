import { useState, useEffect } from "react";
import { listLoad } from "../../fnc/library";

const Order = props => {
  const [list, setList] = useState();
  const [user, setUser] = props.user;
  const val = {
    user: user,
    name: props.name,
  };

  useEffect(() => {
    listLoad(val, setList);
  }, [user]);

  const table = !list
    ? null
    : list.map((item, i) => {
        const date = new Date(item.date);
        const day = `${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDate()}`;
        return (
          <tr className="text-center" key={i}>
            <td className="price">{item.money.toLocaleString()}원</td>
            <td className="num">{item.cnt}</td>
            <td className="date">{day}</td>
          </tr>
        );
      });
  
  return (
    <div className="order">
      <div className="title d-flex menu align-items-center justify-content-between">
        <div className="ml-2 d-flex align-items-center">
          <i className="fa-solid fa-book mr-2"></i>
          <span>체결내역</span>
        </div>
      </div>
      <div className="contents d-flex align-items-center flex-column">
        <table className="table table-sm">
          <thead>
            <tr className="text-center">
              <th scope="col">총가격(KRW)</th>
              <th scope="col">개수</th>
              <th scope="col">체결일</th>
            </tr>
          </thead>
          <tbody>{table}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
