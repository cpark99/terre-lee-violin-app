import React from 'react';
import ReactDOM from 'react-dom';
import ScrollToTopOnMount from './ScrollToTopOnMount';

window.scrollTo = jest.fn();

it('renders without crashing', () => {
  window.scrollTo.mockClear();

  const div = document.createElement('div');
  ReactDOM.render(<ScrollToTopOnMount />, div);
  ReactDOM.unmountComponentAtNode(div);
});
