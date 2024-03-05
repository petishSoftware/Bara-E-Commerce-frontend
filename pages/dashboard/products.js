// pages/dashboard/products.js

import React, { useState } from 'react';
import DashboardLayout from '../../src/layout/DashboardLayout';

const ProductsPage = () => {
  // Fake product data
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 29.99, quantity: 10, imageUrl: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 19.99, quantity: 15, imageUrl: 'product2.jpg' },
    // Add more fake data as needed
  ]);

  return (
    <DashboardLayout>
      <div>
        <h2>Products</h2>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <div className="actions">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default ProductsPage;
