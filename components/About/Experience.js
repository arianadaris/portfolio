import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

import StarredPhrase from '../StarredPhrase';

// Animations
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import useWindowSize from '../../hooks/useWindowSize';

const Experience = ({ posts }) => {
    const [ selected, setSelected ] = useState(null);
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
  
    // Toggle function for job card drop downs
    const toggle = (i) => {
      if(selected === i)
        return setSelected(null);
  
      setSelected(i);
    }

    return (
        <motion.div ref={ref} variants={scrollUp} initial={size.width > 768 ? "hidden" : "visible"} animate={control}>
            <StarredPhrase firstWord="My" secondWord="Experience" />
            <p className="mt-4 xs:hidden md:flex">While completing my undergraduate degree, I have had the opportunity to work for amazing tech companies which have inspired me in various ways to continue learning about software development.</p>
            <div className="accordion">
                {
                posts.map((data, index) => {
                    const { frontMatter } = data;
                    const { date, title, company, duration, description } = frontMatter;

                    return (
                    <div className="item" key={index}>
                        <div className={selected === index ? "title bg-blue" : "title"} onClick={() => toggle(index)}>
                            <p>{ title } <span>- { company }</span></p>
                            <div className="flex flex-row items-center">
                                <p className="xs:hidden md:flex">{ duration }</p>
                                <Icon className="ml-4 transition-transform" icon="dashicons:arrow-down-alt2" />
                            </div>
                        </div>
                        <div className={selected === index ? "content show" : "content"}>
                        <div className="md:px-10 pt-8">
                            {description.map((descriptor, index) => <li className="mb-4" key={index}>{ descriptor }</li>)}
                        </div>
                        </div>
                    </div>
                    )
                })
                }
            </div>
        </motion.div>
    )
}

export default Experience