import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from 'app/app.state';

import * as dashboard from '@dashboard/store';

@Component({
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
    this.title$ = this.store$.select(dashboard.getTitleState);
  }

}
