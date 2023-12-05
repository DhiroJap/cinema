import { createSlice } from '@reduxjs/toolkit';

interface TimeState {
  selectScheduleId: number | null;
  setScheduleId: number | null;
}

const initialState: TimeState = {
  selectScheduleId: null,
  setScheduleId: null,
};

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    selectSchedule: (state, action) => {
      state.selectScheduleId = action.payload;
    },
    setSchedule: (state) => {
      state.setScheduleId = state.selectScheduleId;
      state.selectScheduleId = null;
    },
  },
});

export const { selectSchedule, setSchedule } = timeSlice.actions;
export default timeSlice.reducer;
