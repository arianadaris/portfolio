import React, { useEffect } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

// Animations
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Card = (props) => {
    const { color, num, projectTitle, cover, github, tags } = props;
    const control = useAnimation();
    const [ ref, inView ] = useInView();

    var delay = num % 2 === 1 ? 0.25 : 0.75;

    useEffect(() => {
        inView ? control.start('visible') : control.start('hidden');
    }, [control, inView]);

    const scrollUp = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: delay }},
        hidden: { opacity: 0, y: 100 }
    };

    const createTag = (tag) => {
        return <p className="border-white border-1 rounded-100 px-4 py-2 text-24 mb-3">{ tag }</p>;
    };

    const tagElements = tags.map((tag) => createTag(tag));

    return (
        <motion.div className={'card text-white flex-col px-14 pb-8 mb-20'} style={{backgroundColor: `${color}`}} ref={ref} variants={scrollUp} initial="hidden" animate={control}>
            <div className="pt-2 transition hover:scale-95 hover:cursor-pointer">
                <p className="text-48 pt-5">0{ num }.</p>
                <Image className="mx-auto pt-0 mt-10" width={700} height={700} layout="responsive" src={cover} alt={ projectTitle } />
                <div className="flex items-center justify-between mt-8">
                    <p className="text-48">{ projectTitle }</p>
                    <div className="flex items-center text-48 space-x-2 mt-2">
                        <a href={github} target="_blank" rel="noreferrer"><Icon className="transition hover:scale-105" icon="akar-icons:github-outline-fill" /></a>
                        <Icon className="transition hover:scale-105" icon="bi:arrow-up-right" />
                    </div>
                </div>
                <div className="flex flex-wrap mt-4 space-x-2">
                    { tagElements }
                </div>
            </div>
        </motion.div>
    );
}

export default Card;