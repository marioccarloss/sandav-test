function getStat(pokemon, statName) {
    return pokemon.stats.find(stat => stat.stat.name === statName).base_stat;
}

function simulateRound(pokemon1, pokemon2) {
    const speed1 = getStat(pokemon1, 'speed');
    const speed2 = getStat(pokemon2, 'speed');

    let attacker = speed1 >= speed2 ? pokemon1 : pokemon2;
    let defender = speed1 >= speed2 ? pokemon2 : pokemon1;
    let winner = null;
    let log = [];

    log.push(`${attacker.name} es más rápido y ataca primero.`);

    const attack1 = getStat(attacker, 'attack');
    const defense1 = getStat(defender, 'defense');

    if (attack1 > defense1) {
        winner = attacker;
        log.push(`${attacker.name} (Ataque: ${attack1}) supera la defensa de ${defender.name} (Defensa: ${defense1}).`);
        log.push(`¡${defender.name} debilitado!`);
    } else {
        log.push(`${attacker.name} (Ataque: ${attack1}) no supera la defensa de ${defender.name} (Defensa: ${defense1}).`);

        const temp = attacker;
        attacker = defender;
        defender = temp;

        log.push(`Turno de ${attacker.name}.`);

        const attack2 = getStat(attacker, 'attack');
        const defense2 = getStat(defender, 'defense');

        if (attack2 > defense2) {
            winner = attacker;
            log.push(`${attacker.name} (Ataque: ${attack2}) supera la defensa de ${defender.name} (Defensa: ${defense2}).`);
            log.push(`¡${defender.name} debilitado!`);
        } else {
            log.push(`${attacker.name} (Ataque: ${attack2}) no supera la defensa de ${defender.name} (Defensa: ${defense2}).`);
            winner = speed1 >= speed2 ? pokemon1 : pokemon2;
            log.push(`Ningún Pokémon pudo debilitar al otro. El más rápido, ${winner.name}, gana la ronda.`);
        }
    }

    return { winner, log };
}


export function simulateBattle(team1, team2) {
    const rounds = [];
    let team1Victories = 0;
    let team2Victories = 0;

    for (let i = 0; i < 6; i++) {
        const pokemon1 = team1.pokemons[i];
        const pokemon2 = team2.pokemons[i];

        if (!pokemon1 || !pokemon2) continue;

        const roundResult = simulateRound(pokemon1, pokemon2);

        if (roundResult.winner.id === pokemon1.id) {
            team1Victories++;
        } else {
            team2Victories++;
        }

        rounds.push({
            round: i + 1,
            pokemon1,
            pokemon2,
            ...roundResult,
        });
    }

    const battleWinner = team1Victories > team2Victories ? team1 : team2;
    const loser = battleWinner.id === team1.id ? team2 : team1;

    return {
        winner: battleWinner,
        loser,
        winnerVictories: Math.max(team1Victories, team2Victories),
        loserVictories: Math.min(team1Victories, team2Victories),
        rounds,
    };
}
