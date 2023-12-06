import React from "react";
import { InputContainer, InputLabel, NewButton } from "@/styles";

interface PaymentFormProps {
  seatNumber: string;
  time: string;
  totalPayment: number;
  onConfirmOrder: () => void;
  onCancel: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  seatNumber,
  time,
  totalPayment,
  onConfirmOrder,
  onCancel,
}) => {
  return (
    <form className="w-200 flex flex-col gap-2">
      <InputContainer>
        <InputLabel htmlFor="seatnumber">Seat Number</InputLabel>
        <p>{seatNumber}</p>
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor="time">Time</InputLabel>
        <p>{time}</p>
      </InputContainer>

      <h1>Total Payment: ${totalPayment ? totalPayment.toFixed(2) : "0.00"}</h1>

      <section className="flex justify-between gap-2">
        <NewButton onClick={onConfirmOrder}>Confirm Order</NewButton>
        <NewButton onClick={onCancel}>Cancel</NewButton>
      </section>
    </form>
  );
};

export default PaymentForm;
