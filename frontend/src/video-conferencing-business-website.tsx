import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// ... (Header and Footer components remain the same)

// Home page (remains the same)
const Home = () => (
  // ... (Home component code)
);

// Updated Products page
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="container mx-auto mt-8">Loading products...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p>{product.description}</p>
            <p className="mt-2 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Updated Services page
const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/services')
      .then(response => response.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="container mx-auto mt-8">Loading services...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <ul className="list-disc list-inside">
        {services.map(service => (
          <li key={service.id}>{service.name} - {service.description}</li>
        ))}
      </ul>
    </div>
  );
};

// Contact page (remains the same)
const Contact = () => (
  // ... (Contact component code)
);

// Main App component (remains the same)
const App = () => (
  // ... (App component code)
);

export default App;
