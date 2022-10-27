import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

import Socials from './Socials';

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-14 pt-8 pb-6 font-founders uppercase border border-t-0.5" >
        <Link className="tracking-widest text-32" href="/">Ariana Daris</Link>
        <nav className="text-neutral-600 dark:text-neutral-200 text-18 space-x-10 tracking-wider flex">
          <Link className="transition hover:text-gray-200 animate-fir animation-delay-100" href="/work">Work</Link>
          <Link className="transition hover:text-gray-200 dark:hover:text-white animate-fir animation-delay-100" href="/about">About</Link>
          <Link className="transition hover:text-gray-200 dark:hover:text-white animate-fir animation-delay-200" href="/contact">Contact</Link>
        </nav>
      <Socials />
    </div>
  )
}

export default Footer;