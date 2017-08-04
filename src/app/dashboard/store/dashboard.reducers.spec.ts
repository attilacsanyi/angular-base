import { assign } from '@shared/utils';

import * as dashboard from '@dashboard/store';

export const assignToInitState = (newState: Partial<dashboard.State>) => assign(dashboard.initialState, newState);

describe('DashboardStateReducer', () => {

  describe('LoadTitleAction', () => {

    it('should reset title', () => {
      const oldState = assignToInitState({ title: 'title' });
      const newState = dashboard.reducer(oldState, new dashboard.LoadTitleAction('new title'));

      expect(newState).toEqual(assignToInitState({ title: 'new title' }));
    });

  });
});

