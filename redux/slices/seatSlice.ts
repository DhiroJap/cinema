import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Seat {
  id: number;
  seatName: string;
  isAvail: boolean;
}

interface SeatRow {
  row: string;
  seatDetail: Seat[];
}

interface SeatState {
  seats: SeatRow[];
}

const initialState: SeatState = {
  seats: [],
};

export const seatSlice = createSlice({
  name: 'seat',
  initialState,
  reducers: {
    getSeatData: (state, action: PayloadAction<SeatRow[]>) => {
      state.seats = action.payload;
    },
  },
});

export const { getSeatData } = seatSlice.actions;
export default seatSlice.reducer;
