import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import BookingsDropdownList from './BookingsDropdownList';

it('renders without crashing', () => {
  const props = {
    location: {
      pathname: '/'
    }
  };
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <BookingsDropdownList {...props} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
