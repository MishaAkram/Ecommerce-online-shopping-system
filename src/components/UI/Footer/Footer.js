import React from 'react';
import './Footer.scss';
import { connect } from 'react-redux';
import { filterProducts } from './../../../store/actions/productActions';
import { Link } from 'react-router-dom';
const textStyle = { fontFamily: "ACourier New, monospace" }
const footer = ({ filterProducts }) => (
  <div>
    <footer className="footer">
      <div className="support-section">
        <div className="container">
          <div className="support-wrapper">
            <div className="buy-from-us">
              <h4 style={textStyle}>Buy from Us</h4>
              <ul>
                <li>
                  <Link
                    style={textStyle}
                    onClick={() => filterProducts('female')}
                    link to="/products/female" exact>Women</Link>
                </li>
                <li>
                  <Link
                    style={textStyle}
                    onClick={() => filterProducts('accessories')}
                    link to="/products/accessories" exact>Accessories</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h4 style={textStyle}>Online Shop</h4>
              <ul>
                <li><a href="/" style={textStyle}>How to Buy</a></li>
                <li><a href="/" style={textStyle}>Questions</a></li>
                <li><a href="/" style={textStyle}>Sales</a></li>
                <li><a href="/" style={textStyle}>Delivery cost</a></li>
                <li><a href="/" style={textStyle}>Regulations</a></li>
              </ul>
            </div>
            <div className="about-us col-sm-6 col-md-3 item">
              <h4 style={textStyle}>About Us</h4>
              <ul>
                <li><Link link to="/about-us" style={textStyle}>Who We Are</Link></li>
                <li><a href="/" style={textStyle}>Work with Us</a></li>
                <li><a href="/" style={textStyle}>Social Media</a></li>
                <li><a href="/" style={textStyle}>Our Stores</a></li>
              </ul>
            </div>
            <div className="support col-sm-6 col-md-3 item">
              <h4 style={textStyle}>Support</h4>
              <ul>
                <li><a href="/contact-us" style={textStyle}>Contact Us</a></li>
                <li><a href="/" style={textStyle}>Find Store</a></li>
                <li><a href="/" style={textStyle}>Customer Service</a></li>
                <li><a href="/" style={textStyle}>Privacy & Cookies</a></li>
                <li><a href="/" style={textStyle}>Security</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col item social"><a href="/">
          <i className="bi bi-facebook"></i>
          <i className="icon ion-social-facebook"></i>
        </a>
          <a href="/">
            <i className="icon ion-social-twitter">
            </i>
          </a>
          <a href="/">
            <i className="icon ion-social-snapchat">
            </i>
          </a>
          <a href="/">
            <i className="icon ion-social-instagram">
            </i>
          </a>
        </div>
        <p className="copyright" style={textStyle}>Elegant Store © 2021</p>
      </div>
    </footer>
  </div>
);

export default connect(null, { filterProducts })(footer);
