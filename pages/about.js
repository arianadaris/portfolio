import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Icon } from '@iconify/react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Head>
        <title>Ariana Daris - About</title>
      </Head>
      <main>
        <Header />
        {/* Introduction Section */}
        <section className="h-fit flex xs:flex-col md:flex-row xs:space-x-0 md:space-x-10">
          <div className="xs:w-full md:w-[55%] flex flex-col space-y-4">
            {/* Personal Image for Mobile */}
            <div className="h-[50vw] w-[50vw] rounded-xl mb-6 overflow-hidden xs:flex md:hidden mx-auto">
              <Image className="mt-[0vh] object-cover" src={require('../public/images/Headshot.jpg')} alt="Ariana Daris" />
            </div>
            <h1 className="text-black dark:text-white leading-10">Hello! I'm Ariana<span className="xs:hidden md:inline"> Daris</span>.<br></br>I live in Phoenix, AZ, where I create beautiful digital experiences.</h1>
            {/* <p className="text-black/70 dark:text-white/70 pt-4">I am a full-stack developer and UX/UI designer who is passionate about the positive impact a thoughtful design can have on a user, and product. I create designs that are <span className="text-black dark:text-white font-sanford">engaging and accesible</span> to all users.</p> */}
            <p className="text-black/70 dark:text-white/70">During my freshman year at college, I was introduced to Java. I created a chemistry calculator to get me through repetitive and time-consuming science problems, and I fell in love with the idea of <span className="text-black dark:text-white font-sanford">using code to make life easier.</span> </p>
            <p className="text-black/70 dark:text-white/70">I had the opportunity to take a Human Computer Interactions class while in college, which introduced me to fundamental principles and laws of UX/UI design. This sparked my interested in <span className="text-black dark:text-white font-sanford">front-end development</span>, and I learned how to use Figma to create wireframes and prototypes for project interfaces.</p>
            <p className="text-black/70 dark:text-white/70">Recently, I worked with a team of several talented developers and graphic designers to create a mobile application called Etherea. This experience helped me gain familiarity with working in an <span className="text-black dark:text-white font-sanford">Agile Scrum</span> environment,  maintaining a <span className="text-black dark:text-white font-sanford">GitHub repository using Git</span>, and <span className="text-black dark:text-white font-sanford">managing databases</span>. Through other personal projects, I have also worked with <span className="text-black dark:text-white font-sanford">creating and calling APIs</span>.</p>
            <p className="text-black dark:text-white">Interested in working on a project together? <span className="text-[#1F1FFF] dark:text-[#A5C3F3] hover:underline hover:cursor-pointer">Let's get in touch!</span></p>
          </div>
          {/* Information */}
          <div className="xs:w-full md:w-[45%] flex flex-col space-y-4">
            {/* Personal Image */}
            <div className="h-[25vw] w-[25vw] rounded-xl mb-6 overflow-hidden xs:hidden md:flex">
              <Image className="mt-[-5vh] object-cover" src={require('../public/images/Headshot.jpg')} alt="Ariana Daris" />
            </div>
            {/* Line Break for Mobile Only*/}
            <div className="border-b-[0.5px] w-full dark:border-white/20 border-black/20 py-2 xs:flex md:hidden"></div>
            {/* Programming Languages */}
            <div className="flex space-x-4 xs:pt-2 md:pt-0">
              <Icon className="text-black/70 dark:text-white/70 w-6 h-6" icon='quill:desktop' />
              <p className="text-black/80 dark:text-white/80">JavaScript, HTML/CSS, Python, C# .NET Core, C++, Java</p>
            </div>
            <div className="flex space-x-4">
              <Icon className="text-black/70 dark:text-white/70 w-6 h-6" icon='mdi:react' />
              <p className="text-black/80 dark:text-white/80">ReactJS, React Native, NextJS, Node.JS, TailwindCSS</p>
            </div>
            <div className="flex space-x-4">
              <Icon className="text-black/70 dark:text-white/70 w-6 h-6" icon='mdi:microsoft-visual-studio-code' />
              <p className="text-black/80 dark:text-white/80">Visual Studio Code, Figma, Adobe XD</p>
            </div>
            <div className="flex space-x-4">
              <Icon className="text-black/70 dark:text-white/70 w-6 h-6" icon='mdi:database' />
              <p className="text-black/80 dark:text-white/80">PostgreSQL, MySQL, Firebase, MongoDB</p>
            </div>
            {/* Line Break */}
            <div className="border-b-[0.5px] w-full dark:border-white/20 border-black/20 py-2"></div>
            <div className="flex space-x-4 pt-2">
              <Icon className="text-black/70 dark:text-white/70 w-6 h-6" icon='ri:book-fill' />
              <p className="text-black/80 dark:text-white/80">B.S. Computer Science, Arizona State University</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default About;