'use client';

import { selectMovieById } from '@/redux/slices/moviesSlice';
import { RootState } from '@/redux/store';
import { NewButton } from '@/styles';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const movie = useSelector((state: RootState) => selectMovieById(state, id));

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { title, producer } = movie;

  return (
    <main className='m-3'>
      <h1>Movie Details: </h1>
      <p>ID: {id}</p>
      <p>Title: {title}</p>
      <p>Producer: {producer}</p>
      <Link href='/' legacyBehavior>
        <NewButton>Back</NewButton>
      </Link>
    </main>
  );
}
