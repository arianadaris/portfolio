import React, { useEffect } from 'react';
import EmailButton from '../EmailButton';
import OutlinedButton from '../OutlinedButton';

// Animations
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import useWindowSize from '../../hooks/useWindowSize';

const Contact = () => {
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
        <>
            <motion.div className="bg-blue w-105 ml-n5 md:my-20 xs:my-14 px-10 md:pt-16 xs:pt-2 xs:pb-8 md:pb-12 dark:text-slate-900" ref={ref} variants={scrollUp} initial={size.width > 768 ? "hidden" : "visible"} animate={control}>
                <h1>Let&apos;s Get In Touch!</h1>
                <div className="flex md:flex-row xs:flex-col justify-between md:items-center">
                    <p className="md:mb-8 xs:mb-0 md:mt-6 xs:mt-0 md:w-[75%]">I am looking forward to taking on freelance opportunities, and would love to hear about your next exciting project! Feel free to send me a message and let&apos;s chat.</p>
                    <OutlinedButton title="Contact Me" link="/contact" />
                </div>
            </motion.div>
        </>
  )
}

export default Contact