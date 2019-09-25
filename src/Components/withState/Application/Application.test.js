import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Application from './Application';

window.scrollTo = jest.fn();

it('renders without crashing', () => {
  window.scrollTo.mockClear();

  const props = {
    history: {
      location: {
        pathname: '/'
      }
    }
  };
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Application {...props} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
