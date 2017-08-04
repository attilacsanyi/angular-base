import { assign } from '@shared/utils';

import * as model from '@core/models';
import * as core from '@core/store';

export const assignToInitState = (newState: Partial<core.State>) => assign(core.initialState, newState);

describe('CoreStateReducer', () => {

  describe('LogoutAction', () => {

    it('should reset user state', () => {
      const oldState = assignToInitState({ user: model.testUser });
      const newState = core.reducer(oldState, new core.LogoutAction());

      expect(newState).toEqual(assignToInitState({}));
    });

  });

  describe('LoginSuccessAction', () => {

    it('should store new user', () => {
      const oldState = assignToInitState({ user: undefined });
      const newState = core.reducer(oldState, new core.LoginSuccessAction(model.testUser));

      expect(newState).toEqual(assignToInitState({ user: model.testUser }));
    });

  });
});

