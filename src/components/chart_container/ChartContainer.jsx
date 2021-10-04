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
          label: "Number of Medals",
          data: dummyData.map((i) => i.Medals),
          backgroundColor: ["#120024"],
          borderColor: ["#120024"],
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
      <h3>Medals won by India in Olympics</h3>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "MEDALS WON", display: true },
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: "Years",
                  font: {
                    size: 16,
                    weight: "bold",
                  },
                  padding: { top: 20, left: 0, right: 0, bottom: 0 },
                },
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: "Medals",
                  font: {
                    size: 16,
                    weight: "bold",
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}
