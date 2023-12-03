'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// const emailRegexPattern = /^\S+@\S+\.\S+$/;
// const passwordRegexPattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

interface RegisterState {
    name : string;
    phoneNumber : string;
    email : string;
    password : string;
    gender: string;
    birthDate: string;
}

const initialState: RegisterState = {
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    gender: '',
    birthDate: '',
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
            state.email = action.payload;
        },
        inputPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        changeGender: (state, action: PayloadAction<string>) => {
            state.gender = action.payload;
        },
        inputBirthDate: (state, action: PayloadAction<string>) => {
            state.birthDate = action.payload;
        },
    },
});

export const {inputName, inputPhoneNumber, inputEmail, inputPassword, changeGender, inputBirthDate} = RegisterSlice.actions;
export default RegisterSlice.reducer;