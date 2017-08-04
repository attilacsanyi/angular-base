import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from 'app/app.state';

import * as core from '@core/store';
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
    this.user$ = this.store$.select(core.getUserState);
  }

  logout = () => this.store$.dispatch(new core.LogoutAction());

  login = () => this.store$.dispatch(new core.LoginSuccessAction(models.testUser));

}
