import Button from '@/components/ui/button/button';
import { useTeamStore } from '@/store/team-store';
import { Link, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import TeamSelectionCard from '../components/team-selection-card/team-selection-card';
import {
  BattleSelectorWrapper,
  TeamColumn,
  TeamList,
} from './battle-selector-page.styled';

const BattleSelectorPage = () => {
  const { teams } = useTeamStore();
  const navigate = useNavigate();
  const [team1Id, setTeam1Id] = useState(null);
  const [team2Id, setTeam2Id] = useState(null);

  const handleFight = () => {
    navigate({
      to: '/battle/results',
      search: { team1: team1Id, team2: team2Id },
    });
  };

  return (
    <BattleSelectorWrapper>
      <Link to="/">
        <Button>&#8592; Volver</Button>
      </Link>
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <h2>Seleccionar Equipos</h2>
        <p>Elige un equipo para cada lado para simular el combate.</p>
      </div>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}
      >
        <TeamColumn>
          <h3>Equipo 1</h3>
          <TeamList>
            {teams.map(team => (
              <TeamSelectionCard
                key={team.id}
                team={team}
                onSelect={() => setTeam1Id(team.id)}
                isSelected={team1Id === team.id}
              />
            ))}
          </TeamList>
        </TeamColumn>
        <TeamColumn>
          <h3>Equipo 2</h3>
          <TeamList>
            {teams.map(team => (
              <TeamSelectionCard
                key={team.id}
                team={team}
                onSelect={() => setTeam2Id(team.id)}
                isSelected={team2Id === team.id}
              />
            ))}
          </TeamList>
        </TeamColumn>
      </div>
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <Button
          onClick={handleFight}
          disabled={!team1Id || !team2Id || team1Id === team2Id}
          $variant="cta"
          style={{ padding: '10px 20px', fontSize: '1.2em' }}
        >
          ¡Pelear!
        </Button>
        {team1Id && team1Id === team2Id && (
          <p style={{ color: 'red', marginTop: '10px' }}>
            No puedes seleccionar el mismo equipo.
          </p>
        )}
      </div>
    </BattleSelectorWrapper>
  );
};

export default BattleSelectorPage;
