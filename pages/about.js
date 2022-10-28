import React from 'react';
import Image from 'next/image';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Expertise from '../components/About/Expertise';
import Contact from '../components/About/Contact';

import StarredPhrase from '../components/StarredPhrase';
import Socials from '../components/Socials';
import Card from '../components/About/JobCard';
import DevCircle from '../public/images/DevCircle.svg';

const about = ({ posts }) => {
  // Format job cards
  const cards = posts.map( (data, index ) => {
    const { frontMatter } = data;
    const { date, title, company, duration, description } = frontMatter; 
    return <Card 
      key={ index }
      date={ date }
      title={ title }
      company={ company }
      duration={ duration }
      description ={ description }
    />
  });
  //test

  return (
    <>
        {/* About Me */}
        <div className="animate-fir animation-delay-300 opacity-0">
          <StarredPhrase firstWord="About" secondWord="Me" />
        </div>

        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3">
            <h1 className="animate-fir animation-delay-700 opacity-0">Hi, I'm Ariana Daris!</h1>
            <p className="animate-fir animation-delay-1000 opacity-0">
              I’m a senior at Arizona State University studying Computer Science with a concentration in Software Engineering. I am graduating in December of 2022 with my Bachelor’s degree, and anticipate earning a Master’s degree in Computer Science the following December.
            </p>
            <p className="mt-4 animate-fir animation-delay-1000 opacity-0">
              Outside of school, I enjoy learning about front-end development and UX/UI design. I’m a people person, and I love that I can use code to get to know people and create something beautiful with them! With front-end development, it’s a gratifying feeling seeing how a few lines of code can make the biggest difference for someone else.
            </p>
          </div>
          <div className="col-span-2">
            <div className="w-fit mx-auto p-2 pb-10 border-0.5 rounded-tl-full rounded-tr-full flex-col animate-appear animation-delay-1100 opacity-0">
              <Image className="mx-auto" height={350} layout="responsive" src={require('../public/images/personal/PersonalFrame.png')} alt="Ariana Daris" />
              <div className="w-fit mx-auto mt-4 mb-0 p-3">
                <Socials />
              </div>
            </div>
          </div>
        </div>

        {/* Education, Specializations, Familiarity */}
        <div className="flex justify-between mt-20">
          <div className="w-1/3 animate-fir animation-delay-1500 opacity-0">
            <p className="uppercase opacity-75 mb-4">Education</p>
            <p className="leading-none">Computer Science, B.S.</p>
            <p className="text-foundersLightI text-20 leading-none">Arizona State University</p>
          </div>
          <div className="flex flex-1 mr-50 border-r-0.5 animate-fir animation-delay-1500 opacity-0"/>
          <div className="animate-fir animation-delay-1700 opacity-0">
            <p className="uppercase opacity-75 mb-4">Specialized In</p>
            <p className="leading-none">Software Development & Full-stack Development</p>
          </div>
          <div className="flex flex-1 mr-50 border-r-0.5 animate-fir animation-delay-1800 opacity-0"/>
          <div className="animate-fir animation-delay-2000 opacity-0">
            <p className="uppercase opacity-75 mb-4">Familiar With</p>
            <p className="leading-none">Agile Scrum, APIs, GitHub, MongoDB, & MySQL</p>
          </div>
        </div>

        {/* My Expertise */}
        <Expertise />

        {/* My Experience */}
        <StarredPhrase firstWord="My" secondWord="Experience" />
        <p className="my-8">While completing my ungraduate degree, I have had the opportunity to work for amazing tech companies which have inspired me in varous ways to continue learning about software development.</p>

        
        {/* Job Cards */}   
        <div className="">
          { cards }
        </div>


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

export default about;