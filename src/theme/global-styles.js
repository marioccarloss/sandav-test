import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'PT Sans', sans-serif;
    transition: all 0.50s linear;

    --button-primary-bg: ${({ theme }) => theme.buttons.primary.background};
    --button-primary-color: ${({ theme }) => theme.buttons.primary.color};
    --button-primary-hover: ${({ theme }) => theme.buttons.primary.hover};

    --button-secondary-bg: ${({ theme }) => theme.buttons.secondary.background};
    --button-secondary-color: ${({ theme }) => theme.buttons.secondary.color};
    --button-secondary-hover: ${({ theme }) => theme.buttons.secondary.hover};

    --button-danger-bg: ${({ theme }) => theme.buttons.danger.background};
    --button-danger-color: ${({ theme }) => theme.buttons.danger.color};
    --button-danger-hover: ${({ theme }) => theme.buttons.danger.hover};

    --button-cta-bg: ${({ theme }) => theme.buttons.cta.background};
    --button-cta-color: ${({ theme }) => theme.buttons.cta.color};
    --button-cta-hover: ${({ theme }) => theme.buttons.cta.hover};

    --button-add-bg: ${({ theme }) => theme.buttons.add.background};
    --button-add-color: ${({ theme }) => theme.buttons.add.color};
    --button-add-hover: ${({ theme }) => theme.buttons.add.hover};
  }
`;
