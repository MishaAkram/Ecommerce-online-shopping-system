import React from 'react';
import './Wishlist.scss';
import { useSelector, useDispatch } from 'react-redux';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import PropTypes from 'prop-types';
import WishlistItem from './WishlistItem/WishlistItem';
import Button from '../../components/UI/Button/Button';
import ScrollToTopOnMount from '../../shared/ScrollToTopOnMount';
import { clearWishlist } from './../../store/actions/productActions';
import { Divider } from '@material-ui/core';

const textStyle={ fontFamily: "ACourier New, monospace" }

function Wishlist() {
  const wishlistItems = useSelector(state => state.products.wishlist)
  const dispatch = useDispatch()
  let list;
  (wishlistItems.length === 0) ? list = <p className="main-info" style={{ marginTop: '20px', fontWeight: '500' ,fontFamily: "ACourier New, monospace"}}>You do not have any products on the list yet.
   <div class="cellContainer">
    <div style={{margin: "250px"}}/>
  </div></p> :
    list = (
      <TransitionGroup component="ul" className="wishlist-list">
        {wishlistItems.map(item => (
          <CSSTransition key={item.id} classNames="fade" timeout={300}>
            <WishlistItem item={item} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  return (
    <div style={{
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto"
    }}>
      <ScrollToTopOnMount />
      <div className="wishlist-container">
        <h2 className="main-title" style={textStyle}>My Wishlist</h2>
        <Divider/>
        <p className="main-info"></p>
        {list}
        {wishlistItems.length > 0 &&
          <Button clicked={() => dispatch(clearWishlist())} btnType="dark" style={textStyle}>Clear Wishlist</Button>
        }
      </div>
    </div>
  )
}

Wishlist.propTypes = {
  wishlistItems: PropTypes.array,
  clearWishlist: PropTypes.func
};
export default Wishlist;