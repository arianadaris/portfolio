import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <div className="flex justify-between items-center px-14 pt-8 pb-6 font-founders uppercase border border-b-0.5">
      <Link className="tracking-widest text-4xl" href="/">Ariana Daris</Link>
      <nav className="text-gray text-xl space-x-10 tracking-wider flex">
        <Link className="hover:text-black" href="/work">Work</Link>
        <Link className="hover:text-black" href="/about">About</Link>
        <Link className="hover:text-black" href="/contact">Contact</Link>
        <Icon className="hover:text-black" icon="bi:moon" />
      </nav>
    </div>
  );
}

export default Header;