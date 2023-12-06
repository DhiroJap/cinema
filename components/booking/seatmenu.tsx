'use client';

import { getSeatData, selectSeat } from '@/redux/slices/seatSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { CancelButton, ConfirmButton, SeatIcon, TheaterScreen } from '@/styles';
import { PostBooking, getBookingSeat } from '@/utils/api';
import { lockRoute } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function SeatMenu({ scheduleId }: { scheduleId: number }) {
  lockRoute();
  const dispatch = useDispatch<AppDispatch>();
  const seatData = useSelector((state: RootState) => state.seat.seats);
  const selectedSeats = useSelector(
    (state: RootState) => state.seat.selectedSeats
  );
  const user = useSelector((state: RootState) => state.user.user);
  const router = useRouter();

  useEffect(() => {
    const getSeat = async () => {
      const response = await getBookingSeat(scheduleId);
      dispatch(getSeatData(response.data));
    };
    getSeat();
  }, [dispatch, scheduleId]);

  const handleSeatClick = (seatId: number) => {
    dispatch(selectSeat(seatId));
  };

  const isSeatSelected = (seatId: number) => {
    return selectedSeats.includes(seatId);
  };

  const handleConfirmOrder = async () => {
    try {
      if (user?.id) {
        const response = await PostBooking(scheduleId, user.id, selectedSeats);
        const bookingHeaderID = await response.data.bookingHeaderID;
        console.log(bookingHeaderID);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelOrder = async () => {
    router.push('/');
    router.refresh();
  };

  return (
    <section className='my-20'>
      <section className='flex flex-col gap-4'>
        <section className='flex gap-4 items-center'>
          <SeatIcon disabled className='border-2 border-customwhite-1' />
          <h1>Available</h1>
        </section>
        <section className='flex gap-4 items-center'>
          <SeatIcon disabled className='bg-secondary' />
          <h1>Selected</h1>
        </section>
        <section className='flex gap-4 items-center'>
          <SeatIcon className='bg-error' disabled />
          <h1>Not Available</h1>
        </section>
      </section>
      <TheaterScreen className='flex items-center justify-center text-4xl'>
        SCREEN
      </TheaterScreen>
      <div>
        {seatData.map((row) => (
          <div key={row.row} className='mb-4'>
            <div className='flex gap-6'>
              {row.seatDetail.map((seat) => (
                <SeatIcon
                  key={seat.id}
                  onClick={() => {
                    if (seat.isAvail) {
                      handleSeatClick(seat.id);
                    }
                  }}
                  className={`transition-colors duration-300 text-white ${
                    seat.isAvail
                      ? 'cursor-pointer border-2 border-customwhite-1'
                      : 'bg-error cursor-not-allowed'
                  } ${
                    isSeatSelected(seat.id) ? 'bg-secondary border-none' : ''
                  }`}
                >
                  {seat.seatName}
                </SeatIcon>
              ))}
            </div>
          </div>
        ))}
      </div>
      <section className='flex gap-4'>
        <ConfirmButton onClick={handleConfirmOrder}>
          Confirm Order
        </ConfirmButton>
        <CancelButton onClick={handleCancelOrder}>Cancel</CancelButton>
      </section>
    </section>
  );
}
