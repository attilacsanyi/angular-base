import * as actions from '../../store/actions/home.actions';

export interface HomeState {
  title: string;
}

export const initialState: HomeState = {
  title: ''
};

export function reducer(state = initialState, action: actions.HomeActions) {
  switch (action.constructor) {
    case actions.LoadTitleAction:
      const { title } = action as actions.LoadTitleAction;
      return { ...state, title };

    default:
      return state;
  }
}

export const getTitleState = (state: HomeState) => state.title;
