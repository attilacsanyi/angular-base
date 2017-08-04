import { createSelector } from '@ngrx/store';

import { AppState } from 'app/app.state';
import { State } from '@home/store';

const getHomeState = (state: AppState) => state.home;

export const getTitleState = createSelector(getHomeState, (state: State) => state.title);
