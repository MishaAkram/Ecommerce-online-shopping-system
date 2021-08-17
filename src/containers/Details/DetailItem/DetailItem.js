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
  width: 425,
  height: 600,
  padding: 5,
  boxSizing: 'border-box'
};
const textStyle = { fontFamily: "ACourier New, monospace" }
function DetailItem({ children, data }) {
  const detailProduct = useSelector(state => state.products.detailProduct)
  if (detailProduct === null) return <Redirect to="/" />;
  const { title, subtitle, img, description, price, category, maincategory, code, previousPrice } = data ? data : detailProduct;
  return (
    <li className="detail-item">
      <h3 className="text-uppercase font-weight-bold" >{subtitle}</h3>
      <div className="detail-content ">
        <div className="detail-img-wrapper">
          <img src={img} alt="" className="detail-item-img" style={thumb2} />
        </div>
        <div className="detail-info">
          <h3 className="detail-title">{title}</h3>
          <h3 style={textStyle}>Description:</h3>
          <h4 className="text-uppercase font-weight-bold"
            style={textStyle}
          >{description}</h4>
          <h6 style={{ fontSize: "12px" }}>{code}</h6>
          <h3 style={textStyle}>{category}</h3>
          <h3 style={textStyle} className="detail-subtitle">{maincategory}</h3>
          <h3 style={textStyle} >PKR {price} <strike style={{ color: "red" }}>{" "}{previousPrice}{" "}</strike></h3>
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