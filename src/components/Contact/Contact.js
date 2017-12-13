import React, { Component } from 'react';
import './Contact.css';


class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        
        <div className="contact-container">
        <h1 className='contact-title'>Contact</h1>
        <div className="contact-line"></div>
          <form action="https://formspree.io/hartman.william@gmail.com" method="POST" className='contact-form' >
            <input placeholder='Name' type="text" name="name" className='contact-name' />
            <input placeholder='Email' type="email" name="_replyto" className='contact-email' />
            <input placeholder='Subject' type="subject" name="_subject" className='contact-subject' />
            <textarea placeholder='Message' type="message" name="message" className='contact-message' />
            <input type="submit" value="Send Message" className='contact-send' />
            <input type="hidden" name="_next" value="williamhartman.com" />
          </form>
        </div>
      </div>
    );
  }
}
 
export default Contact;
