import { Params, RouterStateSnapshot } from '@angular/router';

import { routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';

export type RouterState = RouterReducerState<PcgRouterState>;

export const initialState: RouterState = {
  navigationId: 0,
  state: {
    url: '/',
    queryParams: [],
    params: []
  }
};

export const reducer = routerReducer;

/**
 * The router state has an initial state of undefined, so I need to protect against that in the selectors
 * https://github.com/ngrx/platform/issues/186
 */
export const getQueryParamsState = (state: RouterState) => (state.state ? state.state.queryParams : initialState.state.queryParams);
export const getParamsState = (state: RouterState) => (state.state ? state.state.params : initialState.state.params);
export const getUrlState = (state: RouterState) => (state.state ? state.state.url : initialState.state.url);

/**
 *  https://github.com/ngrx/platform/blob/master/docs/router-store/api.md#custom-router-state-serializer
 */
export interface PcgRouterState {
  url: string;
  params: Params;
  queryParams: Params;
}

/**
 * Source: https://github.com/ngrx/platform/blob/master/docs/router-store/api.md#custom-router-state-serializer
 */
export class AppRouterStateSerializer implements RouterStateSerializer<PcgRouterState> {
  serialize(routerState: RouterStateSnapshot): PcgRouterState {
    let route = routerState.root;
    while (route.firstChild) route = route.firstChild;

    const { url, root: { queryParams } } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // insteead of the entire snapshot
    return { url, params, queryParams };
  }
}
