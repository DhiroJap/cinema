import axios from 'axios';

const getMoviesURL = process.env.NEXT_PUBLIC_GETMOVIES_URL;
const postLoginURL = process.env.NEXT_PUBLIC_POSTLOGIN_URL;

export const getMovies = async () => {
  try {
    const response = await axios.get(`${getMoviesURL}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching movies: ' + error);
  }
};

export const postLogin = async (phoneNumber: string, password: string) => {
  try {
    const response = await axios.post(`${postLoginURL}`, {
      phoneNumber: phoneNumber,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw new Error('Error logging you in: ' + error);
  }
};
