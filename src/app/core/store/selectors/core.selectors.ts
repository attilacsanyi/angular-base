import { createSelector } from '@ngrx/store';

import { AppState } from '../../../../app/app.state';

import * as states from '../../../core/store/states';

const getCoreState = (state: AppState) => state.core;

export const getUserState = createSelector(getCoreState, (state: states.State) => state.user);
