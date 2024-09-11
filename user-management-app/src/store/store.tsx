import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import filterReducer from '../slices/filterSlice';
import { UserState } from '../slices/userSlice';
import { IFilterState } from '../models/IFilterState';

export type RootState = {
  users: UserState;
  filters: IFilterState;
};

export const store = configureStore({
  reducer: {
    users: userReducer,
    filters: filterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;