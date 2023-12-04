import axios from "axios";

const getMoviesURL = process.env.NEXT_PUBLIC_GETMOVIES_URL;
const postLoginURL = process.env.NEXT_PUBLIC_POSTLOGIN_URL;
const getMovieDetailURL: string = process.env.NEXT_PUBLIC_GETMOVIEDETAIL_URL!;
const getBookingSeatURL = process.env.NEXT_PUBLIC_GETBOOKINGSEAT_URL;
const getMovieTimeURL = process.env.NEXT_PUBLIC_GETBOOKING_URL;

export const getMovies = async () => {
  try {
    const response = await axios.get(`${getMoviesURL}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching movies: " + error);
  }
};

export const postLogin = async (phoneNumber: string, password: string) => {
  try {
    const response = await axios.post(`${postLoginURL}`, {
      phoneNumber,
      password,
    });
    return response;
  } catch (error) {
    throw new Error("Error logging you in: " + error);
    console.error("Failed");
  }
};

export const getMovieDetail = async (id: string) => {
  try {
    const movieId = parseInt(id);
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

export const getBookingSeat = async (id: string) => {
  try {
    const scheduleId = parseInt(id);
    const response = await axios.get(`${getBookingSeatURL}`, {
      params: {
        scheduleId: scheduleId,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Error getting seat: " + error);
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
    const response = await axios.post("https://localhost:7292/Auth/register", {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      gender: gender,
      birthDate: birthDate,
    });
    return response.data;
  } catch (error) {
    throw new Error("Error registering you: " + error);
  }
};

export const getMovieTime = async (id: string) => {
  try {
    const movieID = parseInt(id);
    const response = await axios.get(`${getMovieTimeURL}`, {
      params: {
        movieID: movieID,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Error getting seat: ' + error);
  }
};
