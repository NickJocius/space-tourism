import { configureStore } from '@reduxjs/toolkit';
import planetReducer from '../features/planet/planetSlice';
import navStateReducer from '../features/navState/navStateSlice';

export const store = configureStore({
  reducer: {
    planet: planetReducer,
    navExpand: navStateReducer,
  },
})