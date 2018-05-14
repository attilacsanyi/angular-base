import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromStore from '@dashboard/store';

@Component({
  selector: 'ac-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  title$: Observable<string>;

  constructor(private store$: Store<fromStore.DashboardState>) {}

  ngOnInit() {
    this.title$ = this.store$.pipe(select(fromStore.getTitleState));
  }
}
