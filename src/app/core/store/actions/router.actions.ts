import { NavigationExtras } from '@angular/router';

import { Action } from '@ngrx/store';

const modulePrefix = '[Router]';

export class RouterGoAction implements Action {
  readonly type = `${modulePrefix} Go`;
  constructor(public path: any[], public queryParams?: object, public extras?: NavigationExtras) {}
}

export class RouterGoByUrlAction implements Action {
  readonly type = `${modulePrefix} Go by URL`;
  constructor(public url: string) {}
}

export class RouterBackAction implements Action {
  readonly type = `${modulePrefix} Back`;
  constructor() {}
}

export class RouterForwardAction implements Action {
  readonly type = `${modulePrefix} Forward`;
  constructor() {}
}

export type RouterActions = RouterGoAction | RouterGoByUrlAction | RouterBackAction | RouterForwardAction;
