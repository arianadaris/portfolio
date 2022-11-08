import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Socials from './Socials';

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <div className="md:border-t-[0.5px] xs:border-t-[0.5px] md:border-black xs:border-gray opacity-0 animate-firl md:animation-delay-500 dark:border-white" />
      <div className="flex justify-between items-center md:px-14 xs:px-6 pt-8 pb-6 font-foundersLight uppercase border">
        <Link className="tracking-widest md:text-32 xs:text-68 animate-fir" href="/">Ariana Daris</Link>
        <nav className="text-neutral-400 dark:text-slate-400 text-18 space-x-10 tracking-wider flex xs:hidden md:flex">
          <Link className={router.pathname == "/work" ? "active" : "navItem"} href="/work">Work</Link>
          <Link className={router.pathname == "/about" ? "active" : "navItem"} href="/about">About</Link>
          <Link className={router.pathname == "/contact" ? "active" : "navItem md:animation-delay-500"} href="/contact">Contact</Link>
        </nav>
        <Socials />
      </div>

    </>
  )
}

export default Footer;