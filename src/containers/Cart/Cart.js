
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

function Cart() {
  const [orderSummaryAccepted, setOrderSummaryAccepted] = useState(false);
  const history = useHistory();
  const cartItems = useSelector(state => state.products.cart)
  const purchased = useSelector(state => state.order.purchased)
  const isAuth = useSelector(state => state.auth.token !== null)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateOrder());
  }, [dispatch])

  const acceptOrder = () => {
    if (isAuth) {
      setOrderSummaryAccepted(true)
    } else {
      history.push('/auth');
    };
  };

  
  let list;
  (cartItems.length === 0) ? list = <p className="main-info" style={{ marginTop: '20px', fontWeight: '500' }}>You do not have any products on the list yet.</p> :
  list = (
    <TransitionGroup component="ul" className="cart-list">
        {cartItems.map(item => {
          const { id, img, title, size, price, total, amount } = item;
          return (
            <CSSTransition key={id} classNames="fade" timeout={300}>
              <li className="cart-item">
                <div className="img-wrapper">
                  <img className="cart-item-img" src={img} alt="product img" />
                </div>
                <div className="cart-item-content">
                  <h3 className="name">{title}</h3>
                  <p className="value">Size: {size}</p>
                  <p className="value">Quantity:</p>
                  <div className="button-wrapper">
                    <button disabled={amount === 1} onClick={() => dispatch(handleProductAmount(id, 'decrement'))} className="size">-</button>
                    <span className="size">{amount}</span>
                    <button onClick={() => dispatch(handleProductAmount(id, 'increment'))} className="size">+</button>
                  </div>
                  <p className="value">Price: {price}.00 $</p>
                  <p className="value">Total: {total}.00 $</p>
                  <Button clicked={() => dispatch(removeCartItem(id))} btnType="small">Remove</Button>
                </div>
              </li>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    );
    
    return (
      <>
      <ScrollToTopOnMount />
      <div className="cart-container">
        <h2 className="main-title">Shopping Cart</h2>
    <p className="main-info">You select <span className="bold">{(cartItems.length === 1)?1:cartItems.length}</span> product.</p>
        {cartItems.length > 0 &&
          <Button clicked={() => dispatch(clearCart())} btnType="dark">Clear Cart</Button>}
        <div className="content-wrapper">
          {list}
          <div className="checkout">
            {cartItems.length > 0 && <OrderSummary cartItems={cartItems} acceptOrder={()=>acceptOrder()} isAuth={isAuth} />}
            {cartItems.length > 0 && orderSummaryAccepted && <ContactForm />}
          </div>
        </div>
        {purchased && <Redirect to="/" />}
      </div>
    </>
  );
}
export default Cart;