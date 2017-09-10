import { assign } from '../../../shared/utils';

import * as reducers from '../../../home/store/reducers';
import * as actions from '../../../home/store/actions';
import * as states from '../../../home/store/states';

export const assignToInitState = (newState: Partial<states.State>) => assign(states.initialState, newState);

describe('HomeStateReducer', () => {

  describe('LoadTitleAction', () => {

    it('should reset title', () => {
      const oldState = assignToInitState({ title: 'title' });
      const newState = reducers.reducer(oldState, new actions.LoadTitleAction('new title'));

      expect(newState).toEqual(assignToInitState({ title: 'new title' }));
    });

  });
});

