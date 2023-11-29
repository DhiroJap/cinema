import { Page } from '@/styles';
import { Metadata } from 'next';
import PaymentForm from '@/components/forms/paymentform';

export const metadata: Metadata = {
    title: 'GALAXY CINEMA - Payment'
    description: 'Payment Page',
};

exprot defaut function Payment {
    return(
        <Page display='flex' justifyContent='center' alignItems='center'>
        <Paymeent />
        </Page>
    );
}