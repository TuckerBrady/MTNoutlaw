import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Podcast.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Podcast = () => {
  // const [podList, setPodList] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "about"]'
  //   client.fetch(query)
  //     .then((data) => setaboutList(data))
  // }, []);

  

  return (
    <>
      <h2 className="head-text">
        The Latest <span>MTN Outlaws Podcast</span> Episode
      </h2>
      <div className="app__podcasts">
        <motion.div
          whileInView={{ opacity: 1 }}
          className="app__podcast-item"
        >
          <iframe className="responsive-iframe" src="https://anchor.fm/tucker-al-brady/embed/episodes/Episode-5----Colorado-Sucks--2021-Hunting-Application-Strategy--and-LARPing-eps49v" height="200px" width="850px" frameborder="0" scrolling="no"></iframe>
        </motion.div>
      </div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__podcast-listen-squares"
      >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.05, type: 'tween' }}
            className="podcast-listen-on app__flex"
          >
            <a href="https://podcasts.apple.com/us/podcast/mtn-outlaw/id1540813137" target="blank">
              <img src={images.applePodcasts} alt="apple-podcasts" />
            </a>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.05, type: 'tween' }}
            className="podcast-listen-on app__flex"
          >
            <a href="https://open.spotify.com/show/70sqJb5Wt6BfUc8q69lWmJ" target="blank">
              <img src={images.spotifyPodcasts} alt="spotify-podcasts" />
            </a>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.05, type: 'tween' }}
            className="podcast-listen-on app__flex"
          >
            <a href="https://anchor.fm/mtnoutlaw" target="blank">
              <img src={images.anchorPodcasts} alt="anchor-podcasts" />
            </a>
          </motion.div>
      </motion.div>

      <div className="head-text">
        Subscribe and Leave a <span>5 Star</span> Review
      </div>

    </>
  )
}

export default AppWrap(
  MotionWrap(Podcast, 'app__podcast'),
  'Podcast',
  'app__whitebg'
)