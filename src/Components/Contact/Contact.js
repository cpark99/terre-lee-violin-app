import React, { useEffect } from 'react';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import phone from '../../img/phone-navy.png';
import email from '../../img/email.png';
import linkedin from '../../img/linkedin.png';
import facebook from '../../img/facebook.png';
import './Contact.css';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | Terre Lee';
  });

  return (
    <section id="contact" className="container">
      <ScrollToTopOnMount />
      <h1 className="page-title">CONTACT</h1>
      <div id="contact-info">
        <p>
          <a href="tel:+1-831-295-0911" className="flex-center-center">
            <img src={phone} className="phone-icon contact-icon" alt="navy telephone icon" />
            831.295.0911
          </a>
        </p>
        <p>
          <a href="mailto:tleeviolin@gmail.com" className="flex-center-center">
            <img src={email} className="email-icon contact-icon" alt="navy envelope icon" />
            tleeviolin@gmail.com
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/"
            className="flex-center-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} className="linkedin-icon contact-icon" alt="navy linkedin icon" />
            LinkedIn
          </a>
        </p>
        <p>
          <a
            href="https://www.facebook.com/"
            className="flex-center-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} className="facebook-icon contact-icon" alt="navy facebook icon" />
            Facebook
          </a>
        </p>
      </div>
      <form
        id="email-form"
        className="flex-column-center"
        action="mailto:cpwebdeveloper99@gmail.com?subject='Re: Violin (website) - contact email'"
        method="post"
        enctype="text/plain"
      >
        <div className="form-field">
          <label htmlFor="name">Name *</label>
          <input type="text" name="name" id="name" placeholder="Jane Doe" required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email *</label>
          <input type="email" name="email" id="email" placeholder="jdoe@gmail.com" required />
        </div>
        <div className="form-field">
          <label htmlFor="subject">Subject *</label>
          <input type="text" name="subject" id="subject" required />
        </div>
        <div className="form-field">
          <label htmlFor="message">Message *</label>
          <textarea type="text" name="message" id="message" required />
        </div>
        <button id="email-form-button" className="black-button">
          SUBMIT
        </button>
      </form>
    </section>
  );
}
