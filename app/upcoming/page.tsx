'use client';

import { selectMovies, setMovies } from '@/redux/slices/moviesSlice';
import { NewButton, Page } from '@/styles';
import Link from 'next/link';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setMovies([
        {
          id: '1',
          title: 'Movie 1',
          producer: 'Producer 1',
        },
        {
          id: '2',
          title: 'Movie 2',
          producer: 'Producer 2',
        },
        {
          id: '3',
          title: 'Movie 3',
          producer: 'Producer 3',
        },
        {
          id: '4',
          title: 'Movie 4',
          producer: 'Producer 4',
        },
        {
          id: '5',
          title: 'Movie 5',
          producer: 'Producer 5',
        },
      ])
    );
  }, [dispatch]);

  return (
    <Page className='m-3 flex flex-col gap-4'>
      <h1>Home Page</h1>
      <h2>Movies: </h2>
      <ul className='flex flex-col gap-6'>
        {movies.map((movie) => (
          <Link href={`/movies/${movie.id}`} key={movie.id} legacyBehavior>
            <a>
              <NewButton className='mr-3'>{movie.title}</NewButton>
            </a>
          </Link>
        ))}
      </ul>
    </Page>
  );
}
