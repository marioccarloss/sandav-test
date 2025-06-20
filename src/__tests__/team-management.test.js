import { router } from '@/app/router';
import { useTeamStore } from '@/store/team-store';
import { render as customRender, screen } from '@/utils/test-utils';
import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';

jest.mock('@/store/team-store');

const TestRouter = () => {
  const memoryHistory = createMemoryHistory({ initialEntries: ['/'] });
  const testRouter = createRouter({
    routeTree: router.routeTree,
    history: memoryHistory,
    context: router.context,
  });
  return <RouterProvider router={testRouter} />;
};

const renderComponent = () => {
  customRender(<TestRouter />);
};

describe('HomePage UI', () => {
  it('should display the empty state message when there are no teams', async () => {
    useTeamStore.mockReturnValue({
      teams: [],
      discardDraft: jest.fn(),
    });

    renderComponent();

    expect(
      await screen.findByText('Aún no has creado ningún equipo.')
    ).toBeInTheDocument();
    expect(
      await screen.findByText('¡Empieza creando uno para la batalla!')
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Crear mi primer equipo')
    ).toBeInTheDocument();
  });

  it('should display the team list when teams exist', async () => {
    useTeamStore.mockReturnValue({
      teams: [
        {
          id: 1,
          name: 'Kanto Classics',
          pokemons: [
            { id: 6, name: 'charizard', sprites: { front_default: '' } },
            { id: 9, name: 'blastoise', sprites: { front_default: '' } },
          ],
        },
      ],
      discardDraft: jest.fn(),
    });

    renderComponent();

    expect(
      screen.queryByText('Aún no has creado ningún equipo.')
    ).not.toBeInTheDocument();

    expect(await screen.findByText('Kanto Classics')).toBeInTheDocument();
  });
});
