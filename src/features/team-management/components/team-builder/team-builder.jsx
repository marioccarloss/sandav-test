import { useTeamStore } from '@/store/team-store';
import { useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import PokemonSelector from '../pokemon-selector/pokemon-selector';
import TeamEditor from '../team-editor/team-editor';
import {
  EditorWrapper,
  PageTitle,
  SelectorWrapper,
  TeamBuilderWrapper,
} from './team-builder.styled';

const TeamBuilder = ({ isEditMode, teamId }) => {
  const navigate = useNavigate();
  const {
    loadDraft,
    discardDraft,
    updateTeam,
    saveDraft,
    addPokemonToDraft,
    draft,
  } = useTeamStore();
  const [searchTerm, setSearchTerm] = useState('');

  const parsedTeamId = isEditMode ? parseInt(teamId, 10) : null;

  useEffect(() => {
    if (isEditMode && parsedTeamId) {
      loadDraft(parsedTeamId);
    }
    return () => {
      discardDraft();
    };
  }, [parsedTeamId, isEditMode, loadDraft, discardDraft]);

  const handleSave = () => {
    if (isEditMode) {
      updateTeam(draft);
    } else {
      saveDraft();
    }
    navigate({ to: '/' });
  };

  if (isEditMode && draft?.id !== parsedTeamId) {
    return <div>Cargando equipo para editar...</div>;
  }

  return (
    <div>
      <PageTitle>
        {isEditMode ? 'Editar Equipo' : 'Crear Nuevo Equipo'}
      </PageTitle>
      <TeamBuilderWrapper>
        <SelectorWrapper>
          <PokemonSelector
            onSelect={addPokemonToDraft}
            selectedPokemons={draft.pokemons}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </SelectorWrapper>
        <EditorWrapper>
          <TeamEditor onSave={handleSave} isEditMode={isEditMode} />
        </EditorWrapper>
      </TeamBuilderWrapper>
    </div>
  );
};

export default TeamBuilder;
