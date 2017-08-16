import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { defer } from 'rxjs/observable/defer';

import * as actions from '@core/store/actions';
import * as model from '@core/models';

@Injectable()
export class CoreEffectsService {

  @Effect()
  init$: Observable<Action> = defer(() => Observable.of(new actions.LoginSuccessAction(model.testUser)));

  constructor(
    private actions$: Actions,
  ) { }
}
