'use client';

import { useEffect, useState } from 'react';
import { GetUpcoming } from '@/utils/api';
import { UpcomingType } from '@/utils/types';
import { MoviePlaceholder, MovieStatus } from '@/styles';
import Link from 'next/link';

const FullUpcoming = () => {
  const [upcoming, setUpcoming] = useState<UpcomingType[]>([]);

  useEffect(() => {
    const fetchFullUpcoming = async () => {
      try {
        const response = await GetUpcoming();
        console.log(response.data);
        setUpcoming(response.data);
      } catch (error) {
        console.error('Error fetching now playing movies:', error);
      }
    };

    fetchFullUpcoming();
  }, []);

  return (
    <section className='flex flex-col gap-8 items-start'>
      <MovieStatus className='bg-secondary text-customwhite-1' disabled>
        Upcoming
      </MovieStatus>
      <div className='grid grid-cols-4 gap-10'>
        {upcoming?.map((movie: UpcomingType) => (
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

export default FullUpcoming;
