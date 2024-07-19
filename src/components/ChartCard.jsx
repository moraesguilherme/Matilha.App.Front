// src/components/ChartCard.jsx

import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement // Registro do ArcElement para gráficos de pizza
);

const ChartCard = ({ type, data, options }) => {
  const defaultLineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  const defaultPieData = {
    labels: ['Paid', 'Overdue', 'Unpaid'],
    datasets: [
      {
        data: [234, 514, 345],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const defaultOptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const renderChart = () => {
    switch (type) {
      case 'line':
        return <Line data={data || defaultLineData} options={options || defaultOptions} />;
      case 'pie':
        return <Pie data={data || defaultPieData} options={options || defaultOptions} />;
      default:
        return null;
    }
  };

  return (
    <div className="chart-card">
      {renderChart()}
    </div>
  );
};

export default ChartCard;
