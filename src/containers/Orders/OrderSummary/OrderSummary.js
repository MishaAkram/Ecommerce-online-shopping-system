import React from 'react';
import './OrderSummary.scss';

function OrderSummary({ order }) {
  const price = { priceTotal: order.priceTotal, delivery: order.delivery, orderTotal: order.price };
  const summary = listitem.map(l => (
    <div className="wrapper">
      <p className="subtitle" style={{ fontFamily: "ACourier New, monospace" }}>{l.name}</p>
      <p className="value" style={{ fontFamily: "ACourier New, monospace" }}>{l.curr}{order.orderData[l.value]}{price[l.price]}</p>
    </div>
  ))
  return (
    <div className="order-summary">
      <div style={{ margin: "30px" }} />
      <h3 className="title" style={{ fontFamily: "ACourier New, monospace" }}>Order Summary</h3>
      {summary}
    </div>
  )
}
const listitem = [
  { name: "Name:", value: "name" },
  { name: "Email:", value: "email" },
  { name: "Street:", value: "street" },
  { name: "Country", value: "country" },
  { name: "Zip code:", value: "zipCode" },
  { name: "Total products price:", price: "priceTotal", curr: "PKR " },
  { name: "Delivery", price: "delivery", curr: "PKR " },
  { name: "Order total:", price: "orderTotal", curr: "PKR " },
];
export default OrderSummary;