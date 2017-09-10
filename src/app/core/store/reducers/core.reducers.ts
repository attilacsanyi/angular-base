import { assign } from '../../../shared/utils';

import * as actions from '../../../core/store/actions';
import * as states from '../../../core/store/states';

export function reducer(state: states.State = states.initialState, action: actions.Actions) {
  switch (action.constructor) {

    case actions.LoginSuccessAction:
      return handleLoginSuccessAction(action as actions.LoginSuccessAction, state);
    case actions.LogoutAction:
      return handleLogoutAction(state);

    default:
      return state;
  }
}

function handleLoginSuccessAction(action: actions.LoginSuccessAction, state: states.State) {
  return assign(state, {
    user: action.payload,
  });
}

function handleLogoutAction(state: states.State) {
  return assign(state, states.initialState);
}
