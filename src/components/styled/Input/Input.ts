import styled from 'styled-components';

/* custom styled component */
export const Input = styled.input<{ $width?: string }>`
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 0.5rem 0.5rem;
  margin: 0px;
  width: ${(props) => props.$width || `500px`};
`;
