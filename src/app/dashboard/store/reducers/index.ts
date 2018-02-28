import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { DashboardActions } from '@dashboard/store';

import * as fromDashboard from './dashboard.reducer';

export interface DashboardState {
  state: fromDashboard.DashboardState;
}

export const initialState: DashboardState = {
  state: fromDashboard.initialState
};

export const reducers: ActionReducerMap<DashboardState, DashboardActions> = {
  state: fromDashboard.reducer
};

export const getDashboardFeatureState = createFeatureSelector<DashboardState>('dashboard');
