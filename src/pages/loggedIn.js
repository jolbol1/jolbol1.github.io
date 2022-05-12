import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { Line } from "react-chartjs-2";

const LoggedInPage = () => {
  const [userName, setUsername] = useState("Loading Profile...");
  const [labels, setLabels] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [humidity, setHumidity] = useState([]);

  useEffect(() => {
    fetch(`/.auth/me`)
      .then((response) => response.json())
      .then((resultData) => {
        setUsername(resultData.clientPrincipal.userDetails);
      });
    loadApiData();
  }, []);

  const loadApiData = () => {
    fetch('/api/WeatherApi')
    .then(response => response.json())
    .then(data => {
      setLabels(data.map(i => i.time));
      setHumidity(data.map(i => i.humidity));
      setTemperature(data.map(i => i.temperature));
    });
  }

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Weather Readings',
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
            unit: 'minute'
        },
      y: {
        type: 'linear' ,
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Celsius',
        data: temperature,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Humidity',
        data: humidity,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
  }

  return (
    <main className="theme-color h-screen pb-12 text-white">
      <h1 className="header-text mb-3 pt-24 text-center text-5xl font-bold lg:text-7xl">
        Logged in successfully - AzureDev.
      </h1>
      <h2 className="mb-3 pt-12 text-center text-3xl font-bold lg:text-5xl">
        {userName}
      </h2>
      <Line data={data} options={options} />
    </main>
  );
};

export default LoggedInPage;
