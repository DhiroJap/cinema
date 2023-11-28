import { Page } from '@/styles';
import mockMovies from '@/__mocks__/movies';
import MovieList from '@/components/movies/movielist';

export default function Home() {
  return (
    <Page className='m-3 flex flex-col gap-4'>
      <h1>Now Playing</h1>
      {/* <h2>Movies: </h2> */}
      <MovieList movies={mockMovies} />
    </Page>
  );
}
