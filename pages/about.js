import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Expertise from '../components/About/Expertise';
import Experience from '../components/About/Experience';
import Contact from '../components/About/Contact';
import Dawn from '../components/Dawn';

import StarredPhrase from '../components/StarredPhrase';
import Socials from '../components/Socials';

const About = ({ posts }) => {
  return (
    <>
        {/* About Me */}
        <div className="md:animate-fir xs:animate-none md:opacity-0 xs:opacity-100 md:animation-delay-300 ">
          <StarredPhrase firstWord="About" secondWord="Me" />
        </div>

        <div className="md:grid md:grid-cols-5 md:gap-4 xs:mb-[-8vh] xs:mt-0 md:mt-6">
          <div className="col-span-3">
            <h1 className="md:animate-fir xs:animate-none md:opacity-0 xs:opacity-100 md:animation-delay-700">Hi, I&apos;m Ariana Daris!</h1>
            <p className="md:animate-fir xs:animate-none md:opacity-0 xs:opacity-100 md:animation-delay-1000 xs:mt-0 md:mt-4 xs:mb-0 md:mb-6">
              I&apos;m a senior at Arizona State University studying Computer Science with a concentration in Software Engineering. I am graduating in December of 2022 with my Bachelor&apos;s degree, and anticipate earning a Master&apos;s degree in Computer Science the following December.
            </p>
            <p className="md:animate-fir xs:animate-none md:opacity-0 xs:opacity-100 md:animation-delay-1000">
              Outside of school, I enjoy learning about front-end development and UX/UI design. I&apos;m a people person, and I love that I can use code to get to know people and create something beautiful with them! With front-end development, it&apos;s a gratifying feeling seeing how a few lines of code can make the biggest difference for someone else.
            </p>
          </div>
          {/* My Image */}
          <div className="col-span-2">
            <div className="w-fit mx-auto pt-2 pb-10 px-2 flex-col md:animate-appear xs:animate-none md:opacity-0 xs:opacity-100 md:animation-delay-1100 md:flex xs:hidden">
              <Image className="mx-auto border-[2px] border-[#3C3C3C] dark:border-white rounded-full p-1" height={350} layout="responsive" src={require('../public/images/personal/PersonalFrame.png')} alt="Ariana Daris" />
              <Dawn className="fill-[#4F4F4F] stroke-[#4F4F4F] dark:fill-white dark:stroke-white absolute right-[30vw] h-60 z-[-1]"/>
              <Dawn className="fill-[#4F4F4F] stroke-[#4F4F4F] dark:fill-white dark:stroke-white absolute right-[17vw] bottom-[17vw] h-60 z-[-1]"/>
              <div className="w-fit mx-auto mt-4 mb-0 p-3">
                <Socials />
              </div>
            </div>
          </div>
        </div>

        {/* Education, Specializations, Familiarity */}
        <div className="flex md:justify-between xs:flex-col md:flex-row md:mt-[12.5rem] xs:mt-20">
          <div className="md:w-1/3 xs:w-fit md:animate-fir xs:animate-none md:opacity-0 xs:opacity-100 md:animation-delay-1500">
            <p className="pt-0 uppercase opacity-75 md:mb-4 xs:mb-0">Education</p>
            <p className="pt-0 xs:mt-[-2.5vh] md:mt-0 leading-none">Computer Science, B.S.</p>
            <p className="pt-0 xs:mt-[-2.5vh] md:mt-3 text-foundersLightI md:text-20 xs:text-[4vw] leading-none">Arizona State University</p>
          </div>
          <div className="flex flex-1 md:mr-50 md:border-r-0.5 xs:border-t-0.5 xs:mb-10 md:mb-0 md:animate-fir xs:animate-none md:opacity-0 xs:opacity-100 md:animation-delay-1500 :mt-[-4vh] xs:mt-0"/>
          <div className="pt-0 md:animate-fir xs:animate-none md:opacity-0 xs:opacity-100 md:animation-delay-1700">
            <p className="pt-0 uppercase opacity-75 md:mb-4 xs:mb-0">Specialized In</p>
            <p className="pt-0 xs:mt-[-2.5vh] md:mt-0 leading-none">Software Development & Full-stack Development</p>
          </div>
          <div className="flex flex-1 md:mr-50 md:border-r-0.5 xs:border-t-0.5 xs:mb-10 md:mb-0 md:animate-fir xs:animate-none md:opacity-0 xs:opacity-100 md:animation-delay-1500 md:mt-[-4vh] xs:mt-0"/>
          <div className="pt-0 md:animate-fir xs:animate-none md:opacity-0 xs:opacity-100 md:animation-delay-2000">
            <p className="pt-0 uppercase opacity-75 md:mb-4 xs:mb-0">Familiar With</p>
            <p className="pt-0 xs:mt-[-2.5vh] md:mt-0 leading-none">Agile Scrum, APIs, GitHub, MongoDB, & MySQL</p>
          </div>
        </div>

        {/* My Expertise */}
        <Expertise />

        {/* My Experience */} 
        <Experience posts={posts} />

        {/* Contact Section */}
        <Contact />
    </>
  )
}

// Get jobs
export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('public/jobs'))

  const data = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('public/jobs', filename + "/index.mdx"), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  let posts = data.sort((a, b) => { return a.frontMatter.date - b.frontMatter.date});

  return {
    props: {
      posts
    }
  }
}

export default About;