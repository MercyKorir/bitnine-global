import { ButtonProps } from '@/types/propTypes';
import React from 'react';
import { Container } from './ButtonElements';

type Props = {};

const Button: React.FC<ButtonProps> = ({ title, type, disabled, onClick }) => {
  return (
    <Container type={type} disabled={disabled} onClick={onClick}>
      {title}
    </Container>
  );
};

export default Button;
