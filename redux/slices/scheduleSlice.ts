// scheduleSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {MovieTime} from '@/components/movies/movieTime';
interface ScheduleState {
  scheduleData: MovieTime[] | null;
}

const initialState: ScheduleState = {
  scheduleData: null,
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setScheduleData: (state, action: PayloadAction<MovieTime[]>) => {
      state.scheduleData = action.payload;
    },
  },
});

export const { setScheduleData } = scheduleSlice.actions;
export default scheduleSlice.reducer;
