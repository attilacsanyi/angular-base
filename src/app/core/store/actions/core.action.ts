import { createAction, props } from '@ngrx/store';

import { User } from '@core/models';

// prettier-ignore
export enum CoreActionTypes {
  Login         = '[Core] Login',
  LoginSuccess  = '[Core] Login Success',
  LoginFailed   = '[Core] Login Failed',
  Logout        = '[Core] Logout'
}

export const login = createAction(CoreActionTypes.Login, props<{ username: string; password: string }>());

export const loginSuccess = createAction(CoreActionTypes.LoginSuccess, props<{ user: User }>());

export const loginFailed = createAction(CoreActionTypes.LoginFailed, props<{ error: string }>());

export const logout = createAction(CoreActionTypes.Logout);
