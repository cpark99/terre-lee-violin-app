import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import StudioDropdown from './StudioDropdown';

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
      <StudioDropdown {...props} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
