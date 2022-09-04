import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiFillEye } from 'react-icons/ai';
import { PortableText } from '@portabletext/react'

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './FeaturedArticles.scss';
const FeaturedArticles = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const query = `*[_type == "post" && isFeatured == true]`
    client.fetch(query)
        .then((data) => { 
            setPosts(data);
            console.log(data);
        })
        .catch(console.error) 
    }, []
  )
  
  return (
    <>
       <h2 className="head-text">Featured <span>Articles</span></h2>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__blog-featured"
      >
        {posts.map((post, index) => (
          <div className="app__blog-item app__flex" key={index}>
            <PortableText value={post.categories[0].title} />
            <div className="app__blog-img app__flex">
              <img src={urlFor(post.mainImage)} alt={post.title} />
              <motion.div
                whileHover={{opacity: [0, 1]}}
                transition={{ duration: 0.05, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__blog-hover app__flex"
              >
                <a href={`/blog/${post.slug.current}`}>
                <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.5 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__blog-content app__flex">
              <h4 className="bold-text">{post.title}</h4>
              <div className="p-text" style={{ marginTop: 10 }}>
                <PortableText value={post.blurb} />
              </div>          
            
              <div className="app__work-tag app__flex">
                <p className="p-text">{post.tags[0]}</p>
              </div>
            
            </div>

          </div>
        ))}
      </motion.div>      
    </>
  )
}

export default AppWrap(
  MotionWrap(FeaturedArticles, 'app__featured_articles') ,
  'FeaturedArticles',
  "app__graybg"
);