import React from 'react';

interface PaymentFormProps {
    selectedSeat: string | null;
    selectedTime: string | null;
    totalPrice: number | null;
    onConfirmOrder: () => void;
    onCancel: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
    selectedSeat,
    selectedTime,
    totalPrice,
    onConfirmOrder,
    onCancel,
}) => {
    return (
    <form className='w-200 flex flex-col gap-2'>
        <div>
            <label htmlFor='seatnumber'>Seat Number:</label>
        <div>{selectedSeat}</div>
        </div>

        <div>
            <label htmlFor='time'>Time:</label>
            <div>{selectedTime}</div>
        </div>

        <h1>Total Payment: ${totalPrice}</h1>

        <section className='flex justify-between gap-2'>
            <button onClick={onConfirmOrder}>Confirm Order</button>
            <button onClick={onCancel}>Cancel</button>
        </section>
    </form>
    );
};

export default PaymentForm;
