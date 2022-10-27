import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const EmailButton = () => {
  return (
    <div className="bg-[#3c3c3c] dark:bg-white w-fit rounded-100 text-white dark:text-black flex items-center space-x-6 px-8 py-2 my-10 ">
        <div className="flex items-center space-x-10 transition hover:scale-95 hover:cursor-pointer">
            <p>arianarajewski@gmail.com</p>
            <Icon className='text-24 animate-wiggle' icon="ant-design:mail-outlined" />
        </div>
    </div>
  )
}

export default EmailButton;