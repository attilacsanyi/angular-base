import { createSelector } from '@ngrx/store';

import { AppState } from 'app/app.state';
import * as store from '@dashboard/store';

const getDashboardState = (state: AppState) => state.dashboard;

export const getTitleState = createSelector(getDashboardState, (state: store.State) => state.title);
