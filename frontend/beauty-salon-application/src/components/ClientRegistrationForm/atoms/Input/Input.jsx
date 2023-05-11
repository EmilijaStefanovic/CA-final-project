import React from 'react';
import { StyledDiv, StyledInput, StyledLabel } from './Input.styled';

export default function Input({ label, id, type, onChange, value }) {
  return (
    <StyledDiv>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput type={type} id={id} onChange={onChange} value={value} />
    </StyledDiv>
  );
}
