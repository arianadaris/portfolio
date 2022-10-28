import React, { useEffect } from 'react';
import EmailButton from '../EmailButton';

// Animations
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
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
        <>
            <motion.div className="bg-blue w-105 ml-n5 my-20 px-10 pt-16 pb-20 dark:text-slate-900" ref={ref} variants={scrollUp} initial="hidden" animate={control}>
            <h1 className="text-36">Let's Get In Touch!</h1>
            <p>I am looking forward to taking on freelance opportunities, and would love to hear about your next excting project! Feel free to send me a message and let’s chat.</p>
            <EmailButton />
            </motion.div>
        </>
  )
}

export default Contact