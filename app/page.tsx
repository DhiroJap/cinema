import { Page } from '@/styles';
import MovieList from '@/components/movies/movielist';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GALAXY CINEMA - Now Playing',
  description: 'Now Playing Page',
};

export default function Home() {
  return (
    <Page
      display='flex'
      justifyContent='center'
      alignItems='center'
      className='flex-col'
    >
      <h1>Now Playing</h1>
      <MovieList />
    </Page>
  );
}
