import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Table,
  Th,
  Td,
  EditButtons,
  DeleteButtons,
  PrimaryButton,
} from '@/styles';
import Link from 'next/link';
import { GetNowPlaying, GetUpcoming, deleteMovie } from '@/utils/api';
import axios from 'axios';
import { lockRoute } from '@/utils/auth';

interface Movie {
  id: number;
  title: string;
  duration: number;
  releaseDate: Date;
  rating: string;
  isPlaying: boolean;
}

export default function MovieTable() {
  lockRoute();
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const router = useRouter();

  const fetchMovies = async () => {
    try {
      const nowPlayingResponse = await GetNowPlaying().then((response) =>
        response.json()
      );
      const upcomingResponse = await GetUpcoming().then((response) =>
        response.json()
      );
      const nowPlayingMovies = nowPlayingResponse.data.map((movie: Movie) => ({
        ...movie,
        isPlaying: true,
      }));
      const upcomingMovies = upcomingResponse.data.map((movie: Movie) => ({
        ...movie,
        isPlaying: false,
      }));
      const combinedMovies = [...nowPlayingMovies, ...upcomingMovies];

      setMovies(combinedMovies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleDelete: (movieId: number) => void = async (movieId) => {
    const response = await deleteMovie(movieId);
    fetchMovies();
  };

  return (
    <div className='p-5 w-[80%]'>
      <h2 className='font-bold text-3xl'>Movie Table</h2>
      <Link href='/admin/add-movie'>
        <PrimaryButton className='my-3'>Add New Movie</PrimaryButton>
      </Link>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Title</Th>
            <Th>Duration</Th>
            <Th>Rating</Th>
            <Th>Status</Th>
            <Th>Action</Th>
          </tr>
        </thead>
        <tbody>
          {movies &&
            movies.map((movie) => (
              <tr key={movie.id}>
                <Td>{movie.id}</Td>
                <Td>{movie.title}</Td>
                <Td>{movie.duration}</Td>
                <Td>{movie.rating}</Td>
                <Td>{movie.isPlaying === true ? 'Now Playing' : 'Upcoming'}</Td>
                <Td>
                  <Link href={`/admin/movie-edit/${movie.id}`}>
                    <EditButtons>Edit</EditButtons>
                  </Link>
                  <DeleteButtons onClick={() => handleDelete(movie.id)}>
                    Delete
                  </DeleteButtons>
                </Td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
