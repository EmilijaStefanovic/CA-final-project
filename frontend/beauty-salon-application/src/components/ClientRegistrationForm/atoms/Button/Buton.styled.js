import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: var(--first-color);
  color: var(--third-color);
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0.5rem 3rem;
  border: none;
  border-radius: 7px;

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
