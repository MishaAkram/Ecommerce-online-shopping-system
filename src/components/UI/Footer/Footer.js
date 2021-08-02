import React from 'react';
import './Footer.scss';
import { connect } from 'react-redux';
import { filterProducts } from './../../../store/actions/productActions';
import { Link } from 'react-router-dom';
const textStyle = { fontFamily: "ACourier New, monospace" }
const footer = ({ filterProducts }) => (
  <div>
    <footer
    // className="footer"
    >
      <div className="support-section">
        <div className="container">
          <div className="support-wrapper">
            <div className="buy-from-us">
              <h4 style={textStyle}>Women</h4>
              <ul>
                <li>
                  <Link
                    style={textStyle}
                    onClick={() => filterProducts('female')}
                    to="/products/female" exact="true">Women</Link>
                </li>
                <li>
                  <Link
                    style={textStyle}
                    onClick={() => filterProducts('kurtis')}
                    to="/products/female" exact="true">Kurtis</Link>
                </li>
                <li>
                  <Link
                    style={textStyle}
                    onClick={() => filterProducts('un-stitched')}
                    to="/products/female" exact="true">Unstitched</Link>
                </li>
                <li>
                  <Link
                    style={textStyle}
                    onClick={() => filterProducts('stitched')}
                    to="/products/female" exact="true">Stitched</Link>
                </li>

              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h4 style={textStyle}>Accessories</h4>
              <ul>
                <li>
                  <Link
                    style={textStyle}
                    onClick={() => filterProducts('accessories')}
                    to="/products/accessories" >Accessories</Link>
                </li>
                <li>
                  <Link
                    style={textStyle}
                    onClick={() => filterProducts('earings')}
                    to="/products/accessories" exact="true">Earings</Link>
                </li>
                <li>
                  <Link
                    style={textStyle}
                    onClick={() => filterProducts('bracelets')}
                    to="/products/accessories" exact="true">Bracelets</Link>
                </li>
                <li>
                  <Link
                    style={textStyle}
                    onClick={() => filterProducts('stoles')}
                    to="/products/accessories" exact="true">Stoles</Link>
                </li>
                <li>
                  <Link
                    style={textStyle}
                    onClick={() => filterProducts('footware')}
                    to="/products/accessories" exact="true">Footware</Link>
                </li>
              </ul>
            </div>
            <div className="about-us col-sm-6 col-md-3 item">
              <h4 style={textStyle}>About Us</h4>
              <ul>
                <li><Link to="/about-us" style={textStyle}>Who We Are</Link></li>
                <li><Link to="/about-us" style={textStyle}>Work with Us</Link></li>
                <li><Link to="/" style={textStyle}>Social Media</Link></li>
                <li><Link to="/" style={textStyle}>Our Stores</Link></li>
              </ul>
            </div>
            <div className="support col-sm-6 col-md-3 item">
              <h4 style={textStyle}>Support</h4>
              <ul>
                <li><Link to="/contact-us" style={textStyle}>Contact Us</Link></li>
                <li><Link to="/contact-us" style={textStyle}>Find Store</Link></li>
                <li><Link to="/contact-us" style={textStyle}>Customer Service</Link></li>
                <li><Link to="/contact-us" style={textStyle}>Privacy & Cookies</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col item social">
          <Link to={{ pathname: "https://www.facebook.com" }} target="_blank" >
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to={{ pathname: "https://www.instagram.com" }} target="_blank" >
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to={{ pathname: "https://www.snapchat.com" }} target="_blank" >
            <i className="fab fa-snapchat">
            </i>
          </Link>
          <Link to={{ pathname: "https://www.twitter.com" }} target="_blank" >
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to={{ pathname: "https://github.com/MishaAkram/Ecommerce-online-shopping-system" }} target="_blank">
            <i className="fab fa-github"></i>
          </Link>
        </div>
        <p className="copyright" style={textStyle}>Elegant Store © 2021</p>
      </div>
    </footer>
  </div>
);

export default connect(null, { filterProducts })(footer);
