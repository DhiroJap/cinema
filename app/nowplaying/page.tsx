import NowPlaying from '@/components/movies/nowplaying';
import { Page } from '@/styles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GALAXY CINEMA - Upcoming',
  description: 'Upcoming Page',
};

export default async function NowPlayingPage() {
  return (
    <Page display='flex' $justifyContent='center' className='my-20'>
      <section className='my-20'>
        <NowPlaying />
      </section>
    </Page>
  );
}
