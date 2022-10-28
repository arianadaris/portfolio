import React from 'react';
import Image from 'next/image';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Contact from '../components/Home/Contact';

import StarredPhrase from '../components/StarredPhrase';
import OutlinedButton from '../components/OutlinedButton';
import Card from '../components/Card';


const Home = ({ posts }) => {
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
      tags={ post.tags }
    />;
  })

  const leftPosts = cards.filter((element, index) => { return index % 2 === 1 });
  const rightPosts = cards.filter((element, index) => { return index % 2 === 0 });

  return (
    <>
      {/* Impact Driven Phrase */}
      <div className="animate-fir animation-delay-1000 opacity-0">
        <StarredPhrase firstWord="Impact" secondWord="Driven" />
      </div>

      {/* Introduction */}
      <div className="flex items-center origin-left animate-fir opacity-0 animation-delay-1300">
        <h1 >Full-stack Developer</h1>
        <span className="p-1 mx-4 border-0.5 rounded-100">
          <Image width={85} layout="responsive" src={require('../public/images/personal/PersonalIcon.png')} alt="Ariana Daris" />
        </span>
        <h1>UX/UI Designer</h1>
      </div>
      <p className="pt-4 pb-12 animate-fir opacity-0 animation-delay-1500">
        I am a self-taught developer and designer based in the United States. I create beautiful and engaging experiences for all users with empathy and inclusion in mind.
      </p>

      {/* Project Cards */}
      <div className="grid grid-cols-2 gap-14">
        <div>
          <div className="mb-16 animate-fir animation-delay-2000 opacity-0">
            <OutlinedButton title="About Me" link="/about" />
          </div>
          <div className="opacity-0 animate-up animation-delay-2000">
            { leftPosts }
          </div>

        </div>
        <div>
          <div className="opacity-0 animate-up animation-delay-2000">
            { rightPosts }
          </div>
          <div className="float-right">
            <OutlinedButton title="View More Work" link="/work" delay='0.3'/>
          </div>
        </div>
      </div> 

      {/* Contact Section */}
      <Contact />
    </>
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