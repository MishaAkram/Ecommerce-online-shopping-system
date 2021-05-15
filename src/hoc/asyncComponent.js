import React, { useState, useEffect } from 'react';

const AsyncComponent = (importComponent) =>{
  const [component, setComponent] = useState(null)
  useEffect(() => {
    importComponent()
    .then(cmp => {
      setComponent(cmp.default);
    });
  },[setComponent,importComponent])
  return function (props) {
  const C = component;
    return C ? <C {...props} /> : null;
  }
}

export default AsyncComponent;