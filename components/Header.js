import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

import useDarkMode from '../hooks/useDarkMode';

const Header = () => {
  const [ colorTheme, setTheme ] = useDarkMode();
  const router = useRouter();
  
  return (
    <section className="flex justify-between items-center h-10 mx-auto pt-14 pb-5">
        <Link href="/">
          <Image className="smallLogo" src={require('../public/images/SmallLogo.png')} alt="Ariana Daris" />
        </Link>

        {/* Nav Items */}
        <div className="flex space-x-8 px-8 py-2 rounded-round shadow-lg shadow-zinc-800/5 ring-[0.5px] ring-zinc-900/5 dark:shadow-white/0 dark:ring-white/20 bg-white dark:bg-[#181818]">
          
            <Link href="/work" className={router.pathname == '/work' ? "headerActive" : "headerItem"}>
              Work
              {/* Highlight under active tab */}
              {router.pathname == '/work' ? <div className="-bottom-[1vh] h-px bg-gradient-to-r from-[#3C4FC0]/0 via-[#3C4FC0]/60 to-[#3C4FC0]/0 w-full absolute"></div> : null }
            </Link>
            <Link href="/about" className={router.pathname == '/about' ? "headerActive" : "headerItem"}>
              About
              {/* Highlight under active tab */}
              {router.pathname == '/about' ? <div className="-bottom-[1vh] h-px bg-gradient-to-r from-[#3C4FC0]/0 via-[#3C4FC0]/60 to-[#3C4FC0]/0 w-full absolute"></div> : null }
            </Link>
            <Link href="/contact" className={router.pathname == '/contact' ? "headerActive" : "headerItem"}>
              Contact
              {/* Highlight under active tab */}
              {router.pathname == '/contact' ? <div className="-bottom-[1vh] h-px bg-gradient-to-r from-[#3C4FC0]/0 via-[#3C4FC0]/60 to-[#3C4FC0]/0 w-full absolute"></div> : null }
            </Link>
        </div>

        {/* Dark Mode / Light Mode Btn */}
        <button id='theme-toggle' type='button' onClick={() => colorTheme === 'light' ? setTheme('light') : setTheme('dark')} className="xs:fixed md:static xs:bottom-10 xs:right-10">
        {colorTheme === 'light' ? 
          <Icon className="rounded-round shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 p-3 hover:text-[#3C4FC0] text-white hover:cursor-pointer dark:ring-white/20 bg-white dark:bg-zinc-800" icon="mingcute:moon-stars-line" width={48} height={48} /> 
          :
          <Icon className="rounded-round shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 p-3 hover:text-[#3C4FC0] hover:cursor-pointer dark:ring-white/20 bg-white dark:bg-zinc-800" icon="ph:sun-dim-bold" width={48} height={48} />
        }
        </button>
    </section>
  );
};

export default Header;