import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const reducers = combineReducers({ auth: authReducer });

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
