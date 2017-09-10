import { assign } from '../../../shared/utils';

import * as reducers from '../../../core/store/reducers';
import * as actions from '../../../core/store/actions';
import * as states from '../../../core/store/states';
import * as model from '../../../core/models';

export const assignToInitState = (newState: Partial<states.State>) => assign(states.initialState, newState);

describe('CoreStateReducer', () => {

  describe('LogoutAction', () => {

    it('should reset user state', () => {
      const oldState = assignToInitState({ user: model.testUser });
      const newState = reducers.reducer(oldState, new actions.LogoutAction());

      expect(newState).toEqual(assignToInitState({}));
    });

  });

  describe('LoginSuccessAction', () => {

    it('should store new user', () => {
      const oldState = assignToInitState({ user: undefined });
      const newState = reducers.reducer(oldState, new actions.LoginSuccessAction(model.testUser));

      expect(newState).toEqual(assignToInitState({ user: model.testUser }));
    });

  });
});

