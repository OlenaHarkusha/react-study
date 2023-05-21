import { counterReducer } from './Counter/CounterReducer';
import { todoReducer } from './Todo/TodoReducer';

export const reducer = {
  counter: counterReducer,
  todo: todoReducer,
};
