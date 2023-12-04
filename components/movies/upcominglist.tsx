'use client';

import { MovieStatus } from '@/styles';
import MovieCard from './moviecard';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { useEffect } from 'react';
import { getMovies } from '@/utils/api';
import { Movies } from './movielist';
import {
  setNowPlayingMovies,
  setUpcomingMovies,
} from '@/redux/slices/moviesSlice';

export default function UpcomingList() {
  const dispatch = useDispatch<AppDispatch>();
  const { upcomingMovies } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMovies();
        const allMovies: Movies[] = response.data;

        const upcoming = allMovies.filter((movie) => !movie.isPlaying);

        dispatch(setUpcomingMovies(upcoming));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section>
      <section className='flex flex-col gap-8 items-start'>
        <MovieStatus className='bg-secondary text-customwhite-1' disabled>
          Upcoming
        </MovieStatus>
        <div className='grid grid-cols-4 gap-10'>
          {upcomingMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </section>
  );
}
