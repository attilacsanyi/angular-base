import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromStore from '../store';

@Component({
  selector: 'ac-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  title$: Observable<string>;

  constructor(private store$: Store<fromStore.HomeState>) {}

  ngOnInit() {
    this.title$ = this.store$.pipe(select(fromStore.getTitleState));
  }
}
