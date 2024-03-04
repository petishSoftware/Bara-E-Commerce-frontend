// pages/dashboard/categories.js

import React, { useState } from 'react';
import DashboardLayout from '../../src/layout/DashboardLayout';

const CategoriesPage = () => {
  // Fake category data
  const [categories, setCategories] = useState([
    { id: 1, name: 'Category 1', numProducts: 10, status: 'Active' },
    { id: 2, name: 'Category 2', numProducts: 5, status: 'Inactive' },
    // Add more fake data as needed
  ]);

  return (
    <DashboardLayout>
      <div>
        <h2>Categories</h2>
        <button>New Category</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of Products</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>{category.numProducts}</td>
              <td>{category.status}</td>
              <td>
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

export default CategoriesPage;