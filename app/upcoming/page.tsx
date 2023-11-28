import { Page } from '@/styles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GALAXY CINEMA - Upcoming',
  description: 'Upcoming Page',
};

export default function Upcoming() {
  return (
    <Page>
      <h1>Upcoming Page</h1>
    </Page>
  );
}