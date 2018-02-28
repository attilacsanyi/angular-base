import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';
import { mapTo } from 'rxjs/operators/mapTo';

import * as fromStore from '../store';

@Injectable()
export class DashboardGuard implements CanActivate {
  constructor(private store$: Store<fromStore.DashboardState>) {}

  canActivate(): Observable<boolean> {
    this.loadTitle();
    return this.titleSelector().pipe(take(1), mapTo(true));
  }

  public titleSelector() {
    return this.store$.pipe(select(fromStore.getTitleState));
  }

  public loadTitle() {
    this.store$.dispatch(new fromStore.LoadTitleAction('This is the new Dashboard title from canActivate'));
  }
}
