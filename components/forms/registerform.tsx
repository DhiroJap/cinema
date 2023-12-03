'use client';

import {inputName, inputPhoneNumber, inputEmail, inputPassword, inputBirthDate} from '@/redux/slices/registerSlice';
import {changeGender} from '@/redux/slices/extraSlice';
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
import axios from 'axios';
import { FormEvent, FormEventHandler } from 'react';
import { setUserData } from '@/redux/slices/userSlice';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const dispatch = useDispatch<AppDispatch>();
  const {name, phoneNumber, email, password, gender , birthDate} = useSelector(
    (state: RootState) => state.register
  )
  const router = useRouter();

  const registerAction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://localhost:7292/Auth/register', {
        name: name, 
        phoneNumber: phoneNumber,
        email: email,
        password: password,
        gender: gender,
        birthDate: birthDate,
      });

      const {user} = res.data;
      dispatch(setUserData(user));
      router.push('/profile');
    }catch (error){
      console.error('Login Failed:', error);
    }
  }

  return (
    <form className='w-200 flex flex-col gap-2' onSubmit= {registerAction}>
      <InputContainer>
        <InputLabel htmlFor='name'>Full Name</InputLabel>
        <InputField id='name' type='text' 
        onChange={(e) => {
          dispatch(inputName(e.target.value));
        }}
      />
        
    </InputContainer>
      <section className='flex justify-between gap-4'>
        <InputContainer>
          <InputLabel htmlFor='phoneNumber'>Phone Number</InputLabel>
          <InputField id='phoneNumber' type='number' inputMode='numeric' onChange={(e) => {
            dispatch(inputPhoneNumber(e.target.value));
          }} 
          />
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
          <h1 className='text-2xl m-auto'>{gender}</h1>
    </InputContainer>
      </section>

      <InputContainer>
        <InputLabel htmlFor='birthDate'>Birth Date</InputLabel>
        <InputField type='date' id='date' onChange={(e) => {
          dispatch(inputBirthDate(e.target.value));
        }}
        />
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <InputField type='email' id='email' onChange={(e) => {
          dispatch(inputEmail(e.target.value));
        }}/>
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <InputField type='password' id='password' onChange={(e) => {
          dispatch(inputPassword(e.target.value));
        }}
        />
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

