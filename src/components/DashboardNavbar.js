// components/DashboardNavbar.js

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DashboardNavbar = () => {
  const router = useRouter();

  return (
    <nav className="dashboard-nav">
         <ul className="dashboard-nav-list">
      <li className={`dashboard-nav-item ${router.pathname === '/dashboard/dashboard' && 'active'}`}>
            <Link href="/dashboard/dashboard">
              <a className="dashboard-nav-link">
                <i className="fas fa-shopping-cart" /> DashBoard
              </a>
            </Link>
          </li>
      <li className={`dashboard-nav-item ${router.pathname === '/dashboard/orders' && 'active'}`}>
            <Link href="/dashboard/orders">
              <a className="dashboard-nav-link">
                <i className="fas fa-shopping-cart" /> Orders
              </a>
            </Link>
          </li>
        <li className={`dashboard-nav-item ${router.pathname === '/dashboard/categories' && 'active'}`}>
          <Link href="/dashboard/categories">
            <a className="dashboard-nav-link">
              <i className="fas fa-folder" /> Categories
            </a>
          </Link>
        </li>
        <li className={`dashboard-nav-item ${router.pathname === '/dashboard/products' && 'active'}`}>
          <Link href="/dashboard/products">
            <a className="dashboard-nav-link">
              <i className="fas fa-box" /> Products
            </a>
          </Link>
        </li>
        <li className={`dashboard-nav-item ${router.pathname === '/dashboard/users' && 'active'}`}>
          <Link href="/dashboard/users">
            <a className="dashboard-nav-link">
              <i className="fas fa-users" /> Users
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNavbar;
