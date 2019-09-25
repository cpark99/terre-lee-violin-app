import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SuzukiMethod from './SuzukiMethod';

window.scrollTo = jest.fn();

it('renders without crashing', () => {
  window.scrollTo.mockClear();

  const props = {
    location: {
      pathname: '/'
    }
  };
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SuzukiMethod {...props} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
