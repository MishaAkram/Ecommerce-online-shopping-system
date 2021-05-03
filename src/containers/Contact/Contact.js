import React from 'react';
import './Contact.scss';
import ScrollToTopOnMount from '../../shared/ScrollToTopOnMount';

const contact = () => (
  <>
    <ScrollToTopOnMount />
    <div className="contact-container">
      <h2 className="main-title">Contact</h2>
      <p className="main-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend ligula neque, at faucibus metus rutrum sed. Fusce interdum at est eget aliquet. Suspendisse potenti. Curabitur ac luctus magna.  Donec eleifend ligula neque, at faucibus metus rutrum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <h3 className="title">Phone number:</h3>
      <p>555-444-333 (free connection)</p>
      <h3 className="title">Work hours:</h3>
      <p>Monday - Friday: 9.00 - 20.00</p>
      <p>Saturday - SUnday: 10.00 - 16.00</p>      
        <div className="col-sm-6 col-xs-12 ">
          <p>
            <strong>Let us know what you think.</strong>
          </p>
          <p>
            <span style={{ fontSize: "small" }}>Should you have any question, comments or inquiries please reach out to us.</span>
          </p>
          <h4>FOR ONLINE STORE</h4>
          <p>
            <strong>BY EMAIL</strong>
            <br />
            <a href="mailto:eshop@junaidjamshed.com">
              <span style={{ fontSize: "small" }}>eshop@junaidjamshed.com</span>
            </a>
          </p>
          <p>
            <strong>BY TELEPHONE</strong>
            <br />
            <span style={{ fontSize: "small" }}>
              <span style={{ color: "#0000ff" }}>
                <a href="tel:021111112111">
                  <span style={{ color: "#0000ff" }}>021 111 112 111</span>
                </a>
              </span> (9am - 10pm , Monday - Saturday, Sunday 11am - 08pm )</span>
          </p>
          <p>
            <strong>BY MAIL</strong>
            <br />
            <span style={{ fontSize: "small" }}>J. Junaid Jamshed Pvt Ltd</span>
            <br />
            <span style={{ fontSize: "small" }}>Head office, 40 Sector 19korangi industrial Area</span>
          </p>
          <h4>FOR OUTLETS INQUIRIES</h4>
          <p>
            <strong>BY EMAIL</strong>
            <br />
            <span style={{ fontSize: "small" }}>feedback@junaidjamshed.com</span>
          </p>
          <p>
            <strong>BY TELEPHONE</strong>
            <br />
            <span style={{ fontSize: "small" }}>
              <span style={{ color: "#0000ff" }}>
                <a href="tel:021 111 112 111">
                  <span style={{ color: "#0000ff" }}>021 111 112 111</span>
                </a>
              </span> (9am - 6pm , Monday - Saturday )</span>
          </p>
          <p>
            <strong>IN STORE LOCATIONS &amp; PHONE NUMBERS</strong>
            <br />
            <span style={{ fontSize: "small" }}>For complete store details, <a href="https://www.junaidjamshed.com/store-locations">click here</a></span></p>
          <h4>FOR CORPORATE ORDERS AND INQUIRIES</h4>
          <p>
            <strong>BY EMAIL</strong>
            <br />
            <span style={{ fontSize: "small" }}>Corporate@junaidjamshed.com</span>
          </p>
          <style>
          </style>
        </div>
        </div>
  </>
);

export default contact;