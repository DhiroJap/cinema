import { RootState } from '@/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

interface Movie {
  id: string;
  title: string;
  producer: string;
}

interface MoviesState {
  movies: Movie[];
  selectedMovie: Movie | null;
}

const initialState: MoviesState = {
  movies: [],
  selectedMovie: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = moviesSlice.actions;

export const selectMovies = (state: RootState) => state.movies.movies;

export const selectMovieById = (state: RootState, id: string) =>
  state.movies.movies.find((movie) => movie.id === id);

export default moviesSlice.reducer;
