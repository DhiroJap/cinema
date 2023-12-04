import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface RegisterState {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  gender: string;
  birthDate: string;
  isEmailValid: boolean;
  isPasswordValid: boolean;
}

const initialState: RegisterState = {
  name: '',
  phoneNumber: '',
  email: '',
  password: '',
  gender: 'Male',
  birthDate: '',
  isEmailValid: false,
  isPasswordValid: false,
};

const RegisterSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    inputName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    inputPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    inputEmail: (state, action: PayloadAction<string>) => {
      const email = action.payload;
      state.email = email;
      state.isEmailValid = isEmailValid(email);
    },
    inputPassword: (state, action: PayloadAction<string>) => {
      const password = action.payload;
      state.password = password;
      state.isPasswordValid = isPasswordValid(password);
    },
    changeGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    inputBirthDate: (state, action: PayloadAction<string>) => {
      state.birthDate = action.payload;
    },
  },
});


const isEmailValid = (email: string): boolean => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
};

const isPasswordValid = (password: string): boolean => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return passwordRegex.test(password);
};

export const {
  inputName,
  inputPhoneNumber,
  inputEmail,
  inputPassword,
  changeGender,
  inputBirthDate,
} = RegisterSlice.actions;
export default RegisterSlice.reducer;