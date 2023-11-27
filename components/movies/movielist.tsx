import { NewButton } from '@/styles';
import { MovieType } from '@/utils/types';
import Link from 'next/link';

type Props = {
  movies: MovieType[];
};

export default function MovieList({ movies }: Props) {
  return (
    <div className='flex flex-col gap-4'>
      {movies.map((movie) => (
        <Link href={`/movies/${movie.id}`} key={movie.id} legacyBehavior>
          <a>
            <NewButton className='mr-3'>{movie.title}</NewButton>
          </a>
        </Link>
      ))}
    </div>
  );
}
