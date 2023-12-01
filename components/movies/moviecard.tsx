import Link from 'next/link';
import { Movies } from './movielist';
import { MovieRating } from '@/styles';
import Image from 'next/image';

interface MovieProps {
  movie: Movies;
}

export default function MovieCard({ movie }: MovieProps) {
  const thumbnail = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

  return (
    <section>
      <div className='flex flex-col gap-10 items-center relative w-full'>
        <div className='overflow-hidden w-full h-full'>
          <Link href={'/movies/' + movie.id}>
            <Image
              src={thumbnail + movie.poster_path}
              alt=''
              width={200}
              height={400}
              layout='responsive'
              className='object-cover'
            />
          </Link>
        </div>
        <MovieRating
          className={`${
            movie.original_language === 'en' ? 'bg-secondary' : 'bg-customred-1'
          } `}
          disabled
        >
          {movie.original_language}
        </MovieRating>
      </div>
    </section>
  );
}
