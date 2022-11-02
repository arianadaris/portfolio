import React from 'react';

import Header from '../components/Header';

import StarredPhrase from '../components/StarredPhrase';
import EmailButton from '../components/EmailButton';
import Socials from '../components/Socials';

const contact = () => {
  return (
    <div className="md:h-[68vh] xs:h-[72.5vh]">
      {/* Let's Chat */}
      <div className="animate-fir animation-delay-300 opacity-0">
        <StarredPhrase firstWord="Let&apos;s" secondWord="Chat" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="md:mt-0 xs:mt-10">Hi again!</h1>
        <p className="mt-10">I would love to get in touch and talk about your next project!</p>
        <p>Feel free to send me an email and let&apos;s connect!</p>
        <EmailButton />
        <div className="md:mt-0 xs:mt-10">
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default contact