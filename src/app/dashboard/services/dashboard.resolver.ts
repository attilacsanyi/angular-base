import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.state';

import * as selector from '../../dashboard/store/selectors';
import * as actions from '../../dashboard/store/actions';

@Injectable()
export class DashboardResolver implements Resolve<string> {

  constructor(private store$: Store<AppState>) { }

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
