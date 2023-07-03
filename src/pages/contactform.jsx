import React, { useState } from 'react';
import '../pages/aboutus/about.css';


function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your desired action with the form data
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Message:', message);

    // Reset the form
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className='contactform'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br/><br/>

        <label htmlFor="phone">Phone No.:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        /><br/><br/>

        <label htmlFor="message">Message:</label><br/>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="5"
          cols="30"
          required
        ></textarea><br/>
         <div className='button'>
        <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
