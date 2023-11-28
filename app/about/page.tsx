import { Page } from '@/styles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GALAXY CINEMA - About Us',
  description: 'About Page',
};

export default function About() {
  return (
    <Page display='flex' justifyContent='center' alignItems='center'>
      <h1>About Page</h1>
    </Page>
  );
}
