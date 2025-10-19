import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = ({ onAddToCart, cart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          cart={cart}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;