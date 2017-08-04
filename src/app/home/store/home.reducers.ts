import { assign } from '@shared/utils';

import * as home from '@home/store';

export function reducer(state: home.State = home.initialState, action: home.Actions) {
  switch (action.constructor) {

    case home.LoadTitleAction:
      return handleLoadTitleAction(action as home.LoadTitleAction, state);

    default:
      return state;
  }
}

function handleLoadTitleAction(action: home.LoadTitleAction, state: home.State) {
  return assign(state, {
    title: action.title,
  });
}
