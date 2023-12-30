import React from 'react';
import {ButtonWrapper} from "./style"

const Button = ({ children,className, onClick, onMouseOver, style, disabled }) => {
  return (
      <ButtonWrapper style ={style} onClick={onClick} className={className} onMouseOver={onMouseOver} disabled={disabled}>
            {children}
      </ButtonWrapper>
   
  );
};

export default Button;