import { MoviePlaceholder } from "@/styles";
import Link from "next/link";

interface Movie {
  id: number;
  title: string;
  poster: string;
}

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const pathToPoster = process.env.NEXT_PUBLIC_MOVIES_POSTER_URL;
  console.log(`${pathToPoster}` + `${movie.poster}`);

  return (
    <MoviePlaceholder>
      <Link href={`/movies/${movie.id}`}>
        <img
          src={`${pathToPoster}` + `${movie.poster}`}
          className="w-full h-full object-cover"
        />
      </Link>
    </MoviePlaceholder>
  );
}
