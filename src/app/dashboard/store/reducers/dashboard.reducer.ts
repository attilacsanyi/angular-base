import * as actions from '@dashboard/store/actions';

export interface DashboardState {
  title: string;
}

export const initialState: DashboardState = {
  title: ''
};

export function reducer(state = initialState, action: actions.DashboardActions) {
  switch (action.constructor) {
    case actions.LoadTitleAction:
      const { title } = action as actions.LoadTitleAction;
      return { ...state, title };

    default:
      return state;
  }
}

export const getTitleState = (state: DashboardState) => state.title;
