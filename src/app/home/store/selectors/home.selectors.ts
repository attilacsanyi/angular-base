import { createSelector } from '@ngrx/store';

import * as states from '../../../home/store/states';

import { AppState } from '../../../../app/app.state';

const getHomeState = (state: AppState) => state.home;

export const getTitleState = createSelector(getHomeState, (state: states.State) => state.title);
