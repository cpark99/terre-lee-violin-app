import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../context';
import './Login.css';

export default class Login extends Component {
  state = { error: null };

  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  static contextType = UserContext;

  componentDidMount() {
    document.title = 'Student Login | Terre Lee';
  }

  componentWillUnmount() {
    document.title = 'Terre Lee Violin';
  }

  handleLoginSuccess = payload => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/profile';
    this.context.setUserId(payload.user_id);
    history.push(destination);
  };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { email, password } = ev.target;

    AuthApiService.postLogin({
      email: email.value,
      password: password.value
    })
      .then(res => {
        email.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        this.handleLoginSuccess(res.payload);
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <section id="login" className="container form-page-container">
        <ScrollToTopOnMount />
        <h2>Login</h2>
        <div role="alert">{error && <p className="red-font">{error}</p>}</div>
        <form
          id="login-form"
          className="flex-column-center form-page"
          onSubmit={this.handleSubmitJwtAuth}
        >
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="jdoe@gmail.com" required />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" required />
          </div>
          <button id="login-form-button" type="submit">
            LOGIN
          </button>
        </form>
        <p>
          New student? <NavLink to={'/apply'}>Apply</NavLink> here
        </p>
      </section>
    );
  }
}
