import RegisterForm from '@/components/forms/registerform';
import { Page } from '@/styles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GALAXY CINEMA - Register',
  description: 'Register Page',
};

export default function Register() {
  return (
    <Page display='flex' $justifyContent='center' $alignItems='center'>
      <RegisterForm />
    </Page>
  );
}
