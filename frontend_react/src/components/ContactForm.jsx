import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import resume from '../constants/pdf';
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const form = useRef();


  const handleSubmit = () => {
    setLoading(true);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w5xw2zo', 'template_m4s7vr9', form.current, '2R10a0LGQgVE8NTwO')
      .then((result) => {
          console.log(result.text);
          setIsFormSubmitted(true);
          setLoading(false);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    {!isFormSubmitted ?
      <form id="contact-form" className="app__footer-form-container app__flex" ref={form} onSubmit={sendEmail}>
        <div className="app__footer-form app__flex">
          <div className="app__flex">
              <input className="p-text" type="text" placeholder="Your Name" name="user_name" />
          </div>
          <div className="app__flex">
              <input className="p-text" type="email" placeholder="Your Email" name="user_email" />
          </div>
          <textarea 
              className="p-text" 
              placeholder="Your Mesage"
              name="user_message" 
          />
          <div id="app__footer-form-btns">
            <button type="submit" value="Send" className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
            <a href={resume} className='p-text' download="Tucker Brady's Resume.pdf">
              <button type="button" className="p-text">Download Resume</button>
            </a>
          </div>
        </div>
      </form>
      : <div>
        <h3 className="head-text">Thank you for getting in touch</h3>
      </div>}
    </>
  );
};

export default ContactForm;