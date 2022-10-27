
import Image from 'next/image';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import StarredPhrase from '../components/StarredPhrase';
import OutlinedButton from '../components/OutlinedButton';
import Card from '../components/Card';

const Home = ({ posts }) => {
  // .filter((element,index) => { return index % 2 === 1})

  return (
    <div>
      <span className="flex items-center">
        <StarredPhrase firstWord="Impact" secondWord="Driven" />
        <span className="w-3/4 border-b-1" />
      </span>

      <div className="flex items-center py-3">
        <h1>Fullstack Developer</h1>
        <span className="p-1 mx-4 border-0.5 rounded-100 bg-red">
          <Image width={85} layout="responsive" src={require('../public/images/personal/PersonalIcon.png')} alt="Ariana Daris" />
        </span>
        <h1>UX/UI Designer</h1>
      </div>
      <p className="py-4">
        I am a self-taught developer and designer based in the United States. I create beautiful and engaging experiences for all users with empathy and inclusion in mind.
      </p>
      <OutlinedButton title="About Me" link="/about" />
      {posts.map((post, index) => (
      <Card 
        key={ index } 
        num={ post.frontMatter.date }
        color={ post.frontMatter.color }
        projectTitle={ post.frontMatter.title }
        cover={ post.frontMatter.cover }
        tags={ post.frontMatter.tags }
      />
      ))}
    </div>
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

  var posts = data.sort((a, b) => (a.date > b.date) ? 1 : -1);


  return {
    props: {
      posts
    }
  }
}

export default Home;