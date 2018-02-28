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

import { Observable } from 'rxjs/Observable';
import { filter, map, share, tap } from 'rxjs/operators';

import { AppState } from 'app/app.state';

import * as actions from '@core/store/actions';

@Injectable()
export class RouterEffectsService {
  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    filter((action: any): action is actions.RouterGoAction => action instanceof actions.RouterGoAction),
    tap(({ path, queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras }))
  );

  @Effect({ dispatch: false })
  navigateByUrl$ = this.actions$.pipe(
    filter((action: any): action is actions.RouterGoByUrlAction => action instanceof actions.RouterGoByUrlAction),
    tap(({ url }) => (url ? this.router.navigateByUrl(url) : undefined))
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
  routerNavigation$ = this.actions$.ofType<RouterNavigationAction>(ROUTER_NAVIGATION).pipe(
    // tap(({ payload }) => console.log(payload)),
    share()
  );

  /** The ROUTER_CANCEL action represents a guard canceling navigation */
  @Effect({ dispatch: false })
  routerCancel$ = this.actions$.ofType<RouterCancelAction<AppState>>(ROUTER_CANCEL).pipe(
    // tap(({payload}) => console.log(payload)),
    share()
  );

  @Effect({ dispatch: false })
  routerError$ = this.actions$.ofType<RouterErrorAction<AppState>>(ROUTER_ERROR).pipe(
    // tap(({payload}) => console.log(payload)),
    share()
  );

  /**
   * Bindings to Router Events
   */

  @Effect({ dispatch: false })
  navigationStart$ = this.router.events.pipe(
    filter(event => event instanceof NavigationStart),
    map(event => event as NavigationStart),
    // tap(event => console.log(`nav start: ${event}`)),
    share()
  );

  @Effect({ dispatch: false })
  navigationEnd$: Observable<NavigationEnd> = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(event => event as NavigationEnd),
    // tap(event => console.log(`nav end: ${event}`)),
    share()
  );

  constructor(private location: Location, private actions$: Actions, private router: Router) {}
}
