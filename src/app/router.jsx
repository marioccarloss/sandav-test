import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import App from '../App';
import BattleResultsPage from '../features/battle-simulation/routes/battle-results-page';
import BattleSelectorPage from '../features/battle-simulation/routes/battle-selector-page';
import CreateTeamPage from '../features/team-management/routes/create-team-page';
import EditTeamPage from '../features/team-management/routes/edit-team-page';
import HomePage from '../features/team-management/routes/home-page';

const rootRoute = createRootRoute({
  component: App,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const newTeamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/new',
  component: CreateTeamPage,
});

export const editTeamRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/team/$teamId/edit',
    component: EditTeamPage,
});

const battleRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/battle',
});

const battleIndexRoute = createRoute({
    getParentRoute: () => battleRoute,
    path: '/',
    component: BattleSelectorPage,
});

const battleResultsRoute = createRoute({
    getParentRoute: () => battleRoute,
    path: 'results',
    component: BattleResultsPage,
});

const battleRouteTree = battleRoute.addChildren([battleIndexRoute, battleResultsRoute]);

const routeTree = rootRoute.addChildren([indexRoute, newTeamRoute, editTeamRoute, battleRouteTree]);

export const router = createRouter({ routeTree });
