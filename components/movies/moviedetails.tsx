import { NewButton } from '@/styles';
import { MovieType } from '@/utils/types';
import { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  movie: MovieType;
};

export default function MovieDetails({ movie }: Props) {
  return (
    <main className='m-3'>
      <h1>Movie Details: </h1>
      <p>ID: {movie.id}</p>
      <p>Title: {movie.title}</p>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.rating}</p>

      <Link href='/' legacyBehavior>
        <NewButton>Back</NewButton>
      </Link>
    </main>
  );
}
