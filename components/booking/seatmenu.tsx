'use client';

import { getSeatData } from '@/redux/slices/seatSlice';
import { AppDispatch, RootState } from '@/redux/store';
import {
  NewButton,
  SeatCancel,
  SeatConfirm,
  SeatIcon,
  TheaterScreen,
} from '@/styles';
import { getBookingSeat } from '@/utils/api';
import { lockRoute } from '@/utils/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function SeatMenu({ id }: { id: string }) {
  lockRoute();

  const dispatch = useDispatch<AppDispatch>();
  const seatData = useSelector((state: RootState) => state.seat.seats);

  useEffect(() => {
    const getSeat = async () => {
      const response = await getBookingSeat(id);
      dispatch(getSeatData(response.data));
    };
    getSeat();
  }, [dispatch, id]);

  return (
    <section className='my-20'>
      <section className='flex flex-col gap-4'>
        <section className='flex gap-4 items-center'>
          <SeatIcon disabled className='bg-secondary' />
          <h1>Available</h1>
        </section>
        <section className='flex gap-4 items-center'>
          <SeatIcon className='bg-error' disabled />
          <h1>Not Available</h1>
        </section>
      </section>
      <TheaterScreen />
      <div>
        {seatData.map((row) => (
          <div key={row.row} className='mb-4'>
            <div className='flex gap-6'>
              {row.seatDetail.map((seat) => (
                <SeatIcon
                  key={seat.id}
                  className={`bg-secondary text-white ${
                    seat.isAvail
                      ? 'cursor-pointer'
                      : 'bg-error cursor-not-allowed'
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
        <SeatConfirm>Confirm Order</SeatConfirm>
        <SeatCancel>Cancel</SeatCancel>
      </section>
    </section>
  );
}
