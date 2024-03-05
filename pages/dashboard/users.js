// pages/dashboard/users.js

import React, { useState } from 'react';
import DashboardLayout from '../../src/layout/DashboardLayout';

const UsersPage = () => {
  // Fake user data
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', phone: '123-456-7890', numOrders: 5, status: 'Active' },
    { id: 2, name: 'Jane Doe', phone: '987-654-3210', numOrders: 10, status: 'Inactive' },
    // Add more fake data as needed
  ]);

  return (
    <DashboardLayout>
      <div>
        <h2>Users</h2>
        <div className="actions-bar">
          <input type="text" placeholder="Search orders..." />
          <button>Add New Order</button>
          <button>Export</button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Number of Orders</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.numOrders}</td>
              <td>{user.status}</td>
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

export default UsersPage;
