import React from 'react';

import Header from '../components/Header';

import StarredPhrase from '../components/StarredPhrase';
import EmailButton from '../components/EmailButton';
import Socials from '../components/Socials';

const contact = () => {
  return (
    <div className="h-screen80">
      {/* Let's Chat */}
      <div className="animate-fir animation-delay-300 opacity-0">
        <StarredPhrase firstWord="Let's" secondWord="Chat" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1>Hi again!</h1>
        <p>I would love to get in touch and talk about your next project!</p>
        <p>Feel free to send me an email and let's connect!</p>
        <EmailButton />
        <Socials />
      </div>
    </div>
  )
}

export default contact