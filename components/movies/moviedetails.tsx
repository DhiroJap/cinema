"use client";

import { getMovieDetail } from "@/utils/request";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NewButton, RatingBorder } from "@/styles";

export interface Movie {
  id: number;
  title: string;
  director: string;
  poster: string;
  synopsis: string;
  duration: number;
  releaseDate: Date;
  casts: string;
  writer: string;
  rating: string;
  isPlaying: boolean;
}

export default function MovieDetails({ id }: { id: string }) {
  const pathToPoster = process.env.NEXT_PUBLIC_MOVIES_POSTER_URL;
  const [movieDetail, setMovieDetail] = useState<Movie | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await getMovieDetail(id);
        if (response.data === null) {
          alert(response.message);
          router.push("/");
        }
        setMovieDetail(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovieDetail();
  }, []);

  return (
    <div className="flex-col w-[70%]">
      <div className="mb-3">
        {movieDetail?.isPlaying ? (
          <h1 className="text-4xl">Now Playing</h1>
        ) : (
          <h1 className="text-4xl">Upcoming</h1>
        )}
      </div>
      <div className="flex">
        <img
          src={`${pathToPoster}${movieDetail?.poster}`}
          className="h-[500px]"
        />
        <div className="flex-col px-5">
          <div className="flex justify-between">
            <div className="w-[80%]">
              <h2 className="text-3xl">{movieDetail?.title}</h2>
            </div>
            <div className="flex flex-col items-center justify-center w-[20%]">
              <h1>{`${movieDetail?.duration} minutes`}</h1>
              <RatingBorder className="mt-2">
                {movieDetail?.rating}
              </RatingBorder>
            </div>
          </div>
          <div className="mt-5">
            <p>
              <span className="font-bold">Casts: </span>
              {movieDetail?.casts}
            </p>
            <p>
              {" "}
              <span className="font-bold">Writer: </span>
              {movieDetail?.writer}
            </p>
            <div className="mt-5">
              <h4 className="text-xl font-bold">Synopsis</h4>
              <p>{movieDetail?.synopsis}</p>
            </div>
            <NewButton className="mt-4" onClick={() => router.push('/time')}>Buy Ticket</NewButton>
          </div>
        </div>
      </div>
    </div>
  );
}
