import config from '../config';
import TokenService from './token-service';

const UserApiService = {
  getUser(userId) {
    console.log('userId: ' + userId);
    // ** NEED TO FIX **
    return fetch(`${config.API_ENDPOINT}/users/1`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()));
  }
};

export default UserApiService;
