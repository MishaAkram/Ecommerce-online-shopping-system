import React, { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { fetchOrders } from './../../store/actions/orderActions';
import { Divider } from '@material-ui/core';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import ScrollToTopOnMount from '../../shared/ScrollToTopOnMount';
import CSSTransition from 'react-transition-group/CSSTransition';
import ErrorHandler from '../../hoc/ErrorHandler';
import axios from '../../axios';
import OrderSummary from './OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import Order from './Order/Order';
import './Orders.scss';

function Orders() {
  const order = useSelector(state => state.order.orders)
  const token = useSelector(state => state.auth.token)
  const userId = useSelector(state => state.auth.userId)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders(token, userId));
  }, [userId, dispatch, token,]);
  let list;
  (order.length === 0) ?
    list = <p className="main-info"
      style={{ marginTop: '20px', fontWeight: '500', fontFamily: "ACourier New, monospace" }}
    >You do not have any orders on the list yet.
      <div style={{ margin: "230px" }} />
    </p> :
    list = (
      <>
        {order.map(order => {
          return (
            <>
              <TransitionGroup component="ul" className="order-list">
                <CSSTransition key={order.id} classNames="fade" timeout={300}>
                  <li >
                    <Order key={order.id} products={order.products} price={order.price} />
                  </li>
                </CSSTransition>
              </TransitionGroup>
              <TransitionGroup component="ul" className="order-list">
                <CSSTransition classNames="fade" timeout={300}>
                  <OrderSummary order={order} />
                </CSSTransition>
              </TransitionGroup>
            </>
          )
        })}

      </>
    );
  return (
    <>
      <ScrollToTopOnMount />
      <div className="order-container">
        <h2 className="main-title" style={{ fontFamily: "ACourier New, monospace" }}>YOUR ORDERS</h2>
        <Divider />
        <div className="content-wrapper">
          {list}
        </div>
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
