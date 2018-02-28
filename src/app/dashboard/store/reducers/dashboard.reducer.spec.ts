import { assign } from '@shared/utils';

import * as actions from '@dashboard/store/actions';
import * as fromStore from '@dashboard/store/reducers/dashboard.reducer';

export const assignToInitState = (newState: Partial<fromStore.DashboardState>) => assign(fromStore.initialState, newState);

describe('DashboardStateReducer', () => {
  describe('LoadTitleAction', () => {
    it('should reset title', () => {
      const oldState = assignToInitState({ title: 'title' });
      const newState = fromStore.reducer(oldState, new actions.LoadTitleAction('new title'));

      expect(newState).toEqual(assignToInitState({ title: 'new title' }));
    });
  });
});
