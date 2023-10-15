import { ActionReducer, Action } from '@ngrx/store';
import { StateCounter, initialState } from './state';
import { INCREMENT, DECREMENT } from './action';

export const mainStoreReducer: ActionReducer<StateCounter> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        counter: state.counter - 1,
      };
    default:
      return {
        counter: state.counter,
      };
  }
};
