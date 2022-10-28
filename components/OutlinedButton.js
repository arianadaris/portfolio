import React, { useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

// Animations
import { useInView } from 'react-intersection-observer';

const OutlinedButton = (props) => {
    const { title, link } = props;

    return (
        <>
            <Link className='flex items-center border-0.5 rounded-100 px-8 py-2 w-fit' href={ link }>
                <div className="flex items-center space-x-10 transition hover:scale-95 hover:cursor-pointer hover:animate-stop">
                    <p>{ title }</p>
                    <Icon className="animate-slide" width={20} icon="bytesize:arrow-right" />
                </div>
            </Link>
        </>
    );
}

export default OutlinedButton;