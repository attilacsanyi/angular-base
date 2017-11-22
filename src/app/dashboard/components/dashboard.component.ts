import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import * as selectors from '../../dashboard/store/selectors';

import { AppState } from '../../app.state';

@Component({
  selector: 'ac-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  title$: Observable<string>;

  constructor(private store$: Store<AppState>) {}

  ngOnInit() {
    this.title$ = this.store$.select(selectors.getTitleState);
  }
}
