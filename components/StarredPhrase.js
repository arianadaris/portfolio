import React from 'react';
import Image from 'next/image';

const StarredPhrase = (props) => {
    const { firstWord, secondWord } = props;

    return (
        <div className="w-fit flex items-center border-0.5 rounded-100 pl-8 pr-12 py-2 mr-6">
            <h2>{ firstWord }</h2>
            <Image className="px-3" width={75} layout="responsive" src={require('../public/images/icons/Dawn.png')} alt="Dawn" />
            <h2>{ secondWord }</h2>
        </div>
  );
}

export default StarredPhrase;