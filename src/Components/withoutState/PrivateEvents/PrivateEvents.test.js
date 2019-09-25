import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PrivateEvents from './PrivateEvents';

window.scrollTo = jest.fn();

it('renders without crashing', () => {
  const props = {
    location: {
      pathname: '/'
    }
  };
  const div = document.createElement('div');
  window.scrollTo.mockClear();

  ReactDOM.render(
    <BrowserRouter>
      <PrivateEvents {...props} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
