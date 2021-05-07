import React, { useState, useEffect } from 'react';

const AsyncComponent = (importComponent) =>{
  const [component, setComponent] = useState(null)
  useEffect(() => {
    importComponent()
      .then(cmp => {
        setComponent(cmp.default);
      });
  })
  const C = component;
  return function (props) {
    return C ? <C {...props} /> : null;
  }
}

export default AsyncComponent;