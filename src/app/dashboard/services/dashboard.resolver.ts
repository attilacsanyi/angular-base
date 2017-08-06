import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.state';

import * as store from '@dashboard/store';

@Injectable()
export class DashboardResolver implements Resolve<string> {

  constructor(private store$: Store<AppState>) { }

  resolve(): Observable<string> {
    this.loadTitle();
    return this.titleSelector().take(1);
  }

  public titleSelector() {
    return this.store$.select(store.getTitleState);
  }

  public loadTitle() {
    this.store$.dispatch(new store.LoadTitleAction('This is the new Dashboard title from route resolve'));
  }
}
