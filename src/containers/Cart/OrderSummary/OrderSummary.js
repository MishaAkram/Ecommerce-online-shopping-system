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
      <h3 className="title">Order Summary</h3>
      <p className="info delivery-info">Free delivery below three products.</p>
      <div className="wrapper">
        <p className="subtitle">Total products price:</p>
        <p className="value">{priceTotal}.00 $</p>
      </div>
      <div className="wrapper">
        <p className="subtitle">Delivery:</p>
        <p className="value">{delivery}.00 $</p>
      </div>
      <div className="wrapper">
        <p className="subtitle">Order total:</p>
        <p className="value">{orderTotal}.00 $</p>
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