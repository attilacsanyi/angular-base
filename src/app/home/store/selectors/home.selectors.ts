import { createSelector } from '@ngrx/store';

import { AppState } from '../../../../app/app.state';

import * as states from '../../../home/store/states';

const getHomeState = (state: AppState) => state.home;

export const getTitleState = createSelector(getHomeState, (state: states.State) => state.title);
