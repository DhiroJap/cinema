'use client';

import { MovieType } from '@/utils/types';
import MovieDetails from '@/components/movies/moviedetails';
import mockMovies from '@/__mocks__/movies';
import { useParams } from 'next/navigation';
import { Page } from '@/styles';

const MovieDetailsPage = () => {
  const params = useParams();
  const { id } = params;

  const movie: MovieType | undefined = mockMovies.find(
    (m) => m.id === Number(id)
  );

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <Page display='flex' justifyContent='center' alignItems='center'>
      <MovieDetails movie={movie} />
    </Page>
  );
};

export default MovieDetailsPage;
