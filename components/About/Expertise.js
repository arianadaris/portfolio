import React, { useEffect } from 'react';

import OutlinedButton from '../OutlinedButton';

// Animations
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Expertise = () => {
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
            <motion.div className="bg-blue w-105 ml-n5 my-20 px-10 pt-16 pb-20 md:grid md:grid-cols-3 xs:flex xs:flex-col dark:text-slate-900 relative z-10" ref={ref} variants={scrollUp} initial="hidden" animate={control}>
            {/* <DevCircle className="animate-turn absolute right-neg1 top-neg2 z-0"/> */}
            <div className="col-span-1">
                <h1 className="md:text-36 xs:text-[6vw]">My Expertise</h1>
                <p className="my-8 xs:hidden md:flex">
                During highschool, I had the opportunity to take a web development class which introduced me to HTML and CSS. Before studying Computer Science in college, I taught myself Java and Python using Youtube videos and respective documentation.
                </p>
                <div className="xs:hidden md:flex">
                    <OutlinedButton title="View More Work" link="/work" delay='1.7' />
                </div>
            </div>
            <div className="md:col-span-2 flex flex-col md:ml-16 md:mr-8 xs:ml-0 xs:mr-0 xs:my-10 md:my-0">
                <div className="flex flex-1 w-full md:mr-50 border-b-0.5 opacity-25"/>
                <p className="uppercase mt-0">Programming Languages</p>
                <ul className="mb-n10 flex md:justify-between xs:flex-col md:flex-row xs:flex-wrap mt-4 pb-8">
                <li>Javascript ES6</li>
                <li>HTML/CSS</li>
                <li>Java</li>
                <li>Python</li>
                <li>C++</li>
                </ul>
                <div className="flex flex-1 w-full md:mr-50 border-b-0.5 opacity-25"/>
                <p className="uppercase mt-0">Frameworks & Libraries</p>
                <ul className="mb-n10 flex md:justify-between xs:flex-col md:flex-row xs:flex-wrap mt-4 pb-8">
                <li>NextJS</li>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>TailwindCSS</li>
                <li>Framer Motion</li>
                </ul>
                <div className="flex flex-1 w-full md:mr-50 border-b-0.5 opacity-25"/>
                <p className="uppercase mt-0">Development & Design Tools</p>
                <ul className="mb-n10 flex md:justify-between xs:flex-col md:flex-row xs:flex-wrap mt-4 pb-8">
                <li>Visual Studio Code</li>
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>Adobe Illustrator</li>
                </ul>
                <div className="flex flex-row flex-1 w-full border-b-0.5 opacity-25"/>
            </div>
            </motion.div>
        </>
  )
}

export default Expertise