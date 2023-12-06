'use client';

import { removeUser } from '@/redux/slices/userSlice';
import { AppDispatch, persistor } from '@/redux/store';
import {
  AppLogo,
  DropdownContainer,
  DropdownItem,
  DropdownMenu,
  NavbarLink,
} from '@/styles';
import { isAuthenticated } from '@/utils/auth';
import { flexBetween } from '@/utils/const';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export default function Navbar() {
  const isLoggedIn = isAuthenticated();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useDispatch<AppDispatch>();

  const handleItemClick = (action: string) => {
    if (action === 'signOut') {
      localStorage.removeItem('token');
      dispatch(removeUser());
      persistor.purge();
      router.push('/');
      router.refresh();
      toast.success('Successfully logged out!', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } else if (action === 'settings') {
      router.push('/profile');
    }
    setIsOpen(false);
  };

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
              <DropdownContainer>
                <button
                  onClick={toggleDropdown}
                  className='hover:text-secondary bg-none outline-none'
                >
                  Profile
                </button>
                <DropdownMenu className='mt-2' isOpen={isOpen}>
                  <DropdownItem onClick={() => handleItemClick('settings')}>
                    Settings
                  </DropdownItem>
                  <DropdownItem onClick={() => handleItemClick('signOut')}>
                    Sign Out
                  </DropdownItem>
                </DropdownMenu>
              </DropdownContainer>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
