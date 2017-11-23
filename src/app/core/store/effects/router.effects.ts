import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

import { Actions, Effect } from '@ngrx/effects';
import {
    ROUTER_CANCEL,
    ROUTER_ERROR,
    ROUTER_NAVIGATION,
    RouterCancelAction,
    RouterErrorAction,
    RouterNavigationAction,
} from '@ngrx/router-store';

import { filter, map, share, tap } from 'rxjs/operators';

import * as actions from '../../../core/store/actions';

import { AppState } from '../../../app.state';

@Injectable()
export class RouterEffectsService {
  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    filter(action => action instanceof actions.RouterGoAction),
    map((action: actions.RouterGoAction) => action),
    tap(({ path, queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras }))
  );

  @Effect({ dispatch: false })
  navigateByUrl$ = this.actions$.pipe(
    filter(action => action instanceof actions.RouterGoByUrlAction),
    map((action: actions.RouterGoByUrlAction) => action.url),
    tap(url => (url ? this.router.navigateByUrl(url) : undefined))
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.pipe(filter(action => action instanceof actions.RouterBackAction), tap(() => this.location.back()));

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.pipe(
    filter(action => action instanceof actions.RouterForwardAction),
    tap(() => this.location.forward())
  );

  /**
   * Bindings to connect the Angular Router with @ngrx/store
   * https://github.com/ngrx/platform/blob/master/docs/router-store/README.md
   */

  @Effect({ dispatch: false })
  routerNavigation$ = this.actions$.ofType(ROUTER_NAVIGATION).pipe(
    map((action: RouterNavigationAction) => action.payload),
    // tap(payload => console.log(payload)),
    share()
  );

  /** The ROUTER_CANCEL action represents a guard canceling navigation */
  @Effect({ dispatch: false })
  routerCancel$ = this.actions$.ofType(ROUTER_CANCEL).pipe(
    map((action: RouterCancelAction<AppState>) => action.payload),
    // tap(payload => console.log(payload)),
    share()
  );

  @Effect({ dispatch: false })
  routerError$ = this.actions$.ofType(ROUTER_ERROR).pipe(
    map((action: RouterErrorAction<AppState>) => action.payload),
    // tap(payload => console.log(payload)),
    share()
  );

  /**
   * Bindings to Router Events
   */

  @Effect({ dispatch: false })
  navigationStart$ = this.router.events.pipe(
    filter(event => event instanceof NavigationStart)
    // tap(event => console.log(`nav start: ${event}`))
  );

  @Effect({ dispatch: false })
  navigationEnd$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
    // tap(event => console.log(`nav end: ${event}`))
  );

  constructor(private location: Location, private actions$: Actions, private router: Router) {}
}
