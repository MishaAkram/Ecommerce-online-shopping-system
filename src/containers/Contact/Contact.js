import React from 'react';
import './Contact.scss';
import ScrollToTopOnMount from '../../shared/ScrollToTopOnMount';
import { Divider } from '@material-ui/core';
const contact = () => (
  <>
    <ScrollToTopOnMount />
    <div className="contact-container">
      <h2 className="main-title" style={{ fontFamily: "ACourier New, monospace" }}>Contact</h2>
      <Divider/>
      <p className="main-info"></p>
      <h3 className="title" style={{ fontFamily: "ACourier New, monospace" }}>Phone number:</h3>
      <p style={{ fontFamily: "ACourier New, monospace" }}>555-444-333 (free connection)</p>
      <h3 className="title" style={{ fontFamily: "ACourier New, monospace" }}>Work hours:</h3>
      <p style={{ fontFamily: "ACourier New, monospace" }}>Monday - Friday: 9.00 - 20.00</p>
      <p style={{ fontFamily: "ACourier New, monospace" }}>Saturday - SUnday: 10.00 - 16.00</p>
      <div className="col-sm-6 col-xs-12 ">
        <p style={{ fontFamily: "ACourier New, monospace" }}>
          <strong style={{ fontFamily: "ACourier New, monospace" }}>Let us know what you think.</strong>
        </p>
        <p>
          <span style={{ fontSize: "small", fontFamily: "ACourier New, monospace" }}>Should you have any question, comments or inquiries please reach out to us.</span>
        </p>
        <h4 style={{ fontFamily: "ACourier New, monospace" }}>FOR ONLINE STORE</h4>
        <p>
          <strong style={{ fontFamily: "ACourier New, monospace" }}>BY EMAIL</strong>
          <br />
          <a href="mailto:eshop@junaidjamshed.com">
            <span style={{ fontSize: "small", fontFamily: "ACourier New, monospace" }}>eshop@junaidjamshed.com</span>
          </a>
        </p>
        <p>
          <strong style={{ fontFamily: "ACourier New, monospace" }}>BY TELEPHONE</strong>
          <br />
          <span style={{ fontSize: "small", fontFamily: "ACourier New, monospace" }}>
            <span style={{ color: "#0000ff", fontFamily: "ACourier New, monospace" }}>
              <a href="">
                <span style={{ color: "#0000ff", fontFamily: "ACourier New, monospace" }}>021 111 112 111</span>
              </a>
            </span> (9am - 10pm , Monday - Saturday, Sunday 11am - 08pm )</span>
        </p>

        <p>
          <strong style={{ fontFamily: "ACourier New, monospace" }}>BY TELEPHONE</strong>
          <br />
          <span style={{ fontSize: "small", fontFamily: "ACourier New, monospace" }}>
            <span style={{ color: "#0000ff", fontFamily: "ACourier New, monospace" }}>
              <a href="">
                <span style={{ color: "#0000ff" }}>021 111 112 111</span>
              </a>
              </span>
              </span>
              </p>
              <p>
                </p>
              <h4 style={{ fontFamily: "ACourier New, monospace" }}>FOR CORPORATE ORDERS AND INQUIRIES</h4>
              <p>
                <strong style={{ fontFamily: "ACourier New, monospace" }}>BY EMAIL</strong>
                <br />
                <span style={{ fontSize: "small" }}>Corporate@elegantStore.com</span>
              </p>
              <style>
              </style>
        </div>
        </div>
  </>
);

export default contact;