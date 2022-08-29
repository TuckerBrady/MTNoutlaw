import React from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
import { SocialMedia } from '../../components';
import ContactForm from '../../components/ContactForm';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <h2 className="head-text">Contact the <span>MTN Outlaws</span></h2>
      <ContactForm />
      <div className="copyright">
        <SocialMedia />
        <div>
          <p className="p-text">© 2022 <span>MTN Outlaw</span></p>
          <p className="p-text">All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'Contact',
  'app__whitebg'
)