import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './FeaturedArticles.scss';
const FeaturedArticles = () => {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = `*[_type == "post"]`
    client.fetch(query)
        .then((data) => { 
            setPosts(data); 
        }) 
    }, [])
  
    const featuredPost = posts[currentIndex];

    const handleClick = (index) => {
        setCurrentIndex(index);
    }

  return (
    <>
        <h2 className="head-text">Featured <span>Articles</span>: {posts.length}</h2>
        {posts.length && (
            <>
                <div className="app__work-portfolio">
                {posts.map((post, index) => (
                    <div className="app__testimonial-item app__flex" key={index}>
                        <img src={urlFor(post.mainImage)} alt={post.title} />
                    </div>
                ))}
                </div>
            </>
        )}
      
    </>
  )
}
 
export default AppWrap(
  MotionWrap(FeaturedArticles, 'app__featured_articles') ,
  'FeaturedArticles',
  "app__graybg"
);