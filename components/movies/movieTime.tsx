"use client"

import { getMovieDetail, getMovieTime } from '@/utils/api';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NewButton, RatingBorder } from "@/styles";

interface Movie {
    id: number;
    title: string;
    poster: string;
    duration: number;
    isPlaying: boolean;
    timeStart: string;
  }

export default function MovieTime({ id} : {id:string}){
    const pathToPoster = process.env.NEXT_PUBLIC_MOVIES_POSTER_URL;
    const [movieTime, setMovieTime] = useState<Movie | null>(null);
    const [movieDetail, setMovieDetail] = useState<Movie | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchMovieTime = async () => {
          try {
            const response = await getMovieTime(id);
            const res = await getMovieDetail(id);
            if (response.data === null && res.data === null) {

              alert(response.message);
              alert(res.message);
              router.push("/");
            }
            setMovieDetail(res.data);
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
          src={`${pathToPoster}${movieDetail?.poster}`}
          className='h-[500px]'
        />
        <div className='flex-col px-5'>
          <div className='flex justify-between'>
            <div className='w-[80%]'>
              <h2 className='text-3xl'>{movieDetail?.title}</h2>
            </div>
            <div className='flex flex-col items-center justify-center w-[20%]'>
              <h1>{`${movieTime?.timeStart} minutes`}</h1>
            </div>
          </div>
          <div className='mt-5'>
            
            <NewButton
              className='mt-4'
              onClick={() => router.push(`/movies/${id}/book/seat`)}
            >
              Choose seat
            </NewButton>
          </div>
        </div>
      </div>
    </div>
    )
}