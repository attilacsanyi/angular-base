import { assign } from '@shared/utils';

import * as model from '@core/models';
import * as actions from '@core/store/actions';
import * as fromStore from '@core/store/reducers/core.reducer';

export const assignToInitState = (newState: Partial<fromStore.CoreState>) => assign(fromStore.initialState, newState);

describe('CoreStateReducer', () => {
  describe('LogoutAction', () => {
    it('should reset user state', () => {
      const oldState = assignToInitState({ user: model.testUser });
      const newState = fromStore.reducer(oldState, actions.logout());

      expect(newState).toEqual(assignToInitState({}));
    });
  });

  describe('LoginSuccessAction', () => {
    it('should store new user', () => {
      const oldState = assignToInitState({ user: undefined });
      const newState = fromStore.reducer(oldState, actions.loginSuccess({ user: model.testUser }));

      expect(newState).toEqual(assignToInitState({ user: model.testUser }));
    });
  });
});
