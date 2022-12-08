import React, { useEffect } from 'react';

import StarredPhrase from '../StarredPhrase';
import EmailButton from '../EmailButton';

// Animations
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import useWindowSize from '../../hooks/useWindowSize';

const Contact = () => {
    const symbol = "0x1F44B"; // waving hand emoji
    const control = useAnimation();
    const [ ref, inView ] = useInView();
    const size = useWindowSize();

    useEffect(() => {
        if(size.width > 768)
            inView ? control.start('visible') : control.start('hidden');
    }, [control, inView]);

    const scrollUp = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 }},
        hidden: { opacity: 0, y: 100 }
    };

    return (
        <motion.div ref={ref} variants={scrollUp} initial={size.width > 768 ? "hidden" : "visible"} animate={control}>
            <StarredPhrase firstWord="Contact" secondWord="Me" />
            <h1 className="md:text-48 mt-12">Let&apos;s Get In Touch!</h1>
            <div className="flex xs:my-0 md:my-6">
                <p className="xs:text-[5vw] md:text-24 xs:mt-0 md:mt-0">Whether you&apos;re just saying <span role="img" aria-label="Wave">{String.fromCodePoint(symbol)}</span>, or you&apos;re looking to start a new project, feel free to send me a message! Currently, I am open to remote freelancing work.</p>
                <EmailButton />
            </div>
        </motion.div>
    )
}

export default Contact