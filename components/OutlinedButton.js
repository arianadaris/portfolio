import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const OutlinedButton = (props) => {
    const { title, link } = props;

    return (
        <>
            <Link className='flex items-center border-0.5 rounded-100 px-8 py-2 w-fit space-x-10' href={ link }>
                <p>{ title }</p>
                <Icon width={20} icon="bytesize:arrow-right" />
            </Link>
        </>
    );
}

export default OutlinedButton;