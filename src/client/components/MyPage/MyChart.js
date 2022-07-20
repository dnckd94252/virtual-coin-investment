import React, { useRef, useState, useEffect } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const MyChart = props => {
  // 실시간 시세 마감 기준
  const [hour, setHour] = useState(null);
  const getForDate = () => {
    const nowDate = new Date();
    const val = [];
    for (let i = 0; i < 30; i++) {
      const target = new Date(nowDate.setDate(nowDate.getDate() - 1));
      val.push(
        `${target.getFullYear()}-${target.getMonth() + 1}-${target.getDate()}`
      );
    }
    return val;
  };

  const labels = getForDate();
  const [list, setList] = useState(null);

  useEffect(() => {
    if (
      !props.list.purchase ||
      !props.list.sale ||
      !props.record ||
      props.list.purchase.length <= 0 ||
      props.list.sale.length <= 0 ||
      !hour
    )
      return;
    pushing_data();
    drawChart();
  }, [props, hour]);

  useEffect(() => {
    if (!list || list.length <= 0) return;
  }, [list]);

  const pushing_data = async () => {
    const label_list = labels.map(item => {
      const obj = {
        date: item,
        coin: {},
        sale: 0,
        record: null,
      };
      return obj;
    });
    const purchase = props.list.purchase;
    const sale = props.list.sale;
    const record = props.record;
    if (!purchase || !sale || !record) return;
    const coinItem = {};
    const saleItem = {};
    let recordVal = 0;
    let saleVal = 0;
    await Promise.all(
      label_list.reverse().map(async (item, j) => {
        await Promise.all(
          purchase.map((ele, i) => {
            const findDate = new Date(ele.date);
            const strDate = `${findDate.getFullYear()}-${
              findDate.getMonth() + 1
            }-${findDate.getDate()}`;
            if (strDate === item.date) {
              coinItem[ele.coin] = !coinItem[ele.coin]
                ? ele.cnt
                : coinItem[ele.coin] + ele.cnt;
            }
            if (i === purchase.length - 1) {
              item.coin = Object.assign({}, coinItem);
            }
          })
        );
      })
    );
    await Promise.all(
      label_list.map(async (item, j) => {
        await Promise.all(
          sale.map((ele, i) => {
            const findDate = new Date(ele.date);
            const strDate = `${findDate.getFullYear()}-${
              findDate.getMonth() + 1
            }-${findDate.getDate()}`;
            if (strDate === item.date) {
              saleItem[ele.coin] = !saleItem[ele.coin]
                ? ele.cnt
                : saleItem[ele.coin] + ele.cnt;
              saleVal += ele.money;
            }
            if (i === sale.length - 1) {
              for (const val in saleItem) {
                item.coin[val] -= saleItem[val];
                item.sale = saleVal;
              }
            }
          })
        );
      })
    );
    await Promise.all(
      label_list.map(async (item, j) => {
        await Promise.all(
          record.map((ele, i) => {
            const findDate = new Date(ele.date);
            const strDate = `${findDate.getFullYear()}-${
              findDate.getMonth() + 1
            }-${findDate.getDate()}`;
            if (strDate === item.date) {
              recordVal = ele.value;
            }
            if (i <= record.length) {
              item.record = recordVal;
            }
          })
        );
      })
    );
    const val = await label_list.map(item => {
      let num = 0;
      for (const coinName in item.coin) {
        const coinCnt = item.coin[coinName];
        const coinFind = hour.find(ele => ele.name === coinName);
        const coinDateFind = coinFind.data.find(
          coinDate => coinDate[0] === item.date
        );
        num += coinDateFind[1] * coinCnt;
      }
      num += item.sale;
      num += item.record;
      return num;
    });
    setList(val);
  };

  const loadCoinInfo = async coins => {
    const coinData = [];
    for (const coin of coins) {
      const url = `https://api.bithumb.com/public/candlestick/${coin}_KRW/24h`;
      await fetch(url)
        .then(res => res.json())
        .then(json => {
          const fetchData = json.data.map(item => {
            const fetchDataTime = new Date(item[0]);
            const date = `${fetchDataTime.getFullYear()}-${
              fetchDataTime.getMonth() + 1
            }-${fetchDataTime.getDate()}`;
            item[0] = date;
            return item;
          });
          coinData.push({
            name: coin,
            data: fetchData.slice(-30, fetchData.length),
          });
        });
    }
    setHour(coinData);
  };

  useEffect(() => {
    if (props.list.purchase.length <= 0) return;
    const coins = props.list.purchase.map(item => item.coin);
    const num = [...new Set(coins)];
    loadCoinInfo(num);
  }, []);

  const [draw, setDraw] = useState();
  const drawChart = () => {
    const data = {
      labels : labels.reverse(),
      datasets: [
        {
          type: "line",
          label: "자본변동",
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 2,
          fill: false,
          data: !list ? null : labels.map((item, i) => list[i]),
        },
      ],
    };
    setDraw(
      <div className="chartContainer d-flex align-items-center justify-content-center">
        <div className=" d-flex align-items-center w-100 chart justify-content-center">
          <Chart type="bar" data={data} />
        </div>
      </div>
    );
  };

  return draw;
};

export default MyChart;
