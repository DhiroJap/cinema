import { NowPlayingTag } from '@/styles';
import { getMovies } from '@/utils/request';
import Image from 'next/image';
import MovieCard from './moviecard';

export interface Movies {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  original_language: string;
}

export default async function MovieList() {
  const movies = await getMovies();

  return (
    <section className='flex flex-col gap-8 items-start'>
      <NowPlayingTag className='bg-secondary text-customwhite-1' disabled>
        Now Playing
      </NowPlayingTag>
      <div className='grid grid-cols-4 gap-10'>
        {movies.map((movie: Movies) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </section>
  );
}
