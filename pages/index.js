import React from 'react';
import Image from 'next/image';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import StarredPhrase from '../components/StarredPhrase';
import OutlinedButton from '../components/OutlinedButton';
import Card from '../components/Card';
import EmailButton from '../components/EmailButton';

const Home = ({ posts }) => {
  const symbol = "0x1F44B"; // waving hand emoji

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
      <StarredPhrase firstWord="Impact" secondWord="Driven" />

      {/* Introduction */}
      <div className="flex items-center origin-left animate-fir opacity-0 animation-delay-400">
        <h1 >Fullstack Developer</h1>
        <span className="p-1 mx-4 border-0.5 rounded-100 bg-red">
          <Image width={85} layout="responsive" src={require('../public/images/personal/PersonalIcon.png')} alt="Ariana Daris" />
        </span>
        <h1>UX/UI Designer</h1>
      </div>
      <p className="pt-4 pb-12 animate-fir opacity-0 animation-delay-400">
        I am a self-taught developer and designer based in the United States. I create beautiful and engaging experiences for all users with empathy and inclusion in mind.
      </p>

      {/* Project Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="mb-16">
            <OutlinedButton title="About Me" link="/about" />
          </div>
          { leftPosts }
        </div>
        <div>
          { rightPosts }
          <div className="float-right">
            <OutlinedButton title="View More Work" link="/work" />
          </div>
        </div>
      </div> 

      {/* Contact Section */}
      <StarredPhrase firstWord="Contact" secondWord="Me" />
      <h1 className="py-6">Let's Get In Touch!</h1>
      <p>Whether you’re just saying <span role="img" aria-label="Wave">{String.fromCodePoint(symbol)}</span>, or you’re looking to start a new project, feel free to send me a message! Currently, I am open to remote freelancing work.</p>
      <EmailButton />
    </>
  )
}

// Get projects
export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('public/content'))

  const data = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('public/content', filename + "/index.mdx"), 'utf-8')
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