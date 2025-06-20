import Button from '@/components/ui/button/button';
import { useTeamStore } from '@/store/team-store';
import { Link } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useTheme } from 'styled-components';
import TeamList from '../components/team-list/team-list';

const HomePage = () => {
  const { teams, discardDraft } = useTeamStore();
  const theme = useTheme();

  useEffect(() => {
    discardDraft();
  }, [discardDraft]);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
        }}
      >
        <h2 style={{ fontSize: '1rem' }}>Mis Equipos Pokémon</h2>
        <Link to="/new">
          <Button>Crear Nuevo Equipo</Button>
        </Link>
      </div>

      {teams.length > 0 ? (
        <TeamList />
      ) : (
        <div
          style={{
            textAlign: 'center',
            padding: '40px',
            border: '2px dashed #ccc',
            borderRadius: '8px',
            backgroundColor: theme.cardBg,
          }}
        >
          <h3>Aún no has creado ningún equipo.</h3>
          <p>¡Empieza creando uno para la batalla!</p>
          <Link
            to="/new"
            style={{ marginTop: '16px', display: 'inline-block' }}
          >
            <Button>Crear mi primer equipo</Button>
          </Link>
        </div>
      )}

      {teams.length >= 2 && (
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link to="/battle">
            <Button
              $variant="cta"
              style={{ padding: '10px 20px', fontSize: '1.2em' }}
            >
              ¡A Combatir!
            </Button>
          </Link>
          <p style={{ marginTop: '8px' }}>
            Selecciona dos equipos y simula un combate.
          </p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
