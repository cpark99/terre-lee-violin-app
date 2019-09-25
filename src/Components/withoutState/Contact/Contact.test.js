import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';

window.scrollTo = jest.fn();

it('renders without crashing', () => {
  window.scrollTo.mockClear();

  const div = document.createElement('div');
  ReactDOM.render(<Contact />, div);
  ReactDOM.unmountComponentAtNode(div);
});
