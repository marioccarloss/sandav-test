import React from 'react';
import { useTheme } from 'styled-components';
import { LogContainer, MatchupContainer, PokemonColumn, RoundTitle, RoundWrapper } from './round-detail.styled';

const RoundDetail = ({ round }) => {
  const theme = useTheme();
  const { pokemon1, pokemon2, winner, log } = round;

  return (
    <RoundWrapper $winnerColor={winner.id === pokemon1.id ? theme.primary : theme.secondary}>
      <RoundTitle>Ronda {round.round}</RoundTitle>
      <MatchupContainer>
        <PokemonColumn $isWinner={winner.id === pokemon1.id}>
          <img src={pokemon1.sprites.front_default} alt={pokemon1.name} />
          <h5 style={{ textTransform: 'capitalize' }}>{pokemon1.name}</h5>
          {winner.id === pokemon1.id && <span>GANADOR</span>}
        </PokemonColumn>
        <span>VS</span>
        <PokemonColumn $isWinner={winner.id === pokemon2.id}>
          <img src={pokemon2.sprites.front_default} alt={pokemon2.name} />
          <h5 style={{ textTransform: 'capitalize' }}>{pokemon2.name}</h5>
          {winner.id === pokemon2.id && <span>GANADOR</span>}
        </PokemonColumn>
      </MatchupContainer>
      <LogContainer>
        <strong>Registro de combate:</strong>
        <ul>
          {log.map((entry, index) => <li key={index}>{entry}</li>)}
        </ul>
      </LogContainer>
    </RoundWrapper>
  );
};

export default RoundDetail;
