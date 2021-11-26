import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import presetsReducer from './presets/presets-slice';

export const store = configureStore({
  reducer: {
    presets: presetsReducer,
  },
  middleware: [thunk, logger],
  devTools: process.env.NODE_ENV === 'development',
});
