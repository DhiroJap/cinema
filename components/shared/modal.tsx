'use client';

import { RootState } from '@/redux/store';
import {
  Backdrop,
  CancelButton,
  ConfirmButton,
  InputContainer,
  InputField,
  InputLabel,
  ModalContainer,
} from '@/styles';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function Modal({
  onConfirm,
  onClose,
}: {
  onConfirm: () => void;
  onClose: () => void;
}) {
  const user = useSelector((state: RootState) => state.user.user);
  const [inputEmail, setInputEmail] = useState('');
  const [emailMatch, setEmailMatch] = useState(true);

  const handleConfirm = () => {
    if (inputEmail === user?.email) {
      setEmailMatch(true);
      onConfirm();
    } else {
      console.log(inputEmail);
      console.log(user?.email);
      setEmailMatch(false);
    }
  };

  return (
    <Backdrop>
      <ModalContainer className='flex flex-col gap-8'>
        <section>
          <h1 className='text-2xl'>Please enter your email to continue</h1>
        </section>
        <InputContainer>
          <InputLabel htmlFor='password'>Email</InputLabel>
          <InputField
            id='password'
            type='text'
            placeholder='Input email here...'
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </InputContainer>
        <section className='flex gap-4'>
          <ConfirmButton onClick={handleConfirm}>Confirm</ConfirmButton>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
        </section>
      </ModalContainer>
    </Backdrop>
  );
}
