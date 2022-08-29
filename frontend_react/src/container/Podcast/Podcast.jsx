import React from 'react'

import { AppWrap, MotionWrap } from '../../wrapper';
import './Podcast.scss';
const Podcast = () => {
  return (
    <div>Podcast</div>
  )
}

export default AppWrap(
  MotionWrap(Podcast, 'app__podcast'),
  'Podcast',
  'app__whitebg'
)