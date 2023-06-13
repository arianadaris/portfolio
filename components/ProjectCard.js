import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const ProjectCard = ({ title, descr, github, external, image, taglist, color }) => {
    const openLink = () => {
        if(typeof(window) != undefined)
            external ? window.open(external) : window.open(github);
    };

    const createTag = (tagName) => {
        return <p className="text-black/40 text-base w-fit">{ tagName }</p>
    }

    const tags = taglist.map((tag) => createTag(tag));
    
    return (
    <div className="p-10 rounded-lg" style={{backgroundColor: color}}>
        <a href={ external ? external : github } target="_blank" rel="noreferrer">
            <div className="flex flex-col hover:cursor-pointer hover:scale-[103%] space-y-5">
                <Image className="mx-auto pb-6" src={ image } alt={ title } width={300} height={300} />
                <div className="flex space-x-4 items-center">
                    <h2>{ title }</h2>
                    <a href={ github } target="_blank" rel='noreferrer'><Icon className="z-1000" icon="akar-icons:github-fill" /></a>
                </div>
                <div className={ tags.length < 5 ? "grid grid-flow-col auto-cols-auto grid-rows-1" : "grid grid-flow-col auto-cols-auto grid-rows-2" }>
                    { tags }
                </div>
                <p>{ descr }</p>
                <div className='flex items-center space-x-4 hover:underline'>
                    <h3>View Project</h3>
                    <Icon icon="bi:arrow-right" className="animate-slide" />
                </div>
            </div>
        </a>
    </div>
    );
};

export default ProjectCard;