import React from 'react';
import { NavLink } from 'react-router-dom';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import './NotFound.css';

export default function NotFound() {
  return (
    <section id="not-found-section" className="container flex-column-center">
      <ScrollToTopOnMount />
      <h2>Page Not Found</h2>
      <p>We're sorry, this page does not exist.</p>
      <p>Please go to the main page:</p>
      <NavLink to={'/'}>https://terreleeviolin-app.netlify.com</NavLink>
    </section>
  );
}
