import { counterReducer } from './Counter/CounterReduser';
import { todoReducer } from './Todo/TodoReducer';
const { combineReducers } = require('@reduxjs/toolkit');

export const reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});
