// pages/dashboard/orders.js

import React, { useState } from 'react';
import DashboardLayout from '../../src/layout/DashboardLayout';

const OrdersPage = () => {
  // Fake order data
  const [orders, setOrders] = useState([
    { id: 1, orderNumber: 'ORD001', products: 'Product A, Product B', date: '2022-03-01', paymentStatus: 'Paid', total: 50.0, paymentMethod: 'Credit Card', orderStatus: 'Shipped' },
    { id: 2, orderNumber: 'ORD002', products: 'Product C, Product D', date: '2022-03-02', paymentStatus: 'Pending', total: 75.5, paymentMethod: 'PayPal', orderStatus: 'Processing' },
    // Add more fake data as needed
  ]);

  return (
    <DashboardLayout>
      <div>
        <h2>Orders</h2>
        <div className="actions-bar">
          <input type="text" placeholder="Search orders..." />
          <button>Add New Order</button>
          <button>Export</button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Products</th>
            <th>Date</th>
            <th>Payment Status</th>
            <th>Total</th>
            <th>Payment Method</th>
            <th>Order Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.orderNumber}</td>
              <td>{order.products}</td>
              <td>{order.date}</td>
              <td>{order.paymentStatus}</td>
              <td>${order.total.toFixed(2)}</td>
              <td>{order.paymentMethod}</td>
              <td>{order.orderStatus}</td>
              <td>
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
};

export default OrdersPage;
