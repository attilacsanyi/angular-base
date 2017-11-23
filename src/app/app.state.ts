import { RouterReducerState } from '@ngrx/router-store';

import * as core from './core/store/states';

import * as dashboard from './dashboard/store/states';

import * as home from './home/store/states';

export interface AppState {
  core: core.State;
  home: home.State;
  dashboard: dashboard.State;
  router: RouterReducerState<core.RouterState>;
}

export const initialState: AppState = {
  core: core.initialState,
  home: home.initialState,
  dashboard: dashboard.initialState,
  router: core.initialRouterState
};
