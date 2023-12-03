'use client';

import { MovieStatus } from '@/styles';
import { useEffect } from 'react';
import { getMovies } from '@/utils/request';
import MovieCard from './moviecard';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import {
  setNowPlayingMovies,
  setUpcomingMovies,
} from '@/redux/slices/moviesSlice';

export interface Movies {
  id: number;
  title: string;
  poster: string;
  isPlaying: boolean;
}

export default function MovieList() {
  const dispatch = useDispatch<AppDispatch>();
  const { nowPlayingMovies, upcomingMovies } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMovies();
        const allMovies: Movies[] = response.data;

        const nowPlaying = allMovies.filter((movie) => movie.isPlaying);
        const upcoming = allMovies.filter((movie) => !movie.isPlaying);

        dispatch(setNowPlayingMovies(nowPlaying));
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

      <section className='flex flex-col gap-8 items-start mt-28'>
        <MovieStatus className='bg-secondary text-customwhite-1' disabled>
          Now Playing
        </MovieStatus>
        <div className='grid grid-cols-4 gap-10'>
          {nowPlayingMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </section>
  );
}
