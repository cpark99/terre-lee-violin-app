import config from '../config';

const ApplicationApiService = {
  postApplication(application) {
    return fetch(`${config.API_ENDPOINT}/applications`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(application)
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()));
  }
};

export default ApplicationApiService;
