import { Injectable } from '@angular/core';

import { Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { defer, Observable, of } from 'rxjs';

import * as actions from '@dashboard/store/actions';

@Injectable()
export class DashboardEffectsService {
  @Effect() init$: Observable<Action> = defer(() =>
    of(
      new actions.LoadTitleAction(
        'This is the initial Dashboard title from store'
      )
    )
  );
}
