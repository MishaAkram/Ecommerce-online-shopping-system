import { Divider } from '@material-ui/core';
import React from 'react';
import './Order.scss';
import Card from '@material-ui/core/Card';
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
const textStyle={ fontFamily: "ACourier New, monospace" }

const order = ({products,price}) => {
  return (
    <li className="order-item">
      <ul className="order-products">
         {products.map(product => (
           <>
            <Card
            className="cart-item"
            style={thumb}
            boxshadow={3}>
            <div className="img-wrapper">
              <img className="cart-item-img" src={product.img} style={thumb2} alt="product img"/>
            </div>
            <div className="cart-item-content">
              <h3 className="name"  style={{fontFamily: "ACourier New, monospace"}}>{product.title}</h3>
              <p className="value"  style={{fontFamily: "ACourier New, monospace"}}>Size: {product.size}</p>
              <p className="value"  style={{fontFamily: "ACourier New, monospace"}}>Quantity:{product.quantity}</p>
              <p className="value"  style={{fontFamily: "ACourier New, monospace"}}>Price: PKR {product.price}</p>
            </div>
          </Card>
           <Divider/>
          </>
        ))}
      </ul>
      <Card>
       {"   "}

      <p className="order-price" style={{fontFamily: "ACourier New, monospace"}}>Total Price: PKR {price}</p>
      <br/>
      </Card>
    </li>
  );
};

export default order;