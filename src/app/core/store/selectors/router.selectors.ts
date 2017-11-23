import { RouterReducerState } from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';

import * as states from '../../../core/store/states';

import { AppState } from '../../../app.state';

const getRouterState = (state: AppState) => state.router;

// Router Selectors
export const getQueryParamsState = createSelector(
  getRouterState,
  (state: RouterReducerState<states.RouterState>) => state.state.queryParams
);

export const getParamsState = createSelector(getRouterState, (state: RouterReducerState<states.RouterState>) => state.state.params);

export const getUrlState = createSelector(getRouterState, (state: RouterReducerState<states.RouterState>) => state.state.url);
