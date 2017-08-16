import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from 'app/app.state';

import * as selectors from '@core/store/selectors';
import * as actions from '@core/store/actions';
import * as models from '@core/models';

@Component({
  selector: 'ac-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TitleComponent implements OnInit {

  @Input() title: string;

  user$: Observable<models.User>;

  constructor(
    private store$: Store<AppState>
  ) { }

  ngOnInit() {
    this.user$ = this.store$.select(selectors.getUserState);
  }

  logout = () => this.store$.dispatch(new actions.LogoutAction());

  login = () => this.store$.dispatch(new actions.LoginSuccessAction(models.testUser));

}
