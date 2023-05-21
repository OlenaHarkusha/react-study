import { todoInitialState } from './InitialState';
import { CREATETODO } from './types';

export const todoReducer = (state = todoInitialState.todo, action) => {
  switch (action.type) {
    case CREATETODO:
      return {
        ...state,
        totdo: [...state.todo, { ...action.payload }],
      };
    default:
      return state;
  }
};
