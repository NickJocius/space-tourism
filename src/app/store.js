import { configureStore } from '@reduxjs/toolkit';
import planetReducer from '../features/planet/planetSlice';

export const store = configureStore({
  reducer: {
    planet: planetReducer,
  },
})