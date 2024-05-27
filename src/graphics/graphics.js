import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Layout from "../layout/layout";
import "./graphics.css";

function Graphics({ chid }) {
  const userString = sessionStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  const [chartType, setChartType] = useState("status");

  const handleClick = (value) => {
    setChartType(value);
  };

  const handleChange = (event) => {
    setChartType(event.target.value);
  };

  const dataStatus = {
    labels: ["Pendente", "Atribuido", "Finalizado"],
    datasets: [
      {
        label: "Chamados por Status",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const dataNeighborhood = {
    labels: ["Campolim", "Centro", "Santa Rosália"],
    datasets: [
      {
        label: "Chamados por Bairro",
        data: [16, 63, 22],
        backgroundColor: [
          "rgba(177,224,198,0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: [
          "rgba(177,224,198,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "75%", // Ajusta a espessura da rosquinha
    plugins: {
      legend: {
        position: "bottom", // Define a posição da legenda para a parte inferior
        labels: {
          padding: 30,
        },
      },
    },
  };

  return (
    <>
      <Layout>
        <div className="content">
          <h1 className="text-center my-4">Relatório</h1>

          <div className="button-container">
            <button
              className={`chart-button ${
                chartType === "status" ? "selected" : ""
              }`}
              onClick={() => handleClick("status")}
            >
              Status
            </button>
            <button
              className={`chart-button ${
                chartType === "district" ? "selected" : ""
              }`}
              onClick={() => handleClick("district")}
            >
              Bairro
            </button>
          </div>

          <div className="chart-container">
            {chartType === "status" ? (
              <Doughnut data={dataStatus} options={options} />
            ) : (
              <Doughnut data={dataNeighborhood} options={options} />
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Graphics;
