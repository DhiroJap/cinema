import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const getNowPlayingMoviesURL: string =
  process.env.NEXT_PUBLIC_GETNOWPLAYINGMOVIES_URL!;
const getUpcomingMoviesURL: string =
  process.env.NEXT_PUBLIC_GETUPCOMINGMOVIES_URL!;
const postLoginURL = process.env.NEXT_PUBLIC_POSTLOGIN_URL;
const getMovieDetailURL: string = process.env.NEXT_PUBLIC_GETMOVIEDETAIL_URL!;
const getBookingSeatURL: string = process.env.NEXT_PUBLIC_GETBOOKINGSEAT_URL!;
const getRegisterURL = process.env.NEXT_PUBLIC_GETBOOKINGSEAT_URL;
const getBookingTimeURL = process.env.NEXT_PUBLIC_GETBOOKINGTIME_URL;
const getPaymentURL: string = process.env.NEXT_PUBLIC_PAYMENT_URL!;


export async function GetNowPlaying() {
  const response = await fetch(getNowPlayingMoviesURL);
  return response;
}

export async function GetUpcoming() {
  const response = await fetch(getUpcomingMoviesURL);
  return response;
}

let lastErrorTime = 0;
const COOLDOWN_TIME = 5000;
export const postLogin = async (phoneNumber: string, password: string) => {
  try {
    const response = await axios.post(`${postLoginURL}`, {
      phoneNumber,
      password,
    });
    return response;
  } catch (error: any) {
    if (error.response?.status !== 200) {
      const currentTime = Date.now();

      if (currentTime - lastErrorTime > COOLDOWN_TIME) {
        toast.error(error.response?.data.message, {
          position: 'bottom-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        lastErrorTime = currentTime;
      }
      return undefined;
    }
  }
};

export const getMovieDetail = async (id: string) => {
  try {
    const movieId = parseInt(id);

    console.log(getMovieDetailURL);

    const response = await axios.get(getMovieDetailURL, {
      params: {
        movieID: movieId,
      },
    });
    return response.data;
  } catch (error: any) {

    return error.response?.data;
  }
};

export const getBookingSeat = async (scheduleId: number) => {
  try {
    const response = await axios.get(getBookingSeatURL, {
      params: {
        scheduleId: scheduleId,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Error getting seat: ' + error);
  }
};

export const postRegister = async (
  name: string,
  email: string,
  phoneNumber: string,
  password: string,
  gender: string,
  birthDate: string
) => {
  try {
    const response = await axios.post(`${getRegisterURL}`, {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      gender: gender,
      birthDate: birthDate,
    });
    return response.data;
  } catch (error) {
    throw new Error('Error registering you: ' + error);
  }
};

export async function GetBookingTime(id: string) {
  try {
    const response = await fetch(`${getBookingTimeURL}${id}`);
    return response;
  } catch (error) {
    console.error('Error fetching schedules:', error);
  }
}

export async function GetPayment(BookingHeaderID: number) {
  try{
    console.log("test");
    const response = await axios.get(getPaymentURL, {
      params: {
        bookingHeaderID: BookingHeaderID,
      },
    });
    console.log(response.data);
    return response;
  }catch (error) {
    console.error('Payment Error: ', error);
  }
}