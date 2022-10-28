import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { Disclosure, Transition } from '@headlessui/react';

const JobCard = (props) => {
    const { date, title, company, duration, description } = props;

    const createDescriptor = (descriptor) => {
        return <li className="mb-2">{ descriptor }</li>;
    }

    const descr = description.map((descriptor) => createDescriptor(descriptor));

    return (
        <Disclosure>
            {({ open }) => (
            <>
                <Disclosure.Button className={open ? 'flex flex-row justify-between w-5/6 bg-blue px-10 py-4 mb-2 rounded-100 mx-auto transition-[margin] duration-1000 hover:bg-blue dark:text-slate-800' : 'flex flex-row justify-between w-5/6 bg-neutral-200 px-10 py-4 mb-2 rounded-100 mx-auto transition-[margin] duration-1000 delay-500 hover:bg-blue dark:text-slate-800'}>
                    <p>{ title } <span>- { company }</span></p>
                    <div className="flex flex-row items-center">
                        <p>{ duration }</p>
                        <Icon className={open ? "ml-4 rotate-180 transition-transform" : "ml-4 transition-transform"} icon="dashicons:arrow-down-alt2" />
                    </div>
                </Disclosure.Button>
                <Transition
                    show={open}
                    enter="transition duration-300 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-300 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-300 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <Disclosure.Panel className="w-5/6 mx-auto px-10" static>
                        { descr }
                    </Disclosure.Panel>
                </Transition>
            </>
            )}
        </Disclosure>
  )
}

export default JobCard;