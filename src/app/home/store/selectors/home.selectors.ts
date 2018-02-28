import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromHome from '../reducers/home.reducer';

const getHomeState = createSelector(fromFeature.getHomeFeatureState, (state: fromFeature.HomeState) => state.state);

export const getTitleState = createSelector(getHomeState, fromHome.getTitleState);
