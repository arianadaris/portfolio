import React from 'react';
import { Icon } from '@iconify/react';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import StarredPhrase from '../components/StarredPhrase';
import Card from '../components/Card';

import useWindowSize from '../hooks/useWindowSize';

const Work = ({ posts }) => {
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
  })

  const leftPosts = cards.filter((element, index) => { return index % 2 === 0 });
  const rightPosts = cards.filter((element, index) => { return index % 2 === 1 });

  return (
    <>
      {/* Work Introduction */}
      <div className="md:animate-fir xs:animate-none md:opacity-0 xs:opacity-100 md:animation-delay-500">
        <StarredPhrase firstWord="Selected" secondWord="Projects" />
      </div>

      {/* Project Cards */}
      { 
        size.width > 768 ? <div className="grid grid-cols-2 gap-14 mt-16">
        <div>
          <div className="md:animate-up xs:animate-none md:opacity-0 xs:opacity-100 md:animation-delay-500">
            { leftPosts }
          </div>
        </div>
        <div>
          <div className="md:animate-up xs:animate-none md:opacity-0 xs:opacity-100 md:animation-delay-500">
            { rightPosts }
          </div>
        </div>
      </div> : <div className="mt-10">{ cards }</div>
      }
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

export default Work;