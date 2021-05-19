import React, { } from 'react';
import './DetailItem.scss';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Divider } from '@material-ui/core';
const thumb2 = {
  display: 'inline-flex',
  borderRadius: 0,
  border: '3px solid #eaeaea',
  marginBottom: 2,
  marginRight: 2,
  width: 345,
  height: 500,
  padding: 5,
  boxSizing: 'border-box'
};
function DetailItem({ children }) {
  const detailProduct = useSelector(state => state.products.detailProduct)
  if (detailProduct === null) return <Redirect to="/" />;
  const { title, subtitle, img, description, price, category, gender, code, previousPrice } = detailProduct;
  return (
    <li className="detail-item">
      <p className="detail-value">{subtitle}</p>
      <div className="detail-content">
        <div className="detail-img-wrapper">
          <img src={img} alt="" className="detail-item-img" style={thumb2} />
        </div>
        <div className="detail-info">
          <h3 className="detail-title">{title}</h3>
          <h2 className="text-uppercase font-weight-bold"
           style={{ fontFamily: "ACourier New, monospace" }}
           >{description}</h2>
          <h3 style={{ fontFamily: "ACourier New, monospace" }}>Description:</h3>
          <h6 style={{ fontSize: "12px" }}>{code}</h6>
          <h3 style={{ fontFamily: "ACourier New, monospace" }}>{category}</h3>
          <h3 className="detail-subtitle">{gender}</h3>
          <h3 style={{ fontFamily: "ACourier New, monospace" }} >PKR {price} <strike style={{color:"red"}}>{" "}{previousPrice}{" "}</strike></h3>
          <Divider />
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