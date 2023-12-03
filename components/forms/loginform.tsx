"use client";

import { inputPassword, inputPhoneNumber } from "@/redux/slices/loginSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { InputContainer, InputField, InputLabel, NewButton } from "@/styles";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FormEvent, FormEventHandler } from "react";
import { setUserData } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { phoneNumber, password } = useSelector(
    (state: RootState) => state.login
  );
  const router = useRouter();

  const loginAction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://localhost:7292/Auth/login", {
        phoneNumber: phoneNumber,
        password: password,
      });

      const { token, user } = res.data;
      localStorage.setItem("token", token);
      dispatch(setUserData(user));
      router.push("/profile");
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  return (
    <form className="w-200 flex flex-col gap-2" onSubmit={loginAction}>
      <InputContainer>
        <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
        <InputField
          id="phoneNumber"
          type="number"
          inputMode="numeric"
          onChange={(e) => {
            dispatch(inputPhoneNumber(e.target.value));
          }}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField
          id="password"
          type="password"
          onChange={(e) => dispatch(inputPassword(e.target.value))}
        />
      </InputContainer>
      <NewButton type="submit">Login</NewButton>
      <div>
        <span>Dont have an account? </span>
        <Link href="/register">
          <span className="underline text-customgray-2">Register</span>
        </Link>
      </div>
    </form>
  );
}
