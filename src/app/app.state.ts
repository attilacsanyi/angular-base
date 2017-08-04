import * as core from '@core/store';
import * as home from '@home/store';
import * as dashboard from '@dashboard/store';

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
