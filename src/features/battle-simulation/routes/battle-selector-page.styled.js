import styled from 'styled-components';

export const BattleSelectorWrapper = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TeamColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const TeamList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
`;
