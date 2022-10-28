import React, { useEffect } from 'react';

import StarredPhrase from '../StarredPhrase';
import EmailButton from '../EmailButton';

// Animations
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const symbol = "0x1F44B"; // waving hand emoji
    const control = useAnimation();
    const [ ref, inView ] = useInView();

    useEffect(() => {
        inView ? control.start('visible') : control.start('hidden');
    }, [control, inView]);

    const scrollUp = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 }},
        hidden: { opacity: 0, y: 100 }
    };

    return (
        <motion.div ref={ref} variants={scrollUp} initial="hidden" animate={control}>
            <StarredPhrase firstWord="Contact" secondWord="Me" />
            <h1 className="py-6">Let's Get In Touch!</h1>
            <p>Whether you’re just saying <span role="img" aria-label="Wave">{String.fromCodePoint(symbol)}</span>, or you’re looking to start a new project, feel free to send me a message! Currently, I am open to remote freelancing work.</p>
            <EmailButton />
        </motion.div>
    )
}

export default Contact