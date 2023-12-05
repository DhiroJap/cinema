import ProfileCard from '@/components/user/profilecard';
import { Page } from '@/styles';
import { lockRoute } from '@/utils/auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GALAXY Cinema - Profile',
  description: 'Profile Page',
};

export default function Profile() {
  return (
    <Page display='flex' $justifyContent='center' $alignItems='center'>
      <ProfileCard />
    </Page>
  );
}
