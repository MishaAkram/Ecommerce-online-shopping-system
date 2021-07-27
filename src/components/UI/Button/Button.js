import React from 'react';
import './Button.scss';

const Button = ({ disabled, clicked, btnType, children }) => {
  return (    
      <button
        disabled={disabled}
        onClick={clicked}
        className={["btn", btnType].join(' ')}
        style={{fontFamily: "ACourier New, monospace"}}>
        {children}
      </button>    
  )
}

export default Button;