import React, { useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

// Animations
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OutlinedButton = (props) => {
    const { title, link } = props;
    const control = useAnimation();
    const [ ref, inView ] = useInView();

    useEffect(() => {
        inView ? control.start('visible') : control.start('hidden');
    }, [control, inView]);

    const appear = {
        visible: { opacity: 1, transition: { duration: 0.4, delay: 0.3 }},
        hidden: { opacity: 0 }
    }

    return (
        <motion.div className="transition opacity-0" ref={ref} variants={appear} initial="hidden" animate={control}>
            <Link className='flex items-center border-0.5 rounded-100 px-8 py-2 w-fit' href={ link }>
                <div className="flex items-center space-x-10 transition hover:scale-95 hover:cursor-pointer hover:animate-stop">
                    <p>{ title }</p>
                    <Icon className="animate-slide" width={20} icon="bytesize:arrow-right" />
                </div>
            </Link>
        </motion.div>
    );
}

export default OutlinedButton;