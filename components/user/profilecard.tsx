'use client';

import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

export default function ProfileCard() {
  const { name, phoneNumber, email, gender, birthDate } = useSelector(
    (state: RootState) => state.user
  );
  return (
    <section>
      <h1>Welcome, {name}</h1>
      <h1>Your phone number is : {phoneNumber}</h1>
      <h1>Your email is : {email}</h1>
      <h1>Your gender is : {gender}</h1>
      <h1>Your birth date is : {birthDate.toDateString()}</h1>
    </section>
  );
}
