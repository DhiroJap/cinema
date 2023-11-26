import RegisterForm from '@/components/forms/registerform';
import { Page } from '@/styles';

export default function Register() {
  return (
    <Page display='flex' justifyContent='center' alignItems='center'>
      <RegisterForm />
    </Page>
  );
}
