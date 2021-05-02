import React, {} from 'react';
import './DetailItem.scss';
import {useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function DetailItem({children}){
  const detailProduct=useSelector(state => state.products.detailProduct)
     if (detailProduct === null) return <Redirect to="/" />;
    const { title, subtitle, img, description, price } = detailProduct;
    return (
      <li className="detail-item">
        <h3 className="detail-title">{title}</h3>
        <p className="detail-value">{subtitle}</p>
        <div className="detail-content">
          <div className="detail-img-wrapper">
            <img src={img} alt="" className="detail-item-img" />
          </div>
          <div className="detail-info">
            <h3 className="detail-subtitle">Description:</h3>
            <p className="detail-value">{description}</p>
            <h3 className="detail-subtitle">Price: {price}.00 $</h3>
            {children}
          </div>
        </div>
      </li>
    )
    };

DetailItem.propTypes = {
  detailProduct: PropTypes.object
};

export default DetailItem;