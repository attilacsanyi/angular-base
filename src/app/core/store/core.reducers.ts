import { assign } from '@shared/utils';

import * as core from '@core/store';

export function reducer(state: core.State = core.initialState, action: core.Actions) {
  switch (action.constructor) {

    case core.LoginSuccessAction:
      return handleLoginSuccessAction(action as core.LoginSuccessAction, state);
    case core.LogoutAction:
      return handleLogoutAction(state);

    default:
      return state;
  }
}

function handleLoginSuccessAction(action: core.LoginSuccessAction, state: core.State) {
  return assign(state, {
    user: action.payload,
  });
}

function handleLogoutAction(state: core.State) {
  return assign(state, core.initialState);
}
