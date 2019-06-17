import { ChangeDetectionStrategy, Component, Input, OnInit, VERSION } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState } from 'app/app.state';

import { environment } from '@env';

import * as models from '@core/models';
import * as actions from '@core/store/actions';
import * as selectors from '@core/store/selectors';

@Component({
  selector: 'ac-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent implements OnInit {
  @Input() title: string;

  user$: Observable<models.User | undefined>;
  ngVersion = VERSION.full;
  env = environment.env;

  constructor(private store$: Store<AppState>) {}

  ngOnInit() {
    this.user$ = this.store$.pipe(select(selectors.getUserState));
  }

  logout = () => this.store$.dispatch(actions.logout());

  login = () => this.store$.dispatch(actions.loginSuccess({ user: models.testUser }));
}
