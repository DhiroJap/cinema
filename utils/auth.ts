import { useRouter } from 'next/navigation';

export interface UserData {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  gender: string;
  birthdate: string;
}

export interface AuthResponse {
  user: UserData;
  token: string;
}

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');
  return !!token;
};

export const lockRoute = () => {
  const router = useRouter();
  if (!isAuthenticated()) {
    router.push('/login');
  }
};

export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const removeToken = () => {
  localStorage.removeItem('token');
};
