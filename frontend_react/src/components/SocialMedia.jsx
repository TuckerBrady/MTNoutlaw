import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
  return (
      <div className="app__social">
        <p className="p-text"><span>Connect</span> With Me</p>
        <div className="app__social-icon-container">
          <a href="https://www.linkedin.com/in/tucker-a-brady/" target="_blank" rel="noreferrer">
            <div>    
                  <BsLinkedin />
            </div>
          </a>
          <a href="https://www.instagram.com/tucker_al/" target="_blank" rel="noreferrer">
            <div>
                  <BsInstagram />
            </div>
          </a>
          <a href="https://www.facebook.com/tucker.a.brady" target="_blank" rel="noreferrer">
            <div>
                  <FaFacebook />
            </div>
          </a>
        </div>
      </div>
  )
}

export default SocialMedia