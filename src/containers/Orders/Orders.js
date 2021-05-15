import React, { useEffect } from 'react';
import './Orders.scss';
import axios from '../../axios';
import ErrorHandler from '../../hoc/ErrorHandler';
import { useSelector, useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../components/UI/Spinner/Spinner';
import Order from './Order/Order';
import ScrollToTopOnMount from '../../shared/ScrollToTopOnMount';
import { fetchOrders } from './../../store/actions/orderActions';
function Orders() {
  const order = useSelector(state => state.order.orders)
  const loading = useSelector(state => state.order.loading)
  const token = useSelector(state => state.auth.token)
  const userId = useSelector(state => state.auth.userId)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders(token, userId));
  }, [dispatch, token, userId]);
  if (loading) {
    <Spinner />
  }
  let orders = <Spinner />;
  if (!loading) {
    (orders.length === 0)
      ? orders = <p>You do not have any orders yet.</p>
      : orders = order.map(order => (
        <Order key={order.id} products={order.products} price={order.price} />
      ))
  };

  return (
    <>
      <ScrollToTopOnMount />
      <div className="orders-container">
        <h2 className="main-title">Your Orders</h2>
        <p className="main-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend ligula neque, at faucibus metus trum sedru.</p>
        <ul className="order-list">
          {orders}
        </ul>
      </div>
    </>
  );
};

Orders.propTypes = {
  orders: PropTypes.array,
  loading: PropTypes.bool,
  token: PropTypes.string,
  userId: PropTypes.string,
  fetchOrders: PropTypes.func
};
const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};
export default connect(mapStateToProps, null)(ErrorHandler(Orders, axios));
