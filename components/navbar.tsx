'use client';

import { AppLogo, NavbarLink } from '@/styles';
import { flexBetween } from '@/utils/const';

import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  return (
    <div
      className={`${flexBetween} bg-navbar relative top-0 z-30 w-full border-b-2 border-b-customgray-1 py-4`}
    >
      <div className={`${flexBetween} mx-20 w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* Left Side */}
          <div className={`${flexBetween} gap-10`}>
            <AppLogo>CINEMA</AppLogo>
          </div>
        </div>
        <div className={`${flexBetween} w-full`}>
          <div className={`${flexBetween} gap-10`}>
            <NavbarLink onClick={() => router.push('/')}>
              Now Playing
            </NavbarLink>
            <NavbarLink onClick={() => router.push('/upcoming')}>
              Upcoming
            </NavbarLink>
            <NavbarLink onClick={() => router.push('/about')}>
              About Us
            </NavbarLink>
          </div>
        </div>
        <div className={`${flexBetween} gap-10`}>
          <NavbarLink onClick={() => router.push('/login')}>Login</NavbarLink>
          <NavbarLink onClick={() => router.push('/register')}>
            Register
          </NavbarLink>
        </div>
      </div>
    </div>
  );
}
