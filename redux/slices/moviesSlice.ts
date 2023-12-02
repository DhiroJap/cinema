import { Movies } from '@/components/movies/movielist';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MoviesState {
  nowPlayingMovies: Movies[];
  upcomingMovies: Movies[];
}

const initialState: MoviesState = {
  nowPlayingMovies: [],
  upcomingMovies: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setNowPlayingMovies(state, action: PayloadAction<Movies[]>) {
      state.nowPlayingMovies = action.payload;
    },
    setUpcomingMovies(state, action: PayloadAction<Movies[]>) {
      state.upcomingMovies = action.payload;
    },
  },
});

export const { setNowPlayingMovies, setUpcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
