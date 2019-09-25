import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';

window.scrollTo = jest.fn();

it('renders without crashing', () => {
  window.scrollTo.mockClear();

  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
