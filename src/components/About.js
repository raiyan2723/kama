import React from 'react';
import '../CarRental.css';

const About = () => (
  <div className="about-page">
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>CarRental<span className="logo-accent">Pro</span></h1>
        </div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/vehicles">Vehicles</a>
          <a href="/about" className="active">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <button className="btn-primary">Sign In</button>
      </div>
    </header>

    <section className="hero about-hero">
      <div className="container">
        <div className="hero-content">
          <h1>About CarRentalPro</h1>
          <p>
            Since 2010, CarRentalPro has been committed to providing premium car rental services with a focus on customer satisfaction, safety, and convenience.
          </p>
        </div>
      </div>
    </section>

    <section className="about-details">
      <div className="container">
        <div className="about-grid">
          <div className="about-card">
            <h2>Our Mission</h2>
            <p>
              To make car rental easy, affordable, and accessible for everyone. We strive to offer a wide selection of vehicles and the best customer experience in the industry.
            </p>
          </div>
          <div className="about-card">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>🚗 Wide range of vehicles for every need</li>
              <li>💰 Transparent pricing with no hidden fees</li>
              <li>🛡️ Fully insured fleet</li>
              <li>🕒 24/7 customer support</li>
              <li>🌟 Trusted by thousands of happy customers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>CarRental<span className="logo-accent">Pro</span></h2>
            <p>Premium car rental service since 2010</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/vehicles">Vehicles</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>123 Rental Street, City</p>
            <p>info@carrentalpro.com</p>
            <p>(123) 456-7890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 CarRentalPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
);

export default About;