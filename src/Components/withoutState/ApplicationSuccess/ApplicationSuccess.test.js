import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApplicationSuccess from './ApplicationSuccess';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ApplicationSuccess />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
