import React from 'react';
import Image from 'next/image';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Contact from '../components/Home/Contact';

import StarredPhrase from '../components/StarredPhrase';
import OutlinedButton from '../components/OutlinedButton';
import Card from '../components/Card';

import useWindowSize from '../hooks/useWindowSize';


const Home = ({ posts }) => {
  const size = useWindowSize();

  // Format project cards
  const cards = posts.map( (data, index) => {
    var post = data.frontMatter;
    return <Card 
      key={ index } 
      num={ post.date }
      color={ post.color }
      projectTitle={ post.title }
      cover={ post.cover }
      github={ post.github }
      external={ post.external }
      tags={ post.tags }
    />;
  });

  // If device size width >= 768px
  const leftPosts = cards.filter((element, index) => { return index % 2 === 0 });
  const rightPosts = cards.filter((element, index) => { return index % 2 === 1 });

  return (
    <div className="w-inherit">
      {/* Impact Driven Phrase */}
      <div className="md:animate-fir xs:animate-none md:opacity-0 xs:opacity-100 animation-delay-1000">
        <StarredPhrase firstWord="Impact" secondWord="Driven" />
      </div>

      {/* Introduction */}
      <div className="flex items-center origin-left md:animate-fir xs:animate-none md:opacity-0 xs:opacity-100 animation-delay-1300 xs:flex-wrap md:flex-nowrap">
        <h1>Full-stack Developer</h1>
        <span className="p-1 md:mx-4 xs:mx-2 border-0.5 rounded-100">
          <Image className="personalIcon" layout="responsive" src={require('../public/images/personal/PersonalIcon.png')} alt="Ariana Daris" />
        </span>
        <h1>UX/UI Designer</h1>
      </div>
      <div className="grid md:grid-cols-4 xs:grid-cols-1 md:animate-fir xs:animate-none md:opacity-0 xs:opacity-100 animation-delay-1500 mb-10">
        <p className="col-span-3 xs:text-[5vw] md:text-24 md:mt-6">
          I am a creative developer and designer based in the United States. I create beautiful and engaging experiences for all users with empathy and inclusion in mind.
        </p>
        <div className="flex self-center md:ml-auto md:mr-0 xs:mx-auto md:mt-16">
          <OutlinedButton title="About Me" link='/about' />
        </div>
      </div>


      {/* Project Cards */}

      { size.width > 768 ? <div className="grid md:grid-cols-2 md:gap-5 xs:grid-cols-1 w-inherit border-red-50 border-x-1">
        <div className="md:animate-up xs:animate-none md:opacity-0 xs:opacity-100 animation-delay-1000">
            { leftPosts.slice(0, 2) }
          </div>
        <div className="md:animate-up xs:animate-none md:opacity-0 xs:opacity-100 animation-delay-1000">
            { rightPosts.slice(0, 2) }
        </div>
      </div> : <div>{ cards.slice(0, 4) }</div>}
      {/* <div className="flex flex-row justify-center mt-[-5vh] mb-10">
        <OutlinedButton title="View More Work" link="/work" delay='0.3'/> 
      </div> */}

      {/* Contact Section */}
      <Contact />
    </div>
  )
}

// Get projects
export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('public/projects'))

  const data = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('public/projects', filename + "/index.mdx"), 'utf-8')
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

export default Home;