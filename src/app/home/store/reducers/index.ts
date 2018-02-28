import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { HomeActions } from '@home/store';

import * as fromHome from './home.reducer';

export interface HomeState {
  state: fromHome.HomeState;
}

export const initialState: HomeState = {
  state: fromHome.initialState
};

export const reducers: ActionReducerMap<HomeState, HomeActions> = {
  state: fromHome.reducer
};

export const getHomeFeatureState = createFeatureSelector<HomeState>('home');
