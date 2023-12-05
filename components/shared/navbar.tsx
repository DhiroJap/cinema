'use client';

import { RootState } from '@/redux/store';
import { AppLogo, NavbarLink } from '@/styles';
import { isAuthenticated } from '@/utils/auth';
import { flexBetween } from '@/utils/const';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const isLoggedIn = isAuthenticated();
  const router = useRouter();

  return (
    <nav className='flex flex-row bg-navbar'>
      <div
        className={`${flexBetween}bg-navbar relative top-0 z-30 w-full border-b-2 border-b-customgray-1 py-4`}
      >
        <div className={`${flexBetween} mx-20 w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left Side */}
            <div className={`${flexBetween} gap-10`}>
              <AppLogo onClick={() => router.push('/')}>
                <span>GALAXY</span> CINEMA
              </AppLogo>
            </div>
          </div>
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-10`}>
              <NavbarLink onClick={() => router.push('/nowplaying')}>
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
            {!isLoggedIn ? (
              <>
                <NavbarLink onClick={() => router.push('/login')}>
                  Login
                </NavbarLink>
                <NavbarLink onClick={() => router.push('/register')}>
                  Register
                </NavbarLink>
              </>
            ) : (
              <NavbarLink onClick={() => router.push('/profile')}>
                Profile
              </NavbarLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
