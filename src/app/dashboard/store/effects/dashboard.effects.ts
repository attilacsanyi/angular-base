import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Effect } from '@ngrx/effects';
import { defer } from 'rxjs/observable/defer';

import * as actions from '../../../dashboard/store/actions';

@Injectable()
export class DashboardEffectsService {

  @Effect()
  init$: Observable<Action> = defer(() => Observable.of(new actions.LoadTitleAction('This is the initial Dashboard title from store')));

  constructor() { }
}
