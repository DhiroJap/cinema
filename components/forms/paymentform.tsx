"use client";

import React, { useEffect, useState } from "react";
import { InputContainer, InputLabel, NewButton } from "@/styles";
import { lockRoute } from "@/utils/auth";
import { useRouter } from "next/router";
import { AddPayment, GetPayment } from "@/utils/api";

interface pay {
  paymentID: number;
  movieName: string;
  studio: string;
  amount: number;
  timestart: string;
  studioSeats: string[];
}

export default function PaymentForm({
  BookingHeaderID,
}: {
  BookingHeaderID: number;
}) {
  lockRoute();
  // const router = useRouter();
  const [booking, setBooking] = useState<pay>({
    paymentID: 0,
    movieName: "",
    studio: "",
    amount: 0,
    timestart: "",
    studioSeats: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetPayment(BookingHeaderID);
        setBooking(response.data);
      } catch (error) {
        console.error("Error fetching data : ", error);
      }
    };

    fetchData();
  }, [BookingHeaderID]);

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await AddPayment(booking.paymentID);
  };

  return (
    <form className="w-200 flex flex-col gap-2" onSubmit={handleClick}>
      <InputContainer>
        <InputLabel htmlFor="seatnumber">
          Seat Number:
          {booking?.studioSeats?.length > 0 && booking.studioSeats.join(", ")}
        </InputLabel>
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor="Time">
          Time:{" "}
          {booking?.timestart &&
            new Date(booking.timestart).toLocaleString(undefined, {
              timeZone: "UTC",
            })}
        </InputLabel>
      </InputContainer>

      <h1>Total Payment: {booking?.amount}</h1>

      <section className="flex justify-between gap-2">
        <NewButton type="submit">Confirm Order</NewButton>
        <NewButton>Cancel</NewButton>
      </section>
    </form>
  );
}
