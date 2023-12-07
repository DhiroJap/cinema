'use client';

import { useEffect, useState } from 'react';
import { GetNowPlaying } from '@/utils/api';
import { NowPlayingType } from '@/utils/types';
import { MoviePlaceholder, MovieStatus } from '@/styles';
import Link from 'next/link';

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState<NowPlayingType[]>([]);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await GetNowPlaying();
        setNowPlaying(response.data);
      } catch (error) {
        console.error('Error fetching now playing movies:', error);
      }
    };

    fetchNowPlaying();
  }, []);

  return (
    <section className='flex flex-col gap-8 items-start'>
      <MovieStatus className='bg-secondary text-customwhite-1' disabled>
        Now Playing
      </MovieStatus>
      <div className='grid grid-cols-4 gap-10'>
        {nowPlaying.map((movie: NowPlayingType) => (
          <MoviePlaceholder key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              <img
                src={movie.poster}
                alt={`${movie.title} poster`}
                className='w-full h-full object-cover'
              />
            </Link>
          </MoviePlaceholder>
        ))}
      </div>
    </section>
  );
};

export default NowPlaying;
