import { createAction, props } from '@ngrx/store';

import { User } from '@core/models';

const prefix = '[Core]';

export const login = createAction(`${prefix} Login`, props<{ username: string; password: string }>());
export const loginSuccess = createAction(`${prefix} Login Success`, props<{ user: User }>());
export const loginFailed = createAction(`${prefix} Login Failed`, props<{ error: string }>());

export const logout = createAction(`${prefix} Logout`);
