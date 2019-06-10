import { createReducer, on } from '@ngrx/store';

import { User } from '@core/models';
import * as actions from '@core/store/actions';

export interface CoreState {
  user: User | undefined;
}

export const initialState: CoreState = {
  user: undefined
};

export const reducer = createReducer(
  initialState,
  on(actions.loginSuccess, (state, { user }) => ({ ...state, user })),
  on(actions.logout, () => initialState)
);

export const getUserState = (state: CoreState) => state.user;
