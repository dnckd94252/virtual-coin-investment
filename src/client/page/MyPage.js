import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Menu from "../components/MyPage/Menu";
import MyChart from "../components/MyPage/MyChart";

const MyPage = (props) => {
  const [login , setLogin] = props.login;
  const [list, setList] = useState(null);
  const [record, setRecord] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 내 코인 목록 , 채우기 비우기 금액
    axios.post("/coin/all", login).then(res => setList(res.data));
    axios.post("/user/record", login).then(res => setRecord(res.data));
  }, [login]);
  
  const sale =
    !list || !list.sale || list.sale.length <= 0
      ? null
      : list.sale.map((item, i) => {
          const date = !item.date ? null : new Date(item.date);
          const datetime = !item.date
            ? null
            : `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
          return (
            <tr key={i}>
              <td className="text-center">{item.coin}</td>
              <td className="text-center">{item.cnt}개</td>
              <td className="text-center">판매</td>
              <td className="text-center">{datetime}</td>
              <td className="text-center">{item.money.toLocaleString()}원</td>
            </tr>
          );
        });

  const purchase =
    !list || !list.purchase || list.purchase.length <= 0
      ? null
      : list.purchase.map((item, i) => {
          const date = !item.date ? null : new Date(item.date);
          const datetime = !item.date
            ? null
            : `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
          return (
            <tr key={i}>
              <td className="text-center">{item.coin}</td>
              <td className="text-center">{item.cnt}개</td>
              <td className="text-center">구매</td>
              <td className="text-center">{datetime}</td>
              <td className="text-center">{item.money.toLocaleString()}원</td>
            </tr>
          );
        });

  const chart = !list || !list.purchase || list.purchase.length <= 0 ? null : <MyChart record={record} list={list}  />;
  
  return (
    <section id="mypage" className="container pt-5 pb-5">
      <div className="title pt-5 d-flex align-items-center flex-column justify-content-center w-100">
        <h2>MyPage</h2>
        <h3>{!login ? null : login.name}님 환영합니다!</h3>
      </div>
      <div className="contents d-flex ">
        <div className="left d-flex flex-column col-7">
          <div className="item capital pt-4 mt-5">
            <h3>
              자본금 :
              {!login ? null : !login.money ? 0 : login.money.toLocaleString()}
              KRW
            </h3>
            {!login ? null : <Menu login={[login, setLogin]} />}
          </div>
          <div className="item p-4 mt-5 pt-5">{chart}</div>
        </div>
        <div className="right col-5">
          <div className="item h-100 mt-5 pt-4">
            <h3 className=" font-weight-bold mb-3">구매 , 판매 이력</h3>
            <div
              className="contents background-white item menu"
              style={{ width: "100%" }}
            >
              <table className="table w-100">
                <thead>
                  <tr>
                    <th scope="col" className=" text-center">
                      코인
                    </th>
                    <th scope="col" className=" text-center">
                      개수
                    </th>
                    <th scope="col" className=" text-center">
                      종류
                    </th>
                    <th scope="col" className=" text-center">
                      시간
                    </th>
                    <th scope="col" className=" text-center">
                      총 자본
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {purchase}
                  {sale}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPage;
