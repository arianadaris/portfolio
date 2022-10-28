import React from 'react';
import Image from 'next/image';
import Dawn from './Dawn.js';

const StarredPhrase = (props) => {
    const { firstWord, secondWord } = props;

    return (
        <div className="flex items-center justify-between">
            <div className="w-fit flex items-center border-0.5 rounded-100 px-8 py-2">
                <h2>{ firstWord }</h2>
                <Dawn className="mx-3 w-10 h-10 fill-[#4F4F4F] stroke-[#4F4F4F] dark:fill-white dark:stroke-white" />
                <h2>{ secondWord }</h2>
            </div>
            <div className="flex flex-row flex-1 w-full opacity-0 ml-10 border-b-0.5 animate-firl animation-delay-300 "/>
        </div>
  );
}

export default StarredPhrase;