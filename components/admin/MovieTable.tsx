import React, { useEffect, useState } from "react";
import { getMovies } from "@/utils/request";
import { useRouter } from "next/navigation";
import {
  Table,
  Th,
  Td,
  EditButtons,
  DeleteButtons,
  PrimaryButton,
} from "@/styles";
import Link from "next/link";

interface Movie {
  id: number;
  title: string;
  duration: number;
  releaseDate: Date;
  rating: string;
  isPlaying: boolean;
}

const MovieTable = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await getMovies();
        if (response.data === null) {
          alert(response.message);
          router.push("/");
        }
        console.log(response.data);
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovieDetail();
  }, []);

  return (
    <div className="p-5 w-[80%]">
      <h2 className="font-bold text-3xl">Movie Table</h2>
      <Link href="/admin/add-movie">
        <PrimaryButton className="my-3">Add New Movie</PrimaryButton>
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
                <Td>{movie.isPlaying === true ? "Now Playing" : "Upcoming"}</Td>
                <Td>
                  <EditButtons>Edit</EditButtons>
                  <DeleteButtons>Delete</DeleteButtons>
                </Td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MovieTable;
