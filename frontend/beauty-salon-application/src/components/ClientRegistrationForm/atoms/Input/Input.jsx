import React from 'react';
import { StyledDiv, StyledInput, StyledLabel } from './Input.styled';

export default function Input({ label, id, type, onChange, value }) {
  let timeValue;
  if (type === 'date') {
    timeValue = value || new Date();
  }
  return (
    <StyledDiv>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        type={type}
        id={id}
        onChange={onChange}
        value={value || timeValue}
      />
    </StyledDiv>
  );
}
