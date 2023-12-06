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
  selectedSeats: number[];
}

const initialState: SeatState = {
  seats: [],
  selectedSeats: [],
};

export const seatSlice = createSlice({
  name: 'seat',
  initialState,
  reducers: {
    getSeatData: (state, action: PayloadAction<SeatRow[]>) => {
      state.seats = action.payload;
    },
    selectSeat(state, action) {
      const seatId = action.payload;
      const seatIndex = state.selectedSeats.indexOf(seatId);

      if (seatIndex === -1) {
        state.selectedSeats.push(seatId);
      } else {
        state.selectedSeats.splice(seatIndex, 1);
      }
    },
  },
});

export const { getSeatData, selectSeat } = seatSlice.actions;
export default seatSlice.reducer;
