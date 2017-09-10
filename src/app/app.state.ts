import * as core from './core/store/states';
import * as home from './home/store/states';
import * as dashboard from './dashboard/store/states';

export interface AppState {
  core: core.State;
  home: home.State;
  dashboard: dashboard.State;
}

export const initialState: AppState = {
  core: core.initialState,
  home: home.initialState,
  dashboard: dashboard.initialState,
};
