'use client';

import { PageProps } from '@/utils/types';
import styled, { keyframes } from 'styled-components';

export const Page = styled.div<PageProps>`
  min-height: 100vh;
  background-color: #1a1a1a;
  display: ${(props) => props.display};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
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

  &:disabled {
    background-color: #4a49497a;
    color: #878787a2;
    cursor: not-allowed;
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

  &::placeholder {
    color: #aaa;
    font-family: 'Poppins', sans-serif;
    font-size: 0.7rem;
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

export const MovieStatus = styled.button`
  background-color: #22a39f;
  color: #ffffff;
  width: 10rem;
  font-weight: 600;
  padding: 0.2rem;
  font-size: 1.3rem;
`;

export const MovieRating = styled.button`
  color: #ffffff;
  padding: 0.2rem;
  width: 4rem;
  font-weight: 600;
  border-radius: 5px;
  font-size: 1.3rem;
`;

export const MoviePlaceholder = styled.div`
  width: 300px;
  height: 450px;
  position: relative;
  overflow: hidden;
  background-color: #ccc;
`;

export const RatingBorder = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Th = styled.th`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const Td = styled.td`
  padding: 12px;
  text-align: left;
`;

export const DeleteButtons = styled.button`
  margin-right: 5px;
  padding: 8px 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: #d11111;

  &:hover {
    opacity: 0.7;
  }
`;

export const EditButtons = styled.button`
  margin-right: 5px;
  padding: 8px 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: #dbd800;

  &:hover {
    opacity: 0.7;
  }
`;

export const PrimaryButton = styled.button`
  margin-right: 5px;
  padding: 8px 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: #22a39f;
`;
export const SeatIcon = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const TheaterScreen = styled.div`
  background-color: #fff;
  height: 10rem;
  width: 100%;
  margin: 15px 0;
  transform: rotateX(-45deg);
  box-shadow: 0 3px 10px rgba(255, 255, 255, 0.7);
  font-family: 'Poppins', sans-serif;
  color: black;
  font-weight: bolder;
`;

export const ConfirmButton = styled.button`
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

export const CancelButton = styled.button`
  width: 100%;
  outline: none;
  border: none;
  font-family: 'Inter';
  font-size: 1.4rem;
  background-color: #ff0909;
  color: #fff;
  border-radius: 10px;
  font-weight: 500;
  padding: 25px 0;
  transition: 250ms background-color ease;

  &:hover {
    cursor: pointer;
    background-color: #d72525;
  }
  &:active {
    background-color: #e43434;
  }
`;

export const InputForm = styled.input`
  outline: none;
  border: none;
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  color: #fff;
  font-family: 'Inter';
  background-color: black;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const TextareaForm = styled.textarea`
  outline: none;
  border: none;
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  color: #fff;
  font-family: 'Inter';
  background-color: black;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const SelectForm = styled.select`
  outline: none;
  border: none;
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  color: #fff;
  font-family: 'Inter';
  background-color: black;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const TimeButton = styled.button`
  border-radius: 10px;
  padding: 1rem;
  border: 3px solid #fff;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContainer = styled.div`
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 5px;
  width: 40rem;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

interface DropdownMenuProps {
  isOpen: boolean;
}

export const DropdownMenu = styled.ul<DropdownMenuProps>`
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #131313;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

export const DropdownItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #28b1ad;
  }
`;
