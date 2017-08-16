import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'app/app.state';

import * as selectors from '@home/store/selectors';

@Component({
  selector: 'ac-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  title$: Observable<string>;

  constructor(
    private store$: Store<AppState>
  ) { }

  ngOnInit() {
    this.title$ = this.store$.select(selectors.getTitleState);
  }

}
