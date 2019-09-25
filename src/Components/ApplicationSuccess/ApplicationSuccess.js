import React from 'react';
import { NavLink } from 'react-router-dom';
import './ApplicationSuccess.css';

export default function ApplicationSuccess() {
  return (
    <section id="application-success" className="container flex-responsive-column">
      <h1>Application successfully submitted!</h1>
      <p>Thank you for your interest in Terre Lee's Violin Studio!</p>
      <p>You will be contacted as soon as your application is reviewed.</p>
      <NavLink to="/">
        <button id="back-to-home-page-button">Back to home</button>
      </NavLink>
    </section>
  );
}
