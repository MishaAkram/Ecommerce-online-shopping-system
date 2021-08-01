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
import { Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
const textStyle = { fontFamily: "ACourier New, monospace" }

function Orders() {
  const order = useSelector(state => state.order.orders)
  const loading = useSelector(state => state.order.loading)
  const token = useSelector(state => state.auth.token)
  const userId = useSelector(state => state.auth.userId)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders(token, userId));
  }, [userId, dispatch, token,]);
  return (
    <>
      <ScrollToTopOnMount />
      <div className="orders-container">
        <h2 className="main-title" style={textStyle}>YOUR ORDERS</h2>
        <Divider />
        <ul className="order-list">
          {loading ? <Spinner /> : (order.length === 0)
            ? <div> <p style={textStyle}>You do not have any orders yet.</p>
              <div style={{ margin: "230px" }} /></div>
            :
            <div className="col">
              <div className="row">
                <div>
                  {order.map(order => (
                    <Order key={order.id} products={order.products} price={order.price} />
                  ))}
                </div>
                <div >
                  <Card>
                    Order Details

                  </Card>
                </div>
              </div>
            </div>
          }
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
