'use client';

import React, { useEffect, useState } from 'react';
import { InputContainer, InputLabel, NewButton } from '@/styles';
import { lockRoute } from '@/utils/auth';
import { useRouter } from 'next/router';
import { GetPayment } from '@/utils/api';

interface pay {
  paymentId: number;
  movieName: string;
  studio: string;
  price: number;
  timeStart: string;
  studioSeat: [];
}

export default function PaymentForm ({BookingHeaderID}: { BookingHeaderID: number } )  {
  lockRoute();
  // const router = useRouter();
  const [booking ,setBooking] = useState<pay[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetPayment(BookingHeaderID);
        const data = await response?.json();

        console.log(data.data);
        setBooking(data.data);

      } catch (error) {
        console.error('Error fetching data : ', error);
      }
    };

    fetchData();
  }, [BookingHeaderID]);

  return (
    <form className='w-200 flex flex-col gap-2'>
      <InputContainer>
        <InputLabel htmlFor='seatnumber'>
        Seat Number: {booking.length > 0 && booking[0].studioSeat.join(', ')}
          </InputLabel>
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor='Time'>
          Time: {booking.length > 0 && booking[0].timeStart}
          </InputLabel>
      </InputContainer>

      <h1>Total Payment: {booking.length > 0 && booking[0].price}</h1>

      <section className='flex justify-between gap-2'>
        <NewButton>Confirm Order</NewButton>
        <NewButton>Cancel</NewButton>
      </section>
    </form>
  );
};
