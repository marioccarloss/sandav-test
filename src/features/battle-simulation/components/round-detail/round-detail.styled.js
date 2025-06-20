import styled from 'styled-components';

export const RoundWrapper = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  padding: 1.5rem;
  border-radius: 20px;
  margin-bottom: 1.5rem;
  border-left: 5px solid ${({ theme, $winnerColor }) => $winnerColor || theme.primary};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

export const RoundTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
`;

export const MatchupContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`;

export const PokemonColumn = styled.div`
  text-align: center;
  flex: 1;
  opacity: ${({ $isWinner }) => ($isWinner ? 1 : 0.6)};
  font-weight: ${({ $isWinner }) => ($isWinner ? 'bold' : 'normal')};

  img {
    max-width: 100px;
  }
`;

export const LogContainer = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  font-size: 0.9rem;

  ul {
    padding-left: 1.2rem;
    margin: 0;
  }
`;
