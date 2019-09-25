import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import WhatWeDo from './WhatWeDo';

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
      <WhatWeDo {...props} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
