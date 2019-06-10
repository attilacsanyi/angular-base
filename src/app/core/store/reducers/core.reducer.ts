import { Action, createReducer, on } from '@ngrx/store';

import { User } from '@core/models';
import * as actions from '@core/store/actions';

export interface CoreState {
  user: User | undefined;
}

export const initialState: CoreState = {
  user: undefined
};

export const coreReducer = createReducer(
  initialState,
  on(actions.loginSuccess, (state, { user }) => ({ ...state, user })),
  on(actions.logout, () => initialState)
);

export function reducer(state: CoreState | undefined, action: Action) {
  return coreReducer(state, action);
}

export const getUserState = (state: CoreState) => state.user;
