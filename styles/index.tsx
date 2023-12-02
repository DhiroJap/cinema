'use client';

import { PageProps } from '@/utils/types';
import styled from 'styled-components';

export const Page = styled.div<PageProps>`
  min-height: 100vh;
  background-color: #1a1a1a;
  display: ${(props) => props.display};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

export const NewButton = styled.button`
  width: 100%;
  outline: none;
  border: none;
  font-family: 'Inter';
  font-size: 1.4rem;
  background-color: #22a39f;
  color: #fff;
  border-radius: 10px;
  font-weight: 500;
  padding: 25px 0;
  transition: 250ms background-color ease;

  &:hover {
    cursor: pointer;
    background-color: #28b1ad;
  }
  &:active {
    background-color: #1b9894;
  }
`;

export const AppLogo = styled.button`
  font-size: 2rem;
  font-weight: bold;
  color: #f3efe0;

  > span {
    color: #22a39f;
  }
`;

export const NavbarLink = styled.button`
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    color: #22a39f;
  }
`;

export const InputField = styled.input`
  outline: none;
  border: none;
  color: #fff;
  font-family: 'Inter';
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  background-color: inherit;
  padding: 0;
  margin: 4px 0;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InputContainer = styled.div`
  background-color: #131313;
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
`;

export const RegisterSelect = styled.select`
  background-color: #131313;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
`;

export const FooterLink = styled.button`
  font-size: 1.3rem;
  font-weight: 500;

  &:hover {
    color: #22a39f;
  }
`;

export const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: 'Inter';

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    font-family: 'Inter';
  }
`;

export const NowPlayingTag = styled.button`
  background-color: #22a39f;
  color: #ffffff;
  padding: 0.4rem;
  width: 10rem;
  font-weight: 600;
`;

export const MovieRating = styled.button`
  color: #ffffff;
  padding: 0.2rem;
  width: 4rem;
  font-weight: 600;
  border-radius: 5px;
  font-size: 1.3rem;
`;
