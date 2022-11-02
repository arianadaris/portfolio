import React from 'react';
import { Icon } from '@iconify/react';

const Socials = () => {
  return (
    <div className="flex items-center md:text-24 md:space-x-12 xs:space-x-4">
        <a href="https://dribbble.com/arianadaris" target="_blank" rel="noreferrer"><Icon className="hover:scale-125 transition" icon="akar-icons:dribbble-fill" /></a>
        <a href="https://www.linkedin.com/in/ariana-rajewski/" target="_blank" rel="noreferrer"><Icon className="hover:scale-125 transition" icon="akar-icons:linkedin-box-fill" /></a>
        <a href="https://github.com/arianadaris" target="_blank" rel="noreferrer"><Icon className="hover:scale-125 transition" icon="akar-icons:github-fill" /></a>
    </div>
  )
}

export default Socials