import { User } from '@core/models';
import * as actions from '@core/store/actions';

export interface CoreState {
  user: User | undefined;
}

export const initialState: CoreState = {
  user: undefined
};

export function reducer(state = initialState, action: actions.CoreActions) {
  switch (action.constructor) {
    case actions.LoginSuccessAction:
      const { user } = action as actions.LoginSuccessAction;
      return { ...state, user };

    case actions.LogoutAction:
      return initialState;

    default:
      return state;
  }
}

export const getUserState = (state: CoreState) => state.user;
