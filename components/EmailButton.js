import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const EmailButton = () => {
  return (
    <div className="bg-[#3c3c3c] dark:bg-white rounded-100 text-white dark:text-black flex items-center md:px-8 xs:px-5 xs:py-2 md:py-4 md:my-10 xs:my-4 xs:w-auto md:w-fit">
        <a href="mailto:arianarajewski@gmail.com"><div className="flex items-center md:space-x-10 xs:space-x-6 transition hover:scale-95 hover:cursor-pointer">
            <p className="">arianarajewski@gmail.com</p>
            <Icon className='md:text-24 xs:text-[5vw] animate-wiggle' icon="ant-design:mail-outlined" />
      </div></a>
    </div>
  )
}

export default EmailButton;