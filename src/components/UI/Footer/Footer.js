import React from 'react';
import './Footer.scss';

const footer = () => (
  <div>
    <footer className="footer">
      <div className="support-section">
        <div className="container">
          <div className="support-wrapper">
            <div className="buy-from-us">
              <h3>Buy from Us</h3>
              <ul>
                <li><a href="/">Women</a></li>
                <li><a href="/">Accessories  </a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>Online Shop</h3>
              <ul>
                <li><a href="/">How to Buy</a></li>
                <li><a href="/">Questions</a></li>
                <li><a href="/">Sales</a></li>
                <li><a href="/">Delivery cost</a></li>
                <li><a href="/">Regulations</a></li>
              </ul>
            </div>
            <div className="about-us col-sm-6 col-md-3 item">
              <h4>About Us</h4>
              <ul>
                <li><a href="/">Who We Are</a></li>
                <li><a href="/">Work with Us</a></li>
                <li><a href="/">Social Media</a></li>
                <li><a href="/">Our Stores</a></li>
              </ul>
            </div>
            <div className="support col-sm-6 col-md-3 item">
              <h4>Support</h4>
              <ul>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Find Store</a></li>
                <li><a href="/">Customer Service</a></li>
                <li><a href="/">Privacy & Cookies</a></li>
                <li><a href="/">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col item social"><a href="/"><i className="icon ion-social-facebook"></i></a><a href="/"><i className="icon ion-social-twitter"></i></a><a href="/"><i className="icon ion-social-snapchat"></i></a><a href="/"><i className="icon ion-social-instagram"></i></a></div>
        <p className="copyright">Company Name © 2021</p>
      </div>
    </footer>
  </div>
);

export default footer;