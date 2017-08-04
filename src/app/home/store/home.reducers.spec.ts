import { assign } from '@shared/utils';

import * as home from '@home/store';

export const assignToInitState = (newState: Partial<home.State>) => assign(home.initialState, newState);

describe('HomeStateReducer', () => {

  describe('LoadTitleAction', () => {

    it('should reset title', () => {
      const oldState = assignToInitState({ title: 'title' });
      const newState = home.reducer(oldState, new home.LoadTitleAction('new title'));

      expect(newState).toEqual(assignToInitState({ title: 'new title' }));
    });

  });
});

