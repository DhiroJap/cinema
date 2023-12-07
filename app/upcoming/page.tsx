import FullUpcoming from '@/components/movies/fullupcoming';
import Upcoming from '@/components/movies/upcoming';
import { MoviePlaceholder, MovieStatus, Page } from '@/styles';
import { GetUpcoming } from '@/utils/api';
import { UpcomingType } from '@/utils/types';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GALAXY CINEMA - Upcoming',
  description: 'Upcoming Page',
};

export default async function UpcomingPage() {
  return (
    <Page display='flex' $justifyContent='center' className='my-20'>
      <FullUpcoming />
    </Page>
  );
}
