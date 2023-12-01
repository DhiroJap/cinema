const KEY = process.env.MOVIE_API_KEY;
const BASE_URL = process.env.MOVIE_BASE_URL;

export const getMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/trending/movie/day?language=en-US&api_key=${KEY}`
  );
  const data = await res.json();
  return data.results;
};
