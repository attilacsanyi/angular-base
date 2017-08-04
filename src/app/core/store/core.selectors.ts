import { createSelector } from '@ngrx/store';

import { AppState } from 'app/app.state';
import { State } from '@core/store';

const getCoreState = (state: AppState) => state.core;

export const getUserState = createSelector(getCoreState, (state: State) => state.user);
