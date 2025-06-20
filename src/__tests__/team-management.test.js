import HomePage from '@/features/team-management/routes/home-page';
import { useTeamStore } from '@/store/team-store';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

jest.mock('@/store/team-store');

jest.mock('@tanstack/react-router', () => ({
    ...jest.requireActual('@tanstack/react-router'),
    Link: ({ children }) => <a>{children}</a>,
}));


describe('HomePage UI', () => {
    it('should display the empty state message when there are no teams', () => {
        useTeamStore.mockReturnValue({
            teams: [],
            discardDraft: jest.fn(),
        });

        render(
            <HomePage />
        );

        expect(screen.getByText('Aún no has creado ningún equipo.')).toBeInTheDocument();
        expect(screen.getByText('¡Empieza creando uno para la batalla!')).toBeInTheDocument();

        expect(screen.getByText('Crear mi primer equipo')).toBeInTheDocument();
    });

    it('should display the team list when teams exist', () => {
        useTeamStore.mockReturnValue({
            teams: [
                {
                    id: 1,
                    name: 'Kanto Classics',
                    pokemons: [
                        { id: 6, name: 'charizard', sprites: { front_default: '' } },
                        { id: 9, name: 'blastoise', sprites: { front_default: '' } },
                    ]
                }
            ],
            discardDraft: jest.fn(),
        });

        render(
            <HomePage />
        );

        expect(screen.queryByText('Aún no has creado ningún equipo.')).not.toBeInTheDocument();

        expect(screen.getByText('Kanto Classics')).toBeInTheDocument();
    });
});
