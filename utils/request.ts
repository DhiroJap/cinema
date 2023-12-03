import axios from "axios";

const getMoviesURL = process.env.NEXT_PUBLIC_GETMOVIES_URL;
const getMovieDetailURL: string = process.env.NEXT_PUBLIC_GETMOVIEDETAIL_URL!;

export const getMovies = async () => {
  try {
    const response = await axios.get(`${getMoviesURL}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching movies: " + error);
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
