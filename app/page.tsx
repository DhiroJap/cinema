import { Page } from '@/styles';
import { Metadata } from 'next';
import Upcoming from '@/components/movies/upcoming';
import NowPlaying from '@/components/movies/nowplaying';

export const metadata: Metadata = {
  title: 'GALAXY CINEMA - Home',
  description: 'Galaxy Cinema Landing Page',
};

export default function HomePage() {
  return (
    <Page display='flex' $justifyContent='center' className='my-20'>
      <section className='my-20'>
        <section>
          <Upcoming />
        </section>
        <section className='mt-28'>
          <NowPlaying />
        </section>
      </section>
    </Page>
  );
}
