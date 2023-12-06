import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

enum UserRole {
  User = 'User',
  Admin = 'Admin',
}

interface UserState {
  user: {
    id: string;
    name: string;
    phoneNumber: string;
    email: string;
    gender: string;
    birthdate: string;
    role: UserRole;
  } | null;
  token: string | null;
}

const initialState: UserState = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        user: UserState['user'];
        token: string;
      }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    removeUser: (state) => {
      state = initialState;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
