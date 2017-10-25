import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import * as selectors from '../../home/store/selectors';

import { AppState } from '../../app.state';

@Component({
  moduleId: module.id,
  selector: 'ac-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  title$: Observable<string>;

  constructor(private store$: Store<AppState>) {}

  ngOnInit() {
    this.title$ = this.store$.select(selectors.getTitleState);
  }
}
