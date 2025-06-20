import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useTeamStore = create(
  persist(
    (set, get) => ({
      teams: [],
      draft: {
        id: null,
        name: '',
        pokemons: [],
      },
      addPokemonToDraft: (pokemon) => {
        if (get().draft.pokemons.length < 6) {
          const uniquePokemon = { ...pokemon, uniqueId: `${pokemon.id}-${Date.now()}` };
          set((state) => ({
            draft: {
              ...state.draft,
              pokemons: [...state.draft.pokemons, uniquePokemon],
            },
          }));
        }
      },
      removePokemonFromDraft: (uniqueId) =>
        set((state) => ({
          draft: {
            ...state.draft,
            pokemons: state.draft.pokemons.filter((p) => p.uniqueId !== uniqueId),
          },
        })),
      setDraftName: (name) =>
        set((state) => {
          const newDraft = { ...state.draft, name };
          return { ...state, draft: newDraft };
        }),
      saveDraft: () =>
        set((state) => ({
          ...state,
          teams: [...state.teams, { ...state.draft, id: Date.now() }],
          draft: { id: null, name: '', pokemons: [] },
        })),
      discardDraft: () => set((state) => ({ ...state, draft: { id: null, name: '', pokemons: [] } })),
      reorderDraft: (pokemons) =>
        set((state) => ({
          draft: {
            ...state.draft,
            pokemons: pokemons,
          },
        })),
      deleteTeam: (teamId) =>
        set((state) => ({
          ...state,
          teams: state.teams.filter((team) => team.id !== teamId),
        })),
      loadDraft: (teamId) =>
        set((state) => {
          const teamToLoad = state.teams.find((team) => team.id === teamId);
          return {
            ...state,
            draft: teamToLoad || { id: null, name: '', pokemons: [] },
          };
        }),
      updateTeam: (updatedTeam) =>
        set((state) => ({
          ...state,
          teams: state.teams.map((team) => (team.id === updatedTeam.id ? updatedTeam : team)),
          draft: { id: null, name: '', pokemons: [] },
        })),
    }),
    {
      name: 'team-storage',
    }
  )
);
