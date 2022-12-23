import React from 'react';
import Head from 'next/head';
import { Icon } from '@iconify/react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Ariana Daris - Contact</title>
      </Head>
      <main className="overflow-y-hidden h-screen">
        <Header />
        <section className="flex xs:flex-col md:flex-row xs:space-x-0 md:space-x-10 h-fit xs:pt-10 md:pt-40">
          <div className="flex flex-col space-y-4 xs:w-full md:w-[50%]">
            <h1 className="text-black dark:text-white">Let's get in touch!</h1>
            <p className="dark:text-white/75 pb-10">I am currently looking for freelance opportunities and would love to be a part of your next project! Feel free to say hi!</p>
            <a className="xs:hidden md:flex hover:text-black text-black dark:text-white hover:underline" href="mailto:arianarajewski@gmail.com">arianarajewski@gmail.com</a>
            <div className="space-x-6 xs:hidden md:flex">
              <Icon className="hover:text-[#3C4FC0] hover:cursor-pointer text-black dark:text-white" icon="akar-icons:dribbble-fill" />
              <Icon className="hover:text-[#3C4FC0] hover:cursor-pointer text-black dark:text-white" icon="akar-icons:linkedin-box-fill" />
              <Icon className="hover:text-[#3C4FC0] hover:cursor-pointer text-black dark:text-white" icon="akar-icons:github-fill" />
            </div>
          </div>
          <div className="flex flex-col space-y-4 xs:w-full md:w-[50%] xs:mt-0 md:mt-0">
            <div className="flex space-x-4">
              <input type='text' placeholder='Your Name' />
              <input type='email' placeholder='Email Address' />
            </div>
            <textarea type='text' placeholder='Your Message'></textarea>
            <input type='submit' id='submit' value="Send Message" />
          </div>
          <div className="xs:flex md:hidden justify-center mt-16">
            <Footer />
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;