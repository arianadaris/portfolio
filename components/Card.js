import React, { useEffect } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

// Animations
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import useWindowSize from '../hooks/useWindowSize';

const Card = (props) => {
    const { color, num, projectTitle, cover, github, external, tags } = props;
    const control = useAnimation();
    const [ ref, inView ] = useInView();
    const size = useWindowSize();

    var delay = num % 2 === 1 ? 0 : 0.5;

    useEffect(() => {
        if(size.width > 768)
            inView ? control.start('visible') : control.start('hidden');
        else
            control.start('visible');
    }, [control, inView])

    const scrollUp = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: delay }},
        hidden: { opacity: 0, y: 100 }
    };

    const createTag = (tag) => {
        return <p className="border-white border-0.5 rounded-100 px-4 py-2 xs:mb-2 md:mb-16 xs:text-[3vw] md:text-24">{ tag }</p>;
    };

    const tagElements = tags.map((tag) => createTag(tag));

    return (
        <motion.div className={'card text-white flex-col xs:pb-4 md:pb-0 md:px-4 xs:px-2 md:mb-20 xs:mb-5 xs:mx-auto xs:w-auto scroll-smooth'} style={{backgroundColor: `${color}`}} ref={ref} variants={scrollUp} initial={size.width > 768 ? "hidden" : "visible"} animate={control}>
            <div className="xs:pt-2 md:pt-6 transition hover:scale-95 hover:cursor-pointer">
                <p className="absolute md:text-36">0{ num }.</p>
                <Image className="mx-auto md:pt-10 mt-10 pr-4" width={350} height={350} layout="responsive" src={cover} alt={ projectTitle } />
                <div className="flex items-center justify-between mt-8">
                    <p className="md:text-36">{ projectTitle }</p>
                    <div className="flex items-center md:text-48 xs:text-[5vw] space-x-2 xs:mt-2 md:mt-0">
                        <a href={github} target="_blank" rel="noreferrer"><Icon className="transition hover:scale-105" icon="akar-icons:github-outline-fill" /></a>
                        {external ? <a href={external} target="_blank" rel="noreferrer"><Icon className="transition hover:scale-105" icon="bi:arrow-up-right" /></a> : ''}
                    </div>
                </div>
                <div className="flex flex-wrap mt-4 space-x-2 md:mt-20 xs:mt-0">
                    { tagElements }
                </div>
            </div>
        </motion.div>
    );
}

export default Card;