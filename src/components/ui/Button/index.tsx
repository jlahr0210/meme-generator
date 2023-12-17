import { StyledButton } from '../../styled/Button/Button';
import { ButtonProps } from './types';

/* Main Button component */
export function Button({ label = '', onClick }: ButtonProps) {
  return (
    <StyledButton type='button' onClick={onClick}>
      {label}
    </StyledButton>
  );
}
