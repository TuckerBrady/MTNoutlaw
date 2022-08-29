import React, { useState, useEffect } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Blog.scss';
const Blog = () => {

  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.fetch(
        `*[_type == "post"] {
          title,
          slug,
          body,
          mainImage
        }`
      ).then((data) => { setPosts(data); }) 
    }, 
  [])
  

  const handleBlogFilter = (item) => {

  }

  return (
    <>
      <h2 className="head-text">Featured <span>Articles</span></h2>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__blog-featured"
      >
        {posts.map((post, index) => (
          <div className="app__blog-item app__flex" key={index}>
            <div className="app__blog-img app__flex">
              <img src={urlFor(post.mainImage)} alt={post.title} />
              <motion.div
                whileHover={{opacity: [0, 1]}}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__blog-hover app__flex"
              >
                <a href={`/blog/${post.slug.current}`} target="_blank" rel="noreferrer">
                <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__blog-content app__flex">
              <h4 className="bold-text">{post.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{post.blurb}</p>
            
              <div className="app__blog-tag app__flex">
                {/* <p className="p-text">{post.categories[0]}</p> */}
              </div>
            
            </div>

          </div>
        ))}
      </motion.div>
    </>
  )
}
 
export default AppWrap(
  MotionWrap(Blog, 'app__blog') ,
  'Blog',
  "app__graybg"
);