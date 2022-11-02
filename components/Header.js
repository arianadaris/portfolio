import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

import Socials from './Socials';

import useDarkMode from '../hooks/useDarkMode';

const Header = () => {
  const [ colorTheme, setTheme ] = useDarkMode();
  const [ isOpen, setIsOpen ] = useState(false);
  const mobileMenu = useRef(null);
  const router = useRouter();

  const toggle = () => {
    console.log(mobileMenu.current.classList)
    if(!isOpen && mobileMenu.current.classList.contains('xs:hidden'))
    {
      mobileMenu.current.classList.remove('xs:hidden');
      mobileMenu.current.classList.add('xs:flex');
    }
    else
    {
      mobileMenu.current.classList.add('xs:hidden');
      mobileMenu.current.classList.remove('xs:flex');
    }

    setIsOpen(!isOpen);
  }
  
  return (
    <>
      <div className="flex justify-between items-center md:px-14 xs:px-6 pt-8 pb-6 font-foundersLight uppercase border">
        <Link className="tracking-widest md:text-32 xs:text-68 animate-fir" href="/" onClick={() => isOpen ? toggle() : ''}>Ariana Daris</Link>
        <nav className="text-neutral-400 dark:text-slate-400 text-18 space-x-10 tracking-wider flex xs:hidden md:flex">
          <Link className={router.pathname == "/work" ? "active" : "navItem"} href="/work">Work</Link>
          <Link className={router.pathname == "/about" ? "active" : "navItem"} href="/about">About</Link>
          <Link className={router.pathname == "/contact" ? "active" : "navItem animation-delay-500"} href="/contact">Contact</Link>
          <button id="theme-toggle" type="button" onClick={() => colorTheme === 'light' ? setTheme('light') : setTheme('dark')}>
            {colorTheme === "light" ?
              <Icon className="active" icon="bi:sun" /> 
            : <Icon className="navItem animation-delay-500" icon="bi:moon" />}
          </button>
        </nav>
        <Icon className="md:hidden xs:flex transition" icon="charm:menu-hamburger" onClick={() => toggle()}/> 
      </div>
      <div className="md:border-b-[0.5px] xs:border-b-[0.5px] md:border-black xs:border-gray dark:border-white md:opacity-0 xs:opacity-100 md:animate-firl xs:animate-none animation-delay-500" />

      {/* Mobile navigation menu */}
      <div className={isOpen ? "md:hidden xs:flex xs:headerContent xs:headerShow" : "md:hidden xs:flex xs:headerContent"} ref={mobileMenu}>
        {/* <button className="absolute right-10" id="theme-toggle" type="button" onClick={() => colorTheme === 'light' ? setTheme('light') : setTheme('dark')}>
          {colorTheme === "light" ?
            <Icon className="active" icon="bi:sun" /> 
          : <Icon className="navItem animation-delay-500" icon="bi:moon" />}
        </button> */}
        <Link className={router.pathname == "/work" ? "headerActive" : "headerItem"} href="/work" onClick={() => toggle()}>Work</Link>
        <Link className={router.pathname == "/about" ? "headerActive" : "headerItem"} href="/about" onClick={() => toggle()}>About</Link>
        <Link className={router.pathname == "/contact" ? "headerActive" : "headerItem animation-delay-500"} href="/contact" onClick={() => toggle()}>Contact</Link>
        <div>
          <Socials />
        </div>
      </div>
      <div className={isOpen ? "md:border-b-[0.5px] xs:border-b-[0.5px] md:border-black xs:border-gray dark:border-white xs:opacity-100 xs:animate-none animation-delay-500 flex" : "hidden"} />
    </>
  );
}

export default Header;