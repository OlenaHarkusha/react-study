import persistReducer from 'redux-persist/es/persistReducer';
import { reducer } from './Reducer';
import persistStore from 'redux-persist/es/persistStore';

const { configureStore } = require('@reduxjs/toolkit');

// export const store = configureStore({ reducer });

// store.dispatch({ type: 'increment', payload: 10 });
const persistConfig = {
  key: 'root',
  Storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(store);
