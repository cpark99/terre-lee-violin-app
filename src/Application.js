import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ScrollToTopOnMount from './ScrollToTopOnMount/ScrollToTopOnMount';
import './Application.css';

export default function Application(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  return (
    <section id="application" className="container">
      <ScrollToTopOnMount />
      <h1 className="page-title">APPLY NOW</h1>
      <form id="application-form" className="flex-column-center">
        <div class="form-field">
          <label for="name">Full Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Jane Doe"
            required
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div class="form-field">
          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="jdoe@gmail.com"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div class="form-field">
          <label for="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="(818)888-8888"
            required
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div class="form-field">
          <label for="text">Message:</label>
          <textarea
            type="text"
            name="text"
            id="text"
            value={message}
            onChange={handleMessageChange}
          />
        </div>
        <button id="sign-up-form-button">Submit</button>
      </form>
      <p>
        Already a student? <NavLink to="/login">Login</NavLink>
      </p>
      <p class="personal-information-notice privacy-notice">
        <span className="italic">*Personal information will NOT be shared with third-parties.</span>
      </p>
    </section>
  );
}
