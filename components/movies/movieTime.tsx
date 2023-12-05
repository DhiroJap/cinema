"use client"

import { getMovieDetail, getMovieTime } from '@/utils/api';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NewButton, RatingBorder } from "@/styles";
import { setScheduleData } from '@/redux/slices/scheduleSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface Movie {
    id: number;
    title: string;
    poster: string;
    duration: number;
    isPlaying: boolean;
  }
export interface MovieTime {
    id: number;
    title: string;
    timeStart: string;
  }

export default function MovieTime({ id} : {id:string}){
    const pathToPoster = process.env.NEXT_PUBLIC_MOVIES_POSTER_URL;
    const [movieTime, setMovieTime] = useState<MovieTime[] | null>(null);
    const [movieDetail, setMovieDetail] = useState<Movie | null>(null);
    const dispatch = useDispatch();
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
            setMovieTime(response.data.map((item: any) => ({
              title: item.title,
              id: item.id,
              timeStart: item.timeStart,
            })));
            
            console.log(response.data);
          } catch (error) {
            
            console.error("Error fetching movies:", error);
          }
        };
        fetchMovieTime();
      }, []);

      const handleButtonClick = (selectedTime: string) => {
        const scheduleData = useSelector((state: RootState) => state.schedule.scheduleData);
        if (scheduleData) {
          // Do something with the schedule data (e.g., dispatch it to the next page)
          dispatch(setScheduleData(scheduleData));
      
          console.log(`Selected time: ${selectedTime}`);
          // You can add more logic here, such as navigating to a different page
        } else {
          console.error('Schedule data is null');
        }

        console.log(`Selected time: ${selectedTime}`);
        // You can add more logic here, such as navigating to a different page
      };
      

    return(
      <div className='flex-col w-[70%]'>
      <div className='flex'>
        <img
          src={`${pathToPoster}${movieDetail?.poster}`}
          className='h-[500px]'
        />
        <div className='flex-col px-5'>
          
            <div className='w-[80%]'>
              <h2 className='text-3xl mb-10'>{movieDetail?.title}</h2>
            </div>
            <div className='flex items-center justify-center space-x-2'> 
                  {movieTime?.map((schedule, index) => (
                <button
                key={index}
                onClick={() => handleButtonClick(schedule.timeStart)}
                className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
              >
                {schedule.timeStart}
              </button>
            ))}
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

function dispatch(arg0: { payload: MovieTime[]; type: "schedule/setScheduleData"; }) {
  throw new Error('Function not implemented.');
}
