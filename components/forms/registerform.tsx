import { InputContainer, InputField, InputLabel, NewButton, select } from '@/styles';
import Link from 'next/link';

export default function RegisterForm() {
  return (
    <form className='w-200 flex flex-col gap-2'>

      <InputContainer>
        <InputLabel htmlFor='fullName'>Full Name</InputLabel>
        <InputField type='text' id='fullName' />
      </InputContainer>

      <section className='flex justify-between gap-4'>
        <InputContainer>
          <InputLabel htmlFor='phoneNumber'>Phone Number</InputLabel>
          <InputField type='number' inputMode='numeric' id='phoneNumber' />
        </InputContainer>

        <InputContainer>
          <InputLabel htmlFor='gender'>Gender</InputLabel>
          <select>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </InputContainer>
      </section>

      <InputContainer>
        <InputLabel htmlFor='birthDate'>Birth Date</InputLabel>
        <InputField type='date' id='date' />
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <InputField type='email' id='email' />
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <InputField type='password' id='password' />
      </InputContainer>

      <NewButton>Register Account</NewButton>
      <div>
        <span>Already have an account? </span>
        <Link href='/login'>
          <span className='underline text-customgray-2'>Login</span>
        </Link>
      </div>
    </form>
  );
}
