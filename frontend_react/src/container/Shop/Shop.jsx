import React from 'react'

import { AppWrap, MotionWrap } from '../../wrapper';
import './Shop.scss';
const Shop = () => {
  return (
    <div>Shop</div>
  )
}

export default AppWrap(
  MotionWrap(Shop, 'app__shop'),
  'Shop',
  'app__graybg'
)