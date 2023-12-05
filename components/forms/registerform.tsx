'use client';

import {
  inputName,
  inputPhoneNumber,
  inputEmail,
  inputPassword,
  inputBirthDate,
  changeGender,
} from '@/redux/slices/registerSlice';
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
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from "react-toastify";
import { postRegister } from '@/utils/api';

export default function RegisterForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { name, phoneNumber, email, password, gender, birthDate, isEmailValid, isPasswordValid } = useSelector(
    (state: RootState) => state.register
  );
  const router = useRouter();
  const isFormEmpty = name !== "" && phoneNumber !== "" && email !== "" && password !== "";
  const isEmailSymbolMissing = !/^\S+@\S+\.\S+$/.test(email);
  const isLowerCaseMissing = !/(?=.*[a-z])/.test(password);
  const isUpperCaseMissing = !/(?=.*[A-Z])/.test(password);
  const isNumberMissing = !/(?=.*\d)/.test(password);
  const isSymbolMissing = !/(?=.*[!@#$%^&*])/.test(password);

  const registerAction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!isEmailValid) {
      let errorMessages = [];

      if (isEmailSymbolMissing) {
        errorMessages.push(
          "Email must contain @"
        );
      }
      if (errorMessages.length > 0) {
        errorMessages.forEach((message) => {
        toast.error(message, {
          position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        return;
      });
    }
  }

  if (!isPasswordValid) {
    let errorMessages = [];

    if (isLowerCaseMissing) {
      errorMessages.push(
        "Password must contain at least one lowercase letter."
      );
    }

    if (isUpperCaseMissing) {
      errorMessages.push(
        "Password must contain at least one uppercase letter."
      );
    }

    if (isNumberMissing) {
      errorMessages.push("Password must contain at least one number."
      );
    }

    if (isSymbolMissing) {
      errorMessages.push("Password must contain at least one symbol."
      );
    }

    if (errorMessages.length > 0) {
      errorMessages.forEach((message) => {
        toast.error(message, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        return;
      });
    }
  }

    try {
      const response = await postRegister(name, email, phoneNumber, password, gender, birthDate);
      router.push("/profile");
    }catch (error: any) {
      return error.response?.data;
    }
  };  

  return (
    <form className='w-200 flex flex-col gap-2' onSubmit={registerAction}>
      <ToastContainer />
      <InputContainer>
        <InputLabel htmlFor='name'>Full Name</InputLabel>
        <InputField
          id='name'
          type='text'
          onChange={(e) => {
            dispatch(inputName(e.target.value));
          }}
        />
      </InputContainer>
      <section className='flex justify-between gap-4'>
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
        <InputField
          type='date'
          id='date'
          onChange={(e) => {
            dispatch(inputBirthDate(e.target.value));
          }}
        />
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <InputField
          type='email'
          id='email'
          onChange={(e) => {
            dispatch(inputEmail(e.target.value));
          }}
        />
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <InputField
          type='password'
          id='password'
          onChange={(e) => 
            dispatch(inputPassword(e.target.value))
          }
        />

      </InputContainer>
      <NewButton type="submit" disabled={!isFormEmpty}>
        Register Account
      </NewButton>

      <div>
        <span>Already have an account? </span>
        <Link href='/login'>
          <span className='underline text-customgray-2'>Login</span>
        </Link>
      </div>
    </form>
  );
}
