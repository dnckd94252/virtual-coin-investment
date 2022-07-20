import {useNavigate } from "react-router-dom";
// 자산 , 실시간 시세 , 변동률 , 거래금액 , 시가총액
const List = props => {
  const navigate = useNavigate();
  const data = props.item;
  const price = Number(data.opening_price);
  const percent = Number(data.fluctate_rate_24H);
  const clickMove = () => {
    const url = `/exchange/${data.name}`;
    navigate(url);
  }
  
  return (
    <tr className="pointer" onClick={clickMove}>
      <td>
        <h5 className=" font-weight-bold">{data.name}</h5>
      </td>
      <td>{Number(price.toFixed(3)).toLocaleString()}원</td>
      <td>{percent.toFixed(3)}%</td>
      <td>
        {Number(Number(data.acc_trade_value).toFixed(0)).toLocaleString()}원
      </td>
      <td>{Number(Number(data.units_traded).toFixed(0)).toLocaleString()}개</td>
    </tr>
  );
};

export default List;
