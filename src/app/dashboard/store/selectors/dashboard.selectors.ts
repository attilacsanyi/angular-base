import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromDashboard from '../reducers/dashboard.reducer';

const getDashboardState = createSelector(fromFeature.getDashboardFeatureState, (state: fromFeature.DashboardState) => state.state);

export const getTitleState = createSelector(getDashboardState, fromDashboard.getTitleState);
