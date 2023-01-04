import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Header from '../components/Header';
import Card from '../components/ProjectCard';
import Footer from '../components/Footer';

// Add favicon
// Fix Portfolio V4 github link
// Add portfolio github card
// Only 4 cards show up on home page
// Animations
// View project buttons for projects without external links
// How should I include figma prototypes (if include at all)
// Responsiveness for tablets
// Email functionality
// hello@arianadaris.dev ?

const Home = ({ posts }) => {
  // Format project cards
  const cards = posts.map((data, index) => {
    var post = data.frontMatter;
    return <Card
      key={ index }
      title={ post.title }
      descr={ post.descr }
      github={ post.github }
      external={ post.external }
      image={ post.image }
      taglist={ post.tags }
      color={ post.color }
    />
  })

  return (
    <>
      <Head>
        <title>Ariana Daris - Portfolio</title>
        <meta name="description" content="Ariana Daris Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Header />
        {/* Introduction Section */}
        <section className="bg-[#FAFAFF] h-fit rounded-xl flex xs:flex-col md:flex-row">
          <div className="xs:w-full md:w-[55%] xs:pl-5 xs:pr-5 md:pl-20 md:pr-10 xs:py-5 md:py-0 flex flex-col space-y-4 md:justify-center">
            {/* Personal Image for Small Screensizes */}
            <div className="h-[50vw] w-[50vw] rounded-xl mb-6 overflow-hidden xs:flex md:hidden mx-auto ">
              <Image className="mt-[0vh] object-cover" src={require('../public/images/Headshot.jpg')} alt="Ariana Daris" />
            </div>
            <div className="mb-2 flex flex-col xs:text-center md:text-left">
              <h1>Hello, </h1>
              <h1>My name is Ariana.</h1>
            </div>
            <p>I am a <span className="text-black font-sanford">developer & designer</span> who creates engaging experiences for all users with empathy and inclusion in mind.</p>
            <p>I am a recent graduate from Arizona State University, majored in <span className="text-black font-sanford">Computer Science</span> with a concentration in <span className="text-black font-sanford">Software Engineering</span>.</p>
            <a className="flex items-center space-x-4 pt-6 underline hover:text-[#3C4FC0] w-fit xs:mx-auto md:mx-0" href='/ArianaRajewskiResume.pdf' download>
              <h3>View My Resume</h3>
            </a>
          </div>
          <div className="flex xs:w-full justify-center items-center md:w-[45%] px-5">
            {/* Personal Image for Medium Screensizes */}
            <div className="h-[25vw] w-[25vw] rounded-xl my-6 overflow-hidden xs:hidden md:flex">
              <Image className="mt-[-5vh] object-cover" src={require('../public/images/Headshot.jpg')} alt="Ariana Daris" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="grid xs:grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
          {/* Project Card */}
          { cards }
        </section>
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export const getStaticProps = async() => {
  var files = fs.readdirSync(path.join('public/projects'));
  files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));

  const data = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('public/projects', filename + "/index.mdx"), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split('.')[0]
    };
  });

  let posts = data.sort((a, b) => { return a.frontMatter.date - b.frontMatter.date });

  return {
    props: {
      posts
    }
  };
};

export default Home;