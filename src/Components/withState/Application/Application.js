import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ScrollToTopOnMount from '../../withoutState/ScrollToTopOnMount/ScrollToTopOnMount';
import ApplicationApiService from '../../../services/application-api-service';
import './Application.css';

export default function Application(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = 'Apply | Terre Lee';
    return () => {
      document.title = 'Terre Lee Violin';
    };
  });

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

  function handleRegistrationSuccess() {
    return props.history.push('/success');
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const { name, email, phone, message } = ev.target;

    setError(null);
    ApplicationApiService.postApplication({
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value
    })
      .then(user => {
        handleRegistrationSuccess();
      })
      .catch(res => {
        setError(res.error);
      });
  }

  return (
    <section id="application" className="container form-page-container">
      <ScrollToTopOnMount />
      <h1 className="page-title">APPLY NOW</h1>
      <p>
        Interested? <NavLink to="/new-students">Click to learn more</NavLink>
      </p>
      <div role="alert">{error && <p className="red-font">{error}</p>}</div>
      <form id="application-form" className="flex-column-center form-page" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Full Name *</label>
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
        <div className="form-field">
          <label htmlFor="email">Email *</label>
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
        <div className="form-field">
          <label htmlFor="phone">Phone *</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="XXXXXXXXXX"
            pattern="[0-9]{10}"
            required
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            id="message"
            value={message}
            onChange={handleMessageChange}
          />
        </div>
        <button id="application-form-button">SUBMIT</button>
      </form>
      <p>
        Already a student? <NavLink to="/login">Login</NavLink>
      </p>
      <p className="personal-information-notice privacy-notice">
        <span className="italic">*Personal information will NOT be shared with third-parties.</span>
      </p>
    </section>
  );
}
