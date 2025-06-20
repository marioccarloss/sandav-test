import styled from 'styled-components';

export const PokemonSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
  max-height: 70vh;
  overflow-y: auto;
  padding-top: 2rem;
  padding-right: 1rem;
`;
