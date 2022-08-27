import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import './Header.scss';
import { images } from '../../constants';

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

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Welcome to the</p>
              <h1 className="head-text">MTN Outlaws</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Sometimes the train to success needs to be held up,</p>
            <p className="p-text">the mainstream needs to be dammed,</p>
            <p className="p-text">and the road of the majority needs to be bridged..</p>
            <p className="p-text">Be an Outlaw.</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/* <img src={images.profile} alt="profile_bg" /> */}
        <motion.img
          whileInView={{ scale: [0,1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.javascript, images.react, images.node].map((circle, index) => (
          <div className="circle-cpm app__flex" key={`circle${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'Home');