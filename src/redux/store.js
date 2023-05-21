import { reducer } from './Reducer';

const { createStore } = require('@reduxjs/toolkit');

export const store = createStore(reducer);

// store.dispatch({ type: 'increment', payload: 10 });
