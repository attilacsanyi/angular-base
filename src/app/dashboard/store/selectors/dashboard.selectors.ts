import { createSelector } from '@ngrx/store';

import * as states from '../../../dashboard/store/states';

import { AppState } from '../../../../app/app.state';

const getDashboardState = (state: AppState) => state.dashboard;

export const getTitleState = createSelector(getDashboardState, (state: states.State) => state.title);
