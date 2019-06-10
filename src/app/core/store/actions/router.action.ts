import { NavigationExtras, Params } from '@angular/router';

import { createAction, props } from '@ngrx/store';

// prettier-ignore
export enum RouterActionTypes {
  Go                = '[Router] Go',
  MergeQueryParams  = '[Router] Merge QueryParams',
  SetQueryParams    = '[Router] Set QueryParams',
  GoByURL           = '[Router] Go by URL',
  Back              = '[Router] Back',
  Forward           = '[Router] Forward'
}

export const routerGo = createAction(RouterActionTypes.Go, props<{ path: any[]; queryParams?: Params; extras?: NavigationExtras }>());

export const routerMergeQueryParams = createAction(RouterActionTypes.MergeQueryParams, props<{ queryParams: Params }>());

export const routerSetQueryParams = createAction(RouterActionTypes.SetQueryParams, props<{ queryParams: Params }>());

export const routerGoByUrl = createAction(RouterActionTypes.GoByURL, props<{ url: string; extras?: NavigationExtras }>());

export const routerBack = createAction(RouterActionTypes.Back);

export const routerForward = createAction(RouterActionTypes.Forward);
