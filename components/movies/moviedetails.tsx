"use client";

import { getMovieDetail } from "@/utils/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NewButton, RatingBorder } from "@/styles";
import { Movies } from "@/utils/types";

export default function MovieDetails({ id }: { id: string }) {
  const [movieDetail, setMovieDetail] = useState<Movies | null>(null);
  const router = useRouter();

  var rating;
  if (movieDetail?.rating === "17+") {
    rating = "bg-error";
  } else if (movieDetail?.rating === "13+") {
    rating = "bg-secondary";
  } else if (movieDetail?.rating === "SU") {
    rating = "bg-customblue-1";
  }

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await getMovieDetail(id);

        console.log(response.data);

        if (response.data === null) {
          alert(response.message);
          router.push("/");
        }
        else {
          setMovieDetail(response.data);
        }
      
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovieDetail();
  }, []);

  if (movieDetail && movieDetail.releaseDate) {
    const currentDate = new Date();
    const releaseDate = new Date(movieDetail?.releaseDate);

    const isUpcoming = currentDate < releaseDate;
    const isNowPlaying = currentDate >= releaseDate;

    return (
      <div className="flex-col w-[70%]">
        <button
          className="mb-10 hover:text-secondary"
          onClick={() => router.back()}
        >
          Go Back
        </button>
        <div className="mb-3">
          <div>
            {isUpcoming ? (
              <h1 className="text-4xl">Upcoming</h1>
            ) : isNowPlaying ? (
              <h1 className="text-4xl">Now Playing</h1>
            ) : (
              <h1 className="text-4xl">Unknown</h1>
            )}
          </div>
        </div>
        <div className="flex">
          <img src={movieDetail?.poster} className="h-[500px]" />
          <div className="flex-col px-5">
            <div className="flex justify-between">
              <div className="w-[80%]">
                <h2 className="text-3xl">{movieDetail?.title}</h2>
              </div>
              <div className="flex flex-col items-center justify-center w-[20%]">
                <h1>{`${movieDetail?.duration} minutes`}</h1>
                <RatingBorder className={`mt-2 ${rating}`}>
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
              <NewButton
                className="mt-4"
                onClick={() => router.push(`/movies/${id}/book/time`)}
              >
                Buy Ticket
              </NewButton>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1 className="text-4xl">Movie details are not available.</h1>;
  }
}
