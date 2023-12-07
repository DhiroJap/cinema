'use client';

import React, { useEffect, useState } from 'react';
import {
  CancelButton,
  ConfirmButton,
  InputContainer,
  InputLabel,
} from '@/styles';
import { lockRoute } from '@/utils/auth';
import { AddPayment, GetPayment } from '@/utils/api';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface pay {
  paymentID: number;
  movieName: string;
  studio: string;
  amount: number;
  timestart: string;
  studioSeats: string[];
}

export default function PaymentForm({
  bookingHeaderId,
}: {
  bookingHeaderId: number;
}) {
  console.log(bookingHeaderId);
  lockRoute();
  const router = useRouter();
  const [booking, setBooking] = useState<pay>({
    paymentID: 0,
    movieName: '',
    studio: '',
    amount: 0,
    timestart: '',
    studioSeats: [],
  });
  const [paid, setPaid] = useState(false);
  const [redirect, setRedirect] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetPayment(bookingHeaderId);
        setBooking(response.data);

        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data : ', error);
      }
    };

    fetchData();
  }, [bookingHeaderId]);

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await AddPayment(booking.paymentID);
    if (response) {
      setPaid(true);
      toast.success('Payment Successfull!', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });

      const countdown = setInterval(() => {
        setRedirect((timer) => {
          if (timer === 1) {
            clearInterval(countdown);
            router.push('/');
            router.refresh();
          }
          return timer - 1;
        });
      }, 1000);
    }
  };

  return (
    <section>
      {paid ? (
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl text-center items-center justify-center'>
            Thank you for purchasing
          </h1>
          <h2 className='text-xl mt-5'>
            Redirecting you to the home page in {redirect} seconds...
          </h2>
        </div>
      ) : (
        <form className='w-200 flex flex-col gap-2' onSubmit={handleClick}>
          <InputContainer>
            <InputLabel htmlFor='seatnumber'>
              Seat Number:
              {booking?.studioSeats?.length > 0 &&
                booking.studioSeats.join(', ')}
            </InputLabel>
          </InputContainer>

          <InputContainer>
            <InputLabel htmlFor='Time'>
              Time:{' '}
              {booking?.timestart &&
                new Date(booking.timestart).toLocaleString(undefined, {
                  timeZone: 'UTC',
                })}
            </InputLabel>
          </InputContainer>

          <h1>Total Payment: {booking?.amount}</h1>

          <section className='flex justify-between gap-2'>
            <ConfirmButton type='submit'>Confirm Order</ConfirmButton>
            <CancelButton>Cancel</CancelButton>
          </section>
        </form>
      )}
    </section>
  );
}
