import { typeColors } from '@/theme/type-colors';
import React from 'react';
import {
    CardContent,
    CardWrapper,
    Checkmark,
    PokemonImage,
    PokemonName,
    PokemonNumber,
    TypePill,
    TypesContainer,
} from './pokemon-card.styled';

const PokemonCard = ({ pokemon, onSelect, isSelected, isTeamFull }) => {
  const { name, sprites, types, id } = pokemon;

  const primaryType = types[0].type.name;
  const cardColor = typeColors[primaryType] || '#A8A77A';
  const isEffectivelyDisabled = isSelected || (!isSelected && isTeamFull);

  const formatPokemonId = (id) => `#${String(id).padStart(3, '0')}`;

  const officialArtwork = sprites.other?.['official-artwork']?.front_default || sprites.front_default;

  return (
    <CardWrapper
      color={cardColor}
      onClick={() => !isEffectivelyDisabled && onSelect(pokemon)}
      disabled={isEffectivelyDisabled}
    >
      <Checkmark $isSelected={isSelected} />
      <PokemonImage src={officialArtwork} alt={name} />
      <CardContent>
        <PokemonNumber>{formatPokemonId(id)}</PokemonNumber>
        <PokemonName>{name}</PokemonName>
        <TypesContainer>
          {types.map(({ type }) => (
            <TypePill key={type.name} type={type.name}>
              {type.name}
            </TypePill>
          ))}
        </TypesContainer>
      </CardContent>
    </CardWrapper>
  );
};

export default PokemonCard;
