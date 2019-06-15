import { NavigationExtras, Params } from '@angular/router';

import { createAction, props } from '@ngrx/store';

const prefix = '[Router]';

export const routerGo = createAction(`${prefix} Go`, props<{ path: any[]; queryParams?: Params; extras?: NavigationExtras }>());
export const routerGoByUrl = createAction(`${prefix} Go By Url`, props<{ url: string; extras?: NavigationExtras }>());

export const routerMergeQueryParams = createAction(`${prefix} Merge QueryParams`, props<{ queryParams: Params }>());
export const routerSetQueryParams = createAction(`${prefix} Set QueryParams`, props<{ queryParams: Params }>());

export const routerBack = createAction(`${prefix} Back`);
export const routerForward = createAction(`${prefix} Forward`);
