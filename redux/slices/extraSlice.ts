'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ExtraState {
  gender: string;
}

const initialState: ExtraState = {
  gender: 'Male',
};

const extraSlice = createSlice({
  name: 'extra',
  initialState,
  reducers: {
    changeGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
  },
});

export const { changeGender } = extraSlice.actions;
export default extraSlice.reducer;
