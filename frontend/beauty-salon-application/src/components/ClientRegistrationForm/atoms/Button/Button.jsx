import React from 'react';
import { StyledButton } from './Buton.styled';

export default function Button({ text, type }) {
  return (
    <div>
      <StyledButton type={type}>{text}</StyledButton>
    </div>
  );
}
