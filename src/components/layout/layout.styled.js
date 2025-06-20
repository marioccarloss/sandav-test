import styled from 'styled-components';

export const MainLayout = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;

export const Content = styled.main`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;
