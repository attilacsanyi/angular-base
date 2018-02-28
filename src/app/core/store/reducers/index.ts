import * as fromCore from './core.reducer';
import * as fromRouter from './router.reducer';

export interface AppState {
  core: fromCore.CoreState;
  router: fromRouter.RouterState;
}

export const initialState: AppState = {
  core: fromCore.initialState,
  router: fromRouter.initialState
};

export const reducers: any /* ActionReducerMap<AppState> */ = {
  core: fromCore.reducer,
  router: fromRouter.reducer
};

export const getCoreState = (state: AppState) => state.core;
export const getRouterState = (state: AppState) => state.router;
