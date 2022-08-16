import React, { useState } from 'react';
import { GiHamburger, GiArrowCluster } from 'react-icons/gi';
// import { motion } from "framer-motion";

import { images } from '../../constants';
import './Navbar.scss';
const Navbar = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt="logo" />
        </div>
        <ul className='app__navbar-links'>
            {['Home', 'About', 'Learn', 'Podcast', 'Shop', 'Contact'].map((item) => (
                <li className='app__flex p-text' key={`link-${item}`}>
                    <a href={`${item}`}>{item}</a>
                </li>
            ))}
        </ul>

        <div className=   'app__navbar-menu'>
            <GiHamburger onClick={() => setToggle(true)} />

            {toggle && (
                <div>
                    <GiArrowCluster onClick={() => setToggle(false)} />
                    <ul className='app__navbar-links'>
                        {['Home', 'About', 'Learn', 'Podcast', 'Shop', 'Contact'].map((item) => (
                            <li key={item}>
                                <a href={`${item}`} onClick={() => setToggle(false)}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </nav>
  );
}

export default Navbar;