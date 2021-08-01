import React, { } from 'react';
import './OrderSummary.scss';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';


function OrderSummary({ order }) {
  const priceTotal = useSelector(state => state.products.priceTotal)
  const delivery = useSelector(state => state.products.delivery)
  const orderTotal = useSelector(state => state.products.orderTotal)
  const { name, email, street, country, zipCode } = order.orderData
  return (
    <div className="order-summary">
      <br />
      <br />
      <h3 className="title" style={{ fontFamily: "ACourier New, monospace" }}>Order Summary</h3>
      <div className="wrapper">
        <p className="subtitle" style={{ fontFamily: "ACourier New, monospace" }}>Name:</p>
        <p className="value" style={{ fontFamily: "ACourier New, monospace" }}>{name}</p>
      </div>
      <div className="wrapper">
        <p className="subtitle" style={{ fontFamily: "ACourier New, monospace" }}>Email:</p>
        <p className="value" style={{ fontFamily: "ACourier New, monospace" }}>{email}</p>
      </div>
      <div className="wrapper">
        <p className="subtitle" style={{ fontFamily: "ACourier New, monospace" }}>Street:</p>
        <p className="value" style={{ fontFamily: "ACourier New, monospace" }}>{street}</p>
      </div>
      <div className="wrapper">
        <p className="subtitle" style={{ fontFamily: "ACourier New, monospace" }}>Country:</p>
        <p className="value" style={{ fontFamily: "ACourier New, monospace" }}>{country}</p>
      </div>
      <div className="wrapper">
        <p className="subtitle" style={{ fontFamily: "ACourier New, monospace" }}>Zip code:</p>
        <p className="value" style={{ fontFamily: "ACourier New, monospace" }}>{zipCode}</p>
      </div>
      <div className="wrapper">
        <p className="subtitle" style={{ fontFamily: "ACourier New, monospace" }}>Total products price:</p>
        <p className="value" style={{ fontFamily: "ACourier New, monospace" }}>PKR {priceTotal}</p>
      </div>
      <div className="wrapper">
        <p className="subtitle" style={{ fontFamily: "ACourier New, monospace" }}>Delivery:</p>
        <p className="value" style={{ fontFamily: "ACourier New, monospace" }}>PKR {delivery}</p>
      </div>
      <div className="wrapper">
        <p className="subtitle" style={{ fontFamily: "ACourier New, monospace" }}>Order total:</p>
        <p className="value" style={{ fontFamily: "ACourier New, monospace" }}>PKR {orderTotal}</p>
      </div>
    </div>
  )
}

OrderSummary.propTypes = {
  priceTotal: PropTypes.number,
  delivery: PropTypes.number,
  orderTotal: PropTypes.number
};

export default OrderSummary;