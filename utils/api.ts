import axios from 'axios';
import { toast } from 'react-toastify';
import { AddMovieFormInterface, EditMovieFormInterface } from './types';
const https = require('https');

const getNowPlayingMoviesURL: string =
  process.env.NEXT_PUBLIC_GETNOWPLAYINGMOVIES_URL!;
const getUpcomingMoviesURL: string =
  process.env.NEXT_PUBLIC_GETUPCOMINGMOVIES_URL!;
const postLoginURL = process.env.NEXT_PUBLIC_POSTLOGIN_URL;
const getMovieDetailURL: string = process.env.NEXT_PUBLIC_GETMOVIEDETAIL_URL!;
const getBookingSeatURL: string = process.env.NEXT_PUBLIC_GETBOOKINGSEAT_URL!;
const postRegisterURL = process.env.NEXT_PUBLIC_POSTREGISTER_URL;
const getBookingTimeURL = process.env.NEXT_PUBLIC_GETBOOKINGTIME_URL;
const getPaymentURL: string = process.env.NEXT_PUBLIC_GETPAYMENT_URL!;
const addPaymentURL: string = process.env.NEXT_PUBLIC_ADDPAYMENT_URL!;
const deleteMovieURL: string = process.env.NEXT_PUBLIC_DELETEMOVIE_URL!;
const addMovieURL: string = process.env.NEXT_PUBLIC_ADDMOVIE_URL!;
const updateMovieURL: string = process.env.NEXT_PUBLIC_UPDATEMOVIE_URL!;
const addBookingURL = process.env.NEXT_PUBLIC_ADDBOOKING_URL;

const agent = new https.Agent({
  rejectUnauthorized: false,
});

export async function GetNowPlaying() {
  const response = await axios.get(getNowPlayingMoviesURL, {
    params: {
      status: 'now_playing',
    },
    httpsAgent: agent,
  });
  return response.data;
}

export async function GetUpcoming() {
  const response = await axios.get(getUpcomingMoviesURL, {
    params: {
      status: 'upcoming',
    },
    httpsAgent: agent,
  });
  return response.data;
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

export const addMovie = async (formValue: AddMovieFormInterface) => {
  console.log(addMovieURL);
  try {
    const formDataForApi = new FormData();
    formDataForApi.append('posterImage', formValue.poster as File);
    formDataForApi.append('title', formValue.title);
    formDataForApi.append('director', formValue.director);
    formDataForApi.append('synopsis', formValue.synopsis);
    formDataForApi.append('duration', formValue.duration.toString());
    formDataForApi.append('releaseDate', formValue.releaseDate);
    formDataForApi.append('casts', formValue.casts);
    formDataForApi.append('writer', formValue.writer);
    formDataForApi.append('rating', formValue.rating);

    const response = await axios.post(addMovieURL, formDataForApi, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response.data;
  } catch (error: any) {
    return error.response?.data;
  }
};

export const editMovie = async (formValue: EditMovieFormInterface) => {
  try {
    const formDataForApi = new FormData();
    formDataForApi.append('newPoster', formValue.newPoster as File);
    formDataForApi.append('movieID', formValue.id.toString());
    formDataForApi.append('newTitle', formValue.newTitle);
    formDataForApi.append('oldTitle', formValue.oldTitle);
    formDataForApi.append('director', formValue.director);
    formDataForApi.append('synopsis', formValue.synopsis);
    formDataForApi.append('duration', formValue.duration.toString());
    formDataForApi.append('releaseDate', formValue.releaseDate);
    formDataForApi.append('casts', formValue.casts);
    formDataForApi.append('oldPoster', formValue.oldPoster);
    formDataForApi.append('writer', formValue.writer);
    formDataForApi.append('rating', formValue.rating);

    const response = await axios.put(updateMovieURL, formDataForApi, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response.data;
  } catch (error: any) {
    return error.response?.data;
  }
};

export const deleteMovie = async (movieId: number) => {
  try {
    const url = deleteMovieURL + '/' + movieId;
    const response = await axios.delete(url);
    return response.data;
  } catch (error: any) {
    return error.response?.data;
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
    const response = await axios.post(`${postRegisterURL}`, {
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

export async function PostBooking(
  scheduleID: number,
  userID: string,
  seatIDs: number[]
) {
  try {
    const response = await axios.post(`${addBookingURL}`, {
      scheduleID,
      userID,
      seatID: seatIDs,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function GetPayment(bookingHeaderId: number) {
  try {
    const response = await axios.get(getPaymentURL, {
      params: {
        bookingHeaderID: bookingHeaderId,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Payment Error: ', error);
  }
}

export async function AddPayment(paymentId: number) {
  try {
    const response = await axios.put(addPaymentURL, null, {
      params: {
        paymentID: paymentId,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Payment Error: ', error);
  }
}
