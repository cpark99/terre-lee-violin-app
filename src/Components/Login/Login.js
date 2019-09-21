import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import './Login.css';

export default class Login extends Component {
  state = { error: null };

  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  // static contextType = UserContext;

  componentDidMount() {
    document.title = 'Student Login | Terre Lee';
  }

  // handleLoginSuccess = payload => {
  //   const { location, history } = this.props;
  //   const destination = (location.state || {}).from || '/profile';
  //   this.context.setUserId(payload.user_id);
  //   history.push(destination);
  // };

  // handleSubmitJwtAuth = ev => {
  //   ev.preventDefault();
  //   this.setState({ error: null });
  //   const { email, password } = ev.target;

  //   AuthApiService.postLogin({
  //     email: email.value,
  //     password: password.value
  //   })
  //     .then(res => {
  //       email.value = '';
  //       password.value = '';
  //       TokenService.saveAuthToken(res.authToken);
  //       this.handleLoginSuccess(res.payload);
  //     })
  //     .catch(res => {
  //       this.setState({ error: res.error });
  //     });
  // };

  render() {
    const { error } = this.state;
    return (
      <section id="login" className="container">
        <ScrollToTopOnMount />
        <h2>Login</h2>
        <div role="alert">{error && <p className="red-font">{error}</p>}</div>
        <form className="flex-column-center" onSubmit={this.handleSubmitJwtAuth}>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="jdoe@gmail.com" required />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" required />
          </div>
          <button id="login-form-button">Login</button>
        </form>
        <p>
          <span className="italic">New student?</span> <NavLink to={'/apply'}>Apply here</NavLink>
        </p>
      </section>
    );
  }
}
