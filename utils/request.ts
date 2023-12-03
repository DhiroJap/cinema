import axios from 'axios';

const getMoviesURL = process.env.NEXT_PUBLIC_GETMOVIES_URL;

export const getMovies = async () => {
  try {
    const response = await axios.get(`${getMoviesURL}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching movies: ' + error);
  }
};
