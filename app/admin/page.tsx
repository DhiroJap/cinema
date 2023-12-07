'use client';

import MovieTable from '@/components/admin/MovieTable';
import { RootState } from '@/redux/store';
import { Page } from '@/styles';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function AdminPage() {
  const router = useRouter();
  const role = useSelector((state: RootState) => {
    return state.user.user?.role;
  });

  console.log(role);

  useEffect(() => {
    if (role === 'User') {
      toast.error('Only admins can access this page!', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      router.push('/');
    } else {
      router.push('/admin');
    }
  }, [role]);

  return (
    <Page display='flex' $justifyContent='center' $alignItems='center'>
      <MovieTable />
    </Page>
  );
}
