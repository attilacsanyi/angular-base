import { ChangeDetectionStrategy, Component, Input, OnInit, VERSION } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import * as models from '../../../core/models';
import * as actions from '../../../core/store/actions';
import * as selectors from '../../../core/store/selectors';

import { AppState } from '../../../app.state';

@Component({
  moduleId: module.id,
  selector: 'ac-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TitleComponent implements OnInit {
  @Input() title: string;

  user$: Observable<models.User>;
  ngVersion = VERSION.full;

  constructor(private store$: Store<AppState>) {}

  ngOnInit() {
    this.user$ = this.store$.select(selectors.getUserState);
  }

  logout = () => this.store$.dispatch(new actions.LogoutAction());

  login = () => this.store$.dispatch(new actions.LoginSuccessAction(models.testUser));
}
