'use client';

import { inputPassword, inputPhoneNumber } from '@/redux/slices/loginSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { InputContainer, InputField, InputLabel, NewButton } from '@/styles';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { postLogin } from '@/utils/api';
import { ToastContainer, toast } from 'react-toastify';
import { setUser } from '@/redux/slices/userSlice';
import { useState } from 'react';

export default function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { phoneNumber, password, isPasswordValid } = useSelector(
    (state: RootState) => state.login
  );
  const router = useRouter();
  const isFormEmpty = phoneNumber !== '' && password !== '';
  const isLowerCaseMissing = !/(?=.*[a-z])/.test(password);
  const isUpperCaseMissing = !/(?=.*[A-Z])/.test(password);
  const isNumberMissing = !/(?=.*\d)/.test(password);
  const isSymbolMissing = !/(?=.*[!@#$%^&*])/.test(password);
  const [errorCooldown, setErrorCooldown] = useState(false);
  const COOLDOWN_TIME = 5000;

  const loginAction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isPasswordValid) {
      let errorMessages = [];

      if (isLowerCaseMissing) {
        errorMessages.push(
          'Password must contain at least one lowercase letter.'
        );
      }

      if (isUpperCaseMissing) {
        errorMessages.push(
          'Password must contain at least one uppercase letter.'
        );
      }

      if (isNumberMissing) {
        errorMessages.push('Password must contain at least one number.');
      }

      if (isSymbolMissing) {
        errorMessages.push('Password must contain at least one symbol.');
      }

      if (errorMessages.length > 0 && !errorCooldown) {
        errorMessages.forEach((message) => {
          toast.error(message, {
            position: 'bottom-left',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        });
        setErrorCooldown(true);

        setTimeout(() => {
          setErrorCooldown(false);
        }, COOLDOWN_TIME);
      }
      return;
    }

    const response = await postLogin(phoneNumber, password);
    try {
      if (response) {
        const { user, token } = response.data;
        const { role, id, name, phoneNumber, email, gender, birthdate } = user;
        dispatch(
          setUser({
            user: {
              id,
              name,
              phoneNumber,
              email,
              gender,
              birthdate,
              role,
            },
            token,
          })
        );
        toast.success('Successfully logged in!', {
          position: 'bottom-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        localStorage.setItem('token', token);
        router.push('/profile');
        router.refresh();
      }
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='w-200 flex flex-col gap-2' onSubmit={loginAction}>
      <InputContainer>
        <InputLabel htmlFor='phoneNumber'>Phone Number</InputLabel>
        <InputField
          id='phoneNumber'
          type='number'
          inputMode='numeric'
          onChange={(e) => {
            dispatch(inputPhoneNumber(e.target.value));
          }}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <InputField
          id='password'
          type='password'
          onChange={(e) => dispatch(inputPassword(e.target.value))}
        />
      </InputContainer>
      <NewButton type='submit' disabled={!isFormEmpty}>
        Login
      </NewButton>
      <div>
        <span>Dont have an account? </span>
        <Link href='/register'>
          <span className='underline text-customgray-2'>Register</span>
        </Link>
      </div>
    </form>
  );
}
