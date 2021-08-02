
import React, { useState, useEffect } from 'react';
import './Cart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import { useHistory } from 'react-router'
import Button from '../../components/UI/Button/Button';
import OrderSummary from './OrderSummary/OrderSummary';
import ContactForm from './ContactForm/ContactForm';
import ScrollToTopOnMount from '../../shared/ScrollToTopOnMount';
import { removeCartItem, handleProductAmount, clearCart, calculateOrder } from './../../store/actions/productActions';
import Card from '@material-ui/core/Card';
import { Divider } from '@material-ui/core';
const thumb = {
  display: 'inline-flex',
  borderRadius: 0,
  border: '3px solid #eaeaea',
  marginBottom: 5,
  marginRight: 5,
  width: '700px',
  height: "auto",
  padding: 7,
  boxSizing: 'border-box'
};
const thumb2 = {
  display: 'inline-flex',
  borderRadius: 0,
  border: '3px solid #eaeaea',
  marginBottom: 2,
  marginRight: 2,
  width: '150px',
  height: "200px",
  padding: 5,
  boxSizing: 'border-box'
};
function Cart() {
  const [orderSummaryAccepted, setOrderSummaryAccepted] = useState(false);
  const history = useHistory();
  const cartItems = useSelector(state => state.products.cart)
  const purchased = useSelector(state => state.order.purchased)
  const isAuth = useSelector(state => state.auth.token !== null)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateOrder());
  })

  const acceptOrder = () => {
    if (isAuth) {
      setOrderSummaryAccepted(true)
    } else {
      history.push('/auth');
    };
  };


  let list;
  (cartItems.length === 0) ?
    list = <div className="main-info"
      style={{ marginTop: '20px', fontWeight: '500', fontFamily: "ACourier New, monospace" }}
    >You do not have any products on the list yet.
      <div style={{ margin: "230px" }} />
    </div> :
    list = (
      <TransitionGroup component="ul" className="cart-list">
        {cartItems.map(item => {
          const { id, img, title, size, price, total, amount, maincategory, category } = item;
          return (
            <CSSTransition key={id} classNames="fade" timeout={300}>
              <li >
                <Card
                  className="cart-item"
                  style={thumb}
                  boxshadow={3}>
                  <div className="img-wrapper">
                    <img className="cart-item-img" src={img} style={thumb2} alt="product img"
                      onClick={() =>
                        history.push({
                          pathname: "/details/" + id,
                          data: item
                        })
                      } />
                  </div>
                  <div className="cart-item-content">
                    <br />
                    <h3 className="name" style={{ fontFamily: "ACourier New, monospace", fontWeight: 600 }}>{title}</h3>
                    <h3 className="name" style={{ fontFamily: "ACourier New, monospace", fontWeight: 600 }}>{maincategory}</h3>
                    {((maincategory === "female" && category !== "un-stitched") || (maincategory === 'accessories' && category === 'footware')) && <p className="value" style={{ fontFamily: "ACourier New, monospace" }}>Size: {size}</p>}
                    <p className="value" style={{ fontFamily: "ACourier New, monospace" }}>Quantity:</p>
                    <div className="button-wrapper">
                      <button disabled={amount === 1} onClick={() => dispatch(handleProductAmount(id, 'decrement'))} className="size">-</button>
                      <span className="size">{amount}</span>
                      <button onClick={() => dispatch(handleProductAmount(id, 'increment'))} className="size">+</button>
                    </div>
                    <p className="value" style={{ fontFamily: "ACourier New, monospace" }}>Price: PKR {price}</p>
                    <p className="value" style={{ fontFamily: "ACourier New, monospace" }}>Total: PKR {total}</p>
                    <Button clicked={() => dispatch(removeCartItem(id))} btnType="small">Remove</Button>
                  </div>
                </Card>
              </li>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    );

  return (
    <div style={{
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto"
    }}>
      <ScrollToTopOnMount />
      <div className="cart-container">
        <h2 className="main-title" style={{ fontFamily: "ACourier New, monospace" }}>Shopping Cart</h2>
        <Divider />
        <p className="main-info" style={{ fontFamily: "ACourier New, monospace" }}>You select <span className="bold">{(cartItems.length === 1) ? 1 : cartItems.length}</span> product.</p>
        {cartItems.length > 0 &&
          <Button clicked={() => dispatch(clearCart())} btnType="dark">Clear Cart</Button>}
        <div className="content-wrapper">
          {list}
          <div className="checkout">
            {cartItems.length > 0 && <OrderSummary cartItems={cartItems} acceptOrder={() => acceptOrder()} isAuth={isAuth} />}
            {cartItems.length > 0 && orderSummaryAccepted && <ContactForm />}
          </div>
        </div>
        {purchased && <Redirect to="/" />}
      </div>
    </div>
  );
}
export default Cart;