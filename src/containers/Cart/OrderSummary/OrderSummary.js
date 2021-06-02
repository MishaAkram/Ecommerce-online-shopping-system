import React, { } from 'react';
import './OrderSummary.scss';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../../../components/UI/Button/Button';

function OrderSummary({ acceptOrder, isAuth, cartItems }) {
  const priceTotal = useSelector(state => state.products.priceTotal)
  const delivery = useSelector(state => state.products.delivery)
  const orderTotal = useSelector(state => state.products.orderTotal)
  return (
    <div className="order-summary">
      <h3 className="title"  style={{fontFamily: "ACourier New, monospace"}}>Order Summary</h3>
      <p className="info delivery-info" style={{fontFamily: "ACourier New, monospace"}}>Free delivery below three products.</p>
      <div className="wrapper">
        <p className="subtitle" style={{fontFamily: "ACourier New, monospace"}}>Total products price:</p>
        <p className="value" style={{fontFamily: "ACourier New, monospace"}}>PKR {priceTotal}</p>
      </div>
      <div className="wrapper">
        <p className="subtitle" style={{fontFamily: "ACourier New, monospace"}}>Delivery:</p>
        <p className="value" style={{fontFamily: "ACourier New, monospace"}}>PKR {delivery}</p>
      </div>
      <div className="wrapper">
        <p className="subtitle" style={{fontFamily: "ACourier New, monospace"}}>Order total:</p>
        <p className="value" style={{fontFamily: "ACourier New, monospace"}}>PKR {orderTotal}</p>
      </div>
      <Button clicked={acceptOrder} btnType="dark">{isAuth ? 'To Payment' : 'Sign Up to Order'}</Button>
    </div>
  )
}

OrderSummary.propTypes = {
  priceTotal: PropTypes.number,
  delivery: PropTypes.number,
  orderTotal: PropTypes.number
};

export default OrderSummary;