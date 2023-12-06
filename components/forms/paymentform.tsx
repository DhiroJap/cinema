import React, { useEffect, useState } from 'react';
import { InputContainer, InputLabel, NewButton } from '@/styles';



export default function PaymentForm ()  {


  return (
    <form className='w-200 flex flex-col gap-2'>
      <InputContainer>
        <InputLabel htmlFor='seatnumber'>Seat Number</InputLabel>
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor='time'>Time</InputLabel>
      </InputContainer>

      <h1>Total Payment: </h1>

      <section className='flex justify-between gap-2'>
        <NewButton>Confirm Order</NewButton>
        <NewButton>Cancel</NewButton>
      </section>
    </form>
  );
};
