'use client';

import AddMovieForm from '@/components/admin/AddMovieForm';
import { Page } from '@/styles';

export default function AddMoviePage() {
  return (
    <Page display='flex' $justifyContent='center' $alignItems='center'>
      <AddMovieForm />
    </Page>
  );
}
