// pages/dashboard/dashboard.js

import React from 'react';
import DashboardLayout from '../../src/layout/DashboardLayout';
import OrdersPage from './orders';
import CategoriesPage from './categories';
import ProductsPage from './products';
import UsersPage from './users';
import { Bar, Pie } from 'react-chartjs-2';

import { Chart as ChartJS, CategoryScale } from 'chart.js';
ChartJS.register(CategoryScale);


const DashBoardPage = () => {
  // Sample data for charts
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Orders',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const pieChartData = {
    labels: ['Category A', 'Category B', 'Category C', 'Category D'],
    datasets: [
      {
        data: [300, 50, 100, 150],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
      },
    ],
  };

  return (
    <DashboardLayout>
      <div>
        <h2>DashBoard</h2>
        {/* Add your content related to orders here */}
        <OrdersPage />
        <CategoriesPage />
        <ProductsPage />
        <UsersPage />

        {/* Example Bar Chart */}
        <div style={{ marginTop: '30px' }}>
          <h3>Monthly Orders</h3>
          <Bar data={barChartData} />
        </div>

        {/* Example Pie Chart */}
        <div style={{ marginTop: '30px' }}>
          <h3>Category Distribution</h3>
          <Pie data={pieChartData} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashBoardPage;
