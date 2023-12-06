import { Page } from '@/styles';
import { Metadata } from 'next';
import PaymentForm from '@/components/forms/paymentform';
import { lockRoute } from '@/utils/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


export const metadata: Metadata = {
  title: 'GALAXY CINEMA - Payment',
  description: 'Payment Page',
};

export default function Payment() {
  return (
    <Page display='flex' $justifyContent='center' $alignItems='center'>
      <PaymentForm />
    </Page>
  );
}
