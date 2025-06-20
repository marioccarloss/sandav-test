import Button from '@/components/ui/button/button';
import Modal from '@/components/ui/modal/modal';
import { useTeamStore } from '@/store/team-store';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { TeamActions, TeamCard, TeamListWrapper } from './team-list.styled';

const TeamList = () => {
  const { teams, deleteTeam } = useTeamStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamToDelete, setTeamToDelete] = useState(null);

  const handleDeleteClick = (teamId, teamName) => {
    setTeamToDelete({ id: teamId, name: teamName });
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (teamToDelete) {
      deleteTeam(teamToDelete.id);
      setIsModalOpen(false);
      setTeamToDelete(null);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTeamToDelete(null);
  };

  return (
    <>
      <TeamListWrapper>
        {teams.map(team => (
          <TeamCard key={team.id}>
            <h3>{team.name}</h3>
            <div>
              {team.pokemons.map(pokemon => (
                <img
                  key={pokemon.id}
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                />
              ))}
            </div>
            <TeamActions>
              <Link to="/team/$teamId/edit" params={{ teamId: team.id }}>
                <Button>Editar</Button>
              </Link>
              <Button
                $variant="danger"
                onClick={() => handleDeleteClick(team.id, team.name)}
              >
                Eliminar
              </Button>
            </TeamActions>
          </TeamCard>
        ))}
      </TeamListWrapper>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        title="Confirmar eliminación"
      >
        <p>
          ¿Estás seguro de que quieres eliminar el equipo &quot;
          {teamToDelete?.name}
          &quot;?
        </p>
      </Modal>
    </>
  );
};

export default TeamList;
