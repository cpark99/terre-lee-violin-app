import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ScrollToTopOnMount from '../../withoutState/ScrollToTopOnMount/ScrollToTopOnMount';
import UserContext from '../../../context';
import AuthApiService from '../../../services/auth-api-service';
import TokenService from '../../../services/token-service';
import './Application.css';

export default function Application(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = 'Apply | Terre Lee';
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

  const context = useContext(UserContext);

  function handleLoginSuccess(payload) {
    const { history } = props;
    const destination = (props.history.location.state || {}).from || '/profile';
    context.setUserId(payload.user_id);
    history.push(destination);
  }

  function handleDemoLogin(ev) {
    ev.preventDefault();
    setError(null);
    let email = 'violin@demo.com';
    let password = 'password';

    AuthApiService.postLogin({
      email: email,
      password: password
    })
      .then(res => {
        email = '';
        password = '';
        TokenService.saveAuthToken(res.authToken);
        handleLoginSuccess(res.payload);
      })
      .catch(res => {
        setError(res.error);
      });
  }

  function handleRegistrationSuccess() {
    return props.history.push('/success');
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const { name, email, phone, message } = ev.target;

    setError(null);
    AuthApiService.postApplication({
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value
    })
      .then(user => {
        handleRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  }

  return (
    <section id="application" className="container form-page-container">
      <ScrollToTopOnMount />
      <h1 className="page-title">APPLY NOW</h1>
      <button onClick={handleDemoLogin} className="demo-login-button black-button">
        Demo
      </button>
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
            placeholder="888-888-8888"
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
