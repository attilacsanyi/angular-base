import { assign } from '@shared/utils';

import * as actions from '@home/store/actions';
import * as fromStore from '@home/store/reducers/home.reducer';

export const assignToInitState = (newState: Partial<fromStore.HomeState>) => assign(fromStore.initialState, newState);

describe('HomeStateReducer', () => {
  describe('LoadTitleAction', () => {
    it('should reset title', () => {
      const oldState = assignToInitState({ title: 'title' });
      const newState = fromStore.reducer(oldState, new actions.LoadTitleAction('new title'));

      expect(newState).toEqual(assignToInitState({ title: 'new title' }));
    });
  });
});
