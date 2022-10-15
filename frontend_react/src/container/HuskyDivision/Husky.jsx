import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

import { AppWrap, MotionWrap } from '../../wrapper';
import EnlistForm from "../../components/EnlistForm";
import './Husky.scss';



const Husky = props => {
  const postUrl = 'https://gmail.us10.list-manage.com/subscribe/post';

  return (
    <div className="husky__form-container">
      <MailchimpSubscribe 
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <EnlistForm
              status={status} 
              message={message}
              onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </div>
  )
}

export default AppWrap(
  MotionWrap(Husky, 'app__husky'),
  'Husky',
  'app__graybg'
)