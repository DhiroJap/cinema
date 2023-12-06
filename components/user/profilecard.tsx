'use client';

import { removeUser } from '@/redux/slices/userSlice';
import { AppDispatch, RootState, persistor } from '@/redux/store';
import { lockRoute } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function ProfileCard() {
  lockRoute();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(removeUser());
    persistor.purge();
    router.push('/login');
    router.refresh();
    toast.success('Successfully logged out!', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <section className='m-28 flex flex-col'>
      {user && (
        <div>
          <div className='flex flex-col'>
            <h1 className='text-4xl font-bold'>
              Welcome,{' '}
              <Typewriter
                words={[user.name]}
                loop={false}
                typeSpeed={170}
                deleteSpeed={140}
                cursor={true}
                delaySpeed={2500}
                cursorColor='#28b1ad'
              />
            </h1>
          </div>
          <div className='mt-6'>
            <p className='text-lg'>
              <span className='font-semibold'>Email:</span> {user.email}
            </p>
            <p className='text-lg'>
              <span className='font-semibold'>Birthdate:</span>{' '}
              {user.birthdate || 'Not specified'}
            </p>
            <p className='text-lg'>
              <span className='font-semibold'>Phone Number:</span>{' '}
              {user.phoneNumber || 'Not specified'}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
