import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromCore from '../reducers/core.reducer';

const getCoreState = fromFeature.getCoreState;

export const getUserState = createSelector(getCoreState, fromCore.getUserState);
