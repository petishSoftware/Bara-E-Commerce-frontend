// components/DashboardLayout.js

import React from 'react';
import DashboardNavbar from '../components/DashboardNavbar';



const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      <DashboardNavbar />
      <div className="dashboard-content">{children}</div>
    </div>
  );
};

export default DashboardLayout;
