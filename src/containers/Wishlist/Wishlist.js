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
function Wishlist() {
  const wishlistItems = useSelector(state => state.products.wishlist)
  const dispatch = useDispatch()
  let list;
  (wishlistItems.length === 0) ? list = <p className="main-info" style={{ marginTop: '20px', fontWeight: '500' }}>You do not have any products on the list yet.</p> :
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
    <>
      <ScrollToTopOnMount />
      <div className="wishlist-container">
        <h2 className="main-title">Wishlist</h2>
        <p className="main-info">Lorem ipsum dolor adipiscing elit. Donec eleifend ligula neque, at faucibus metus trum sedru.</p>
        {list}
        {wishlistItems.length > 0 &&
          <Button clicked={() => dispatch(clearWishlist())} btnType="dark">Clear Wishlist</Button>
        }
      </div>
    </>
  )
}

Wishlist.propTypes = {
  wishlistItems: PropTypes.array,
  clearWishlist: PropTypes.func
};
export default Wishlist;