import { POKEAPI_URL } from '@/constants/api';

const LIMIT = 20;

export const getPokemons = async ({ pageParam = 0 }) => {
  const offset = pageParam * LIMIT;
  const response = await fetch(`${POKEAPI_URL}/pokemon?limit=${LIMIT}&offset=${offset}`);
  if (!response.ok) {
    throw new Error('Failed to fetch pokemons');
  }
  const data = await response.json();

  const promises = data.results.map(async (pokemon) => {
    const res = await fetch(pokemon.url);
    return res.json();
  });

  const results = await Promise.all(promises);

  return {
    ...data,
    results,
  };
};

export const getPokemonById = async (id) => {
  const response = await fetch(`${POKEAPI_URL}/pokemon/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch pokemon');
  }
  return response.json();
};

export const searchPokemon = async (name) => {
  if (!name) return [];
  const response = await fetch(`${POKEAPI_URL}/pokemon/${name.toLowerCase()}`);
  if (!response.ok) {
    if (response.status === 404) {
      return [];
    }
    throw new Error('Failed to search pokemon');
  }
  const pokemon = await response.json();
  return [pokemon];
};
