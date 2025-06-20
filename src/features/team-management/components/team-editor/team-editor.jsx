import Button from '@/components/ui/button/button';
import Input from '@/components/ui/input/input';
import Modal from '@/components/ui/modal/modal';
import { useTeamStore } from '@/store/team-store';
import {
    closestCenter,
    DndContext,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useNavigate } from '@tanstack/react-router';
import React, { useState } from 'react';
import { DragHandle } from './drag-handle';
import { SortableItem } from './sortable-item';
import {
    ActionsWrapper,
    EmptyListMessage,
    FooterButtons,
    PokemonInfo,
    PokemonItemWrapper,
    PokemonListContainer,
    TeamEditorTitle,
    TeamEditorWrapper
} from './team-editor.styled';

const PokemonItem = ({ pokemon, onRemove, dragHandleListeners }) => (
    <PokemonItemWrapper>
        <PokemonInfo>
            <DragHandle {...dragHandleListeners} style={{ cursor: 'grab' }} />
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <span>{pokemon.name}</span>
        </PokemonInfo>
        <Button onClick={() => onRemove(pokemon.uniqueId)} variant="danger">Quitar</Button>
    </PokemonItemWrapper>
);

const TeamEditor = ({ onSave, isEditMode }) => {
    const { draft, removePokemonFromDraft, setDraftName, discardDraft, reorderDraft } = useTeamStore();
    const navigate = useNavigate();
    const [isDiscardModalOpen, setDiscardModalOpen] = useState(false);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            const oldIndex = draft.pokemons.findIndex((p) => p.uniqueId === active.id);
            const newIndex = draft.pokemons.findIndex((p) => p.uniqueId === over.id);
            reorderDraft(arrayMove(draft.pokemons, oldIndex, newIndex));
        }
    };

    const handleSortRandomly = () => {
        const shuffled = [...draft.pokemons].sort(() => Math.random() - 0.5);
        reorderDraft(shuffled);
    };

    const handleSortByAttack = () => {
        const sorted = [...draft.pokemons].sort((a, b) => {
            const attackA = a.stats.find(stat => stat.stat.name === 'attack').base_stat;
            const attackB = b.stats.find(stat => stat.stat.name === 'attack').base_stat;
            return attackB - attackA;
        });
        reorderDraft(sorted);
    };

    const handleSave = () => {
        if(onSave) onSave();
    };

    const handleDiscard = () => {
        discardDraft();
        navigate({ to: '/' });
    };

    return (
        <TeamEditorWrapper>
            <TeamEditorTitle>Tu Equipo</TeamEditorTitle>
            <Input
                type="text"
                placeholder="Nombre del Equipo"
                value={draft.name}
                onChange={(e) => setDraftName(e.target.value)}
            />
            <ActionsWrapper>
                <Button onClick={handleSortRandomly}>Aleatorio</Button>
                <Button onClick={handleSortByAttack}>Por Ataque</Button>
            </ActionsWrapper>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={draft.pokemons.map(p => p.uniqueId)} strategy={verticalListSortingStrategy}>
                    <PokemonListContainer>
                        {draft.pokemons.length === 0 && <EmptyListMessage>Añade Pokémon desde la lista. Arrastra para reordenar.</EmptyListMessage>}
                        {draft.pokemons.map(pokemon => (
                            <SortableItem key={pokemon.uniqueId} id={pokemon.uniqueId}>
                                <PokemonItem pokemon={pokemon} onRemove={removePokemonFromDraft} />
                            </SortableItem>
                        ))}
                    </PokemonListContainer>
                </SortableContext>
            </DndContext>
            <FooterButtons>
                <Button onClick={() => setDiscardModalOpen(true)} $variant="danger">Descartar</Button>
                <Button onClick={handleSave} disabled={!draft.name || draft.pokemons.length < 1} $variant="primary">
                    {isEditMode ? 'Actualizar Equipo' : 'Guardar Equipo'}
                </Button>
            </FooterButtons>
            <Modal
                isOpen={isDiscardModalOpen}
                onClose={() => setDiscardModalOpen(false)}
                onConfirm={handleDiscard}
                title="Confirmar Descarte"
            >
                <p>¿Estás seguro de que quieres descartar los cambios? Esta acción no se puede deshacer.</p>
            </Modal>
        </TeamEditorWrapper>
    );
};

export default TeamEditor;
