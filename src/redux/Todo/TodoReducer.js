import { createReducer } from '@reduxjs/toolkit';
import { todoInitialState } from './InitialState';
// import { CREATETODO } from './types';
import { createTodo } from './actions';

//

export const todoReducer = createReducer(todoInitialState, {
  [createTodo]: (state, action) => ({
    ...state,
    totdo: [...state.todo, { ...action.payload }],
  }),
});

//export const todoReducer = (state = todoInitialState, action) => {
//   switch (action.type) {
//     case CREATETODO:
//       return {
//         ...state,
//         totdo: [...state.todo, { ...action.payload }],
//       };
//     default:
//       return state;
//   }
// };
