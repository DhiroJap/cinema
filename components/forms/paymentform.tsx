import { InputContainer, InputField, InputLabel, NewButton} from '@/styles';
import Link from 'next/link';

export default function PaymentForm() {
    return (
<form className='w-200 flex flex-col gap-2'>

        <InputContainer>
        <InputLabel htmlFor='seatnumber'>Seat Numbeer</InputLabel>
        </InputContainer>

        <InputContainer>
        <InputLabel htmlFor='time'>Time</InputLabel>
        </InputContainer>

        <section className='flex justify-between gap-4'>
        <NewButton>Pay</NewButton>
        <NewButton>Pay</NewButton>
        <NewButton>Pay</NewButton>
        </section>

        <InputContainer>
        <InputLabel htmlFor='cardnumber'>Card Number</InputLabel>
        <InputField type='number' id='cardNumber' />
        </InputContainer>

        <section className='flex justify-between gap-4'>
            <InputContainer>
                <InputLabel htmlFor='expiry'>Expiry</InputLabel>
                <InputField type='month/year' id='expiry' />
            </InputContainer>

            <InputContainer>
                <InputLabel htmlFor='cvc'>CVC</InputLabel>
                <InputField type='number' inputMode='numeric' id='cvc' />
            </InputContainer>
        </section>

        <InputContainer>
            <InputLabel htmlFor='postalCode'>Postal Code</InputLabel>
            <InputField type='number' inputMode='numeric' id='postalCode' />
        </InputContainer>

        <h1>Total Payment: </h1>

        <section className='flex justify-between gap-2'>
            <NewButton>Confirm Order</NewButton>
            <NewButton>Cancel</NewButton>
        </section>
        
        
        <div>
        <span>Already have an account? </span>
        <Link href='/login'>
            <span className='underline text-customgray-2'>Login</span>
        </Link>
        </div>
    </form>
    );
}