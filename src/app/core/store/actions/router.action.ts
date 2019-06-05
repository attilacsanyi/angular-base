import { NavigationExtras, Params } from '@angular/router';

import { Action } from '@ngrx/store';

// prettier-ignore
export enum RouterActionTypes {
  Go                = '[Router] Go',
  MergeQueryParams  = '[Router] Merge QueryParams',
  SetQueryParams    = '[Router] Set QueryParams',
  GoByURL           = '[Router] Go by URL',
  Back              = '[Router] Back',
  Forward           = '[Router] Forward'
}

export class RouterGoAction implements Action {
  readonly type = RouterActionTypes.Go;
  constructor(public path: any[], public queryParams?: Params, public extras?: NavigationExtras) {}
}

export class RouterMergeQueryParamsAction implements Action {
  readonly type = RouterActionTypes.MergeQueryParams;
  constructor(public queryParams: Params) {}
}

export class RouterSetQueryParamsAction implements Action {
  readonly type = RouterActionTypes.SetQueryParams;
  constructor(public queryParams: Params) {}
}

export class RouterGoByUrlAction implements Action {
  readonly type = RouterActionTypes.GoByURL;
  constructor(public url: string, public extras?: NavigationExtras) {}
}

export class RouterBackAction implements Action {
  readonly type = RouterActionTypes.Back;
  constructor() {}
}

export class RouterForwardAction implements Action {
  readonly type = RouterActionTypes.Forward;
  constructor() {}
}

export type RouterActions =
  | RouterGoAction
  | RouterMergeQueryParamsAction
  | RouterSetQueryParamsAction
  | RouterGoByUrlAction
  | RouterBackAction
  | RouterForwardAction;
