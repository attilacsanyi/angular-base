import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.state';

import * as selectors from '../../dashboard/store/selectors';

@Component({
  moduleId: module.id,
  selector: 'ac-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  title$: Observable<string>;

  constructor(
    private store$: Store<AppState>
  ) { }

  ngOnInit() {
    this.title$ = this.store$.select(selectors.getTitleState);
  }

}
