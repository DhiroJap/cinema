'use client';

import { FooterLink, NavbarLink } from '@/styles';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();

  return (
    <footer>
      <div className='bg-navbar flex flex-col justify-between items-center border-t-2 border-t-customgray-1 p-6 gap-6'>
        <div className='flex gap-6'>
          <FooterLink onClick={() => router.push('/')}>Now Playing</FooterLink>
          <div className='text-3xl'>|</div>
          <FooterLink onClick={() => router.push('/upcoming')}>
            Upcoming
          </FooterLink>
          <div className='text-3xl'>|</div>
          <FooterLink onClick={() => router.push('/profile')}>
            Profile
          </FooterLink>
        </div>
        <div className='text-sm'>
          <p>
            &copy; 2023 Galaxy Cinema. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Odio quae, saepe ullam, sit asperiores voluptatem
            illo eum dicta eaque temporibus maiores debitis repellendus
            blanditiis quasi officia reiciendis. Eum, itaque sunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            natus itaque iure quidem quisquam expedita! Ipsam doloribus, aperiam
            aspernatur optio obcaecati autem. Iste similique sit consequuntur
            quam, recusandae hic eveniet!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis facilis cupiditate vitae esse ipsam! Id qui dolor
            blanditiis. Culpa aliquam similique in praesentium cupiditate, ea
            quod tempora? Vero, magnam corrupti!
          </p>
        </div>
      </div>
    </footer>
  );
}
