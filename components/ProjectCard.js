import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const ProjectCard = ({ title, descr, github, external, image, taglist = [], color }) => {
    const href = external || github;
    const hasLink = Boolean(href);

    return (
    <article
        className={`group relative p-10 rounded-lg flex flex-col space-y-5 ${hasLink
            ? 'transition-transform duration-200 ease-out hover:scale-[1.03] focus-within:scale-[1.03] active:scale-[0.99] motion-reduce:transition-none motion-reduce:transform-none'
            : ''}`}
        style={{ backgroundColor: color }}
    >
        {/* The title text names the link, so the image is decorative. */}
        { image && <Image className="mx-auto pb-6" src={ image } alt="" width={300} height={300} /> }

        <div className="flex space-x-4 items-center">
            <h2>
                { hasLink ? (
                    <a
                        href={ href }
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-sm focus:outline-none after:absolute after:inset-0 after:rounded-lg focus-visible:after:ring-2 focus-visible:after:ring-black focus-visible:after:ring-offset-2"
                    >
                        { title }
                        <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                ) : title }
            </h2>
            { github && (
                <a
                    href={ github }
                    target="_blank"
                    rel="noreferrer"
                    aria-label={ `${title} on GitHub (opens in a new tab)` }
                    className="relative z-10 inline-flex items-center justify-center min-w-[44px] min-h-[44px] -m-2 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                >
                    <Icon icon="akar-icons:github-fill" aria-hidden="true" />
                </a>
            ) }
        </div>

        <p>{ descr }</p>

        { taglist.length > 0 && (
            <ul className="flex flex-wrap gap-x-4 gap-y-1" aria-label="Technologies">
                { taglist.map((tag) => (
                    <li key={ tag } className="text-black/70 text-base">{ tag }</li>
                )) }
            </ul>
        ) }

        { hasLink && (
            <div className="flex items-center space-x-4 group-hover:underline group-focus-within:underline" aria-hidden="true">
                <span className="font-avenir">View Project</span>
                <Icon
                    icon="bi:arrow-right"
                    className="transition-transform duration-200 ease-out group-hover:translate-x-1 group-focus-within:translate-x-1 motion-reduce:transition-none motion-reduce:transform-none"
                />
            </div>
        ) }
    </article>
    );
};

export default ProjectCard;
