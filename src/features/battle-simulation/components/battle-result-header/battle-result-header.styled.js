import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

export const WinnerTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const Score = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  margin-top: 0.5rem;
`;

export const TeamsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
`;

export const TeamResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-bottom: 1rem;
  }

  ${({ $isWinner }) =>
    $isWinner &&
    css`
      h3 {
        color: ${({ theme }) => theme.secondary};
      }
    `}
`;
