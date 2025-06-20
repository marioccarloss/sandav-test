import styled from 'styled-components';

export const SwitcherButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};

  &:focus {
    outline: none;
  }

  svg {
    width: 24px;
    height: 24px;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;
