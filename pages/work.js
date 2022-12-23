import React from 'react';
import Head from 'next/head';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Header from '../components/Header';
import Card from '../components/ProjectCard';
import Footer from '../components/Footer';

const Work = ({ posts }) => {
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
        <title>Ariana Daris - Work</title>
      </Head>
      <main>
        <Header />
        <section className="flex flex-col items-center space-x-10">
          <div className="flex flex-col space-y-4">
            <div className="flex xs:flex-col md:flex-row xs:justify-center md:justify-between items-center">
              <h1 className="text-black dark:text-white leading-10 pb-4">My Personal Projects</h1>
              <p className="text-black/50 dark:text-white/90">Here are some examples of what I do!</p>
            </div>
            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
              { cards }
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export const getStaticProps = async() => {
  var files = fs.readdirSync(path.join('public/projects'));
  files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));

  const data = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('public/projects', filename + '/index.mdx'), 'utf-8');
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

export default Work;

