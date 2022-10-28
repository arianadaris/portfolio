import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const Socials = () => {
  return (
    <div className="flex items-center text-24 space-x-12">
        <Link href="/"><Icon className="hover:scale-125 transition" icon="akar-icons:dribbble-fill" /></Link>
        <Link href="/"><Icon className="hover:scale-125 transition" icon="akar-icons:linkedin-box-fill" /></Link>
        <Link href="/"><Icon className="hover:scale-125 transition" icon="akar-icons:github-fill" /></Link>
    </div>
  )
}

export default Socials