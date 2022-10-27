import React from 'react';
import Image from 'next/image';

import StarredPhrase from '../components/StarredPhrase';
import OutlinedButton from '../components/OutlinedButton';
import EmailButton from '../components/EmailButton';
import Socials from '../components/Socials';

const about = () => {
  return (
    <div>
        {/* About Me */}
        <StarredPhrase firstWord="About" secondWord="Me" />
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3">
            <h1>Hi, I'm Ariana Daris!</h1>
            <p>
              I’m a senior at Arizona State University studying Computer Science with a concentration in Software Engineering. I am graduating in December of 2022 with my Bachelor’s degree, and anticipate earning a Master’s degree in Computer Science the following December.
            </p>
            <p>
              Outside of school, I enjoy learning about front-end development and UX/UI design. I’m a people person, and I love that I can use code to get to know people and create something beautiful with them! With front-end development, it’s a gratifying feeling seeing how a few lines of code can make the biggest difference for someone else.
            </p>
          </div>
          <div className="col-span-2">
            <div className="w-fit mx-auto p-2 pb-10 border-0.5 rounded-tl-full rounded-tr-full flex-col">
              <Image className="mx-auto" height={300} layout="responsive" src={require('../public/images/personal/PersonalFrame.png')} alt="Ariana Daris" />
              <div className="w-fit mx-auto mt-4 mb-0 p-3">
                <Socials />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default about