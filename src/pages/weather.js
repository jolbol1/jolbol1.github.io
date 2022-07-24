import React, { useState, useEffect } from 'react'
import 'chartjs-adapter-moment'
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Decimation,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Decimation,
)

const WeatherPage = () => {
  const [labels, setLabels] = useState([])
  const [temperature, setTemperature] = useState([])
  const [humidity, setHumidity] = useState([])

  useEffect(() => {
    loadApiData()
  }, [])

  const loadApiData = () => {
    fetch('/api/WeatherApi')
      .then((response) => response.json())
      .then((data) => {
        setLabels(data.map((i) => i.time))
        setHumidity(data.map((i) => i.humidity))
        setTemperature(data.map((i) => i.temperature))
      })
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
          unit: 'minute',
        },
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        suggestedMin: 15,
        suggestedMax: 35,
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        suggestedMin: 50,
        suggestedMax: 90,
      },
    },
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Celsius',
        data: temperature,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
        pointRadius: 0,
      },
      {
        label: 'Humidity',
        data: humidity,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
        pointRadius: 0,
      },
    ],
  }

  return (
    <main className="theme-color min-h-screen pb-12 text-white">
      <h1 className="header-text mb-3 pt-24 text-center text-5xl font-bold lg:text-7xl">
        Temperature And Humidity
      </h1>
      <Line data={data} options={options} />
    </main>
  )
}

export default WeatherPage
