import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

export const AppTitle = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  margin: 0;
  font-weight: 900;
`;
