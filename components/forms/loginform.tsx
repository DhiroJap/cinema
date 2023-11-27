import { InputContainer, InputField, InputLabel, NewButton } from '@/styles';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <form className='w-200 flex flex-col gap-2'>
      <InputContainer>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <InputField id='email' type='email' />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <InputField id='password' type='password' />
      </InputContainer>
      <NewButton>Login</NewButton>
      <div>
        <span>Dont have an account? </span>
        <Link href='/register'>
          <span className='underline text-customgray-2'>Register</span>
        </Link>
      </div>
    </form>
  );
}
