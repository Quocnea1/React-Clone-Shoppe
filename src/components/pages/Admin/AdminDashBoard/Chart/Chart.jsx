import "./Chart.scss";
import { adminChartData } from "../../../../../utils/dataConfig";
import { TextToCurrency } from "../../../../global/ProcessText/ProcessText";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export default function Chart() {
  const { lastYear, nowYear } = adminChartData.salesMonth;
  const { labels, totalRenuve } = adminChartData;
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Last Year",
        data: lastYear.filter(function (value) {
          return true;
        }),
        backgroundColor: "rgb(246, 160, 200)",
        borderRadius: "3",
      },
      {
        label: "This Year",
        data: nowYear.filter(function (value) {
          return true;
        }),
        backgroundColor: "rgb(238, 77, 45)",
        borderRadius: "3",
      },
    ],
  };
  return (
    <div className="chart">
      <div className="adminContainer">
        <div className="adminChartHeading">
          <div className="adminChartHeadingTitle">
            <h3 className="title">TỔNG THU NHẬP</h3>
            <h2 className="renuve">
              <TextToCurrency number={totalRenuve} />
            </h2>
          </div>
          <label htmlFor="title" className="adminChartYear">
            THIS YEAR {new Date().getFullYear()}
          </label>
        </div>
        <div className="adminChartBar">
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
}
