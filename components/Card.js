import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const Card = (props) => {
    const { color, num, projectTitle, cover, tags } = props;

    const createTag = (tag) => {
        return <p className="border-white border-1 rounded-100 px-4 py-2 text-xl">{ tag }</p>;
    };

    const tagElements = tags.map((tag) => createTag(tag));

    return (
        <div className={'text-white flex-col w-5/12 px-4 pt-4 pb-10 mb-10'} style={{backgroundColor: `${color}`}}>
            <p className="text-4xl">0{ num }.</p>
            <Image className="mx-auto" width={350} height={350} layout="responsive" src={cover} alt={ projectTitle } />
            <div className="flex items-center justify-between mt-8">
                <p className="text-4xl">{ projectTitle }</p>
                <div className="flex items-center text-3xl space-x-2">
                    <Icon icon="akar-icons:github-outline-fill" />
                    <Icon icon="bi:arrow-up-right" />
                </div>
            </div>
            <div className="flex flex-wrap mt-4">
                { tagElements }
            </div>
        </div>
    );
}

export default Card;