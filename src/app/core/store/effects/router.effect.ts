import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivationStart, NavigationEnd, NavigationStart, Router } from '@angular/router';

import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  ROUTER_CANCEL,
  ROUTER_ERROR,
  ROUTER_NAVIGATION,
  RouterCancelAction,
  RouterErrorAction,
  RouterNavigationAction
} from '@ngrx/router-store';

import { Observable } from 'rxjs';
import { filter, share, tap } from 'rxjs/operators';

import { AppState } from '@appState';

import * as actions from '@core/store/actions/router.action';
import { AcRouterState } from '@core/store/reducers/router.reducer';

@Injectable()
export class RouterEffects {
  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType<actions.RouterGoAction>(actions.RouterActionTypes.Go),
    tap(({ path, queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras }))
  );

  @Effect({ dispatch: false })
  mergeQueryParams$ = this.actions$.pipe(
    ofType<actions.RouterMergeQueryParamsAction>(actions.RouterActionTypes.MergeQueryParams),
    tap(({ queryParams }) => this.router.navigate([], { queryParams, queryParamsHandling: 'merge' }))
  );

  @Effect({ dispatch: false })
  setQueryParams$ = this.actions$.pipe(
    ofType<actions.RouterSetQueryParamsAction>(actions.RouterActionTypes.SetQueryParams),
    tap(({ queryParams }) => this.router.navigate([], { queryParams }))
  );

  @Effect({ dispatch: false })
  navigateByUrl$ = this.actions$.pipe(
    ofType<actions.RouterGoByUrlAction>(actions.RouterActionTypes.GoByURL),
    tap(({ url, extras }) => (url ? this.router.navigateByUrl(url, extras) : undefined))
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.pipe(
    ofType<actions.RouterBackAction>(actions.RouterActionTypes.Back),
    tap(() => this.location.back())
  );

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.pipe(
    ofType<actions.RouterForwardAction>(actions.RouterActionTypes.Forward),
    tap(() => this.location.forward())
  );

  /**
   * Bindings to connect the Angular Router with @ngrx/store
   * https://github.com/ngrx/platform/blob/master/docs/router-store/README.md
   */

  @Effect({ dispatch: false })
  routerNavigation$ = this.actions$.pipe(
    ofType<RouterNavigationAction<AcRouterState>>(ROUTER_NAVIGATION),
    // tap(({ payload }) => console.log(payload)),
    share()
  );

  /** The ROUTER_CANCEL action represents a guard canceling navigation */
  @Effect({ dispatch: false })
  routerCancel$ = this.actions$.pipe(
    ofType<RouterCancelAction<AppState>>(ROUTER_CANCEL),
    // tap(({payload}) => console.log(payload)),
    share()
  );

  @Effect({ dispatch: false })
  routerError$ = this.actions$.pipe(
    ofType<RouterErrorAction<AppState>>(ROUTER_ERROR),
    // tap(({payload}) => console.log(payload)),
    share()
  );

  /**
   * Bindings to Router Events
   */

  @Effect({ dispatch: false })
  activationStart$ = this.router.events.pipe(
    filter((event): event is ActivationStart => event instanceof ActivationStart),
    // tap(event => console.log(`activation start: ${event}`)),
    share()
  );

  @Effect({ dispatch: false })
  navigationStart$ = this.router.events.pipe(
    filter((event): event is NavigationStart => event instanceof NavigationStart),
    // tap(event => console.log(`nav start: ${event}`)),
    share()
  );

  @Effect({ dispatch: false })
  navigationEnd$: Observable<NavigationEnd> = this.router.events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd),
    // tap(event => console.log(`nav end: ${event}`)),
    share()
  );

  constructor(private location: Location, private actions$: Actions, private router: Router) {}
}
