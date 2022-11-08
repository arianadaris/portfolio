import React, { useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

// Animations
import { useInView } from 'react-intersection-observer';

const OutlinedButton = (props) => {
    const { title, link, color} = props;

    return (
        <>
            <Link className='flex items-center border-0.5 md:border-black xs:border-gray dark:border-white rounded-100 px-8 md:py-4 xs:py-1 w-fit h-fit' href={ link }>
                <div className="flex items-center space-x-10 transition hover:scale-95 hover:cursor-pointer hover:animate-stop">
                    <p className="dark:text-white">{ title }</p>
                    <Icon className="animate-slide xs:text-gray md:text-black dark:text-white" width={20} icon="bytesize:arrow-right" />
                </div>
            </Link>
        </>
    );
}

export default OutlinedButton;