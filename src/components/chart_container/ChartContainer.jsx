import "./ChartContainer.css";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import dummyData from "../../data/dummyData.json";

export default function ChartContainer() {
  const [chartData, setChartData] = useState({});
  const Chart = () => {
    setChartData({
      labels: dummyData.map((i) => i.Year),
      datasets: [
        {
          label: "# of Medals",
          data: dummyData.map((i) => i.Medals),
          backgroundColor: ["#ffffffa7"],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  };
  useEffect(() => {
    Chart();
  }, []);
  return (
    <div>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
}
