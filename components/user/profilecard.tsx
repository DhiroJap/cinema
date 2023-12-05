'use client';

import { removeUser } from '@/redux/slices/userSlice';
import { AppDispatch, RootState, persistor } from '@/redux/store';
import { NewButton } from '@/styles';
import { lockRoute } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

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

  return (
    <section>
      <h1>User Profile</h1>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Phone Number: {user.phoneNumber}</p>
          <p>Email: {user.email}</p>
          <p>Gender: {user.gender}</p>
          <p>Birthdate: {user.birthdate}</p>
        </div>
      )}
      <NewButton onClick={handleLogout}>Logout</NewButton>
    </section>
  );
}
