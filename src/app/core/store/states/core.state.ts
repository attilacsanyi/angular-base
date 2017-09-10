import { User } from '../../../core/models';

export interface State {
  user: User;
}

export const initialState: State = {
  user: undefined,
};
