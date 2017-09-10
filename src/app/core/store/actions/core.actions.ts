import { Action } from '@ngrx/store';

import { User } from '../../../core/models';

const modulePrefix = '[Core]';

export class LoginAction implements Action {
  readonly type = `${modulePrefix} Login`;
  constructor(public username: string, public password: string) { }
}

export class LoginSuccessAction implements Action {
  readonly type = `${modulePrefix} Login Success`;
  constructor(public payload: User) { }
}

export class LoginFailedAction implements Action {
  readonly type = `${modulePrefix} Login Failed`;
  constructor(public error: string) { }
}

export class LogoutAction implements Action {
  readonly type = `${modulePrefix} Logout`;
  constructor() { }
}

export type Actions =
  LoginAction | LoginSuccessAction | LoginFailedAction | LogoutAction;
