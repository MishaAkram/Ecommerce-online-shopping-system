import React from 'react';
import './WishlistItem.scss';
import { useDispatch } from 'react-redux';
import {useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../../../components/UI/Button/Button';
import {removeWishlistItem } from './../../../store/actions/productActions';
import { Divider } from '@material-ui/core';
const thumb2 = {
  display: 'inline-flex',
  borderRadius: 0,
  border: '3px solid #eaeaea',
  marginBottom: 2,
  marginRight: 2,
  width: 385,
  height: 500,
  padding: 5,
  boxSizing: 'border-box'
};
const textStyle={ fontFamily: "ACourier New, monospace" }

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
          <img src={img} alt="" className="wishlist-item-img" style ={thumb2} />
        </div>
        <div className="wishlist-info">
          <h3 className="wishlist-subtitle" style={textStyle}>Description:</h3>
          <p className="wishlist-value" style={textStyle}>{description}</p>
          <h3 className="wishlist-subtitle" style={textStyle}>PKR {price}</h3>
          <Divider/>
          <div className="btn-wrapper">
                <Button
                 clicked={() =>
                  history.push({
                    pathname: "/details/" + id,
                    data: item
                  })
                  } style={textStyle}>Show Details</Button>
            <Button clicked={() => dispatch(removeWishlistItem(id))} btnType="dark" style={textStyle}>Remove</Button>
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