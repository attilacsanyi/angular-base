import * as core from './core/store';
import * as dashboard from './dashboard/store';
import * as home from './home/store';

export interface AppState extends core.AppState {
  dashboard: dashboard.DashboardState;
  home: home.HomeState;
}

export const initialState: AppState = {
  ...core.initialState,
  dashboard: { ...dashboard.initialState },
  home: { ...home.initialState }
};
