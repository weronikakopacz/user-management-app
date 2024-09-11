import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterState } from '../models/IFilterState';

const initialState: IFilterState = {
  name: '',
  username: '',
  email: '',
  phone: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<{ filter: keyof IFilterState; value: string }>) {
      state[action.payload.filter] = action.payload.value;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;