import React, { useRef } from "react";
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

const CoinChart = props => {
  const coinData = useRef(props.data.slice(-30 , props.data.length));

  const labels = coinData.current.map(item => {
    const timestamp = item[0];
    const date = new Date(timestamp);
    const str = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    return str;
  });
  
  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "종가",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: labels.map((item, i) => coinData.current[i][2]),
      },
      {
        type: "bar",
        label: "고가",
        backgroundColor: "rgb(244, 22, 33)",
        width : 3,
        data: labels.map((cur, index) => {
          return [coinData.current[index][1], coinData.current[index][3]];
        }),
                
      },
      {
        type: "bar",
        label: "저가",
        backgroundColor: "rgb(53, 162, 235)",
        data: labels.map((cur, index) => {
          return [coinData.current[index][1], coinData.current[index][4]];
        }),
      },
    ],
  };

  const ref = useRef(data);
  return (
    <div className="chartContainer pt-5 pb-5 d-flex align-items-center justify-content-center">
      <div className=" d-flex align-items-center chart justify-content-center">
        <Chart type="bar" data={ref.current}  />
      </div>
    </div>
  );
};

export default CoinChart;
