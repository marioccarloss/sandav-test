import { useTeamStore } from '@/store/team-store';
import { useNavigate } from '@tanstack/react-router';
import React, { useEffect, useState } from 'react';
import PokemonSelector from '../pokemon-selector/pokemon-selector';
import TeamEditor from '../team-editor/team-editor';

const TeamBuilder = ({ isEditMode, teamId }) => {
    const navigate = useNavigate();
    const { loadDraft, discardDraft, updateTeam, saveDraft, addPokemonToDraft, draft } = useTeamStore();
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
            <h2>{isEditMode ? 'Editar Equipo' : 'Crear Nuevo Equipo'}</h2>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: 2 }}>
                    <PokemonSelector
                        onSelect={addPokemonToDraft}
                        selectedPokemons={draft.pokemons}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <TeamEditor onSave={handleSave} isEditMode={isEditMode} />
                </div>
            </div>
        </div>
    );
};

export default TeamBuilder;
