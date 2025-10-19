import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductCard from './components/ProductCard';
import CartModal from './components/CartModal';
import SuccessNotification from './components/SuccessNotification';
import './CarRental.css';
import ImageSlider from "../src/helper/Slider";


const Home = ({ onAdminClick }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (err) {
        setProducts([]); // fallback to empty array on error
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const cartItem = cart.find(item => item.id === product.id);
    const currentQty = cartItem ? cartItem.quantity : 0;

    if (product.stock === 0 || currentQty >= product.stock) {
      setNotificationMessage('Sold Out!');
      setShowNotification(true);
      return;
    }

    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        if (existing.quantity < product.stock) {
          return prevCart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return prevCart;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setNotificationMessage(`${product.name} added to cart!`);
    setShowNotification(true);
  };

  const handleAddQuantity = (product) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === product.id && item.quantity < product.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleMinusQuantity = (product) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="car-rental-app">
      <Header
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        onAdminClick={onAdminClick}
      />
      <section className="">
          <ImageSlider />
      </section>

      <section className="featured-vehicles">
        <div className="container">
          <div className="section-header">
            <h2>Our Products</h2>
            <p>Choose from our wide selection of quality products</p>
          </div>
          <div className="car-grid">
            {products
              .filter(product => product.stock > 0)
              .map(product => (
                <ProductCard key={product.id} product={product} cart={cart} onAddToCart={handleAddToCart} />
              ))}
            {/* Show sold out products at the end */}
            {products
              .filter(product => product.stock === 0)
              .map(product => (
                <ProductCard key={product.id} product={product} cart={cart} onAddToCart={handleAddToCart} />
              ))}
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛒</div>
              <h3>Easy Shopping</h3>
              <p>Add products to your cart and checkout in seconds.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive rates with no hidden fees.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Get your products delivered quickly and safely.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📞</div>
              <h3>Support</h3>
              <p>Our customer service team is here to help you.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h2>Kamagra<span className="logo-accent">Original</span></h2>
              <p>The Best Shop to Buy Kamagra Online</p>
            </div>
            <div className="footer-links">
              <h3>Quick Links</h3>
              <a href="/">Home</a>
              <a href="/products">Products</a>
              <a href="/about">About Us</a>
              <a href="/contact">Contact</a>
            </div>
            <div className="footer-contact">
              <h3>Contact Us</h3>
              <p>Hegedus Gyula utca 13, 1136 Budapest, Hungary</p>
              <p>info@kamagraoriginal.to</p>
              <p>+36 1 234 5678</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Kamagra Original. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <CartModal
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onAdd={handleAddQuantity}
        onMinus={handleMinusQuantity}
      />

      {showNotification && (
        <SuccessNotification
          message={notificationMessage}
          onClose={closeNotification}
        />
      )}
    </div>
  );
};

export default Home;