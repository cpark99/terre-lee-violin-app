import React, { useEffect,useState } from 'react';
import emailjs from 'emailjs-com';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import phone from '../../../img/phone-navy.png';
import email from '../../../img/email.png';
import linkedin from '../../../img/linkedin.png';
import facebook from '../../../img/facebook.png';
import './Contact.css';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | Terre Lee';
    return () => {
      document.title = 'Terre Lee Violin';
    };
  });


  const [fields, setFields] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });


  function handleInputChange(e) {
    const { name, value } = e.target;

    setFields({
      ...fields,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        event.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          setFields({
            name: '',
            email: '',
            subject: '',
            message: '',
          })

        },
        (error) => {
          setFields({
            name: '',
            email: '',
            subject: '',
            message: '',
          })

        }
      );
  }

  return (
    <section id="contact" className="container flex-responsive-landscape">
      <ScrollToTopOnMount />
      <div id="contact-information-container">
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
      </div>
      <form
        id="email-form"
        className="flex-column-center"
        method="post"
        encType="text/plain"

        onSubmit={handleSubmit}
      >
        <div className="form-field">
          <label htmlFor="name">Name *</label>
          <input type="text" name="name" id="name" value={fields.name} onChange={handleInputChange} placeholder="Jane Doe" required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email *</label>
          <input type="email" name="email" id="email" value={fields.email} onChange={handleInputChange} placeholder="jdoe@gmail.com" required />
        </div>
        <div className="form-field">
          <label htmlFor="subject">Subject *</label>
          <input type="text" name="subject" id="subject" value={fields.subject} onChange={handleInputChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="message">Message *</label>
          <textarea type="text" name="message" id="message" value={fields.message} onChange={handleInputChange} required />
        </div>
        <button id="email-form-button" className="black-button">
          SUBMIT
        </button>
      </form>
    </section>
  );
}
