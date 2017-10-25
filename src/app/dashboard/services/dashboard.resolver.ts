import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';

import * as actions from '../../dashboard/store/actions';
import * as selector from '../../dashboard/store/selectors';

import { AppState } from '../../app.state';

@Injectable()
export class DashboardResolver implements Resolve<string> {
  constructor(private store$: Store<AppState>) {}

  resolve(): Observable<string> {
    this.loadTitle();
    return this.titleSelector().pipe(take(1));
  }

  public titleSelector() {
    return this.store$.select(selector.getTitleState);
  }

  public loadTitle() {
    this.store$.dispatch(new actions.LoadTitleAction('This is the new Dashboard title from route resolve'));
  }
}
