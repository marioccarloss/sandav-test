import { simulateBattle } from '@/features/battle-simulation/logic/combat-logic';

const createPokemon = (id, name, attack, defense, speed) => ({
    id,
    name,
    stats: [
        { stat: { name: 'attack' }, base_stat: attack },
        { stat: { name: 'defense' }, base_stat: defense },
        { stat: { name: 'speed' }, base_stat: speed },
    ],
    sprites: { front_default: '' }
});

describe('Combat Logic', () => {
    it('should correctly simulate a battle and determine a winner', () => {
        const team1 = {
            id: 1,
            name: 'Team Alpha',
            pokemons: [
                createPokemon(1, 'Poke-A1', 100, 50, 100),
                createPokemon(2, 'Poke-A2', 80, 90, 120),
                createPokemon(3, 'Poke-A3', 70, 70, 100),
                createPokemon(4, 'Poke-A4', 100, 50, 100),
                createPokemon(5, 'Poke-A5', 100, 50, 100),
                createPokemon(6, 'Poke-A6', 100, 50, 100),
            ],
        };

        const team2 = {
            id: 2,
            name: 'Team Beta',
            pokemons: [
                createPokemon(7, 'Poke-B1', 60, 40, 80),
                createPokemon(8, 'Poke-B2', 85, 80, 110),
                createPokemon(9, 'Poke-B3', 75, 65, 90),
                createPokemon(10, 'Poke-B4', 60, 40, 80),
                createPokemon(11, 'Poke-B5', 60, 40, 80),
                createPokemon(12, 'Poke-B6', 60, 40, 80),
            ],
        };

        const result = simulateBattle(team1, team2);

        expect(result.winner.id).toBe(team1.id);
        expect(result.winnerVictories).toBe(5);
        expect(result.loserVictories).toBe(1);
        expect(result.rounds.length).toBe(6);

        expect(result.rounds[0].winner.id).toBe(team1.pokemons[0].id);
        expect(result.rounds[2].winner.id).toBe(team2.pokemons[2].id);
    });
});
