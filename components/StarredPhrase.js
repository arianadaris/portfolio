import React from 'react';
import Image from 'next/image';
import Dawn from './Dawn.js';

const StarredPhrase = (props) => {
    const { firstWord, secondWord } = props;

    return (
        <div className="flex items-center justify-between">
            <div className="w-fit flex items-center md:border-[0.5px] md:border-black xs:border-gray xs:border-[0.25px] dark:border-white rounded-100 md:px-8 xs:px-2 py-2">
                <h2>{ firstWord }</h2>
                <Dawn className="md:mx-3 xs:mx-1 md:w-10 md:h-10 xs:h-5 xs:w-5 fill-[#4F4F4F] stroke-[#4F4F4F] dark:fill-white dark:stroke-white" />
                <h2>{ secondWord }</h2>
            </div>
            <div className="flex flex-row flex-1 w-full opacity-0 md:ml-10 xs:ml-4 border-b-0.5 md:border-black dark:border-white xs:border-gray animate-firl animation-delay-300 "/>
        </div>
  );
}

export default StarredPhrase;