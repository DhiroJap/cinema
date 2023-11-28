import { createSlice } from '@reduxjs/toolkit';

interface Movie {
  id: string;
  title: string;
  director: string;
  rating: string;
}

interface MoviesState {
  movies: Movie[];
}

const initialState: MoviesState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
});

export const {} = moviesSlice.actions;

export default moviesSlice.reducer;
