import LoginForm from '@/components/forms/loginform';
import { Page } from '@/styles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GALAXY CINEMA - Login',
  description: 'Login Page',
};

export default function Login() {
  return (
    <Page display='flex' justifyContent='center' alignItems='center'>
      <LoginForm />
    </Page>
  );
}
