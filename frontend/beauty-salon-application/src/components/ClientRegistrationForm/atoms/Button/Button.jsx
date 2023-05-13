import React from 'react';
import { StyledButton } from './Buton.styled';

export default function Button({ text, type, onClick }) {
  return (
    <div>
      <StyledButton type={type} onClick={onClick}>
        {text}
      </StyledButton>
    </div>
  );
}
