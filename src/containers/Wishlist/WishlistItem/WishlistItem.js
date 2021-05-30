import React from 'react';
import './WishlistItem.scss';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../../../components/UI/Button/Button';
import { showDetails, removeWishlistItem } from './../../../store/actions/productActions';

const WishlistItem = ({ item }) => {
  const { id, title, subtitle, img, description, price } = item;
  const dispatch = useDispatch();
  const history =useHistory();
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
          <h3 className="wishlist-subtitle">PKR {price}</h3>
          <div className="btn-wrapper">
                <Button
                 clicked={() =>
                  history.push({
                    pathname: "/details/" + id,
                    data: item
                  })
                  }>Show Details</Button>
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