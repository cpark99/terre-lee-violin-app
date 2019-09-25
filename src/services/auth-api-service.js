import config from '../config';
import TokenService from './token-service';

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()));
  },
  postApplication(application) {
    return fetch(`${config.API_ENDPOINT}/applications`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(application)
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()));
  },
  getUserId() {
    console.log('getUserId');
    return fetch(`${config.API_ENDPOINT}/auth`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'Content-Type': 'application/json'
      }
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()));
  }
};

export default AuthApiService;
