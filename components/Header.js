import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

import useDarkMode from '../hooks/useDarkMode';

const Header = () => {
  const [ colorTheme, setTheme ] = useDarkMode();
  
  return (
    <>
      <div className="flex justify-between items-center px-14 pt-8 pb-6 font-foundersLight uppercase border">
        <Link className="tracking-widest text-32 animate-fir" href="/">Ariana Daris</Link>
        <nav className="text-neutral-600 dark:text-slate-400 text-18 space-x-10 tracking-wider flex">
          <Link className="opacity-0 transition hover:text-black dark:hover:text-white animate-fir animation-delay-200" href="/work">Work</Link>
          <Link className="opacity-0 transition hover:text-black dark:hover:text-white animate-fir animation-delay-200" href="/about">About</Link>
          <Link className="opacity-0 transition hover:text-black dark:hover:text-white animate-fir animation-delay-300" href="/contact">Contact</Link>
          <button id="theme-toggle" type="button" onClick={() => colorTheme === 'light' ? setTheme('light') : setTheme('dark')}>
            {colorTheme === "light" ?
              <Icon className="opacity-0 transition hover:text-black hover:cursor-pointer animate-fir animation-delay-300" icon="bi:sun" /> 
            : <Icon className="opacity-0 transition hover:text-black hover:cursor-pointer animate-fir animation-delay-300" icon="bi:moon" />}
          </button>
        </nav>
      </div>
      <div className="border-b-0.5 opacity-0 animate-firl animation-delay-500" />
    </>
  );
}

export default Header;