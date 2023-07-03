import React from 'react'
import ContactForm from './contactform';
import './contact.css';

const Contact = () => {
  return (
    <div>
      <div className='contactimg'>
        <img src="https://hekahealthyyou.com/assets/image/conatctus-banner.png" alt="" style={{width: "600px", marginLeft:"450px"}} />
        <div className='cform'>
        <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default Contact;
