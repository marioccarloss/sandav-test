import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border-radius: 50px;
  border: none;
  background-color: ${({ theme }) => theme.cardBg};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  font-size: 1rem;
  color: ${({ theme }) => theme.text};

  &:focus {
    outline: none;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 1.25rem;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.text};
  opacity: 0.4;
`;
