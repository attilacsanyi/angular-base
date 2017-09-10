import { assign } from '../../../shared/utils';

import * as reducers from '../../../dashboard/store/reducers';
import * as actions from '../../../dashboard/store/actions';
import * as states from '../../../dashboard/store/states';

export const assignToInitState = (newState: Partial<states.State>) => assign(states.initialState, newState);

describe('DashboardStateReducer', () => {

  describe('LoadTitleAction', () => {

    it('should reset title', () => {
      const oldState = assignToInitState({ title: 'title' });
      const newState = reducers.reducer(oldState, new actions.LoadTitleAction('new title'));

      expect(newState).toEqual(assignToInitState({ title: 'new title' }));
    });

  });
});

