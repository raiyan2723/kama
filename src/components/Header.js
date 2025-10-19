import React from 'react';

const Header = ({ cartCount, onCartClick, onAdminClick }) => (
  <header className="header">
    <div className="container">
      <div className="logo">
        <h1>Kamagra<span className="logo-accent">Original</span></h1>
      </div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button className="btn-primary">Sign In</button>
        <button
          className="cart-icon-btn"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            fontSize: '1.7rem'
          }}
          onClick={onCartClick}
          aria-label="View Cart"
        >
          <span role="img" aria-label="cart">🛒</span>
          {cartCount > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: '#e74c3c',
                color: '#fff',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}
            >
              {cartCount}
            </span>
          )}
        </button>
        <button
          className="btn-secondary"
          style={{ marginLeft: '1rem' }}
          onClick={onAdminClick}
        >
          Admin Login
        </button>
      </div>
    </div>
  </header>
);

export default Header;