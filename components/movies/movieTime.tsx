import { getMovieDetail } from "@/utils/request";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NewButton, RatingBorder } from "@/styles";

export interface Movie {
    id: number;
    title: string;
    poster: string;
    duration: number;
    isPlaying: boolean;
  }

export default function MovieTime({ id} : {id:string}){
    const pathToPoster = process.env.NEXT_PUBLIC_MOVIES_POSTER_URL;
    const [movieTime, setMovieTime] = useState<Movie | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchMovieDetail = async () => {
          try {
            const response = await getMovieDetail(id);
            if (response.data === null) {
              alert(response.message);
              router.push("/");
            }
            setMovieTime(response.data);
          } catch (error) {
            console.error("Error fetching movies:", error);
          }
        };
        fetchMovieDetail();
      }, []);

    return(
        <div>test</div>
    )
}