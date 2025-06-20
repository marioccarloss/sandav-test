import styled, { css, keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.4);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;

export const StyledButton = styled.button`
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);

  ${({ $variant = 'primary', theme }) => {
    const buttonTheme = theme.buttons?.[$variant] || theme.buttons?.primary;
    return css`
      background-color: ${buttonTheme?.background};
      color: ${buttonTheme?.color};
      text-transform: uppercase;
      animation: ${$variant === 'cta' ? css`${pulseAnimation} 2s infinite` : 'none'};

      &:hover:not(:disabled) {
        background-color: ${buttonTheme?.hover};
      }
    `;
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
