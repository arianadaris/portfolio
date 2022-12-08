import React, { useEffect } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

// Animations
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import useWindowSize from '../hooks/useWindowSize';

const Card = (props) => {
    const { color, num, projectTitle, cover, github, external, tags, doAnimation } = props;
    const control = useAnimation();
    const [ ref, inView ] = useInView();
    const size = useWindowSize();

    var delay = num % 2 === 1 ? 0 : 0.5;

    useEffect(() => {
        if(doAnimation)
            inView ? control.start('visible') : control.start('hidden');
    }, [control, inView])

    const scrollUp = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: delay }},
        hidden: { opacity: 0, y: 100 }
    };

    const createTag = (tag) => {
        return <p className="border-white border-0.5 rounded-100 px-4 py-2 xs:mb-2 md:mb-16 md:text-24">{ tag }</p>;
    };

    const tagElements = tags.map((tag) => createTag(tag));

    return (
        <motion.div className={'card text-white flex-col md:px-4 xs:px-3 md:mb-20 xs:pt-0 md:pt-6 xs:mb-5 xs:mx-auto xs:w-auto scroll-smooth'} style={{backgroundColor: `${color}`}} ref={ref} variants={scrollUp} initial={size.width > 768 ? "hidden" : "visible"} animate={control}>
            <div className="transition hover:scale-95 hover:cursor-pointer">
                <p className="absolute md:text-36 xs:text-[7vw]">0{ num }.</p>
                <Image className="mx-auto md:pt-10 xs:pt-14 mt-10 pr-4" width={350} height={350} layout="responsive" src={cover} alt={ projectTitle } />
                <div className="flex items-center justify-between md:mt-8 xs:mt-2">
                    <p className="md:text-36 xs:text-[7vw]">{ projectTitle }</p>
                    <div className="flex items-center md:text-48 xs:text-[5vw] space-x-2">
                        <a href={github} target="_blank" rel="noreferrer"><Icon className="transition hover:scale-105 xs:h-[7vw] xs:w-[7vw] md:h-fit md:w-fit" icon="akar-icons:github-outline-fill" /></a>
                        {external ? <a href={external} target="_blank" rel="noreferrer"><Icon className="transition hover:scale-105 h-[7vw] w-[7vw] md:h-fit md:w-fit" icon="bi:arrow-up-right" /></a> : ''}
                    </div>
                </div>
                <div className="md:flex xs:hidden flex-wrap space-x-2 md:mt-20 xs:mt-0">
                    { tagElements }
                </div>
            </div>
        </motion.div>
    );
}

export default Card;