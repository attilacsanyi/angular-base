import { assign } from '@shared/utils';

import * as dashboard from '@dashboard/store';

export function reducer(state: dashboard.State = dashboard.initialState, action: dashboard.Actions) {
  switch (action.constructor) {

    case dashboard.LoadTitleAction:
      return handleLoadTitleAction(action as dashboard.LoadTitleAction, state);

    default:
      return state;
  }
}

function handleLoadTitleAction(action: dashboard.LoadTitleAction, state: dashboard.State) {
  return assign(state, {
    title: action.title,
  });
}
