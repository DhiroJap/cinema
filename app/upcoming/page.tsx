import { MoviePlaceholder, MovieStatus, Page } from '@/styles';
import { GetUpcoming } from '@/utils/api';
import { pathToPoster } from '@/utils/const';
import { UpcomingType } from '@/utils/types';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GALAXY CINEMA - Upcoming',
  description: 'Upcoming Page',
};

export default async function UpcomingPage() {
  const response = await GetUpcoming();
  const upcoming = await response.json();

  return (
    <Page display='flex' $justifyContent='center' className='my-20'>
      <section className='my-20'>
        <section className='flex flex-col gap-8 items-start'>
          <MovieStatus className='bg-secondary text-customwhite-1' disabled>
            Upcoming
          </MovieStatus>
          <div className='grid grid-cols-4 gap-10'>
            {upcoming.data.map((movie: UpcomingType) => (
              <MoviePlaceholder key={movie.id}>
                <Link href={`/movies/${movie.id}`}>
                  <img
                    src={`${pathToPoster}${movie.poster}`}
                    alt={`${movie.title} poster`}
                    className='w-full h-full object-cover'
                  />
                </Link>
              </MoviePlaceholder>
            ))}
          </div>
        </section>
      </section>
    </Page>
  );
}
