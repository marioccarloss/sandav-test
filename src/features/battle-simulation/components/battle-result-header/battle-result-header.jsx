import React from 'react';
import { HeaderWrapper, Score, TeamResult, TeamsContainer, WinnerTitle } from './battle-result-header.styled';

const BattleResultHeader = ({ result, team1, team2 }) => {
  const { winner, winnerVictories, loserVictories } = result;

  return (
    <HeaderWrapper>
      <WinnerTitle>¡{winner.name} GANA!</WinnerTitle>
      <Score>
        {team1.name}: {winner.id === team1.id ? winnerVictories : loserVictories} victorias | {team2.name}: {winner.id === team2.id ? winnerVictories : loserVictories} victorias
      </Score>
      <TeamsContainer>
        <TeamResult $isWinner={winner.id === team1.id}>
            <h3>{team1.name}</h3>
            <p>{winner.id === team1.id ? winnerVictories : loserVictories} Pokémon con vida</p>
            <p>{6 - (winner.id === team1.id ? winnerVictories : loserVictories)} Pokémon debilitados</p>
        </TeamResult>
        <h2>VS</h2>
        <TeamResult $isWinner={winner.id === team2.id}>
            <h3>{team2.name}</h3>
            <p>{winner.id === team2.id ? winnerVictories : loserVictories} Pokémon con vida</p>
            <p>{6 - (winner.id === team2.id ? winnerVictories : loserVictories)} Pokémon debilitados</p>
        </TeamResult>
      </TeamsContainer>
    </HeaderWrapper>
  );
};

export default BattleResultHeader;
