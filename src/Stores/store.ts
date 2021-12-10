import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { questionReducer, responseReducer } from '@Stores';
import { EntityName } from '@Types';

const rootReducer = combineReducers({
  [EntityName.Question]: questionReducer,
  [EntityName.Response]: responseReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
