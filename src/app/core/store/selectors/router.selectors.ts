import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromRouter from '../reducers/router.reducer';

const getRouterState = fromFeature.getRouterState;

export const getQueryParamsState = createSelector(getRouterState, fromRouter.getQueryParamsState);
export const getParamsState = createSelector(getRouterState, fromRouter.getParamsState);
export const getUrlState = createSelector(getRouterState, fromRouter.getUrlState);
