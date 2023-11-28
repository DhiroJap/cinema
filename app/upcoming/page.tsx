import { Page } from '@/styles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GALAXY CINEMA - Upcoming',
  description: 'Upcoming Page',
};

export default function Upcoming() {
  return (
    <Page display='flex' alignItems='center' justifyContent='center'>
      <h1>Upcoming Page</h1>
    </Page>
  );
}