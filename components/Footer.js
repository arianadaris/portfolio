import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  const openLink = (link) => {
    if(typeof(window) != undefined)
      window.open(link);
  };
  
  return (
    <div className="flex flex-col space-y-4 justify-center items-center pb-20 pt-10">
        <a className="hover:text-black text-black dark:text-white hover:underline" href="mailto:arianarajewski@gmail.com">arianarajewski@gmail.com</a>
        <div className="flex space-x-4">
            <Icon className="hover:text-[#3C4FC0] hover:cursor-pointer text-black dark:text-white" icon="akar-icons:dribbble-fill" onClick={() => openLink('https://dribbble.com/arianadaris')}/>
            <Icon className="hover:text-[#3C4FC0] hover:cursor-pointer text-black dark:text-white" icon="akar-icons:linkedin-box-fill" onClick={() => openLink('https://www.linkedin.com/in/ariana-rajewski/')}/>
            <Icon className="hover:text-[#3C4FC0] hover:cursor-pointer text-black dark:text-white" icon="akar-icons:github-fill" onClick={() => openLink('https://github.com/arianadaris')}/>
        </div>
    </div>
  );
};

export default Footer;