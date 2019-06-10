import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivationStart, NavigationEnd, NavigationStart, Router } from '@angular/router';

import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
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
  @Effect()
  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.routerGo),
        tap(({ path, queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras }))
      ),
    { dispatch: false }
  );

  mergeQueryParams$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.routerMergeQueryParams),
        tap(({ queryParams }) => this.router.navigate([], { queryParams, queryParamsHandling: 'merge' }))
      ),
    { dispatch: false }
  );

  setQueryParams$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.routerSetQueryParams),
        tap(({ queryParams }) => this.router.navigate([], { queryParams }))
      ),
    { dispatch: false }
  );

  navigateByUrl$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.routerGoByUrl),
        tap(({ url, extras }) => (url ? this.router.navigateByUrl(url, extras) : undefined))
      ),
    { dispatch: false }
  );

  navigateBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.routerBack),
        tap(() => this.location.back())
      ),
    { dispatch: false }
  );

  navigateForward$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.routerForward),
        tap(() => this.location.forward())
      ),
    { dispatch: false }
  );

  /**
   * Bindings to connect the Angular Router with @ngrx/store
   * https://github.com/ngrx/platform/blob/master/docs/router-store/README.md
   */

  routerNavigation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<RouterNavigationAction<AcRouterState>>(ROUTER_NAVIGATION),
        // tap(({ payload }) => console.log(payload)),
        share()
      ),
    { dispatch: false }
  );

  /** The ROUTER_CANCEL action represents a guard canceling navigation */
  routerCancel$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<RouterCancelAction<AppState>>(ROUTER_CANCEL),
        // tap(({payload}) => console.log(payload)),
        share()
      ),
    { dispatch: false }
  );

  routerError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<RouterErrorAction<AppState>>(ROUTER_ERROR),
        // tap(({payload}) => console.log(payload)),
        share()
      ),
    { dispatch: false }
  );

  /**
   * Bindings to Router Events
   */
  activationStart$ = createEffect(
    () =>
      this.router.events.pipe(
        filter((event): event is ActivationStart => event instanceof ActivationStart),
        // tap(event => console.log(`activation start: ${event}`)),
        share()
      ),
    { dispatch: false }
  );

  navigationStart$ = createEffect(
    () =>
      this.router.events.pipe(
        filter((event): event is NavigationStart => event instanceof NavigationStart),
        // tap(event => console.log(`nav start: ${event}`)),
        share()
      ),
    { dispatch: false }
  );

  navigationEnd$: Observable<NavigationEnd> = createEffect(
    () =>
      this.router.events.pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        // tap(event => console.log(`nav end: ${event}`)),
        share()
      ),
    { dispatch: false }
  );

  constructor(private location: Location, private actions$: Actions, private router: Router) {}
}
