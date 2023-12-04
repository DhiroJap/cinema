"use client"

import { getMovieTime } from "@/utils/api/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NewButton, RatingBorder } from "@/styles";

export interface Movie {
    id: number;
    title: string;
    poster: string;
    duration: number;
    isPlaying: boolean;
    time: string;
  }

export default function MovieTime({ id} : {id:string}){
    const pathToPoster = process.env.NEXT_PUBLIC_MOVIES_POSTER_URL;
    const [movieTime, setMovieTime] = useState<Movie | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchMovieTime = async () => {
          try {
            const response = await getMovieTime(id);
            if (response.data === null) {
              alert(response.message);
              router.push("/");
            }
            setMovieTime(response.data);
          } catch (error) {
            console.error("Error fetching movies:", error);
          }
        };
        fetchMovieTime();
      }, []);

    return(
      <div className='flex-col w-[70%]'>
      <div className='mb-3'>
        {movieTime?.isPlaying ? (
          <h1 className='text-4xl'>Now Playing</h1>
        ) : (
          <h1 className='text-4xl'>Upcoming</h1>
        )}
      </div>
      <div className='flex'>
        <img
          src={`${pathToPoster}${movieTime?.poster}`}
          className='h-[500px]'
        />
        <div className='flex-col px-5'>
          <div className='flex justify-between'>
            <div className='w-[80%]'>
              <h2 className='text-3xl'>{movieTime?.title}</h2>
            </div>
            <div className='flex flex-col items-center justify-center w-[20%]'>
              <h1>{`${movieTime?.time} minutes`}</h1>
            </div>
          </div>
          <div className='mt-5'>
            
            <NewButton
              className='mt-4'
              onClick={() => router.push(`/movies/${id}/book/seat`)}
            >
              Buy Ticket
            </NewButton>
          </div>
        </div>
      </div>
    </div>
    )
}