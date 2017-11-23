import { Params, RouterStateSnapshot } from '@angular/router';

import { RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';

/**
 *  https://github.com/ngrx/platform/blob/master/docs/router-store/api.md#custom-router-state-serializer
 */
export interface RouterState {
  url: string;
  queryParams: Params;
  params: Params;
}

export const initialRouterState: RouterReducerState<RouterState> = {
  navigationId: 0,
  state: {
    url: '',
    queryParams: [],
    params: []
  }
};

/**
 * Source: https://github.com/ngrx/platform/blob/master/docs/router-store/api.md#custom-router-state-serializer
 * Perams: https://github.com/ngrx/platform/issues/382
 */
export class PcgRouterStateSerializer implements RouterStateSerializer<RouterState> {
  serialize(routerState: RouterStateSnapshot): RouterState {
    const { url, root } = routerState;
    const queryParams = root.queryParams;

    let { firstChild: snapshot } = root;
    const params: Params = {};
    while (snapshot) {
      const { paramMap } = snapshot;
      paramMap.keys.forEach(k => (params[k] = paramMap.get(k)));
      snapshot = snapshot.firstChild;
    }

    return { url, params, queryParams };
  }
}
