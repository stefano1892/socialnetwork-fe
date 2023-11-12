import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const reducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export let persistor = persistStore(store);

export const { dispatch, getState } = store;
export const { dispatch: persistDispatch, getState: getPersistedState } = persistor;

export const asyncDispatch = store.dispatch;

export const asyncPersistor = (action) => {
  return new Promise((resolve) => {
    persistDispatch(action);
    resolve(getPersistedState());
  });
};

export default store;
