import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { defer } from 'rxjs/observable/defer';

import * as store from '@dashboard/store';

@Injectable()
export class DashboardEffectsService {

  @Effect()
  init$: Observable<Action> = defer(() => Observable.of(new store.LoadTitleAction('This is the initial Dashboard title from store')));

  constructor(
    private actions$: Actions,
  ) { }
}
