import React from 'react';
import { StyledButton } from './button.styled';

const Button = ({ children, variant, ...props }) => {
  return <StyledButton $variant={variant} {...props}>{children}</StyledButton>;
};

export default Button;
