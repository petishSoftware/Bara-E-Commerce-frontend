import React from 'react';
import PieChart from '../../src/components/PieChart';
import BarChart from '../../src/components/BarChart';
import DashboardLayout from '../../src/layout/DashboardLayout';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

// Register the necessary components
Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

const chartData = {
  labels: ['Category 1', 'Category 2', 'Category 3'],
  datasets: [
    {
      label: 'My Dataset',
      data: [80, 120, 95],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart Title',
    },
  },
};

const Dashboard = () => {
  return (
    <DashboardLayout>
       <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="chart-row">
        <div className="chart-container">
          <h2>Bar Chart</h2>
          <BarChart data={chartData} options={options} />
        </div>
        <div className="chart-container">
          <h2>Pie Chart</h2>
          <PieChart data={chartData} options={options} />
        </div>
      </div>
    </div>
    </DashboardLayout>
   
  );
};

export default Dashboard;