import { createReducer } from '@reduxjs/toolkit';
import { counterInitialState } from './initialState';
import { decrement, increment, setStep } from './actions';
// import { DECREMENT, INCREMENT, SETSTEP } from './types';

//в квадратних дужках шм'я функції-екшена
export const counterReducer = createReducer(counterInitialState, {
  [increment]: (state, action) => ({
    ...state,
    total: state.total + action.payload,
  }),
  [decrement]: (state, action) => ({
    ...state,
    total: state.total - action.payload,
  }),
  [setStep]: (state, action) => ({
    ...state,
    step: action.payload,
  }),
});

// export const counterReducer = (state = counterInitialState.counter, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, total: state.total + action.payload };
//     case DECREMENT:
//       return { ...state, total: state.total + action.payload };
//     case SETSTEP:
//       return { ...state, step: action.payload };
//     default:
//       return state;
//   }
// };
