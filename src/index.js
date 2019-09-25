import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';
import App from './Components/withState/App/App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <BreakpointProvider>
      <App />
    </BreakpointProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
