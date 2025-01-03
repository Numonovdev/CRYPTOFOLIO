import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const LineGraph = () => {
  const sampleData = [43, 40, 50, 40, 70, 40, 45, 33, 40, 60, 40, 50, 36];

  const canvasData = {
    datasets: [
      {
        label: "Home",
        borderColor: "#87CEEB",
        pointRadius: 0,
        fill: true,
        backgroundColor: 'transparent',
        lineTension: 0,
        data: sampleData,
        borderWidth: 5,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13],
        ticks: {
          color: "grey",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        min: 0,
        max: 80,
        ticks: {
          stepSize: 10,
          color: "grey",
          font: {
            family: "Roboto",
            size: 12,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div className="w-full px-5 h-[200px] sm:h-[280px] md:h-[380px]  xl:h-[646px]">
      <Line id="home" options={options} data={canvasData} />
    </div>
  );
};

export default LineGraph;