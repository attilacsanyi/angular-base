import { defer } from 'rxjs/observable/defer';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as actions from '../../../home/store/actions';

@Injectable()
export class HomeEffectsService {

  @Effect()
  init$: Observable<Action> = defer(() => of(new actions.LoadTitleAction('This is the initial Home title from store')));

  constructor() { }
}
