import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const JobCard = (props) => {
    const { date, title, company, duration, html } = props;
    const [ open, isOpen ] = useState(false);

    return (
        <div className="flex flex-col mb-10">
            <div className="w-5/6 bg-green mx-auto rounded-100 text-black px-12 py-8 hover:cursor-pointer flex justify-between hover:scale-105 transition" onClick={() => isOpen(true)}>
                <p>{ title } - <span className="uppercase opacity-75 text-18">{ company }</span></p>
                <div className="flex space-x-6">
                    <p>{duration}</p>
                    <Icon icon="bi:arrow-down"/>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>

  )
}

export default JobCard;