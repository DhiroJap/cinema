import MovieDetails from '@/components/movies/moviedetails';
import { Page } from '@/styles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GALAXY CINEMA - Movie Details',
  description: 'Movie Details Page',
};

const MovieDetailsPage = () => {
  return (
    <Page display='flex' justifyContent='center' alignItems='center'>
      <MovieDetails />
    </Page>
  );
};

export default MovieDetailsPage;
