import { Page } from '@/styles';
import { Metadata } from 'next';
import PaymentForm from '@/components/forms/paymentform';

export const metadata: Metadata = {
  title: 'GALAXY CINEMA - Payment',
  description: 'Payment Page',
};

export default function Payment({
  params,
}: {
  params: { bookingHeaderId: number };
}) {
  console.log(params.bookingHeaderId);
  return (
    <Page display='flex' $justifyContent='center' $alignItems='center'>
      <PaymentForm bookingHeaderId={params.bookingHeaderId} />
    </Page>
  );
}
