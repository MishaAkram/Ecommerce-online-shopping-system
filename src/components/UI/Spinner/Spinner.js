import React from 'react';
import './Spinner.scss';
const thumb1 = {
  display: 'inline-flex',
  borderRadius: 0,
  marginBottom: 5,
  marginRight: 5,
  width: '500',
  height: "700",
  boxSizing: 'border-box'
};
const spinner = () => (
  <div style={thumb1}>
    <div className="loader" >Loading...</div>
  </div>
);

export default spinner;