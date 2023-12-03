'use client';

import { changeGender } from '@/redux/slices/extraSlice';
import { AppDispatch, RootState } from '@/redux/store';
import {
  InputContainer,
  InputField,
  InputLabel,
  NewButton,
  RegisterSelect,
} from '@/styles';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

export default function RegisterForm() {
  const extra = useSelector((state: RootState) => state.extra);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <form className='w-200 flex flex-col gap-2'>
      <InputContainer>
        <InputLabel htmlFor='fullName'>Full Name</InputLabel>
        <InputField type='text' id='fullName' />
      </InputContainer>

      <section className='flex justify-between gap-4'>
        <InputContainer>
          <InputLabel htmlFor='phoneNumber'>Phone Number</InputLabel>
          <InputField type='number' inputMode='numeric' id='phoneNumber' />
        </InputContainer>

        <InputContainer className='flex'>
          <section>
            <InputLabel htmlFor='gender'>Gender</InputLabel>
            <RegisterSelect
              name='gender'
              id='gender'
              onChange={(e) => {
                dispatch(changeGender(e.target.value));
              }}
            >
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </RegisterSelect>
          </section>
          <h1 className='text-2xl m-auto'>{extra.gender}</h1>
        </InputContainer>
      </section>

      <InputContainer>
        <InputLabel htmlFor='birthDate'>Birth Date</InputLabel>
        <InputField type='date' id='date' />
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <InputField type='email' id='email' />
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <InputField type='password' id='password' />
      </InputContainer>

      <NewButton>Register Account</NewButton>

      <div>
        <span>Already have an account? </span>
        <Link href='/login'>
          <span className='underline text-customgray-2'>Login</span>
        </Link>
      </div>
    </form>
  );
}
