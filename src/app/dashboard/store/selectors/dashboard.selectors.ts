import { createSelector } from '@ngrx/store';

import { AppState } from '../../../../app/app.state';

import * as states from '../../../dashboard/store/states';

const getDashboardState = (state: AppState) => state.dashboard;

export const getTitleState = createSelector(getDashboardState, (state: states.State) => state.title);
