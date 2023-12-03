'use client';

import { setUserData } from '@/redux/slices/userSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

export default function ProfileCard() {
  const { name, phoneNumber, email, gender, birthdate } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section>
      <h1>Welcome, {name}</h1>
      <h1>Your phone number is : {phoneNumber}</h1>
      <h1>Your email is : {email}</h1>
      <h1>Your gender is : {gender}</h1>
      <h1>Your birth date is : {birthdate}</h1>
    </section>
  );
}
