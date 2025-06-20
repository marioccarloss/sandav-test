import {
  CardWrapper,
  Checkmark,
  EmptySlot,
  PokemonGrid,
} from './team-selection-card.styled';

const TeamSelectionCard = ({ title, team, onSelect, isSelected }) => {
  return (
    <CardWrapper onClick={onSelect} $isSelected={isSelected}>
      <Checkmark $isSelected={isSelected} />
      <h3>{title || team.name}</h3>
      {team ? (
        <PokemonGrid>
          {team.pokemons.map(pokemon => (
            <img
              key={pokemon.uniqueId || pokemon.id}
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
          ))}
        </PokemonGrid>
      ) : (
        <EmptySlot>
          <p>Seleccionar equipo</p>
        </EmptySlot>
      )}
    </CardWrapper>
  );
};

export default TeamSelectionCard;
