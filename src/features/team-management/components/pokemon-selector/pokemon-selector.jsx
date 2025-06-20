import { getPokemons, searchPokemon } from '@/api/pokemon-api';
import EmptyState from '@/components/ui/empty-state/empty-state';
import Input from '@/components/ui/input/input';
import { Spinner } from '@/components/ui/spinner/spinner';
import { useDebounce } from '@/hooks/use-debounce';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import React, { useEffect, useMemo, useRef } from 'react';
import PokemonCard from '../pokemon-card/pokemon-card';
import { PokemonGrid, PokemonSelectorWrapper } from './pokemon-selector.styled';

const PokemonSelector = ({ onSelect, selectedPokemons, searchTerm, setSearchTerm }) => {
  const observerRef = useRef(null);
  const gridRef = useRef(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const {
    data: infiniteData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isInfiniteLoading,
    isError: isInfiniteError,
  } = useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.next) {
        return allPages.length;
      }
      return undefined;
    },
    enabled: !debouncedSearchTerm,
  });

  const {
    data: searchData,
    isLoading: isSearchLoading,
    isError: isSearchError,
    isSuccess: isSearchSuccess,
  } = useQuery({
    queryKey: ['pokemon', debouncedSearchTerm],
    queryFn: () => searchPokemon(debouncedSearchTerm),
    enabled: !!debouncedSearchTerm,
  });

  useEffect(() => {
    if (!gridRef.current || debouncedSearchTerm) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        root: gridRef.current,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [gridRef, hasNextPage, isFetchingNextPage, fetchNextPage, debouncedSearchTerm]);

  const allPokemons = useMemo(() => infiniteData?.pages.flatMap(page => page.results) || [], [infiniteData]);

  const pokemons = debouncedSearchTerm ? searchData : allPokemons;

  const isLoading = isInfiniteLoading || isSearchLoading;

  const showEmptyState = debouncedSearchTerm && (isSearchSuccess || isSearchError) && (!pokemons || pokemons.length === 0);

  if (isLoading && !pokemons) return <Spinner />;
  if (isInfiniteError) return <div>Error al cargar los Pokémon.</div>;

  return (
    <PokemonSelectorWrapper>
      <Input
        type="text"
        placeholder="Buscar Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <PokemonGrid ref={gridRef}>
        {pokemons && pokemons.length > 0 && pokemons.map(pokemon => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onSelect={onSelect}
              isSelected={selectedPokemons.some(p => p.id === pokemon.id)}
              isTeamFull={selectedPokemons.length >= 6}
            />
          ))}
        {showEmptyState && <EmptyState message={`No se encontraron Pokémon para "${debouncedSearchTerm}"`} />}
        {hasNextPage && !debouncedSearchTerm && !isLoading &&(
          <div ref={observerRef} style={{ height: '1px', gridColumn: '1 / -1' }} />
        )}
      </PokemonGrid>
      {isFetchingNextPage && <Spinner />}
    </PokemonSelectorWrapper>
  );
};

export default PokemonSelector;
