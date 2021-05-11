import React from 'react';
import './WishlistItem.scss';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../../../components/UI/Button/Button';
import { showDetails, removeWishlistItem } from './../../../store/actions/productActions';

const WishlistItem = ({ item }) => {
  const { id, title, subtitle, img, description, price } = item
  const dispatch = useDispatch();
  return (
    <li className="wishlist-item">
      <h3 className="wishlist-title">{title}</h3>
      <p className="wishlist-value">{subtitle}</p>
      <div className="wishlist-content">
        <div className="wishlist-img-wrapper">
          <img src={img} alt="" className="wishlist-item-img" />
        </div>
        <div className="wishlist-info">
          <h3 className="wishlist-subtitle">Description:</h3>
          <p className="wishlist-value">{description}</p>
          <h3 className="wishlist-subtitle">Price: {price}.00 $</h3>
          <div className="btn-wrapper">
            <Link to={`/details/${id}`}>
              <Button clicked={(id) => dispatch(showDetails(id))}>Show Details</Button>
            </Link>
            <Button clicked={(id) => dispatch(removeWishlistItem(id))} btnType="dark">Remove</Button>
          </div>
        </div>
      </div>
    </li>
  );
};

WishlistItem.propTypes = {
  showDetails: PropTypes.func,
  removeWishlistItem: PropTypes.func
};
export default WishlistItem;